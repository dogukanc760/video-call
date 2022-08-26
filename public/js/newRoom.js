let adjectives = [
    'evf',
    'rfb',
    'sa',
    'vdfb',
    'sglb',
    'qwe',
    'rjt',
    'ypuı',
    'ocvmb',
    'zxc',
    'cvb',
    'vbnm',
    'fgd',
    'bf',
    'dedc',
    'nbkk',
    'kdfj',
    'bhyt',
    'dvf',
    'asdc',
    'akdhf',
    'sdhj',
    'xcmo',
    'cccc',
    'aaaa',
    'ssss',
    'dddd',
    'wwwww',
    'bbbb',
    'nnnn',
    'mmmm',
    'llll',
    'yyyy',
    'pppp',
    'zzzz',
    'pqty',
    'jjjjj',
    'cutye',
    'eyte',
    'zeyte',
    'keyte',
    'lolud',
    'dkfjng',
    'ncmxv',
    'oqıwje',
    'qdw',
    'fcv ',
    'asxc',
    'calsm',
    'ddad',
    'zxcfbr',
];

let nouns = [
    'evf',
    'rfb',
    'sa',
    'vdfb',
    'sglb',
    'qwe',
    'rjt',
    'ypuı',
    'ocvmb',
    'zxc',
    'cvb',
    'vbnm',
    'fgd',
    'bf',
    'dedc',
    'nbkk',
    'kdfj',
    'bhyt',
    'dvf',
    'asdc',
    'akdhf',
    'sdhj',
    'xcmo',
    'cccc',
    'aaaa',
    'ssss',
    'dddd',
    'wwwww',
    'bbbb',
    'nnnn',
    'mmmm',
    'llll',
    'yyyy',
    'pppp',
    'zzzz',
    'pqty',
    'jjjjj',
    'cutye',
    'eyte',
    'zeyte',
    'keyte',
    'lolud',
    'dkfjng',
    'ncmxv',
    'oqıwje',
    'qdw',
    'fcv ',
    'asxc',
    'calsm',
    'ddad',
    'zxcfbr',
];

let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let noun = nouns[Math.floor(Math.random() * nouns.length)];
let num = getRandomNumber(5);
noun = noun.charAt(0).toUpperCase() + noun.substring(1);
adjective = adjective.charAt(0).toUpperCase() + adjective.substring(1);
document.getElementById('roomName').value = '';

// Typing Effect

let i = 0;
let txt = num + adjective + noun;
let speed = 100;

typeWriter();

/**
 * Get random number
 * @param {integer} length of string
 * @returns {string} random number
 */
function getRandomNumber(length) {
    let result = '';
    let characters = '0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * Set room name with typewriter effect
 */
function typeWriter() {
    if (i < txt.length) {
        document.getElementById('roomName').value += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
