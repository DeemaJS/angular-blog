function reduceArrayToAverageValue(){
let sum = 0;
for( const i = 0; i < input.length; i++ ){
    sum += parseInt( input[i], 10 );
    console.log(sum)
return (sum/input.length)
}
}
const input = [25.4, 23.8, 45.27, 41.54]
const average = input
  .reduce(reduceArrayToAverageValue, 0)
