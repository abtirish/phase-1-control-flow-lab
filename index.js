function scuberGreetingForFeet(depth){
  if (depth <= 400) {
    return 'This one is on me!'
  } else if (depth > 400 && depth <= 2000) {
    return 'That will be twenty bucks.'
  } else if (depth <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else 
    return 'No can do.'
}

console.log(scuberGreetingForFeet(350));
console.log(scuberGreetingForFeet(400));
console.log(scuberGreetingForFeet(2000));
console.log(scuberGreetingForFeet(2500));
console.log(scuberGreetingForFeet(2501));


function ternaryCheckCity(city){
  return city === 'NYC'? 'Ok, sounds good.':'No go.'
}

console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Pittsburgh'));
console.log(ternaryCheckCity('Denver'));

function switchOnCharmFromTip(reaction){
  switch(reaction){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('Uhhh'));
