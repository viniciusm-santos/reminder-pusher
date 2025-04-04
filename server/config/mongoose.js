import debug from "debug";
import mongoose from "mongoose";
import config from "config";

const log = debug("reminder-pusher:config:mongoose");

mongoose.connect(config.get("mongo.uri"));
mongoose.connection.on("error", (err) => log("mongodb err", err));

export default mongoose;
