function scuberGreetingForFeet(someValue){
 let result
 if (someValue <= 400) {
   result = "This one is on me!"
 } else if (someValue > 2000 && someValue < 2500) {
   result = "I will gladly take your thirty bucks."
 } else if (someValue > 2500) {
   result = "No can do."
 }
 return result
}

function ternaryCheckCity(somePlace){
  
  return (somePlace === ("NYC") ? "Ok, sounds good." : "No go.")
}

function switchOnCharmFromTip(someTip){
  let reply;
  switch (someTip) {
    case 'generous':
      reply = 'Thank you so much.';
      break;
    case 'not as generous':
      reply = 'Thank you.';
      break;
    default:
      reply = 'Bye.';
      break;
  }
  return reply
}