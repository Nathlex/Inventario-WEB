import { useRouter } from "next/router";
import { usePermissions } from "@/hooks/usePermissions";
import { AppSidebar } from "@/components/app.sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

function MainLayoutContent({
  children,
  breadcrumb,
}: {
  children: (sidebarState: string) => React.ReactNode;
  breadcrumb?: { title: string; subtitle: string };
}) {
  const { state: sidebarState } = useSidebar();
  const router = useRouter();
  const { loading, canAccessRoute } = usePermissions();

  const hasAccess = canAccessRoute(router.pathname);
  
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">{breadcrumb?.title}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumb?.subtitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {/* Render Main Content */}
        <main>
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            </div>
          ) : !hasAccess ? (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] gap-2 text-center px-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Acceso denegado
              </h2>
              <p className="text-sm text-gray-500">
                No tienes permisos asignados para acceder a esta sección.
              </p>
            </div>
          ) : (
            children(sidebarState)
          )}
        </main>
      </SidebarInset>
    </>
  );
}

export function MainLayout({
  children,
  breadcrumb,
}: {
  children: (sidebarState: string) => React.ReactNode;
  breadcrumb?: { title: string; subtitle: string };
}) {
  return (
    <SidebarProvider>
      <MainLayoutContent breadcrumb={breadcrumb}>
        {children}
      </MainLayoutContent>
    </SidebarProvider>
  );
}
