# Come iniziare con CyberCode Online

CyberCode Online è strutturato come il popolare editor di codice [Visual Studio Code](https://code.visualstudio.com/). Sul lato sinistro si trovano diverse icone. Quella in alto è la più importante, perché è l'Explorer da cui si accede ai file di codice del gioco. Il gioco si svolge come se foste uno sviluppatore che modifica un progetto nell'editor di codice!

<br />

Nell'Esplora file, nella colonna di sinistra si trovano vari "file" che si aprono sul lato destro e che permettono di accedere a varie parti del personaggio e del gioco. Il file predefinito è `Surrounding.ts` che descrive l'ambiente circostante, ovunque ci si trovi geograficamente nel gioco. La posizione e lo stato attuale del giocatore sono definiti come variabili. Sotto di esse, vi indicherà se ci sono **Azioni** che potete fare, se ci sono **Nemici** o **Alleati** nelle vicinanze e dove potete **Viaggiare**.

<br />

Per informazioni sulle caratteristiche dei vari file, come `surroundingTutorial.ts` che illustra le aree di Shangri La e come spostarsi tra di esse, consultare le altre pagine di tutorial.

<br />

## Creazione account & Login

È possibile effettuare l'accesso con il proprio account Google facendo clic su `signInWithGoogle()` e quindi inserendo l'e-mail e la password. Una volta effettuato l'accesso, digitare un `displayName` tra le virgolette `""` e fare clic su `save()`.

![Login with Google](../resources/desktop-tutorial/google_create.gif)

<br />

In alternativa, si può creare un account usando il proprio indirizzo e-mail digitandolo tra le virgolette `""` nella sezione `const email="";` dell'area `signUp()` e una password in entrambe le sezioni `const password="";` e `const passwordConfirm="";` quindi fare clic su `signUp()` stesso per finalizzare la creazione dell'account.  Una volta creato l'account, digitare un `displayName` e fare clic su `save()`.

![Sign up](../resources/desktop-tutorial/email_create.gif)
