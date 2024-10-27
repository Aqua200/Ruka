import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {

const chat = global.db.data.chats[m.chat];
if (chat.isBaneed) return
if (/^bot$/i.test(m.text)) {
conn.reply(m.chat, `Hola este es Sylpha Bot, utiliza *.menu* para ver los comandos de la bot`, m, )
}
return !0;
};
export default handler;
