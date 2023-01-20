// Composants pour gérer un panier d'achat
// @author : Novens
var myVueApp = Vue.createApp( {
    data() {
        return {
            totalPrice: 0,
            panier: [
                {name:"Écouteurs sans fils", price:45.00, quantite:1, image:"https://media.conforama.fr/m/export/Medias/700000/40000/8000/800/50/G_748857_A.jpg%22%7D"},
                {name:"Télévision", price:449.99, quantite:1, image:"https://guide-images.cdn.ifixit.com/igi/CQerEFCURNsA2Iwj.medium%22%7D"},
                {name:"Monopoly", price:25.00, quantite:2, image:"https://m.media-amazon.com/images/I/91MSg3Y+cOL._AC_SL1500_.jpg%22%7D"},
            ]
        }
    },

    methods: {



    },

    computed: {
        totalPanier(){
            for (const element of this.panier) {
                this.totalPrice += element.price * element.quantite;
            }
            return this.totalPrice;
        }
    }
})


myVueApp.component('afficherpanier', {
    props: ['contenupanier', 'total'],

    template:
    ` 
    <table class="table">
        <thead>
            <tr>
                <td> image </td>
                <td> nom produit </td>
                <td> quantité </td>
                <td> prix unitaire </td>
                <td> total produit </td>
                <td> Supprimer </td>
            </tr>
        x</thead>
        <tbody>
            <tr v-for="article in contenupanier">
                <td> <img src="article.image" > </td>
                <td> {{article.name}} </td>
                <td> quantité : <input type="number" min="1" max="100" v-model.number=article.quantite > </td>
                <td> {{article.price}} </td>
                <td> {{totalPrduit}} </td>
                <td> <button class="btn btn-danger"> Supprimer </button> </td>
            </tr>
        </tbody>
    </table>

    <p> Total : {{total}} € </p>
    `,

    data(){
        return {

        }
    }
})

myVueApp.mount("#container");