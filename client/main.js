// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';
//
// Template.hello.onCreated(function helloOnCreated() {
//   // inicializando el contador en 0
//   this.contador = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   contadorTemplate() {
//     return Template.instance().contador.get();
//   }
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // incrementando el contador cuando el botón es presionado
//     instance.contador.set(instance.contador.get() + 1);
//   }
// });
Session.set('pageTitle', 'Microscopio');

Tracker.autorun(function() {
    console.log('El título almacenado en la sesión es: '+Session.get('pageTitle'));
});