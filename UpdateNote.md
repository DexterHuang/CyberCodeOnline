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

### 0.1844

-  Added dungeon chat channel, you can communicate with your dungeon party in that channel without using a gang channel that may disturb others. you open the chat UI by clicking the preview. All share this channel, which can be viewed similarly to other channels on the main chat interface.

![image](https://github.com/user-attachments/assets/2a598a00-32a9-4e4a-a7f0-6b002387fa10)


### 0.1843

-  You can now see gang dungeons created by people from your gang in the dungeon list (access it from the phone menu -> dungeon list)
-  Added dungeon lobby list at create dungeon UI allowing easier access to join dungeons

![image](https://github.com/user-attachments/assets/fa585ee5-1ef4-4754-a0c7-5ba27461fe0e)


-  Updated main page NPC and travel UI

![image](https://github.com/user-attachments/assets/7a2495ae-5e6b-405e-bfe0-01a31c9cae64)
-  Fix the issue with chat frame rendering
-  Added update popup when starting the game, if the update note is updated, a popup of the update note will automatically show up (Can be disabled on the settings page)
-  Changed behaviour on event popup, popup will show up again after 4 days to avoid the event list not being accessible after dismissal, this behaviour can be disabled in the settings page, which if enabled event popup will show up only when there is an event update if you have checked the dismissal checkbox 

### 0.1842

-  Fixed issue with some notification not receiving randomly
-  Updated image for weapons smith and lee

### 0.1841
-   Updated Global party and Cali Train banner UI, now shows player tag and how many percentages the player has sponsored

![image](https://github.com/user-attachments/assets/0e0b6119-2568-42da-b6c6-04258f706cbe)

-   Added Vault shortcut in AFK screen, allowing you to view your vault content, however, you cannot withdraw or put the item.

![image](https://github.com/user-attachments/assets/7f0f2a00-e5e6-4804-97d9-2f6ca550096a)

-   Fixed issue with AFK countdown number changes causing layout shift
-   Updated leaderboard UI
-   Server-side fixes that are aimed to reduce the chance of a "locked up" issue in the dungeon (the error message -> "Failed to lock ....")

### 0.1840

-   Summer Event (August):
    -   Added `Coastal Area` and `Crystal Sands` Beach, where `Josie` is, this location will be hidden after the event ends, level required to enter this area is level 15
    -   scavenge, AFK farm bots and dungeon crates will have a chance to drop `Sea Shell`, you can exchange `Sea Shell` for various items in the with `Josie` at the newly added location
    -   During this even, all community contribution buffs (cali & party) will have up to 5% discount for early contributors, the discount is the follows from the first to the last contribution:

1.  5%
2.  5%
3.  5%
4.  5%
5.  5%
6.  2.5%
7.  2.5%
8.  2.5%
9.  0%
10. 0%
    -   Added beach themed new chat frame

![image](https://github.com/user-attachments/assets/1f5af351-9c6b-4817-84e6-40135989fbf5)

![image](https://github.com/user-attachments/assets/f238f08d-3d9c-4f77-8ce8-41fefe4b51d4)

![image](https://github.com/user-attachments/assets/65b79fd9-fee3-479a-8a15-a8d98c0ccba8)

![image](https://github.com/user-attachments/assets/3369cb9b-b17b-48bc-88f9-fb1541641025)

### 0.1839

-   Calibration Rework/Code Re-write:

    -   A new line of community fundraising with different starting time of cali train will be added; there will be two fundraising options, one will start at 00:00 UTC and the other will start at 12:00 UTC, the two funds will be independent of each other. The intention is to give people more options to choose which fund to raise depending on their preferred schedule while providing a predictable timing. the current funding will carry on to the 00:00 UTC fund, and the 12:00 UTC fund will start from 0% when the update is live.
        ![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/9736f045-d6b6-48d5-a0fe-649e8ee3100c)

        _Note the image says 8am and 8pm because my timezone is UTC+8, it will show up differently according to your device timezone_

    -   **The System will allow normal calibration buffs to be deployed even when there is a pending train**, until a short time before the train starts, to prevent it from interfering with the event train
    -   8 hours before any Cali Train starts, a banner will be shown on the chat screen, similar to Party Funds, to remind players of the upcoming train.
    -   With the new system deploying calibration buffs will no longer require using of an item, the functionality will be integrated directly into the Calibration NPC UI Page (Kamiko), hence all calibration-related items will be retired from the game; **All Calibration related items will remain usable as normal if you already have them in your inventory before the update**, and they will no longer be obtainable from any source after the update. This is to simplify the user experience, reduce the complexity of the system. You will still be able to activate calibration buffs similar to before (without contributing to the cali train fund), just that you do not need to use items to do so, you can simply click on the interface to deploy individual cali buffs.

        ![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/f20c21c4-012b-4a3a-a5a5-54c4212a88ba)

    -   Calibration UI update, mainly to streamline the process and make it more user-friendly and intuitive.
    -   Improving SLANC's notice when the train is fully funded, it will include specific timestamps for each tier of calibration, **However please keep in mind, the server MAY NOT deploy them at the exact time due to technical reason, it will try to, but may be delayed**

-   The Chat interface UI will receive an update mainly on reading old message indicator, reply indicator UI, and banner display

![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/0ffe0246-c81f-4109-8325-a58034003973)

-   with suggestion from players, donator chat frame gallery page is added, allowing you to see all chat frames in game

![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/464d5352-a294-4126-b455-360d13fc0536)

-   Some bug fixes regarding to pet system
-   Updated cosmetic selection page, now shows previews of chat box to better represent the chat frame

![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/dc0b39ee-9ebf-4543-84b1-1c331ad6845d)

-   Added new tutorial page for calibration tran, everyone is welcome to edit and add info on our github page
-   Increased chance of Rare equipment and max amount of AI cores dropping from `Rare Locked Container`, other drops remain the same except for retired items being removed from the drop list, `Legendary Locked Container` was not changed besides retiring items

### 0.1838

-   Security Update

### 0.1837

-   Fixed display issue on rainbow chat frame

### 0.1836

-   Fixed translation error in the Cali-train buff description, system will deploy in 40-minute intervals instead of wrongly stated 5 minutes. this does not impact the actual system code, just a translation error.
-   Updated Victor (Trinoky Mart) image to align with the current art style
-   Updated Lexi (Bank) image to align with the current art style

### 0.1835

-   Fixed compatibility issue with devices uses older versions of webview
-   Updated feedback survey UI

### 0.1834

-   Added pet leaderboard, now shows players with oldest pets, only one of your pet can be on the leaderboard, and if your pet dies or is disposed, it will be automatically removed from the leaderboard, revived pet will return to leaderboard but while pet is dead, age will not increase

### 0.1833

-   With player suggestions, Cali Train Community funding is added, similar to Party Funds, you can contribute 10% of the Cali Train Community funding with your unit, when the funding reaches 100%, Cali Train will activate in the next UTC 00:00 time, the system will deploy the first +1 calibration at that time, followed by 40 minutes cooldown and then the next one till +10, the buff deployed will consist of exactly the calibration chance needed and a safety buff for 5 minutes for each round.

![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/0df4d15b-9cc4-4c6c-830f-225f019b0cc8)

-   Updated Kamiko, Violet, and Jen's image to align with current art style
-   Updated chat UI to show current community goal status, skip count will show up only when a skip is in progress

### 0.1832

-   Fixed minor UI issue

### 0.1831

-   Added global party contribution feature, now you can go to `Partyline Pub` found in the market street, where a new NPC `Jieun` has been added, you can contribute 10% of global party with your unit, when the funding reaches 100%, global party buff will be activated immediately.
    -   When the funds are collected, the global party buff will be activated immediately, and the buff will last for 24 hours, the buff is the same as the existing global party buff
    -   If a global buff is already active when a player tries to contribute the last bit of the fund, the server will not allow contribution until the buff ends, however you can freely contribute the fund as long as its not the last bit of the fund.
    -   If a normal global buff (the activated by item) is used, it WILL NOT affect the global party contribution progress, the progress will continue as normal, the progress only resets when the last bit of the fund is contributed and the buff is activated by the community.

![image](https://github.com/DexterHuang/CyberCodeOnline/assets/18545294/f1a41a2c-73cc-414b-a4f8-64eee9bd3b7c)

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
