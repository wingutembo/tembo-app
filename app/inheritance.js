import Ember from 'ember';
import Student from './student'

export default function (){

  var myUser = Student.create();
  myUser.firstName= "Jane";
  myUser.lastName = "Doe";
  myUser.say('hi');

}
