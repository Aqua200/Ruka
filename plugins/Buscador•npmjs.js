

import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `✿︎ Escribe el nonbre del scraper.\nEjemplo: ${usedPrefix + command} yt-search`, m, )

try {

await m.react(rwait)
conn.reply(m.chat, '✿︎ Buscando el scraper....', m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons, 
sourceUrl: channel }}})

let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()

if (!objects.length) return conn.reply(m.chat, `No se encontraron resultados de: ${text}`, m, )

let txt = objects.map(({ package: pkg }) => {
return `【 ★ Sylpha - Scraper ★ 】

☾ NσɱႦɾҽ: ${pkg.name}
☾ Vҽɾʂισɳ: V${pkg.version}
☾ Eɳʅαƈҽ: ${pkg.links.npm}
☾ Dҽʂƈɾιρƈισɳ: ${pkg.description}
\n\n----------`
}).join`\n\n`

await conn.reply(m.chat, txt, m, )
await m.react(done)
} catch {
await conn.reply(m.chat, '✿︎ Ocurrió un error', m, )
await m.react(error)
}}

handler.help = ['npmjs']
handler.tags = ['buscador']
handler.command = ['npmjs']
handler.register = false
handler.yenes = 1
export default handler
