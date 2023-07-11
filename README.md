# Bot registration in Telegram:
+ Find bot @BotFather in Telegram
+ Enter the command /newbot
+ Follow the prompts to come up with a name for the bot and a login for it
+ Get a link to a new bot and an API token
+ Enter the command /mybots
+ Select your bot and click Edit Bot
+ Add information help, picture, case, music

# Project initialization:
+ Create folder with project name
+ Open the project in your IDE or editor
+ Open terminal and go to project folder

+ check node.js version if there is no version then install node.js
  > node -v check version

+ initialize project (create package.json file)
  > npm init -y

+ install nodemon
  > npm i -D nodemon

+ install telegraph
  > npm i telegraf

+ install dotenv
  > npm i dotenv

+ Create an .env file and write to it:
  > BOT_TOKEN = Token from @BotFather

+ Create Procfile
  > worker: npm start

+ Edit scripts in package.json file
```
scripts: {
"start": "node index.js",
"dev": "nodemon index.js"
},
```

# Run the project with the command:
> npm rundev

# Teams:
+ The /start command sends a welcome message to the user with their name (or "Anonim" if the name is not available).
+ The /help command sends a message containing a list of defined commands.
+ The /picture command displays a message with an embedded keyboard containing options for various types of cat pictures.
+ The command prints a /case message containing an interesting fact and image.
+ The /music command displays a message containing options for various music genres: Pop, Rock, Hip Hop, Funk, and Random.
# Actions:
+ When an action is triggered by pressing a button on the built-in keyboard, the corresponding callback function is executed.
+ For each button on the built-in keyboards, actions are defined for images of cats, interesting facts and musical genres.
+ Each action selects a random element from an array of images or facts and sends back a response to the user with the selected element.
+ For music genres, there is also a "Random" option, which selects a random music file from the available options.

