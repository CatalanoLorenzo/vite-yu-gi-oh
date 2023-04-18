import { reactive } from "vue";
export const store = reactive({
    loading: true,
    urlApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    urlApiArcheType : ' https://db.ygoprodeck.com/api/v7/archetypes.php',
    allListCards : null,
    listCardsTypes : []
})