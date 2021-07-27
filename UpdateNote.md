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

## Updates 
### **2021/07/27 v0.674**
 * NEW - Added auto scrap button to mobile, open inventory and expand the filter dropdown (system will automatically scrap item it thinks you dont need, use at your own risk)
 * UPDATE - Slightly increase drop of  `AI Core` and `Hash Processor` on `rare locked containers‵
 * Added confirmation when quiting dunegone by clicking back arrow

### **2021/07/26 v0.674**
 * UPDATE - `AI Core` and `Hash Processor` drop rate in common container is slightly lowered in favor of other drops, since it is observed people are having too much of it now
 * UI - Required time on recipes now will hide if the recipe is instant craft instead of showing `less then 5 seconds` (such as cache printing)
 * FIX - Fixed Npc talk bubble sometimes changes during page transision 
 * OPTIMIZATION - Optimized svg loading, takes up less resources to render svgs
 * OPTIMIZATION - Cache printing npc page now should render faster
 * OPTIMIZATION - Bank UI should render more smoothly now

### **2021/07/25 v0.674**
 * UI - Minor adjustment for icon buttons 
 * UI - Added description to bank menus
 * UPDATE - Decreassed max price of `AI Core` and `Hash Processor` in market to prevent people using it as storage

### **2021/07/23 v0.674**
 * UI - Added Icons for bank actions and market actions
 * OPTIMIZATION - optimized how images are cached
 * FIX - rare crash in items page
 * FIX - fix crash on desktop gang details page 
 * FIX - fix crash on opening notification tab on desktop in rare cases
 * UPDATE - increases max price you can sell for all `Locked Containers`
 * FIX - fixed typo on pachinko prcing 10k -> 5k
 * FIX - fix rare crash on mobile player market stall page

### **2021/07/21 v0.674**
 * Reduced `Energy Cell` drop in scavange, since there are way too many now
 * Changed chat character limit to 256
 * Now you cannot type more then the character limit into chat input box
 * Merged new names from github
 * Added many more translatable content 

### **2021/07/17 v0.666**
 * UPDATE - Reduced max length of chat message to 128

### **2021/07/15 v0.666**
 * FIX - multiple security patch and bug fixes
 * FIX - updated how enemy tile is rendered, it should show up correctly without issue on all devices
 * UPDATE- removed display of dungeon id on web version
 * OPTIMIZATION - changed how email is sent in the backend

### **2021/07/14 v0.666**
 * UPDATE - removed some layouts from dungeon and added some new ones
 * FIX - fixed chat tag broken during chat exploit 

### **2021/07/13 v0.666**
 * OPTIMIZATION - Fix chat becomes slower when kept for long

### **2021/07/12 v0.666**
 * FEATURE - Added locked safe box (Captcha Reward), the system will give the player a safe box, upon unlock you will receive a small reward, the appearance of this safe box is depending on your behaviour, this is introduced because there is still player using bots. this is unfortunate that the inconsiderate individuals are forcing the implementation of captcha, but I will always try to balance the detection algorithm to reduce interruptions to the normal players to the minimal 
 * NEW - Merged new dungeon layout from github to game

### **2021/07/10 v0.666**
 * FEATURE - You can now long press on gang player list to kick player (if you have the permission that is)

### **2021/07/09 v0.666**
 * FIX - Now mentioning non-exiting player in chat will not work
 * OPTIMIZATION - Dungeon should be smoother now 
 * FIX - Fix chat keeps disconnecting
 * BALANCE - reduced Marksman enemy crit damage from 50% to 40% 
 * OPTIMIZATION - opening player profile should now be much smoother

### **2021/07/08 v0.639**
 * NEW - Added reconnecting message for global chat (this might not work, let me know if it works @@)
 * OPTIMIZATION - optimized page transistion
 * FIX - Fixed Inventory wonky behaviour and it should be very smooth when scroll now
 * FIX - Fixed market not removing old items
 * FIX - Hopfully fixed some chat sometimes stuck at bottom or display wrongly

### **2021/07/07 v0.639**
 * UPDATE - global status timer will now update more frequently (each 60 sec => 10 sec)
 * UI - Updated how inventory is rendered to reduce load (this will be big improvement specially when there is alot of item in inventory)
 * UI - Now bank vault item deposit and withdraw will have their own page, to reduce load on device when list is big
 * UI - Now sell to merchant npc will have its own page as well

### **2021/07/06 v0.639**
 * NEW - (Marksman) trait enemies will now crit : 10% crit chance 50% crit damage
 * NEW - Combat now has a bar that determine the extra damage you deal based on timing (5%+ damage), you can disable this and hide the bar to disable this feature in the settings menu if you dont want time based combat :)
 * NEW - Enemies will now deal variable damage 5%+-
 * NEW - Updated combat log text, hopefully it's easier to read
 * FIX - Updated realtime liberary, this should fix sometimes chat doesnt show up correctly
 * OPTIMIZATION - Item selection popup should be much more performan now
 * OPTIMIZATION - @Mention search should be much faster now as it shows less possible result (you cant see them anyway)

### **2021/07/05 v0.639**
 * Removed player tag loading animation (it is taxing on old devices, will change to a better one in future)
 * Added member contribution history for gang

### **2021/07/03 v0.639**
 * FIX - fixed rare crashes happens when starting new afk tasks

### **2021/07/02 v0.639**
 * UPDATE - New graphic for Bank of Arasaka 
 * OPTIMIZATION - making rendering item list faster
 * OPTIMIZATION - now market rendering is much faster
 * OPTIMIZATION - press back from market list and player profile is much faster

### **2021/07/01 v0.592**
 * OPTIMIZATION - Big chungus optimization ~ Multiselect in item lists are now much faster
 * OPTIMIZATION - Player profiles will now load faster and more efficiently

### **2021/06/31 v0.592** 
 * The word censor list is now contributable via github

### **2021/06/30 v0.592** 
 * Added daily rewards, can be access in the `All Apps` Menu
 * Changed pachinko to be NOT instant (cuz it was op) and cannot used while AFK (technical limitation) 

### **2021/06/29 v0.592** 
 * `Collect Protection Fees` now has significant chances of getting Rare+ items
 * Changed icon for the floating menu, and added a new subcategory `Apps`
 * Added Pachinko in the `Apps` submenu, spend some btc to win random rewards (instant and can be used while AFKing)

### **2021/06/28 v0.592**
 * Improved stability
 * Fixed blank dungeons
 * General bug fixes

### **2021/06/27 v0.592**
 * Improved automatic error reporting 
 * Age of UwU Rawr xD has arrived, old man

### **2021/06/26 v0.592** 
 * Fixed the Donation and Unit NPC showing incorrectly on Cyberpunk mode 

### **2021/06/25 v0.592**
 * Muted players can no longer delete their account
 * UI - AFK button will now show a more detailed reward list, incalculable chances will be shown as `(??%)`
 * BUFF - Occupation exclusive AFK task now allows the top 2 gangs in the occupation control leaders to use it, instead of the top 1 previously
 * BUFF - Increased the loot drops for `Collect Protection Fees`, along with the required cost, now it requires `Gang Resource Crate`. This is to increase the chance of other gangs catching up since the top gangs will need to use up some of their resource if they want to collect protection fees
 * NEW - Added l33t Spe4k exploit, can be purchased in the Unit shop, it changes all chat in global to leet speak for 10 minutes

### **2021/06/24 v0.592**
 * NEW - Added exclusive AFK task for members of the TOP GANG (the gang that currently occupies shangri-la)
 * Updated the alternate account detection algorithm 
 * Improved overall app performance

### **2021/06/22 v0.592**
 * BUFF - Drop rates for `Supply Crate [Gang]` from enemies has been tripled, and scavenging now yields a big chance of dropping it
 * NEW - Added gang occupation control to leaderboard
 * NEW - Gang image and motto is now visible in the gang details page
 * NEW - Elite donator tier and above can now set gang image and motto (You will be banned if you put inappropriate images or text, this is a very serious offence)
 * NEW - `Supply Crate [Gang]` usage will result in less resources, but you can now use it in the gang headquater to gain more resources
 * BUFF -  `Supply Crate [Gang]` drop rate has been increased, and now it will also drop when scavenging
 * NEW - Gangs now can "Occupy" the Shangri-la city by performing occupation AFK tasks in the headquarter, the gang with the highest power will be shown in the city to all players (with image and motto if available), occupation status will be refreshed weekly, so everyone will always have a chance
 * NEW - Added a leaderboard for gang levels

### **2021/06/21 v0.592**
 * Fixed a bug where mails don't update when the app is closed
 * Fixed rare chances of freezing when applying skips
 * NEW - Added gang leaderboard

### **2021/06/20 v0.592**
 * Added two new healing items for higher level players
 * Fix an issue where some players cannot purchase items from the market

### **2021/06/19 v0.592**
 * Fix desktop cyberpunk mode UI issues
 * Fixed collapsible inventory not clickable

### **2021/06/18 v0.592**
 * Fixed the problem where progress isn't visible after starting recycle on desktop cyberpunk mode
 * Added chracter graphics for Lee
 * Player details page now shows only stats that the player have, those the player doesn't have will be hidden
 * Inventory and equipment is now split into different tabs, reduces the constant scrolling and improving performance
 * Secret key list is now collapsed by default to improve performance
 * Player inventory is now collapsed by default in player details to improve performance
 * Improved performance for inventory list

### **2021/06/17 v0.592**
 * Updated iOS app, now notification should work as expected on iOS devices
 * Updated mobile mode on tablet screen, now when you have lagrer screen, chat and inventory will show on the sides to take advantage of larger space :)
 * You can now switch to mobile mode when you are on desktop by clicking on "Enable Cyberpunk Mode", you can switch back in the mobile setting page
 * Notification dots on the bottom tab is now fixed

### **2021/06/15 v0.592**
 * Added automatic alt detection, it has been brought to my attention that there is some kind of mass alt farming operation happenning. In order to protect the market and fairness of the game, it is clear that its necessary to limit amount of alts, specially large scale ones for mass farming. 
I will be perma-banning malicious alt accounts. 
With the backpack update, btc bank, there is no legit reason for having alts anymore, therefore we will be gradually prohibiting the use of alts. If you have less then 4 alts you will still be able to send and move your stuff to main, BUT if you have 4 or more alts, you wont be banned unless you are doing serious exploits, but you will certainly not be able to send items to your alts anymore. 
 * Now muted players cannot sell you items in the market

### **2021/06/13 v0.592**
 * IP bans and auto chat spamming mutes are implemented 

### **2021/06/11 v0.592**
 * Major UI rewrite
 * Fixed gang invites not showing properly 

### **2021/06/10 v0.592**
 * Fix rare chances of double skips, this should be just a display bug, I dont think the person actually paid doubled units. Let me know if I am wrong on this
 * Fix rare chances of losing items while retrieving it from the item inbox

### **2021/06/09 v0.592**
 * NEW - You can now `Factory Reset` your calibrated equipments by going to the item details page and clicking Factory Reset, this requires a `Factory Reset Shard`
 * NEW - Added `Factory Reset Shard` this drops rarely when scavange runs
 * Fixed graphical glitch where it says enemy is defeated in dungeons while its not
 * Added warning box for items that is broken

### **2021/06/08 v0.592**
 * NEW - You can now deposit and withdraw from `Bank of Arasaka`
 * NEW - `Chat exploit transmitter [PIRATE]` Activate to enable pirate chat mode globaly 
 * ***IMPORTANT*** Items in `Item Inbox` will now expire automatically in 7 days, please make the necessary arrangement, or your items WILL get deleted in 7 days. you can see the expiry date at item inbox

### **2021/06/07 v0.566**
 * Increased max stack of items to 5000
 * you can now recycle `Ammunition tech parts` and `Military ammunition tech parts` to `Tech Scrap`
 * Now when you are using `Pirate Speak` language, whatever you say in chat will be automatically translated to pirate speak :)
 * Server stability optimization

### **2021/06/06 v0.566**
 * Make player mention on offline players work better 
 * Added two new language, Thai and Pirate Speak!

### **2021/06/05 v0.566**
 * Updated floaty menu

### **2021/06/04 v0.566**
 * NEW - `Automatic Recycler` 
       You may use this to recycle `Medical Tech Part` and any other kind of equipment `Cache` to `Tech Scrap`, the recycler takes time to process the items, but produces more then simply scrapping, there is also chance of getting extra `Tech Scrap`. The Recycler is located at `Gang Headquarter`, only player in a gang can access it
       
### **2021/06/03 v0.566**
 * Added mutiple `Backpacks`, you can craft them from `Lee's Trading Post`
 * Fix some dungeon stability issue
 * Expired market item now will correctly go to new item inbox

### **2021/06/01 v0.566**
 * Fixed issue with calibration item stat display
 * Rewrite inbox items, now items should not disappear when gifting to other players, Because of this rewritem, the items in your old item inbox will disappear, but not gone, it will still return to your inventory when there is space
 * Fix issue with sometimes money not recieved by seller when item is sold on market

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
