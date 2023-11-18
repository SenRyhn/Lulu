let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADI 𝐁𝐎𝐓 』––––––❏*

OWNER BOT MELAYANI : 
~~~~~~~~~~~~~~~~~~~~~~~~~~
JASA JADIBOT : 25K
---------------------------------------------------------------------
KONTAK OWNER : wa.me/62975626924



⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
       ~ "SenR" ~

`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/a98a3bb983cebccdeabae.jpg', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler
