
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

## Updates Log 
### **2021/04/27- v0.465**
 * Global skip now needs to wait until the last skip process is completed before starting a new skip
 * Added global skip queue list (in floaty menu)
 * Massive internal update (fondation for global skip rework)
 * Performance optimization

### **2021/04/24- v0.452**
 * Dungeon movement should be smooth now
 * Major optimization older phone should see big improvement

### **2021/04/24- v0.444**
 * Fixed killing enemy outside dungeon not receieving EXP issue
 * Fixed item not showing up in the market

### **2021/04/23- v0.444**
 * Fix sometimes killing enemy outside dungeon does not get EXP or reward
 * Major rewrite of player market code, please help test, don't sell very valuable items just yet, if there is any issue DM me on discrod
 * Performance optimization
 * Fixed gang max player count

### **2021/04/22- v0.443**
 * Optimization

### **2021/04/21- v0.443**
 * Increased gang max player count from 16 to 32
 * Major client optimization (hopefully you will see reduce in battery useage)

### **2021/04/19- v0.440**
 * Changed time skip batch skip size to 50 per min to reduce server load (the weird chat bug is due to server could not handle too much player in one go)
 * Added new dungeon room design from contributed content
 * Added many new names from contributed content (Words.json)
 * Bug fixes on `Global Time Skip`, should fix rare issue where sometimes not everyone got skipped

### **2021/04/15- v0.414**
 * Updated background graphics for `Cybernetic Potato`
 * New Donation Tiers `Legendary` (Purple) and `Cybernetic Potato` (Potato)
 * More unit purchase options
 * Attemp to fix global time skip issue
 * Fixed Paypal issue

### **2021/04/14- v0.414**
 * Performance optimization, should see battery improvement
 * Now `Secret Key Fragments` will drop seperately in dungeon, you can always open the box, hopefully this will resolve the soft-lock issue

### **2021/04/13- v0.414**
 * Added `Street Cred` to leaderboard
 * Added `Street Cred` you may give 1 street cred to any player per day, give it to someone who deserves your respect!
 * Added icons for equpment items in inventory
 * Added Radar chart view to player detail page
 * Added social tutorial and removed co-op tutorial page
 * Chat bug fix
 * Global time skip optimization (hopefully everyone will get skipped normally) 

### **2021/04/12- v0.414**
 * Chat backend update
 * Dungeon backend update (if you cannot see or move your chracter, please leave the dungeon and restart your app)

### **2021/04/11- v0.414**
 * Global time skip will now affect all players doing AFK tasks (but will have small delay before everyone is processed by system)
 * tons of under-the-hood server improvement 

### **2021/04/09- v0.414**
 * Global time skip is changed to max 50 player randomly (until i fix the network issue)

### **2021/04/08- v0.414**
 * Added global time skip using Unit
 * Fixed Paypal on web

### **2021/04/07- v0.414**
 * Added chat preview on map page

### **2021/04/06- v0.414**
 * Now market item will expire in 3 days instead of 7 (To reduce server load)
 * Remove live update on dungeon list page
 * Added `Credits` tab on profile

### **2021/04/04- v0.410**
 * Fix health bar display issue
 * Server Optimization
  
### **2021/04/03- v0.410**
 * Now Tier 3 Unit package is cheaper (140% bonus)
 * Fix IAP purchase saying Insufficient Unit when player has exact same amount 

### **2021/04/02- v0.408**
 * Android IAP is fixed

### **2021/03/28- v0.401**
 * Added PayPal payment to browser (including mobile view) to purchase Units (**Donation Tiers will come later**)
 
### **2021/03/27- v0.401**
 * Fixed hard lock on map page due to dungeon issue, press `leave dungeon` when it keeps loading none stop

### **2021/03/08- v0.401**
 * NPC now have entry animation
 * Added new NPC for donation

### **2021/03/07- v0.386**
 * Added leader board
 * Optimize background dungeon loading
 * Change send gift default amount to 1 to prevent accidentally send whole stack of item
 * Improved image caching

### **2021/03/06- v0.386**
 * Updated popup notification UI

### **2021/03/05- v0.386**
 * Added damage indicator

### **2021/03/04- v0.386**
 * Buffed ammo crafting again, may have nerfed too much yesterday
 * `AI Core` auto farming can now only be activated when your level is lower then the location max level, 
this is to prevent people from out-leveling the area too much, result in soft lock
 * Fixed multiple typo

### **2021/03/03- v0.386**
 * Player details now have more details ;)
 * Added decimal separators in numbers to improve readability

### **2021/03/02- v0.386**
 * Increased anti-matter charge drop rate on scavange 
 * Added friend list
 * `Anti Matter Charge` and `Energy Cell` is now scrapble, having a low chance of getting ammo tech parts
 * Cost of crafting `Military ammunition tech parts` from `Ammunition tech parts` is increased
 * You can now craft `Hash Processor` from various tech parts
 * Increase the cost of crafting high level med item
 * lower the drop rate of `Military ammunition tech parts`
 * Added word list from contribution 
 * Increase max level to 250

### **2021/03/01- v0.369**
 * Added `Transaction Exploit Transmitter` - Increase Bitcoin gained by 40% (stackable) (global), can be purchased with Units
 * Added `Frontal Cortex Optimization Transmitter` - Increase Exp gained by 80% (global), can be purchased with Units
 * Doubled Exp Shard's exp amount
 * Multiple typo fix

### **2021/02/28- v0.369**
 * Added images for locations

### **2021/02/27- v0.369** 
 * Fix ios start up error issue
 * Fix ios profile pic upload bug 

### **2021/02/26- v0.369**
 * Fix upgrade module visual bug on item details
 * Simple details of items now shows in inventory page
 * UI update for item details page

### **2021/02/25- v0.369**
 * Now other player equiped items in their detail page is rendered with new UI element
 * Fix typo for `Military Drone` recipe
 * Fix update page exceeding the screen width issue
   
### **2021/02/24- v0.369**
 * Progress bar text now is THICC
 * IOS update been rejected by Apple, pushes some updates for that

### **2021/02/23- v0.369**
 * Updated mobile combat UI, should be more compat and less messy
 * Updated progress bar text color 
 * Improve time sync mechanic 
 * Fix typo on crafting recipe 
 
