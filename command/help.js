const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`𝙃𝙖𝙞 𝙠𝙖𝙠 *Selamat* ${ucapanWaktu}
𝙖𝙙𝙖 𝙮𝙖𝙣𝙜 𝙗𝙞𝙨𝙖 ${botName} 𝙗𝙖𝙣𝙩𝙪?
𝙩𝙤𝙡𝙤𝙣𝙜 𝙗𝙚𝙧𝙞 𝙗𝙤𝙩 𝙟𝙚𝙙𝙖 𝙖𝙜𝙖𝙧
𝙗𝙤𝙩 𝙩𝙞𝙙𝙖𝙠 𝙙𝙚𝙡𝙖𝙮 𝙙𝙖𝙣 𝙧𝙪𝙨𝙖𝙠
𝙩𝙚𝙧𝙞𝙢𝙖𝙠𝙖𝙨𝙞𝙝.

༺𝙄𝙉𝙁𝙊 𝘽𝙊𝙏༻
⑅ 𝙉𝙖𝙢𝙚 𝙗𝙤𝙩: ${botName}
⑅ 𝙉𝙖𝙢𝙚 𝙤𝙬𝙣𝙚𝙧: ${ownerName}
⑅ 𝙋𝙧𝙚𝙛𝙞𝙭: ${prefix}
⑅ 𝙅𝙖𝙢? ${jam}
⑅ 𝙏𝙖𝙣𝙜𝙜𝙖𝙡? ${tanggal(new Date())}

༺𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍༻
◍ 𝙉𝙖𝙢𝙚: ${pushname !== undefined ? pushname : '-'}
◍ 𝙎𝙩𝙖𝙩𝙪𝙨: ${isCreator ? 'Owner' : isPremium ? 'Premium' : 'Free'}
◍ 𝙇𝙞𝙢𝙞𝙩: ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
◍ 𝘽𝙖𝙡𝙖𝙣𝙘𝙚: ${getBalance(sender, balance)}
◍ 𝙍𝙤𝙡𝙚: ${role}
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
❀ MENU RUMAH ❀

◉ .𝙢𝙚𝙣𝙪
◉ .𝙤𝙬𝙣𝙚𝙧
◉ .𝙨𝙚𝙬𝙖𝙗𝙤𝙩
◉ .𝙥𝙞𝙣𝙜
◉ .𝙨𝙥𝙚𝙚𝙙
◉ .𝙙𝙤𝙣𝙖𝙨𝙞
◉ .𝙧𝙪𝙣𝙩𝙞𝙢𝙚
◉ .𝙞𝙣𝙛𝙤𝙗𝙤𝙩
◉ .𝙙𝙖𝙨𝙝𝙗𝙤𝙖𝙧𝙙

∆∆∆∆∆∆∆∆∆∆∆∆
❀ MENU ROOM ❀

◉ .open
◉ .close
◉ .afk
◉ .kick
◉ .delete
◉ .hidetag
◉ .promote
◉ .demote
◉ .revoke
◉ .linkgc
◉ .setleft
◉ .setwelcome
◉ .welcome on
◉ .welcome off
◉ .left on
◉ .left off
◉ .antilink on
◉ .antilink off
◉ .antilink2 on
◉ .antilink2 off
◉ .antiwame on
◉ .antiwame off
◉ .antiwame2 on
◉ .antiwame2 off

∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ BOCIL STICKER ❀

◉ .sticker
◉ .qc
◉ .smeme
◉ .emojimix
◉ .stickerwm
◉ .xquote
◉ .ai
◉ .tourl
◉ .tovn
◉ .toaudio
◉ .tomp3
◉ .toimg
◉ .nuliskiri
◉ .nuliskanan
◉ .say
◉ .translate
◉ .obfus
◉ .ssweb

∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ NUMPANG DOWNLOAD ❀

◉ .play
◉ .ytmp4
◉ .ytmp3
◉ .instagram
◉ .mediafire
◉ .facebook
◉ .ytsearch
◉ .tiktok
◉ .google
◉ .tiktokaudio
◉ .gitclone

∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ BOCIL NORAKK ❀

◉ .tictactoe
◉ .casino
◉ .deltt
◉ .delcasino
◉ .inventory
◉ .joinrpg
◉ .buy
◉ .sell
◉ .heal
◉ .hunt
◉ .adventure
◉ .luckyday
◉ .killslime
◉ .killgoblin
◉ .killdevil
◉ .killbehemonth
◉ .killdemon
◉ .killdemonking
◉ .mining
◉ .sellikan
◉ .sellbesi
◉ .sellemas
◉ .jelajah
◉ .mancing
◉ .jualikan
◉ .jualcoal
◉ .lebur
◉ .jualstone
◉ .jualingot
◉ .jualkayu
◉ .nebang
◉ .goplanet
◉ .jualbahankimia

∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ JUAL BELI BOT❀

◉ .list
◉ .dellist
◉ .addlist
◉ .update
◉ .jeda
◉ .tambah
◉ .kurang
◉ .bagi
◉ .kali
◉ .proses
◉ .done
◉ .setdone
◉ .changedone
◉ .delsetdone
◉ .setproses
◉ .changeproses
◉ .delsetproses

∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ MENU NGAWUR ❀

◉ .fitnah
◉ .nowa
◉ .fakehidetag
◉ .react
◉ .getquoted
◉ .lirik
◉ .grupwa
◉ .pinterest
◉ .waifu
◉ .cecan
◉ .cogan
◉ .limit
◉ .balance
◉ .transfer
◉ .buylimit
◉ .buyglimit
◉ .toplocal
◉ .topglobal

∆∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ Anonymous Menu ❀

◉ .menfess
◉ .confess
◉ .start
◉.next
◉ .stop
◉ .balasmenfess
◉ .stopmenfess
◉ .tolakmenfess

∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ Owner Menu ❀

◉ .join
◉ .left
◉ .public
◉ .self
◉ .setppbot
◉ .setppbot2
◉ .broadcast 
◉ .autoread
◉ .autobio
◉ .antidelete
◉ .antiviewonce 
◉ .autorespond
◉ .anticall
◉ .autoblok212
◉ .bcimg
◉ .bcvn
◉ .bcstik
◉ .bcvideo
◉ .bcsewa
◉ .addpremium 
◉ .addsewa
◉ .delpremium
◉ .delsewa

∆∆∆∆∆∆∆∆∆∆∆∆∆
❀ TEXTPRO MENU ❀

 • .halloween2
 • .horror
 • .game8bit
 • .layered
 • .glitch2
 • .coolg
 • .coolwg
 • .realistic
 • .space3d
 • .gtiktok
 • .stone
 • .marvel
 • .marvel2
 • .pornhub
 • .avengers
 • .metalr
 • .metalg
 • .metalg2
 • .halloween2
 • .lion
 • .wolf_bw
 • .wolf_g
 • .ninja
 • .3dsteel
 • .horror2
 • .lava
 • .bagel
 • .blackpink
 • .rainbow2
 • .water_pipe
 • .halloween
 • .sketch
 • .sircuit
 • .discovery
 • .metallic2
 • .fiction
 • .demon
 • .transformer
 • .berry
 • .thunder
 • .magma
 • .3dstone
 • .neon
 • .glitch
 • .harry_potter
 • .embossed
 • .broken
 • .papercut
 • .gradient
 • .glossy
 • .watercolor
 • .multicolor
 • .neon_devil
 • .underwater
 • .bear
 • .wonderfulg
 • .christmas
 • .neon_light
 • .snow
 • .cloudsky
 • .luxury2
 • .gradient2
 • .summer
 • .writing
 • .engraved
 • .summery
 • .3dglue
 • .metaldark
 • .neonlight
 • .oscar
 • .minion
 • .holographic
 • .purple
 • .glossyb
 • .deluxe2
 • .glossyc
 • .fabric
 • .neonc
 • .newyear
 • .newyear2
 • .metals
 • .xmas
 • .blood
 • .darkg
 • .joker
 • .wicker
 • .natural
 • .firework
 • .skeleton
 • .balloon
 • .balloon2
 • .balloon3
 • .balloon4
 • .balloon5
 • .balloon6
 • .balloon7
 • .steel
 • .gloss
 • .denim
 • .decorate
 • .decorate2
 • .peridot
 • .rock
 • .glass
 • .glass2
 • .glass3
 • .glass4
 • .glass5
 • .glass6
 • .glass7
 • .glass8
 • .captain_as2
 • .robot
 • .equalizer
 • .toxic
 • .sparkling
 • .sparkling2
 • .sparkling3
 • .sparkling4
 • .sparkling5
 • .sparkling6
 • .sparkling7
 • .decorative
 • .chocolate
 • .strawberry
 • .koifish
 • .bread
 • .matrix
 • .blood2
 • .neonligth2
 • .thunder2
 • .3dbox
 • .neon2
 • .roadw
 • .bokeh
 • .gneon
 • .advanced
 • .dropwater
 • .wall
 • .chrismast
 • .honey
 • .drug
 • .marble
 • .marble2
 • .ice
 • .juice
 • .rusty
 • .abstra
 • .biscuit
 • .wood
 • .scifi
 • .metalr
 • .purpleg
 • .shiny 
 • .jewelry
 • .jewelry2
 • .jewelry3
 • .jewelry4
 • .jewelry5
 • .jewelry6
 • .jewelry7
 • .jewelry8
 • .metalh
 • .golden
 • .glitter
 • .glitter2
 • .glitter3
 • .glitter4
 • .glitter5
 • .glitter6
 • .glitter7
 • .metale
 • .carbon
 • .candy
 • .metalb
 • .gemb
 • .3dchrome
 • .metalb2
 • .metalg
 • .metalg
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}

exports.sewanya = `*OPEN SEWA BOT BY ITSUKA*
- ─────────── ・ ・
 - • 6Hari = 5k
- • 13Hari = 10k
- • 20Hari = 15k
- • 26Hari = 20k
- • Permanent = 30k
- ─────────── ・ ・
*_PROMO HARI INI✨_*
- • Permanent cuma 15k
- ─────────── ・ ・
Fitur Bot?
- • Bisa Bikin Stiker
- • Ada Antilink
- • Ada Antivirtex
- • Ada Welcome
- • Bot On 24Jam`