'use strict';

// document.write('Hello frm js');
// alert('welcome haya');

var username =prompt('What is your name?');
var gender =prompt('please enter your gender');
if (gender.toLocaleLowerCase()=="male" || gender.toLocaleLowerCase()=="female" ){
    alert('accepted vale.');
}

else{alert ('unaccepte value!');};//ifElse

var age=prompt('please enter your age');
if (age<=0) {alert('age is less than or equal to zero!')}
else {alert('age is reasonable');}; //ifElse

var conf=confirm('do you want to skip the welcoming message?');




if (gender.toLocaleLowerCase()=="male") {
    alert('welcome Mr' + username);
  } else if(gender.toLocaleLowerCase()=="female"){
    alert('welcome Ms'+"  "   +username);
  }
  else{alert('welcome'+' '+username);};//ifElse

  

