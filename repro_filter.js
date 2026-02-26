
const BAD_WORDS = [
    // === DEUTSCHE STANDARD-BELEIDIGUNGEN ===
    "arsch", "arschloch", "arschgeige", "arschkriecher", "arschgesicht", "arschficker",
    "affe", "affenpimmel", "affenarsch", "affenzahn",
    "bastard", "blödmann", "blöde", "blödkopf", "blödsack", "blödian",
    "depp", "dummschwätzer", "dummkopf", "dummbeutel", "dussel", "dummerchen", "dummbatz",
    "drecksack", "drecksau", "drecksstück", "dreckskerl", "dreckstück", "drecksvieh",
    "fotze", "ficker", "fick", "ficken", "fick dich", "fickt euch", "fickstück",
    "hure", "hurensohn", "hurentochter", "hund", "hündin", "hundsfott",
    "idiot", "idiotin", "idiotisch",
    "kacke", "kack", "kacker", "kackbratze", "kackstelze", "kackhaufen",
    "kriecher", "kümmerling",
    "lusche", "lurch", "luser",
    "mist", "miststück", "mistkerl", "mistfink", "mistvieh", "misthund", "mistkäfer",
    "missgeburt", "misgeburt",
    "nutte", "nichtsnutz", "nulpe",
    "pisser", "piss", "pissnelke", "pisskerl", "pissfresse", "pissgesicht",
    "penner", "pfeife", "pflaume",
    "roß", "rotznase", "rotzlöffel", "rotz", "rotzig",
    "schlampe", "schlampen", "schlampe",
    "schwein", "schweinehund", "schweinebacke", "saublöd", "saudumm", "sau", "saubacke",
    "scheiße", "scheiss", "scheiß", "schleimscheißer", "schwachkopf", "schwachmat", "schwachmatt",
    "spasti", "spast", "spacken", "spacko", "spack", "spastisch",
    "trottel", "tussi", "tusse", "trottelig",
    "verpiss dich", "verpiss", "vollidiot", "vollpfosten", "volltrottel", "vollhonk",
    "wichser", "wixer", "wixxer", "wichs",
    "ziege", "zicke", "zimtzicke", "zickig",

    // === ENGLISCHE BELEIDIGUNGEN ===
    "fuck", "fucking", "fucker", "motherfucker", "bitch", "slut", "whore",
    "shit", "bullshit", "dumb", "dumbass", "asshole", "asshat", "jackass",
    "pussy", "cock", "cunt", "twat", "wanker", "dickhead",
    // "dick" removed (German: fat), "hell" removed (German: bright)


    // === GESPERRTE ABKÜRZUNGEN ===
    "hdf",   // halt die Fresse
    "hdf",   // halt deine Fresse
    "fickdich", // zusammengeschrieben
    "fick_dich", // mit Unterstrich
    "fickdich",
    "lmao", "lmfao", "stfu", "wtf", "wth", "af", "omfg", "gtfo",

    // === ZAHLENERSETZUNGEN (Leetspeak) ===
    "4rsch",   // Arsch
    "4rschloch", // Arschloch
    "4rschficker", // Arschficker
    "sch3iße", "sch3isse", // Scheiße mit 3
    "sch31ße", // Scheiße mit 31
    "sch3i$$e", // Scheiße mit 3 und $
    "f1cker",  // Ficker
    "f1ck",    // Fick
    "f1ck3n",  // Ficken
    "h0r3", "h0re", "hure", // Hure mit 0
    "5chlampe", // Schlampe mit 5
    "5au",     // Sau mit 5
    "5au5acke", // Saubacke mit 5
    "p1ss",    // Piss
    "p1sser",  // Pisser
    "p1ssnelke", // Pissnelke
    "w1chser", // Wichser
    "w1xer",   // Wixer
    "w1xxer",  // Wixxer
    "v0llpf0sten", // Vollpfosten mit 0
    "v0ll1d10t", // Vollidiot
    "1d10t",   // Idiot
    "1diot",   // Idiot
    "1d10t1n", // Idiotin
    "d3pp",    // Depp
    "tr0ttel", // Trottel
    "tr0tt3l", // Trottel mit 3
    "d0mm",    // Dumm
    "d0mmk0pf", // Dummkopf
    "mist5ück", // Miststück
    "m1st",    // Mist
    "m1st5ück", // Miststück mit 1 und 5
    "5pasti",  // Spasti
    "5packo",  // Spacko
    "5chw3in", // Schwein
    "5au",     // Sau

    // === KREATIVE SCHREIBWEISEN & UMLAUTERSETZUNGEN ===
    "arsch", "axx", "a6", "a r s c h", "aaaarsch",
    "scheisse", "scheiße", "sch***e", "sch**ße", "sch***ße", "sch****e", "sch1eisse",
    "fick", "fi**", "f**k", "f**ken", "ficken", "fiiiick",
    "hurensohn", "huren sohn", "hure sohn", "hurens0hn", "hurensohn",
    "schlampe", "schlampen", "schlam*e", "schlampe", "schlampe",
    "wichser", "wich*er", "wi***er", "wichser",
    "bastard", "ba5tard", "bastaaard",
    "missgeburt", "misgeburt", "mi55geburt", "missgebuhrt",
    "spast", "spasti", "spa5ti", "spastiii",
    "trottel", "trott*l", "trottel", "trottel",

    // === JUGENDSPRACHE / INTERNET-SLANG ===
    "opfer", // als Beleidigung ("Du Opfer")
    "behindert", "behindi", "behind", // ableistisch
    "schwul", // als Beleidigung kontextualisiert
    "schwuchtel", "schwuli", "schwul",
    "kanake", "kanacke", "kanak", // rassistisch
    "zigeuner", // rassistisch
    "neger", // rassistisch
    "bimbo", // rassistisch
    "krüppel", // ableistisch
    "mong", "mongoid", // ableistisch
    "retard", "retarded", // ableistisch

    // === GANZ KURZE ABKÜRZUNGEN (Gelöscht wegen False Positives: as, al, hs, etc.) ===
    "fdl", // fick dein Leben
    "fdz", // fick die Zukunft?
    "acab", // all cops are bastards
    "1312", // acab als Zahlencode
    "adac", // Verwechslungsgefahr mit acab (harmlos, aber prüfbar)

    // === GESPERRTE ZAHLENKOMBINATIONEN ===
    "187",  // Mord-Code in USA
    "69",   // Sexuelle Stellung
    "666",  // Teufel (oft in edgy Kontexten)

    // === EMOJI-ERSATZ ===
    "🖕",   // Mittelfinger
    "🍆",   // Aubergine (sexuell konnotiert)
    "🍑",   // Pfirsich (sexuell konnotiert)
    "💩",   // Kackhaufen
    "🔞",   // Kein Jugendlicher (warnend)
    "☠️",   // Totenkopf
    "👿",   // Teufel
    "💀",   // Totenkopf
    "👎",   // Daumen runter (kontextabhängig)
    "🤬",   // Fluch-Emoji

    // === EXTREME FÄLLE ===
    "kill dich", "bring dich um", "tod", "sterben", "umbringen", "töten",
    "vergewaltigung", "vergewaltigen", "vergewaltigt",
    "erschlagen", "ermorden", "umlegen", "abschlachten",
];

const content = "da ist eine hubsch blau jeans usw";

// Logic from the Edge Function
const lowercaseContent = content.toLowerCase();
const escapedWords = BAD_WORDS.map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
const pattern = new RegExp(`\\b(${escapedWords.join('|')})\\b`, 'i');

const match = content.match(pattern);

if (match) {
    console.log("MATCH FOUND:", match[0]);
} else {
    console.log("NO MATCH");
}
