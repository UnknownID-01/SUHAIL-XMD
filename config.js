const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347075219002";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_10_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU5LFxuICAgICAgICA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDczLFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3bStEVnlVTGZmOUtvUGsxODNrczVCNUN1ekl1VnNnNVVwZ0VlQTc4dW5jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzUyMTkwMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdEM0M2QzBEMTRFNTlFQkFGMDA5NzlGM0I3QTlGNDQ2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjI2MzA1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNzUyMTkwMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcwNzgzODU4NjkxOEUzQjFGNUQ1RDJGQkY2QzdFNUFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjI2MzA1NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHS3RjdlQtelFWbWJSdndjZjJjaU9nXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyY2M1MjZkLWZkNjQtNGNiMi05ODNjLWViYTMyYmQxMGY0ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAyOCxcbiAgICAgIDgzLFxuICAgICAgMjMyLFxuICAgICAgMTMzLFxuICAgICAgMzQsXG4gICAgICAyMTAsXG4gICAgICA0NixcbiAgICAgIDg2LFxuICAgICAgMTg5LFxuICAgICAgODUsXG4gICAgICAxOCxcbiAgICAgIDE5NyxcbiAgICAgIDE0MyxcbiAgICAgIDEwNSxcbiAgICAgIDIzMCxcbiAgICAgIDEyOCxcbiAgICAgIDIxMyxcbiAgICAgIDkzLFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU0LFxuICAgICAgMTgsXG4gICAgICAxMDQsXG4gICAgICA1NSxcbiAgICAgIDIwMSxcbiAgICAgIDE5NSxcbiAgICAgIDQwLFxuICAgICAgMTcsXG4gICAgICA0NyxcbiAgICAgIDEyMixcbiAgICAgIDg0LFxuICAgICAgMjE5LFxuICAgICAgMjM5LFxuICAgICAgMjM0LFxuICAgICAgNDMsXG4gICAgICAxMzAsXG4gICAgICAyMDUsXG4gICAgICAzMyxcbiAgICAgIDIzNCxcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpMWEYxM1o0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDc1MjE5MDAyOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWv8J2WivCdlobwnZaZ8J2WjVwiLFxuICAgIFwibGlkXCI6IFwiMTkyNDk2NzYwMDUzOTU5OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmk1Z1M0UWh2bUF1Z1lZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuNDF0djdqdkl1MXNLY0NVWWl4L0ROUHV6WHBQSjQrS0NseXNteWJlb0hrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhvRkxFTmR5M1Z5b3N1NjRPT0FtYzErVlQ4bE94WTI1ZFUzY2JLMjI5UGxSNjNITmdUZC9JNDVWSXhLM3ZyamJYSjBCc2xQdUlmeE5PbVVsYTFWT0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRHc2hTNUlXclkveWYzU3ZSblZsVUdFbmJTeVF2Vk9FMGZ2a0lNMkVZNGlpd2JUYXo0NHNVU0Z2dWEzMy9yZFlkY3p2eitTUTZzaVVxUU9Kd0NGemh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzUyMTkwMDI6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMjYzMDUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQjVnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCNWcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1elJYZ25xUXBDcG9VSWpBR05lV0h2a0lFYUJrVkU0TmpMdS91cjRVbUhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2NDkyNjk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
