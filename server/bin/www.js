#!/user/bin/env node
import app from "../app.js";
import debug from "debug";
const log = debug("reminder-pusher:www");
app.listen(3000, () => log("server started at port 3000"));
