import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const handleRoute = (route: string, router: AppRouterInstance) => {
  router.push(route);
};
