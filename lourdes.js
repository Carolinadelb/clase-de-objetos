const dog = {
  //key:value (propiedad y valor que tiene esa propiedad)
  raza: 'quiltro',
  peso: 15,
  nombre: 'Suave Lomito',
  color: 'negro',
  
}

/* 
[ ["raza", "quiltro"], ["peso", 5], ["nombre": "Suave Lomito"], ["color": "negro"] ] 
lulu lo hace con for máas otro gor 
  */

  Object.entries(dog)
   //y saldrá así:
   /*(4) [Array(2), Array(2), Array(2), Array(2)]
0
:
(2) ["raza", "quiltro"]
1
:
(2) ["peso", 15]
2
:
(2) ["nombre", "Suave Lomito"]
3
:
(2) ["color", "negro"]
length
:
4
__proto__
:
Array(0)*/