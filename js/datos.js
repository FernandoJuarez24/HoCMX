/*Desarrolado por Fernando Juárez Aldorica*/
	let transition = document.querySelector('.productos .contenedorProductos .imgCategorias img');
/*Cambio de Imagenes Datos | Inicio*/
/*Dato Red Skull*/
function cambioIMGDato1(){
	document.getElementById('redSkull').src='img/imgDatos/01-01.jpg'
	transition.style.transition = '0.5s';
}
function regresoIMGDato1(){
	document.getElementById('redSkull').src='img/imgDatos/01.jpg'
}

/*Dato Deadpool*/
function cambioIMGDato2(){
	document.getElementById('deadpool').src='img/imgDatos/02-02.jpg'
}
function regresoIMGDato2(){
	document.getElementById('deadpool').src='img/imgDatos/02.jpg'
}

/*Dato Constantine*/
function cambioIMGDato3(){
	document.getElementById('sting').src='img/imgDatos/03-03.jpg'
}
function regresoIMGDato3(){
	document.getElementById('sting').src='img/imgDatos/03.jpg'
}

/*NintendoStation*/
function cambioIMGDato4(){
	document.getElementById('play').src='img/imgDatos/04-04.jpg'
}
function regresoIMGDato4(){
	document.getElementById('play').src='img/imgDatos/04.jpg'
}

/*Play Station*/
function cambioIMGDato5(){
	document.getElementById('playStation').src='img/imgDatos/05-05.jpg'
}
function regresoIMGDato5(){
	document.getElementById('playStation').src='img/imgDatos/05.jpg'
}
/*Cambio de Imagenes Datos | Fin*/