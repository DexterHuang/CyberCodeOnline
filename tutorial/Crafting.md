## Crafting

*Planning to add details about the various resources and how to craft them.*

<br />

Crafting can be found by going to `src > Player > Crafting.ts` for the Web version and `Inventory > Crafting` for Mobile players.

### Ammo

Your Special Weapon and Destructive Weapon both require ammo to use.

<br />

#### Energy Cells

Your Special Weapon uses Energy Cells. You can find Energy Cells as drops after winning fights, or by crafting them from `ammunitionTechParts`.

<br />

#### Anti Matter Charge

Your Destructive Weapon uses Anti Matter Charges. You can find them as drops (less often than Energy Cells), or by crafting them from `militaryAmmunitionTechParts`.

<br />

### Medical

Players can use `medicalTechParts` and `techScrap` to craft medicine for use in dungeons. In order to craft better medicine, players need to improve their medical science levels which can be done by performing the associated job training or by crafting medicine. Furthermore, better medicine requires players to use more `medicalTechParts`. 

For example the lowest level medicine that can be crafted is the `painAway` spray  for 1 `medicalTechParts` while the `degradedNanoRepairBot` needs 2 `medicalTechParts` and a medical science level of 10.

There are two categories of medicine that can be crafted, single heals and group heals. 

<br />


#### Single Heals

As the name suggests, Single heals will only heal yourself for the specified amount. Single heals medicine are items such as `painAway` and anything ending with `Bot` (ex. `nanoMedicBot`). In order to craft Single heals, you need the specified medical science level and `medicalTechParts`

<br />



#### Group Heals

Group heals can heal the entire group in a dungeon when used but will heal less than Single heals of the same tier. Group heals are items such as `painAwaySpray` and anything ending with `Drone` (ex.: `nanoMedicDrone`). In order to craft Group heals, you need the same level Single heal and the associated number of `techScrap`. For instance, to make `painAwayScrap` you need 1x `painAway` and 1x `techScrap`.
