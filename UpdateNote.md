
# Update Notes

**CyberCode Online** is currently onder very early and heavy development stage, which means many changes and new features are being added everyday! that also means many stats are being adjusted all the time. So, if you have any suggestion please feel free to [create a issue](https://github.com/DexterHuang/CyberCodeOnline/issues), if it is good it will very likely end up in this list ;)
### **2020/09/01 - v0.35**
 * fix incorrect cache name
 
### **2020/09/01 - v0.28**
 * fix anti-matter ammo crafting issue
 * now click on recipe will craft it, instead of need to hover and click craft
 * fix some player gets no exp bug
 * fix scavenge on level 1 ~ 3 loc has no drop
 * added random loot box (captcha)
 * updated recipe display
 
### **2020/08/31 - v0.23**
 * Now you can see in combat players in dungeon highlighted
 * BUG FIX: fix stuck in dungeon issue
 * fix invalid travel link issue
 
### **2020/08/29 - v0.18**
 #### Minor Change
 * selling item with only 1 amount no longer shows amount slider
 * add more description for dungeons
 
 #### Player Shield
 * added new stat player shield, shield will be regened in dungeon
 
 #### Invenetory
 * Increase inv size again to 32 slots
 
 #### Job System
 * Added Job Hub location, where most AFK jobs can be executed, to level up levels
 * work in printing factory, increase printing level (same as practice printing)
 * apprentice in body-mod clinic, increase medical science level 
 * Scavenge, not done in job hub, but you are able to scavange in each enemy zone, 
 higher level allows you to unlock better scavange area
 #### New levels
 * Medical Science, unlocks higher level healing item crafting
 * Ammo Crafting, unlocks higher amount of ammo crafted
 * Scavange, unlocks scavange area 
 
 #### Added player market
 * new location near hub, allowing player to open their stall and sell or buy item from each other
 
 #### New Items
 * Experience memory, when used increase exp
 * Medical tech parts, used to craft healing items
 * Ammunition tech parts, used to craft ammo
 
 #### Dungeon
 * Joining dungeon now checks for level requirement
 * Added send invite to global chat button
 * Dungeons now have chance to drop Experience Memory
 * Challenge dungeons are added to each zone, challenge dungeon are harder, and contains a boss at the loot room
 * Now escape from dungeon enemy is chance based, ESCAPE stat will influence the chance
 * Playe shields will be replenished after defeating an enemy, health will remain and need to be healed with healing items 
 
 #### Increase max level to 80
 * added locations, dungeons and enemy zones to level 80
 
 #### ESCAPE Stat
 * ESCAPE chance stat will increase chance chance to escap from dungeon enemy
 * escap stat is available in upgreade modules, boots and pants
 
 #### Procedural names
 * adjusted how names in the game is generate 
 
### **2020/08/20 - v0.16**
 * Increase inventory slot size
 
### **2020/08/20 - v0.14**
 * Massive increase printing exp given

### **2020/08/19 - v0.12**
 * added small comments for dungeon usage
 * fix printing upgrade module only result 1 item return issue

### **2020/08/18 - v0.11**

#### Bug Fixes
 * fix detech upgrade
 * fix dungeon loot room generation issue
 * Fix issue with displaying online players 
 * show level on upgrade module
 * inventory quick equip and unequip by left click
 * fix issue with tier drop
 * fix dungeon item issue
 * now selling items give correct amount of money
 * selling item amount slider now max at amount you have
 * fix dungeon size

### **18/08/2020 - v0.05**

#### Dungeon Update
 1. Added dungeons to each level segment in the map
 2. Added convenient store at main city
 3. Added serval healing item, you can purchase them at convenient store
 4. In dungeons, player's health will not automatically heal to max once out of combat
 5. Players can collaborate on dungeon to more easily defeat it (it is harder as you don't regen)
 6. Higher level regions now requires `SecretKey` to access, `SecretKeys` needs to crafted by combining 3 different `SecretKeyFragment` which can be acquired at the end of each dungeons.
#### Item Update
 1. Now you can compare any time with the one your equipped  
 2. All equipment item now have a `Quality` attribute, this indicate the quality of the item, this allows players to know if they have got a "Good Roll"
#### Major Rebalance
All the stats, level exp growth rate, enemy health and damage, are all re-adjusted, and should be (hopefully) more balanced.
however this also means we need to do a soft-reset on all players (meaning you keep your account and names, but stats and items are reset)
#### Tutorial Markdowns
1. Added basic tutorial markdown file, thanks to [Hildjj](https://github.com/hildjj) and [mr_moe](https://github.com/donburks)'s contribution! 
2. markdown files open sourced at our Github page so if you wanna add anything, feel free to create a pull request :)
#### Auto Update
New client will show notification for player to update when there is a update available
#### Update Note
This update note should automatically popup when client updated
#### New Quests
 1. Join Dungeon: Join other player's dungeon
 2. Deal Damage: deal x amount of damage to enemy
#### Tons of Bug Fixes and Quality of Life Improvements
there are so many...
