// JavaScript Document
onay1=true;
onay2=true;
onay=true;
var bilgi=new Array();
bilgi[0]='<form><ul class="olusan">\
          <li class="baslik">Cinsiyet</li>\
          <li><input type="radio" name="cnsyt" class="c">Erkek <input type="radio" name="cnsyt" class="c">Kadın</li>\
          <li class="baslik">Doğum Tarihi</li>\
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
          <li class="baslik">Adres</li>\
          <li><input type="text"></li>\
          <li class="baslik">Mail</li>\
          <li><input type="mail"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[2]='<form><ul class="olusan">\
          <li class="baslik">Eğitim Pozisyonu</li>\
          <li><input type="text"></li>\
          <li class="baslik">Üniversite</li>\
          <li><input type="text"></li>\
		  <li class="baslik">Başlangoç Tarihi</li>\
          <li><input type="text"></li>\
          <li class="baslik">Bitiş Tarihi</li>\
          <li><input type="text"></li>\
		  <li class="baslik">Diploma Notu</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[3]='<form><ul class="olusan">\
          <li class="baslik">Firma Adı</li>\
          <li><input type="text"></li>\
          <li class="baslik">Pozisyon</li>\
          <li><input type="text"></li>\
          <li class="baslik">Başlangıç Tarihi</li>\
          <li><input type="text"></li>\
          <li class="baslik">Bitiş Tarihi</li>\
          <li><input type="text"></li>\
		  <li class="baslik">Çalışma Şekli</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[4]='<form><ul class="olusan">\
          <li class="baslik">Yapancı Dil</li>\
          <li><input type="text"></li>\
          <li class="baslik">Seviyesi</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[5]='<form><ul class="olusan">\
          <li class="baslik">Bilgisayar Bilgisi</li>\
          <li><input type="text"></li>\
          <li class="baslik">Seviyesi</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[6]='<form><ul class="olusan">\
          <li class="baslik">Seltifika Adı</li>\
          <li><input type="text"></li>\
          <li class="baslik">Seltifika Tarihi</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[7]='<form><ul class="olusan">\
          <li class="baslik">Proje Adı</li>\
          <li><input type="text"></li>\
          <li class="baslik">Proje Tarihi</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[8]='<form><ul class="olusan">\
          <li class="baslik">Sosyal Aktivite</li>\
          <li><input type="text"></li>\
          <li class="baslik">Seviyesi</li>\
          <li><input type="text"></li>\
		  </ul>\
		  <div class="onay"><input type="submit" value="Kaydet" class="scn"><input type="submit" value="Vazgeç" class="scn"></div>\
		  </form>';
bilgi[9]='<form><ul class="olusan">\
          <li class="baslik">Ad Soyadı</li>\
          <li><input type="text"></li>\
          <li class="baslik">Çalıştığı Firma</li>\
          <li><input type="text"></li>\
		  <li class="baslik">İrtibatı</li>\
          <li><input type="text"></li>\
          <li class="baslik">Numarası</li>\
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
							    if(onay){$( '.olusan' ).append( '<li class="baslik asker">Askeri Durum</li><li class="asker text"><input type="text"></li>' ); onay=false;}
							    
							  }
						  c.item(1).onclick=function(){
							    $( '.asker' ).remove( );
								onay=true;
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
	  else{
			  sec.item(i).onclick= function(){
				$( '#olustur' ).append( bilgi[3]);   
              	}
			}
	}