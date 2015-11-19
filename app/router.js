import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tasks', function(){
    this.route('task',{path:"/:id"});
  })
});

export default Router;
