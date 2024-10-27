export function before(m) {
const user = global.db.data.users[m.sender];
if (user.afk > -1) {
conn.reply(m.chat, `✿︎ Ya No Te Encuentras Inactivo\n${user.afkReason ? 'Motivo De La Inactividad: ' + user.afkReason : ''}\n\n*Tiempo De Inactividad: ${(new Date - user.afk).toTimeString()}*`, m, )
user.afk = -1;
user.afkReason = '';
}
const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
for (const jid of jids) {
const user = global.db.data.users[jid];
if (!user) {
continue;
}
const afkTime = user.afk;
if (!afkTime || afkTime < 0) {
continue;
}
const reason = user.afkReason || '';
conn.reply(m.chat, `✿︎ *El usuario se encuentra inactivo*`, m, )
}
return true;
}
