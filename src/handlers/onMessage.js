const { message } = require('telegraf/filters');

module.exports = {
    on: true,
    func: async (bot) => {
        bot.on(message('text'), async (ctx) => {
            return await ctx.reply('Неверная команда.')
        })
    }
};