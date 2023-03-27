const categoriaRopa = prompt("Introduce la categoria de la prenda: ");
let precioPrenda = Number(prompt(`Introduce precio de la prenda de la categoria ${categoriaRopa}`));
let descuento;

if(categoriaRopa.toLowerCase() === "camisetas"){
	
	descuento=precioPrenda*0.05;
	precioPrenda-=descuento;
	alert(`El precio final de la sección ${categoriaRopa} con la rebaja de un 5% es ${precioPrenda} €`);
	
} else if (categoriaRopa.toLowerCase() === "pantalones"){
	
	descuento = precioPrenda*0.1;
	precioPrenda-=descuento;
	alert(`El precio final de la sección ${categoriaRopa} con rebaja de un 10% es ${precioPrenda} €`);
	
} else if(categoriaRopa.toLowerCase() === "chaquetones"){
	
	descuento = precioPrenda*0.5;
	precioPrenda-=descuento;
	alert(`El precio final de la sección ${categoriaRopa} con rebaja de un 10% es ${precioPrenda} €`);
	
} else if(categoriaRopa.toLowerCase() === "ropa interior")
	alert(`El precio de la sección ${categoriaRopa} no tiene rebaja el precio sigue siendo ${precioPrenda} €`);
else{
	
	descuento = precioPrenda*0.02;
	precioPrenda-=descuento;
	alert(`El precio para el resto de secciones tiene rebaja del 2%, su precio es ${precioPrenda} €`)

}

	

