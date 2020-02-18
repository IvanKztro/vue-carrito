<template>
  <div id="app">
    <navBar/>
    

    <router-view/>
  </div>
</template>

<script>

import {mapState, mapMutations, mapActions} from "vuex";
import navBar from'@/components/NavBar.vue'
import carousel from "@/components/Carousel.vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    name: "app",
    data() {
      return {
         publicPath: process.env.BASE_URL
      }
    },
    components: {
        navBar,
        carousel
    },
    computed: {
        ...mapState(["productos","carrito"])
    },
    methods:{
        ...mapActions([ "addCarrito", "viewLentes","getGlass","getCarrito"]),
        ...mapMutations(["aumentar","disminuir","showLentes","showGlass","setCarrito","showCarrito"])
    },
    mounted() {
      let self = this;
      this.getGlass();
      this.getCarrito();
      //console.log("mountedddddd");
    },
}


  

</script>

