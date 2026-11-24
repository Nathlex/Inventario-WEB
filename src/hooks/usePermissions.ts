import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import api from '@/lib/api';

export interface Permission {
  roldashboardpathID: number;
  url: string;
  title: string;
  icon?: string;
}

export function usePermissions() {
  const { data: session, status } = useSession();
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const fetchAttemptedRef = useRef(false);

  // Usar useMemo para estabilizar el username
  const username = useMemo(() => session?.user?.preferred_username, [session?.user?.preferred_username]);

  useEffect(() => {
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    // Solo ejecutar si ya intentamos cargar
    if (fetchAttemptedRef.current) return;

    const fetchPermissions = async () => {
      if (status === 'loading') return;

      if (!username) {
        if (isMounted) {
          setLoading(false);
          fetchAttemptedRef.current = true;
        }
        return;
      }

      // Establecer un timeout para evitar que la carga se quede bloqueada indefinidamente
      timeoutId = setTimeout(() => {
        if (isMounted && loading && !fetchAttemptedRef.current) {
          setPermissions([]);
          setLoading(false);
          fetchAttemptedRef.current = true;
          setError('Tiempo de espera agotado al cargar permisos');
        }
      }, 8000); // 8 segundos de timeout

      try {
        if (isMounted) {
          setLoading(true);
          setError(null);
        }
        
        const userPermissions = await api.permission.get(username);
        
        if (isMounted) {
          setPermissions(userPermissions || []);
          fetchAttemptedRef.current = true;
        }
      } catch (err: any) {        
        if (isMounted) {
          setError(err?.message || 'Error al cargar permisos');
          setPermissions([]);
          fetchAttemptedRef.current = true;
        }
      } finally {
        clearTimeout(timeoutId);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    // Solo ejecutar si tenemos un usuario válido y no hemos intentado cargar antes
    if (username && status === 'authenticated' && !fetchAttemptedRef.current) {
      fetchPermissions();
    } else if (status === 'unauthenticated' && !fetchAttemptedRef.current) {
      setLoading(false);
      fetchAttemptedRef.current = true;
    }

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, status]);

  const hasPermission = useCallback((path: string): boolean => {
    // Fallo en cerrado: mientras carga, si hay error o sin permisos explícitos, denegar acceso
    if (loading || error || !permissions.length) {
      return false;
    }
    
    // Normalizar el path para comparación
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    return permissions.some(permission => {
      const permissionPath = permission.url.startsWith('/') ? permission.url : `/${permission.url}`;
      return permissionPath === normalizedPath;
    });
  }, [permissions, loading, error]);

  const canAccessRoute = useCallback((path: string): boolean => {
    // Rutas públicas que no requieren permisos
    const publicRoutes = ['/', '/login', '/dashboard'];
    
    if (publicRoutes.includes(path)) {
      return true;
    }

    return hasPermission(path);
  }, [hasPermission]);

  const getPermissionByPath = useCallback((path: string): Permission | undefined => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    return permissions.find(permission => {
      const permissionPath = permission.url.startsWith('/') ? permission.url : `/${permission.url}`;
      return permissionPath === normalizedPath;
    });
  }, [permissions]);

  const refreshPermissions = useCallback(() => {
    if (username) {
      setLoading(true);
      fetchAttemptedRef.current = false;
      api.permission.get(username)
        .then(perms => {
          setPermissions(perms || []);
          fetchAttemptedRef.current = true;
          setError(null);
        })
        .catch(err => {
          setError(err?.message || 'Error al actualizar permisos');
          setPermissions([]);
          fetchAttemptedRef.current = true;
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [username]);

  return {
    permissions,
    loading,
    error,
    hasPermission,
    canAccessRoute,
    getPermissionByPath,
    refreshPermissions
  };
}
