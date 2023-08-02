
### Comment puis-je ajouter mes "lores" ou mes connaissances du jeu dans le pool de connaissances de l'IA?
Vous pouvez simplement éditer les fichiers suivants sur notre page github :
- contribution/mobile/{lang}/tutorial/FAQ.md
- contribution/mobile/{lang}/ai/knowledge.md
après l'approbation de votre pull request, l'IA apprendra automatiquement les nouvelles connaissances.
NOTE: si le fichier n'existe pas encore dans votre langue, créez-le simplement.

### Qu'est-ce qui est autorisé à ajouter au pool de connaissances sur l'IA ? et dans quel fichier l'ajouter ?
#### Vous devez ajouter ce qui suit au fichier FAQ.md:
- Fonctions du jeu comme "comment trouver xxxx ?", "qu'est-ce que  xxxx ?"
- Astuces de jeu

#### Vous devez ajouter ce qui suit au fichier knowledge.md:
- Lores 

Veuillez NE PAS ajouter d'auto-insertion dans les fichiers, cela ne sera pas approuvé.
Sauf dans des situations particulières, si votre modification contient des noms de joueurs, elle ne sera pas approuvée, afin d'assurer l'équité pour tout le monde. 

### Dans quel format faire ces ajouts ?
Vous devez toujours suivre le format suivant:
```
### Puis-je utiliser un équipement supérieur au niveau de mon  personnage ??
Non. le joueur ne peut pas utiliser un équipement supérieur au niveau de son personnage.


### Autre question?
Réponse à autre question.


```
Veuillez noter les éléments suivants : 
- Formatez toujours les fragments de connaissances sous la forme d'une paire question-réponse, c'est ainsi que le bot recevra les requêtes, c'est donc le moyen le plus efficace de fournir des connaissances.
- La question/déclaration doit être précédée de `###`, il s'agit d'un formatage de type "markdown" pour les titres.
- La question/déclaration doit correspondre à ce que vous attendez que les joueurs demandent au bot IA, cela augmentera les performances et le niveau probable de vos connaissances étant "rappelées/liées" par l'IA lorsque le joueur pose une question similaire.
- Terminez toujours la section de la paire question-réponse avec **2 lignes vides**, cela aidera l'algorithme à séparer vos fragments de connaissance des autres fragments.
- Veuillez n'indiquer que des faits et être concis sans ajouter d'émotions/emojis dans la réponse ou la question, cela aidera à filtrer les informations non pertinentes pour l'IA.
