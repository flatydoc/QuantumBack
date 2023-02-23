"use strict";
let config = require("../../config");
let sendMsg = require("request");

module.exports = async function sendTelegramMsg(data) {
  //   const phone = data.phone.replace(/\D/g, "");

  let fields = [
    "<b>Имя</b>: " + data.name,

    "<b>Номер телефона</b>: " + data.phone,

    data.option.name ? "<b>Выбранная услуга</b>: " + data.option.name : "",

    data.text ? "<b>Текст сообщения</b>: " + data.text : "",
  ];

  let msg = "";

  fields.forEach((field) => {
    msg += field + "\n";
  });

  msg = encodeURI(msg);
  const token = config.telegram.token;
  const chat = config.telegram.chatId;

  let options = {
    uri: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat}&parse_mode=html&text=${msg}`,
    method: "POST",
  };

  try {
    sendMsg(options, function (error, response, body) {
      console.log(data);
      if (response) {
        console.log("statusCode:", response && response.statusCode);
        response.statusCode === 200
          ? console.log("Успешно отправлено!")
          : console.log("Произошла ошибка!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
