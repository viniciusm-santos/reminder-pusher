import pg from "pg";
import debug from "debug";
const log = debug("reminder-pusher:config:pg");
const pool = new pg.Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "reminder_pusher",
  max: 5,
});

pool.on("error", (err) => log("postgres err", err));
export default pool;
