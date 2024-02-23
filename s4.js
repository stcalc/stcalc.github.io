function calcu() {


    var electrotd = Number(document.getElementById('electrotd').value) ;

   

    var electroctrl = Number(document.getElementById('electroctrl').value);

    var electrott = document.getElementById('electrott').value = Number((((electrotd)*4)+(electroctrl*6))/10);

  var electritd = Number(document.getElementById('electritd').value) ;

   

    var electrictrl = Number(document.getElementById('electrictrl').value);

    var electritt = document.getElementById('electritt').value = Number((((electritd)*4)+(electrictrl*6))/10);

  var anantd = Number(document.getElementById('anantd').value) ;

 

  var ananctrl = Number(document.getElementById('ananctrl').value);

  var anantp = Number(document.getElementById('anantp').value);

 

  var anantt = document.getElementById('anantt').value =  Number((anantd)*0.2+(ananctrl*0.6)+(anantp)*0.2);



  var rdmtd = Number(document.getElementById('rdmtd').value) ;


  var rdmctrl = Number(document.getElementById('rdmctrl').value);

  var rdmtp = Number(document.getElementById('rdmtp').value);

  

  var rdmtt = document.getElementById('rdmtt').value = Number((rdmtd)*0.2+(rdmctrl*0.6)+(rdmtp*0.2));


    var tstd = Number(document.getElementById('tstd').value) ;

   

    var tsctrl = Number(document.getElementById('tsctrl').value);

    var tstt = document.getElementById('tstt').value = Number((((tstd)*4)+(tsctrl*6))/10);

  var  mtrtp = Number(document.getElementById('mtrtp').value);
  var  mtrctrl = Number(document.getElementById('mtrctrl').value);

    var  mtrtt = document.getElementById('mtrtt').value = Number(((( mtrtp)*4)+( mtrctrl*6))/10);

  var infotp = Number(document.getElementById('infotp').value) ;

   

    var infoctrl = Number(document.getElementById('infoctrl').value);

    var infott = document.getElementById('infott').value = Number((((infotp)*4)+(infoctrl*6))/10);

  var termtt = Number(document.getElementById('termtt').value);
  var caott = Number(document.getElementById('caott').value);








      document.getElementById("tt").innerHTML = ((3*electrott)+(3*electritt)+(3*anantt)+(3*rdmtt)+(3*tstt)+(2*caott)+(2*infott)+(2*mtrtt)+(termtt))/19;



}
