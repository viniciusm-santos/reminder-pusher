import debug from "debug";
import mongoist from "mongoist";
import config from "config";

const log = debug("reminder-pusher:config:mongoist");
const db = mongoist(config.get("mongo.uri"));
db.on("error", (err) => log("mongo err", err));
export default db;
