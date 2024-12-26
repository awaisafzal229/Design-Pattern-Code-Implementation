var Database = /** @class */ (function () {
    // Private constructor to prevent instantiation
    function Database() {
        console.log("Database connection created.");
    }
    // Public method to get the single instance
    Database.getInstance = function () {
        if (this.instance === null) {
            this.instance = new Database();
        }
        return this.instance;
    };
    // Simulate a query execution
    Database.prototype.query = function (sql) {
        console.log("Executing SQL query: ".concat(sql));
    };
    Database.instance = null;
    return Database;
}());
// Usage
var db1 = Database.getInstance();
db1.query("SELECT * FROM users");
var db2 = Database.getInstance();
db2.query("INSERT INTO users (name) VALUES ('Awais Afzal')");
console.log(db1 === db2); // Output: true
