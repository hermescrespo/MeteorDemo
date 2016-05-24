/**
 * Created by PlanificacionAdmin on 24/05/2016.
 */

//(1) publicamos los datos a mostrar al cliente...
Meteor.publish('posts', function () {
   return Posts.find({'author':'VirtualSoft Academy'});
});