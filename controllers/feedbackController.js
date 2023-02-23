"use strict";
let sendTelegramMsg = require("./Integrations/telegram");

module.exports = class feedback {
  // if (order_type === "tg") {
  async send(data) {
    await sendTelegramMsg(data);
  }
  // }
};
