import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +5493876639332
global.confirmCode = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['573163952124', 'Creador 👑', true],
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//cambiar a true si el bot detecta sus propios comandos.
global.isBaileysFail = true
global.libreria = 'Baileys'
global.baileys = 'V 6.7.8'
global.vs = '0.0.1'
global.languaje = 'Español'
global.nameqr = 'Sylpha Bot'
global.namebot = 'Sylpha Bσƚ'
global.sessions = 'BotSession'
global.jadi = 'BotJadiBot'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '˚ ༘𝑹𝒖𝒌𝒂·˚₊˚ˑ༄ؘ'
global.botname = '˚ ༘𝑹𝒖𝒌𝒂·˚₊˚ˑ༄ؘ ✿︎'
global.wm = '˚ ༘𝑹𝒖𝒌𝒂·˚₊˚ˑ༄ؘ'
global.author = '𝙱𝚢 𝙽𝚎𝚢𝚔𝚘𝚘𝚛💜'
global.dev = '✨𝐒𝐭𝐚𝐫𝐥𝐢𝐠𝐡𝐭𝐬 𝐓𝐞𝐚𝐦✨'
global.textbot = '˚ ༘𝑹𝒖𝒌𝒂·˚₊˚ˑ༄ؘ'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./src/img/Menu.jpg')
global.imagen2 = fs.readFileSync('./src/img/Menu2.jpg')
global.imagen3 = fs.readFileSync('./src/img/Menu3.jpg')
global.welcome = fs.readFileSync('./src/img/welcome.jpg')
global.adios = fs.readFileSync('./src/img/adios.jpg')
global.catalogo = fs.readFileSync('./src/img/catalogo.jpg')
global.miniurl = fs.readFileSync('./src/img/miniurl.jpg')
global.avatar = fs.readFileSync('./src/img/avatar_contact.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/Ckzx2wkWdxQ7orAzC8tNeK'
global.grupo2 = ''
global.grupo3 = ''
global.channel = 'https://whatsapp.com/channel/0029VarsCsD545unQ5Lw7429'
global.md = '' 
global.yt = ''
global.tiktok = ''
global.correo = ''

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Bσƚ ԃҽ WԋαƚʂAρρ', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.esti = { key: {participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": `˚ ༘𝑹𝒖𝒌𝒂·˚₊˚ˑ༄ؘ`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Bσƚ ԃҽ WԋαƚʂAρρ`, 'jpegThumbnail': catalogo }}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69
global.maxwarn = '3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
