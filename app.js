const weather = require('./weather.js')

const nombreCiudad = 'Torreon'



weather.ciudad(nombreCiudad, function(error, response) {
  if(error) {
    console.log(error)
  } else {
    console.log(response.name)
    weather.tiempo(response.lat, response.long, function(error, response) {
      if(error) {
        console.log(error)
      } else {
        console.log(response)
      }
    })
  }
})