function humanReadable (seconds) {
  var hr = (Math.floor(seconds/3600)).toString();
  var min = ((Math.floor(seconds/60))%60).toString(); 
  var sec = (Math.floor(seconds % 60)).toString();

  if (hr.length === 1) {hr = '0' + hr};
  if (min.length === 1) {min = '0' + min}; 
  if (sec.length === 1) {sec = '0'+sec};

  var arr = [hr, min, sec]; 
  console.log(arr.join(':'));
  return (arr.join(':'));
}

//                   // HR : MIN  : SEC 
humanReadable(0); // '00:00:00'
humanReadable(59); //'00:00:59'    
humanReadable(60); //'00:01:00'    
humanReadable(90); // '00:01:30'   

humanReadable(3599); // '00:59:59'   
humanReadable(3600); // '01:00:00'   
humanReadable(45296); // '12:34:56'  

//all correct 
humanReadable(86399); //'23:59:59'
humanReadable(86400); // '24:00:00'
humanReadable(359999); // '99:59:59'

