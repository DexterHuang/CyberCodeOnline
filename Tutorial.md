This document is contributed by [mr_moe](https://github.com/donburks ) and [hildjj](https://github.com/hildjj)
if you would like to help maintain it please feel free to create PR at https://github.com/DexterHuang/CyberCodeOnline

# Getting Started in CyberCodeOnline

Put yourself in the mindframe of a developer using [Visual Studio Code](https://code.visualstudio.com/).  That's what it will look like to people walking past you can see your screen, but who don't look closely.

## Logging in

![Login Screenshot](resources/login.png)

Click between the double quotes, enter the required information, then click on the function name `signUp` to "execute" it.  Your password must be at least 8 characters long.

![Sign up](resources/signup.png)

Enter the name you want to show up for everyone, and click `save`.

![Enter display name](resources/displayname.png)

CyberCodeOnline is laid out like the popular code editor VSCode. On the left-hand side you will find several icons. The top one is the most important, as that is the Explorer where you access the actual code files for the game. The game is played as if you were a developer editing a project in your code editor!

In the File Explorer, the left-hand column is where you will find various "files" that will open up on the right-hand side which allow you to access various parts of your character and the game. The default file is `Surrounding.ts` which describes your surroundings, wherever you are geographically in the game. It will have your location and current player status defined as variables. Below that, it will let you know if there are **Actions** you can do, if there are **Enemies** or **Allies** nearby, and where you can **Travel**.

You start off in Shangri La, in the City Center. To leave the City Center, you're going to want to get on the **Subway**. Down at the bottom of the "file view" will be a function called `goToShangriLaSubwayStation()`. Clicking on this will "run" that function, taking you to the subway. From there, you can explore the various regions by going to different subway stations. 

Here are the various areas and some information about each one.

### Shangri La City Center

This is the main hub, or home, to which you will often return. This is where you will respawn when you die, and where you will come back to when you need to get ready for your next run. This is where the Molecular Printer, the Weaponsmith are, and where you can train your printing skill and reverse engineer any tech scraps you have.

### Shangri La Outskirts

This is the rural area of Shangri La City, a place where crime and low-life gangs rule the region. This is where you will do your first battles, and is contains opponents up to level 10. There are three areas within the Outskirts.

#### Shangri La Slums

This is the entrance to the slum and ghetto areas. This is where the lowest-level scum can be found, between levels 1 - 3. 

#### Inner Slum Area

A bit harder than the entrance to the slums, this area has enemies from levels 4 - 7. 

#### Underground Sewer

This is a really gross area, and has opponents level 8 - 10. These are the hardest opponents in the Outskirts.

### Minoham Station

This is the industrial area of Shangri La city, and is where you will find the old E-Crop Automaton factory. This area is good if you are wanting to fight opponents from levels 11 - 20. You can enter the lobby of the factory and choose which area of the sprawling building to explore.

#### Security Office

This used to be offices where automaton factory employees worked, but now it is overrun with random automatons that have been left behind. Here you will find robots levels 11 - 13.

#### Employee Lounge

Surely the employees took breaks before, right? Now there are partially-functional automatons that don't need breaks. Maybe you should kill a few? Enemies here are level 14 - 17.

#### Factory Assembly Line

This is where all the automatons used to be assembled. This is where the strongest and most functional automatons roam around. You'll find bots level 18 - 20 here.

### Chihiroi Station

Chihiroi Station takes you out to where the Federal Prison is. This is a great area if you are looking for much harder enemies, levels 20 - 30. From here, you can enter the Federal Prison and explore the areas there, deciding what kind of "justice" you're going to dispense.

#### Perimeter

The outer ring of the prison, opponents here are milling about, waiting to be brought to justice. They are level 20 - 23.

#### Sports Field

Maybe the inmates want to play some sports. Maybe you should play whack-a-con. You'll find enemies from levels 24 - 27 here.

#### Low Security Wing

This is where the white collar criminals are locked up. Opponents here are the strongest in the prison, from levels 28 - 30. 

## Your first fight!

## Types of resources

## Equipment

## Molecular Printing

In the City Center, there is the Molecular 3D Printer, which is going to become your best friend. It will be in the `nearby` section of the `Surrounding.ts` file when you are in Shangri La City Center. Clicking on it will open another "file view" where you will be shown what available recipes you have in your inventory. It costs bitcoin to print, so make sure you have enough. It will tell you when you hover over the recipe how much it will cost.

Recipes are the objects in your inventory with the word `cache` in their name. For example `commonHelmetCache_x1` is an example of a recipe to print a Common helmet, and you only have one of them.

In the Molecular Printer screen, you can hover over any of the recipes and click `Molecular Print` which will bring up a dialog if you have multiple items that are the same, asking how many you want to print.

A good strategy here is to print all the `trash` items first, then the `common`, saving `rare` and `legendary` for the end. The reason for this is printing the more common and useless items first boosts your Printing Level, giving you a better chance to print more powerful gear with any Rare and Legendary recipes you may have found. 

> **Tip:** If you have a lot of bitcoin, you can just click on each recipe to bring up the quantity dialog and get it printed. This saves time on hovering.

Once you have printed all your recipes, you'll want to head over to your Inventory screen and see how much you can scrap and how much you can use.

## The WeaponSmith

The Weaponsmith is a vendor in Shangri La City Center that allows you to sell items for bitcoin, and they often have items for purchase. 

When you are in the Weaponsmith screen, hover over anything in your inventory and choose the `Sell` option. Alternately, you will see the items available for sale at the top. You can hover over any of them and choose `Buy` if you can afford them.

## Experience

## Quests

Quests can be found on the Explorer tab, in the left-hand column. Here is where you are given specific tasks that will earn you extra experience points and bitcoin. There are a variety of different kinds of tasks available, such as printing equipment, killing enemies, and gaining experience or bitcoin. 

Hovering over the individual quest will show you what you have to do to achieve it. For example, a Gain experience quest may want you to get 1000 experience points. You'll be able to see your total by hovering, and it may say something like ` 125 / 1000 (12%)`.

Once you have completed a quest, a `Claim` link will appear next to the quest. Click on that to get your reward, and be assigned a new quest.

## Working with others
