import "dotenv/config";
import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect(process.env.MONGODB_URI);
    console.log("database connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
