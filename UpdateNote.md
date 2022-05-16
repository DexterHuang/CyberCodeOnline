# Update Notes

**CyberCode Online** is currently under an early and heavy development stage, which means many changes and new features are being added every day! That also means many stats are being adjusted all the time. So if you have anything to suggest, feel free to [create an issue](https://github.com/DexterHuang/CyberCodeOnline/issues) or join our [Discord server](https://discord.link/cco).

Fancy helping out with running costs? [Buy me a potato](https://www.buymeacoffee.com/cybercodeonline) or [subscribe to my Patreon](https://www.patreon.com/cybercodeonline/).

### Help Needed:

-   contribution/words.json - Random Words
-   contribution/dungeon/layout/structure-mask.json - Dungeon Layouts 
-   contribution/mobile/{lang}/tips.md - Tips for Mobile
-   contribution/mobile/{lang}/tutorial/\*.md - Tutorial
-   contribution/mobile/{lang}/procedural-names - equipment names
-   contribution/mobile/{lang}/item/lore - item lore
-   contribution/mobile/{lang}/scenario/\*\* - drop lore
-   contribution/mobile/{lang}/dungeon-lore/** - dungeon lore
-   tips.txt - Tips for desktop
-   tutorial/\* - Desktop Tutorial
-   contribution/lang/ - Localizations

**Remember to add your name to the ['Credits.md'](https://github.com/DexterHuang/CyberCodeOnline/blob/master/Credits.md) doc when you create a PR**

If you would like to help to maintain CyberCode Online, please feel free to submit a PR at [our GitHub repo](https://github.com/DexterHuang/CyberCodeOnline).

Step by step [Guide](https://cybercode-online.fandom.com/wiki/GitHub_PR_Tutorial) how to submit a PR on our GitHub
 

## Updates        
### 2022/05/12 v0.780
- FIX - Potential fix for rare occation of player getting stucked during skip
- NEW - Added 10 new emblems
- NEW - Added mod exclusive emblem
- UI - Updated emblem selection UI

### 2022/05/12 v0.780
- FIX - Now mentioning players not in your gang will not sent notification to the player
- UPDATE - Reduced sensitivity of the world filter

### 2022/05/07 v0.780
- FIX - Fixed UI become too big in some samsung phones

### 2022/05/04 v0.780
- FIX - Server-side bug fixes

### 2022/04/29 v0.780
- FIX - Fixed item lore ${tierName} not showing issue
- FIX - Fixed some client crash issue

### 2022/04/27 v0.780
- UPDATE - Some new players will need to reach level 10 before they can send emails, system will apply to player base on varius factors.
- UPDATE - Captcha now more colorful :)

### 2022/04/26 v0.780
- UPDATE - Location names are now translatable, please follow the schema from `mobile/en/procedural-names.json` in your language config
**There is no need to follow the english translation, just add names that would make sense in your language**


### 2022/04/22 v0.780
- FIX - Serverside bug fixes
- NEW - Added Ukrainian language, now it is still machine translated. Help needed :)
- BUFF - Print selling in `Black Market` now gain you more Print EXP 
- BUFF - Scavenge now will drop AI Core **This will NOT affact other drops! Other drop rates are NOT changed, each location's drop rate might get re-randomized due to how procedural generation works**
- UPDATE - `Black Market` has been moved to market location, this should be easily found by players
- NEW - Added tutorial section in the quest tap to give hints to new players of what to do
- UI - Reduced size of buff expire notice & only show up when the buff will expire in less then 60 seconds (will see if I can integrate dismiss function with this tomorrow, its too late today)

### 2022/04/21 v0.780
- NEW (Player Suggestion) - Now when critical buffs is about to end an popup will show up so it is less likely the buff accidentally die
- NEW (Player Suggestion) - Equiping or unequipping items will no loger cause it to unlock automatically
- NEW (Player Suggestion) - Added skip status on chat page

### 2022/04/20 v0.780
- UI - Now locked item cannot be used in black market

### 2022/04/19 v0.780
- NEW - Added ice cream emblem
- BUFF - `Black Market` profilt has been increased, high level player with transaction and bargain should be able to get 1,000,000 btc wiht using `Black Market` once (5 times more then doing 1 mining session at max level).
- BUFF - Increased scale of higher rarity item sold at `Black Market`, for example `Legendary` has higher price then `Trash` items.
- BUFF - Minor re-write on source code to ensure AFK players who only want to AFK can be self-sufficient, meaning they are not forced to play dungeon. instead only rely AFK tasks such as `BTC Mining`, `AI Core Bot Farm`, `Recycler` or `Scavange`. This is very behind the scene algorithm rewrite, mainly only to ensure AFK players have the choice to only do AFK tasks 
- BUFF - Printing price for `Legendary` and lower have been lowered.

### 2022/04/18 v0.780
- NEW - Added `Black Market` for Automatic Print & Sell your extra caches, located at `Commercial Area`. You may print & sell your cache in bulk (max 1000) to earn quick btc, the amount of btc scales with your `Molecular Print level`, the higher it is the better profit you will make. the earning will be affact by both `Bargain` stat and BTC multification buff.
- BALANCE - adjusted trash, common and HQ selling price and printing cost.
- NEW - `Pachinko s Plus Pro Max` has been added.   
- NOTICE - It would seem the game has been banned in Russia by the Russian Goverment (Likely due to Anti-war and donnation link for people of Ukraine), added a notice on login page for all Ru language players that they can player with VPN

### 2022/04/16 v0.780
- NEW - Trinoky Mart now sells AI Core at 10,000 (same as the highest price in market, to ensure that buying in market will always be better then buying from NPC) and not affected by Bargain stat. 
This change is needed due to the newly added `AI Core Cluster` allowing players to store large amount of AI core, making it possible for AIs in market to be brought out. this should resolve issue of no where to buy AI resulting in price being artificially hiked up. **this is still in experimental stage, and subject to change**

### 2022/04/09 v0.780
- NEW - Added `AI Core Cluster` equivalent of 1000 AI Cores, can be crafted with 1000 AI Cores + 50,000 BTC (equivalent of price for 5 AI) and craft back to 1000 AI Cores, Currently is not used in game except for serving the purpose of "Compressed AI Cores"

### 2022/04/07 v0.780
- UI - Updated the SL Data fortress breach user name to `[REDUCTED]` instead of a hardcoded `Xh81d` to avoid confusion
- UPDATE - Now healing tile is usable even when there are enemies around

### 2022/04/05 v0.780
- FIX - Potential fix for rare case of non-last-hitter not getting exp
- UPDATE - Level cap raised to 500

### 2022/04/02 v0.780
- FIX - Security bug fixes

### 2022/04/01 v0.780
- UPDATE - Updated language config generation code, unused translations should be automatically removed, config file is now sorted differently

### 2022/03/24 v0.780
- FIX - Fixed in some device AFK task does not finish automatically
- FIX - Samsung phones with newest webview result in abnormally large UI should now be fixed. Please download the newest game version from playstore.

### 2022/03/19 v0.780
- NEW - Added manual sync button at AFK screen, when your AFK task has finish but the client doesnt update (most of time is due to incorrect device time), you can click it to manually update with server

### 2022/03/16 v0.780
- NEW - You can now switch between your owned skin
- NEW - Added emblem system, you may purchase emblems with Unit, it will show up in chat frame and in the next update in your profile

### 2022/03/12 v0.780
- FIX - Fixed chat related bug
- FIX - Fixed gang related bug

### 2022/03/07 v0.780
- UI - Update market level select UI
- FIX - Fixed serverside issue
- OPTIMIZATION - client optimization

### 2022/03/06 v0.780
- FIX - fixed devices that has incorrect timezone or time cannot finish AFK tasks normally

### 2022/03/05 v0.780
- UI - Added price display when clicking on NPC shop item

### 2022/03/04 v0.780
- UPDATE - Updated calibration interface and equipement UI
- UPDATE - Top gang display at `Flori Station` will be temporarely replaced by `stop war` banner, in support of people who are suffering due to the war, click on the banner will bring you to UK goverment website on how to help with the situation, (Top gang guys, hope you can understand :) )

### 2022/03/03 v0.780
- UPDATE - Added check for client desyn when calibrating equipments, to prevent accidental breaking when desync from buff display

### 2022/03/02 v0.780
- FIX - Fixed exp related issue 

### 2022/02/27 v0.780
- UPDATE - Market UI have been re-done.
- UPDATE - Now blocked user cannot send gift to you

### 2022/02/23 v0.780
- UPDATE - Color minigame required taps has been reduced

### 2022/02/22 v0.780
- UPDATE - Item stack max amount is increased to 10,000
- UPDATE - `Prestige` donation tier is now on discount with the up coming `228 incident` day in Taiwan

### 2022/02/19 v0.780
- UPDATE - Decreased amount of times random events like minigame or locked box pin would show up in street fights
- FIX - Fixed locked box pin code not showing correctly issue 

### 2022/02/18 v0.780
- FIX - Fixed a bug when you dont have an inventory open but client thinks it does cause by desync, you wont be able to syn-up unless you refresh 
- UPDATE - VScode UI has been disabled, as it is very outdated and not very much used.
- UPDATE - On hit exp has been moved to on kill exp, total exp should be same

### 2022/02/17 v0.780
- FIX - Possible fix of dungeon fight issues
- OPTIMIZATION - Serverside optimization
- FIX - fixed minigame and locked box event not firing in street fight
- FIX - Removed my gang from gang leaderboard, it showed up because a bug introduced by another unrelated fix a aday ago.

### 2022/02/16 v0.780
- OPTIMIZATION - Serverside optimization

### 2022/02/15 v0.780 
- FIX - Market bug fixes 

### 2022/02/14 v0.780 
- FIX - Server issue
- UI - Color minigame color brightness has been lowered, and updated the UI
- FIX - Now dungeon list shows correct title

### 2022/02/12 v0.780 
- BUFF - Color minigame normal and hard difficulty is removed, now only EASY will show up (the one with 3 colors)
- BUFF - Color minigame reward has now been increased, now with garanteed reward on completion & only drops `AI Cores`, `Hash Processors` and `Anti-matter cell`

### 2022/02/11 v0.780 
- UI - Updated Weapons Smith chracter - keeps the original design by OG l33t4ng3l while aligning the art style with rest of NPCs 
- Minigame Enabled
- Why? isnt there many important bugs or feature to add?
  - Because this is one of the more important things to add. This feature is aimed to address several different issues:
  - To increase the difficulty of making dungeon auto farm bot/scripts, to also reduce server load created by botters, also reduce the time I spend banning them.
  - Increase dungeon variety, this is the first step of a series of elements I want to add into dungeons making them more interesting. From choiced based events to minigames like this, dungeons being only "keep fighting enemies non-stop" is one of the constructive criticism I receive from players.
  - Adds a tiny bit of skill based element to the game, currently dungeon crawlers are differentiated by how fast your internet is and are able to click the buttons faster. This way even if your goal is to speed-run dungeons, whoever runs faster will be determinded by an individual's skill rather then how fast their internet/server is. Overal this should be fair to everyone.

- How long does it take to finish the minigame?
  - It should take under a minute, even if you are very bad at video games, it will be easy enough for all players, but you will play better if you are more skilled.

- Is there a reward if you beat the minigame? 
  - Yes, my plan is to increase the reward for minigame.

- Is this all Permanent and not subject to change?
  - Absolutly NOT. If you think it should be adjusted or anything after its deployment, please be involved in discussion with other players, Myself and the Moderators in the Discord, so that we can make adjustments to mimprove playability. I do not expect it to be perfect on launch so nor should you :) 
**So, please do not feakout and be super ultra instinct angry if you dont like some part of it** just join the discussion and I will always hear it.

- Why put up notice? is this a HUGE update?
  - No, not at all, it shouldnt matter too much actually it is because I am worried that players may get mad when they see changes happen without being giving me or the game some time to fix stuff.
### 2022/02/09 v0.780
- FIX - Fixed health regen not updating health UI
- NEW - Added block feeature, you can now block players

### 2022/02/08 v0.780
- UI - Removed skip like counter, its eating up too much server resource without being very meaningful 
- UI - Optimized skip queue counter, it now shows less accurate (less realtime) counter to save server resource and reduce mobile data usage, this update only affects client UI, does not speed up or slow down the queue itself. skipping code is not touched.

### 2022/02/07 v0.780
- UPDATE - Updated alt detection algorithm
- UI - Added discount display for unit based donation
- FIX - Fixed personal cali stacking issue
- FIX - Fixed some subscription related bug.
- CHANGE - `Exp memory` are now temporarily removed from drop list as it is causing some issue serverside.

### 2022/02/05 v0.780
- OPTIMIZATION - Major serverside optimization, this should reduce size of packets receive by the client, saves data on your mobile also reduce load on the server

### 2022/01/31 v0.754
- FIX - Fixed status effect (buffs) display incorrectly sometimes.

### 2022/01/29 v0.754
- NEW - Market and Auction channel is added, this is and could be changed/removed in the future, so lets see how it goes :)
- OPTIMIZATION - Serverside optimization
- UI - removed new player welcome system message (too many new players joining now, might enable it when things returns to normal)

### 2022/01/27 v0.754
- UPDATE - Updated chat connection code, hopefully it will be more stable in the future.

### 2022/01/26 v0.754
- FIX - Buff effect stackable logic error casuing it to stack 1 more then specified, 10% cali description says stack 2 times but could stack 3 times instead, now is fixed. 
- UPDATE - Updated image for Mr. Lee
- UI - UI Update on email list, now tags will render correctly in message previews
- OPTIMZIATION - Serverside optimization
- UI - Purchase system message will now tag buyer player

### 2022/01/25 v0.754
- FIX - fixed chat rare broken issue
- NEW - Added seperate chat log channels in discord for Korean, Japan and Russia.

### 2022/01/24 v0.754
- FIX - Fixed chat message rendering related issue, device with issue rendering chat message (jumpy or broken) should be fixed now, older devices would render chat faster as well. If you are still facing issue with chat rendering please report to me.

### 2022/01/23 v0.754
- FIX - 5% calibration shard is fixed, now stackable unlimited. It was a bug
- UPDATE - 300% calibration shard price has been set to 6144 unit

### 2022/01/22 v0.754
- NEW - Added auto sell in the npc shop
- BALANCE - Fixed calibration where it could be stacked indefinitely resulting in being able to use 10% buff to stack to a maximum of 666%, in order to fix this exploit, the flowing changes are made: 
  - All calibration shards now only stack up to 2 times, this is to prevent only use of the lowest tier multiple times to reach the highest tier effect, just use the higher tier instead as intended.
  - Added a new 300% calibration shard since the shards can only stack 2 times 
- UI - Updated dungeon lobby UI to match with other dungeon displays 

### 2022/01/21 v0.754
- LANG - Enabled equipment translation for Japanese and French
- UI - Connect to chat by default again, after checking the stats, it does not effect the server much.

### 2022/01/20 v0.754 
- ANTI-CHEAT - Now auto clicker will get you flagged automatically by the server and flagged account will lose the ability to ever win rewards from sending skip likes, even if you have stopped using auto clickers. This is also done silently with no notice to the cheater and irreversible.
- OPTIMIZATION - Now the game will not load chat message until chat tab is open. this is to save server resource
- FIX - fixed system message with wrong sequence

### 2022/01/19 v0.754
- UPDATE - Updated tag system, now tagging and searching player when tagging is smarter, you should be able to reply to players in chat easier now
- UI - Now the `View Gang` button no longer has a delay on showing up when opening message quick action popup 
- OPTIMIZATION - Serverside optimization

### 2022/01/17 v0.754
- FIX - Fixed referral player search. Could not search some players if the players name is too short
- FIX - Fixed crash issue when deleting account
- UPDATE - Changed skip like back to hearts
- OPTIMIZATION - Several server optimization
- OPTIMIZATION - Dungeon performance optimization

### 2022/01/14 v0.754
- OPTIMIZATION - Server side optimization

### 2022/01/12 v0.754
- NEW - `Prestige` donation tier is added, this tier is redeemable by donating Units directly and it is permanent, meaning once aquired, it stays with your account forever
- FIX - Fixed crashing on some older players profile page
- FIX - Fixed some phones do not show item details page properly
- OPTIMIZATION - attempt on increasing skip queue speed, please let me know if it works well

### 2022/01/11 v0.754
- UI - Updated donation npc image

### 2022/01/10 v0.754
- UI - Remove gang level display on chat messages, to reducing server load
- OPTIMIZATION - Client and server optimization

### 2022/01/07 v0.754
- UPDATE - Enabled translated equipment names for Korean
- UPDATE - Enemy names are translated for zh-tw thanks to johnruby

### 2022/01/05 v0.754
#### Enemy Gangs 
All enemies has a gang that it belongs to, each area will have different 'dominant' gangs.
Enemy gangs can include: 
- `Animals`: Increased damage to `Disruptor` players
- `Voodoo boys`: Increased damage to `Makeshift` players
- `Scavengers`: Increased damage to `Lethal` players

#### Equipment marks
All equipment (Except backpacks) have a `Mark`, each mark has different effect:
- `Lethal`: Increase damage to Animals enemies
- `Disruptor`: Increase damage to Voodoo boys enemies
- `Makeshift`: Increase damage to Scavengers enemies
You `Mark` is determined by the most marks you have equipped.
- UI - Updated item details page
- UI - List of attachable upgrade module is removed, instead click an empty slot to select upgrade module
- NEW - Enemy names and boss names are now available for translation in `mobile/{lang}/procedural-names.json`

### 2022/01/02 v0.754
 - BALANCE - `RNG Interferer` is now not stackable and time is reduced to 2 minutes. However unlocking tasks started while the buff is active will get the buff even when the time for the task is completed and the buff is already long gone. This is to ensure that each of the `RNG Interferer` is only one use, to mitigate the issue of sometimes skip takes longer to finish base on server status and amount of players; this way, the value of `RNG Interferer` stays exactly the same regardless of how many people are skipping or how fast the server is skipping players.

### 2021/12/31 v0.754
- NEW - Added `Reply` button when click on player message 
- UPDATE - Respect heart now shows more accurate counter and hearts

### 2021/12/30 v0.754
- NEW - Added time skip tutorial thanks to `ManzTellen`'s contribution
- UI - Updated npc page UI
- UI - Updated login page UI 
- NEW - You can now only show craftable receipts in crafting menu 

### 2021/12/28 v0.754
- NEW - Calibration tutorial contributed by community is added to tutorial menu

### 2021/12/27 v0.754
- UPDATE - Dungeon lores are now translatable and moved to `mobile/${lang}/dungeon-lore`, and index.json is no longer needed, simply add your file into the folder, the game will automatically detect it. For none-english version, please feel free to add any new stories to your language only. Lores and story does not need to be in-sync between languages. Need at least 5 lores for it to be activated, otherwise english version is used.
- NEW - Added popup notice for donation when non-donator clicked on profile picture, to explain why the feature is donator only (this file is translatable at `mobile/{lang}/popup-tutorial/donation.md`)

### 2021/12/26 v0.754
- UPDATE - Blocked links from sending to chat
- FIX - Backend bug fixes
- UPDATE - Chaptchas will be easier to read now
- OPTIMIZATION - Serverside optimizations

### 2021/12/25 v0.754
-  OPTIMIZATION - Optimized chat room typing performance for slower devices
-  OPTIMIZATION - Optimized some UI component rendering

### 2021/12/24 v0.754 
-   NEW - Added tutorial popup for when clicking on empty equipment when there is no equipment available in inventory,
    this is to help new players to understand how to obtain equipments from cache, please help me with translation :D
    file is at `/mobile/${lang}/popup-tutorial/**`
-   NEW - Now `item lore`, `dungeon-crate` and `enemy-drop` config file has been moved to language specific location and therefore can be translated to other languages, please edit them in `mobile/${lang}/scenario/**` and `mobile/${lang}/item/**`, if file does not exist in your language, please just copy it from english version
-   BUFF - Newbie quest now gives level 4 equipment instead of 1, since by the time the quest is completed, player is already level 3

### 2021/12/23 v0.754

-   NEW - Added NPC image for terminal
-   NEW - You can now translate/add npc lines from the translation file

### 2021/12/21 v0.749

-   NEW - Equipments are now translatable, this requires mobile/{lang}/procedural-names.json to be translated, only tw-zh is enabled for new. once others are translated i will enable them manually

### 2021/12/16 v0.749

-   UPDATE - Now chat message list will show a small popup if you are not at the bottom, clicking the popup will scroll to bottom, this should fix chat not scolling with new message issue :)
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

-   NEW - Added language based chat channels, you can switch channel on the chat page, Global remains international and all langauges are welcome there
-   UPDATE - Now new player's language and chat channel will default to their device language if it is available
-   UI - Updated `Arasaka Unit Exchange` character art

### 2021/12/2 v0.718

-   FIX - Fixed some non-english characters that fail to send to chat due to a 3rd party library that got updated unexpectedly, and the update contains bug, reverted to older version of the library
-   FIX - Reduce the likely hood of `[Object Object]` error when too many people sending chat

### 2021/12/1 v0.718

-   NEW - Added quick mute menu for moderators, system will now memorize mute record and suggest appropriate mute time base on records
-   UI - Added skip queue to `All Apps` menu
-   NEW - Added ability to temporarily disable dungeon when server is being fixed
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

-   NEW - Updated character naming screen
-   NEW - Added chat rule popup for new players

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
-   UPDATE - Street enemy below level 3 will not spawn with special trait, to prevent newbies getting destroyed.
-   UI - Updated error toast UI
-   LANG - Updated synaptic item usaged notification text, before was long and a bit confusing
-   UI - `Secret Key` brute forcing interface now only shows secret keys thats closer to your level
-   UI - Adjust NPC dialog box so on smaller screen it won't get blocked by NPC image
-   Other UI fixes

### 2021/11/19 v0.718

-   FIX - Fixed gang dungeon enemies and bosses not dropping any cache and other drops that they are suppose to drop, such as equipment caches and others (I have no idea this bug exists!)

### 2021/11/17 v0.718

-   UPDATE - Added more Unit purchase tiers (only on browser with PayPal)
-   UI - Updated Unit purchase UI
-   UI - Updated item details page UI
-   LANG - Added more langauge translation configs

### 2021/11/16 v0.718

-   UI - You can now see player level on chat messages
-   FIX - Now the game will "fail gracefully" when the device does not support webgl, those devices wont crash but cannot display skip hearts
-   NEW - `Amadon` button added to AFK screen, you can use it to View market items, but it is stricly Look but don't touch policy
-   OPTIMIZATION - Skip heart performance improvement

### 2021/11/15 v0.718

-   OPTIMIZATION - Performance improvement

### 2021/11/14 v0.718

-   OPTIMIZATION - Fixed spike lag when clicking skip respect heart button
-   UPDATE - Increased chance of winning lottery when clicking respect heart, also added rare `EPIC` item drop.

### 2021/11/12 v0.718

-   UPDATE - You can now send respect (similar to likes/heart) to skipper while skip is active, when sending respect you will also automatically enter lottery, and have rare chance to earn rewards ranging from 100 `AI Cores` to `Explorer's Backpack` and `Legendary Container` (the faster you click, the higher chance you have). This feature can be disabled in the setting menu
-   BUFF - Attack timing bar now maximun give you +10% + 16 flat damage

### 2021/11/09 v0.715

-   BUFF - Gang dungeon enenmy will also drop more `Medical Tech Scrap` amount increases based on dungeon level

### 2021/11/08 v0.715

-   BUFF - Gang dungeon now will drop more `Medical Tech Scrap` amount increases based on dungeon level
-   UI - Minor adjustment on enemy drop and dungeon crate lore UI

### 2021/11/04 v0.710

-   BUFF - Increased `Hash Processor` max market price to 8,000 btc

### 2021/11/03 v0.710

-   BUFF - Gang dungeon boss now is weaker
-   BUFF - items with health, health regen and shield is 10% stronger, shield is 20% stronger
-   UPDATE - Now on web version, the app will prompt players to choose between Cyberpunk and VS Code mode before starting up, this is to reduce confusion to people who do not underdstand code when opening web version

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
