let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let lenGB = bahasaAK.lenguaje() == 'en' ? usedPrefix + 'on antitoxic' : usedPrefix + 'on antitoxicos';
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.reply(m.chat, bahasaAK.smsAdveu1() + lenGB, fkontak, m) 
//conn.sendButton(m.chat, wm, bahasaAK.smsAdveu1() + lenGB, null, [[bahasaAK.smsEncender(), lenGB]], fkontak, m)

let who 
let img = 'https://i.imgur.com/DvHoMc3.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, bahasaAK.smsMalused3() + `*${usedPrefix + command} @${name} ${bahasaAK['smsAdveu2']()}*`, fkontak, m)  	
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) return conn.reply(m.chat, bahasaAK.smsAdveu3() + `*${usedPrefix + command} @${name} ${bahasaAK['smsAdveu2']()}*`, fkontak, m)  	
try {
user.warn += 1
await m.reply(
    `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
    } ${bahasaAK['smsAdveu4']()}\n\n🫵 *${text}*\n\n*${bahasaAK['smsAdveu5']()}*\n⚠️ *${user.warn}/4*\n${wm}`,
    null,
    { mentions: [who] });
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} ${bahasaAK['smsAdveu4']()}\n\n🫵 *${text}*`, `*${bahasaAK['smsAdveu5']()}*\n⚠️ *${user.warn}/4*\n\n${wm}`, img, [
[bahasaAK.smsToxic4(), '.ok'],
[bahasaAK.smsAdveu6(), bahasaAK.lenguaje() == 'en' ? usedPrefix + 'inventory' : usedPrefix + 'inventario']], false, { mentions: [who] }) //[m.sender]*/
	
if (user.warn >= 4) {
user.warn = 0
await m.reply(`${bahasaAK['smsAdveu7']()}\n*@${who.split`@`[0]}* ${bahasaAK['smsAdveu8']()}`, false, { mentions: [who] })
user.banned = true
await conn.groupParticipantsUpdate(m.chat, [who], 'remove') //@${m.sender.split`@`[0]}
//await this.updateBlockStatus(m.sender, 'block') 
}	
return !1
} catch (e) {
await m.reply(m.chat, `\n${wm}`, bahasaAK['smsMalError3']() + '#report ' + usedPrefix + command, m)   
//await conn.sendButton(m.chat, `\n${wm}`, bahasaAK['smsMalError3']() + '#report ' + usedPrefix + command, null, [[bahasaAK.smsMensError1(), `#reporte ${bahasaAK['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${bahasaAK['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(advertir|advertencia|Advertencias|warn|warning)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
