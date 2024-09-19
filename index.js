
import TelegramBot from 'node-telegram-bot-api'
import config from 'config'

const TOKEN = config.get('token')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/start/, (msg, [source, match]) => {
	const {chat: {id, username}} = msg
	const photoUrl = "https://game.catb.io/banner.png"
	const captionDes = `Welcome to Cat Battle Game!\n\nDive into a captivating storyline and experience deep gameplay that will keep you hooked for hours everyday.\n\nBOOST CAT POWER TO EARN!`
	bot.sendPhoto(id, photoUrl, {
		caption: captionDes,
		reply_markup: {
			inline_keyboard:
			[
				[
					{
						text: '🤜🤛 Play Game',
						web_app:{
							url: "https://game.playshub.io/",
						} 
					}
				]
			]
		}
	})
})