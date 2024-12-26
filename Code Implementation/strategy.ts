// Strategy Interface
interface INotificationStrategy {
  send(message: string): void;
}

// Concrete Strategy: Email Notification
class EmailNotification implements INotificationStrategy {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

// Concrete Strategy: SMS Notification
class SMSNotification implements INotificationStrategy {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// Context Class
class NotificationContext {
  private _notificationStrategy: INotificationStrategy;

  constructor(notificationStrategy: INotificationStrategy) {
    this._notificationStrategy = notificationStrategy;
  }

  setNotificationStrategy(notificationStrategy: INotificationStrategy): void {
    this._notificationStrategy = notificationStrategy;
  }

  notify(message: string): void {
    this._notificationStrategy.send(message);
  }
}

// Main Program
function main(): void {
  let notificationContext: NotificationContext;

  // Use Email Notification
  notificationContext = new NotificationContext(new EmailNotification());
  notificationContext.notify("Hello via Email!");

  // Switch to SMS Notification
  notificationContext.setNotificationStrategy(new SMSNotification());
  notificationContext.notify("Hello via SMS!");
}

main();
