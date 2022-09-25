const input = 'The Whales World'; // the start phrase to be converted in Whales Talk
const vowels = ['a','e','i','o','u']; //the Whales Talk vowels
const resultArray = [];//convert start phrase
for (let i=0; i<input.length; i++) {
  //console.log('i is '+ i); - check the loop
  if (input[i] === 'e' || input[i] === 'u') {
  resultArray.push (input[i]); // - miltiple vowels e & u twice
 }
  for (let k=0; k<vowels.length; k++){
  //console.log('k is '+ k); - check the second loop
  if (input[i] === vowels[k]) {
    resultArray.push (input[i]); 
  }
  // - pick up the vowels from the start phrase
  }
}
console.log (resultArray.join('').toUpperCase());
//console log result as a one uppercase word 
