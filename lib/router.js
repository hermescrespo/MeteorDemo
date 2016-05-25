/**
 * Created by VirtualSoft Academy on 24/05/2016.
 */

//Routing: Configurando el router, se cargará el layout por defecto, a menos que se especifique otro
Router.configure({
    layoutTemplate: 'layout', waitOn: function () {
        return Meteor.subscribe('posts'); //Esperando a que estén listos los datos en el cliente para comenzar a renderizar
    }
});

//Routing: Estableciendo que cuando se ingrese a la ruta principal, se renderice el template 'postsList'
Router.route('/', {name: 'postsList'});

