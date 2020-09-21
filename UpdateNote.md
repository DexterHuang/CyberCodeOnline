
# Update Notes

**CyberCode Online** is currently under an early and heavy development stage, which means many changes and new features are being added every day! That also means many stats are being adjusted all the time. So, if you have anything to suggest, feel free to [create an issue](https://github.com/DexterHuang/CyberCodeOnline/issues), if it is good it will very likely end up in this list ;)

## Contributors: 
 * [Kimi Leta](https://github.com/kimileta)
 * [mr_moe](https://github.com/donburks)
 * [hildjj](https://github.com/hildjj)
 * [RubenVerg](https://github.com/rubenverg) 
 * [AdmiralDiemos](https://github.com/danofsatx)
 * [Archibaald](https://github.com/Archibaald-dev) 
 
If you would like to help to maintain CyberCode Online, please feel free to submit a PR at [our GitHub repo](https://github.com/DexterHuang/CyberCodeOnline).
#### Need help: 
 * Tips.md
 * Tutorial.md
 * Or anything you see we should add into the repo

*remember to add your name in this doc when you create a PR : )*

## Recent Updates:
### **2020/09/21 - v0.99**
 * Added quick use item button on mobile battle UI
 * fix notification not showing correctly sometimes
 * fix notification displaying wrong message
 * Fix issue with item max stack amount
 * Now item detail shows upgrades and base values
 * Fix mobile issue
 
### **2020/09/20 - v0.96**
 * Added notification support
 
### **2020/09/18 - v0.94**
 * Mobile now can modify item upgrades and see item durability
 * Armor and upgrades have chance to drop with `Pocket` stat, increases inventory slot
 * Fix mobile UI issue
 * Fixed mobile ios chat page keyboard layout issue
 * Fix mobile my stall page showing incorrect price issue
 
### **2020/09/17 - v0.90**
 * Now when item is sold in player market, seller player will recieve email from system as notification 
 * Added (missing) repair function to the mobile weaponsmith
#### NEW ITEM STATS
 * Stun Chance: Chance of you stunning your enemy when dealing damage, 
    causing them not able to respond to your attack
 * Evade: Chance of you dodging enemy's attack
 * Bargain: Influence on the price you buy and sell from stores and npc
 * Added crit chance and crit damag back to upgrade modules
 
### **2020/09/16 - v0.87**
 * Miscellaneous mobile web UI enhancements
 * Online player list now shows platform
 * Mobile version is mostly complete

### **2020/09/14 - v0.85**
 * Added sort functionality to player market
 * Now shows `My Stall` at player market, so you can easily manage your stall
 * remove unnecessary price tag in shop items
 * Added `Equipment Cache` category to market item filter
 * Now AFK actions repeat slider shows how long it will take in minutes or hours
 * You can now close tab using middle mouse button
 * Dungeon enemy and loot now have slight level variation, with challenge dungeons having more variance.
 * Fixed bug where you can interact with npc or shops even you have left the area
 * Fix printer shows wrong names for weapons

### **2020/09/13 - v0.79**
 * Market UI update, you can now view all items, and sort by item type
 
### **2020/09/11 - v0.79**
* Fix dungeon generates room but no way to get to the room issue (Fixes dungeon unable to complete issue)

### **2020/09/10 - v0.77**
 * Dungeon now shows if dungeon is completed as a variable
 * Time consuming action text update

### **2020/09/09 - v0.73**
#### Item update
 * Added a suite of healing items and their recipes (You can now heal your teammates in dungeon combat with those items)
 * Added ability to use area effect item, all item with area effect will apply the same effect to everyone in the same combat
 
#### Bug fix
 * Fixed firefox chat terminal scroll issue
#### Quest Minor Update
 * remove "join Dungeon" quest
 * added several dungeon related quests
 * updated UI to show instruction on hover
 * only level 8 or above will receive dungeon quest
 
#### Misc
 * Now health items can only be used in dungeon
 * Fix UI related issue
 * Fix shielded enemy damage calculation issue
 
### **2020/09/07 - v0.58**
#### dungeon update
 * you can now send invite even when you are in dungeon battle
 * dungeon boss exp and loot is increased, dungeon small enemy exp is reduced

#### misc
 * You now cannot join the same dungeon instance again after you have quit or died in that dungeon instance
 * Removed lootbox captcha
 * fix doing afk actions while inventory is full will cause action unable to complete issue

### **2020/09/06 - v0.57**
 * High level player can now join low level challenge dungeon, but cannot interact with anything
 * Dungeon display is slightly changed
 * chat termninal now resizable 🎉
 
### **2020/09/05 - v0.56**
 * durability has been buffed, now durability decreases much slower
 
 #### Durability Update
 * Only "nearby enemy" will cost durability, dungeon enemy is not affected
 * Now all equipment has durability
 * you can easily repaire all equipments in Weapon Smith with a little btc
 * items that are broken will not contribute any stat
 
 #### Dungeon
 * all dungeons now drop ammo and ammo material
 * massively increase challenge dungeon loot and exp
 * increase challenge dungeon boss exp and btc
 * dungeon invite message now include dungeon type
 
 #### Balancing
 * Big buff to item stats (only affects new items)
 * Nerf higher level enemies
 
 #### Bot prevention update
 * You can now pass lock box (captcha) even when your inv is full
 * Added level cap at nearby enemy area, high level player cant use low level enemy to farm (cap with player level and average item level) 
 
 #### Misc
 * added description for exp memory and tech scrap

### **2020/09/04 - v0.46**
 * fix crashing issue
 * fix average level calculation
 * (buff) increase higher level health item crafted amount
 * (nerf) decrease higher level ammo crafted amount optimization

### **2020/09/03 - v0.38**
#### Realtime communication
 * messages are now sent when other player damages enemy you are also fighting
 * notifications are now sent when items are sold in player markets
 * now when enemies are killed by other players, they are auto-refreshed
#### Misc
 * updated markup style
 * updated health display effect
 * show realtime player health in all battles
 * enemy optimization
 * show realtime player health in dungeons
 * serverside optimizations

### **2020/09/03 - v0.36**
 * show realtime player health in dungeon
 * serverside optimization

### **2020/09/02 - v0.35**
 * fix incorrect cache name
 
### **2020/09/01 - v0.28**
 * fix anti-matter ammo crafting issue
 * now clicking on a recipe will craft it, instead of needing to hover and click craft
 * fix some player gets no exp bug
 * fix scavenging on level 1 ~ 3 loc has no drop
 * added random loot box (captcha)
 * updated recipe display
 
### **2020/08/31 - v0.23**
 * Now you can see in combat players in dungeon highlighted
 * BUGFIX: fix stuck in dungeon issue
 * fix invalid travel link issue
 
### **2020/08/29 - v0.18**
 #### Minor Change
 * selling item with only 1 amount no longer shows amount slider
 * add more description for dungeons
 
 #### Player Shield
 * added new stat player shield, the shield will regenerate in dungeons
 
 #### Invenetory
 * increased inv size again to 32 slots
 
 #### Job System
 * added Job Hub location, where most AFK jobs can be executed, to level up levels
 * work in a printing factory, increase printing level (same as practice printing)
 * apprentice in a body-mod clinic, increase medical science level 
 * scavenging, not done in job hub, but you can scavenge in each enemy zone, 
 a higher level allows you to unlock better scavenging areas
 #### New levels
 * Medical Science: unlocks higher-level healing item crafting
 * Ammo Crafting: unlocks higher amount of ammo crafted
 * Scavenge: unlocks scavenging areas
 
 #### Added player market
 * new location near the hub, allowing players to open their stall and sell or buy items from each other
 
 #### New Items
 * Experience memory: when used increases exp
 * Medical tech parts: used to craft healing items
 * Ammunition tech parts: used to craft ammo
 
 #### Dungeon
 * joining dungeon now checks for level requirement
 * added a «Send Invite to Global Chat» button
 * dungeons now have chance to drop Experience Memory
 * challenge dungeons added to each zone, they are harder than their normal counterpart and contain a boss in the loot room
 * now escape from dungeon enemy is chance-based, ESCAPE stat will influence the chance
 * player shields will be replenished after defeating an enemy, health will remain and need to be healed with healing items 
 
 #### Increase max level to 80
 * added locations, dungeons, and enemy zones to level 80
 
 #### ESCAPE Stat
 * ESCAPE chance stat will increase the chance to escape from dungeon enemies
 * ESCAPE stat is available in upgrade modules, boots, and pants
 
 #### Procedural names
 * adjusted how names in the game are generated
 
### **2020/08/20 - v0.16**
 * increase inventory slot size
 
### **2020/08/20 - v0.14**
 * massive increase of exp given by printing

### **2020/08/19 - v0.12**
 * added small comments for dungeon usage
 * fix printing upgrade module only results in an item issue

### **2020/08/18 - v0.11**

#### Bug Fixes
 * fix tech upgrade (?)
 * fix dungeon loot room generation issue
 * fix issue with displaying online players 
 * show level on upgrade module
 * inventory quick equip and unequip by left click
 * fix issue with tier drop
 * fix dungeon item issue
 * now selling items give the correct amount of money
 * selling item amount slider now maxed at the amount you have
 * fix dungeon size

### **18/08/2020 - v0.05**

#### Dungeon Update
 * added dungeons to each level segment in the map
 * added convenient store in the main city
 * added serval healing items, you can purchase them at a convenience store
 * in dungeons, the player's health will not automatically heal to max once out of combat
 * players can collaborate on dungeons to more easily defeat it (they're harder as you don't regen)
 * higher-level regions now require `SecretKey` to access, `SecretKey`s need to crafted by combining 3 different `SecretKeyFragment`s which can be acquired at the end of each dungeon.
#### Item Update
 * Now you can compare any time with the one you are wearing
 * All equipment items now have a `Quality` attribute that indicates the quality of the item, it allows players to know if they got a "good roll" when printing.
#### Major Rebalance
All the stats, level exp growth rate, enemy health, and damage, are all re-adjusted and should be (hopefully) more balanced.
However, this also meant we had to do a soft-reset on all players (meaning you keep your account and names, but stats and items are reset)
#### Tutorial Markdowns
* Added basic tutorial markdown file, thanks to [Hildjj](https://github.com/hildjj) and [mr_moe](https://github.com/donburks)'s contribution! 
* markdown files open-sourced at our Github page so if you wanna add anything, feel free to create a pull request :)
#### Auto Update
The new client will show a notification when there is an update available
#### Update Note
This update note should automatically popup when the client is updated
#### New Quests
 * Join Dungeon: Join another player's dungeon
 * Deal Damage: Deal x amount of damage to enemy
#### Tons of Bug Fixes and Quality of Life Improvements
there are so many to list...
