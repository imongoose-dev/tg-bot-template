const config = require('config');
const { Telegraf } = require('telegraf');

const pathModule = require('path');

const pathHandlers = require('./utils/pathHandlers.js')

const directoryForCommands = pathModule.join(__dirname, 'handlers');
const handlers = pathHandlers(directoryForCommands).map((name) => require(name));

const bot = new Telegraf(config.get('BOT_TOKEN'));

bot.telegram.setMyCommands([
    { command: '/start', description: 'Hello user' }
]);
(async () => {
    for (const handler of handlers) {
        try {
            if (handler?.func) {
                await handler.func(bot);
            }
        } catch (e) {
            console.error(`ERROR Handlers commands: ${e}`);
        }
    }

})();

bot.launch().then(console.log('Bot launched..'));


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))