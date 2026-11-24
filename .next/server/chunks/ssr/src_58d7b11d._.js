module.exports = {

"[project]/src/hooks/use-mobile.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useIsMobile": ()=>useIsMobile
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener("change", onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/src/hooks/useNotifications.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "useNotifications": ()=>useNotifications
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const useNotifications = ()=>{
    const showSuccess = (message)=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success(message, {
            duration: 4000,
            position: "top-right"
        });
    };
    const showError = (message)=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error(message, {
            duration: 5000,
            position: "top-right"
        });
    };
    const showWarning = (message)=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].warning(message, {
            duration: 4000,
            position: "top-right"
        });
    };
    const showInfo = (message)=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].info(message, {
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
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/utils.ts [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "cn": ()=>cn,
    "getInitials": ()=>getInitials
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/clsx [external] (clsx, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/tailwind-merge [external] (tailwind-merge, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$tailwind$2d$merge__$5b$external$5d$__$28$tailwind$2d$merge$2c$__esm_import$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$clsx__$5b$external$5d$__$28$clsx$2c$__esm_import$29$__["clsx"])(inputs));
}
const getInitials = (fullName)=>{
    // Validar que el input sea string y no esté vacío
    if (!fullName || typeof fullName !== 'string') {
        return '';
    }
    // Eliminar espacios extras y dividir por espacios
    return fullName.trim().split(/\s+/).map((name)=>name.charAt(0).toUpperCase()).join('');
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/altas/index.tsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": ()=>Altas
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MainLayout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePermissions.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CreateAssetModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/EditAssetModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetDetailModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AssetDetailModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetAssignmentModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AssetAssignmentModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryReportModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DeliveryReportModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OmniboxFilter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OmniboxFilter.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/sonner [external] (sonner, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetDetailModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetAssignmentModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryReportModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OmniboxFilter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetDetailModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetAssignmentModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryReportModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OmniboxFilter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
    const { loading: permissionsLoading, hasPermission } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePermissions$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["usePermissions"])();
    const isConsultor = permissionsLoading || !hasPermission("/movimientos");
    // Estados para los catálogos
    const [productTypes, setProductTypes] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [vendors, setVendors] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [assetStates, setAssetStates] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [sites, setSites] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    // Estados para los activos
    const [assets, setAssets] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [filteredAssets, setFilteredAssets] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [editingAsset, setEditingAsset] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [detailAssetID, setDetailAssetID] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isAssignmentModalOpen, setIsAssignmentModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [assignmentAssetID, setAssignmentAssetID] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isDeliveryModalOpen, setIsDeliveryModalOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [deliveryAssetID, setDeliveryAssetID] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Estados para filtros y selección
    const [selectedAssets, setSelectedAssets] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(new Set());
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [filterChips, setFilterChips] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [isSearchPinned, setIsSearchPinned] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    // Estados para paginación y vista
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const [pageSize, setPageSize] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(20);
    const [totalAssets, setTotalAssets] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    // Column resize state
    const [colWidths, setColWidths] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(INITIAL_COL_WIDTHS);
    const resizingCol = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const resizeStartX = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const resizeStartW = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(0);
    const onResizeStart = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])((col)=>(e)=>{
            e.preventDefault();
            resizingCol.current = col;
            resizeStartX.current = e.clientX;
            resizeStartW.current = colWidths[col];
            const onMouseMove = (ev)=>{
                if (!resizingCol.current) return;
                const diff = ev.clientX - resizeStartX.current;
                const newW = Math.min(400, Math.max(50, resizeStartW.current + diff));
                setColWidths((prev)=>({
                        ...prev,
                        [resizingCol.current]: newW
                    }));
            };
            const onMouseUp = ()=>{
                resizingCol.current = null;
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        }, [
        colWidths
    ]);
    // Cargar catálogos al montar el componente
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const loadCatalogs = async ()=>{
            try {
                const [productTypesRes, vendorsRes, assetStatesRes, companiesRes, sitesRes] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].productType.getAll().catch(()=>[]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].vendor.getAll().catch(()=>[]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].assetState.getAll().catch(()=>[]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].company.getAll().catch(()=>[]),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].site.getAll().catch(()=>[])
                ]);
                setProductTypes(productTypesRes);
                setVendors(vendorsRes);
                setAssetStates(assetStatesRes);
                setCompanies(companiesRes);
                setSites(sitesRes);
            } catch  {
            // Los catálogos ya manejan su fallback individual a []
            }
        };
        loadCatalogs();
    }, []);
    // Cargar activos paginados desde el servidor
    const loadAssets = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(async ()=>{
        try {
            setIsLoading(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].asset.getAll({
                page: currentPage,
                limit: pageSize,
                search: searchQuery.trim() || undefined
            });
            const list = res?.data || [];
            const total = res?.meta?.total || 0;
            setAssets(list);
            setFilteredAssets(list);
            setTotalAssets(total);
        } catch  {
            setAssets([]);
            setFilteredAssets([]);
            setTotalAssets(0);
        } finally{
            setIsLoading(false);
        }
    }, [
        currentPage,
        pageSize,
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        loadAssets();
    }, [
        loadAssets
    ]);
    // Obtener usuarios únicos de los activos
    const uniqueUsers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const userMap = new Map();
        assets.forEach((asset)=>{
            if (asset.user && asset.user.userID && asset.user.name) {
                userMap.set(asset.user.userID, {
                    userID: asset.user.userID,
                    name: asset.user.name
                });
            }
        });
        return Array.from(userMap.values()).sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        assets
    ]);
    // Tipos de activo disponibles para filtros
    const filteredProductTypes = productTypes;
    // Extraer valores únicos de componentes desde los activos
    const uniqueRAM = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const values = new Set();
        assets.forEach((a)=>{
            if (a.assetDetail?.ram) values.add(a.assetDetail.ram);
        });
        return Array.from(values).sort();
    }, [
        assets
    ]);
    const uniqueHddCapacity = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const values = new Set();
        assets.forEach((a)=>{
            if (a.assetDetail?.hddCapacity) values.add(a.assetDetail.hddCapacity);
        });
        return Array.from(values).sort();
    }, [
        assets
    ]);
    const uniqueHddModel = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const values = new Set();
        assets.forEach((a)=>{
            if (a.assetDetail?.hddModel) values.add(a.assetDetail.hddModel);
        });
        return Array.from(values).sort();
    }, [
        assets
    ]);
    const uniqueOS = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const values = new Set();
        assets.forEach((a)=>{
            if (a.assetDetail?.operatingSystem) values.add(a.assetDetail.operatingSystem);
        });
        return Array.from(values).sort();
    }, [
        assets
    ]);
    const uniqueMemoryType = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const values = new Set();
        assets.forEach((a)=>{
            if (a.assetDetail?.physicalMemory) values.add(a.assetDetail.physicalMemory);
        });
        return Array.from(values).sort();
    }, [
        assets
    ]);
    const uniqueSites = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const siteMap = new Map();
        assets.forEach((a)=>{
            if (a.site && a.site.siteID && a.site.name) {
                siteMap.set(a.site.siteID, {
                    siteID: a.site.siteID,
                    name: a.site.name
                });
            }
        });
        return Array.from(siteMap.values()).sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        assets
    ]);
    const uniqueDepartments = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const deptMap = new Map();
        assets.forEach((a)=>{
            if (a.depart && a.depart.departID && a.depart.Name) {
                deptMap.set(a.depart.departID, {
                    departID: a.depart.departID,
                    name: a.depart.Name
                });
            }
        });
        return Array.from(deptMap.values()).sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        assets
    ]);
    const uniqueProcessors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const values = new Set();
        assets.forEach((a)=>{
            if (a.assetDetail?.processor) values.add(a.assetDetail.processor);
        });
        return Array.from(values).sort();
    }, [
        assets
    ]);
    const uniqueManufacturers = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const values = new Set();
        assets.forEach((a)=>{
            if (a.assetDetail?.productManuf) values.add(a.assetDetail.productManuf);
        });
        return Array.from(values).sort();
    }, [
        assets
    ]);
    // Determinar grupo activo desde los chips de filtro
    const activeGroup = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const grupoChips = filterChips.filter((c)=>c.facet === "grupo");
        if (grupoChips.length === 1) return grupoChips[0].value;
        return null; // Ninguno o múltiples grupos → mostrar todos los filtros
    }, [
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
    const allowedTechFilters = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        if (!activeGroup) return null; // null = mostrar todos
        return new Set(TECH_FILTERS_BY_GROUP[activeGroup] || []);
    }, [
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
    const facets = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        const allFacets = [
            {
                key: "grupo",
                label: "Grupo",
                color: "slate",
                options: ASSET_GROUPS.map((g)=>({
                        value: g,
                        label: g
                    }))
            },
            {
                key: "empresa",
                label: "Empresa",
                color: "blue",
                options: companies.map((c)=>({
                        value: String(c.companyID),
                        label: c.description
                    }))
            },
            {
                key: "site",
                label: "Site",
                color: "sky",
                options: uniqueSites.map((s)=>({
                        value: String(s.siteID),
                        label: s.name
                    }))
            },
            {
                key: "departamento",
                label: "Departamento",
                color: "lime",
                options: uniqueDepartments.map((d)=>({
                        value: String(d.departID),
                        label: d.name
                    }))
            },
            {
                key: "usuario",
                label: "Usuario",
                color: "emerald",
                options: uniqueUsers.map((u)=>({
                        value: String(u.userID),
                        label: u.name
                    }))
            },
            {
                key: "estado",
                label: "Estado",
                color: "amber",
                options: assetStates.map((s)=>({
                        value: String(s.assetStateID),
                        label: s.name
                    }))
            },
            {
                key: "tipo",
                label: "Tipo",
                color: "purple",
                options: filteredProductTypes.map((pt)=>({
                        value: String(pt.productTypeID),
                        label: pt.name
                    }))
            },
            {
                key: "proveedor",
                label: "Proveedor",
                color: "violet",
                options: vendors.map((v)=>({
                        value: String(v.vendorID),
                        label: v.name
                    }))
            },
            {
                key: "fabricante",
                label: "Fabricante",
                color: "stone",
                options: uniqueManufacturers.map((v)=>({
                        value: v,
                        label: v
                    }))
            },
            // Filtros técnicos (condicionales según grupo)
            {
                key: "ram",
                label: "RAM",
                color: "cyan",
                options: uniqueRAM.map((v)=>({
                        value: v,
                        label: v
                    }))
            },
            {
                key: "memoria_tipo",
                label: "Tipo Memoria",
                color: "teal",
                options: uniqueMemoryType.map((v)=>({
                        value: v,
                        label: v
                    }))
            },
            {
                key: "disco_cap",
                label: "Capacidad Disco",
                color: "orange",
                options: uniqueHddCapacity.map((v)=>({
                        value: v,
                        label: v
                    }))
            },
            {
                key: "disco_tipo",
                label: "Tipo Disco",
                color: "rose",
                options: uniqueHddModel.map((v)=>({
                        value: v,
                        label: v
                    }))
            },
            {
                key: "so",
                label: "Sistema Operativo",
                color: "indigo",
                options: uniqueOS.map((v)=>({
                        value: v,
                        label: v
                    }))
            },
            {
                key: "procesador",
                label: "Procesador",
                color: "fuchsia",
                options: uniqueProcessors.map((v)=>({
                        value: v,
                        label: v
                    }))
            }
        ];
        // Filtrar facetas técnicas según el grupo seleccionado
        if (allowedTechFilters === null) return allFacets; // Sin grupo → todos
        return allFacets.filter((f)=>!TECH_FILTER_KEYS.has(f.key) || allowedTechFilters.has(f.key));
    }, [
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
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (allowedTechFilters === null) return; // Sin grupo → no limpiar
        setFilterChips((prev)=>prev.filter((c)=>!TECH_FILTER_KEYS.has(c.facet) || allowedTechFilters.has(c.facet)));
    }, [
        allowedTechFilters
    ]);
    // Aplicar filtros cuando cambien
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let result = [
            ...assets
        ];
        // Aplicar chips: AND entre facetas distintas, OR dentro de la misma faceta
        const chipsByFacet = new Map();
        filterChips.forEach((chip)=>{
            if (!chipsByFacet.has(chip.facet)) {
                chipsByFacet.set(chip.facet, new Set());
            }
            chipsByFacet.get(chip.facet).add(chip.value);
        });
        if (chipsByFacet.has("grupo")) {
            const values = chipsByFacet.get("grupo");
            result = result.filter((a)=>a.productType?.group && values.has(a.productType.group));
        }
        if (chipsByFacet.has("empresa")) {
            const values = chipsByFacet.get("empresa");
            result = result.filter((a)=>values.has(String(a.companyID)));
        }
        if (chipsByFacet.has("site")) {
            const values = chipsByFacet.get("site");
            result = result.filter((a)=>values.has(String(a.siteID)));
        }
        if (chipsByFacet.has("departamento")) {
            const values = chipsByFacet.get("departamento");
            result = result.filter((a)=>a.depart && values.has(String(a.depart.departID)));
        }
        if (chipsByFacet.has("usuario")) {
            const values = chipsByFacet.get("usuario");
            result = result.filter((a)=>values.has(String(a.userID)));
        }
        if (chipsByFacet.has("estado")) {
            const values = chipsByFacet.get("estado");
            result = result.filter((a)=>values.has(String(a.assetState)));
        }
        if (chipsByFacet.has("tipo")) {
            const values = chipsByFacet.get("tipo");
            result = result.filter((a)=>values.has(String(a.productTypeID)));
        }
        if (chipsByFacet.has("proveedor")) {
            const values = chipsByFacet.get("proveedor");
            result = result.filter((a)=>values.has(String(a.vendorID)));
        }
        if (chipsByFacet.has("ram")) {
            const values = chipsByFacet.get("ram");
            result = result.filter((a)=>a.assetDetail?.ram && values.has(a.assetDetail.ram));
        }
        if (chipsByFacet.has("disco_cap")) {
            const values = chipsByFacet.get("disco_cap");
            result = result.filter((a)=>a.assetDetail?.hddCapacity && values.has(a.assetDetail.hddCapacity));
        }
        if (chipsByFacet.has("disco_tipo")) {
            const values = chipsByFacet.get("disco_tipo");
            result = result.filter((a)=>a.assetDetail?.hddModel && values.has(a.assetDetail.hddModel));
        }
        if (chipsByFacet.has("so")) {
            const values = chipsByFacet.get("so");
            result = result.filter((a)=>a.assetDetail?.operatingSystem && values.has(a.assetDetail.operatingSystem));
        }
        if (chipsByFacet.has("memoria_tipo")) {
            const values = chipsByFacet.get("memoria_tipo");
            result = result.filter((a)=>a.assetDetail?.physicalMemory && values.has(a.assetDetail.physicalMemory));
        }
        if (chipsByFacet.has("procesador")) {
            const values = chipsByFacet.get("procesador");
            result = result.filter((a)=>a.assetDetail?.processor && values.has(a.assetDetail.processor));
        }
        if (chipsByFacet.has("fabricante")) {
            const values = chipsByFacet.get("fabricante");
            result = result.filter((a)=>a.assetDetail?.productManuf && values.has(a.assetDetail.productManuf));
        }
        // Filtrar por búsqueda de texto libre
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter((asset)=>asset.name.toLowerCase().includes(query) || asset.assetDetail?.serialNum?.toLowerCase().includes(query) || asset.assetDetail?.assetTAG?.toLowerCase().includes(query) || asset.user?.name?.toLowerCase().includes(query) || asset.depart?.Name?.toLowerCase().includes(query) || asset.vendor?.name?.toLowerCase().includes(query) || asset.productType?.name?.toLowerCase().includes(query));
        }
        setFilteredAssets(result);
    }, [
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
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success("Lista actualizada");
    };
    const handleCreateAsset = ()=>{
        setIsCreateModalOpen(true);
    };
    const handleCreateSuccess = ()=>{
        loadAssets();
    };
    const handleProductTypeCreated = async ()=>{
        const productTypesRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].productType.getAll().catch(()=>[]);
        setProductTypes(productTypesRes);
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
        if (asset.assetStateInfo?.name === "Baja") {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error("No se puede editar un activo dado de baja");
            return;
        }
        setEditingAsset(asset);
        setIsEditModalOpen(true);
    };
    const handleDirectEdit = (asset)=>{
        if (asset.assetStateInfo?.name === "Baja") {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error("No se puede editar un activo dado de baja");
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
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].report.downloadAssetsCsv(filters);
            const dateStr = new Date().toISOString().split("T")[0];
            triggerDownload(new Blob([
                blob
            ], {
                type: "text/csv"
            }), `inventario_${dateStr}.csv`);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success("CSV exportado exitosamente");
        } catch  {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error("Error al exportar CSV");
        } finally{
            setIsExporting(false);
        }
    };
    const handleExportExcel = async ()=>{
        try {
            setIsExporting(true);
            const filters = {};
            if (activeGroup) filters.group = activeGroup;
            const blob = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"].report.downloadAssetsExcel(filters);
            const dateStr = new Date().toISOString().split("T")[0];
            triggerDownload(new Blob([
                blob
            ], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            }), `inventario_${dateStr}.xlsx`);
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].success("Excel exportado exitosamente");
        } catch  {
            __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].error("Error al exportar Excel");
        } finally{
            setIsExporting(false);
        }
    };
    const handleOpenDeliveryReport = (assetID)=>{
        setDeliveryAssetID(assetID);
        setIsDeliveryModalOpen(true);
    };
    const handleImportCSV = ()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$sonner__$5b$external$5d$__$28$sonner$2c$__esm_import$29$__["toast"].info("Funcionalidad de importación en desarrollo");
    };
    const isAllSelected = paginatedAssets.length > 0 && paginatedAssets.every((a)=>selectedAssets.has(a.assetID));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MainLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["MainLayout"], {
        breadcrumb: {
            title: "Altas",
            subtitle: "Registro de activos TI"
        },
        children: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 px-4 py-2 border-b bg-gray-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OmniboxFilter$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["OmniboxFilter"], {
                                facets: facets,
                                chips: filterChips,
                                onChipsChange: setFilterChips,
                                searchQuery: searchQuery,
                                onSearchQueryChange: setSearchQuery,
                                pinned: isSearchPinned,
                                onPinnedChange: setIsSearchPinned
                            }, void 0, false, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 667,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        disabled: isConsultor,
                                        onClick: handleCreateAsset,
                                        title: isConsultor ? "No tienes permisos para registrar activos" : undefined,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("h-8 text-sm font-normal", isConsultor && "bg-gray-100 text-gray-400 border-gray-200 opacity-60 cursor-not-allowed"),
                                        children: "Nuevo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 679,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "h-8 text-sm font-normal",
                                                    children: [
                                                        "Acciones",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            className: "h-4 w-4 ml-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/altas/index.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleExportCsv,
                                                        disabled: isExporting,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 702,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Exportar a CSV"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleExportExcel,
                                                        disabled: isExporting,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 706,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Exportar a Excel"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 705,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleImportCSV,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Import from CSV"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 710,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: handleRefresh,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                className: "h-4 w-4 mr-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 716,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Refresh"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 700,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 693,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 678,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 text-sm text-gray-600 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
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
                                        ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: size,
                                                children: size
                                            }, size, false, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 734,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 725,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 739,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-7 w-7",
                                        onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                        disabled: currentPage <= 1 || isLoading,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 749,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 742,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "icon",
                                        className: "h-7 w-7",
                                        onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                        disabled: currentPage >= totalPages || isLoading,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 758,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 751,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 724,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 665,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/altas/index.tsx",
                                lineNumber: 767,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/pages/altas/index.tsx",
                            lineNumber: 766,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Table"], {
                            style: {
                                tableLayout: "fixed",
                                width: Object.values(colWidths).reduce((a, b)=>a + b, 0)
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("colgroup", {
                                    children: Object.entries(colWidths).map(([key, w])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("col", {
                                            style: {
                                                width: w
                                            }
                                        }, key, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 773,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/altas/index.tsx",
                                    lineNumber: 771,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                                    className: "bg-gray-50 sticky top-0 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
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
                                        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                                className: "font-semibold text-gray-700 relative select-none overflow-hidden text-ellipsis whitespace-nowrap",
                                                style: {
                                                    width: colWidths[col.key]
                                                },
                                                children: [
                                                    col.label,
                                                    col.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        onMouseDown: onResizeStart(col.key),
                                                        className: "absolute right-0 top-0 bottom-0 w-1.5 cursor-col-resize hover:bg-blue-400 active:bg-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, col.key, true, {
                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                lineNumber: 793,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 778,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/altas/index.tsx",
                                    lineNumber: 777,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                                    children: paginatedAssets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                            colSpan: 12,
                                            className: "h-24 text-center text-gray-500",
                                            children: "No se encontraron activos"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 813,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/altas/index.tsx",
                                        lineNumber: 812,
                                        columnNumber: 21
                                    }, this) : paginatedAssets.map((asset)=>{
                                        const isBaja = asset.assetStateInfo?.name === "Baja";
                                        const isEditDisabled = isBaja || isConsultor;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("hover:bg-gray-50", selectedAssets.has(asset.assetID) && "bg-blue-50", isBaja && "opacity-60 bg-red-50/50"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1 rounded transition-colors", isEditDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-amber-50"),
                                                            title: isBaja ? "Activo dado de baja - no se permite editar" : isConsultor ? "No tienes permisos para editar activos" : "Editar activo",
                                                            disabled: isEditDisabled,
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                if (!isEditDisabled) handleDirectEdit(asset);
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", isEditDisabled ? "text-gray-300" : "text-gray-400 hover:text-amber-600")
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/pages/altas/index.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/pages/altas/index.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 834,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 833,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        className: "font-medium text-blue-600 hover:underline truncate block text-left max-w-full",
                                                        title: asset.name,
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handleOpenDetail(asset.assetID);
                                                        },
                                                        children: asset.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.company?.description || "",
                                                    children: asset.company?.description || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 871,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.site?.name || "",
                                                    children: asset.site?.name || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 874,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.depart?.Name || "",
                                                    children: asset.depart?.Name || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 877,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.user?.name || "",
                                                    children: asset.user?.name || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 880,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.productType?.name || "",
                                                    children: asset.productType?.name || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.assetDetail?.productManuf || "",
                                                    children: asset.assetDetail?.productManuf || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.assetDetail?.model || "",
                                                    children: asset.assetDetail?.model || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    title: asset.assetDetail?.serialNum || "",
                                                    children: asset.assetDetail?.serialNum || "-"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                                    className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cn"])(isBaja && "text-red-600 font-semibold"),
                                                        children: asset.assetStateInfo?.name || "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/pages/altas/index.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/pages/altas/index.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, asset.assetID, true, {
                                            fileName: "[project]/src/pages/altas/index.tsx",
                                            lineNumber: 822,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/altas/index.tsx",
                                    lineNumber: 810,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/altas/index.tsx",
                            lineNumber: 770,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 764,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CreateAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["CreateAssetModal"], {
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
                        lineNumber: 910,
                        columnNumber: 11
                    }, this),
                    editingAsset && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$EditAssetModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["EditAssetModal"], {
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
                        lineNumber: 924,
                        columnNumber: 13
                    }, this),
                    detailAssetID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetDetailModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AssetDetailModal"], {
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
                        lineNumber: 943,
                        columnNumber: 13
                    }, this),
                    assignmentAssetID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AssetAssignmentModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AssetAssignmentModal"], {
                        assetID: assignmentAssetID,
                        isOpen: isAssignmentModalOpen,
                        onClose: ()=>{
                            setIsAssignmentModalOpen(false);
                            setAssignmentAssetID(null);
                        },
                        onSuccess: loadAssets
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 958,
                        columnNumber: 13
                    }, this),
                    deliveryAssetID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DeliveryReportModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["DeliveryReportModal"], {
                        assetID: deliveryAssetID,
                        isOpen: isDeliveryModalOpen,
                        onClose: ()=>{
                            setIsDeliveryModalOpen(false);
                            setDeliveryAssetID(null);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/pages/altas/index.tsx",
                        lineNumber: 971,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/altas/index.tsx",
                lineNumber: 663,
                columnNumber: 9
            }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/altas/index.tsx",
        lineNumber: 659,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=src_58d7b11d._.js.map