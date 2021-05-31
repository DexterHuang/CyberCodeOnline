# Update Notes

**CyberCode Online** is currently under an early and heavy development stage, which means many changes and new features are being added every day! That also means many stats are being adjusted all the time. So, if you have anything to suggest, feel free to [create an issue](https://github.com/DexterHuang/CyberCodeOnline/issues) or join our [Discord server](https://discord.link/cco).

Fancy helping out with running costs? [Buy me a potato](https://www.buymeacoffee.com/cybercodeonline) or [subscibe to my Patreon](https://www.patreon.com/cybercodeonline/).

### Help Needed:
 * contribution/words.json - Random Words
 * contribution/dungeon/layout/structure-mask.json - Dungeon Layouts
 * contribution/notes/* - In Dungeon Lore
 * contribution/mobile/tips.md - Tips for Mobile
 * contribution/lang/* - Localisations
 * tips.txt - Tips for desktop
 * mobile-tutorial/* - Mobile Tutorial
 * tutorial/* - Desktop Tutorial

**Remember to add your name to the ['Credits.md'](https://github.com/DexterHuang/CyberCodeOnline/blob/master/Credits.md) doc when you create a PR**

If you would like to help to maintain CyberCode Online, please feel free to submit a PR at [our GitHub repo](https://github.com/DexterHuang/CyberCodeOnline).

Step by step [Guide](https://cybercode-online.fandom.com/wiki/GitHub_PR_Tutorial) how to submit a PR on our GitHub

## Updates Log 
### **2021/05/31 v0.566**
 * Added forgot password page, you can now reset your password by entering your email

### **2021/05/30- v0.566**
 * fixed calibrated item not becoming untradable issue
 * Increase max price you can sell cali core at market
 * Fixed clear dungeon quest not registering issue
 * Now only normal dungeon will have healing thingy

### **2021/05/28- v0.566**
 * Major dungeon enemy system code rewrite, should be faster and comsumes less battery and data in dungeons
 * Added healing thingy in dungeons

### **2021/05/28- v0.531**
 * Travel button is now THICC

### **2021/05/27- v0.531**
 * Updated Unit Exchange character image
 * Fixed system log issue
 * Updated Travel button UI
 * Global chat optimization
 * Small global chat UI change
 * Fixed common containers not showing in the terminal when you dont have enough tech scrap

### **2021/05/26- v0.531**
 * CHAT IS SPEED 🚀
 * Gang can now invite more than 32 people based on the clan level
 * Resources and funding needed for gang upkeep is decreased for gangs with lesser players, and increased for gangs with more members
 * Notification settings! You can now choose which kind of notifications you want to receive
 * Small calibration curve adjustment, +4 fail chance is lowered, +5 fail chance increased but also increase the power, also, +5 above is buffed 🍔
 * Peformance update, should run smoother on older devices

### **2021/05/24- v0.531**
 * You can now inspect other player's item

### **2021/05/23- v0.531**
 * Gang and player name tags loading optimization (reduces calls to server)

### **2021/05/22- v0.531**
 * NEW - `Item Calibration`, you may now access `Equipment Workbench` from your `Gang Headquarter`, insert a `Equipment Calibration Core` to activate the workbench, once activated, you may use it to `Calibrate` one of item of your choice, each item has differen `Calibration Capacity` varies base on thier Tier, 
 * *IMPORTANT* if calibration fails, your item will be destoryed, irreversable 
 * Added `Calibration AI Shard`, after activating this you will get a stackable buff that increases the success rate of calibration
 * Added `Equipment Calibration Core`, drops from enemies, used for item calibration
 * Updated item detail UI, now shows clearly where each attribution is coming from:
    - white - total
    - grey - attachment
    - yellow - calibration
 * Item list now shows attachment icon dots


### **2021/05/20- v0.487**
 * Fixed typo on dungeon description (2.5x exp -> 2.0x exp) NOTE: its not a nerf, it has been wrong since a long time ago (exp is unchanged, only increased by 10% from previous patch)
 * Gang dungeon's level requirement has been removed
 * Removed EXP Memory Shards from gang dungeons 
 * Decreased the EXP required to level up for all skills
 * Increased AI Core bitcoin drop by 30%

### **2021/05/19- v0.487**
 * Increased EXP gained from killing enemies by 10%
 * Decreased Bitcoin gain from AI Cores

### **2021/05/18- v0.487**
 * Decreased gang related item's droprate in crates, but drastically increased in boss drops
 * Fixed `Gang Memory Shard` not spawning correctly
 * Upgraded the email server (All your mail history will be lost, it's expected)
 * Boss XP gain has been doubled in dungeons

### **2021/05/17- v0.487**
 * Now clicking on player's gang tag in chat message title will navigate you to the respective gang's details page
 * Entering gang dungeons will now consume a `Gang Invasion Order Transmitter`
 * Entering gang dungeons created by a gang member will no longer require you to have `Gang Invasion Order Transmitter`
 * More optimization
 * Fixed an issue regarding loading a name which is either changed or the player is already banned in the gang member page

### **2021/05/16- v0.487**
 * Added `Gang Headquarter`.
 * Gangs now require an upkeep fee and resource, the fee and resources required depends on the member count
 * Added `Gather Resouce` action in `Gang Headquarter`. This action gives resource to your gang
 * Added `Gang Dungeon`, a high difficulty dungeon, that is bigger and deeper with a stronger boss. The boss is guaranteed for rare+ drops and requires `Gang Invasion Transmitter`, and only accessible to gang members.
 * Added `Gang Invasion Transmitter`, it only drops in the loot room of challenge dungeons, use this to enter the gang dungeon
 * Added gang levels, now gangs can be leveled up based on players actions
 * Player tag now shows gang level

### **2021/05/13- v0.487**
 * Removed unit amount from player profiles on the web version

### **2021/05/12- v0.487**
 * Nametags now have distinct colors if the tagged player is a donator
 * Potential fix to dungeon crash issue
 * Updated level exp bar UI on the profile page


### **2021/05/11- v0.487**
 * Added icons for travelling
 * Added a prompt to change language when your system language isn't english
 * Fix the bug where you can click edit bio on other player's profile
 * Made the circuit background more noticeable
 * Changed the color of the AFK loading bar to improve readability
 * Change the brightness of red to increase readability

### **2021/05/10- v0.487**
 * New Death Screen design
 * Updated AFK progress bar design
 * Updated level stats display
 * Added Icons for NPCs
 * Minor `AI Core` nerf
 * Added Bio to profile (available only to donation tier `Elite` and above)
 * Added barcode decoraction (available only to donation tier `Elite` and above)
 * Added Level up screen
 * Fixed bugged enemies, causing the player to crash until the dungeon expires
 * Fixed bugged dungeons stuck in the map

### **2021/05/07- v0.487**
 * Added an animation for attacking and receiving damage
 * Added an indication when health is low during combat
 * Bitcoins are now required to unlock all Locked Containers
 * Added a limit to the number of Locked Containers that can be unlocked in one go
