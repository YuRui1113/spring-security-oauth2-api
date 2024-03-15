import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationData } from '../components/notification/notification-data';
import { NotificationType } from '../components/notification/notification-type';
import { NotificationComponent } from '../components/notification/notification.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  public success(message: string): void {
    this.notify(message, 'success');
  }

  public warn(message: string): void {
    this.notify(message, 'warn');
  }

  public error(message: string): void {
    this.notify(message, 'error');
  }

  private notify(message: string, type: NotificationType) {
    this.snackBar.openFromComponent(NotificationComponent, {
      duration: 4000,
      panelClass: type,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: new NotificationData(message, type)
    });
  }
}