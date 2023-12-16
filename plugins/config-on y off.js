import fetch from 'node-fetch'
import fs from 'fs' 

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'

let titulo = [ 
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '✅' : '❌' : bahasaAK.smsNoGg()}`, 
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '✅' : '❌' : bahasaAK.smsNoGg()}`,  
bahasaAK.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.autolevelup ? '✅' : '❌' : bahasaAK.smsNoGg()}`,   
bahasaAK.smsParaOw() + ' ' + `${bot.restrict ? '✅' : '❌'}`,    
bahasaAK.smsParaOw() + ' ' + `${bot.antiCall ? '✅' : '❌'}`,
bahasaAK.smsParaOw() + ' ' + `${bot.antiSpam ? '✅' : '❌'}`,	
bahasaAK.smsParaOw() + ' ' + `${global.opts['self'] ? '❌' : '✅'}`,    
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '✅' : '❌' : bahasaAK.smsNoGg()}`,  
bahasaAK.smsParaOw() + ' ' + `${global.opts['autoread'] ? '✅' : '❌'}`, 
bahasaAK.smsParaOw() + ' ' + `${bot.temporal ? '✅' : '❌'}`,      
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.stickers ? '✅' : '❌' : bahasaAK.smsNoGg()}`,   
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autosticker ? '✅' : '❌' : bahasaAK.smsNoGg()}`,   
bahasaAK.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.reaction ? '✅' : '❌' : bahasaAK.smsNoGg()}`,    
bahasaAK.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.audios ? '✅' : '❌' : bahasaAK.smsNoGg()}`,  
bahasaAK.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.modohorny ? '✅' : '❌' : bahasaAK.smsNoGg()}`,   
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antitoxic ? '✅' : '❌' : bahasaAK.smsNoGg()}`,   
bahasaAK.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.antiver ? '✅' : '❌' : bahasaAK.smsNoGg()}`,  
bahasaAK.smsParaAdYOw() + ' ' + `${m.isGroup ? chat.delete ? '✅' : '❌' : bahasaAK.smsNoGg()}`,  
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '✅' : '❌' : bahasaAK.smsNoGg()}`,  
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '✅' : '❌' : bahasaAK.smsNoGg()}`,   
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : bahasaAK.smsNoGg()}`,    
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : bahasaAK.smsNoGg()}`,    
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : bahasaAK.smsNoGg()}`,    
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : bahasaAK.smsNoGg()}`,    
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : bahasaAK.smsNoGg()}`,   
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : bahasaAK.smsNoGg()}`,    
bahasaAK.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : bahasaAK.smsNoGg()}`,    
bahasaAK.smsParaOw() + ' ' + `${global.opts['pconly'] ? '✅' : '❌'}`,  
bahasaAK.smsParaOw() + ' ' + `${global.opts['gconly'] ? '✅' : '❌'}`]

let nombre = [ bahasaAK.smsWel1(), bahasaAK.smsDete1(), bahasaAK.smsANivel1(), bahasaAK.smsRestri1(), bahasaAK.smsLlamar1(), bahasaAK.smsAntiSp1(), bahasaAK.smsModP1(), bahasaAK.smsModAd1(), bahasaAK.smsLect1(), bahasaAK.smsTempo1(), bahasaAK.smsStik1(), bahasaAK.smsStickA1(), bahasaAK.smsReacc1(), bahasaAK.smsAudi1(), bahasaAK.smsModHor1(), bahasaAK.smsAntitoc1(), bahasaAK.smsModOb1(), bahasaAK.smsAntiEli1(), bahasaAK.smsAntiInt1(), bahasaAK.smsAntiE1(), bahasaAK.smsAntiEE1(), bahasaAK.smsAntiTT1(), bahasaAK.smsAntiYT1(), bahasaAK.smsAntiTEL1(), bahasaAK.smsAntiFB1(),
bahasaAK.smsAntiIG1(), bahasaAK.smsAntiTW1(), bahasaAK.smsSOLOP1(), bahasaAK.smsSOLOG1()]

