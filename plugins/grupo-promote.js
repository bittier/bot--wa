let handler = async (m, { conn,usedPrefix, command, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if(isNaN(text) && !text.match(/@/g)){

}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, bahasaAK.smsMalused3(), + `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
//conn.sendButton(m.chat, wm, bahasaAK['smsMalused3']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[bahasaAK.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, bahasaAK.smsDemott(), `*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
//conn.sendButton(m.chat, wm, bahasaAK['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[bahasaAK.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} } catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, bahasaAK['smsAvisoEG']() + bahasaAK['smsDemott2'](), fkontak, m)
}}
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler 
