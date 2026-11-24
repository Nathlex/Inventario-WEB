(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/api.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [client] (ecmascript)");
;
;
// Verificar que la URL de la API esté configurada correctamente
const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:5000/";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 300000
});
apiClient.interceptors.request.use(async (config)=>{
    try {
        var _this;
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getSession"])();
        const token = (_this = session === null || session === void 0 ? void 0 : session.user) === null || _this === void 0 ? void 0 : _this.access_token;
        if (token) {
            config.headers["Authorization"] = "Bearer ".concat(token);
        } else {
            console.warn("[API] Solicitud sin token a: ".concat(config.url));
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
        console.error("[API] Error de API (".concat(error.response.status, "):"), error.response.data);
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
                const response = await apiClient.get("/permission/".concat(email));
                return response.data;
            } catch (error) {
                console.error("[API] Error al obtener permisos para ".concat(email, ":"), error);
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
            const response = await apiClient.delete("/permission/".concat(permissionId));
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
                const response = await apiClient.get("/user/verify/".concat(email));
                return response.data;
            } catch (error) {
                console.error("[API] Error al verificar usuario ".concat(email, ":"), error);
                throw error;
            }
        },
        permission: async (email)=>{
            const response = await apiClient.get("/user/permissions/".concat(email));
            return response.data;
        },
        getDepartments: async ()=>{
            const response = await apiClient.get("/user/departments");
            return response.data;
        },
        getDepartmentsBySite: async (siteID)=>{
            const response = await apiClient.get("/user/departments/site/".concat(siteID));
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
                const response = await apiClient.patch("/user/".concat(userId), payload);
                return response.data;
            } catch (error) {
                // Re-lanzar el error para que sea manejado por el componente
                throw error;
            }
        },
        updateStatus: async (userId, isActive)=>{
            const response = await apiClient.patch("/user/".concat(userId, "/updateUserStatus"), {
                isActive
            });
            return response.data;
        },
        regeneratepin: async (userId)=>{
            const response = await apiClient.patch("/pin/".concat(userId, "/generate"));
            return response.data;
        },
        delete: async (userId)=>{
            const response = await apiClient.delete("/user/".concat(userId));
            return response.data;
        },
        search: async (params)=>{
            const queryParams = new URLSearchParams();
            if (params.q) queryParams.append('q', params.q);
            if (params.departmentID) queryParams.append('departmentID', params.departmentID.toString());
            if (params.siteID) queryParams.append('siteID', params.siteID.toString());
            const response = await apiClient.get("/user/search?".concat(queryParams.toString()));
            return response.data;
        },
        getUserProfile: async (email)=>{
            try {
                const response = await apiClient.get("/user/profile/".concat(email));
                return response.data;
            } catch (error) {
                console.error("[API] Error al obtener perfil de usuario ".concat(email, ":"), error);
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
            const response = await apiClient.get("/rol");
            return response.data;
        },
        update: async (rolID, data)=>{
            try {
                const response = await apiClient.patch("/rol/".concat(rolID), data);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        updateStatus: async (rolID, isActive)=>{
            const response = await apiClient.patch("/rol/".concat(rolID, "/updateRoleStatus"), {
                isActive
            });
            return response.data;
        },
        delete: async (rolID)=>{
            const response = await apiClient.delete("/rol/".concat(rolID));
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
            const response = await apiClient.get("/asset/".concat(assetID));
            return response.data;
        },
        update: async (assetID, data)=>{
            const response = await apiClient.patch("/asset/".concat(assetID), data);
            return response.data;
        },
        delete: async (assetID)=>{
            const response = await apiClient.delete("/asset/".concat(assetID));
            return response.data;
        },
        getRelationships: async (assetID)=>{
            const response = await apiClient.get("/asset/".concat(assetID, "/relationships"));
            return response.data;
        },
        assignChild: async (parentAssetID, childAssetID)=>{
            const response = await apiClient.patch("/asset/".concat(parentAssetID, "/assign"), {
                childAssetID
            });
            return response.data;
        },
        unassignChild: async (parentAssetID, childAssetID)=>{
            const response = await apiClient.patch("/asset/".concat(parentAssetID, "/unassign"), {
                childAssetID
            });
            return response.data;
        },
        assignParent: async (childAssetID, parentAssetID)=>{
            const response = await apiClient.patch("/asset/".concat(childAssetID, "/assign-parent"), {
                parentAssetID
            });
            return response.data;
        },
        unassignParent: async (childAssetID)=>{
            const response = await apiClient.patch("/asset/".concat(childAssetID, "/unassign-parent"), {});
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
            const items = Array.isArray(rawData) ? rawData : (rawData === null || rawData === void 0 ? void 0 : rawData.data) || [];
            const mapped = items.map((r)=>({
                    ...r,
                    performedBy: r.performedBy || r.responsible || r.createdBy || null
                }));
            return mapped;
        },
        getByAssetId: async (assetID)=>{
            const response = await apiClient.get("/movement/asset/".concat(assetID));
            return response.data;
        },
        update: async (movementID, data)=>{
            const response = await apiClient.patch("/movement/".concat(movementID), data);
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
            const response = await apiClient.get("/product-type/group/".concat(group));
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
            const response = await apiClient.delete("/product-type/".concat(productTypeID));
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
            const response = await apiClient.get("/site/company/".concat(companyID));
            return response.data;
        }
    },
    // Reportes y exportaciones
    report: {
        getDeliveryData: async (assetID)=>{
            const response = await apiClient.get("/report/delivery/".concat(assetID, "/data"));
            return response.data;
        },
        downloadDeliveryPdf: async (assetID, data)=>{
            const response = await apiClient.post("/report/delivery/".concat(assetID, "/pdf"), data, {
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
            if (filters === null || filters === void 0 ? void 0 : filters.group) params.append('group', filters.group);
            if (filters === null || filters === void 0 ? void 0 : filters.companyID) params.append('companyID', filters.companyID.toString());
            if (filters === null || filters === void 0 ? void 0 : filters.assetState) params.append('assetState', filters.assetState.toString());
            const response = await apiClient.get("/report/assets/excel?".concat(params.toString()), {
                responseType: 'blob'
            });
            return response.data;
        },
        downloadAssetsCsv: async (filters)=>{
            const params = new URLSearchParams();
            if (filters === null || filters === void 0 ? void 0 : filters.group) params.append('group', filters.group);
            if (filters === null || filters === void 0 ? void 0 : filters.companyID) params.append('companyID', filters.companyID.toString());
            if (filters === null || filters === void 0 ? void 0 : filters.assetState) params.append('assetState', filters.assetState.toString());
            const response = await apiClient.get("/report/assets/csv?".concat(params.toString()), {
                responseType: 'blob'
            });
            return response.data;
        },
        downloadHistoryExcel: async (assetId)=>{
            const params = assetId ? "?assetId=".concat(assetId) : '';
            const response = await apiClient.get("/report/history/excel".concat(params), {
                responseType: 'blob'
            });
            return response.data;
        },
        downloadUserAssetsExcel: async (userId)=>{
            const response = await apiClient.get("/report/user/".concat(userId, "/assets/excel"), {
                responseType: 'blob'
            });
            return response.data;
        }
    },
    // Estadísticas del dashboard
    statistics: {
        getDashboard: async (filters)=>{
            const params = new URLSearchParams();
            if (filters === null || filters === void 0 ? void 0 : filters.siteID) params.append('siteID', filters.siteID.toString());
            if (filters === null || filters === void 0 ? void 0 : filters.group) params.append('group', filters.group);
            if (filters === null || filters === void 0 ? void 0 : filters.stateID) params.append('stateID', filters.stateID.toString());
            const qs = params.toString();
            const response = await apiClient.get("/statistics/dashboard".concat(qs ? "?".concat(qs) : ''));
            return response.data;
        }
    },
    // Jerarquía de aprobaciones
    approvalHierarchy: {
        getHierarchy: async (buyerID, company)=>{
            const params = new URLSearchParams();
            params.append('buyerID', buyerID);
            if (company) params.append('company', company);
            const response = await apiClient.get("/user/approval-hierarchy?".concat(params.toString()));
            return response.data;
        }
    }
};
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": ()=>cn,
    "getInitials": ()=>getInitials
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const getInitials = (fullName)=>{
    // Validar que el input sea string y no esté vacío
    if (!fullName || typeof fullName !== 'string') {
        return '';
    }
    // Eliminar espacios extras y dividir por espacios
    return fullName.trim().split(/\s+/).map((name)=>name.charAt(0).toUpperCase()).join('');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/usePermissions.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePermissions": ()=>usePermissions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function usePermissions() {
    var _session_user;
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchAttemptedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Usar useMemo para estabilizar el username
    const username = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePermissions.useMemo[username]": ()=>{
            var _session_user;
            return session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.preferred_username;
        }
    }["usePermissions.useMemo[username]"], [
        session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.preferred_username
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePermissions.useEffect": ()=>{
            let isMounted = true;
            let timeoutId;
            // Solo ejecutar si ya intentamos cargar
            if (fetchAttemptedRef.current) return;
            const fetchPermissions = {
                "usePermissions.useEffect.fetchPermissions": async ()=>{
                    if (status === 'loading') return;
                    if (!username) {
                        if (isMounted) {
                            setLoading(false);
                            fetchAttemptedRef.current = true;
                        }
                        return;
                    }
                    // Establecer un timeout para evitar que la carga se quede bloqueada indefinidamente
                    timeoutId = setTimeout({
                        "usePermissions.useEffect.fetchPermissions": ()=>{
                            if (isMounted && loading && !fetchAttemptedRef.current) {
                                setPermissions([]);
                                setLoading(false);
                                fetchAttemptedRef.current = true;
                                setError('Tiempo de espera agotado al cargar permisos');
                            }
                        }
                    }["usePermissions.useEffect.fetchPermissions"], 8000); // 8 segundos de timeout
                    try {
                        if (isMounted) {
                            setLoading(true);
                            setError(null);
                        }
                        const userPermissions = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].permission.get(username);
                        if (isMounted) {
                            setPermissions(userPermissions || []);
                            fetchAttemptedRef.current = true;
                        }
                    } catch (err) {
                        if (isMounted) {
                            setError((err === null || err === void 0 ? void 0 : err.message) || 'Error al cargar permisos');
                            setPermissions([]);
                            fetchAttemptedRef.current = true;
                        }
                    } finally{
                        clearTimeout(timeoutId);
                        if (isMounted) {
                            setLoading(false);
                        }
                    }
                }
            }["usePermissions.useEffect.fetchPermissions"];
            // Solo ejecutar si tenemos un usuario válido y no hemos intentado cargar antes
            if (username && status === 'authenticated' && !fetchAttemptedRef.current) {
                fetchPermissions();
            } else if (status === 'unauthenticated' && !fetchAttemptedRef.current) {
                setLoading(false);
                fetchAttemptedRef.current = true;
            }
            return ({
                "usePermissions.useEffect": ()=>{
                    isMounted = false;
                    clearTimeout(timeoutId);
                }
            })["usePermissions.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePermissions.useEffect"], [
        username,
        status
    ]);
    const hasPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePermissions.useCallback[hasPermission]": (path)=>{
            // Fallo en cerrado: mientras carga, si hay error o sin permisos explícitos, denegar acceso
            if (loading || error || !permissions.length) {
                return false;
            }
            // Normalizar el path para comparación
            const normalizedPath = path.startsWith('/') ? path : "/".concat(path);
            return permissions.some({
                "usePermissions.useCallback[hasPermission]": (permission)=>{
                    const permissionPath = permission.url.startsWith('/') ? permission.url : "/".concat(permission.url);
                    return permissionPath === normalizedPath;
                }
            }["usePermissions.useCallback[hasPermission]"]);
        }
    }["usePermissions.useCallback[hasPermission]"], [
        permissions,
        loading,
        error
    ]);
    const canAccessRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePermissions.useCallback[canAccessRoute]": (path)=>{
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
        }
    }["usePermissions.useCallback[canAccessRoute]"], [
        hasPermission
    ]);
    const getPermissionByPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePermissions.useCallback[getPermissionByPath]": (path)=>{
            const normalizedPath = path.startsWith('/') ? path : "/".concat(path);
            return permissions.find({
                "usePermissions.useCallback[getPermissionByPath]": (permission)=>{
                    const permissionPath = permission.url.startsWith('/') ? permission.url : "/".concat(permission.url);
                    return permissionPath === normalizedPath;
                }
            }["usePermissions.useCallback[getPermissionByPath]"]);
        }
    }["usePermissions.useCallback[getPermissionByPath]"], [
        permissions
    ]);
    const refreshPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePermissions.useCallback[refreshPermissions]": ()=>{
            if (username) {
                setLoading(true);
                fetchAttemptedRef.current = false;
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].permission.get(username).then({
                    "usePermissions.useCallback[refreshPermissions]": (perms)=>{
                        setPermissions(perms || []);
                        fetchAttemptedRef.current = true;
                        setError(null);
                    }
                }["usePermissions.useCallback[refreshPermissions]"]).catch({
                    "usePermissions.useCallback[refreshPermissions]": (err)=>{
                        setError((err === null || err === void 0 ? void 0 : err.message) || 'Error al actualizar permisos');
                        setPermissions([]);
                        fetchAttemptedRef.current = true;
                    }
                }["usePermissions.useCallback[refreshPermissions]"]).finally({
                    "usePermissions.useCallback[refreshPermissions]": ()=>{
                        setLoading(false);
                    }
                }["usePermissions.useCallback[refreshPermissions]"]);
            }
        }
    }["usePermissions.useCallback[refreshPermissions]"], [
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
_s(usePermissions, "+81Ho1yAvEgiMVWRVtLjJpC/SQA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-mobile.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useIsMobile": ()=>useIsMobile
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    _s();
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useIsMobile.useEffect": ()=>{
            const mql = window.matchMedia("(max-width: ".concat(MOBILE_BREAKPOINT - 1, "px)"));
            const onChange = {
                "useIsMobile.useEffect.onChange": ()=>{
                    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
                }
            }["useIsMobile.useEffect.onChange"];
            mql.addEventListener("change", onChange);
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
            return ({
                "useIsMobile.useEffect": ()=>mql.removeEventListener("change", onChange)
            })["useIsMobile.useEffect"];
        }
    }["useIsMobile.useEffect"], []);
    return !!isMobile;
}
_s(useIsMobile, "D6B2cPXNCaIbeOx+abFr1uxLRM0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useNotifications.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useNotifications": ()=>useNotifications
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [client] (ecmascript)");
;
const useNotifications = ()=>{
    const showSuccess = (message)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success(message, {
            duration: 4000,
            position: "top-right"
        });
    };
    const showError = (message)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error(message, {
            duration: 5000,
            position: "top-right"
        });
    };
    const showWarning = (message)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].warning(message, {
            duration: 4000,
            position: "top-right"
        });
    };
    const showInfo = (message)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].info(message, {
            duration: 4000,
            position: "top-right"
        });
    };
    return {
        showSuccess,
        showError,
        showWarning,
        showInfo
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/altas/index.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Altas
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MainLayout.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePermissions.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateAssetModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CreateAssetModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditAssetModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EditAssetModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetDetailModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AssetDetailModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetAssignmentModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AssetAssignmentModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryReportModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeliveryReportModal.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OmniboxFilter$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OmniboxFilter.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ASSET_GROUPS = [
    "Equipo",
    "Accesorio",
    "Componente",
    "Otro"
];
const INITIAL_COL_WIDTHS = {
    checkbox: 36,
    actions: 36,
    name: 180,
    company: 140,
    site: 140,
    department: 160,
    user: 150,
    type: 130,
    brand: 130,
    model: 140,
    serial: 150,
    state: 110
};
function Altas() {
    _s();
    const { loading: permissionsLoading, hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["usePermissions"])();
    const isConsultor = permissionsLoading || !hasPermission("/movimientos");
    // Estados para los catálogos
    const [productTypes, setProductTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vendors, setVendors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [assetStates, setAssetStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sites, setSites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Estados para los activos
    const [assets, setAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filteredAssets, setFilteredAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingAsset, setEditingAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [detailAssetID, setDetailAssetID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAssignmentModalOpen, setIsAssignmentModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [assignmentAssetID, setAssignmentAssetID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeliveryModalOpen, setIsDeliveryModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deliveryAssetID, setDeliveryAssetID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estados para filtros y selección
    const [selectedAssets, setSelectedAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterChips, setFilterChips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearchPinned, setIsSearchPinned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Estados para paginación y vista
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(20);
    const [totalAssets, setTotalAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Column resize state
    const [colWidths, setColWidths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_COL_WIDTHS);
    const resizingCol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const resizeStartW = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const onResizeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Altas.useCallback[onResizeStart]": (col)=>({
                "Altas.useCallback[onResizeStart]": (e)=>{
                    e.preventDefault();
                    resizingCol.current = col;
                    resizeStartX.current = e.clientX;
                    resizeStartW.current = colWidths[col];
                    const onMouseMove = {
                        "Altas.useCallback[onResizeStart].onMouseMove": (ev)=>{
                            if (!resizingCol.current) return;
                            const diff = ev.clientX - resizeStartX.current;
                            const newW = Math.min(400, Math.max(50, resizeStartW.current + diff));
                            setColWidths({
                                "Altas.useCallback[onResizeStart].onMouseMove": (prev)=>({
                                        ...prev,
                                        [resizingCol.current]: newW
                                    })
                            }["Altas.useCallback[onResizeStart].onMouseMove"]);
                        }
                    }["Altas.useCallback[onResizeStart].onMouseMove"];
                    const onMouseUp = {
                        "Altas.useCallback[onResizeStart].onMouseUp": ()=>{
                            resizingCol.current = null;
                            document.removeEventListener("mousemove", onMouseMove);
                            document.removeEventListener("mouseup", onMouseUp);
                        }
                    }["Altas.useCallback[onResizeStart].onMouseUp"];
                    document.addEventListener("mousemove", onMouseMove);
                    document.addEventListener("mouseup", onMouseUp);
                }
            })["Altas.useCallback[onResizeStart]"]
    }["Altas.useCallback[onResizeStart]"], [
        colWidths
    ]);
    // Cargar catálogos al montar el componente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Altas.useEffect": ()=>{
            const loadCatalogs = {
                "Altas.useEffect.loadCatalogs": async ()=>{
                    try {
                        const [productTypesRes, vendorsRes, assetStatesRes, companiesRes, sitesRes] = await Promise.all([
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].productType.getAll().catch({
                                "Altas.useEffect.loadCatalogs": ()=>[]
                            }["Altas.useEffect.loadCatalogs"]),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].vendor.getAll().catch({
                                "Altas.useEffect.loadCatalogs": ()=>[]
                            }["Altas.useEffect.loadCatalogs"]),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].assetState.getAll().catch({
                                "Altas.useEffect.loadCatalogs": ()=>[]
                            }["Altas.useEffect.loadCatalogs"]),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].company.getAll().catch({
                                "Altas.useEffect.loadCatalogs": ()=>[]
                            }["Altas.useEffect.loadCatalogs"]),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].site.getAll().catch({
                                "Altas.useEffect.loadCatalogs": ()=>[]
                            }["Altas.useEffect.loadCatalogs"])
                        ]);
                        setProductTypes(productTypesRes);
                        setVendors(vendorsRes);
                        setAssetStates(assetStatesRes);
                        setCompanies(companiesRes);
                        setSites(sitesRes);
                    } catch (error) {
                        console.error("Error loading catalogs:", error);
                    }
                }
            }["Altas.useEffect.loadCatalogs"];
            loadCatalogs();
        }
    }["Altas.useEffect"], []);
    // Cargar activos paginados desde el servidor
    const loadAssets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Altas.useCallback[loadAssets]": async ()=>{
            try {
                var _res_meta;
                setIsLoading(true);
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].asset.getAll({
                    page: currentPage,
                    limit: pageSize,
                    search: searchQuery.trim() || undefined
                });
                const list = (res === null || res === void 0 ? void 0 : res.data) || [];
                const total = (res === null || res === void 0 ? void 0 : (_res_meta = res.meta) === null || _res_meta === void 0 ? void 0 : _res_meta.total) || 0;
                setAssets(list);
                setFilteredAssets(list);
                setTotalAssets(total);
            } catch (error) {
                console.error("Error fetching assets:", error);
                setAssets([]);
                setFilteredAssets([]);
                setTotalAssets(0);
            } finally{
                setIsLoading(false);
            }
        }
    }["Altas.useCallback[loadAssets]"], [
        currentPage,
        pageSize,
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Altas.useEffect": ()=>{
            loadAssets();
        }
    }["Altas.useEffect"], [
        loadAssets
    ]);
    // Obtener usuarios únicos de los activos
    const uniqueUsers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueUsers]": ()=>{
            const userMap = new Map();
            assets.forEach({
                "Altas.useMemo[uniqueUsers]": (asset)=>{
                    if (asset.user && asset.user.userID && asset.user.name) {
                        userMap.set(asset.user.userID, {
                            userID: asset.user.userID,
                            name: asset.user.name
                        });
                    }
                }
            }["Altas.useMemo[uniqueUsers]"]);
            return Array.from(userMap.values()).sort({
                "Altas.useMemo[uniqueUsers]": (a, b)=>a.name.localeCompare(b.name)
            }["Altas.useMemo[uniqueUsers]"]);
        }
    }["Altas.useMemo[uniqueUsers]"], [
        assets
    ]);
    // Tipos de activo disponibles para filtros
    const filteredProductTypes = productTypes;
    // Extraer valores únicos de componentes desde los activos
    const uniqueRAM = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueRAM]": ()=>{
            const values = new Set();
            assets.forEach({
                "Altas.useMemo[uniqueRAM]": (a)=>{
                    var _a_assetDetail;
                    if ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.ram) values.add(a.assetDetail.ram);
                }
            }["Altas.useMemo[uniqueRAM]"]);
            return Array.from(values).sort();
        }
    }["Altas.useMemo[uniqueRAM]"], [
        assets
    ]);
    const uniqueHddCapacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueHddCapacity]": ()=>{
            const values = new Set();
            assets.forEach({
                "Altas.useMemo[uniqueHddCapacity]": (a)=>{
                    var _a_assetDetail;
                    if ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.hddCapacity) values.add(a.assetDetail.hddCapacity);
                }
            }["Altas.useMemo[uniqueHddCapacity]"]);
            return Array.from(values).sort();
        }
    }["Altas.useMemo[uniqueHddCapacity]"], [
        assets
    ]);
    const uniqueHddModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueHddModel]": ()=>{
            const values = new Set();
            assets.forEach({
                "Altas.useMemo[uniqueHddModel]": (a)=>{
                    var _a_assetDetail;
                    if ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.hddModel) values.add(a.assetDetail.hddModel);
                }
            }["Altas.useMemo[uniqueHddModel]"]);
            return Array.from(values).sort();
        }
    }["Altas.useMemo[uniqueHddModel]"], [
        assets
    ]);
    const uniqueOS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueOS]": ()=>{
            const values = new Set();
            assets.forEach({
                "Altas.useMemo[uniqueOS]": (a)=>{
                    var _a_assetDetail;
                    if ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.operatingSystem) values.add(a.assetDetail.operatingSystem);
                }
            }["Altas.useMemo[uniqueOS]"]);
            return Array.from(values).sort();
        }
    }["Altas.useMemo[uniqueOS]"], [
        assets
    ]);
    const uniqueMemoryType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueMemoryType]": ()=>{
            const values = new Set();
            assets.forEach({
                "Altas.useMemo[uniqueMemoryType]": (a)=>{
                    var _a_assetDetail;
                    if ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.physicalMemory) values.add(a.assetDetail.physicalMemory);
                }
            }["Altas.useMemo[uniqueMemoryType]"]);
            return Array.from(values).sort();
        }
    }["Altas.useMemo[uniqueMemoryType]"], [
        assets
    ]);
    const uniqueSites = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueSites]": ()=>{
            const siteMap = new Map();
            assets.forEach({
                "Altas.useMemo[uniqueSites]": (a)=>{
                    if (a.site && a.site.siteID && a.site.name) {
                        siteMap.set(a.site.siteID, {
                            siteID: a.site.siteID,
                            name: a.site.name
                        });
                    }
                }
            }["Altas.useMemo[uniqueSites]"]);
            return Array.from(siteMap.values()).sort({
                "Altas.useMemo[uniqueSites]": (a, b)=>a.name.localeCompare(b.name)
            }["Altas.useMemo[uniqueSites]"]);
        }
    }["Altas.useMemo[uniqueSites]"], [
        assets
    ]);
    const uniqueDepartments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueDepartments]": ()=>{
            const deptMap = new Map();
            assets.forEach({
                "Altas.useMemo[uniqueDepartments]": (a)=>{
                    if (a.depart && a.depart.departID && a.depart.Name) {
                        deptMap.set(a.depart.departID, {
                            departID: a.depart.departID,
                            name: a.depart.Name
                        });
                    }
                }
            }["Altas.useMemo[uniqueDepartments]"]);
            return Array.from(deptMap.values()).sort({
                "Altas.useMemo[uniqueDepartments]": (a, b)=>a.name.localeCompare(b.name)
            }["Altas.useMemo[uniqueDepartments]"]);
        }
    }["Altas.useMemo[uniqueDepartments]"], [
        assets
    ]);
    const uniqueProcessors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueProcessors]": ()=>{
            const values = new Set();
            assets.forEach({
                "Altas.useMemo[uniqueProcessors]": (a)=>{
                    var _a_assetDetail;
                    if ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.processor) values.add(a.assetDetail.processor);
                }
            }["Altas.useMemo[uniqueProcessors]"]);
            return Array.from(values).sort();
        }
    }["Altas.useMemo[uniqueProcessors]"], [
        assets
    ]);
    const uniqueManufacturers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[uniqueManufacturers]": ()=>{
            const values = new Set();
            assets.forEach({
                "Altas.useMemo[uniqueManufacturers]": (a)=>{
                    var _a_assetDetail;
                    if ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.productManuf) values.add(a.assetDetail.productManuf);
                }
            }["Altas.useMemo[uniqueManufacturers]"]);
            return Array.from(values).sort();
        }
    }["Altas.useMemo[uniqueManufacturers]"], [
        assets
    ]);
    // Determinar grupo activo desde los chips de filtro
    const activeGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[activeGroup]": ()=>{
            const grupoChips = filterChips.filter({
                "Altas.useMemo[activeGroup].grupoChips": (c)=>c.facet === "grupo"
            }["Altas.useMemo[activeGroup].grupoChips"]);
            if (grupoChips.length === 1) return grupoChips[0].value;
            return null; // Ninguno o múltiples grupos → mostrar todos los filtros
        }
    }["Altas.useMemo[activeGroup]"], [
        filterChips
    ]);
    // Filtros técnicos por grupo:
    // Equipo: RAM, Tipo Memoria, Capacidad Disco, Tipo Disco, SO, Procesador
    // Componente: RAM, Tipo Memoria, Capacidad Disco, Tipo Disco
    // Otro: SO, RAM, Capacidad Disco
    // Accesorio: ninguno técnico
    // null (todos): todos disponibles
    const TECH_FILTERS_BY_GROUP = {
        Equipo: [
            "ram",
            "memoria_tipo",
            "disco_cap",
            "disco_tipo",
            "so",
            "procesador"
        ],
        Componente: [
            "ram",
            "memoria_tipo",
            "disco_cap",
            "disco_tipo"
        ],
        Otro: [
            "so",
            "ram",
            "disco_cap"
        ],
        Accesorio: []
    };
    const allowedTechFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[allowedTechFilters]": ()=>{
            if (!activeGroup) return null; // null = mostrar todos
            return new Set(TECH_FILTERS_BY_GROUP[activeGroup] || []);
        }
    }["Altas.useMemo[allowedTechFilters]"], [
        activeGroup
    ]);
    const TECH_FILTER_KEYS = new Set([
        "ram",
        "memoria_tipo",
        "disco_cap",
        "disco_tipo",
        "so",
        "procesador"
    ]);
    // Definir facetas para el omnibox
    const facets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altas.useMemo[facets]": ()=>{
            const allFacets = [
                {
                    key: "grupo",
                    label: "Grupo",
                    color: "slate",
                    options: ASSET_GROUPS.map({
                        "Altas.useMemo[facets]": (g)=>({
                                value: g,
                                label: g
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "empresa",
                    label: "Empresa",
                    color: "blue",
                    options: companies.map({
                        "Altas.useMemo[facets]": (c)=>({
                                value: String(c.companyID),
                                label: c.description
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "site",
                    label: "Site",
                    color: "sky",
                    options: uniqueSites.map({
                        "Altas.useMemo[facets]": (s)=>({
                                value: String(s.siteID),
                                label: s.name
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "departamento",
                    label: "Departamento",
                    color: "lime",
                    options: uniqueDepartments.map({
                        "Altas.useMemo[facets]": (d)=>({
                                value: String(d.departID),
                                label: d.name
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "usuario",
                    label: "Usuario",
                    color: "emerald",
                    options: uniqueUsers.map({
                        "Altas.useMemo[facets]": (u)=>({
                                value: String(u.userID),
                                label: u.name
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "estado",
                    label: "Estado",
                    color: "amber",
                    options: assetStates.map({
                        "Altas.useMemo[facets]": (s)=>({
                                value: String(s.assetStateID),
                                label: s.name
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "tipo",
                    label: "Tipo",
                    color: "purple",
                    options: filteredProductTypes.map({
                        "Altas.useMemo[facets]": (pt)=>({
                                value: String(pt.productTypeID),
                                label: pt.name
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "proveedor",
                    label: "Proveedor",
                    color: "violet",
                    options: vendors.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: String(v.vendorID),
                                label: v.name
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "fabricante",
                    label: "Fabricante",
                    color: "stone",
                    options: uniqueManufacturers.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: v,
                                label: v
                            })
                    }["Altas.useMemo[facets]"])
                },
                // Filtros técnicos (condicionales según grupo)
                {
                    key: "ram",
                    label: "RAM",
                    color: "cyan",
                    options: uniqueRAM.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: v,
                                label: v
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "memoria_tipo",
                    label: "Tipo Memoria",
                    color: "teal",
                    options: uniqueMemoryType.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: v,
                                label: v
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "disco_cap",
                    label: "Capacidad Disco",
                    color: "orange",
                    options: uniqueHddCapacity.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: v,
                                label: v
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "disco_tipo",
                    label: "Tipo Disco",
                    color: "rose",
                    options: uniqueHddModel.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: v,
                                label: v
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "so",
                    label: "Sistema Operativo",
                    color: "indigo",
                    options: uniqueOS.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: v,
                                label: v
                            })
                    }["Altas.useMemo[facets]"])
                },
                {
                    key: "procesador",
                    label: "Procesador",
                    color: "fuchsia",
                    options: uniqueProcessors.map({
                        "Altas.useMemo[facets]": (v)=>({
                                value: v,
                                label: v
                            })
                    }["Altas.useMemo[facets]"])
                }
            ];
            // Filtrar facetas técnicas según el grupo seleccionado
            if (allowedTechFilters === null) return allFacets; // Sin grupo → todos
            return allFacets.filter({
                "Altas.useMemo[facets]": (f)=>!TECH_FILTER_KEYS.has(f.key) || allowedTechFilters.has(f.key)
            }["Altas.useMemo[facets]"]);
        }
    }["Altas.useMemo[facets]"], [
        companies,
        uniqueUsers,
        assetStates,
        filteredProductTypes,
        vendors,
        uniqueRAM,
        uniqueHddCapacity,
        uniqueHddModel,
        uniqueOS,
        uniqueMemoryType,
        uniqueSites,
        uniqueDepartments,
        uniqueProcessors,
        uniqueManufacturers,
        allowedTechFilters
    ]);
    // Limpiar chips de filtros técnicos que ya no son visibles al cambiar de grupo
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Altas.useEffect": ()=>{
            if (allowedTechFilters === null) return; // Sin grupo → no limpiar
            setFilterChips({
                "Altas.useEffect": (prev)=>prev.filter({
                        "Altas.useEffect": (c)=>!TECH_FILTER_KEYS.has(c.facet) || allowedTechFilters.has(c.facet)
                    }["Altas.useEffect"])
            }["Altas.useEffect"]);
        }
    }["Altas.useEffect"], [
        allowedTechFilters
    ]);
    // Aplicar filtros cuando cambien
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Altas.useEffect": ()=>{
            let result = [
                ...assets
            ];
            // Aplicar chips: AND entre facetas distintas, OR dentro de la misma faceta
            const chipsByFacet = new Map();
            filterChips.forEach({
                "Altas.useEffect": (chip)=>{
                    if (!chipsByFacet.has(chip.facet)) {
                        chipsByFacet.set(chip.facet, new Set());
                    }
                    chipsByFacet.get(chip.facet).add(chip.value);
                }
            }["Altas.useEffect"]);
            if (chipsByFacet.has("grupo")) {
                const values = chipsByFacet.get("grupo");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_productType;
                        return ((_a_productType = a.productType) === null || _a_productType === void 0 ? void 0 : _a_productType.group) && values.has(a.productType.group);
                    }
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("empresa")) {
                const values = chipsByFacet.get("empresa");
                result = result.filter({
                    "Altas.useEffect": (a)=>values.has(String(a.companyID))
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("site")) {
                const values = chipsByFacet.get("site");
                result = result.filter({
                    "Altas.useEffect": (a)=>values.has(String(a.siteID))
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("departamento")) {
                const values = chipsByFacet.get("departamento");
                result = result.filter({
                    "Altas.useEffect": (a)=>a.depart && values.has(String(a.depart.departID))
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("usuario")) {
                const values = chipsByFacet.get("usuario");
                result = result.filter({
                    "Altas.useEffect": (a)=>values.has(String(a.userID))
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("estado")) {
                const values = chipsByFacet.get("estado");
                result = result.filter({
                    "Altas.useEffect": (a)=>values.has(String(a.assetState))
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("tipo")) {
                const values = chipsByFacet.get("tipo");
                result = result.filter({
                    "Altas.useEffect": (a)=>values.has(String(a.productTypeID))
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("proveedor")) {
                const values = chipsByFacet.get("proveedor");
                result = result.filter({
                    "Altas.useEffect": (a)=>values.has(String(a.vendorID))
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("ram")) {
                const values = chipsByFacet.get("ram");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_assetDetail;
                        return ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.ram) && values.has(a.assetDetail.ram);
                    }
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("disco_cap")) {
                const values = chipsByFacet.get("disco_cap");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_assetDetail;
                        return ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.hddCapacity) && values.has(a.assetDetail.hddCapacity);
                    }
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("disco_tipo")) {
                const values = chipsByFacet.get("disco_tipo");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_assetDetail;
                        return ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.hddModel) && values.has(a.assetDetail.hddModel);
                    }
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("so")) {
                const values = chipsByFacet.get("so");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_assetDetail;
                        return ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.operatingSystem) && values.has(a.assetDetail.operatingSystem);
                    }
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("memoria_tipo")) {
                const values = chipsByFacet.get("memoria_tipo");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_assetDetail;
                        return ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.physicalMemory) && values.has(a.assetDetail.physicalMemory);
                    }
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("procesador")) {
                const values = chipsByFacet.get("procesador");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_assetDetail;
                        return ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.processor) && values.has(a.assetDetail.processor);
                    }
                }["Altas.useEffect"]);
            }
            if (chipsByFacet.has("fabricante")) {
                const values = chipsByFacet.get("fabricante");
                result = result.filter({
                    "Altas.useEffect": (a)=>{
                        var _a_assetDetail;
                        return ((_a_assetDetail = a.assetDetail) === null || _a_assetDetail === void 0 ? void 0 : _a_assetDetail.productManuf) && values.has(a.assetDetail.productManuf);
                    }
                }["Altas.useEffect"]);
            }
            // Filtrar por búsqueda de texto libre
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                result = result.filter({
                    "Altas.useEffect": (asset)=>{
                        var _asset_assetDetail_serialNum, _asset_assetDetail, _asset_assetDetail_assetTAG, _asset_assetDetail1, _asset_user_name, _asset_user, _asset_depart_Name, _asset_depart, _asset_vendor_name, _asset_vendor, _asset_productType_name, _asset_productType;
                        return asset.name.toLowerCase().includes(query) || ((_asset_assetDetail = asset.assetDetail) === null || _asset_assetDetail === void 0 ? void 0 : (_asset_assetDetail_serialNum = _asset_assetDetail.serialNum) === null || _asset_assetDetail_serialNum === void 0 ? void 0 : _asset_assetDetail_serialNum.toLowerCase().includes(query)) || ((_asset_assetDetail1 = asset.assetDetail) === null || _asset_assetDetail1 === void 0 ? void 0 : (_asset_assetDetail_assetTAG = _asset_assetDetail1.assetTAG) === null || _asset_assetDetail_assetTAG === void 0 ? void 0 : _asset_assetDetail_assetTAG.toLowerCase().includes(query)) || ((_asset_user = asset.user) === null || _asset_user === void 0 ? void 0 : (_asset_user_name = _asset_user.name) === null || _asset_user_name === void 0 ? void 0 : _asset_user_name.toLowerCase().includes(query)) || ((_asset_depart = asset.depart) === null || _asset_depart === void 0 ? void 0 : (_asset_depart_Name = _asset_depart.Name) === null || _asset_depart_Name === void 0 ? void 0 : _asset_depart_Name.toLowerCase().includes(query)) || ((_asset_vendor = asset.vendor) === null || _asset_vendor === void 0 ? void 0 : (_asset_vendor_name = _asset_vendor.name) === null || _asset_vendor_name === void 0 ? void 0 : _asset_vendor_name.toLowerCase().includes(query)) || ((_asset_productType = asset.productType) === null || _asset_productType === void 0 ? void 0 : (_asset_productType_name = _asset_productType.name) === null || _asset_productType_name === void 0 ? void 0 : _asset_productType_name.toLowerCase().includes(query));
                    }
                }["Altas.useEffect"]);
            }
            setFilteredAssets(result);
        }
    }["Altas.useEffect"], [
        assets,
        filterChips,
        searchQuery
    ]);
    // Paginación server-side directa
    const paginatedAssets = filteredAssets;
    const totalPages = Math.max(1, Math.ceil(totalAssets / pageSize));
    const startItem = totalAssets > 0 ? (currentPage - 1) * pageSize + 1 : 0;
    const endItem = Math.min(currentPage * pageSize, totalAssets);
    // Handlers
    const handleRefresh = ()=>{
        loadAssets();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success("Lista actualizada");
    };
    const handleCreateAsset = ()=>{
        setIsCreateModalOpen(true);
    };
    const handleCreateSuccess = ()=>{
        loadAssets();
    };
    const handleProductTypeCreated = async ()=>{
        try {
            const productTypesRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].productType.getAll().catch(()=>[]);
            setProductTypes(productTypesRes);
        } catch (error) {
            console.error("Error reloading product types:", error);
        }
    };
    const handleSelectAll = (checked)=>{
        if (checked) {
            setSelectedAssets(new Set(paginatedAssets.map((a)=>a.assetID)));
        } else {
            setSelectedAssets(new Set());
        }
    };
    const handleSelectAsset = (assetID, checked)=>{
        const newSelected = new Set(selectedAssets);
        if (checked) {
            newSelected.add(assetID);
        } else {
            newSelected.delete(assetID);
        }
        setSelectedAssets(newSelected);
    };
    const handleEditSuccess = ()=>{
        loadAssets();
        setSelectedAssets(new Set());
    };
    const handleOpenDetail = (assetID)=>{
        setDetailAssetID(assetID);
        setIsDetailModalOpen(true);
    };
    const handleDetailToEdit = (asset)=>{
        var _asset_assetStateInfo;
        if (((_asset_assetStateInfo = asset.assetStateInfo) === null || _asset_assetStateInfo === void 0 ? void 0 : _asset_assetStateInfo.name) === "Baja") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error("No se puede editar un activo dado de baja");
            return;
        }
        setEditingAsset(asset);
        setIsEditModalOpen(true);
    };
    const handleDirectEdit = (asset)=>{
        var _asset_assetStateInfo;
        if (((_asset_assetStateInfo = asset.assetStateInfo) === null || _asset_assetStateInfo === void 0 ? void 0 : _asset_assetStateInfo.name) === "Baja") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error("No se puede editar un activo dado de baja");
            return;
        }
        setEditingAsset(asset);
        setIsEditModalOpen(true);
    };
    const handleOpenAssignment = (assetID)=>{
        setAssignmentAssetID(assetID);
        setIsAssignmentModalOpen(true);
    };
    const triggerDownload = (blob, filename)=>{
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };
    const handleExportCsv = async ()=>{
        try {
            setIsExporting(true);
            const filters = {};
            if (activeGroup) filters.group = activeGroup;
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].report.downloadAssetsCsv(filters);
            const dateStr = new Date().toISOString().split("T")[0];
            triggerDownload(new Blob([
                blob
            ], {
                type: "text/csv"
            }), "inventario_".concat(dateStr, ".csv"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success("CSV exportado exitosamente");
        } catch (error) {
            console.error("Error exporting CSV:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error("Error al exportar CSV");
        } finally{
            setIsExporting(false);
        }
    };
    const handleExportExcel = async ()=>{
        try {
            setIsExporting(true);
            const filters = {};
            if (activeGroup) filters.group = activeGroup;
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].report.downloadAssetsExcel(filters);
            const dateStr = new Date().toISOString().split("T")[0];
            triggerDownload(new Blob([
                blob
            ], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            }), "inventario_".concat(dateStr, ".xlsx"));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].success("Excel exportado exitosamente");
        } catch (error) {
            console.error("Error exporting Excel:", error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].error("Error al exportar Excel");
        } finally{
            setIsExporting(false);
        }
    };
    const handleOpenDeliveryReport = (assetID)=>{
        setDeliveryAssetID(assetID);
        setIsDeliveryModalOpen(true);
    };
    const handleImportCSV = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["toast"].info("Funcionalidad de importación en desarrollo");
    };
    const isAllSelected = paginatedAssets.length > 0 && paginatedAssets.every((a)=>selectedAssets.has(a.assetID));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLayout$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["MainLayout"], {
        breadcrumb: {
            title: "Altas",
            subtitle: "Registro de activos TI"
        },
        children: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-4 py-2 border-b bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OmniboxFilter$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["OmniboxFilter"], {
                                facets: facets,
                                chips: filterChips,
                                onChipsChange: setFilterChips,
                                searchQuery: searchQuery,
                                onSearchQueryChange: setSearchQuery,
                                pinned: isSearchPinned,
                                onPinnedChange: setIsSearchPinned
                            }, void 0, false, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        disabled: isConsultor,
                                        onClick: handleCreateAsset,
                                        title: isConsultor ? "No tienes permisos para registrar activos" : undefined,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])("h-8 text-sm font-normal", isConsultor && "bg-gray-100 text-gray-400 border-gray-200 opacity-60 cursor-not-allowed"),
                                        children: "Nuevo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 686,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "h-8 text-sm font-normal",
                                                    children: [
                                                        "Acciones",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "h-4 w-4 ml-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/altas/index.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 702,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 701,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleExportCsv,
                                                        disabled: isExporting,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Exportar a CSV"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleExportExcel,
                                                        disabled: isExporting,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Exportar a Excel"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleImportCSV,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 718,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Import from CSV"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 717,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 721,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleRefresh,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 723,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Refresh"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 722,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 707,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 700,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 685,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-sm text-gray-600 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: pageSize,
                                        onChange: (e)=>{
                                            setPageSize(Number(e.target.value));
                                            setCurrentPage(1);
                                        },
                                        className: "h-7 rounded border border-gray-300 bg-white px-1 text-sm text-gray-600",
                                        children: [
                                            20,
                                            50,
                                            100
                                        ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: size,
                                                children: size
                                            }, size, false, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 741,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 732,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap",
                                        children: [
                                            startItem,
                                            "-",
                                            endItem,
                                            " de ",
                                            totalAssets
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 746,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-7 w-7",
                                        onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                        disabled: currentPage <= 1 || isLoading,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 756,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 749,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-7 w-7",
                                        onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                        disabled: currentPage >= totalPages || isLoading,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 765,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 758,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 731,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 672,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 774,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/altas/index.tsx",
                            lineNumber: 773,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Table"], {
                            style: {
                                tableLayout: "fixed",
                                width: Object.values(colWidths).reduce((a, b)=>a + b, 0)
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                    children: Object.entries(colWidths).map((param)=>{
                                        let [key, w] = param;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            style: {
                                                width: w
                                            }
                                        }, key, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 780,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/altas/index.tsx",
                                    lineNumber: 778,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    className: "bg-gray-50 sticky top-0 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            {
                                                key: "checkbox",
                                                label: ""
                                            },
                                            {
                                                key: "actions",
                                                label: ""
                                            },
                                            {
                                                key: "name",
                                                label: "NOMBRE"
                                            },
                                            {
                                                key: "company",
                                                label: "COMPAÑIA"
                                            },
                                            {
                                                key: "site",
                                                label: "SITE"
                                            },
                                            {
                                                key: "department",
                                                label: "DEPARTAMENTO"
                                            },
                                            {
                                                key: "user",
                                                label: "USUARIO"
                                            },
                                            {
                                                key: "type",
                                                label: "TIPO"
                                            },
                                            {
                                                key: "brand",
                                                label: "MARCA"
                                            },
                                            {
                                                key: "model",
                                                label: "MODELO"
                                            },
                                            {
                                                key: "serial",
                                                label: "SERIE"
                                            },
                                            {
                                                key: "state",
                                                label: "ESTADO"
                                            }
                                        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "font-semibold text-gray-700 relative select-none overflow-hidden text-ellipsis whitespace-nowrap",
                                                style: {
                                                    width: colWidths[col.key]
                                                },
                                                children: [
                                                    col.label,
                                                    col.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        onMouseDown: onResizeStart(col.key),
                                                        className: "absolute right-0 top-0 bottom-0 w-1.5 cursor-col-resize hover:bg-blue-400 active:bg-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, col.key, true, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 800,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 785,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/altas/index.tsx",
                                    lineNumber: 784,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: paginatedAssets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            colSpan: 12,
                                            className: "h-24 text-center text-gray-500",
                                            children: "No se encontraron activos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 820,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 819,
                                        columnNumber: 21
                                    }, this) : paginatedAssets.map((asset)=>{
                                        var _asset_assetStateInfo, _asset_company, _asset_company1, _asset_site, _asset_site1, _asset_depart, _asset_depart1, _asset_user, _asset_user1, _asset_productType, _asset_productType1, _asset_assetDetail, _asset_assetDetail1, _asset_assetDetail2, _asset_assetDetail3, _asset_assetDetail4, _asset_assetDetail5, _asset_assetStateInfo1;
                                        const isBaja = ((_asset_assetStateInfo = asset.assetStateInfo) === null || _asset_assetStateInfo === void 0 ? void 0 : _asset_assetStateInfo.name) === "Baja";
                                        const isEditDisabled = isBaja || isConsultor;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-gray-50", selectedAssets.has(asset.assetID) && "bg-blue-50", isBaja && "opacity-60 bg-red-50/50"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])("p-1 rounded transition-colors", isEditDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-amber-50"),
                                                            title: isBaja ? "Activo dado de baja - no se permite editar" : isConsultor ? "No tienes permisos para editar activos" : "Editar activo",
                                                            disabled: isEditDisabled,
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                if (!isEditDisabled) handleDirectEdit(asset);
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isEditDisabled ? "text-gray-300" : "text-gray-400 hover:text-amber-600")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/altas/index.tsx",
                                                            lineNumber: 842,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 840,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "font-medium text-blue-600 hover:underline truncate block text-left max-w-full",
                                                        title: asset.name,
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handleOpenDetail(asset.assetID);
                                                        },
                                                        children: asset.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_company = asset.company) === null || _asset_company === void 0 ? void 0 : _asset_company.description) || "",
                                                    children: ((_asset_company1 = asset.company) === null || _asset_company1 === void 0 ? void 0 : _asset_company1.description) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_site = asset.site) === null || _asset_site === void 0 ? void 0 : _asset_site.name) || "",
                                                    children: ((_asset_site1 = asset.site) === null || _asset_site1 === void 0 ? void 0 : _asset_site1.name) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_depart = asset.depart) === null || _asset_depart === void 0 ? void 0 : _asset_depart.Name) || "",
                                                    children: ((_asset_depart1 = asset.depart) === null || _asset_depart1 === void 0 ? void 0 : _asset_depart1.Name) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 884,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_user = asset.user) === null || _asset_user === void 0 ? void 0 : _asset_user.name) || "",
                                                    children: ((_asset_user1 = asset.user) === null || _asset_user1 === void 0 ? void 0 : _asset_user1.name) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_productType = asset.productType) === null || _asset_productType === void 0 ? void 0 : _asset_productType.name) || "",
                                                    children: ((_asset_productType1 = asset.productType) === null || _asset_productType1 === void 0 ? void 0 : _asset_productType1.name) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 890,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_assetDetail = asset.assetDetail) === null || _asset_assetDetail === void 0 ? void 0 : _asset_assetDetail.productManuf) || "",
                                                    children: ((_asset_assetDetail1 = asset.assetDetail) === null || _asset_assetDetail1 === void 0 ? void 0 : _asset_assetDetail1.productManuf) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 893,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_assetDetail2 = asset.assetDetail) === null || _asset_assetDetail2 === void 0 ? void 0 : _asset_assetDetail2.model) || "",
                                                    children: ((_asset_assetDetail3 = asset.assetDetail) === null || _asset_assetDetail3 === void 0 ? void 0 : _asset_assetDetail3.model) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: ((_asset_assetDetail4 = asset.assetDetail) === null || _asset_assetDetail4 === void 0 ? void 0 : _asset_assetDetail4.serialNum) || "",
                                                    children: ((_asset_assetDetail5 = asset.assetDetail) === null || _asset_assetDetail5 === void 0 ? void 0 : _asset_assetDetail5.serialNum) || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["cn"])(isBaja && "text-red-600 font-semibold"),
                                                        children: ((_asset_assetStateInfo1 = asset.assetStateInfo) === null || _asset_assetStateInfo1 === void 0 ? void 0 : _asset_assetStateInfo1.name) || "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 903,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 902,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, asset.assetID, true, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 829,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/altas/index.tsx",
                                    lineNumber: 817,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/altas/index.tsx",
                            lineNumber: 777,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 771,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateAssetModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["CreateAssetModal"], {
                        productTypes: productTypes,
                        vendors: vendors,
                        assetStates: assetStates,
                        companies: companies,
                        sites: sites,
                        isOpen: isCreateModalOpen,
                        onClose: ()=>setIsCreateModalOpen(false),
                        onSuccess: handleCreateSuccess,
                        onProductTypeCreated: handleProductTypeCreated
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 917,
                        columnNumber: 11
                    }, this),
                    editingAsset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditAssetModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["EditAssetModal"], {
                        asset: editingAsset,
                        productTypes: productTypes,
                        vendors: vendors,
                        assetStates: assetStates,
                        companies: companies,
                        sites: sites,
                        isOpen: isEditModalOpen,
                        onClose: ()=>{
                            setIsEditModalOpen(false);
                            setEditingAsset(null);
                        },
                        onSuccess: handleEditSuccess,
                        onOpenAssignment: handleOpenAssignment
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 931,
                        columnNumber: 13
                    }, this),
                    detailAssetID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetDetailModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AssetDetailModal"], {
                        assetID: detailAssetID,
                        isOpen: isDetailModalOpen,
                        onClose: ()=>{
                            setIsDetailModalOpen(false);
                            setDetailAssetID(null);
                        },
                        onEdit: handleDetailToEdit,
                        onOpenAssignment: handleOpenAssignment,
                        onOpenDeliveryReport: handleOpenDeliveryReport
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 950,
                        columnNumber: 13
                    }, this),
                    assignmentAssetID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetAssignmentModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AssetAssignmentModal"], {
                        assetID: assignmentAssetID,
                        isOpen: isAssignmentModalOpen,
                        onClose: ()=>{
                            setIsAssignmentModalOpen(false);
                            setAssignmentAssetID(null);
                        },
                        onSuccess: loadAssets
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 965,
                        columnNumber: 13
                    }, this),
                    deliveryAssetID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryReportModal$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["DeliveryReportModal"], {
                        assetID: deliveryAssetID,
                        isOpen: isDeliveryModalOpen,
                        onClose: ()=>{
                            setIsDeliveryModalOpen(false);
                            setDeliveryAssetID(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 978,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/altas/index.tsx",
                lineNumber: 670,
                columnNumber: 9
            }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/altas/index.tsx",
        lineNumber: 666,
        columnNumber: 5
    }, this);
}
_s(Altas, "gpOP6nTiuv3Fc+g6hTG9Jb4PLSU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["usePermissions"]
    ];
});
_c = Altas;
var _c;
__turbopack_context__.k.register(_c, "Altas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_2245b96e._.js.map