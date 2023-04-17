import { reactive } from "vue";
export const store = reactive({
    loading: true,
    urlApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=5&offset=5',
    listCards : null,
    listCardsTypes : []
})