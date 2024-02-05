import path from 'path';
import { open } from "sqlite";
import sqlite3 from "sqlite3";

// Let's initialize it as null initially, and we will assign the actual database instance later.
let db = null;

// Define the GET request handler function
const dbFilePath = path.join(process.cwd(), 'app', 'database', 'dua_main.sqlite');

export async function GET(req, res) {
  try {
    // Check if the database instance has been initialized
    if (!db) {
      // If the database instance is not initialized, open the database connection
      db = await open({
        filename: dbFilePath, // Specify the database file path
        driver: sqlite3.Database, // Specify the database driver (sqlite3 in this case)
      });
    }

    // Perform database queries to retrieve data
    const categories = await db.all("SELECT * FROM category");

    // Return the data as a JSON response with status 200
    return new Response(JSON.stringify(categories), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error during database operation:", error);
    // Return an error response
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}

