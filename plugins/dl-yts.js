import yts from 'yt-search'
let handler = async (m, {conn, text }) => {
  if (!text) throw `🍭 $Ingresa el título de un vídeo de YouTube.`
  let results = await yts(text)
let tes = results.videos
let ms = tes.map(v => `
° ${v.title}

⌛ \`Duración :\` ${v.timestamp}
🗳️ \`Subido :\` ${v.ago}
🎭 \`Vistas :\` ${v.views.toLocaleString()}
🔎 \`Link :\` ${v.url}
`.trim()).join('\n________________________\n\n')
let teks = `\`\`\`YOUTUBE - SEARCH\`\`\`\n\n${ms}`
conn.sendFile(m.chat, tes[0].image, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['download']
handler.command = ['ytsearch', 'yts'] 

export default handler
