// Concrete Strategy: Email Notification
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Sending Email: ".concat(message));
    };
    return EmailNotification;
}());
// Concrete Strategy: SMS Notification
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (message) {
        console.log("Sending SMS: ".concat(message));
    };
    return SMSNotification;
}());
// Context Class
var NotificationContext = /** @class */ (function () {
    function NotificationContext(notificationStrategy) {
        this._notificationStrategy = notificationStrategy;
    }
    NotificationContext.prototype.setNotificationStrategy = function (notificationStrategy) {
        this._notificationStrategy = notificationStrategy;
    };
    NotificationContext.prototype.notify = function (message) {
        this._notificationStrategy.send(message);
    };
    return NotificationContext;
}());
// Main Program
function main() {
    var notificationContext;
    // Use Email Notification
    notificationContext = new NotificationContext(new EmailNotification());
    notificationContext.notify("Hello via Email!");
    // Switch to SMS Notification
    notificationContext.setNotificationStrategy(new SMSNotification());
    notificationContext.notify("Hello via SMS!");
}
main();
