import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*✧ Responda a un video para convertir a AUDIO/MP#*`;
  const media = await q.download();
  if (!media) throw '*✧ Ocurrio un error al descargar el video*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*✧ Ocurrio un eror al intentar convertir a MP3, Vuelva intentarlo mas tarde*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = ['tomp3', 'toaudio'];
export default handler;
