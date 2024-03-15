import { NotificationType } from 'src/app/components/notification/notification-type';

export class NotificationData {

    constructor(public message: string,
        public type: NotificationType) {
    }
}