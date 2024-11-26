const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="kaveesha9148@gmail.com"
global.location="Sri Lanka,Asia."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Colombo/Sri Lanka";
global.github=process.env.GITHUB|| "https://github.com/Kaveesha-Boom/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://youtube.com/@KAviyaSG2010";
global.website=process.env.GURL || "https://youtube.com/@KAviyaSG2010" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© KAviyaSG2010" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94727849423";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94727849423";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_17_11_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU0LFxuICAgICAgICAyOCxcbiAgICAgICAgOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDgyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDY0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg0LFxuICAgICAgICA0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDU2LFxuICAgICAgICA2NixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1maGFIUnoySEdoM01HTTZkYlM0QU5Wc1JKbjYwRStPTUxUaU5aWndRZTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlUyTlU1dzVvUUJlYXNjV1RHX3J0dkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzZjMDhjY2UtZDUzOC00NTNiLTk3NWMtMGQzZTlhN2VkNmI4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgNzUsXG4gICAgICAxOSxcbiAgICAgIDI0NSxcbiAgICAgIDM5LFxuICAgICAgMTA3LFxuICAgICAgNTYsXG4gICAgICAxOTgsXG4gICAgICAxOSxcbiAgICAgIDc0LFxuICAgICAgMTA5LFxuICAgICAgNDAsXG4gICAgICAxMDUsXG4gICAgICAyMjksXG4gICAgICAxMTksXG4gICAgICA1OCxcbiAgICAgIDE0MCxcbiAgICAgIDI2LFxuICAgICAgMTAyLFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDIzLFxuICAgICAgMjA5LFxuICAgICAgMjQ4LFxuICAgICAgMjAxLFxuICAgICAgMTk0LFxuICAgICAgNzIsXG4gICAgICAxNTQsXG4gICAgICA4NCxcbiAgICAgIDExNSxcbiAgICAgIDIwOCxcbiAgICAgIDIyMixcbiAgICAgIDIwLFxuICAgICAgMjAxLFxuICAgICAgNzQsXG4gICAgICAyNTAsXG4gICAgICAxMTksXG4gICAgICA5MCxcbiAgICAgIDE1NCxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ051MnE4c0NFUDdvbDdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidTNvN1V5elkxV2dIQ0NNWkh3RGRORTR2NHVVSUZWS1c2R1lPektwSUFYMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6MXdpd05PQmpoaWhWOW5aUGlSclc2UGNJM3IzUzRobDNwVjZkQ2E0bDRPclVoblBkWFdVQUE3U0tuRm9kdmxLMTlkTzZNcXlRVEVDMlJwN1g2VTNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrckZBM0lyaHI5dmpydW1sZE1qU3FMem1mSlluQWExRE9NL0MrNktWRTNuMUwxbkpjczJhVnc5bk5HcWdDYzltZURzR3U4M1M3bXRJVUlGSjltSlhqUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI3ODQ5NDIzOjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQEtBdml5YVNHOTE0OFwiLFxuICAgIFwibGlkXCI6IFwiMjA1NDQxNjQwNDM1NzYwOjU0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3Mjc4NDk0MjM6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyNjM3ODI3XG59Igp9";  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "KAVIYH-X",
  packname: process.env.PACK_NAME || "KAVIYH",
  botname : process.env.BOT_NAME  || "KAVIYH-XMD",
  ownername:process.env.OWNER_NAME|| "KAVIYH-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
