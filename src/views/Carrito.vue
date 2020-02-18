<template>
    <div class=" mt-3 pt-1 ">
        
		<lentesCarrito class="mt-4 pt-1"/>
        
    </div>
</template>
<script>
import lentesCarrito from"@/components/LentesCarrito.vue"
import {mapActions, mapMutations, mapState} from "vuex";
export default {
	name: "carrito",
	components: {
		lentesCarrito
	},
	computed: {
		...mapState["carrito"]
	}
}
</script>