import { UserManagerSettings, WebStorageStateStore } from "oidc-client";

export const LocalAuthConfig: UserManagerSettings = {

    /** The URL of the OIDC/OAuth2 provider */
    authority: 'http://localhost:5001',

    /** Provide metadata when authority server does not allow CORS on the metadata endpoint */
    /*metadata: {
        issuer: 'http://localhost:8080',
        authorization_endpoint: 'http://localhost:8080/connect/authorize',
        token_endpoint: 'http://localhost:8080/connect/token',
        userinfo_endpoint: 'http://localhost:8080/connect/userinfo',
        end_session_endpoint: 'http://localhost:8080/connect/endsession',
        jwks_uri: 'http://localhost:8080/.well-known/openid-configuration/jwks'
    },*/

    /** Your client application's identifier as registered with the OIDC/OAuth2 */
    client_id: 'angular',
    client_secret: 'secret',

    /** The type of response desired from the OIDC/OAuth2 provider (default: 'id_token') */
    response_type: 'code',

    /** The scope being requested from the OIDC/OAuth2 provider (default: 'openid') */
    scope: 'openid profile apiBook.read',

    /** The redirect URI of your client application to receive a response from the OIDC/OAuth2 provider */
    redirect_uri: 'http://localhost:4200/login-callback',
    /** The OIDC/OAuth2 post-logout redirect URI */
    post_logout_redirect_uri: 'http://localhost:4200/logout-callback',

    /** Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration (default: false) */
    automaticSilentRenew: true,
    /** The URL for the page containing the code handling the silent renew */
    silent_redirect_uri: 'http://localhost:4200/silent-callback',

    /** Storage object used to persist User for currently authenticated user (default: session storage) */
    userStore: new WebStorageStateStore({
        store: window.localStorage,
    }),
}