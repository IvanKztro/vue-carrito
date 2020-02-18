<template>
    
   <nav id="navbar" class="navbar navbar-expand-lg navbar-light justify-content-center fixed-top" style="background-color: darkgray;">
		<h4 class="text-center">GlassShop</h4>
		<button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarBody" >
			<span class="navbar-toggler-icon"></span>
		</button>

		<div id="navbarBody" class="collapse navbar-collapse">
			<nav class="nav container  flex-column flex-lg-row text-center">
                <router-link to="/home" class="nav-link">Home</router-link>
			</nav>
			
		</div>
        <router-link  id="a_carrito" to="/carrito" class="nav-link text-center"  style="font-size: 20px;">
           <div class="row">
			<span class="nav-link fa fa-shopping-cart"></span>
			<span id="badgeCarrito" class="badge badge-primary">{{badgeCarrito}}</span>
            </div>
		</router-link>
	</nav>

</template>


<script>
import {mapState} from 'vuex'
export default {
    name: "navbar",
    props:{
        msg: String
	},
	computed:{
		...mapState(["badgeCarrito"])
	}
}
</script>