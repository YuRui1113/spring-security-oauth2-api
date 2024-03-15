import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserManagerSettings } from "oidc-client";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthenticationService } from "../services/auth/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private readonly authService: AuthenticationService,
        private readonly router: Router) {
    }

    private checkSsoUrl(url: string): boolean {
        const ssoConfig: UserManagerSettings = environment.authConfig!;
        let found = environment.useSso && url.startsWith(ssoConfig.authority!);
        return !!found;
    }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.authService.getAccessToken();
        const headers = req.headers
        .set('Authorization',`Bearer ${accessToken}`)
        .set('Access-Control-Allow-Credentials', 'true')
        .set('Access-Control-Allow-Origin', '*');
        console.info(`Bearer ${accessToken}`);
        const authReq = req.clone({ headers });

        return next.handle(authReq).pipe(
            tap(
                data => {
                    console.info(data);
                    console.info(`request url:${req.url}`);        
                }
            ),
            tap(
                () => { },
                error => {
                    const respError = error as HttpErrorResponse;
                    if (
                        respError &&
                        (respError.status === 401 ||
                            respError.status === 403)
                    ) {
                        debugger;
                        this.router.navigate(['/unauthorized']);
                    }
                }
            )
        );
    }
}