let descripción = [ bahasaAK.smsWel2(), bahasaAK.smsDete2(), bahasaAK.smsANivel2(), bahasaAK.smsRestri2(), bahasaAK.smsLlamar2(), bahasaAK.smsAntiSp2(), bahasaAK.smsModP2(), bahasaAK.smsModAd2(), bahasaAK.smsLect2(), bahasaAK.smsTempo2(), bahasaAK.smsStik2(), bahasaAK.smsStickA2(), bahasaAK.smsReacc2(), bahasaAK.smsAudi2(), bahasaAK.smsModHor2(), bahasaAK.smsAntitoc2(), bahasaAK.smsModOb2(), bahasaAK.smsAntiEli2(), bahasaAK.smsAntiInt2(), bahasaAK.smsAntiE2(), bahasaAK.smsAntiEE2(), bahasaAK.smsAntiTT2(), bahasaAK.smsAntiYT2(), bahasaAK.smsAntiTEL2(), bahasaAK.smsAntiFB2(),
bahasaAK.smsAntiIG2(), bahasaAK.smsAntiTW2(), bahasaAK.smsSOLOP2(), bahasaAK.smsSOLOG2()]

let comando = [ "welcome", "detect", "autolevelup", "restrict", "anticall", "antispam", "public", "modoadmin", "autoread", "temporal", "stickers", "autosticker", "reaction", "audios", "modohorny", "antitoxic", "antiviewonce", "antidelete", "antifake", "antilink", "antilink2", "antitiktok", "antiyoutube", "antitelegram", "antifacebook",
"antinstagram", "antitwitter", "pconly", "gconly"]

