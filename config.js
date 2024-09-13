const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347047803721";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_40_09_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICA4MixcbiAgICAgICAgOTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA1NixcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDkwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxODgsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICA5MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImc1Vng5eXh2b1JqNTQ5aW1NWkRraTlCMnBEdmtzM3F0bW1QbFFDTVVQbE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0NzgwMzcyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREY4MDFDRUQyMUUwNTY0NUZCQzZDOEE2ODc5QzczRkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI2MjQyMDQyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZlZF9MeTR0UVl1Z0w4ZV9xWUZNY3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjExY2FmNTctYjllZS00MjdjLTlkM2UtNjQ0NjYzOGU4ZWM2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMTIzLFxuICAgICAgMTcxLFxuICAgICAgMTIxLFxuICAgICAgNTksXG4gICAgICAwLFxuICAgICAgMjIsXG4gICAgICAxOSxcbiAgICAgIDE1OCxcbiAgICAgIDM4LFxuICAgICAgNDcsXG4gICAgICAzNSxcbiAgICAgIDEwNSxcbiAgICAgIDE0LFxuICAgICAgMjI4LFxuICAgICAgNjYsXG4gICAgICAyNTIsXG4gICAgICAxNyxcbiAgICAgIDI1MyxcbiAgICAgIDIzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICA4NyxcbiAgICAgIDY0LFxuICAgICAgMjUwLFxuICAgICAgMTExLFxuICAgICAgMTcsXG4gICAgICAxMixcbiAgICAgIDUyLFxuICAgICAgMTM0LFxuICAgICAgNTMsXG4gICAgICAyMSxcbiAgICAgIDE1MyxcbiAgICAgIDEzOSxcbiAgICAgIDE2NSxcbiAgICAgIDM5LFxuICAgICAgMzQsXG4gICAgICAxMDQsXG4gICAgICA1LFxuICAgICAgMjA4LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1UlZTQkRNN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NzgwMzcyMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzc4NjE5ODI2MjE4OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRCBNeWtlbCBCT1RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNR2V1bEFROGJtUnR3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInFndS9ZQjRBcGVJUmlXUlpGL0U3R2Nnbi9Md3gzWFEwSGxDVHhFT2hEaG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieHUyK1R0WFhKRWtlYjdjOG5YQm1mRDlzMTRndGpXU05abk5jM255Vi9FaDdJa2pRUlhNeWV5RmM3NFdRT01EbDRZRzZ2V2VyYzVTcU9HSXpwSVY5RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM0xRd2h4QVhLYWMvK2xkZ0FDL2VIbzlhSUlKMmlUSy9wQldCbVdYUFRpZHN3cXdnY0JiT1NpSENBZHJvUWY1c0kreGV6anBsbGw3c0xkU1E5dEpVaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NzgwMzcyMToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MjQyMDM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTit4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOK3guanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvRm9LTkhzYUVYS0dNRFhCUmFmVkhVeUxFQkcrcWFmZFpKTGhKQ1pmTDZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODcyNjMzNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI2MjQyMDM5MjY0XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
