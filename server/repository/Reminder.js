import mongoose from "../config/mongoose.js";
import schema from "../schema/Reminder.js";
const model = mongoose.model("Reminder", schema);

const Reminder = {
  list() {
    const query = {};

    return model.find(query);
  },
  byId(id) {
    return model.findOne({ _id: id });
  },
  create(data) {
    const reminder = new model(data);
    return reminder.save();
  },
  updateById(id, data) {
    return model.updateOne({ _id: id }, data);
  },
  deleteById(id) {
    return model.deleteOne({ _id: id });
  },
};

export default Reminder;
