# Update Notes

**CyberCode Online** is currently under an early and heavy development stage, which means many changes and new features are being added every day! That also means many stats are being adjusted all the time. So, if you have anything to suggest, feel free to [create an issue](https://github.com/DexterHuang/CyberCodeOnline/issues) or join our [Discord server](https://discord.link/cco).

Fancy helping out with running costs? [Buy me a potato](https://www.buymeacoffee.com/cybercodeonline) or [subscribe to my Patreon](https://www.patreon.com/cybercodeonline/).

### Help Needed:

-   contribution/words.json - Random Words
-   contribution/dungeon/layout/structure-mask.json - Dungeon Layouts
-   contribution/notes/\* - In Dungeon Lore
-   contribution/mobile/{lang}/tips.md - Tips for Mobile
-   contribution/mobile/{lang}/tutorial/\*.md - Tutorial
-   contribution/mobile/{lang}/procedural-names - equipment names
-   contribution/mobile/{lang}/item/lore - item lore
-   contribution/mobile/{lang}/scenario/\*\* - drop lore
-   tips.txt - Tips for desktop
-   tutorial/\* - Desktop Tutorial
-   contribution/lang/ - Localizations

**Remember to add your name to the ['Credits.md'](https://github.com/DexterHuang/CyberCodeOnline/blob/master/Credits.md) doc when you create a PR**

If you would like to help to maintain CyberCode Online, please feel free to submit a PR at [our GitHub repo](https://github.com/DexterHuang/CyberCodeOnline).

Step by step [Guide](https://cybercode-online.fandom.com/wiki/GitHub_PR_Tutorial) how to submit a PR on our GitHub

## Updates
### 2021/12/26 v0.754
- UPDATE - Block links from sending to chat
- FIX - Backend bug fixes
- UPDATE - Chaptchas will be easier to read now
- OPTIMIZATION - Serverside optimizations

### 2021/12/25 v0.754
-  OPTIMIZATION - Optimized chat room typing performance for slower devices
-  OPTIMIZATION - Optimized some UI component rendering

### 2021/12/24 v0.754 
-   NEW - Added tutorial popup for when clicking on empty equipment when there is no equipment available in inventory,
    this is to help newbies to understand how to obtain equipments from cache, please help me with translation :D
    file is at `/mobile/${lang}/popup-tutorial/**`
-   NEW - Now `item lore`, `dungeon-crate` and `enemy-drop` config file has been moved to language specific location and therefore can be translated to other language, please edit them in `mobile/${lang}/scenario/**` and `mobile/${lang}/item/**`, if file does not exist in your language, please just copy it from english version
-   BUFF - Newbie quest now gives level 4 equipment instead of 1, since by the time the quest is completed, player is already level 3

### 2021/12/23 v0.754

-   NEW - Added NPC image for terminal
-   NEW - You can now translate/add npc lines from the translation file

### 2021/12/21 v0.749

-   NEW - Equipments are now translatable, this requires mobile/{lang}/procedural-names.json to be translated, only tw-zh is enabled for new. once others are translated i will enable them manually

### 2021/12/16 v0.749

-   UPDATE - Now if chat message list will show a small popup if you are not at the bottom, clicking the popup will scroll to bottom, this should fix chat not scolling with new message issue :)
-   UPDATE - Tip box will now use translated version if avaiable
-   UI - Updated buttons in player details page

### 2021/12/14 v0.749

-   OPTIMIZATION - optimized some algorithm, prinitng and crafting page should be faster
-   NEW - Added icon for caches

### 2021/12/13 v0.749

-   NEW - Added translable tutorial files, tips file is also added but not working yet, if you are interested please feel free to translate it to your language :)
-   UPDATE - Now `RNG interferer` register when you start your task, meaning as long as you start your task while `RNG interferer` is active, even if the buff has expired by the time its your turn to skip, you will still get the benefit of the buff, this way there is no need of worrying about the time and amount of people skipping
-   UPDATE - Added many more possible drops to `RNG interferer` drop table this **WILL NOT** affect the chance of `EPIC` and `Legendary`, it adds additional drops only, at the sasme time `EPIC` drop rate is lowered to 0.5 per `RNG interferer` max at 1% chance, with 4 Legendary unlock in one skip, you will have 4% chance of getting epic and very high chance of getting `Legendary` and other loots, basically shifts some of the rewards to non-epic loots, this Buff is still very experimental and might be still very OP, so please do not purchase if you don't intent using it rightaway
-   OPTIMIZATION - General app optimization

### 2021/12/9 v0.749 - CHRISTMAS UPDATE

-   NEW - Added `Mysterious Container` this will only drop during Christmas from dungeon boss and AI Core AFK task, the loots are similar with `Rare locked container` but require less item to open.
-   NEW - Added new buff `RNG interferer`, give everyone additional chance of getting extra EPIC and Legendary equipment when you open a `Legendary locked container`, **this WILL NOT interfer** with ther normal drops from `Legendary locked container` and the loot table for it was **not** changed. in addition, during christmass season, there will alos be chance of getting `Mysterious Container` as well. (Please note, this global buff might be too OP, so it is possible it will get nerfed soon, so please do not purchase if you don't plan to use it right away)
-   Added some easter-eggs :)

### 2021/12/6 v0.718

-   UPDATE - implemented a custom profanity detection, instead of using 3rd party lib
-   OPTIMIZATION - Increase rendering speed for chat effect
-   OPTIMIZATION - Increase rendering speed for inventory page
-   UPDATE - Re-enable the split view on web browser, but still disabled on tablets, due to slow down concerns

### 2021/12/3 v0.718

-   NEW - Added language based chat channels, you can switch channel on the chat page, Global remains international and all langauge is welcome there
-   UPDATE - Now new player's language and chat channel will default to their device language if it is available
-   UI - Updated `Arasaka Unit Exchange` character art

### 2021/12/2 v0.718

-   FIX - Fixed soem non-english character fail to send to chat due to a 3rd party library got updated unexpectedly, and the update contains bug, reverted to older version of the liberay
-   FIX - Reduce the likly hook of `[Object Object]` error when too many people sending chat

### 2021/12/1 v0.718

-   NEW - Added quick mute menu for moderators, system will now memorize mute record and suggest appropriate mute time base on records
-   UI - Added skip queue to `All Apps` menu
-   NEW - Added ability to temperary disable dungeon when server is being fixed
-   NEW - Added server popup notification for emmergency notice

### 2021/11/30 v0.718

-   OPTIMIZATION - Alot of optimization on the server side to ensure it does not explode again
-   NEW - Added sever notice, allows me to show popup for important message to all players

### 2021/11/28 v0.718

-   UI - Updated quest page UI
-   UI - Added quick menu when you click on player message

### 2021/11/27 v0.718

-   UI - Added tutorial button to phone menu
-   OPTIMIZATION - Optimized skip like rendering
-   UI - Added more translation config

### 2021/11/25 v0.718

-   NEW - Better newbie spam prevention
-   FIX - Fixed npc shop issues

### 2021/11/24 v0.718

-   NEW - Updated character naming scree
-   NEW - Added chat rule popup for newbies

### 2021/11/23 v0.718

-   NEW - Now once in a while, there is small chance server will drop a free random global buff when someone send a chat to global chat
-   NEW - Added two more image for enemy, if you are interested feel free to commit your image to github `resources/enemy/`
-   OPTIMIZATION - Server and client optimization

### 2021/11/21 v0.718

-   NEW - Added community item lore, now anyone can easily add lore or tips to specific item by editing/adding file to GitHub
-   UI - Now if you have broken equipment when fighting street fight, system will notify you with error message
-   FIX - Fix location image not displaying properly

### 2021/11/20 v0.718

-   BUFF - Gang dungeon boss now has guaranteed drop of `Gang Resource Crate`, `Gang Memory Shard` and `Hash Processor` and drop chance of those items on normal enemies has also been increased
-   OPTIMIZATION - Simplified full screen popup rendering, should be easier on potatoes
-   UPDATE - Now when you travel between location, your page will automatically scroll to top
-   UI - Tutorial popup will automatically scroll into view
-   UI - Starting tips tutorial UI updated
-   UI - Now locked interactables will show as gray-out with a small lockpad icon
-   UPDATE - Street enemy below level 3 will not spawn with special trait, to prevent newbies get destroyed.
-   UI - Updated error toast UI
-   LANG - Updated synaptic item usaged notification text, before was long and abit confusing
-   UI - `Secret Key` brute forcing interface now only shows secretkeys thats newer your level
-   UI - Adjust NPC dialog box so on smaller screen it won't get blocked by NPC image
-   Other UI fixes

### 2021/11/19 v0.718

-   FIX - Fixed gang dungeon enemies and boss not dropping any cache and other drops they are suppose to drop, such as equipment caches and others (I have no idea this bug exists!)

### 2021/11/17 v0.718

-   UPDATE - Added more Unit purchase tiers (only on browser with PayPal)
-   UI - Updated Unit purchase UI
-   UI - Updated item details page UI
-   LANG - Added more langauge translation configs

### 2021/11/16 v0.718

-   UI - You can now see player level on chat messages
-   FIX - Now the game will "fail gracefully" when the device does not support webgl, those device wont crash but cannot display skip hearts
-   NEW - `Amadon` button added to AFK screen, you can use it to View market items, but it is stricly Look but don't touch policy
-   OPTIMIZATION - Skip heart performance improvement

### 2021/11/15 v0.718

-   OPTIMIZATION - Performance improvement

### 2021/11/14 v0.718

-   OPTIMIZATION - Fixed spkie lag when clicking skip respect heart button
-   UPDATE - Increased chance of winning lottery when clicking respect heart, also added rare `EPIC` item drop.

### 2021/11/12 v0.718

-   UPDATE - You can now send respect (similar to likes/heart) to skipper while skip is active, when sending respect you will also automatically enter lottery, and have rare chance to earn rewards ranging from 100 `AI Cores` to `Explorer's Backpack` and `Legendary Container` (the faster you click, the higher chance you have). This feature can be disabled in the setting menu
-   BUFF - Attack timing bar now maximun give you +10% + 16 flat damage

### 2021/11/09 v0.715

-   BUFF - Gang dungeon enenmy will also drop more `Medical Tech Scrap` amount increases base on dungeon level

### 2021/11/08 v0.715

-   BUFF - Gang dungeon now will drop more `Medical Tech Scrap` amount increases base on dungeon level
-   UI - Minor adjustment on enemy drop and dungeon crate lore UI

### 2021/11/04 v0.710

-   BUFF - Increased `Hash Processor` max market price to 8,000 btc

### 2021/11/03 v0.710

-   BUFF - Gang dungeon boss now is weaker
-   BUFF - items with health, health regen and shield is 10% stronger, shiled is 20% stronger
-   UPDATE - Now on web version, it the app will prompt player to choose between Cyberpunk and VS Code mode before starting up, this is to reduce confusion to people who does not underdstand code when opening web vsersion

### 2021/11/02 v0.710

-   NEW - Added referral program, please see tutorial page for more infomation (Profile -> Tutorial -> Referral)

### 2021/10/31 v0.710

-   UI - Reduced space taken by buttons at looting UI, so phone with smaller screen will have easier time seeing stuff
-   UI - Disabled pull to refresh at looting and street fight screen

### 2021/10/27 v0.710

-   NEW - Added background music for dungeon

### 2021/10/26 v0.710

-   FIX - Fixed AFK time display wrongly after finished a AFK task previously
-   NEW - Added dungeon scavange scenario, a short text will appear whenever you loot the "crates" in dungeon, the content is contributable, please see [here](https://github.com/DexterHuang/CyberCodeOnline/blob/master/contribution/scenario/enemy-drop.json)
-   NEW - Added enemy drop scenario, a short text will appear whenever enemy dies and drops item, the content is completly contributable, please check [here](https://github.com/DexterHuang/CyberCodeOnline/blob/master/contribution/scenario/dungeon-crate.json)
-   UI - Updated looting interface

### 2021/10/24 v0.710

-   UPDATE - Now you can select the amount of item you want to deposit or withdraw to/from the bank vault
