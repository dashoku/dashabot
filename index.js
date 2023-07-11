const { Telegraf, Markup } = require('telegraf');
require('dotenv').config();
const text = require('./const');

const bot = new Telegraf(process.env.BOT_TOKEN);//Enter your bot-token
bot.start((ctx) => ctx.reply(`Hi ${ctx.message.from.first_name ? ctx.message.from.first_name : `Anonim`}! Жми /help, чтобы узнать что я умею!`));
bot.help((ctx) => ctx.reply(text.commands)); 

bot.command('picture', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Выбери, какого котика ты хочешь увидеть прямо сейчас</b>', Markup.inlineKeyboard(
            [Markup.button.callback('Fun', 'btn_1'),
            Markup.button.callback('Cute', 'btn_2'),
            Markup.button.callback('Angry', 'btn_3'),
            Markup.button.callback('Sleeppy', 'btn_4')
            ]
            
        ));
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_1', async (ctx) => {
    try {
        const catImages1 = [
            './pic/fun/1.jpg',
            './pic/fun/2.jpg',
            './pic/fun/3.jpg',
            './pic/fun/4.jpg',
            './pic/fun/5.jpg',
            './pic/fun/6.jpg',
            './pic/fun/7.jpg',
            './pic/fun/8.jpg',
        ];
        const randomIndex = Math.floor(Math.random() * catImages1.length);
        await ctx.answerCbQuery();
        await ctx.replyWithPhoto({ source: catImages1[randomIndex] });
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_2', async (ctx) => {
    try {
        const catImages2 = [
            './pic/cute/1.jpg',
            './pic/cute/2.jpg',
            './pic/cute/3.jpg',
            './pic/cute/4.jpg',
            './pic/cute/5.jpg',
            './pic/cute/6.jpg',
            './pic/cute/7.jpg',
            './pic/cute/8.jpg',
        ];
        const randomIndex = Math.floor(Math.random() * catImages2.length);
        await ctx.answerCbQuery();
        await ctx.replyWithPhoto({ source: catImages2[randomIndex] });
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_3', async (ctx) => {
    try {
        const catImages3 = [
            './pic/angry/1.jpg',
            './pic/angry/2.jpg',
            './pic/angry/3.jpg',
            './pic/angry/4.jpg',
            './pic/angry/5.jpg',
            './pic/angry/6.jpg',
            './pic/angry/7.jpg',
            './pic/angry/8.jpg',
        ];
        const randomIndex = Math.floor(Math.random() * catImages3.length);
        await ctx.answerCbQuery();
        await ctx.replyWithPhoto({ source: catImages3[randomIndex] });
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_4', async (ctx) => {
    try {
        const catImages4 = [
            './pic/sleep/1.jpg',
            './pic/sleep/2.jpg',
            './pic/sleep/3.jpg',
            './pic/sleep/4.jpg',
            './pic/sleep/5.jpg',
            './pic/sleep/6.jpg',
            './pic/sleep/7.jpg',
            './pic/sleep/8.jpg',
        ];
        const randomIndex = Math.floor(Math.random() * catImages4.length);
        await ctx.answerCbQuery();
        await ctx.replyWithPhoto({ source: catImages4[randomIndex] });
    } catch (e) {
        console.error(e);
    }
});

bot.command('case', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Нажми, чтобы узнать интересный факт</b>', Markup.inlineKeyboard(
            [Markup.button.callback('Узнать интересное', 'btn_5')]
        ));
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_5', async (ctx) => {
    try {
        const catFacts = [
            'У кошек пять пальцев на передних лапах и только четыре на задних.',
            'Группа кошек называется клаудером.',
            'У кошек есть особая ключица, которая позволяет им всегда приземляться на лапы.',
            'Кошка может издавать более 100 различных звуков.',
            'Кошки спят около 70% своей жизни.',
            'У кошек на передних лапах есть специальные когти для ухода за шерстью.',
            'Кошки обладают сильным обонянием и могут улавливать запахи так же, как и люди.',
            'Кошки были одомашнены более 4000 лет назад.',
            'В отличие от собак, кошки не имеют пристрастия к сладкому.',
            'Пушистые имеют уникальные поверхности носиков, как отпечатки пальцев у людей.',
            'Эти животные способны залезть в любую щель благодаря отсутствию ключиц, а также анализу размеров вибриссами.',
            'Из-за особенностей строения когтей, пушистые слезают с деревьев исключительно задом.',
            'Коты охотятся для забавы или похвалы хозяина. Поймав мышь ваш питомец вероятнее всего гордо принесет тельце вам под ноги, а не съест. В процентах охота ради утоления голода равняется 30%.',
            'Как и у людей, у кошек есть проводная рука, ну или в этом случае лапа. У самок – правая, у самцов – левая.',
            'Участок мозга, отвечающий за эмоции, у кошек находится там же, где и у людей.',
            'Зачастую котики начинают делать массажные движения лапками, сопровождающиеся мурлыканьем. Это связано с детством котика – такими движениями он стимулировал выработку молока у матери, из-за чего это явление называют «молочным шагом».',
            'Сердце кошки бьется около 140 ударов в минуту. Для сравнения, человеческое сердце бьется в среднем 75 ударов в минуту.',
            'Усы, необходимы кошке для перемещения в пространстве',
            'Коты не любят конфет, так как не ощущают сладкого вкуса.',
            'У всех кошек дальнозоркость, поэтому им тяжело разглядеть предметы, находящиеся рядом.',
            'Чрезмерная любовь к кошкам называется Айлурофилией.',
            'Кошка спит большую часть суток, а остальное время уделяют уходу за собой.',
            'Котята, так же как и маленькие дети имеют молочные зубы.',
            'Кошка не способна потеть. Увлажняется только подушечка лапы.',
            'Кот – единственное животное способное пережить падение с девятиэтажного дома.',

        ];
        const randomIndex = Math.floor(Math.random() * catFacts.length);

        const randomFact = catFacts[randomIndex];
        const catImages = [
            './pic/cat/1.jpg',
            './pic/cat/2.jpg',
            './pic/cat/3.jpg',
            './pic/cat/4.jpg',
            './pic/cat/5.jpg',
            './pic/cat/6.jpg',
            './pic/cat/7.jpg',
            './pic/cat/8.jpg',
            './pic/cat/9.jpg',
            './pic/cat/10.jpg',
            './pic/cat/11.jpg',
            './pic/cat/12.jpg',
            './pic/cat/13.jpg',
            './pic/cat/14.jpg',
            './pic/cat/15.jpg',
            './pic/cat/16.jpg',
            './pic/cat/17.jpg',
            './pic/cat/18.jpg',
            './pic/cat/19.jpg',
            './pic/cat/20.jpg'
        ];
        const randomImageIndex = Math.floor(Math.random() * catImages.length);
        const randomImage = catImages[randomImageIndex];

        const moreButton = Markup.button.callback('Ещё факт', 'btn_5');

        await ctx.answerCbQuery();
        await ctx.replyWithPhoto({ source: randomImage });
        await ctx.reply(randomFact, Markup.inlineKeyboard([[moreButton]]));
    } catch (e) {
        console.error(e);
    }
});

