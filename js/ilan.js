// JavaScript Document
var topla=document.getElementsByClassName("topla");
var anahtar=document.getElementsByClassName("anahtar");
var icon=document.getElementsByClassName("glyphicon");
var acildi=document.getElementsByClassName("acildi");
acilma ='<div class="acildi"></div>';
var z=[0,0,0,0,0,0,0,0,0];
function ac(x){ 
	  if(z[x]==0){
		    $( topla.item(x) ).append( acilma );
			icon.item(x).style.transform="rotate(180deg)";
			z[x]=1;
		  }
	  else{     
	              say=acildi.length;
				  topla.item(x).removeChild(acildi.item(say));
			      icon.item(x).style.transform="rotate(0deg)";
			      z[x]=0;
	      }
	}
// JavaScript Document
onay1=true;
onay2=true;
onay=true;
var bilgi=new Array();
bilgi[0]='<form><ul class="olusan">\
          <li class="baslik">Cinsiyet</li>\
          <li><input type="checkbox" class="c"><font>Erkek </font><input type="checkbox" class="c"><font>Kadın</font></li>\
          <li class="baslik">Yaş Aralığı</li>\
          <li><input type="text"></li>\
          <li class="baslik">Uyruk</li>\
          <li><input type="text"></li>\
          <li class="baslik">Medeni Durum</li>\
          <li><input type="text"></li>\
          <li class="baslik">Sürücü Belgesi</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[1]='<form><ul class="olusan">\
          <li class="baslik">Fiirma Sektörü</li>\
          <li><input type="text"></li>\
          <li class="baslik">Departman</li>\
          <li><input type="text"></li>\
		  <li class="baslik">Pozisyon</li>\
          <li><input type="text"></li>\
		  <li class="baslik">Çalışma Şekli</li>\
          <li><input type="checkbox"><font>Staj</font><input type="checkbox"><font>Yarı Zaman</font><input type="checkbox"><font>Serbest Çalışma</font></li>\
		  <li class="baslik">Personel Sayısı</li>\
          <li><input type="text"></li>\
		  <li class="baslik">İl</li>\
          <li><input type="text"></li>\
		  <li class="baslik">İlçe</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
var sec = document.getElementsByClassName("sec");
var c = document.getElementsByClassName("c");
for (i=0;i<sec.length;i++){
	  if (i==0){
			  	sec.item(i).onclick= function(){
                   if(onay1){
					      $( '#olustur' ).append(bilgi[0] );
						  onay1=false;
						  c.item(0).onclick=function(){
							    if(c.item(0).checked == true){$( '.olusan' ).append( '<li class="baslik asker">Askeri Durum</li><li class="asker text"><input type="text"></li>' );}
								else{$( '.asker' ).remove( );}
							  }
					   }
              	}
			}
	  else if(i==1){
		       sec.item(i).onclick= function(){
                   if(onay2){
					      $( '#olustur' ).append(bilgi[1] );
						  onay2=false;
					   }
              	}
		  }
	}