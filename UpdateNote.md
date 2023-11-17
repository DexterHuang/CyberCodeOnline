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

If you would like to help to maintain CyberCode Online, please feel free to submit a PR at [our GitHub repo](https://github.com/DexterHuang/CyberCodeOnline).

Step-by-step [Guide](https://cybercode-online.fandom.com/wiki/GitHub_PR_Tutorial) on how to submit a PR on our GitHub.

## Updates

0.1816

-   Market place item, purchase item UI has been re-worked to provide more streamlined experience, no longer to fill up multiple popup and instead all in one page.![Alt text](image.png)
-   Rewrite of the captcha image generation system, now it is much more efficient and faster, and also more secure.

0.1815

-   Updated leaderboard UI, making it clear which boards are game-play based which are contribution based.
-   Optimized leaderboard loading for all boards, allowing us to show 32 players per board instead of 16 previously for all boards

0.1814

-   Added skip point to leaderboard
-   Optimized leaderboard loading time, and changed the leaderboard to refresh every one hour, to increase efficiency and increase speed
-   Added translation support to leaderboard UI

0.1813

-   With many discussion and feedbacks from the community, the skip count statistic will be a point system where:
    -   Every 15 minutes skip is 1 point, so that you can skip longer periods while still getting equivalent points.
    -   Above 150 minutes is fixed to 10 points to encourage multiple skips rather than one huge skip to maximize benefit for most players
-   Additionally added skip discount, during this event, all skip above 105 minutes will receive 5% off until the end of the event.\
-   UI update on AFK screen

0.1812

-   Added Thanksgiving event, during the event period, Scavenging and AFK farm bot will drop `Roasted Turkey` rarely.
    -   Consuming Roasted Turkey gives your `AFK EXP Boost` effect for 20 minutes, during this status effect, AFK tasks completed will gain +20% EXP. Please note, the bonus EXP check is when you finish your AFK task not when the task started; so in order to receive the bonus EXP, please ensure that the buff is active when your AFK task finishes.
-   Added skip count statistic to player profile, you can now see your and others' total skip count. **Because this is a new statistic previously not tracked, everyone's count will start from this update**
-   Added skip-exclusive cosmetics, including emblems and chat frames, these can only be obtained by reaching specific skip counts.
-   Various bug fixes
-   Server stability fix
