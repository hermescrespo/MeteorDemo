/**
 * Created by PlanificacionAdmin on 24/05/2016.
 */
Router.configure({
    layoutTemplate: 'layout', waitOn: function () {
        return Meteor.subscribe('posts');
    }
});

Router.route('/', {name: 'postsList'});

