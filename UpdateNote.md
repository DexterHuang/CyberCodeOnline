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

Step-by-step [Guide](https://cybercode-online.fandom.com/wiki/GitHub_PR_Tutorial) on how to submit a PR on our GitHub.



## Updates
### 2023/0/01
- Daily reward reworked, with many player's suggestion, now it will reset accroding to UTC date (UTC 00:00 instead of your local time-zone), instead of +24 hours of your last claim. should provide more predictiable schedule
- Daily reward page UI slight adjustment

### 2023/03/30
- Free legendary container given by B3llial is changed to random equpments because people were abusing it with alt accounts.

### 2023/03/29
- Added Tiago's chracter B3llial as an NPC, you can receive free items everyday from him, visit him at Alleyway in Market area,
B3llial will be available during March and September every year

### 2023/03/21
- You can now hide NPC images by toggling "hide npc" option in setting menu

### 2023/03/12
- Attempt to ease the issue with occupation points not registering correctly when there is a massive amount of people doing occupation tasks and finishing at the same time.
Please let me know if this issue has been reduced.
This issue is very tricky to mitigate with the current server architecture for technical reasons.

### 2023/03/08
- `Medical tech cluster` crafting price is now lowered from 50,000 to 5,000, this may be changed in the future.
- Now amount selection input will show the number keypad on iOS
- Security bug fixes
- stability improvement
- misc bug fixes

### 2023/03/05
- Fixed issue with BGM not playing on iOS

### 2023/03/02
#### Sythwave Update
- Added Medical Tech Cluster, which can be crafted with 1000 medical tech parts. this can be used to efficiently store a large amount of medical tech parts
- Added special item "Cassette Tape", when used you will receive buffs that give you +20% damage and +20% defence, the only way to get this item is a daily free bundle in Arasaka Unit Exchange
- Item details UI redesigned, now it highlights the primary button and secondary buttons have been changed to a smaller size
- Red envelopes will not drop anymore. Yen's shop will close on 16/03/2023, please use up your gold coins, otherwise, you won't be able to use them.

### 2023/02/21
- Fixed combat log not showing correctly on the desktop version
- Reduced difficulty on 500+ level enemies, both health and damage
- Minor UI fixes

### 2023/02/20
- You can now optionally hide lower level are in translations, this option will show up when you are level 30+
- Area now open to level 800
- Fixed issue with epic upgrade module shows that as if it can install a module but it can't
- Fixed bug where DexterHuang is showing on the leaderboard, I am not supposed to be in the leaderboard 

### 2023/02/17
- Reduced printing price for Epic items on higher levels
- Now top gang banner will again show in stations

### 2023/02/15
- Quick select will now not select bag items when selecting equipment, eventho its a equipment, considering people wont try to sell it, I have made it not to select it.
- Added ability to select upgrade modules in quick select module

### 2023/02/13
- Added quick select feature, now enabled only at sell to NPC shop interface, you can now configure what equipment or cache to be auto selected so you can sell them more quickly

### 2023/02/08
- You can now open chat tab on the left panel of web version, allowing you to see both gang and global chat at same time.
- Server optimization
- minor bug fixes

### 2023/02/03
- Added many new enemy images (thanks to `ZeFat` for creating the images)
- Added new BGM for gang headquarters (thanks to `D3C1M4L` for composing the track)
- Increased `Factory reset shard` max price at market
- Enabled equipment translation for Italian language 
- Changed skip heart image back to heart
- Fixed issue with login page cropped on some device
- Fixed issue with loading splash screen jumpy on some device
- Increased minigame reward, now has chance to drop `Rare Locked Container`

### 2023/01/28
- Bug fixes and optmization
- SL-Data fortress breach will be disabled for a day due to prevent overriding 1-day buff by `Raira`

### 2023/01/26
- Updated molecular print npc image
- Updated lee's image
- Show better login failed message

### 2023/01/25
- Updated clibration stiation npc image

### 2023/01/21
- Added trading system (still disabled & under testing)

![image](https://user-images.githubusercontent.com/18545294/213868294-9829d201-0f44-4a4e-b7c7-8065fcf2e9a2.png)
- Updated tranlation code, now there is way to make more text to be translated, will add more to translation config soon
- Fixed a bug where expired notifications does not get deleted, causing player data getting too big with expired notification and related security issue with expired notification still usable to join gangs from long time ago

### 2023/01/16
- Fixed issue with in rare situation where when navigating through pages back and forth too fast will result in app page get stucked in a invalid state.
- Reduced sensitivity of swipe on inventory tab
- Updated Judy's graphic
- Backend optimization and bug fixes

### 2023/01/12
- Fixed crash bug when openining gang permission popup

### 2023/01/12
- Updated rendering core liberary and with it added many optimizations, game should render faster both on start up and while running
- Updated graphic for Violet, Jen and Liam 

### 2023/01/09
- Added bot detection algorithm, server will detect base on client's behaviour and other factors to choose to show minigames when attempt to start AFK task ONLY IF the system think is necessary, meaning most people will not encounter this (*I am still tuning the system, the goal is majority(imagine something like 99%) of the player will not even encounter this mechanism, and the rare situation where the algorithm determine the client might be possible bot, the minigame/captcha will show up sometimes, not too often.*) this algorithm is also partly integrated Google's service to detect bots, which is base on Machine Learning and other Google magic, so it will become more accurate the longer we use it. hopefully this will reduce the number of bot abusers/cheaters and maintain the fairness of the game :)

### 2023/01/06
- Attempt in preventing two skips being used at exactly same time at very rare situation, let me know if it can still happen. 
- Serverside optimization, some part of system should run faster now and has less strain on the system overall

### 2023/01/04
- Fixed issue with some phone scales the UI way too big, now will force rescale the UI to more resonable scale. you can now also manually change your UI scale in setting
- Various backend bug fixes

### 2023/01/02
- Correction of typo on the previous update note, red envelop will drop 1 to 200 coins (*In game drop rate was not changed, just the update note has a typo*) 
- Improved the way Red Envelops are opened
- Fixed some issue with display scaling on some devices

### 2023/01/01
- Lunar New Year Event Update
  - Added new NPC Luna, you can find her in Yen's corner store in Market district, she sell 3 new items, `Rice Cake`, `Sushi` and `Dumplings`, additionaly she also sells `Legendary Locked Container`, all of which is changable with `Gold Coins`
  - Added new item `Red Envelop`, you can open it from your inventory to receive randome amount of `Gold Coins` range from 1 to 200 coins
  - Added bundle system, and 4 bundles, one of which can be claimed for free once a day
  - Added two new chat frames
  - Fixed several security issues
  - fixed market slot upgrade issue

### 2022/12/19
- Combat UI update
- Added global buff display in dungeon, and updated the UI
- security update

### 2022/12/16
- Fixed recycler not returning to main screen after starting task in pc mode

### 2022/12/15
- Added warning on AFK screen if device time is incorrect, as incorrect device time can often cause many display issue
- Added popup for incorrect time
- some bug fixes
- Added new bot prevention mesure 

### 2022/12/14
- Potential fix for in very rare case global buff item used will not deploy buff, only shows announcement 

### 2022/12/13
- fixed long suggested issue where people can gain advantage by opening multiple windows for same account at same time. now if a new client is connected to the same account, old client one will be disconnected to ensure fairness.
- fixed on certain sitiation pc version afk start does not work properly
- fixed pc version afk start does not return to main screen automatiocally
- fixed rare cases for pin not render properly 

### 2022/12/12
- Security bug fixes

### 2022/12/11
- Fixed crash issue when clicking send email button while email input is empty in password reset page.
- Multiple minor bug fixes

### 2022/12/8
- Increased `Locked Legendary Container`'s max selling price on market by 10x
- Added prompt for when device time is incorrect (if your device time is incorrect the buffs will not display correctly, there AFK task will not automatically finish correctly)

### 2022/12/6
- Fixed display issue on Russian fonts
- Fixed some issue with suspended account

### 2022/11/30 
- Winter update
  - During the event enemies and AI Core afk will drop `Mystery Contaienr` (not tradable), you can open it directly or combine 10 of them to craft a `Locked Legendary Container`
  - Updated crafting and other AFK task UI to use the new full page style
  - You can now view and activate EXP buff when afk task grands EXP as reward

![image](https://user-images.githubusercontent.com/18545294/204484585-6eda5a51-6d52-4413-8799-6dd3d294f7ee.png)

  - Shangri-la background image and skip like has been changed to winter theme

![image](https://user-images.githubusercontent.com/18545294/204484661-c9a7b6c0-a61a-4079-81e9-73d0afaa889b.png)

  - updated many background images in the game, including Commercial area, market, black market, weapons smith, calibration, and train satation
  - Updated amount selection UI you can now easily change the selected amount by increment of 10, and also select the max and minimun with one click

![image](https://user-images.githubusercontent.com/18545294/204483723-39b1a60a-8b10-4bcd-9c09-1e3927c617fd.png)

  - With the festive sprit, you can now send cosmetic (none-prestige donation tier and emblems) gift to your friends. *(Please do not use this feature for trading, it is for gifting with no return from your friends expected)*
  - Added two new limited edition chat frame and emblems, will not be purchasable after end of event (you will be able to keep using it of course)
  - Fixed rare cases where global buff does not show properly on client
  - other bug fixes
  
### 2022/11/26
- Optimization on skip speed, hopefully it will speed it up abit
- Server-side optimization

### 2022/11/20
- improved bot detection algorithm
- Security update

### 2022/11/18
- Added buff status display to recycle and black market
- Now when selecting a single item for black market and recycle, the game will prompt for confirmation before starting the task, avoiding mis-clicks
- Security update 

### 2022/11/16
- Fixed issue with using VPN not updating the client with status effect (a visual bug)
- Added Arial as a default fallback font for non-english langauges

### 2022/11/14 v0.780
- Added romania chat
- improved bot detection on backend
- sevrer optimization

### 2022/11/03 v0.780
- Fixed Halloween emblem not showing on cosmetic page after halloween even ended, now you can see it still if you own the emblem
- Fixed slder input not easy to click
- Added polish chat channel

### 2022/11/01 v0.780
- Added `Reward Booster Shard` buff for `AI Auto Farm` and `Scavange`, when buff is activated and opted in when starting the task, the rewards will double while the cost/duration will increase 4x. should be useful to do when going away for long time. this item will drop rarely in `Rare Locked container` and purchasable from NPC

*There might be balance change to this item if it is too OP, please use it immediatly after purchase*
- Updated AFK task start UI
- Level 500 ~ 600 is now enabled
- Added two new enemy images (thanks to Vali for the art ❤️)
- Added new CyberKitty chat frame (thanks to Volts for suggestion and idea)
- Added banner when chat exploit is active, so that newbies will understand whats going on
- love exploit words are now translatable :)

### 2022/10/28 v0.780
- Updated donation cosmetic UI to make it less confussing
- Updated alt detection algorithm

### 2022/10/26 v0.780
- Now people you blocked will not be able to send you gang invite
- Fixed some UI issue on craft page
- Fixed discord chat log search problem 

### 2022/10/24 v0.780
- Security update
- server-side bug fixes

### 2022/10/19 v0.780
- backend optimization

### 2022/10/16 v0.780
- Fix iOS overscroll weird behaviour on multiple page
- Fixed iOS mention popup placement issue
- Adjusted chat header UI

### 2022/10/15 v0.780
- Fixed iOS where is app is in background for long time and when resumed, dungeon and buff status will not sync up
- Changed dungeon keycode to use numebr keyboard by default

### 2022/10/11 v0.780
- Halloween Event:
  - Now enemies and AI Core auto farm drops `Jack o' Lanttern`, you can use these to craft `Locked Legendary Container`
  
  ![image](https://user-images.githubusercontent.com/18545294/195058830-f460e4c8-69b4-4543-916f-0c0aac79d00c.png)

  ![image](https://user-images.githubusercontent.com/18545294/195058984-6b79f9d0-295a-4f17-8ff9-50feb3279eec.png)

  - Updated pormotional popup screen to support multiple pannel and translation
  - Added time Halloween time limited cyber-bat donation tier and a Spooky smile enmblem (unobtainable when event is over)

### 2022/10/07 v0.780
- Removed auto default selection for unlock container page, to reduce confusions on how to select container to unlock

### 2022/10/02 v0.780
- Updated Item selection menu UI when there is no available item to choose from
- Added dedicated unlock `locked container` UI

![image](https://user-images.githubusercontent.com/18545294/193444573-24ae96c4-6c74-45b2-a13b-6f0f7031d6e6.png)

- You may now click `Unlock` in locked container detail screen to go to unlock container UI
![image](https://user-images.githubusercontent.com/18545294/193444654-3123ec82-6388-4f84-8432-692c59751fc6.png)

### 2022/09/30 v0.780
- Added seperated chat log for spanish channel
- Added more translatable text to translation files
- Fixed translation issue

### 2022/09/26 v0.780
- You can now browse your stall while afk, however you cannot add or remove the item while AFKing. (player suggestion)

![image](https://user-images.githubusercontent.com/18545294/192716779-aafe7489-0651-4018-84d6-66346536fb6e.png)

- Added player submitted emblemed I missed from last patch
- Added foundation code for event needed function for future use

### 2022/09/26 v0.780
- Server optimization
- Chat related bug fixes
- Added some player submmited emblems 
- Typo fix

### 2022/09/19 v0.780
- Market security related fix
- Now only tradable item will show up in the selection list for market stall
- Desktop version can now have switch the chat pannel bewteen mail/global/mail
- Fixed broken item texture when the game starts in deskop
- Adjusted chat channel settings
- Minor UI improvement for desktop

### 2022/09/16 v0.780
- (from player suggestion) Starting new AI core farm task will default at max amount of repeat you can perform
- Updated Tutorial menu page, now with cleaner button and icons
- Updated Tutorial markdown page, and fixed some display issue.
- Updated printing npc UI
- Added more newbie friendly tip box on molecular printing page, uppon clicked will link to tutorial page
- Added tip box in clibation page before core was inserted, uppon clicked will link to tutorial page
- Reduced section title size a little
- Added graffiti and bunny prestige donation tier (Thanks to Krolik for design suggestion and happy birthday :) )

![image](https://user-images.githubusercontent.com/18545294/190539431-7112e0d7-4741-4c42-931a-37424d4f312f.png)
![image](https://user-images.githubusercontent.com/18545294/190539403-86d8a35b-c9f7-44e1-abf9-d4e1e9288dd4.png)


### 2022/09/13 v0.780
- You can now click `Print Cache` in cache item details own by you. it will bring you directly to NPC and highlight the coresponding cache to print.
- Added translation for gang creation page 

### 2022/09/03 v0.780
- Updated City center, train station and bank's background image to better ones
- Updated location background display UI

### 2022/08/29 v0.780
- Added report menue, you may report rule breaking player by clicking on the message or report button at the player's profile 

**Only use if necessary and only once per player. If you play/spam/missuse with the system, you will be muted for spam**

### 2022/08/26 v0.780
- Added some preventive mesure to reduce the chance of unwanted deploying of global buff when another player has alraedy deployed one:
  - When deploying a buff with an active buff and the buff is has more than 19 minutes remaining, the deployment will fail forcefully, you may deploy again after 1 minute if thats what you wish (might still have extremly rare chance of two person clicked at the exact same millisecond result in server unable to prevent it)
  - When deploying a buff with an active buff and the buff has more than half of the time remaining, a popup confirmation will popup show up. (this only applies to buff that has duration of 20 minutes and for `Frontal Cortex Optimization Transmitter` and `Rare Synaptic Acceleration Transmitter` only when buff is fully stacked, and will not work if you are desync from server due to network connection issue)

### 2022/08/24 v0.780
- Fixed Thai chat channel typo in the name

### 2022/08/23 v0.780
- Added Thai chat channel

### 2022/08/18 v0.780
- Merged latest english procedural-name.json list from githhub into the game
- Updated black market art, sorry @mikazakhaev if its not 100% true to your original design haha  
- Server-side bug fixes

### 2022/08/17 v0.780
- Prevent the annoying suggestion/auto complete from showing up on PC browser when typing on chat

### 2022/08/10 v0.780
- Fixed prestigue nano medic drone translation not showing in translation
- Showing numeric keyboard when doing captcha

### 2022/08/09 v0.780
- Updated tran station and market background image to something original
- Optimizations and bug fixes

### 2022/08/06 v0.780
- Fixed issue with mail chat
- Fixed issue with reverse ai core cluster crafting could result in item exceeding max stack (system will in some condition reset items with amount more than stack to it is stack cap, meaning if you somehow find a exploit to allow exceeding max stack, please do not risk system resetting your item amount, report the bug to me <3)

### 2022/08/05 v0.780
- Fixed bug where when viewing other player's item will result in app freeze 
- Fixed issue with item details page where when item is scrapped the page stays as empty, now it automatically exits the page

### 2022/08/04 v0.780
- Chat server internal update, should help with stability

### 2022/08/03 v0.780
- Updated server and client side dependency liberaries, might improve client side performance, please let me know if new bug is introduced due to this update
- Improved range select input user friendliness

### 2022/08/02 v0.780
- Improved range select input user friendliness (delayed due to deployment issue)
