let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let lenGB = bahasaAK.lenguaje() == 'en' ? usedPrefix + 'on antitoxic' : usedPrefix + 'on antitoxicos';
if (!db.data.chats[m.chat].antitoxic && m.isGroup) return conn.sendButton(m.chat, wm, bahasaAK.smsAdveu1() + lenGB, null, [[bahasaAK.smsEncender(), lenGB]], fkontak, m) 

let who
let img = 'https://i.imgur.com/vWnsjh8.jpg'
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
if (!who) return conn.reply(m.chat, bahasaAK.smsMalused3() + `*${usedPrefix + command} @${name}*`, fkontak, m)  
try{
user.warn -= 1
 
   await m.reply(`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`}  ${bahasaAK['smsAdveu10']()}\n\n*${bahasaAK['smsAdveu5']()}*\n⚠️ *${bahasaAK['smsAdveu11']()} ${user.warn + 1}/4*\n⚠️ *${bahasaAK['smsAdveu12']()} ${user.warn}/4*`, null, { mentions: [who]})
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} ${bahasaAK['smsAdveu10']()}`, `*${bahasaAK['smsAdveu5']()}*\n⚠️ *${bahasaAK['smsAdveu11']()} ${user.warn + 1}/4*\n⚠️ *${bahasaAK['smsAdveu12']()} ${user.warn}/4*\n\n${wm}`, img, [
[bahasaAK.smsAdveu9(), '.ok'],
[bahasaAK.smsAdveu6(), bahasaAK.lenguaje() == 'en' ? usedPrefix + 'inventory' : usedPrefix + 'inventario']], false, { mentions: [who] }) //[m.sender]*/
	
} catch (e) {
await m.reply(m.chat, `\n${wm}`, bahasaAK['smsMalError3']() + '#report ' + usedPrefix + command, m)   
//await conn.sendButton(m.chat, `\n${wm}`, bahasaAK['smsMalError3']() + '#report ' + usedPrefix + command, null, [[bahasaAK.smsMensError1(), `#reporte ${bahasaAK['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${bahasaAK['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(del|delete|eliminar|\-)advertir|quitar|warn(ing)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
