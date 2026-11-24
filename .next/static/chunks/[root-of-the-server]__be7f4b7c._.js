(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": ()=>connect,
    "setHooks": ()=>setHooks,
    "subscribeToUpdate": ()=>subscribeToUpdate
});
function connect(param) {
    let { addMessageListener, sendMessage, onUpdateError = console.error } = param;
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: (param)=>{
            let [chunkPath, callback] = param;
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        var _updateA_modules;
        const deletedModules = new Set((_updateA_modules = updateA.modules) !== null && _updateA_modules !== void 0 ? _updateA_modules : []);
        var _updateB_modules;
        const addedModules = new Set((_updateB_modules = updateB.modules) !== null && _updateB_modules !== void 0 ? _updateB_modules : []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        var _updateA_added, _updateB_added;
        const added = new Set([
            ...(_updateA_added = updateA.added) !== null && _updateA_added !== void 0 ? _updateA_added : [],
            ...(_updateB_added = updateB.added) !== null && _updateB_added !== void 0 ? _updateB_added : []
        ]);
        var _updateA_deleted, _updateB_deleted;
        const deleted = new Set([
            ...(_updateA_deleted = updateA.deleted) !== null && _updateA_deleted !== void 0 ? _updateA_deleted : [],
            ...(_updateB_deleted = updateB.deleted) !== null && _updateB_deleted !== void 0 ? _updateB_deleted : []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        var _updateA_modules1, _updateB_added1;
        const modules = new Set([
            ...(_updateA_modules1 = updateA.modules) !== null && _updateA_modules1 !== void 0 ? _updateA_modules1 : [],
            ...(_updateB_added1 = updateB.added) !== null && _updateB_added1 !== void 0 ? _updateB_added1 : []
        ]);
        var _updateB_deleted1;
        for (const moduleId of (_updateB_deleted1 = updateB.deleted) !== null && _updateB_deleted1 !== void 0 ? _updateB_deleted1 : []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        var _updateB_modules1;
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set((_updateB_modules1 = updateB.modules) !== null && _updateB_modules1 !== void 0 ? _updateB_modules1 : []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error("Invariant: ".concat(message));
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/src/components/ui/sonner.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Toaster": ()=>Toaster
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const Toaster = (param)=>{
    let { ...props } = param;
    _s();
    const { theme = "system" } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["Toaster"], {
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
_s(Toaster, "EriOrahfenYKDCErPq+L6926Dw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Toaster;
;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/components/UserVerification.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserVerification
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePermissions.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function UserVerification(param) {
    let { children } = param;
    var _session_user;
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSession"])();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { permissions, loading: permissionsLoading, error: permissionsError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["usePermissions"])();
    const [isVerified, setIsVerified] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timeoutReached, setTimeoutReached] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Función para verificar al usuario
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserVerification.useEffect": ()=>{
            var _session_user;
            const verifyUser = {
                "UserVerification.useEffect.verifyUser": async ()=>{
                    var _session_user, _session_user1;
                    if (status === 'loading') return;
                    console.log('[UserVerification] Session status:', status);
                    console.log('[UserVerification] User:', session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.preferred_username);
                    if (!(session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.preferred_username)) {
                        console.log('[UserVerification] No username found in session');
                        setIsLoading(false);
                        return;
                    }
                    try {
                        console.log('[UserVerification] Verifying user:', session.user.preferred_username);
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"].user.verify(session.user.preferred_username);
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
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["signOut"])({
                                callbackUrl: '/'
                            });
                        }
                    } catch (error) {
                        console.error('[UserVerification] Error verifying user:', error);
                        const errorMessage = 'Error del sistema al verificar usuario. Contacta al administrador.';
                        setError(errorMessage);
                        // Block access on system error
                        alert(errorMessage);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["signOut"])({
                            callbackUrl: '/'
                        });
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["UserVerification.useEffect.verifyUser"];
            // Solo ejecutar si tenemos un usuario válido y autenticado
            if ((session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.preferred_username) && status === 'authenticated') {
                verifyUser();
            } else if (status === 'unauthenticated') {
                console.log('[UserVerification] User is not authenticated');
                setIsLoading(false);
            }
        }
    }["UserVerification.useEffect"], [
        session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.preferred_username,
        status
    ]);
    // Timeout para evitar que los usuarios se queden bloqueados indefinidamente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserVerification.useEffect": ()=>{
            const timeoutId = setTimeout({
                "UserVerification.useEffect.timeoutId": ()=>{
                    if ((status === 'loading' || isLoading || permissionsLoading) && !timeoutReached) {
                        console.log('[UserVerification] Timeout reached, allowing access to avoid blocking users');
                        setTimeoutReached(true);
                        setIsLoading(false);
                        setIsVerified(true);
                    }
                }
            }["UserVerification.useEffect.timeoutId"], 10000); // 10 segundos de timeout
            return ({
                "UserVerification.useEffect": ()=>clearTimeout(timeoutId)
            })["UserVerification.useEffect"];
        }
    }["UserVerification.useEffect"], [
        status,
        isLoading,
        permissionsLoading,
        timeoutReached
    ]);
    // Si hay un timeout, mostrar un mensaje pero permitir continuar
    if (timeoutReached) {
        console.log('[UserVerification] Rendering children after timeout');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-md max-w-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-5 w-5 text-yellow-500",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Verificando usuario y permisos..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    permissionsLoading && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-2",
                        children: "Cargando permisos..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this),
                    isLoading && !permissionsLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-2",
                        children: "Verificando usuario..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this),
                    status === 'loading' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    if (!isVerified && !timeoutReached) {
        console.log('[UserVerification] User not verified');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-600 text-6xl mb-4",
                        children: "⚠️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-800 mb-2",
                        children: "Error de verificación"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 mb-4",
                        children: error || 'No se pudo verificar tu acceso al sistema.'
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    permissionsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-500 mt-2",
                        children: permissionsError
                    }, void 0, false, {
                        fileName: "[project]/src/components/UserVerification.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["signOut"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(UserVerification, "1DPB9jwrs7Ks+LUpOpYWn9pWr7Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["usePermissions"]
    ];
});
_c = UserVerification;
var _c;
__turbopack_context__.k.register(_c, "UserVerification");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/_app.tsx [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>App
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sonner.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserVerification$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UserVerification.tsx [client] (ecmascript)");
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
function App(param) {
    let { Component, pageProps } = param;
    const { session, ...rest } = pageProps;
    // Inyectar la configuración en tiempo de ejecución en pageProps
    const pagePropsWithConfig = {
        ...rest,
        runtimeConfig: getRuntimeConfig(),
        appVersion: ("TURBOPACK compile-time value", "1.0.0") || 'v0.0.0'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        session: session,
        basePath: BASE_URL,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UserVerification$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sonner$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
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
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/_app.tsx [client] (ecmascript)\" } [client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/src/pages/_app.tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/src/pages/_app\" }": ((__turbopack_context__) => {
"use strict";

var { m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/_app.tsx [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__be7f4b7c._.js.map