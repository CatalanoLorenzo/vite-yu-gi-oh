<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'SiteMain',
    data() {
        return {
            store,
            typeSelect: "",
        }
    },
    methods: {
        listOfArcheType(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);

                });
        },
        listCards(url) {
            if (this.typeSelect != '') {
                url += `&archetype=${this.typeSelect}`
                console.log(this.store.urlApi);
                // https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=5
            }
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.data);
                    this.store.allListCards = response.data.data
                    this.store.allListCards.forEach(element => {
                        this.addtype(element.archetype
                        )
                    });
                })
        },
        addtype(e) {
            if (!this.store.listCardsTypes.includes(e)) {
                this.store.listCardsTypes.push(e)
            }
        },
    },
compued:{
    numbercard(){
        if (store.allListCards != null) {
          return  store.allListCards.length
        }
    }
},
    mounted() {
        console.log(this.store.urlApi)
        this.listCards(this.store.urlApi)
        this.listOfArcheType(this.store.urlApiArcheType)
    }

}

</script>
<template>
    <main>

        <section class="search">
            <select name="" id="" @change="listCards(store.urlApi)" v-model="typeSelect">
                <option value="">Scegli il tipo di carta</option>
                <option v-for="types in store.listCardsTypes" :value="types">{{ types }}</option>
            </select>
            <div>{{ typeSelect }}</div>
        </section>
        <section>
            <div>
                <h3>{{ numbercard }}</h3>
            </div>
        </section>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                <div class="col">
                    <div class="card" v-for="card in store.allListCards">
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