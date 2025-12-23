function calcu() {

  var ph1ntd = Number(document.getElementById('ph1ntd').value) ;

 

  var ph1ctrl = Number(document.getElementById('ph1ctrl').value);

  var ph1ntp = Number(document.getElementById('ph1ntp').value);

 

  var ph1tt = document.getElementById('ph1tt').value =  Number((ph1ntd)*0.2+(ph1ctrl*0.6)+(ph1ntp)*0.2);





  var ch1ntd = Number(document.getElementById('ch1ntd').value) ;


  var ch1ctrl = Number(document.getElementById('ch1ctrl').value);

  var ch1ntp = Number(document.getElementById('ch1ntp').value);

  

  var ch1tt = document.getElementById('ch1tt').value = Number((ch1ntd)*0.2+(ch1ctrl*0.6)+(ch1ntp*0.2));






    var alg1ntd = Number(document.getElementById('alg1ntd').value) ;

   

    var alg1ctrl = Number(document.getElementById('alg1ctrl').value);

    var alg1tt = document.getElementById('alg1tt').value = Number((((alg1ntd)*4)+(alg1ctrl*6))/10);




    var algg1tt = Number(document.getElementById('algg1tt').value) || 0;




    var ana1ntd = Number(document.getElementById('ana1ntd').value) ;

   var ana1ntp = Number(document.getElementById('ana1ntp').value) ;

    var ana1ctrl = Number(document.getElementById('ana1ctrl').value);

    var ana1tt = document.getElementById('ana1tt').value = Number((((ana1ntd)*2)+((ana1ntp)*2)+(ana1ctrl*6))/10);


    var ana2ntd = Number(document.getElementById('ana2ntd').value) ;

   

    var ana2ctrl = Number(document.getElementById('ana2ctrl').value);

    var ana2tt = document.getElementById('ana2tt').value = Number((((ana2ntd)*4)+(ana2ctrl*6))/10);



    var ana3ntd = Number(document.getElementById('ana3ntd').value) ;

   

    var ana3ctrl = Number(document.getElementById('ana3ctrl').value);

    var ana3tt = document.getElementById('ana3tt').value = Number((((ana3ntd)*4)+(ana3ctrl*6))/10);





      var eng1tt = Number(document.getElementById('eng1tt').value);




      var eng2tt = Number(document.getElementById('eng2tt').value);





      document.getElementById("tt").innerHTML = ((3*ph1tt)+(3*ch1tt)+(3*ana1tt)+(2*ana2tt)+(2*ana3tt)+(3*alg1tt)+algg1tt+eng1tt+eng2tt)/19;



}
