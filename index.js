function scuberGreetingForFeet(length){
// Write your code here!

if (length < 400)
  return 'This one is on me!';
else if (length > 2000 && length < 2500)
  return 'I will gladly take your thirty bucks.';
else if (length > 2500) 
  return 'No can do.';
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  return tip === 'generous' ? 'Thank you so much.' 
         : tip === 'not as generous' ? 'Thank you.'
         : 'Bye.';
}