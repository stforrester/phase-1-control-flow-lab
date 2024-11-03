function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  if (rideDistance <= 400) {
    return 'This one is on me!';
  }
  else if ((rideDistance > 400)&&(rideDistance <= 2000)) {
    return 'That will be twenty bucks.';
  }
  else if ((rideDistance > 2000)&&(rideDistance <= 2500)) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(inputParam){
  // Write your code here!
  return inputParam === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipGenerosity){
  // Write your code here!
  switch (tipGenerosity) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}
