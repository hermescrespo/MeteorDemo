/**
 * Created by Hermes Crespo on 16/05/2016.
 */

// var postsData = [
//     {
//         title: 'Introducing Telescope',
//         url: 'http://sachagreif.com/introducing-telescope/'
//     },
//     {
//         title: 'Meteor',
//         url: 'http://meteor.com'
//     },
//     {
//         title: 'The Meteor Book',
//         url: 'http://themeteorbook.com'
//     }
// ];
// Template.postsList.helpers({
//     posts: function () {
//         return Posts.find();
//     }
// });

Template.postsList.helpers({
    posts: function(){
        //Filtrando datos en el cliente
        return Posts.find({author: 'VirtualSoft Academy', url: 'http://www.virtualsoftacademy.com/meteor'});
    }
});

