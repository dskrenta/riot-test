// javascript

var api = riot.observable();

api.thing = function() {
  api.trigger('thing');
}
