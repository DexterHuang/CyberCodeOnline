
# Update Notes

**CyberCode Online** is currently onder very early and heavy development stage, which means many changes and new features are being added everyday! that also means many stats are being adjusted all the time. So, if you have any suggestion please feel free to [create a issue](https://github.com/DexterHuang/CyberCodeOnline/issues), if it is good it will very likely end up in this list ;)

### **18/08/2020 - v0.07**

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
1. Added basic tutorial markdown file, thanks to [Hildjj](https://github.com/hildjj)'s contribution! 
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
