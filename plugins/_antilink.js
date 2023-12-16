let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin, participants }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply(`${bahasaAK['smsAdwa']()}`)
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendMessage(m.chat, {text: `${bahasaAK['smsEnlaceWat']()} ${user}`, mentions: [m.sender]}, {quoted: m})
//await conn.sendButton(m.chat, `${bahasaAK['smsEnlaceWat']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${bahasaAK['smsAllAdmin']()}`}`, wm, [`${bahasaAK['smsApagar']()}`, '/disable antilink'], m)    
if (!isBotAdmin) return conn.sendMessage(m.chat, {text: `*⛔ ${bahasaAK.smsAddB4()} ⛔*\n${listAdmin}\n\n${bahasaAK['smsAllAdmin']()}`, mentions: [...groupAdmins.map(v => v.id)] }, {quoted: m})
// m.reply(`${bahasaAK['smsAllAdmin']()}`)  
if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`${bahasaAK['smsSoloOwner']()}`)
}
return !0
}
