## Inventory

*Plan to detail the inventory page here with focus on equipping gear / upgrades and where to go to handle the others such as crafting and printing. Also add a note about `ItemInbox.ts`.*

### Equipment

In your Inventory you can see your currently equipped items, secret keys, and all items in your inventory. 

In order to equip items, click on the equipment in your inventory. To equip upgrades to your equipment if they allow it (hover over an equipment and see whether the `upgradeSlots` is non-empty.), hover over the equipment and click the `Details`/`Upgrade Modules` box at the bottom of the popup. There, you can see the upgrades you have currently equipped and upgrades that you can equip. To equip or remove an upgrade, click on it.

### Scrapping

Players can also scrap equipment or destroy caches in their inventory. Do so by hovering over the equipment/cache and clicking on `Scrap`/`Destroy`. If you would like to scrap multiple items at the same time, click on the `false` in `multiSelectMode=false`. This will turn into `multiSelectMode=true` and little boxes will pop up next to your inventory's items. Click on those boxes to select them and then click `scrapSelected` to scrap all selected. 

Furthermore there is an `autoScrap()` button below your inventory which will scrap equipment that are trash/common and worse than your current equipment. 

<br />

### Molecular Printing

In the City Center, there is the Molecular 3D Printer, which is going to become your best friend. It will be in the `nearby` section of the `Surrounding.ts` file when you are in Shangri La City Center. Clicking on it will open another "file view" where you will be shown what available recipes you have in your inventory. It costs bitcoin to print, so make sure you have enough. It will tell you when you hover over the recipe how much it will cost.

<br />

Recipes are the objects in your inventory with the word `cache` in their name. For example `commonHelmetCache_x1` is an example of a recipe to print a Common helmet, and you only have one of them.

![Caches Screenshot](../resources/caches.png)

<br />

In the Molecular Printer screen, you can hover over any of the recipes and click `Molecular Print` which will bring up a dialog if you have multiple items that are the same, asking how many you want to print.

<br />

A good strategy here is to print all the `trash` items first, then the `common`, saving `rare` and `legendary` for the end. The reason for this is printing the more common and useless items first boosts your Printing Level, giving you a better chance to print more powerful gear with any Rare and Legendary recipes you may have found.

> **Tip:** If you have a lot of bitcoin, you can just click on each recipe to bring up the quantity dialog and get it printed. This saves time on hovering.

<br />

Once you have printed all your recipes, you'll want to head over to your Inventory screen and see how much you can scrap and how much you can use.

<br />

## The WeaponSmith

The Weaponsmith is a vendor in Shangri La City Center that allows you to sell items for bitcoin, and they often have items for purchase.

<br />

When you are in the Weaponsmith screen, hover over anything in your inventory and choose the `Sell` option. Alternately, you will see the items available for sale at the top. You can hover over any of them and choose `Buy` if you can afford them.
