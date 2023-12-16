let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`✦ - - ${bahasaAK['smsGI1']()} - - ✦

⇢ ${bahasaAK['smsGI2']()}
・ ${groupMetadata.id}

⇢ ${bahasaAK['smsGI3']()}
・ ${groupMetadata.subject}

⇢ ${bahasaAK['smsGI4']()}
・ ${groupMetadata.desc?.toString() || bahasaAK['smsGI5']()}

⇢ ${bahasaAK['smsGI6']()}
・ ${participants.length} ${bahasaAK['smsGI7']()}

⇢ ${bahasaAK['smsGI8']()}
・ @${owner.split('@')[0]}

⇢ ${bahasaAK['smsGI9']()}
${listAdmin}

*《 - - - - - - - 𓃠 ${vs} - - - - - - - 》*
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[bahasaAK.smsGI10(), '.on'], [bahasaAK.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
