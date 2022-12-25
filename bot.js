const qrcode = require("qrcode-terminal");

const { Client, LocalAuth } = require("whatsapp-web.js");
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  const content = message.body.toLowerCase();

  if (content === "ping") {
    message.reply("🏓 Pong!");
  } else if (content === "oi") {
    message.reply("Olá! 😄");
  } else {
    message.reply("Desculpe! Não entendi o que você quis dizer. 😥");
  }
});

client.initialize();