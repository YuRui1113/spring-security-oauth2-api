import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BookDetailsComponent } from './components/book/book-details/book-details.component';
import { FormatPipe } from './pipes/format.pipe';
import { DetailsPageButtonsComponent } from './components/shared/details-page-buttons/details-page-buttons.component';
import { FormHelper } from './components/shared/form-helper';
import { ConfirmComponent } from './components/shared/confirm/confirm.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { AuthenticationService } from './services/auth/authentication.service';
import { provideAnimations } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HeaderComponent,
    FooterComponent,
    NotificationComponent,
    PaginationComponent,
    BookDetailsComponent,
    FormatPipe,
    DetailsPageButtonsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [FormHelper,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthenticationService,
    provideAnimations()],
  bootstrap: [AppComponent]
})
export class AppModule { }