let sections = Object.keys(titulo, nombre, descripción, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]} : ${command} ${comando[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let name = await conn.getName(m.sender)
/*const listMessage = {
text: `${bahasaAK.smsConfi10()}`,
footer: `╭━━━✦ *${bahasaAK.smsConfi1()}* ✦━━━━⬣
┃
┃🌟 ${bahasaAK.smsConfi2()} *${name}*
┃
${bahasaAK.smsConfi3()}
${bahasaAK.smsConfi4()}
┃
${bahasaAK.smsConfi5()}
${bahasaAK.smsConfi6()}
${bahasaAK.smsConfi7()}
${bahasaAK.smsConfi8()}
${m.isGroup ? `┃` : `┃\n${bahasaAK.smsConfi9()}`}
╰━━━━━✦ *${vs}* ✦━━━━⬣
${wm}`,
title: null,
buttonText: `⚙️ ${bahasaAK.smsConfi1()} ⚙️`,
sections }*/

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false

switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
    
case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break
    
case 'modohorny': case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
		
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
		
case 'jadibotmd': case 'modojadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 
    
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
    
case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'antispam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break
 
case 'modoadmin': case 'soloadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
   
case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break

case 'antiprivado':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break

case 'antitrabas':
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break

case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break

case 'modoia':
case 'chatgpt':
case 'ia':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.modoia = isEnable;      
break;      
      
case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.reply(m.chat, `${bahasaAK.smsConfi10()}\n\n🌟 ${bahasaAK.smsConfi2()} *@${toUser}*

${bahasaAK.smsConfi3()}
${bahasaAK.smsConfi4()}

${bahasaAK.smsConfi5()}
${bahasaAK.smsConfi6()}
${bahasaAK.smsConfi7()}
${bahasaAK.smsConfi8()}
${m.isGroup ? `` : `${bahasaAK.smsConfi9()}`}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.welcome ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} welcome
✦ ${bahasaAK.smsWel2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.detect ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} detec
✦ ${bahasaAK.smsDete2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdYOw()} ${m.isGroup ? chat.autolevelup ? '✅' : '❌' : bahasaAK.smsNoGg()} 
✦ ${usedPrefix + command} autolevelup
✦ ${bahasaAK.smsANivel2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${bot.restrict ? '✅' : '❌'}
✦ ${usedPrefix + command} restrict
✦ ${bahasaAK.smsRestri2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${bot.antiCall ? '✅' : '❌'}
✦ ${usedPrefix + command} antiCall
✦ ${bahasaAK.smsLlamar2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${bot.antiSpam ? '✅' : '❌'}
✦ ${usedPrefix + command} antiSpam
✦ ${bahasaAK.smsAntiSp2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${global.opts['self'] ? '❌' : '✅'}
✦ ${usedPrefix + command} self
✦ ${bahasaAK.smsModP2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.modoadmin ? '✅' : '❌' : bahasaAK.smsNoGg()} 
✦ ${usedPrefix + command} modoadmin
✦ ${bahasaAK.smsModAd2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${global.opts['autoread'] ? '✅' : '❌'}
✦ ${usedPrefix + command} autoread
✦ ${bahasaAK.smsLect1()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${bot.temporal ? '✅' : '❌'}
✦ ${usedPrefix + command} temporal
✦ ${bahasaAK.smsTempo2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.stickers ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} stickers
✦ ${bahasaAK.smsStik1()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.autosticker ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} autosticker
✦ ${bahasaAK.smsStickA2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdYOw()} ${m.isGroup ? chat.reaction ? '✅' : '❌' : bahasaAK.smsNoGg()}    
✦ ${usedPrefix + command} reaction
✦ ${bahasaAK.smsReacc2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdYOw()} ${m.isGroup ? chat.audios ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} audios
✦ ${bahasaAK.smsAudi2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antitoxic ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antitoxic
✦ ${bahasaAK.smsAntitoc2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdYOw()} ${m.isGroup ? chat.antiver ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antiver
✦ ${bahasaAK.smsModOb2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdYOw()} ${m.isGroup ? chat.delete ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} delete
✦ ${bahasaAK.smsAntiEli2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antifake ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antifake
✦ ${bahasaAK.smsAntiInt2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiLink ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antiLink
✦ ${bahasaAK.smsAntiE2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiLink2 ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antiLink2
✦ ${bahasaAK.smsAntiEE2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiTiktok ? '✅' : '❌' : bahasaAK.smsNoGg()} 
✦ ${usedPrefix + command} antiTiktok
✦ ${bahasaAK.smsAntiTT2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiYoutube ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antiYoutube
✦ ${bahasaAK.smsAntiYT2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiTelegram ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antiTelegram
✦ ${bahasaAK.smsAntiTEL2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiFacebook ? '✅' : '❌' : bahasaAK.smsNoGg()} 
✦ ${usedPrefix + command} antiFacebook
✦ ${bahasaAK.smsAntiFB2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiInstagram ? '✅' : '❌' : bahasaAK.smsNoGg()}
✦ ${usedPrefix + command} antiInstagram
✦ ${bahasaAK.smsAntiIG2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaAdmins()} ${m.isGroup ? chat.antiTwitter ? '✅' : '❌' : bahasaAK.smsNoGg()}   
✦ ${usedPrefix + command} antiTwitter
✦ ${bahasaAK.smsAntiTW2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${global.opts['pconly'] ? '✅' : '❌'}
✦ ${usedPrefix + command} pconly
✦ ${bahasaAK.smsSOLOP2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

✦ ${bahasaAK.smsParaOw()} ${global.opts['gconly'] ? '✅' : '❌'}
✦ ${usedPrefix + command} gconly
✦ ${bahasaAK.smsSOLOG2()}

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

${wm}`, fkontak, { mentions: [aa,] })
//conn.sendMessage(m.chat, { text: texto }, { quoted: fkontak })
//conn.sendMessage(m.chat, texto, {quoted: fkontak})	
throw false
}
await conn.reply(m.chat, `${bahasaAK['smsAvisoRG']()}ღ *_${bahasaAK['smsMens1']()}_* *|* ${type} 
ღ *_${bahasaAK['smsMens2']()}_* *|* ${isEnable ? bahasaAK.smsEncender() : bahasaAK.smsApagar()} 
ღ *_${bahasaAK['smsMens3']()}_* *|* ${isAll ? bahasaAK.smsMens4() : isUser ? '' : bahasaAK.smsMens5()}`, fkontak, m)}	
/*await conn.sendButton(m.chat, `${bahasaAK['smsAvisoRG']()}ღ *_${bahasaAK['smsMens1']()}_* *|* ${type} 
ღ *_${bahasaAK['smsMens2']()}_* *|* ${isEnable ? bahasaAK.smsEncender() : bahasaAK.smsApagar()} 
ღ *_${bahasaAK['smsMens3']()}_* *|* ${isAll ? bahasaAK.smsMens4() : isUser ? '' : bahasaAK.smsMens5()}`, wm, null, [[`${isEnable ? bahasaAK.smsApagar() : bahasaAK.smsEncender()}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], [bahasaAK.smsConMenu(), '.menu']], fkontak, m)}*/

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
