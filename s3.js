function calcu() {


    var ana3td = Number(document.getElementById('ana3td').value) ;

   

    var ana3ctrl = Number(document.getElementById('ana3ctrl').value);

    var ana3tt = document.getElementById('ana3tt').value = Number((((ana3td)*4)+(ana3ctrl*6))/10);

  var anantd = Number(document.getElementById('anantd').value) ;

 

  var ananctrl = Number(document.getElementById('ananctrl').value);

  var anantp = Number(document.getElementById('anantp').value);

 

  var anantt = document.getElementById('anantt').value =  Number((anantd)*0.2+(ananctrl*0.6)+(anantp)*0.2);





  var ovtd = Number(document.getElementById('ovtd').value) ;


  var ovctrl = Number(document.getElementById('ovctrl').value);

  var ovtp = Number(document.getElementById('ovtp').value);

  

  var ovtt = document.getElementById('ovtt').value = Number((ovtd)*0.2+(ovctrl*0.6)+(ovtp*0.2));



  var mdftd = Number(document.getElementById('mdftd').value) ;


  var mdfctrl = Number(document.getElementById('mdfctrl').value);

  var mdftp = Number(document.getElementById('mdftp').value);

  

  var mdftt = document.getElementById('mdftt').value = Number((mdftd)*0.2+(mdfctrl*0.6)+(mdftp*0.2));


    var mrtd = Number(document.getElementById('mrtd').value) ;

   

    var mrctrl = Number(document.getElementById('mrctrl').value);

    var mrtt = document.getElementById('mrtt').value = Number((((mrtd)*4)+(mrctrl*6))/10);



  var infott = Number(document.getElementById('infott').value);
  


  













  
  var destt = Number(document.getElementById('destt').value);




 var engtd = Number(document.getElementById('engtd').value) ;

   

    var engctrl = Number(document.getElementById('engctrl').value);

    var engtt = document.getElementById('engtt').value = Number((((engtd)*4)+(engctrl*6))/10);










      document.getElementById("tt").innerHTML = ((3*ana3tt)+(3*anantt)+(3*ovtt)+(3*mdftt)+(2*mrtt)+(2*infott)+(destt)+(2*engtt))/19;



}
