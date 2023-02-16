// // Milestone 1
// // ● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// // dall’interlocutore (bianco) assegnando due classi CSS diverse
// // ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
// // nome e immagine di ogni contatto

// // ** Milestone 2
// // ** ● Visualizzazione dinamica dei messaggi: 
// // ** tramite la direttiva v-for, 
// // ** visualizzare tutti i messaggi relativi al contatto attivo all’interno 
// // ** del pannello della conversazione

// // ** ● Click sul contatto mostra la conversazione del contatto cliccato

// // TODO Milestone 3
// // ** ● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
// // ** “enter” il testo viene aggiunto al thread sopra, come messaggio verde

// // ** ● Risposta dall’interlocutore: 
// // ** ad ogni inserimento di un messaggio, l’utente riceverà
// // ** un “ok” come risposta, che apparirà dopo 1 secondo.


// // TODO Milestone 4
// // **● Ricerca utenti: 
// // **scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
// // ** contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// // **“mar” rimangono solo Marco e Martina)

// TODO Milestone 5 - opzionale
// ** ● Cancella messaggio: 
// **cliccando sul messaggio appare un menu a tendina che
// ** permette di cancellare il messaggio selezionato

// TODO USARE LIBRERIA LUXON
// ** ● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti


const app = Vue.createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
              dropdown: false,
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
              dropdown: false,
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
              dropdown: false,
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
              dropdown: false,
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
              dropdown: false,
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
              dropdown: false,
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
              dropdown: false,
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
              dropdown: false,
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "_4",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
              dropdown: false,
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "_5",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
              dropdown: false,
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
              dropdown: false,
            },
          ],
        },
        {
          name: "Federico",
          avatar: "_7",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
              dropdown: false,
            },
          ],
        },
        {
          name: "Davide",
          avatar: "_8",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
              dropdown: false,
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
              dropdown: false,
            },
          ],
        },
      ],
      activeUser: -1,
      indexUserResponse: -1,
      newMessage: "",
      searchUser: "",
      dropdown: false,
    };
  },

  methods: {
    userSelected(index){
      this.activeUser = index;
    },
    addMessage(input){
      const messageToSend = {
        date: "12:00",
        message: input,
        status: "sent",
        dropdown: false
      };
      this.contacts[this.activeUser].messages.push(messageToSend);
      this.indexUserResponse = this.activeUser;
      this.newMessage="";
    },

     userResponse(){
        setTimeout(() =>{
          const messageToReceive = {
            date: "12:00",
            message: "Ok",
            status: "received",
            dropdown: false,
          };
          this.contacts[this.indexUserResponse].messages.push(messageToReceive);
        }, 1000)
     },

     visibleUser(searchUser){
      const newSearch = searchUser.toLowerCase();
      for(const contact of this.contacts){
        if(contact.name.toLowerCase(contact.name).includes(newSearch)){
          contact.visible = true;
        }else contact.visible = false;
        
      }
     },

     
      dropOptions(message){
        message.dropdown = !message.dropdown;
     },

     deleteMessage(index){
       this.contacts[this.activeUser].messages.splice(index, 1);
     }
  },

  created() {
    // setTimeout(()=>{
    //   this.userRespond()
    // },1000);
  },
});

app.mount("#root");


//(activeUser >= 0 ? `` : `${$contacts[activeUser].name}`)