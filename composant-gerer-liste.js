 //component d'affichage de listes
 //@author: Novens
 
 // Il faut créer l'instance de vue avant de déclarer les components.
 var myVueApp = Vue.createApp ({
    data() {
        return {
          
          vueStatus: "ok",  
            
        }
    },
    methods: {  
       


    },
    computed: { // emplacement où l'on effectue les calculs à réaliser quand l'événement onDOMready est ok.
        
        

        
    }
})

// //on définit un nouveau composant global appelé button-counter
myVueApp.component('mylistitem', {
    props: ['finished','priority'],
    template: 
       `    
        <div class="listitem" v-bind:style="finished === 'false' ? '' : 'text-decoration:line-through'">
            -<slot/> / priorité :
            {{priority}}
        </div>
       `,
        
 })

 myVueApp.component('task-list', {
    template:
        `
            <div>
            <p>Ma liste de tâches</p>
                <ul>

                    <taskitem v-for="task in tasks">
                        {{task}}
                    </taskitem>
                </ul>
            </div>
        `,
    data() {
        return {
            tasks: ["aller à l'Hyper",
                    "Aller à la banque",
                    "Passer à la boulangerie",
                    "Etre en cours à l'heure"]
        }
    }
 })

 myVueApp.component('taskitem', {
    template:
        `
            <li style="color: green; list-style-type:square;">
                <slot></slot>
            </li>
        `
 })


myVueApp.mount('#container');
