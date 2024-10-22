function calcu() {

  var ph1ntd = Number(document.getElementById('ph1ntd').value) ;

 

  var ph1ctrl = Number(document.getElementById('ph1ctrl').value);

  var ph1ntp = Number(document.getElementById('ph1ntp').value);

 

  var ph1tt = document.getElementById('ph1tt').value =  Number((ph1ntd)*0.2+(ph1ctrl*0.6)+(ph1ntp)*0.2);





  var ch1ntd = Number(document.getElementById('ch1ntd').value) ;


  var ch1ctrl = Number(document.getElementById('ch1ctrl').value);

  var ch1ntp = Number(document.getElementById('ch1ntp').value);

  

  var ch1tt = document.getElementById('ch1tt').value = Number((ch1ntd)*0.2+(ch1ctrl*0.6)+(ch1ntp*0.2));










  var chh1ntd = Number(document.getElementById('chh1ntd').value) ;


  var chh1ctrl = Number(document.getElementById('chh1ctrl').value);

  var chh1ntp = Number(document.getElementById('chh1ntp').value);

  

  var chh1tt = document.getElementById('chh1tt').value = Number((chh1ntd)*0.2+(chh1ctrl*0.6)+(chh1ntp*0.2));

  





    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

   

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*4)+(alg1ctrl*6))/10);


    var algg1ntd = Number(document.getElementById('algg1ntd').value) ;

   

    var algg1ctrl = Number(document.getElementById('algg1ctrl').value);

    var algg1tt = document.getElementById('algg1tt').value = Number((((algg1ntd)*4)+(algg1ctrl*6))/10);



    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

   

    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd)*4)+(ana1ctrl*6))/10);





    var pro1ntd = Number(document.getElementById('pro1ntd').value) ;

  

    var pro1ctrl = Number(document.getElementById('pro1ctrl').value);

    var pro1tt = document.getElementById('pro1tt').value = Number((((pro1ntd)*4)+(pro1ctrl*6))/10);






      var eng1tt = Number(document.getElementById('eng1tt').value);





      var et1tt = Number(document.getElementById('et1tt').value) ;



      document.getElementById("tt").innerHTML = ((4*ph1tt)+(4*ch1tt)+(2*chh1tt)+(2*algg1tt)+(2*alg1tt)+(2*ana1tt)+(pro1tt)+eng1tt+et1tt)/19;



}
