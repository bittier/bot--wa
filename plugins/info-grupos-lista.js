const handler = async (m, { conn }) => {
  let txt = '';
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
} 
try {    
const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
const totalGroups = groups.length;
for (let i = 0; i < groups.length; i++) {
const [jid, chat] = groups[i];
const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
const participants = groupMetadata.participants || [];
const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
const isBotAdmin = bot?.admin || false;
const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
const participantStatus = isParticipant ? '✅ *SIGO AQUÍ | YES*' : '❌ *SIN ESTAR AQUÍ | NO*';
const totalParticipants = participants.length;
txt += `🐈 *${i + 1}*
${bahasaAK.smsLisC()} ${await conn.getName(jid)} ${participantStatus}
${bahasaAK.smsLisD()} ${jid}
${bahasaAK.smsLisF()} ${isBotAdmin ? '✅' : '❌'}
${bahasaAK.smsLisE()}  ${totalParticipants}
${bahasaAK.smsLisG()} ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || 'Error'}` : 'NO SOY ADMIN'}\n\n`;
}
m.reply(`${packname} ${bahasaAK.smsLisA()}
${bahasaAK.smsLisB()} ${totalGroups}\n\n${txt}`.trim());
} catch {
const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
const totalGroups = groups.length;
for (let i = 0; i < groups.length; i++) {
const [jid, chat] = groups[i];
const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
const participants = groupMetadata.participants || [];
const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
const isBotAdmin = bot?.admin || false;
const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
const participantStatus = isParticipant ? '✅ *SIGO AQUÍ | YES*' : '❌ *SIN ESTAR AQUÍ | NO*';
const totalParticipants = participants.length;    
    txt += `🐈 ${i + 1}
${bahasaAK.smsLisC()} ${await conn.getName(jid)} ${participantStatus}
${bahasaAK.smsLisD()} ${jid}
${bahasaAK.smsLisF()} ${isBotAdmin ? '✅' : '❌'}
${bahasaAK.smsLisE()} ${totalParticipants}
${bahasaAK.smsLisG()} ${isBotAdmin ? 'Error' : 'NO SOY ADMINS'}\n\n`
}
m.reply(`${packname} ${bahasaAK.smsLisA()}
${bahasaAK.smsLisB()} ${totalGroups}\n\n${txt}`.trim());
}}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listadegrupos|grupolista|listagrupo)$/i
handler.exp = 5
handler.register = true
export default handler
