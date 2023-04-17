<script>
import axios from 'axios';

export default {
    name: 'SiteMain',
    data() {
        return { 
            props: {
                array: Array
            },
        }  
    },
    methods() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
            .then(response => {
                console.log(response);
            })
    }
}

</script>
<template>
    <main>
        <section class="search">
            <select name="" id="">
                <option value=""></option>
            </select>
        </section>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                <div class="col"></div>
            </div>
        </div>
    </main>
</template>