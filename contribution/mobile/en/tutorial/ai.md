

### How do I add my lore or knowledge of the game into AI's knowledge pool?
You can simply edit the following files on our github page:
- contribution/mobile/{lang}/tutorial/FAQ.md
- contribution/mobile/{lang}/ai/knowledge.md
after your pull request has been approved, the AI will automatically learn the new knowledge.
NOTE: if the file does not exist in your language yet, simply create it.

### What is allowed to add to the AI knowledge pool? and which file to add it to?
#### You should add the following to FAQ.md file:
- Game facts like "how to xxxx?", "what is xxxx?"
- Game tips

#### You should add the following to knowledge.md:
- Lores 

Please DO NOT add self-insert into the files, it will not be approved.
Unless in special situations, if your edit contains player names, it will not be approved, in order to ensure fairness for everyone. 

### What should the format be?
You should always follow the following format:
```
### Can I Use Gear that's higher than our Character Level?
No. player can't use gear that's higher than it's current character level.


### Another question?
Another questions's answer


```
Please note that: 
- Always format the knowledge fragment in the form of question-answer pair, this is how the bot will receive queries so its the most effective way of providing knowledge.
- The question/statement must be prefixed with `###`, this is markdown formatting for titles.
- The question/statement should be what you expect the players ask the AI bot, this will increase the performance and likely hood of your knowledge being "reminded/linked" by the AI when the player asks a similar/same question.
- Always end the section of question-answer pair with **2 empty lines**, this will help the algorithm seperate your knowledge fragment from other fragments.
- Please only state facts and be concise without adding emotions/emojis into the answer or question, this will help filter out irrelevent information for the AI.