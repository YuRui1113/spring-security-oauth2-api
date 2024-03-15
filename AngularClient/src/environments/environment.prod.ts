import { ProdAuthConfig } from "./auth/prod-auth.config";

export const environment = {
  production: true,
  siteName: 'Book Management System',
  restUrl: 'http://restapi.tyuapp.top',
  ssoUrl: 'http://localhost:5001',
  useSso: true,
  authConfig: ProdAuthConfig,
  pageSize: 10
};