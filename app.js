let peliculas = ['jurasic park', 'el padrino','forest gump','top gun', 'terminator', 'rapidos y furiosos'];
let nombre = prompt('ingrese el nombre de la pelicula que quiere ver');
if (peliculas.includes(nombre)){
    alert('la pelicula esta en cartelera');
} else alert('no esta en cartelera')

let agregarPeli = prompt('Dejanos que pelicula te gustaria agregar!')
    peliculas.push(agregarPeli)
    document.write('Peliculas disponibles ' + peliculas)

