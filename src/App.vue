<script >
import { store } from "./store";
import SiteMain from "./components/SiteMain.vue";
import SiteHeader from "./components/SiteHeader.vue";
export default {
  components: {
    SiteMain,
    SiteHeader
  },
  data() {
    return {
      store,

    }
  },
}
</script>

<template>
  <SiteHeader></SiteHeader>
  <SiteMain ></SiteMain>
</template>