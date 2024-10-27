const handler = async (m, { conn, text, command, usedPrefix }) => {
// if (m.mentionedJid.includes(conn.user.jid)) return; // Evitar advertir al bot mismo
const pp = 'https://i.imgur.com/vWnsjh8.jpg'
let number, ownerNumber, aa, who;
if (m.isGroup) { 
who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text; 
} else who = m.chat;
  const user = global.db.data.users[who];
  const usuario = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason 
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*ツ Etiquete a una persona o responda a un mensaje del grupo para advertir al usuario*\n\n*Ejemplo:*\n*${usedPrefix + command} @tag*`;
  if (!who) {
return m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  }

for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (usuario.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, `…`, m, { mentions: [aa] })
return
}}

  user.warn += 1;
  await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} 𝚁𝙴𝙲𝙸𝙱𝙸𝙾 𝚄𝙽𝙰 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾!\nMotivo: ${sdms}\n*Advertencias: ${user.warn}/4*`, null, { mentions: [who] },
  );
  if (user.warn >= 4) {
    user.warn = 0;
    await m.reply(`*# Has sido advertido/a varias veces*\n*@${who.split`@`[0]}* *Superaste las 4 Adevrtencias, ahora seras expulsado/a ❀*`, null, { mentions: [who] },
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = ['advertir', 'advertencia', 'warn', 'warning'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
