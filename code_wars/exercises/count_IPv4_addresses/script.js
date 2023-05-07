function ipsBetween(first, last){
    //include first address, exclude last address
    var x = ipToInt(first); 
    var y = ipToInt(last); 
    var z = Math.abs(x-y); 
    return z; 
  }

  function ipToInt(ip) {
    const parts = ip.split('.');
    const result = (parseInt(parts[0]) << 24) +
                   (parseInt(parts[1]) << 16) +
                   (parseInt(parts[2]) << 8) +
                   parseInt(parts[3]);
    return result >>> 0; // ensure the result is an unsigned 32-bit integer
  }


ipsBetween("10.0.0.0", "10.0.0.50"); // 50
ipsBetween("10.0.0.0", "10.0.1.0"); //256
ipsBetween("20.0.0.10", "20.0.1.0"); //246
ipsBetween ("150.0.0.0", "150.0.0.1"); // 1 
ipsBetween ("150.0.0.0", "150.0.0.1") //  1
ipsBetween ("10.0.0.0", "10.0.0.50") // 50 
ipsBetween ("20.0.0.10", "20.0.1.0") // 246
ipsBetween ("10.11.12.13", "10.11.13.0") // 243
ipsBetween ("160.0.0.0", "160.0.1.0") // 256
ipsBetween ("170.0.0.0", "170.1.0.0") // 65536

ipsBetween ("50.0.0.0", "50.1.1.1") // 65793);
ipsBetween ("180.0.0.0", "181.0.0.0") // 16777216);
ipsBetween ("1.2.3.4", "5.6.7.8") // 67372036);
ipsBetween ("0.0.0.0", "255.255.255.255") //  2 ** 32 - 1);

