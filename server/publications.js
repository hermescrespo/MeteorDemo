/**
 * Created by VirtualSoft Academy on 24/05/2016.
 */

//(1) Publicamos los datos a mostrar al cliente...
Meteor.publish('posts', function () {
   return Posts.find({'author':'VirtualSoft Academy'});
});