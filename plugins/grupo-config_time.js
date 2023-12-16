/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
try{
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let isClose = {
'open': 'not_announcement',
'abrir': 'not_announcement',
'abierto': 'not_announcement',
'buka': 'not_announcement',
'on': 'not_announcement',
'1': 'not_announcement',
	
'close': 'announcement',
'cerrar': 'announcement',	
'cerrado': 'announcement',		
'tutup': 'announcement',
'off': 'announcement',
'0': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) {
	
let nombre = [ 
bahasaAK.smsGrupoTime9() + '1' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime10() + '1' + bahasaAK.smsGrupoTime11(), 
	
bahasaAK.smsGrupoTime9() + '2' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime10() + '2' + bahasaAK.smsGrupoTime11(), 
	
bahasaAK.smsGrupoTime9() + '3' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime10() + '3' + bahasaAK.smsGrupoTime11(), 
	
bahasaAK.smsGrupoTime9() + '4' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime10() + '4' + bahasaAK.smsGrupoTime11(), 
	
bahasaAK.smsGrupoTime9() + '5' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime10() + '5' + bahasaAK.smsGrupoTime11(), 
	
bahasaAK.smsGrupoTime9() + '6' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime10() + '6' + bahasaAK.smsGrupoTime11(), 
	
bahasaAK.smsGrupoTime9() + '7' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime10() + '7' + bahasaAK.smsGrupoTime11(), 
	
bahasaAK.smsGrupoTime9() + '10' + bahasaAK.smsGrupoTime11(),
bahasaAK.smsGrupoTime10() + '10' + bahasaAK.smsGrupoTime11(),

bahasaAK.smsGrupoTime9() + '12' + bahasaAK.smsGrupoTime11(),
bahasaAK.smsGrupoTime10() + '12' + bahasaAK.smsGrupoTime11(),

bahasaAK.smsGrupoTime9() + '24' + bahasaAK.smsGrupoTime11(),
bahasaAK.smsGrupoTime10() + '24' + bahasaAK.smsGrupoTime11()]

let descripción = [ 
bahasaAK.smsGrupoTime12() + '1' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime13() + '1' + bahasaAK.smsGrupoTime11() + '\n', 
	
bahasaAK.smsGrupoTime12() + '2' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime13() + '2' + bahasaAK.smsGrupoTime11() + '\n', 
	
bahasaAK.smsGrupoTime12() + '3' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime13() + '3' + bahasaAK.smsGrupoTime11() + '\n',  
	
bahasaAK.smsGrupoTime12() + '4' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime13() + '4' + bahasaAK.smsGrupoTime11() + '\n', 
	
bahasaAK.smsGrupoTime12() + '5' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime13() + '5' + bahasaAK.smsGrupoTime11() + '\n', 
	
bahasaAK.smsGrupoTime12() + '6' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime13() + '6' + bahasaAK.smsGrupoTime11() + '\n', 
	
bahasaAK.smsGrupoTime12() + '7' + bahasaAK.smsGrupoTime11(), 
bahasaAK.smsGrupoTime13() + '7' + bahasaAK.smsGrupoTime11() + '\n', 
	
bahasaAK.smsGrupoTime12() + '10' + bahasaAK.smsGrupoTime11(),
bahasaAK.smsGrupoTime13() + '10' + bahasaAK.smsGrupoTime11() + '\n', 

bahasaAK.smsGrupoTime12() + '12' + bahasaAK.smsGrupoTime11(),
bahasaAK.smsGrupoTime13() + '12' + bahasaAK.smsGrupoTime11() + '\n', 

bahasaAK.smsGrupoTime12() + '24' + bahasaAK.smsGrupoTime11(),
bahasaAK.smsGrupoTime13() + '24' + bahasaAK.smsGrupoTime11()]

let comando = [ 
"open 1", "cerrar 1", 
"open 2", "cerrar 2",
"open 3", "cerrar 3",
"open 4", "cerrar 4",
"open 5", "cerrar 5",
"open 6", "cerrar 6",
"open 7", "cerrar 7",
"open 10", "cerrar 10",
"open 12", "cerrar 12",
"open 24", "cerrar 24"]

let sections = Object.keys(nombre, descripción, comando).map((v, index) => ({ title: `${bahasaAK.smsParaAdmins()}`,
rows: [{ title: `${nombre[v]}`, description: `${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let caption = `${bahasaAK['smsAvisoMG']()}
${bahasaAK['smsMalused']()}
${bahasaAK['smsGrupoTime1']()}
*${usedPrefix + command} ${bahasaAK.lenguaje() == 'en' ? 'open' : 'abrir'} 1*
${bahasaAK['smsGrupoTime2']()}
*${usedPrefix + command} ${bahasaAK.lenguaje() == 'en' ? 'close' : 'cerrar'} 1*`

const listMessage = {
text: `${wm}`,
footer: `${caption}`,
title: null,
buttonText: `⚙️ ${bahasaAK.smsConfi1()} ⚙️`,
sections }

await conn.reply(m.chat, `${bahasaAK['smsAvisoMG']()} ${bahasaAK['smsMalused']()} 
${bahasaAK['smsGrupoTime1']()}
*${usedPrefix + command} ${bahasaAK.lenguaje() == 'en' ? 'open' : 'abrir'} 1*
${bahasaAK['smsGrupoTime2']()}
*${usedPrefix + command} ${bahasaAK.lenguaje() == 'en' ? 'close' : 'cerrar'} 1*`, fkontak, m)
//await conn.sendMessage(m.chat, caption, {quoted: fkontak})
throw false
}
let timeoutset = 86400000 * args[1] / 24 //Una Hora 86400000
await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
m.reply(`${bahasaAK['smsAvisoRG']()} *${bahasaAK['smsGrupoTime3']()}* *${isClose == 'announcement' ? bahasaAK.smsGrupoTime4() : bahasaAK.smsGrupoTime5()} ${args[1] ? `${bahasaAK['smsGrupoTime6']()} ${clockString(timeoutset)}*` : ''}`)
})
if (args[1]) {
setTimeout(async () => {
await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
conn.reply(m.chat, `${isClose == 'not_announcement' ? bahasaAK.smsGrupoTime7() : bahasaAK.smsGrupoTime8()}!!`)
})
}, timeoutset)}

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, bahasaAK['smsMalError3']() + '#report ' + usedPrefix + command, null, [[bahasaAK.smsMensError1(), `#reporte ${bahasaAK['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${bahasaAK['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = /^(grouptime|gctime|grupotiempo)$/i
handler.botAdmin = true
handler.group = true 
handler.admin = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
