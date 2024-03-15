import { LocalAuthConfig } from "./auth/local-auth.config";

export const environment = {
  production: false,
  siteName: 'Book Management System',
  restUrl: 'http://localhost:8080',
  ssoUrl: 'http://localhost:5001',
  useSso: true,
  authConfig: LocalAuthConfig,
  pageSize: 5
};