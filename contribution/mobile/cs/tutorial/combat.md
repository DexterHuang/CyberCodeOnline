## Boj

V každé lokaci uvidíte seznam **Blízkých nepřátel** a tři dungeony, do kterých můžete vstoupit. Lokace jsou rozdělené do skupin podle úrovně. Chcete-li odemknout nové oblasti, musíte z dungeonů sesbírat tři fragmenty klíče. Poté můžete v Terminálu (Mapa) z fragmentů klíče vytvořit nový klíč hrubou silou.
  
K boji s **Blízkými nepřáteli** vyberte libovolného z uvedených nepřátel a vstupte do boje. Při boji s blízkými nepřáteli se nemůžete léčit, můžete ale kliknout na tlačítko **Útěk** v levém horním rohu obrazovky a souboj ukončit. V dungeonu vás do boje vtáhne kliknutí na nepřítele označeného ikonou mimozemšťana.

## Obrazovka boje
  
Obrazovka boje vám ukáže, kolik zdraví a štítu máte vy i váš soupeř, stejně jako množství munice zbývající u každé zbraně a přibližné poškození, které mohou zbraně způsobit.

## Primární útok
Zaútočte na nepřítele vybavenou primární zbraní. Tato zbraň nepoužívá munici, ale způsobuje nejmenší poškození ze zbraní stejné úrovně a rarity.

## Speciální útok
Zaútočte na nepřítele vybavenou speciální zbraní. Pokud má nepřítel štít, způsobí 120 % poškození a přebytečné poškození se bez snížení přenese na zdraví. Tato zbraň spotřebuje na každý výstřel jeden **energetický článek** a způsobuje poškození mezi primární a ničivou zbraní stejné úrovně a rarity.

## Ničivý útok
Zaútočte na nepřítele vybavenou ničivou zbraní. Štítům způsobí 50 % poškození. Pokud má nepřítel méně štítu, než je hodnota poškození, přebytečné poškození se nevrací zpět na 100 %. Tato zbraň spotřebuje na každý výstřel jeden **antihmotový náboj** a způsobuje nejvyšší základní poškození štítům ze zbraní stejné úrovně a rarity.

## Použít předmět
Máte 3 sloty pro použití předmětu. Můžete do nich přiřadit léčivé předměty, zásobovací bedny nebo paměti se zkušenostmi a používat je. V praxi byste však měli přiřazovat hlavně léčivé předměty, protože všechny předměty, které lze použít okamžitě, fungují i mimo boj a mimo dungeony a v dungeonech je potřeba používat jen léčivé předměty. Sloty se neřadí automaticky.

Předměty lze používat pouze v dungeonech. To znamená, že se při boji s blízkými nepřáteli nemůžete léčit.

## Útěk
Z boje můžete zkusit utéct kliknutím na `Útěk` v levém horním rohu. Úspěšnost útěku z boje mimo dungeon je vždy 100 %. Pokud ale bojujete uvnitř dungeonu a pokusíte se utéct, šance se bude odvíjet od vaší statistiky **Šance úniku**, která vychází z brnění a statistik vylepšení. Pokud se útěk nepovede, nepřítel na vás zaútočí, aniž byste mu způsobili poškození.

## Smrt

Smrt, označovaná také jako „FLATLINE“, dočasně zablokuje všechny akce vaší postavy, dokud nevyprší krátký časovač. Pokud zemřete, nepřijdete o žádné předměty. Pokud je ale vaše úroveň vyšší než 10, ztratíte 10 % celkového BTC a zkušeností postavy (Player XP). Pokud je váš aktuální postup k plné úrovni menší než 10 %, můžete přijít o úroveň.

## Modifikátory nepřátel
  
Nepřátelé mohou mít modifikátory, které jsou označené přídavným jménem před názvem nepřítele, např. **Mad** Serial Killer. Tyto modifikátory jsou následující:
  
  - Mad – Dává nepříteli +20 % poškození  
  - Angry – Dává nepříteli +10 % poškození  
  - Tough – Dává nepříteli +20 % obrany  
    - Také dává nepříteli výrazně více zdraví a trochu více poškození (neukazuje se v tooltipu)
  - Agile – Dává nepříteli +20 % odolnosti vůči omráčení a štít  
    - Hodnota štítu se vždy rovná polovině zdraví nepřítele
  - Shielded – Dává nepříteli velký štít  
    - Hodnota štítu se vždy rovná dvojnásobku zdraví nepřítele
     - Všimněte si, že nepřátelé s modifikátorem Shielded mají pro vyvážení o něco nižší zdraví.
  - Precise – Dává nepříteli +10 % šanci na kritický zásah a +40 % kritického poškození
    - Také dává nepříteli štít (neukazuje se v tooltipu)
  - Berserker – Dává nepříteli výrazně více zdraví, štítu i poškození.
     - Pro tento modifikátor neexistuje tooltip, ale výrazně vyššího štítu i zdraví (které jsou kromě bossů téměř stejné) si snadno všimnete

Několik důležitých poznámek k modifikátorům:

1. Poškození od nepřítele se nejprve vynásobí faktorem, a teprve potom se odečte vaše brnění, než se odečte ze zdraví. To znamená, že nepřátelé mohou způsobovat výrazně větší poškození než jejich bezmodifikátorové verze.
2. Podobný výpočet platí i pro obranu. Tough nepřátelé mohou vyžadovat mnohem více výstřelů k zabití.
3. Agile nepřátelé mají „Stun Evade“ (tj. používá se jen 80 % vaší hodnoty omráčení, např. 20 % omráčení se změní na 16 %), nikoli „Evade“ (tj. šanci, že váš útok vůbec nezasáhne). Možná se proti takovým nepřátelům budete muset léčit o něco více, když je běžně omračujete, ale nebudete se muset léčit kvůli úplnému minutí výstřelu.

  
## Modifikátory hráče
  
Modifikátory můžete také získat interakcí se zadavatelem úkolu v dungeonu, který je označen symbolem `?`. Tyto modifikátory jsou následující:  
  
  - Overcharged I - Dává hráči +5 % poškození  
  - Overcharged II - Dává hráči +10 % poškození  
  - Overcharged III - Dává hráči +15 % poškození  
  - Overcharged V - Dává hráči +20 % poškození  
  
  
  - Reinforced I - Dává hráči +5 % obrany  
  - Reinforced II - Dává hráči +10 % obrany  
  - Reinforced III - Dává hráči +15 % obrany  
  - Reinforced V - Dává hráči +20 % obrany  
  
  
  - Shield Enhance I - Dává hráči +5 % násobič štítu  
  - Shield Enhance II - Dává hráči +10 % násobič štítu  
  - Shield Enhance III - Dává hráči +15 % násobič štítu    
  - Shield Enhance V - Dává hráči +20 % násobič štítu  

Modifikátor začne odpočítávat až ve chvíli, kdy dokončíte úkol výměnou požadovaných předmětů na kartě **Úkoly** (po dokončení se text zobrazí žlutě). Úkol v dungeonu můžete přijmout a s jeho spuštěním počkat na později. Každá odměna za úkol přesně určí, který modifikátor získáte.

Také platí, že modifikátory hráče z různých rarit se sčítají aditivně. Například můžete mít současně Overcharged I i Overcharged II, což dohromady dá +15 % poškození. Pokud ale získáte modifikátor, který už máte aktivovaný (například aktivujete Overcharged I dvakrát), časovač se resetuje.
