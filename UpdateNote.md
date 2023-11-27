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

## Notice
With player feedback and discussion with players, we have postponed the change to `Autonomous Storage Unit`'s tradable status to untradable, instead, it is now tradable again.
and will be updated to not tradable on 01/01/2024 giving everyone plenty of time to arrange their ASU.

經過仔細聽取玩家的反饋和與玩家討論後, `Autonomous Storage Unit`(ASU) 已先改回可交易, 讓各位有時間安排ASU的處理方式, 
ASU會在明年2024年1月1號才更新為不可交易 給予大家充足的時間

Again, thank you for all the valuable feedback :)

再次感謝大家的寶貴意見與討論:)

## Updates

0.1817

-   Optimized SLANC's backend logic
-   Now player who is muted or suspended cannot be tagged, to discourage the attention-seeking type of muted individuals from getting even more attention.
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

-   Added skip point to leaderboard
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
