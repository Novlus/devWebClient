// Composants pour gérer le voulume dans une interfcae
// @author : Novens

var myVueApp = Vue.createApp ({
    data() {
        return {
          
          vueStatus: "ok",
          soundLevel: 0,
          parentUserMood: "" 
            
        }
    },
    methods: { 
        muteVolume(){
            this.soundLevel = 0;
        },
        maxVolume(){
            this.soundLevel = 3;
        },
        setMood(){
            this.parentUserMood = this.$refs.soundmodule.userMood;

        }
       


    },
    computed: { // emplacement où l'on effectue les calculs à réaliser quand l'événement onDOMready est ok.
        
        

        
    }
})

myVueApp.component('soundicon',{
   props: ['level'], 
   template: 
   `   
        <div style="background-color:#EEE; padding:20px; margin:10px; ">
            <p style="font-size:3em;">
                {{soundEmojis[level]}}
            </p>
            <button class="btn btn-info" v-on:click="$emit('volcoupe')">Mute</button>
            &nbsp;
            <button class="btn btn-dark" v-on:click="$emit('volmax')">Max</button>

            <label>Votre humeur : </label>
            <input type="text" v-model="userMood" />
            <button v-on:click="$emit('newmood')"> Ok </button>
        </div>
   `,
   data() {
    return {
        soundEmojis: ['🔇', '🔈', '🔉', '🔊'],
        userMood: ""
    }
   }
})

myVueApp.mount("#container");