function calcu() {
  var ph1ntd = Number(document.getElementById('ph1ntd').value) ;
  var ph1intr = Number(document.getElementById('ph1intr').value) ;
  var ph1ctrl = Number(document.getElementById('ph1ctrl').value);
  var ph1ntp = Number(document.getElementById('ph1ntp').value);
  var ph1nctp = Number(document.getElementById('ph1nctp').value);
  var ph1tt = document.getElementById('ph1tt').value =  Number((ph1ntd+ph1intr)*0.2+(ph1ctrl*0.6)+(ph1ntp*0.6+ph1nctp*0.4)*0.4);


  var ch1ntd = Number(document.getElementById('ch1ntd').value) ;
  var ch1intr = Number(document.getElementById('ch1intr').value) ;
  var ch1ctrl = Number(document.getElementById('ch1ctrl').value);
  var ch1ntp = Number(document.getElementById('ch1ntp').value);
  var ch1nctp = Number(document.getElementById('ch1nctp').value);
  var ch1tt = document.getElementById('ch1tt').value = Number((ch1ntd+ch1intr)*0.2+(ch1ctrl*0.6)+(ch1ntp*0.6+ch1nctp*0.4)*0.4);

  var info1ntd = Number(document.getElementById('info1ntd').value) ;
  var info1intr = Number(document.getElementById('info1intr').value) ;
  var info1ctrl = Number(document.getElementById('info1ctrl').value);
  var info1tt = document.getElementById('info1tt').value = Number(((info1ntd*4+info1intr*6)/5+info1ctrl)/2);


    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;
    var alg1intr = Number(document.getElementById('alg1intr').value) ;
    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);
    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd+alg1intr)*4)+(alg1ctrl*6))/10);


    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;
    var ana1intr = Number(document.getElementById('ana1intr').value) ;
    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);
    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd+ana1intr)*4)+(ana1ctrl*6))/10);


    var pro1ntd = Number(document.getElementById('pro1ntd').value) ;
    var pro1intr = Number(document.getElementById('pro1intr').value) ;
    var pro1ctrl = Number(document.getElementById('pro1ctrl').value);
    var pro1tt = document.getElementById('pro1tt').value = Number((((pro1ntd+pro1intr)*4)+(pro1ctrl*6))/10);


      var eng1ntd = Number(document.getElementById('eng1ntd').value) ;
      var eng1intr = Number(document.getElementById('eng1intr').value) ;
      var eng1ctrl = Number(document.getElementById('eng1ctrl').value);
      var eng1tt = document.getElementById('eng1tt').value = Number((((eng1ntd+eng1intr)*4)+(eng1ctrl*6))/10);

      var et1tt = Number(document.getElementById('et1tt').value) ;

      document.getElementById("tt").innerHTML = ((4*ph1tt)+(4*ch1tt)+(2*info1tt)+(2*alg1tt)+(3*ana1tt)+(2*pro1tt)+eng1tt+et1tt)/19;

}
