# Update Notes

If you found a bug please post a bug report in our [Discord server](https://discord.gg/JREx8xz) Bug report channel.

Did you like the game and fancy helping the game? you can:

-   Leave a 5-star review on the store, this will help others see the game more
-   Report bugs or suggestions for improvement to our Discord, the developer checks Discord frequently (due to time limitations I can't really check Reddit or other places)
-   Deploy some global buff or skips for the community
-   Contribute to our WIKI, Lores and other configs on our [GitHub](https://github.com/DexterHuang/CyberCodeOnline)

### Contributable files:

-   contribution/words.json - Random Words
-   contribution/dungeon/layout/structure-mask.json - Dungeon Layouts
-   contribution/mobile/{lang}/tips.md - Tips for Mobile
-   contribution/mobile/{lang}/tutorial/\*.md - Tutorial
-   contribution/mobile/{lang}/procedural-names - equipment names
-   contribution/mobile/{lang}/item/lore - item lore
-   contribution/mobile/{lang}/scenario/\*\* - drop lore
-   contribution/mobile/{lang}/dungeon-lore/\*\* - dungeon lore
-   tips.txt - Tips for desktop
-   tutorial/\* - Desktop Tutorial
-   contribution/lang/ - Localizations

**Remember to add your name to the ['Credits.md'](https://github.com/DexterHuang/CyberCodeOnline/blob/master/Credits.md) doc when you create a PR**

If you would like to help maintain CyberCode Online, please feel free to submit a PR at [our GitHub repo](https://github.com/DexterHuang/CyberCodeOnline).

Step-by-step [Guide](https://cybercode-online.fandom.com/wiki/GitHub_PR_Tutorial) on how to submit a PR on our GitHub.

## Updates

### 0.1830

-   Fixed issue with chat message popup on non-English UI
-   Fixed problem with Posh Exploit leaking to gang chat

### 0.1829

-   Improved the look and feel of the new Netrunner cosmetic player detail page

![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/62f1ac7d-94e1-4a94-91a3-b10935032a98)

-   Improved player chat message model UI (the pop when you click on the player's message), now shows the player's title colour, gang tag and emblem
-   Fixed issue with playing with other player's pet.

### 0.1828

-   Fixed issue with player name tag display
-   Added Posh Chat Exploit, which transforms everyone into a fine British gentleman for 10 minutes
-   Added new frame

### 0.1827

-   Fixed issue with being able to purchase items when AFK task is running
-   Fixed issue with unable to play with other player's pet

### 0.1826

-   Now apartment market shows how many pet slots each type of apartment has
-   Fix display issue related to the latest iOS system update

### 0.1825

-   Gang leaderboard is graphic is overhauled, now it shows the gang's image motto and member count.
-   Now `Jin` will sell `Volunteer Service Medallion`, this is to ensure that people with very bad luck can also obtain the item by exchanging it with `Paw Credit` which is obtainable from the `Pet Shelter Volunteer Shift AFK` activity.
-   You can now recycle `Volunteer Service Medallion` using `Recycler` to get `Paw Credit`

**Note: Since this feature is still in very beta stage, the specific stats can change base on player feedback and balance needs**

-   Fixed issue with viewing other player's pet

### 0.1824

### Pet & Apartment System (Initial Beta, please report any bugs or suggestions to the Discord server)

-   You can adopt pets, The pet system is aimed towards a **Role-Play** element instead of adding combat/stat-related mechanics to avoid adding a traditional "Gacha" system which understandably many people want to avoid; instead, pets will adopt a more "Tamagotchi" style of gameplay (Tamagotchi is a type of simulation game where you take care of a virtual pet. very popular in the 90s), you will need to feed, play, and take care of your pet when they are sick to keep them happy and healthy.
-   You will be able to check out other players' pets and you can tag your pet by mentioning them in chat to show it to other players, similar to how you mention other players. in the initial version of the pet system, you can play with other players' pets, but you cannot feed them or clean them, that will be the owner's responsibility.
-   Taking care of your pet: Pets will have a hunger, happiness and cleanness meter, and a hidden healthiness meter, when the pet is too hungry, unhappy or dirty, it will correspondingly affect their mood, if you continue to neglect your pet, it will get sick and eventually die, you can take care of your pet by feeding them, playing with them, cleaning them and giving them medicine when they are sick.
-   Obtaining pets: continuing the unique theme of CyberCode Online emphasis on no pay-to-win, the items required to redeem pets will be obtainable through `Pet Shelter Volunteer Shift AFK` activity and Global Buff similar to how Calibration currently works. by doing this task there will be a chance of receiving:
    -   `Paw Credit`, You can use it to redeem pet-related items from the pet shelter
    -   `Volunteer Service Medallion`, you combine 10 of these to get one `Sanctuary Adoption Pass` which you can use to adopt a pet when `Adoption Buff` is activated by any player.
-   Pet types: it is planned to have two types of pets at the initial launch; cats and dogs, each type will have hundreds of different images based on breeds and colors, and the image of the pets will be determined randomly when you adopt the pet(more types of pets are expected to be added in the future, suggestions are welcomed). you can also randomly change the cosmetic image of your pet without changing the pet's data such as type, hunger, happiness, name and age by using Unit.
-   what happens if your pet dies: if unfortunately your pet dies, you can adopt a new pet or you can choose to activate `Revival Buff` Global Buff to revive your pet and anyone who chooses to revive their pet during the buff duration. there will be cooldowns for reviving pets to ensure that one revival buff can only revive one pet per player.
-   Apartments: You can rent apartments with BTC, and the rental fee is weekly based, if you don't have enough BTC in your account when the rental fee is due, you will be evicted from the apartment. there will be different tiers of apartments, each tier allows you to have bigger 'spaces' for your pet. currently apartment serves as a place that allows you to own pets (you must have an apartment to own a pet) and for future updates.
-   Apartment restrictions: you can only have one apartment per account, and you must be at least level 100, as renting an apartment requires you to have some amount of excess BTC, this is to ensure that new players won't spend their hard-earned BTC on renting an apartment and then regret it later. at the same time encourages players to level up and serve as a progression milestone.
-   Apartment on market: every day there will be random apartments available for rent on the market, with different appearances, addresses and price

### Other Changes:

-   improve on auto-translation system, should produce better initial translation results
-   Fixed display issue on emblems

0.1823

-   Added Spring Cherry Blossom event; all skips get 5% off during the event period, and added an exclusive sakura chat frame and emblem
-   Minor UI updates
-   Performance optimization on the server side

0.1822

### Lunar New Year Event:

-   During the event (Feb 1st to Feb 29th), enemies, the AFK bot farm will have a chance to drop a `Red Envelope` which you can open to get a random amount of `Gold Coin`
-   You can use `Gold Coin` to purchase various items from `Yen's store`
-   During the event period, you will receive various amounts of free `Rare Synaptic Acceleration Transmitter` when you top up Units based on the package selected. Added new Skipper-exclusive cosmetics
-   Added new CyberDragon cosmetic
-   Updated Luna's(Yen's Store) graphic
-   Updated Zero's(Bald dude in the black market) graphic
-   Updated market street background image

0.1821

-   Fixed issue with being able to start bulk crafting while being idle
-   Fixed being able to tag, send gift or DM system placeholder account.

0.1820

-   Fixed issue with Christmas event item still dropping after the event ended
-   Now auto-select feature on the selling to NPC page will not select locked items
-   Added indication on dungeon lobby list to show if the dungeon is password-protected
-   ASU is changed to untradable as announced previously

## Notice

With player feedback and discussion with players, we have postponed the change to `Autonomous Storage Unit`'s tradable status to untradable, instead, it is now tradable again.
and will be updated to not tradable on 01/01/2024 giving everyone plenty of time to arrange their ASU.

經過仔細聽取玩家的反饋和與玩家討論後, `Autonomous Storage Unit`(ASU) 已先改回可交易, 讓各位有時間安排 ASU 的處理方式,
ASU 會在明年 2024 年 1 月 1 號才更新為不可交易 給予大家充足的時間

Again, thank you for all the valuable feedback :)

再次感謝大家的寶貴意見與討論:)

0.1819

-   Updated some images now on the equipment upgrade module selection menu, it should not show you modules you cannot use due to insufficient level and only show those you can use on the item.
-   Updated leaderboard UI to include numbering so it is easier to know which rank you are in
-   Fixed issue with translated text showing incorrectly in notifications and discord log
-   Fixed EXP calculation on AFK exp boost, there was a bug where in some situations the bonus EXP was not calculated correctly
-   Slight adjustment on the system message UI

0.1818

-   Christmas Event starts today, during December, enemies, scavenge and AFK farm bots will have a chance to drop ` Frosty Container`` and  `Christmas Pudding`
-   You can open Frosty Container to get various rewards, including the chance of EPIC Cache and Tech Scrap Cluster
-   You can consume Christmas Pudding to get a 20 minutes buff that gives you a +20% EXP gain from AFK tasks
-   Added Christmas-themed cosmetics, including emblems and chat frames.
-   Skip announcement now is translatable and a button to send street cred to the skipper is added.
-   Added a new leaderboard for crafting epic equipment and ASU, all the counting will start from this update for fairness because there was no previous tracking for this.
-   Updated the crafted epic equipment announcement to include item data, you will be able to click on the item name to view the item's details.
-   Fixed issue with time desync on some devices, preventing AFK task time from showing correctly.
-   Fixed when client time is incorrect, chat message can be sent from the client can show in an incorrect place (stuck at the bottom or show up in the middle of message less instead of the bottom)

0.1817

-   Updated rules to include examples for "no IRL trading", to better clarify that trading with virtual currencies such as Google Play Cards or other points from other services are examples of indirect trading IRL money. please see the actual rules for the details.
-   Optimized SLANC's backend logic
-   Now players who are muted or suspended cannot be tagged, to discourage the muted individuals motivated by attention from getting even more attention.
-   Other various chat server fixes and optimizations

0.1816

-   Market place item, purchase item UI has been reworked to provide a more streamlined experience, no longer to fill up multiple popups and instead all in one page.

![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/20401be3-12b0-4dc2-aecc-1a33b0954c99)
![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/a3f1b601-3fca-4bdf-ac88-eb1408c12d8d)

-   Rewrite of the captcha image generation system, now it is much more efficient faster, and more secure.
-   Fixed server-side issues

0.1815

-   Updated leaderboard UI, making it clear which boards are game-play based which are contribution-based.
-   Optimized leaderboard loading for all boards, allowing us to show 32 players per board instead of 16 previously for all boards

0.1814

-   Added skip point to the leaderboard
-   Optimized leaderboard loading time, and changed the leaderboard to refresh every hour, to increase efficiency and increase speed
-   Added translation support to leaderboard UI

0.1813

-   With many discussions and feedback from the community, the skip count statistic will be a point system where:
    -   Every 15-minute skip is 1 point so that you can skip longer periods while still getting equivalent points.
    -   Above 150 minutes is fixed to 10 points to encourage multiple skips rather than one huge skip to maximize the benefit for most players
-   Additionally added skip discount, during this event, all skip above 105 minutes will receive 5% off until the end of the event.\
-   UI update on AFK screen

0.1812

-   Added Thanksgiving event, during the event period, Scavenging and AFK farm bot will drop `Roasted Turkey` rarely.
    -   Consuming Roasted Turkey gives your `AFK EXP Boost` effect for 20 minutes, during this status effect, AFK tasks completed will gain +20% EXP. Please note, the bonus EXP check is when you finish your AFK task not when the task started; so in order to receive the bonus EXP, please ensure that the buff is active when your AFK task finishes.
-   Added skip count statistic to player profile, you can now see your and others' total skip count. **Because this is a new statistic previously not tracked, everyone's count will start from this update**
-   Added skip-exclusive cosmetics, including emblems and chat frames, these can only be obtained by reaching specific skip counts.
-   Various bug fixes
-   Server stability fix
