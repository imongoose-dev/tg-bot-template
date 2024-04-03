module.exports = {
    command: true,
    func: async (bot) => {
        bot.command('start', async (ctx) => {
            return await ctx.reply('Привет.')
        });
    }
};
