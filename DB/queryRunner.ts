// lib/db.js
import sqlite3 from "sqlite3";
import { ISqlite, open } from "sqlite";

/**
 * A function that runs a query on the SQLite database.
 *
 * @param {string} query - The SQL query to execute.
 * @param {Array} params - The parameters for the query (optional).
 * @returns {Promise} - Resolves to the query result (rows) or throws an error.
 */
import { join } from "path";

// Inside your function:
const databasePath = join(process.cwd(), "/DB/dua_main.sqlite");
export async function runQuery(query: ISqlite.SqlType, params = []) {
  try {
    // Open the SQLite database
    const db = await open({
      filename: databasePath, // Path to your SQLite file
      driver: sqlite3.Database,
    });

    // Run the query with optional parameters
    const rows = await db.all(query, params);

    // Close the database connection
    await db.close();

    // Return the results
    return rows;
  } catch (error) {
    console.error("Error querying database:", error);
    throw error; // Rethrow error if something goes wrong
  }
}
