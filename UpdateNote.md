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
### 2022/10/11 v0.780
- Halloween Event:
  - Now enemies and AI Core auto farm drops `Jack o' Lanttern`, you can use these to craft `Locked Legendary Container`
  
  ![image](https://user-images.githubusercontent.com/18545294/195058830-f460e4c8-69b4-4543-916f-0c0aac79d00c.png)

  ![image](https://user-images.githubusercontent.com/18545294/195058984-6b79f9d0-295a-4f17-8ff9-50feb3279eec.png)

  - Updated pormotional popup screen to support multiple pannel
  - Added time Halloween time limited cyber-bat donation tier and a Spooky smile enmblem

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
  - When deploying a buff with an active buff and the buff is has more then 19 minutes remaining, the deployment will fail forcefully, you may deploy again after 1 minute if thats what you wish (might still have extremly rare chance of two person clicked at the exact same millisecond result in server unable to prevent it)
  - When deploying a buff with an active buff and the buff has more then half of the time remaining, a popup confirmation will popup show up. (this only applies to buff that has duration of 20 minutes and for `Frontal Cortex Optimization Transmitter` and `Rare Synaptic Acceleration Transmitter` only when buff is fully stacked, and will not work if you are desync from server due to network connection issue)

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
- Fixed issue with reverse ai core cluster crafting could result in item exceeding max stack (system will in some condition reset items with amount more then stack to it is stack cap, meaning if you somehow find a exploit to allow exceeding max stack, please do not risk system resetting your item amount, report the bug to me <3)

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
