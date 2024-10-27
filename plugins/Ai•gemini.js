import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*Ingresa un texto para ejecutar este comando\n\n> Ejemplo:\n${usedPrefix + command} Hola`, m, )
try {
await m.react(rwait)
conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch {
await m.react(error)
await conn.reply(m.chat, `Ocurrio un error al ejecutar comando.`, m, )
}}
handler.command = ['gemini']
handler.help = ['gemini']
handler.tags = ['ai']

export default handler