### **2021/02/22- v0.359**
 * New Items `Experience Shard [mining/Scavange/Medical Science/ammo crafting/printing skill]` same as normal `Experince Shard` but for other levels
 * Item Rename `Experience Memory` => `Experience Shard`
 * Scraping items with upgrades installs will now drop the upgrade's scrap drop as well
 * Minor change to player detail page UI
 * Now crafting popup only let you select up to your free inventory slot (it won't let you craft more then you can hold)
 * You can now see other player's clan player list and stats
 * Updated clan display on player details page
 * Fix error popup on app start
 * fix iOS toggle component looking weird

### **2021/02/21- v0.359**
 * iOS related fix
 * iOS IAP update - appstore still pending apple approval
 
### **2021/02/20- v0.359**
 * Update dungeon enemy icon, because some older ios devices cannot render the old one properly
 
### **2021/02/18- v0.359**
 * Normal dungeon enemy level is reduced 

### **2021/02/17- v0.359**
 * Dungeon now has custom structures, structures can be contributed via GitHub
 * Players in dungeon now uses path finding, will walk according to the path necessary instead of teleporting where you click
 * You can now see players in other room in the same dungeon at the edge of your map

### **2021/02/06- v0.323**
 * Fix issue with inventory scroll

### **2021/02/05- v0.323**
 * Added image for `Molecular Printer` thanks to [l33t4ng3l](https://github.com/l33t4ng3l) for the awesome artwork!
 * Fix chat laginess
 * Optimization, should drastically increase battery life on chat page

### **2021/02/03- v0.323**
 * Profile UI updated!
 * Moderator color has been change to PINK!
 * Added temporary image for `Arasaka Unit Exchange`
 * You now cannot use item while in combat outside dungeon (it used to be able to use, but no effect)

### **2021/02/02- v0.323**
 * Added new store `Arasaka Unit Exchange`
 * Removed Esport gammer from bad guy list
 * Server optimization

### **2021/02/01- v0.323**
 * Server Optimization
 * Now when `Rare Synaptic Acceleration Transmitter` is activated, a notification will be sent to all players

### **2021/01/31- v0.316**
 * Added `Rare Synaptic Acceleration Transmitter` in Trinoky Mart, increases speed for 40% for 20 min, instead of 5% for 10 min, also stackable
 * Added `Unit` currency, used to purchase rare items, you can only aquire this currency through IAP

### **2021/01/30- v0.316**
 * Fix issue where sometimes donator benefit suddenly disappears
 * Added `Synaptic Acceleration` status effect - increases AFK tasks speed
 * Added new Item `Synaptic Acceleration Transmitter` - when used gives all player Synaptic Acceleration for 10 minutes (Stackable), Can be aquired in dungeon loot crate

### **2021/01/28- v0.316**
 * Fixed issue with fake donation, now its not possible to exploit anymore

### **2021/01/27- v0.316**
 * Reduced price of `member` donation tier to 2.99 usd, and includes custom profile to all tiers, higher tiers will have recieve benefits in future updates
 * Added donation shortcut to floating button
 * IAP Donations should be available now (need to update from playstore, IOS is not available yet, I don't have my macbook with me.)
 * Updated donation benefits
 * Now allies will show up in combat screen

### **2021/01/26- v0.309**
 * You can now transfer gang leadership
 * Added better loading screen

### **2021/01/25- v0.309**
 * Added new background music
 * Added framed chat box (donator only)
 * Added custom profile image (elite only)
 * Added title
 * Added basic IAP support (WIP)

### **2021/01/21- v0.309**
 * Increase gang capacity to 16
 * New "!" objects in dungeons

### **2021/01/20- v0.296**
 * Added street dealer graphic, thanks to [l33t4ng3l](https://github.com/l33t4ng3l) for the awesome art work!
 * Major battery usage improvement, app should use less resource while idle now

### **2021/01/19- v0.296**
 * Increase item max stack size to 2000
 * UI update on links page
 * New CCO Lore "New Age: Children of Enlightenment"

### **2021/01/18- v0.296**
 * Fix `Null` player name show up when its system message on web
 * You can now upgrade market slot

### **2021/01/17- v0.296**
 * Change "Buy Me a Coffee" to Patreon
 * Added placeholder image for mart
 * Added new progression quest-lines
 * Added more healing items
 * Over 100+ new sub-locations

### **2021/01/16- v0.296**
 * Added notes into dungeon, you should see random notes (Community Contributed) in dungeons
 * Added over 150+ new enemies
 * You can now encounter "!" in dungeons to read CCO Lore pages and tablets

### **2021/01/15- v0.296**
 * Fix issue with AFK task not getting any loot sometimes
 * Merged word list into game
 * Added many city structure, weather and climate themed building prefixes.

### **2021/01/14- v0.296**
 * Merged contributed word list into game
 * New dialouge featured for both Weapon Smith and Bank NPC on mobile
 * Added lock feature, you can lock your item to prevent it from being scrapped or sold to npc accidentally
 * Major under-the-hood update, item disappearing in transit should be fixed now

### **2021/01/11- v0.290**
 * Updated combat UI on mobile
 * Added quick slots, you can assign usable item to your quickslot, and can be used with one click during combat (mobile only)

### **2021/01/10- v0.283**
 * Possible fix on dungeon desync issue
 * Fix backdrop blur effect on iOS

### **2021/01/09- v0.283**
 * Changed logo to new version on mobile login screen
 * Added review popup
 * Now it's not possible to create character with names that has only capitalization difference with other player

### **2021/01/08- v0.283**
 * Player platform icon is now updated
 * Fix sorting issue in some inventory
 * Added Healing Multiplier stat, increase amount you heal yourself or your allies, drops on armor rare +
 * Healing item can now be used outside combat
 * Added Market Capacity stat, increases max item can be sold in market, drops on armor rare +
 * When click on stat in item detail, description text will pop
 * Added descrptions to all stats
 * Mobile item detail page minor UI fix
 * Fix bug related to player market
 * Now system email when item is being returned from market to inbox will include item names

### **2021/01/07- v0.283**
 * The system will also send you a email when sending a gift
 * Display hint to update browser when in older broswer such as IE11 or very old Android phones

### **2021/01/06- v0.283**
 * Renamed bank to `Bank of Arasaka`
 * Added graphic for bank, thanks to [l33t4ng3l](https://github.com/l33t4ng3l) for the awesome artwork!
 * Dungeon names now will go though bad word sensorship :)
 * Fix duplicated max shield at stat page
 * Fix chance based scrap
 * Added back send dungeon invite to global chat
 * Reduce Medical Tech Part drop rate from scrapping PainAway

### **2021/01/05- v0.283**
 * Added dungeon listing page, you can now see all public dungeons to join
 * You may create dungeon with public or private setting
 * You may create password protected dungeon, to ensure only your friends enters the dungeon

### **2021/01/04- v0.276**
 * You now can scrap Pain Away to Medical Tech Parts

### **2021/01/03- v0.276**
 * Fix issue with iOS app couldn't start (need to download new version from app store)
 * Fix iOS swipe-back going to broken page

### **2021/01/01- v0.276**
 * Added image to Weapon Smith on mobile (drawn by [l33t4ng3l](https://github.com/l33t4ng3l))
 * New Tutorial is added to mobile

### **2020/12/31 - v0.275**
 * Fix android back button issue

### **2020/12/30 - v0.269**
 * Now visited door in dungeons will be greyed out
 * Updated the button of update modal
 * Now the system message for recieving gift will include item amount

### **2020/12/29 - v0.269**
 * Remove title when in dungeon, reduce chance of having to scroll to view the map
 * Bunker renamed to "Vault"
 * Now Apple login is supported on web version
 * Fix web version leave for long time will cause lag issue
 * Added max health and max shield display at player detail on mobile

### **2020/12/28 - v0.264**
 * Update android icon to the newest one
 * Added Facebook mediation to ad service, should increase amount of ads you get

### **2020/12/27 - v0.264**
 * Double exp gained from crypto mining AFK task
 * You can now craft AI Core with Hash Processors

### **2020/12/26 - v0.264**
 * You can now upgrade your bunker size at bank
 * Fix issue with window sizing on certain screen resolution on web
 * Typo fix

### **2020/12/25 - v0.257**
 * Now gang name will show up on player mentions
 * Fix issue with web gang chat

### **2020/12/24 - v0.257**
 * Gang is now available on web version

### **2020/12/23 - v0.257**
 * Fix small chance of items having same id, thus causing weird issue
 * Fixed notifications not working properly
 * Added prompt to confirm before closing inventory
 * Remove backdrop blur effect for pop-up on desktop mode
 * Fix UI issue for selling item on market
 * Added AOE healing items to Tinoky Mart
 * Low level healing item now slightly cheaper in Tinoky Mart
 * Increased inventory size to 50
 * Show player health on map in dungeon
 * Adjusted layout of opened inventory on mobile
 * Optimizations

### **2020/12/22 - v0.254**
 * Fix in-game mail notification now showing sender name
 * Show confirm box before aborting afk task, to avoid accidental abortion ;)
 * Added more clear instruction on how to go to next area in mobile

### **2020/12/21 - v0.253**
 * Added durability display to mobile inventory equiped items
 * Modified the location of the closing button for opened inventory, to avoid missclicks
 * Minor performance enhancement on mail page

### **2020/12/20 - v0.247**
 * Added new rarity "EPIC", it is a very rare drop but much more powerful in terms of stat, also +1 upgrade module slot for all EPIC items
 * Mobile inventory UI update

### **2020/12/19 - v0.245**
 * Mobile button UI improvement
 * Mobile input box UI inprovement
 * Fix item inbox item disappearing issue

### **2020/12/18 - v0.242**
 * Mobile button UI change
 * Mobile popup UI change
 * Mobile map page header display UI change
 * Fix mobile gang chat out of order issue

### **2020/12/17 - v0.239**
 * Fix scrolling on mobile will trigger long press on item list
 * Performance optimization
 * You can now mention offline players

### **2020/12/12 - v0.239**
 * Clan is added to game, currently only include basic functionality

### **2020/12/03 - v0.229**
 * Minor Optimization

### **2020/11/29 - v0.229**
 * Fix issue with modal pop-up
 * Fix game crash issue
 * Fix pop-up bug

### **2020/11/28 - v0.219**
 * System will not show confirmation before scrap item
 * Added player contribution
 * Redesigned mobile pop-up UI
 * 🎉 Now all players who contribute 25% or above to a fight will recive rewards from defeating the enemy
 * Chat notification not disapearing issue has been fixed

### **2020/11/27 - v0.219**
 * Fixed iOS zoom issue

### **2020/11/25 - v0.219**
 * Added easier access to previous location at top of the screen on mobile
 * Rewrite Ad loading functions to be compatible with iOS
 * Enemy level is showing when fighting enemy now
 * Room level now is shown in dungeon
 * Fix iOS long press issue
 * fix iOS related issues

### **2020/11/25 - v0.213**
 * 🎊🎊🎊🎊IOS Version available now!🎊🎊🎊🎊

### **2020/11/21 - v0.213**
 * You can now gain status effect by completing quest from dungeon
 * Status effect for enemies added
 * Increased medical tech parts earned from from scavange by 3 times
 * Increased medical tech parts earned at lower level

### **2020/11/19 - v0.212**
 * Reduced storage price

### **2020/11/18 - v0.211**
 * Added haptic feeback (vibration) when atacking on mobile

### **2020/11/17 - v0.210**
 * Added combat log to combat UI on mobile

### **2020/11/14 - v0.208**
 * Added new tutorial for web thanks to [s3rvant](https://github.com/s3rvant)'s contribution!
 * Ads are back on mobile
 * Added indication of the availability of ads on map page header as `TIME SKIP READY`, so players know time skip is available
### **2020/11/13 - v0.206**
 * New UI design for action card (mobile)

### **2020/11/09 - v0.202**
 * Adjust bank storage price, now one slot is 1000 BTC regardless of item
 * Max level is open till 160
 * Rebalance on ammo crafting and scavange
 * Fixed issue with bank price

### **2020/11/09 - v0.202**
 * Fixed item inbox issue
 * Added bank bunker, you can now store items in bank

### **2020/11/08 - v0.201**
 * Players can now send gift (items) to other players by clicking the send gift button in player profile
 * Fixed issue with displaying tips on web

### **2020/11/05 - v0.199**
 * Bitcoins are now showing on several pages, such as market and NPC interaction page (Mobile)
 * Market item now will exipre in 7 days and automatically return to the player
 * Added item inbox, used to store item send to the player by the system and future gifting system

### **2020/11/01 - v0.196**
 * Added several new icons for inventory UI created by [Arky](https://www.instagram.com/andreiarky)!
 * Players can now long press to select multiple item and sell them in NPC store (mobile)
 * Added category selection to mobile inventory display :)

### **2020/10/30 - v0.194**
 * Fix compatibility issue with other devices
 * Added contribution names to ContributeContent.json by [l33t4ng3l](https://github.com/l33t4ng3l) and [Kimi Leta](https://github.com/kimileta)
### **2020/10/28 - v0.194**
 * Items are now shorted in NPC shop
 * Update item details UI on mobile, now the stat compared to equipped item is showing in details

### **2020/10/27 - v0.187**
 * Fixed caching issue with audio
 * Fixed issue with chat display
 * Added bitcon display on area page on mobile
 * Major Optimization. Players who experience lag during page change should now see some improvement
 * New global chat UI on mobile :)

### **2020/10/25 - v0.184**
 * Players can see other player's names in a dungeon, in the mobile version
 * Added Update note to mobile (at `Me` tab)
 * Added Tutorial to mobile (at `Me` tab)

### **2020/10/23 - v0.178**
 * Boss names are now contributable content :)
 * Removed combat notification, since it is annoying
 * Players can now swipe left and right on chat and inventory to switch view
 * Updated descriptions for actions like travel and scavenge, hopfully is clearer
 * Changed travel details to darker color on mobile

### **2020/10/22 - v0.178**
 * Added even more names to equipments thanks to [l33t4ng3l](https://github.com/l33t4ng3l)'s contribution to ContributeContent.json
 * Added multiple new names to location and equipments thanks to [Kimi Leta](https://github.com/kimileta)'s contribution to ContributeContent.json
 * Added level gate to job hub and player market to avoid confusing new players with too many options
 * Health is now displayed in dungeon
 * Minor UI adjustments

### **2020/10/21 - v0.173**
 * Added background music
 * Modified mobile Area tab interface (shows player name, level and exp)
 * Added new tutorial on mobile
 * Fixed dungeon navigation bug
 * Fixed dungeon loading dark screen
 * Fixed stuck in dungeon issue
 * Fixed music doesnt stop when app is hidden

### **2020/10/20 - v0.168**
 * Shows stats cap at mobile player details
 * Fixed security related issue

### **2020/10/19 - v0.167**
 * Open equipment names to contribution; you may make a PR to ContributeContent.json to add more names for equipments
 * Added many new NPC scripts thanks to [levi middleton](https://github.com/levi-middleton)'s contribution to ContributeContent.json
 * Added new Inventory Icon on mobile thanks to [Arky](https://www.instagram.com/andreiarky)
 * Improve bug splash report screen
 * Added more clearer description for AFK action reward on mobile

### **2020/10/18 - v0.157**
 * Fixed the page refresh on mobile
 * Hot fixes for bugs intoduced by previous update
 * Updated texts in contributeContent, thanks to [Kimi Leta](https://github.com/kimileta),
 Next time someone update it please help me rename it to contribute_content.json haha
 * Major optimization aiming to reduce mobile load time

### **2020/10/17 - v0.156**
 * Fixed huge bug where it prevents new player from registering (SAD)
 * Fixed mail related issue
 * Fixed message player button on desktop

### **2020/10/16 - v0.154**
 * Players can now send direct message to other players from their profile page
 * Added Mail to mobile
 * Complete rewrite of email system
 * Changed how enemy name is displayed on mobile
 * Minor adjustment for mobile battle UI

### **2020/10/14 - v0.148**
 * Fixed mobile exisiting user login page broken issue
 * Fixed first time login redirection issue
 * Fixed new player crashing issue
 * Now player name tags shows the platform they are on
 * Added Discord and GitHUB links on mobile at the Links page

### **2020/10/11 - v0.144**
 * Added procedurally generated quests to dungeons, the quest npc has certain chance to appear in dungeons, denoted with `?` symbol, you can choose to accept or reject the quest from npc, when quest is completed, you will get item and exp as reward
 * Added Discord and bug report button on mobile
 * Added quest descriptions on mobile
 * Mobile back button issue is fixed
 * Mobile pop-up modal (the card) can be dismissed with back button now
 * High level locations are now hidden for new players if the level is too high relative to player in order to avoid confusing new players
 * Mobile item detail page now shows the item slot type
 * Mobile battle UI now shows remaining ammo amount

### **2020/10/08 - v0.141**
 * Fixed issue with ads
 * Fixed shield damage calculation error
 * Added an additional quest for new players
 * Now quest pannel is scrollable
 * Added description for quests

### **2020/10/06 - v0.138**
 * Removed 'god' and 'damn' from banned word list
 * Added new questing system, for now I only add one quest for new players
 * Now quests displays the rewards

### **2020/10/04 - v0.134**
 * Fixed a bug where it prevents quality to take effect correctly and prevents some best stat to be droped
 * Minor mobile UI adjustment
 * Updated mobile tutorial UI
 * Players can now view player details on mobile
 * Players can now join dungeon by clicking link on mobile
 * Added multi select for desktop version on inventory to take and scrap all selected item at once
 * Normal dungeon now also have level restriction. High level player are allowed to join but not interact with objects

### **2020/10/03 - v0.134**
 * Added pull to refresh on mobile `Area` tab, it syncs your data with server

### **2020/09/30 - v0.128**
 * Major update design on mobile
 * Players can now long press on mobile to take multiple item from enemy loot after combat
 * Players can now long press on mobile inventory to select multiple items to destory/scrap
 * Added sort by name in player market, so it is easier to find items

### **2020/09/29 - v0.125**
 * Added mention to mobile version
 * Added Tips display at bottom bar (*Please help contrubute to Tip.md*)
 * Updated markdown display in game
#### Bitcoin Mining
 * Added `Hash Processor`, can be obtained in dungeon and rarely droped by enemy
 * Added Bitcoin Mining job in `[JOB HUB]`, costs `Hash Processor` but gets double amount of Bitcoin compared to `AI Core` auto farm

#### Misc
 * Increased endgame printing price
 * Extra info on repeatable action, now shows the amount of comsumable (eg AI Core, Tech Scrap) needed to start action base of repeat amount
 * Added number input for all number selecting modal, (selling, selecting job repeating amount)
 * Added a prompt before selling Rare and above items to shop, preventing to be accidentally sold to npc
 * Added more instruction on reverse engineering on Tech Scrap

### **2020/09/28 - v0.118**
 * Added more tutorial
 * Fixed player shield not regenerating bug
 * Prevented player stack on top of enemies in dungeon
 * Added more obvious effect to claim quest button, so you will notice it easier
 * Added more tutorial for Desktop UI
 * Mobile now shows small circle badge when it is unreaded global chat
 * Added some tutorial pop-ups
 * Mention system enhancement, players can press 'Tab' to complete, press 'Escape' to close pop-up
 * Added profanity filters to player name and chat

### **2020/09/26 - v0.112**
 * 🎉 Now you can see yourself and other players in dungeon, in real time
 * 🎉 Players can now skip quest on mobile version by watching AD
 * Multiple bug fixes :)


### **2020/09/24 - v0.106**
 * Now when you mention someone, they will get a notification if you they have accepted to recieve notifications
 * 👏 Added mention feature on desktop chat use `@playerName` syntax to include other player's name,
  Player must be online (it is expected you see markup syntax in your input)
 * Fixed mobile skip AFK time feature
 * Players can now sell and see `AI Core` in player market with `Materials` filter

### **2020/09/23 - v0.104**
#### Auto Farm
 * Added `AI Core` item, can be obtained in dungeon loot room, or rarely drop from enemies
 * Added AFK farming to all zones, consumes 1 AI Core per 15 min, this gets you exp, bitcon and items just like as if you have killed many enemies

#### Mobile
 * Added reward video to mobile version

### **2020/09/22 - v0.102**
 * Fixed minor crafting bug
 * Added bitcoin display on mobile, in inventory page and Me page
 * Show list of secret key in mobile inventory page

### **2020/09/21 - v0.99**
 * Include option to never ask for notification permission again
 * Added two more tiers of healing items
 * Added quick use item button on mobile battle UI
 * Fixed notification not showing correctly sometimes
 * Fixed notification displaying wrong message
 * Fixed issue with item max stack amount
 * Now item detail shows upgrades and base values
 * Fixed mobile issue

### **2020/09/20 - v0.96**
 * Added notification support

### **2020/09/18 - v0.94**
 * Mobile players now can modify item upgrades and see item durability
 * Armor and upgrades have a chance to drop with `Pocket` stat, increases inventory slot
 * Fixed mobile UI issue
 * Fixed mobile ios chat page keyboard layout issue
 * Fixed mobile 'My stall' page showing incorrect price issue

### **2020/09/17 - v0.90**
 * Now when item is sold in player market, seller player will recieve email from system as notification
 * Added (missing) repair function to the mobile Weaponsmith
#### NEW ITEM STATS
 * Stun Chance: Chance of you stunning your enemy when dealing damage,
    causing them to not able to respond to your attack
 * Evade: Chance of players dodging enemy's attack
 * Bargain: Influence on the price players buy and sell from stores and NPC
 * Added crit chance and crit damag back to upgrade modules

### **2020/09/16 - v0.87**
 * Miscellaneous mobile web UI enhancements
 * Online player list now shows platform
 * Mobile version is mostly complete

### **2020/09/14 - v0.85**
 * Added sort functionality to player market
 * Now shows `My Stall` at player market, so players can easily manage your stall
 * Removed unnecessary price tag in shop items
 * Added `Equipment Cache` category to market item filter
 * Now AFK actions repeat slider shows how long it will take in minutes or hours
 * Players can now close tab using middle mouse button
 * Dungeon enemy and loot now have slight level variation, with challenge dungeons having more variance.
 * Fixed bug where you can interact with npc or shops even you have left the area
 * Fix printer shows wrong names for weapons

### **2020/09/13 - v0.79**
 * Market UI update, you can now view all items, and sort by item type

### **2020/09/11 - v0.79**
* Fixed dungeon generates room but no way to get to the room issue (Fixes dungeon unable to complete issue)

### **2020/09/10 - v0.77**
 * Dungeon now shows if dungeon is completed as a variable
 * Time consuming action text update

### **2020/09/09 - v0.73**
#### Item update
 * Added a suite of healing items and their recipes (You can now heal your teammates in dungeon combat with those items)
 * Added ability to use area effect item, all item with area effect will apply the same effect to everyone in the same combat

#### Bug fix
 * Fixed Firefox chat terminal scroll issue
#### Quest Minor Update
 * Ro
 * Removed "join Dungeon" quest
 * Added several dungeon related quests
 * Updated UI to show instruction on hover
 * Only level 8 or above will receive dungeon quest

#### Misc
 * Now health items can only be used in the dungeon
 * Fixed UI related issue
 * Fixed shielded enemy damage calculation issue

### **2020/09/07 - v0.58**
#### dungeon update
 * Players can now send invite even when they are in dungeon battle
 * Dungeon boss exp and loot is increased, dungeon small enemy exp is reduced

#### misc
 * Players now cannot join the same dungeon instance again after players have quit or died in that dungeon instance
 * Removed lootbox captcha
 * Fixed doing afk actions while inventory is full will cause action unable to complete issue

### **2020/09/06 - v0.57**
 * High level player can now join low level challenge dungeon, but cannot interact with anything
 * Dungeon display is slightly changed
 * Chat termninal now resizable 🎉

### **2020/09/05 - v0.56**
 * Durability has been buffed, now durability decreases much slower

 #### Durability Update
 * Only "nearby enemy" will cost durability, dungeon enemy is not affected
 * Now all equipment has durability
 * Players can easily repair all equipments in Weaponsmith with a little BTC
 * Items that are broken will not contribute towards any stat

 #### Dungeon
 * All dungeons now drop ammo and ammo material
 * Massively increased challenge dungeon loot and exp
 * Increased challenge dungeon boss exp and BTC drops
 * Dungeon invite message now includes dungeon type

 #### Balancing
 * Big buff to item stats (only affects new items)
 * Nerfed higher level enemies

 #### Bot prevention update
 * Players can now pass lock box (captcha) even when inventory is full
 * Added level cap at nearby enemy area, high level player can't farm low level enemy (cap with player level and average item level)

 #### Misc
 * Added description for exp memory and tech scrap

### **2020/09/04 - v0.46**
 * Fixed crashing issue
 * Fixed average level calculation
 * (buff) Increased the crafted ammount of the higher level health items
 * (nerf) Decreased the amount of higher level ammo crafted

### **2020/09/03 - v0.38**
#### Realtime communication
 * Messages can be sent now when other player damages enemy and you are fighting
 * Notifications are now sent when items are sold in Player Market
 * Enemies auto-refresh when killed by other players
#### Misc
 * Updated markup style
 * Updated health display effect
 * Player's health is showed in realtime across all battles
 * Enemy optimization
 * Player's health is showed in realtime, in dungeons
 * Serverside optimizations

### **2020/09/03 - v0.36**
 * Player's health is showed in realtime, in dungeon
 * Serverside optimization

### **2020/09/02 - v0.35**
 * Fixed incorrect cache name

### **2020/09/01 - v0.28**
 * Fixed anti-matter ammo crafting issue
 * Clicking on a recipe will now craft it, instead of needing to hover and click craft
 * Fixed bug where some players gets no experience
 * Fixed scavenging drops on level 1 ~ 3 (location has no drop)
 * Added random loot box (captcha)
 * Updated recipe display

### **2020/08/31 - v0.23**
 * Now players can see other players highlighted in combat (in the dungeon)
 * BUGFIX: fixed players being stuck in dungeon issue
 * Fixed invalid travel link issue

### **2020/08/29 - v0.18**
 #### Minor Change
 * Selling item with only 1 amount no longer shows amount slider
 * Added more description for dungeons

 #### Player Shield
 * Added new stat player 'Shield', the shield will regenerate in dungeons

 #### Invenetory
 * Increased inventory size again to 32 slots

 #### Job System
 * Added Job Hub location, where most AFK jobs can be executed, to level up levels
 * 'Work in a Printing Factory', increases printing level (same as practice printing)
 * Apprentice in a body-mod clinic, increase medical science level
 * Removed Scavenging from job hub, but players can scavenge in each enemy zone,
 A higher level allows you to unlock better scavenging areas
 #### New levels
 * Medical Science: unlocks higher-level healing item crafting
 * Ammo Crafting: unlocks higher amount of ammo crafted
 * Scavenge: unlocks scavenging areas

 #### Added player market
 * New location near the hub, allowing players to open their stall and sell or buy items from each other

 #### New Items
 * Experience memory: when used increases exp
 * Medical tech parts: used to craft healing items
 * Ammunition tech parts: used to craft ammo

 #### Dungeon
 * Dungeons now checks for level requirement when joining one
 * Added a «Send Invite to Global Chat» button
 * Dungeons now have chance to drop Experience Memory
 * Challenge dungeons added to each zone, they are harder than their normal counterpart and contain a boss in the loot room
 * Escape from dungeon enemy is now chance-based, 'ESCAPE' stat will influence the chance
 * Player shields will be replenished after defeating an enemy, health will remain and needed to be healed with healing items

 #### Increase max level to 80
 * Added locations, dungeons, and enemy zones to level 80

 #### ESCAPE Stat
 * ESCAPE chance stat will increase the chance to escape from dungeon enemies
 * ESCAPE stat is available in upgrade modules, boots, and pants

 #### Procedural names
 * Adjusted how names in the game are generated

### **2020/08/20 - v0.16**
 * Increase inventory slot size

### **2020/08/20 - v0.14**
 * Massive increase of exp given by printing

### **2020/08/19 - v0.12**
 * Added small comments for dungeon usage
 * Fixed item isdue with printing upgrade modules

### **2020/08/18 - v0.11**

#### Bug Fixes
 * Fixed tech upgrade (?)
 * Fixed an generation issue with the dungeon loot room
 * Fixed issue with displaying online players
 * Show level on upgrade module
 * Inventory quick equip and unequip by left click
 * Fixed issue with tier drop
 * Fixed dungeon item issue
 * Now selling items give the correct amount of money
 * Selling item amount slider now maxed at the amount you have
 * Fix dungeon size

### **18/08/2020 - v0.05**

#### Dungeon Update
 * Added dungeons to each level segment in the map
 * Added convenient store in the main city
 * Added serval healing items, you can purchase them at a convenience store
 * In dungeons, the player's health will not automatically heal to max once out of combat
 * Players can collaborate on dungeons to clear it more quickly (dungeons are harder as you don't regenerate)
 * Higher-level regions now require `SecretKey` to access, `SecretKey`s need to crafted by combining 3 different `SecretKeyFragment`s which can be acquired at the end of each dungeon.
#### Item Update
 * Now you can compare any time with the one you are wearing
 * All equipment items now have a `Quality` attribute that indicates the quality of the item, it allows players to know if they got a "good roll" when printing.
#### Major Rebalance
All the stats, level exp growth rate, enemy health, and damage, are all re-adjusted and should be (hopefully) more balanced.
However, this also meant we had to do a soft-reset on all players (meaning you keep your account and names, but stats and items are reset)
#### Tutorial Markdowns
* Added basic tutorial markdown file, thanks to [Hildjj](https://github.com/hildjj) and [mr_moe](https://github.com/donburks)'s contribution!
* Markdown files open-sourced at our Github page so if you wanna add anything, feel free to create a pull request :)
#### Auto Update
The new client will show a notification when there is an update available
#### Update Note
This update note should automatically pop-up when the client is updated
#### New Quests
 * Join Dungeon: Join another player's dungeon
 * Deal Damage: Deal x amount of damage to enemy
#### Tons of Bug Fixes and Quality of Life Improvements
There are so many to list...
