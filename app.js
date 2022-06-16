let peliculas = ['jurasic park', ' el padrino' , ' forest gump','top gun', ' terminator', ' rapidos y furiosos '];
let nombre = prompt('ingrese el nombre de la pelicula que quiere ver');
if (peliculas.includes(nombre)){
    alert('la pelicula esta en cartelera');
} else alert('no esta en cartelera')

    function agregar(nombre) {
      peliculas.push(nombre)
      return document.write('Peliculas disponibles: ' + peliculas)
    }
let consulta = prompt('te gustaria agregar una peli?')
if(consulta == 'si'){
agregar(prompt('dejanos que pelicula te gustaria agregar'))}
else document.write('Peliculas disponibles: ' + peliculas)
