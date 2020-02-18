<template>
    <div class="mt-5 ">
		<div v-for="(producto, index) in carrito" :key=index >
			<div class="align-items-center text-center col-12 row bg- ml-lg-3">
				<div class=" col-3 col-lg-3 ml-lg-4  bg- ">
					<img :src="producto.src" class="img_carrito" style="" alt="">
				</div>
				<div class="col-6 col-lg-4 ml-lg-5 pl-4 bg- ">
					<span >{{producto.nombre}}</span>
					<div class="row  flex-sm-column">
						<div>
						<button class="btn btn-primary btn-sm" @click="disminuir(index)">-</button>
						<input type="text" :value="producto.cantidad" class="input_Cantidad form-control-sm" disabled>
						<button class="btn btn-primary btn-sm" @click="aumentar(index)">+</button>
						</div>
						<div class="info_cantidad_precio">
							<span>{{producto.cantidad}}</span> x <span> $ {{producto.precio}}</span>
						</div>
					</div>
					
				</div>
				<div  class="col-2  ml-2 col-md-4 col-lg-2" style="background-color:;">
					<div class="p-2">
					<button  class=" btn btn-danger btn-sm " @click="deleteCarrito(index)"><span class="fa fa-trash"></span></button>
					</div>
					<div class="mt-auto p-2">
					<span>${{producto.precio *producto.cantidad}}</span>
					</div>
				</div> 
			</div>
			<hr>
		</div>			
    </div>
</template>


<script>
import {mapActions, mapMutations, mapState} from "vuex";
export default {
	name: "clenteCarrito",
	computed: {
		...mapState(["carrito"])
	},
	methods: {
		...mapMutations([""]),
		...mapActions(["deleteCarrito","aumentar","disminuir"])
	}
	
}
</script>