import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `*🍭 Ingrese su petición*\n*🪼 Ejemplo de uso:* ${usedPrefix + command} como hacer estrella de papel`, m)
    await m.react('💬')

    try {
        let api = await fetch(`https://apis-starlights-team.koyeb.app/starlight/blackbox?system=Eres+una+ai+llamada+blackbox&text=${text}`)
        let json = await api.json()

        if (json.results) {
            await conn.reply(m.chat, json.results, m)
        } else {
            await m.react('✖️')
        }
    } catch {
        await m.react('✖️')
    }
}
handler.help = ['blackbox *<petición>*']
handler.tags = ['tools']
handler.command = ['llama']
handler.register = false

export default handler
