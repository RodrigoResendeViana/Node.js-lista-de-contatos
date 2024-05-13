const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
    name: {
        type: String,
        requires: [true, "Please, add the contact name"]
    },
    email: {
        type: String,
        requires: [true, "Please, add the contact email"]
    },
    phone: {
        type: String,
        requires: [true, "Please, add the contact phone"]
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Contact", contactSchema)