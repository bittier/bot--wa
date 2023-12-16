export async function all(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
//let caption = `*${this.user.name}* ${bahasaAK['smsBottem1']()}`
let pp = './media/menus/Menu2.jpg'

await m.reply(`${this.user.name}\n ${bahasaAK['smsBottem1']()}`)
//await this.sendButton(m.chat, caption, bahasaAK.smsBottem2() + wm, pp, [[bahasaAK.smsBottem3(), '.hastapronto']], null)
await this.groupLeave(m.chat)
chats.expired = null
}}

