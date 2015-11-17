export default  Ember.Object.extend(
{
  firstName: "",
  lastName: "",
  name: function(){
    console.log("fullName computed property called");
    return this.get('firstName') + " " + this.get('lastName');
  }.property('lastName'),
  say(thing) {
    var name = this.get('name');
    alert(`${name} says: ${thing}`);
  }
});
