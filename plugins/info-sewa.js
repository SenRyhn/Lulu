let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/e3f78c9862e8cb8456a6c.jpg'
let sewa = ` ---『 *LIST HARGA* 』---
❏──「 *Sewa Bot* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.25.000
│ • *Permanen:* Rp.30.000
❏──────────────๑
❏──「 *Premium* 」
│ • *1 Minggu:* Rp.5.000
│ • *2 Minggu:* Rp.10.000
│ • *1 Bulan:* Rp.20.000
│ • *Permanen:* Rp.25.000
❏──────────────๑
*Premium itu hanya akses fitur premium saja kak seperti hdr, remini dll dan tidak bisa di masukkan ke grup*

_Sewa bot bisa bisa memasukkan bot ke grup dan mendapatkan premium jadi bisa akses fitur premium di bot_
❏──「 *Pembayaran* 」
│ • *Pulsa:* 0895-3598-3124-6
│ • *Dana:* 0895-3598-3124-6
❏──────────────๑
│ Hubungi Owner!!!
│wa.me/62875626924
❏──────────────๑
 _Sewa Bot by SenR_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['menuprem']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|prem)$/i

export default handler
