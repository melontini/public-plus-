const date = new Date();
possibleSplashes = [
    "Welcome to Plus-!",
    "Are you having fun yet?",
    "Also Try bliss",
    "Huh",
    "Yoo, I'm a pickle Morty!!!!",
    "CC-BY-4.0",
    "Just Monocle",
    "Post this on reddits to get...",
    "2 + 2 = ?",
    "Totally Random!",
    "null",
    "Thank You Next",
    "Wholesome 100",
    "Roblox better",
    "Holesome 100",
    "I'm running out of ideas",
    "#VanillaPlus",
    "OMG! Better Minecraft 2!",
    "& Knuckles",
    "Featuring Dante from DMC",
    "This is the best feature",
    "YAIY",
    "duh",
    "We Live in a Society",
    "Dead Modpack",
    "Watch your back",
    "Runs on KubeJS",
    "I, humbly submit a toast...",
    "I don't have enough space!!!",
    "FNAF will get real in 53 52...",
    "Now With Less Tech",
    "As seen on CurseForge",
    "Radio Killed the Video Star",
    "Now with more Redirects!",
    "Now with more Injects!",
    "Now with more Overwrites!",
    "Stay home and play games!",
    "Stay safe!",
    "Stay strong!",
    "Happy Gaming",
    "Plus-",
    "Don't trust slugs!",
    "It's Plus-, not Minus+",
    "Mindblowing",
    "日本ハロー！",
    "한국 안녕하세요!",
    "Helo Cymru!",
    "Cześć Polsko!",
    "你好中国",
    "Привет Россия!",
    "Γεια σου Ελλάδα!",
    "Be Ware of Creepers!",
    "Hey, I'm... uhh... Me...",
    "Not Buggy",
    "Buggy",
    "I'm Just Lucky",
    "Also try Modrinth",
    "Rock!",
    "Paper!",
    "Scissors!",
    "Not Moving D:",
    "(┛◉Д◉)┛彡┻━┻",
    "Live, Love, Laugh",
    "Love, Live, Laugh",
    "Laugh, Live, Love",
    "Laugh, Love, Live",
    "Free Ad Space!",
    "Also try Shadow: Raid Legends!",
    "Also try RAID VPN!",
    "Chosen on Startup!",
    "Free 100$ NightFort Card!",
    "Hard to Find!",
    "Ungoogleable!",
    "This spash is not available for 3rd party users",
    "111111111111111111111111111111",
    "This Splash is, probably, waaaaaay too long for it's own good",
    "What?",
    ".isHavingFun(\"?\")",
    ".getPaid().getLaid().gatorade",
    "Log4J",
    "J4J",
    "100% Epic",
    "Windows Moment",
    "The System Has Been Destroyed",
    "Press Power Button to Shutdown",
    "Not Enough Items!",
    "Need Another Bottle?",
    "Stand With Pride!",
    "Be Proud!",
    "192.168.0.127",
    "127.0.0.1"
]
if ((date.getDate() + '-' + date.getMonth()) == '30-4') {
    possibleSplashes = ["Happy Birthday, Plus-!"]
}
if ((date.getDate() + '-' + date.getMonth()) == '1-0') {
    possibleSplashes = ["Happy New Years!"]
}
if ((date.getDate() + '-' + date.getMonth()) == '15-5') {
    possibleSplashes.push("Ha Ha, Funny Imposter Game")
    possibleSplashes.push("Sussy baka!")
    possibleSplashes.push("Among Us is " + (date.getFullYear() - 2018) + " years old")
}
const random = Math.floor(Math.random() * possibleSplashes.length);
global.currentsplash = possibleSplashes[random]