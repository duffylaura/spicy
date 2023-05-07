function rgb(r, g, b){
  var input = [r, g, b];
  var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  var output = []; 
  
  for (i=0; i < input.length; i++) {
    if (input[i]<256 && input[i]>=0) {
    let x = Math.floor(input[i]/16);
    let y = Math.floor((input[i])%16); 
    let z = hex[x]+hex[y]; 
    output.push(z); 
    }
    if (input[i]>= 256){
      output.push('FF'); 
    }
    if (input[i]<0) {
      output.push('00')
    }
  }
  console.log(output.join(''));
  return (output.join(''));
}

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

rgb(0, 0, 0) // '000000'
rgb(0, 0, -20) // '000000'
rgb(300,255,255) // 'FFFFFF'
rgb(173,255,47) // 'ADFF2F'