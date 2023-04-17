<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'SiteMain',
    data() {
        return {
            store,
        }
    },
    methods: {
        listCards(url) {
            axios
                .get(url)
                .then(response => {
                console.log(response.data.data);
                console.log(response.data.data.type);
                this.store.listCards = response.data.data
                this.store.listCardsTypes = response.data.data.type
                })
        },
        includes(){
            this.store.listCards.forEach(e => {
                this.store.listCardsTypes.push(e.type)
            });
        }


    },
    mounted(){
        this.listCards(this.store.urlApi)
    }
   
}

</script>
<template>
    <main>
        <section class="search">
            <select name="" id="">
                <option v-for="cards in this.store.listCards" value="" > <p v-if="!(this.store.listCardsTypes.includes(cards.type))">{{ cards.type }}</p></option>
            </select>
        </section>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                <div class="col">
                    <div class="card" v-for="card in this.store.listCards">
                        <div class="card-header">
                            <img :src="card.card_images[0].image_url" alt="">
                        </div>
                        <div class="card-body">
                            <p>{{ card.name }}</p>
                            <p>{{ card.type }}</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>