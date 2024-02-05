import { open } from "sqlite";
import sqlite3 from "sqlite3";

let db = null;

export async function GET(req, res) {
  try {
    if (!db) {
      db = await open({
        filename: "G:/IRD 3/ird/app/database/dua_main.sqlite",
        driver: sqlite3.Database,
      });
    }

    const totalUrl = req.url.split("/");
    const subCategoryId = totalUrl[totalUrl.length - 1];

    // Perform database query to retrieve data based on the category ID
    // const category = await db.get("SELECT * FROM category WHERE cat_id = ?", subCategoryId);
    const duas = await db.all("SELECT * FROM dua WHERE subcat_id = ?", subCategoryId);

    // Check if the duas exists
    if (!duas) {
      return new Response(JSON.stringify({ error: "Sub Categories not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    // Return the filtered data as a JSON response with status 200
    return new Response(JSON.stringify(duas), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    console.error("Error during database operation:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
