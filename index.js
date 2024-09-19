
import TelegramBot from 'node-telegram-bot-api'
import config from 'config'

const TOKEN = config.get('token')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/\/start/, (msg, [source, match]) => {
	const {chat: {id, username}} = msg
	const photoUrl = "https://game.playshub.io/banner.png"
	const captionDes = `📢 Welcome to PLAYS Hub games!

🚀 Hurry up! Tons of games and rewards are waiting for you. The $PLAYS token will be released soon.

👇 Play daily to earn big rewards!👇`
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