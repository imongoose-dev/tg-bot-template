module.exports = {
    hear: true,
    func: async (bot) => {
        bot.hears(/^(?:hears)\s([0-9]+)$/i, async (ctx) => {
            // await ctx.reply(`hears [${ctx.arg}]`)
        });
    }
};
