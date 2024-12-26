class Database {
  private static instance: Database | null = null;

  // Private constructor to prevent instantiation
  private constructor() {
    console.log("Database connection created.");
  }

  // Public method to get the single instance
  public static getInstance(): Database {
    if (this.instance === null) {
      this.instance = new Database();
    }
    return this.instance;
  }

  // Simulate a query execution
  public query(sql: string): void {
    console.log(`Executing SQL query: ${sql}`);
  }
}

// Usage
const db1 = Database.getInstance();
db1.query("SELECT * FROM users");

const db2 = Database.getInstance();
db2.query("INSERT INTO users (name) VALUES ('Awais Afzal')");

console.log(db1 === db2); // Output: true
