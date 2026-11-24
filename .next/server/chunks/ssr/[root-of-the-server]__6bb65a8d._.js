module.exports = {

"[externals]/next-auth/react [external] (next-auth/react, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next-auth/react", () => require("next-auth/react"));

module.exports = mod;
}}),
"[externals]/next-themes [external] (next-themes, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("next-themes");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/sonner [external] (sonner, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("sonner");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/components/ui/sonner.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "Toaster": ()=>Toaster
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/next-themes [external] (next-themes, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$themes__$5b$external$5d$__$28$next$2d$themes$2c$__esm_import$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["Toaster"], {
        theme: theme,
        className: "toaster group",
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)"
        },
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/axios [external] (axios, esm_import)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/lib/api.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth/react [external] (next-auth/react, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
// Verificar que la URL de la API esté configurada correctamente
const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:5000/";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const apiClient = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 300000
});
apiClient.interceptors.request.use(async (config)=>{
    try {
        const session = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__["getSession"])();
        const token = session?.user?.access_token;
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        } else {
            console.warn(`[API] Solicitud sin token a: ${config.url}`);
        }
        return config;
    } catch (error) {
        console.error("[API] Error en interceptor de solicitud:", error);
        return config;
    }
});
apiClient.interceptors.response.use((response)=>{
    return response;
}, (error)=>{
    // Solo manejar errores de autenticación aquí
    // Los demás errores (400, 409, 500, etc.) se manejarán en los componentes
    if (error.response && error.response.status === 401) {
        console.error("[API] Error de autenticación:", error.response);
        // Aquí podrías redirigir al login o mostrar un toast
        return Promise.reject(new Error("Sesión expirada. Vuelve a iniciar sesión."));
    }
    // Para otros errores, solo log y rechazar el error original
    if (error.response) {
        console.error(`[API] Error de API (${error.response.status}):`, error.response.data);
    } else if (error.request) {
        console.error("[API] No se recibió respuesta:", error.request);
        // En producción, crear un error más descriptivo
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    } else {
        console.error("[API] Error de Axios:", error.message);
    }
    // Asegurar que el error se propague correctamente
    return Promise.reject(error);
});
const api = {
    permission: {
        get: async (email)=>{
            try {
                const response = await apiClient.get(`/permission/${email}`);
                return response.data;
            } catch (error) {
                console.error(`[API] Error al obtener permisos para ${email}:`, error);
                throw error;
            }
        },
        getAll: async ()=>{
            const response = await apiClient.get("/permission");
            return response.data;
        },
        assign: async (data)=>{
            const response = await apiClient.post("/permission", data);
            return response.data;
        },
        delete: async (permissionId)=>{
            const response = await apiClient.delete(`/permission/${permissionId}`);
            return response.data;
        }
    },
    dashboardPath: {
        getAll: async ()=>{
            const response = await apiClient.get("/dashboard-path");
            return response.data;
        }
    },
    user: {
        verify: async (email)=>{
            try {
                const response = await apiClient.get(`/user/verify/${email}`);
                return response.data;
            } catch (error) {
                console.error(`[API] Error al verificar usuario ${email}:`, error);
                throw error;
            }
        },
        permission: async (email)=>{
            const response = await apiClient.get(`/user/permissions/${email}`);
            return response.data;
        },
        getDepartments: async ()=>{
            const response = await apiClient.get("/user/departments");
            return response.data;
        },
        getDepartmentsBySite: async (siteID)=>{
            const response = await apiClient.get(`/user/departments/site/${siteID}`);
            return response.data;
        },
        create: async (data)=>{
            try {
                // Map frontend field names to backend DTO field names
                const nameParts = data.name.trim().split(/\s+/);
                const FirstName = nameParts[0] || '';
                const LastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : nameParts[0] || '';
                const payload = {
                    Email: data.email,
                    FirstName,
                    LastName,
                    rolD: data.rolID,
                    DepartmentID: data.DepartmentID,
                    SiteID: data.SiteID
                };
                const response = await apiClient.post("/user", payload);
                return response.data;
            } catch (error) {
                // Re-lanzar el error para que sea manejado por el componente
                throw error;
            }
        },
        getAll: async ()=>{
            const response = await apiClient.get("/user");
            return response.data;
        },
        update: async (userId, data)=>{
            try {
                // Map frontend field names to backend DTO field names
                const nameParts = data.name.trim().split(/\s+/);
                const FirstName = nameParts[0] || '';
                const LastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
                const payload = {
                    Email: data.email,
                    FirstName,
                    rolD: data.rolID,
                    DepartmentID: data.DepartmentID
                };
                if (LastName) {
                    payload.LastName = LastName;
                }
                const response = await apiClient.patch(`/user/${userId}`, payload);
                return response.data;
            } catch (error) {
                // Re-lanzar el error para que sea manejado por el componente
                throw error;
            }
        },
        updateStatus: async (userId, isActive)=>{
            const response = await apiClient.patch(`/user/${userId}/updateUserStatus`, {
                isActive
            });
            return response.data;
        },
        regeneratepin: async (userId)=>{
            const response = await apiClient.patch(`/pin/${userId}/generate`);
            return response.data;
        },
        delete: async (userId)=>{
            const response = await apiClient.delete(`/user/${userId}`);
            return response.data;
        },
        search: async (params)=>{
            const queryParams = new URLSearchParams();
            if (params.q) queryParams.append('q', params.q);
            if (params.departmentID) queryParams.append('departmentID', params.departmentID.toString());
            if (params.siteID) queryParams.append('siteID', params.siteID.toString());
            const response = await apiClient.get(`/user/search?${queryParams.toString()}`);
            return response.data;
        },
        getUserProfile: async (email)=>{
            try {
                const response = await apiClient.get(`/user/profile/${email}`);
                return response.data;
            } catch (error) {
                console.error(`[API] Error al obtener perfil de usuario ${email}:`, error);
                throw error;
            }
        }
    },
    role: {
        create: async (data)=>{
            try {
                const response = await apiClient.post("/rol", data);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        getAll: async ()=>{
            const response = await apiClient.get(`/rol`);
            return response.data;
        },
        update: async (rolID, data)=>{
            try {
                const response = await apiClient.patch(`/rol/${rolID}`, data);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        updateStatus: async (rolID, isActive)=>{
            const response = await apiClient.patch(`/rol/${rolID}/updateRoleStatus`, {
                isActive
            });
            return response.data;
        },
        delete: async (rolID)=>{
            const response = await apiClient.delete(`/rol/${rolID}`);
            return response.data;
        }
    },
    // Asset Management
    asset: {
        create: async (data)=>{
            const response = await apiClient.post("/asset", data);
            return response.data;
        },
        getAll: async (params)=>{
            const response = await apiClient.get("/asset", {
                params
            });
            return response.data;
        },
        getById: async (assetID)=>{
            const response = await apiClient.get(`/asset/${assetID}`);
            return response.data;
        },
        update: async (assetID, data)=>{
            const response = await apiClient.patch(`/asset/${assetID}`, data);
            return response.data;
        },
        delete: async (assetID)=>{
            const response = await apiClient.delete(`/asset/${assetID}`);
            return response.data;
        },
        getRelationships: async (assetID)=>{
            const response = await apiClient.get(`/asset/${assetID}/relationships`);
            return response.data;
        },
        assignChild: async (parentAssetID, childAssetID)=>{
            const response = await apiClient.patch(`/asset/${parentAssetID}/assign`, {
                childAssetID
            });
            return response.data;
        },
        unassignChild: async (parentAssetID, childAssetID)=>{
            const response = await apiClient.patch(`/asset/${parentAssetID}/unassign`, {
                childAssetID
            });
            return response.data;
        },
        assignParent: async (childAssetID, parentAssetID)=>{
            const response = await apiClient.patch(`/asset/${childAssetID}/assign-parent`, {
                parentAssetID
            });
            return response.data;
        },
        unassignParent: async (childAssetID)=>{
            const response = await apiClient.patch(`/asset/${childAssetID}/unassign-parent`, {});
            return response.data;
        }
    },
    // Movimientos de activos
    movement: {
        create: async (data)=>{
            const response = await apiClient.post("/movement", data);
            return response.data;
        },
        getAll: async (params)=>{
            const response = await apiClient.get("/movement", {
                params
            });
            return response.data;
        },
        getHistory: async (params)=>{
            const response = await apiClient.get("/movement/history", {
                params
            });
            const rawData = response.data;
            const items = Array.isArray(rawData) ? rawData : rawData?.data || [];
            const mapped = items.map((r)=>({
                    ...r,
                    performedBy: r.performedBy || r.responsible || r.createdBy || null
                }));
            return mapped;
        },
        getByAssetId: async (assetID)=>{
            const response = await apiClient.get(`/movement/asset/${assetID}`);
            return response.data;
        },
        update: async (movementID, data)=>{
            const response = await apiClient.patch(`/movement/${movementID}`, data);
            return response.data;
        },
        createBulk: async (data)=>{
            const response = await apiClient.post("/movement/bulk", data);
            return response.data;
        }
    },
    // Catálogos para activos
    productType: {
        getAll: async ()=>{
            const response = await apiClient.get("/product-type");
            return response.data;
        },
        getByGroup: async (group)=>{
            const response = await apiClient.get(`/product-type/group/${group}`);
            return response.data;
        },
        getAvailableGroups: async ()=>{
            const response = await apiClient.get("/product-type/available-groups");
            return response.data;
        },
        create: async (data)=>{
            const response = await apiClient.post("/product-type", data);
            return response.data;
        },
        delete: async (productTypeID)=>{
            const response = await apiClient.delete(`/product-type/${productTypeID}`);
            return response.data;
        }
    },
    vendor: {
        getAll: async ()=>{
            const response = await apiClient.get("/vendor");
            return response.data;
        },
        create: async (data)=>{
            const response = await apiClient.post("/vendor", data);
            return response.data;
        }
    },
    assetState: {
        getAll: async ()=>{
            const response = await apiClient.get("/asset-state");
            return response.data;
        }
    },
    company: {
        getAll: async ()=>{
            const response = await apiClient.get("/company");
            return response.data;
        }
    },
    site: {
        getAll: async ()=>{
            const response = await apiClient.get("/site");
            return response.data;
        },
        getByCompany: async (companyID)=>{
            const response = await apiClient.get(`/site/company/${companyID}`);
            return response.data;
        }
    },
    // Reportes y exportaciones
    report: {
        getDeliveryData: async (assetID)=>{
            const response = await apiClient.get(`/report/delivery/${assetID}/data`);
            return response.data;
        },
        downloadDeliveryPdf: async (assetID, data)=>{
            const response = await apiClient.post(`/report/delivery/${assetID}/pdf`, data, {
                responseType: 'blob'
            });
            return response.data;
        },
        downloadEntregaMultiItemPdf: async (data)=>{
            const response = await apiClient.post('/report/entrega-multiitem/pdf', data, {
                responseType: 'blob'
            });
            return response.data;
        },
        importCsv: async (file)=>{
            const formData = new FormData();
            formData.append('file', file);
            const response = await apiClient.post('/report/import/csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        },
        downloadAssetsExcel: async (filters)=>{
            const params = new URLSearchParams();
            if (filters?.group) params.append('group', filters.group);
            if (filters?.companyID) params.append('companyID', filters.companyID.toString());
            if (filters?.assetState) params.append('assetState', filters.assetState.toString());
            const response = await apiClient.get(`/report/assets/excel?${params.toString()}`, {
                responseType: 'blob'
            });
            return response.data;
        },
        downloadAssetsCsv: async (filters)=>{
            const params = new URLSearchParams();
            if (filters?.group) params.append('group', filters.group);
            if (filters?.companyID) params.append('companyID', filters.companyID.toString());
            if (filters?.assetState) params.append('assetState', filters.assetState.toString());
            const response = await apiClient.get(`/report/assets/csv?${params.toString()}`, {
                responseType: 'blob'
            });
            return response.data;
        },
        downloadHistoryExcel: async (assetId)=>{
            const params = assetId ? `?assetId=${assetId}` : '';
            const response = await apiClient.get(`/report/history/excel${params}`, {
                responseType: 'blob'
            });
            return response.data;
        },
        downloadUserAssetsExcel: async (userId)=>{
            const response = await apiClient.get(`/report/user/${userId}/assets/excel`, {
                responseType: 'blob'
            });
            return response.data;
        }
    },
    // Estadísticas del dashboard
    statistics: {
        getDashboard: async (filters)=>{
            const params = new URLSearchParams();
            if (filters?.siteID) params.append('siteID', filters.siteID.toString());
            if (filters?.group) params.append('group', filters.group);
            if (filters?.stateID) params.append('stateID', filters.stateID.toString());
            const qs = params.toString();
            const response = await apiClient.get(`/statistics/dashboard${qs ? `?${qs}` : ''}`);
            return response.data;
        }
    },
    // Jerarquía de aprobaciones
    approvalHierarchy: {
        getHierarchy: async (buyerID, company)=>{
            const params = new URLSearchParams();
            params.append('buyerID', buyerID);
            if (company) params.append('company', company);
            const response = await apiClient.get(`/user/approval-hierarchy?${params.toString()}`);
            return response.data;
        }
    }
};
const __TURBOPACK__default__export__ = api;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/hooks/usePermissions.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "usePermissions": ()=>usePermissions
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth/react [external] (next-auth/react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function usePermissions() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__["useSession"])();
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const fetchAttemptedRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(false);
    // Usar useMemo para estabilizar el username
    const username = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>session?.user?.preferred_username, [
        session?.user?.preferred_username
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let isMounted = true;
        let timeoutId;
        // Solo ejecutar si ya intentamos cargar
        if (fetchAttemptedRef.current) return;
        const fetchPermissions = async ()=>{
            if (status === 'loading') return;
            if (!username) {
                if (isMounted) {
                    setLoading(false);
                    fetchAttemptedRef.current = true;
                }
                return;
            }
            // Establecer un timeout para evitar que la carga se quede bloqueada indefinidamente
            timeoutId = setTimeout(()=>{
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
                const userPermissions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].permission.get(username);
                if (isMounted) {
                    setPermissions(userPermissions || []);
                    fetchAttemptedRef.current = true;
                }
            } catch (err) {
                if (isMounted) {
                    setError(err?.message || 'Error al cargar permisos');
                    setPermissions([]);
                    fetchAttemptedRef.current = true;
                }
            } finally{
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
        return ()=>{
            isMounted = false;
            clearTimeout(timeoutId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        username,
        status
    ]);
    const hasPermission = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((path)=>{
        // Fallo en cerrado: mientras carga, si hay error o sin permisos explícitos, denegar acceso
        if (loading || error || !permissions.length) {
            return false;
        }
        // Normalizar el path para comparación
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return permissions.some((permission)=>{
            const permissionPath = permission.url.startsWith('/') ? permission.url : `/${permission.url}`;
            return permissionPath === normalizedPath;
        });
    }, [
        permissions,
        loading,
        error
    ]);
    const canAccessRoute = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((path)=>{
        // Rutas públicas que no requieren permisos
        const publicRoutes = [
            '/',
            '/login',
            '/dashboard'
        ];
        if (publicRoutes.includes(path)) {
            return true;
        }
        return hasPermission(path);
    }, [
        hasPermission
    ]);
    const getPermissionByPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((path)=>{
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return permissions.find((permission)=>{
            const permissionPath = permission.url.startsWith('/') ? permission.url : `/${permission.url}`;
            return permissionPath === normalizedPath;
        });
    }, [
        permissions
    ]);
    const refreshPermissions = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        if (username) {
            setLoading(true);
            fetchAttemptedRef.current = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].permission.get(username).then((perms)=>{
                setPermissions(perms || []);
                fetchAttemptedRef.current = true;
                setError(null);
            }).catch((err)=>{
                setError(err?.message || 'Error al actualizar permisos');
                setPermissions([]);
                fetchAttemptedRef.current = true;
            }).finally(()=>{
                setLoading(false);
            });
        }
    }, [
        username
    ]);
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/UserVerification.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>UserVerification
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth/react [external] (next-auth/react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePermissions.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
function UserVerification({ children }) {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__["useSession"])();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { permissions, loading: permissionsLoading, error: permissionsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["usePermissions"])();
    const [isVerified, setIsVerified] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [timeoutReached, setTimeoutReached] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Función para verificar al usuario
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const verifyUser = async ()=>{
            if (status === 'loading') return;
            console.log('[UserVerification] Session status:', status);
            console.log('[UserVerification] User:', session?.user?.preferred_username);
            if (!session?.user?.preferred_username) {
                console.log('[UserVerification] No username found in session');
                setIsLoading(false);
                return;
            }
            try {
                console.log('[UserVerification] Verifying user:', session.user.preferred_username);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].user.verify(session.user.preferred_username);
                console.log('[UserVerification] API response:', response);
                if (response.success) {
                    console.log('[UserVerification] User verified:', response.data);
                    setIsVerified(true);
                } else {
                    // Handle specific error types with custom messages
                    let errorMessage = 'Error al verificar usuario';
                    switch(response.errorType){
                        case 'USER_NOT_FOUND':
                            errorMessage = 'Tu cuenta no está registrada en el sistema. Contacta al administrador.';
                            break;
                        case 'USER_INACTIVE':
                            errorMessage = 'Tu cuenta está inactiva. Contacta al administrador.';
                            break;
                        case 'NO_ROLE_ASSIGNED':
                            errorMessage = 'Tu cuenta no tiene un rol asignado. Contacta al administrador para configurar tus permisos.';
                            break;
                        case 'ROLE_NOT_FOUND':
                            errorMessage = 'Tu rol no está correctamente configurado. Contacta al administrador.';
                            break;
                        case 'ROLE_INACTIVE':
                            errorMessage = 'Tu rol está inactivo. Contacta al administrador.';
                            break;
                        case 'NO_PERMISSIONS':
                            errorMessage = 'Tu cuenta no tiene permisos configurados. Contacta al administrador para asignar accesos.';
                            break;
                        default:
                            errorMessage = response.message || 'Error al verificar usuario. Contacta al administrador.';
                    }
                    console.error('[UserVerification] Verification failed:', {
                        errorType: response.errorType,
                        message: errorMessage
                    });
                    setError(errorMessage);
                    // Always block access on verification failure
                    alert(errorMessage);
                    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__["signOut"])({
                        callbackUrl: '/'
                    });
                }
            } catch (error) {
                console.error('[UserVerification] Error verifying user:', error);
                const errorMessage = 'Error del sistema al verificar usuario. Contacta al administrador.';
                setError(errorMessage);
                // Block access on system error
                alert(errorMessage);
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__["signOut"])({
                    callbackUrl: '/'
                });
            } finally{
                setIsLoading(false);
            }
        };
        // Solo ejecutar si tenemos un usuario válido y autenticado
        if (session?.user?.preferred_username && status === 'authenticated') {
            verifyUser();
        } else if (status === 'unauthenticated') {
            console.log('[UserVerification] User is not authenticated');
            setIsLoading(false);
        }
    }, [
        session?.user?.preferred_username,
        status
    ]);
    // Timeout para evitar que los usuarios se queden bloqueados indefinidamente
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const timeoutId = setTimeout(()=>{
            if ((status === 'loading' || isLoading || permissionsLoading) && !timeoutReached) {
                console.log('[UserVerification] Timeout reached, allowing access to avoid blocking users');
                setTimeoutReached(true);
                setIsLoading(false);
                setIsVerified(true);
            }
        }, 10000); // 10 segundos de timeout
        return ()=>clearTimeout(timeoutId);
    }, [
        status,
        isLoading,
        permissionsLoading,
        timeoutReached
    ]);
    // Si hay un timeout, mostrar un mensaje pero permitir continuar
    if (timeoutReached) {
        console.log('[UserVerification] Rendering children after timeout');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-md max-w-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5 text-yellow-500",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UserVerification.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UserVerification.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserVerification.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "ml-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Se ha detectado una respuesta lenta. Algunas funcionalidades podrían estar limitadas."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UserVerification.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UserVerification.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/UserVerification.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    }
    if (status === 'loading' || isLoading || permissionsLoading) {
        console.log('[UserVerification] Loading state. Status:', status, 'IsLoading:', isLoading, 'PermissionsLoading:', permissionsLoading);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Verificando usuario y permisos..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    permissionsLoading && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-2",
                        children: "Cargando permisos..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this),
                    isLoading && !permissionsLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-2",
                        children: "Verificando usuario..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this),
                    status === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-2",
                        children: "Cargando sesión..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 150,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserVerification.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/UserVerification.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    if (!session) {
        console.log('[UserVerification] No session, rendering children');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    if (!isVerified && !timeoutReached) {
        console.log('[UserVerification] User not verified');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-6xl mb-4",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-800 mb-2",
                        children: "Error de verificación"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-red-600 mb-4",
                        children: error || 'No se pudo verificar tu acceso al sistema.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    permissionsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-500 mt-2",
                        children: permissionsError
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__["signOut"])({
                                callbackUrl: '/'
                            }),
                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                        children: "Volver al inicio"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UserVerification.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/UserVerification.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this);
    }
    console.log('[UserVerification] User verified or timeout reached, rendering children');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>App
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next-auth/react [external] (next-auth/react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sonner.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserVerification$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserVerification.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserVerification$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserVerification$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const env = ("TURBOPACK compile-time value", "development");
const authBasePath = ("TURBOPACK compile-time value", "/inventarioit-staging/api/auth");
const BASE_URL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "/inventarioit-staging/api/auth";
// Configuración en tiempo de ejecución para ser accesible en el cliente
function getRuntimeConfig() {
    return {
        appVersion: ("TURBOPACK compile-time value", "1.0.0") || 'v0.0.0'
    };
}
function App({ Component, pageProps }) {
    const { session, ...rest } = pageProps;
    // Inyectar la configuración en tiempo de ejecución en pageProps
    const pagePropsWithConfig = {
        ...rest,
        runtimeConfig: getRuntimeConfig(),
        appVersion: ("TURBOPACK compile-time value", "1.0.0") || 'v0.0.0'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$29$__["SessionProvider"], {
        session: session,
        basePath: BASE_URL,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserVerification$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                    ...pagePropsWithConfig
                }, void 0, false, {
                    fileName: "[project]/src/pages/_app.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/_app.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6bb65a8d._.js.map