function calcu() {

  var efntd = Number(document.getElementById('efntd').value) ;
  var efctrl = Number(document.getElementById('efctrl').value);
  var eftt = document.getElementById('eftt').value =  Number((efntd)*0.4+(efctrl*0.6));

  var tcntd = Number(document.getElementById('tcntd').value) ;
  var tcctrl = Number(document.getElementById('tcctrl').value);
  var tctt = document.getElementById('tctt').value =  Number((tcntd)*0.4+(tcctrl*0.6));

  var epntd = Number(document.getElementById('epntd').value) ;
  var epctrl = Number(document.getElementById('epctrl').value);
  var eptt = document.getElementById('eptt').value =  Number((epntd)*0.4+(epctrl*0.6));

  var tthntd = Number(document.getElementById('tthntd').value) ;
  var tthctrl = Number(document.getElementById('tthctrl').value);
  var tthtt = document.getElementById('tthtt').value =  Number((tthntd)*0.4+(tthctrl*0.6));

  var asvntd = Number(document.getElementById('asvntd').value) ;
  var asvctrl = Number(document.getElementById('asvctrl').value);
  var asvtt = document.getElementById('asvtt').value =  Number((asvntd)*0.4+(asvctrl*0.6));

  var lcsntd = Number(document.getElementById('lcsntd').value) ;
  var lcsctrl = Number(document.getElementById('lcsctrl').value);
  var lcstt = document.getElementById('lcstt').value =  Number((lcsntd)*0.4+(lcsctrl*0.6));

  var mnntp = Number(document.getElementById('mnntp').value) ;
  var mnctrl = Number(document.getElementById('mnctrl').value);
  var mntt = document.getElementById('mntt').value =  Number((mnntp)*0.4+(mnctrl*0.6));









      var eng1tt = Number(document.getElementById('eng1tt').value);


      var tpasvtt = Number(document.getElementById('tpasvtt').value);


      var tpeptt = Number(document.getElementById('tpeptt').value) ;
	var tplcstt = Number(document.getElementById('tplcstt').value) ;
	var tpeftt = Number(document.getElementById('tpeftt').value) ;



      document.getElementById("tt").innerHTML = ((2*eftt)+(2*tctt)+(2*eptt)+(2*tthtt)+(2*asvtt)+(2*lcstt)+(2*mntt)+tpasvtt+eng1tt+tpeptt+tplcstt+tpeftt)/19;



}
