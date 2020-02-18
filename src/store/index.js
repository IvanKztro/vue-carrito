import Vue from 'vue'
import Vuex from 'vuex'
//import url from '../assets/lentes.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos : [],
    carrito: [],
    badgeCarrito : 0
  },
  mutations: {
    
    showGlass(state, lentes){
      state.productos = lentes;
    },
    showCarrito(state, car){
      state.carrito = car
      state.badgeCarrito = state.carrito.length
    }
    
  },
  actions: {
    
    addCarrito: async function( context, id ){
        let band = false;
        const json = await fetch("lentes.json")
        const lentes = await json.json()
        let producto = lentes.find((lente )=> lente.id == id)
        
        context.state.carrito.forEach( (pro, index) => {
            
            if(pro.id == id){
              context.state.carrito[index].cantidad++;
              band = true;
            }
        })

        if(!band){
          context.state.carrito.push(
          {
            id: producto.id, 
            nombre: producto.nombre, 
            precio: producto.precio, 
            src: producto.src, 
            cantidad: 1
          }
          )
          context.state.badgeCarrito = context.state.carrito.length;
        }
       
        
        localStorage.setItem("carritoshop", JSON.stringify(context.state.carrito))
        
      
        
    },
    getGlass: async function ( context ){
       const data = await fetch("lentes.json");
        let response =  await data.json();
       context.commit("showGlass",response);

    },
    deleteCarrito(context, index){
      context.state.carrito.splice(index,1);
      context.state.badgeCarrito -= 1;
      localStorage.setItem("carritoshop",JSON.stringify(context.state.carrito));
      
    },
    getCarrito(context){
      let car = JSON.parse(localStorage.getItem("carritoshop"));
      if(car != null){
        context.commit("showCarrito", car)
      }
    },
    aumentar(context, index){
      context.state.carrito[index].cantidad++;
      localStorage.setItem("carritoshop", JSON.stringify(context.state.carrito))
    },
    disminuir(context, index){
      if(context.state.carrito[index].cantidad <= 1 )
        {
          context.dispatch("deleteCarrito",index);
        }else{
          context.state.carrito[index].cantidad--;
          localStorage.setItem("carritoshop", JSON.stringify(context.state.carrito))
        }
      
    }
  }
})
/*
  
*/
