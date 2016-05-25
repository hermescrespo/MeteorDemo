/**
 * Created by VirtualSoft Academy on 24/05/2016.
 */

//Routing: Configurando el router, se cargará el layout por defecto, a menos que se especifique otro
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading', //Plantilla que se mostrará durante la carga de datos
    waitOn: function () {
        return Meteor.subscribe('posts'); //Esperando a que estén listos los datos en el cliente para comenzar a renderizar
    },
    notFoundTemplate: 'notFound' //Configurando plantilla de error 404 en caso de encontrar ruta no válida
});

//Routing: Estableciendo que cuando se ingrese a la ruta principal, se renderice el template 'postsList'
Router.route('/', {name: 'postsList'});//postsList es también el nombre de la ruta

//Routing:  mapeando URLs de la forma /posts/<ID> hacia la plantilla postPage
Router.route('/posts/:_id', {
    name: 'postPage', //postPage es también el nombre de la ruta
    data: function () { //realizando el trabajo del helper y enviando los datos necesarios para renderizar
        return Posts.findOne(this.params._id);
    }
});

//Mostrar Plantilla de Error 404 cuando data devuelva un objeto falso (o null, false, undefined o vació).
Router.onBeforeAction('dataNotFound', {only: 'postPage'});

