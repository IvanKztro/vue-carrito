<template>
    <div class=" ">
        <carousel/>
        <pre class="subitulosh4 mt-5 container">Promociones</pre>
		<hr>
            <div class="container">
                <div class="row">
                <div v-for="(lente, index) in productos" :key="index" class="col-lg-3 col-sm-4 my-2 py-1" >
                    <div class="card  "  style=" border: 1px solid #BDBDBD !important;">
                        <img class="card-img-top mx-auto" :src ="`${publicPath}${lente.src}`" alt=""  style=" border: 1px solid #BDBDBD !important;">
                        
                        <div class="card-body" >
                            <h3 class="card-title">{{lente.nombre}}</h3>
                            <p>${{lente.precio}}</p>
                            
                            <a  class="btn btn-success form-control" @click="addCarrito(lente.id)">Agregar</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>	
    </div>
</template>

<script>

import {mapState, mapMutations, mapActions} from "vuex";
import carousel from "@/components/Carousel.vue"
//const imageTemplate = req(`./${this.activeCharacter.replace('-', '_')}.png`);
export default {
    computed: {
        ...mapState(["productos","carrito"])
    },
     data () {
    return {
      
       publicPath: process.env.BASE_URL
    }
  },
    methods:{
        ...mapActions([ "addCarrito", "viewLentes","getGlass"]),
        ...mapMutations(["aumentar","disminuir","showLentes","showGlass"])
    },
    components:{
        carousel
    }
        /*,
    mounted: async function( context ){
      const data = await fetch("../assets/lentes.json")
      
      const lentesJ = await data.json();
     // console.log(data.text())
     // context.commit("showGlass", lentesJ)
    }*/
}
</script>

