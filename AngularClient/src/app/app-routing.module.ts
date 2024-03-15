import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { RouteEnum } from './enums/route-enum';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginCallbackComponent } from './components/auth/callback/login-callback.component';
import { LogoutCallbackComponent } from './components/auth/callback/logout-callback.component';
import { SilentCallbackComponent } from './components/auth/callback/silent-callback.component';
import { NotAuthorizedComponent } from './components/auth/not-authorized/not-authorized.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: RouteEnum.BOOK_LIST
  },
  {
    path: RouteEnum.BOOK_LIST,
    component: BookListComponent,
    canActivate: mapToCanActivate([AuthGuard])
  },
  {
    path: RouteEnum.LOGIN_CALLBACK,
    component: LoginCallbackComponent
  },
  {
    path: RouteEnum.LOGOUT_CALLBACK,
    component: LogoutCallbackComponent
  },
  {
    path: RouteEnum.SILENT_CALLBACK,
    component: SilentCallbackComponent
  },
  {
    path: RouteEnum.NOT_AUTHORIZED,
    component: NotAuthorizedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
