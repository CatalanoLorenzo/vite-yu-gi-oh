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
                const arraytypes = response.data.data
                arraytypes.forEach(element => {
                    this.addtype(element.type)
                }); 
                })
        },
        addtype(e){
           if (!this.store.listCardsTypes.includes(e)){
            this.store.listCardsTypes.push(e)
           }
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
                <option v-for="types in this.store.listCardsTypes" :value="types" >{{types}}</option>
            </select>
        </section>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                <div class="col">
                    <div class="card" v-for="card in this.store.listCards" >
                        <div class="card-header">
                            <img :src="card.card_images[0].image_url" alt="">
                        </div>
                        <div class="card-body">
                            <p>{{ card.name }}</p>
                            <p v-if='addtype(card.type)'>{{ card.type }}</p>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>