// JavaScript Document
var element=document.getElementsByTagName("ul");
var ana=document.getElementsByClassName("fa-navicon ");
var input = document.getElementsByTagName("input");
var a=1;
navbar = '<div id="nav_bar">\
          <div class="container">\
             <ul>\
             <li><a href="index.html">Anasayfa</a></li>\
             <li><a>Tüm İlanlar</a></li>\
             <li><a>Hakkımızda</a></li>\
             <li><a>Yardım</a></li>\
             <li id="button">\
               <input type="submit" onClick="git()" value="Kayıt | Giriş">\
             </li>\
          </ul>\
		  </div>\
       </div>';
ara = '<div id="arama">\
		  <div id="secenek">\
		  <form><input type="radio" name="s" onClick="radio(\'0\')" checked="checked">Meslekler<br><input type="radio" name="s" onClick="radio(\'1\')">Firmalar</form>\
		  </div>\
		  <div id="bul">\
			<div id="text">\
			   <form><input type="text" value placeholder="Meslek Seçimi" id="yaz"><input type="text" name="sehir" value placeholder="Şehir Seçimi">\
			   <select id="calisma">\
                <option value="stj">Staj</option>\
                <option value="part">Yarım Zamanlı</option>\
                <option value="fre">Serbest Çalışma</option>\
               </select>\
			   <input type="submit" value="Ara"></form>\
			</div>\
		  </div>\
		</div>';
function radio(x){   
		 if(x==1){
			   document.getElementById("yaz").placeholder="Firma Seçimi";
			 } 
		 else{
			   document.getElementById("yaz").placeholder="Meslek Seçimi";
			 }
	}
var anasayfa=document.getElementById("index");
var header = document.getElementsByTagName('header');
var banner=document.getElementById("banner_ilan");
var ilan=document.getElementById("ilan");
function navigation(){
	   ana.item(0).style.display="block";
	   element.item(0).style.display="none"; 
	   ana.item(0).onclick=function(){
	   if(a==1){
		    a=0;
			if (screen.width > 800) {
				  $( 'header' ).append( navbar );
				}
		    else{
				  element.item(0).style.display="block";
				}
		  }
	   else{
			if (screen.width > 800) {
				  $("#nav_bar").remove();
				}
		    else{
				  element.item(0).style.display="none";
				}
			a=1;
		  }
	   }
	   $( '#nav' ).append( ara ); 
	}
if(anasayfa){
	  ana.item(0).onclick=function(){
	  if(a==1){
		    a=0;
		    element.item(0).style.display="block";
		  }
	  else{
		    element.item(0).style.display="none";
			a=1;
		  }
	  }
	  window.onscroll = function (){
		  
	    if (window.pageYOffset == 150) {
		  if (screen.width > 800) {
	                navigation();
                 }
        }
		else if(window.pageYOffset > 150){
	                header.item(0).style.position ="fixed";
	                header.item(0).style.top ="0";
		            header.item(0).style.zIndex="2";
		} 
		else if(window.pageYOffset < 150 && window.pageYOffset > 0){
			header.item(0).style.position ="fixed";
	        header.item(0).style.top ="0";
			if (screen.width > 800) {
		            ana.item(0).style.display="none";
	                element.item(0).style.display="block";  
		            $("#arama").remove();
		            $("#nav_bar").remove();
                 }
		} 
	    else {
          header.item(0).style.position ="relative";
        } 
      }
}
else{ 
	   navigation();
	   window.onscroll = function (){
       if(window.pageYOffset > 0){
	                header.item(0).style.position ="fixed";
	                header.item(0).style.top ="0";
		            header.item(0).style.zIndex="2";
		  if(ilan){
			     ilan.style.position ="fixed";
		         ilan.style.top="45px";
				 ilan.style.zIndex="1";
				 if(document.getElementById("ilandetay")){
					    document.getElementById("ilandetay").style.marginTop="2.5%";
		                document.getElementById("basvurma").style.marginTop="18%";
		                document.getElementById("basvurma").style.height="53%";
					 }
		         banner.style.top ="10px";
				 if (screen.width > 1600) {
	                banner.style.height="85px";
                 }
				 else if(screen.width > 1400 && screen.width>=1600){
					   banner.style.height="80px";
					 }
				 else{
					   banner.style.height="75px";
					   banner.style.top ="5px";
					 }
			  }
		} 
	    else {
          header.item(0).style.position ="relative";
		  if(ilan){
			     ilan.style.position ="static";
		         banner.style.height="100px";
		         banner.style.top ="0";
				 if(document.getElementById("ilandetay")){
					    document.getElementById("ilandetay").style.marginTop="3%";
		                document.getElementById("basvurma").style.marginTop="19%";
		                document.getElementById("basvurma").style.height="45%";
					 }
			  }
        } 
      }	
	}
html = '<div id="git">\
		   <a href="#" onClick="kapat()" id="close">\
			  X\
		   </a>\
		   <div class="container">\
			  <div class="alt">\
			    <div id="uye">\
				  <h1>ÜYELER</h1>\
				  <div class="bolum one">\
				    <input type="submit" onClick="giris1()" value="GİRİŞ YAP"><hr>\
				    <input type="submit" onClick="location.href=\'uyekayit.html\'" value="KAYIT OL">\
				  </div>\
				</div>\
			  </div>\
			  <div class="alt">\
			    <div id="firma">\
				  <h1>FİRMALAR</h1>\
				  <div class="bolum two">\
				    <input type="submit" onClick="giris2()" value="GİRİŞ YAP"><hr>\
				    <input type="submit" onClick="location.href=\'firmakayit.html\'" value="KAYIT OL">\
				  </div>\
				</div>\
			  </div>\
		   </div>\
		</div>';
bolum1 = '<input type="submit" onClick="giris1()" value="GİRİŞ YAP"><hr>\
		  <input type="submit" onClick="location.href=\'uyekayit.html\'" value="KAYIT OL">';
bolum2 = '<input type="submit" onClick="giris2()" value="GİRİŞ YAP"><hr>\
		  <input type="submit" onClick="firmakayit.html" value="KAYIT OL">';
giris = '<div id="yeni"><input type="text" value placeholder="Mailiniz veya kullanıcı adınız..">\
          <input type="password" value placeholder="Şifreniz..">\
		  <input type="submit" name="giris" value="Giriş Yap"><hr>\
		  <input type="submit" onClick="kayit()" value="KAYIT OL"></div>';
function git(){
	  $( 'body' ).append( html );
	}
function kapat(){   
		 $("#git").remove();
	}
function giris1(){ 
         a=0;   
		 $(".one").empty();
         $('.one').append( giris );
		 $(".two").empty();
		 $('.two').append( bolum2 );
		 return a;
	}
function giris2(){ 
         a=1;  
		 $(".two").empty();
         $('.two').append( giris );
		 $(".one").empty();
		 $('.one').append( bolum1 );
		 return a;
	}
function kayit(){   
		 if(a==0){
			   this.location.href="uyekayit.html";
			 }
		 else if (a==1){
			   this.location.href="firmakayit.html";
			 }
	}