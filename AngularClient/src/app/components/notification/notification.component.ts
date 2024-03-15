import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { NotificationData } from './notification-data';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: NotificationData) { }

  ngOnInit(): void {
  }

  get getIcon() {
    switch (this.data.type) {
      case 'success':
        return '&#10003';
      case 'error':
        return '&#10005';
      case 'warn':
        return '&#9888';
      default:
        return undefined;
    }
  }
}