const fs = require('fs');

bot.command('music', async (ctx) => {
    try {
        await ctx.replyWithHTML('<b>Выберите музыкальный жанр:</b>', Markup.inlineKeyboard(
        [   [
                Markup.button.callback('Pop', 'btn_6_pop'),
                Markup.button.callback('Rock', 'btn_6_rock'),
                Markup.button.callback('Hip Hop', 'btn_6_hiphop'),
                Markup.button.callback('Phonk', 'btn_6_phonk')
            ],
            [Markup.button.callback('Random', 'btn_6_rand')]
        ]
        ));
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_6_rand', async(ctx)=>{
    try {
    const moreButton = Markup.button.callback('Ещё', 'btn_6_rand');
    const musicFiles = [
        './music/pop/1.mp3',
        './music/pop/2.mp3',
        './music/rock/1.mp3',
        './music/rock/2.mp3',
        './music/hiphop/1.mp3',
        './music/hiphop/2.mp3',
        './music/phonk/1.mp3',
        './music/phonk/2.mp3'
    ];

    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const randomFile = musicFiles[randomIndex];

    await ctx.answerCbQuery();
    await ctx.replyWithAudio({ source: randomFile },Markup.inlineKeyboard([[moreButton]]));
} catch (e) {
    console.error(e);
}
});

bot.action('btn_6_pop', async (ctx) => {
    try {
        const moreButton = Markup.button.callback('Ещё', 'btn_6_pop');
        const popFiles = [
            './music/pop/1.mp3',
            './music/pop/2.mp3',
            './music/pop/3.mp3',
            './music/pop/4.mp3',
        ];

        const randomIndex = Math.floor(Math.random() * popFiles.length);
        const randomFile = popFiles[randomIndex];

        await ctx.answerCbQuery();
        await ctx.replyWithAudio({ source: randomFile },Markup.inlineKeyboard([[moreButton]]));
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_6_rock', async (ctx) => {
    try {
        const moreButton = Markup.button.callback('Ещё', 'btn_6_rock');
        const rockFiles = [
            './music/rock/1.mp3',
            './music/rock/2.mp3',
            './music/rock/3.mp3',
            './music/rock/4.mp3',
        ];

        const randomIndex = Math.floor(Math.random() * rockFiles.length);
        const randomFile = rockFiles[randomIndex];

        await ctx.answerCbQuery();
        await ctx.replyWithAudio({ source: randomFile }, Markup.inlineKeyboard([[moreButton]]));
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_6_hiphop', async (ctx) => {
    try {
        const moreButton = Markup.button.callback('Ещё', 'btn_6_hiphop');
        const hipHopFiles = [
            './music/hiphop/1.mp3',
            './music/hiphop/2.mp3',
            './music/hiphop/3.mp3',
            './music/hiphop/4.mp3',
        ];

        const randomIndex = Math.floor(Math.random() * hipHopFiles.length);
        const randomFile = hipHopFiles[randomIndex];

        await ctx.answerCbQuery();
        await ctx.replyWithAudio({ source: randomFile }, Markup.inlineKeyboard([[moreButton]]));
    } catch (e) {
        console.error(e);
    }
});

bot.action('btn_6_phonk', async (ctx) => {
    try {
        const moreButton = Markup.button.callback('Ещё', 'btn_6_phonk');
        const phonkFiles = [
            './music/phonk/1.mp3',
            './music/phonk/2.mp3',
            './music/phonk/3.mp3',
            './music/phonk/4.mp3',
        ];

        const randomIndex = Math.floor(Math.random() * phonkFiles.length);
        const randomFile = phonkFiles[randomIndex];

        await ctx.answerCbQuery();
        await ctx.replyWithAudio({ source: randomFile }, Markup.inlineKeyboard([[moreButton]]));
    } catch (e) {
        console.error(e);
    }
});



bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
