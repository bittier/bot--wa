let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
if (user.afk > -1) {
await conn.reply(m.chat, `${bahasaAK['smsAvisoEG']()}✴️ *A F K* ✴️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
*@${m.sender.split("@")[0]}* ${bahasaAK['smsAfkM1']()}${user.afkReason ? `\n${bahasaAK['smsAfkM2']()}👉 ` + user.afkReason : ''}

${bahasaAK['smsAfkM3']()}\n👉 *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] })
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afk
if (!afkTime || afkTime < 0)
continue
let reason = user.afkReason || ''
await conn.reply(m.chat, `${bahasaAK['smsAvisoAG']()}✴️ *A F K* ✴️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
😾 ${bahasaAK['smsAfkM4']()}\n${reason ? `${bahasaAK['smsAfkM5']()}` + '👉 ' + reason : `${bahasaAK['smsAfkM6']()}`}

${bahasaAK['smsAfkM3']()}\n👉 *${(new Date - user.afk).toTimeString()}*`.trim(), m)
}
return true
}
export default handler
