<template>
    <div class="mt-5 pt-3">
        <div id="carouselGlass" class="carousel slide" data-ride="carousel">
		<ol class="carousel-indicators">
		  <li data-target="#carouselGlass" data-slide-to="0" class="active"></li>
		  <li data-target="#carouselGlass" data-slide-to="1"></li>
		  <li data-target="#carouselGlass" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner" >
		  <div class="carousel-item active">
			<img src="img/principal_lentes.jpg" class="d-block w-100 " alt="..." >
		  </div>
		  <div class="carousel-item">
			<img src="img/principal_lentes_2.jpg" class="d-block w-100" alt="...">
		  </div>
		  <div class="carousel-item">
			<img src="img/principal_lentes_3.jpg" class="d-block w-100" alt="...">
		  </div>
		</div>
		<a class="carousel-control-prev " href="#carouselGlass" role="button" data-slide="prev">
		  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		  <span class="sr-only">Previous</span>
		</a>
		<a class="carousel-control-next " href="#carouselGlass" role="button" data-slide="next">
		  <span class="carousel-control-next-icon" aria-hidden="true"></span>
		  <span class="sr-only">Next</span>
		</a>
	  </div>
        
    </div>
</template>
<script>
export default {
    name: "carousel"
}
</script>