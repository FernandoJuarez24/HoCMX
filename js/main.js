/*Desarrolado por Fernando Juárez Aldorica*/

/*Animacion Menu | Inicio*/
let botonResponsivo = document.querySelector('.botonResponsivo');
let menu = document.querySelector('.contenedorLista');
let contenedorMenu = document.querySelector('.menu');
let activador = true;


botonResponsivo.addEventListener('click', () => {
		//console.log('funciona');

		document.querySelector('.botonResponsivo i').classList.toggle('fa-times');

		if(activador){
			menu.style.left = '0';
			menu.style.transition = '0.5s';

			activador = false;
		}else{
			activador = false;

			menu.style.left = '-100%';
			menu.style.transition = '0.5s';

			activador = true;
		}
	}
);
/*Animacion Menu | Fin*/

/*Animacion Activado | Inicio*/
let enlaces = document.querySelectorAll('.listaLinks li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('activado');
   });
    event.target.classList.add('activado');
  });
});
/*Animacion Activado | Fin*/

/*Efecto Scroll | Inicio*/
let scrollPrevio = window.pageYOffset;
let home = document.querySelector('.home');

window.onscroll = () =>{
	let arriba = window.pageYOffset;
	
	if(arriba <= 600){
		contenedorMenu.style.borderBottom = 'none';

		home.style.right = '-100%';
	}else{
		contenedorMenu.style.borderBottom = '3px solid #8C0000';

		home.style.right = '15px';
		home.style.transition = '0.5s';
	}
}

home.addEventListener('click', () =>{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = '0';
});
/*Efecto Scroll | Fin*/

function clickAqui(){
	alert('Función en construcción, vuelve pronto');
	window.location.href = 'index.html#contacto';
}