const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');             //requiero el motor de plantillas
//initiliazations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));        // para decirle a node que mi carpeta views esta en src
app.engine('.hbs', exphbs ({                            //hbs==handlebars
defaultLayout: 'main',                                  //estas propiedades nos siven para saber de que manera vamos a utilizar las vistas
layoutsDir: path.join(app.get('views'), 'layouts'),    //obten la direccion de la carpeta views y concatelano con layouts
partialsDir: path.join(app.get('views', 'partials')),  //partial son pequeñas partes de html que podemos reutilizar en cualquier vista (ejemplo:Formulario de contacto)
extname: '.hbs';                                             //sirve para colocar que extension van a tener nuestros archivos
}                               

)    );                              
//midlewares 

//global variables

//Routes

//static files

//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });