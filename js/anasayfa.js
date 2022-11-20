// JavaScript Document
var s=document.getElementById("sec");
function al(x){
	  if(x==1){
		    s.style.marginLeft="74%";
			document.getElementById("yazi").placeholder="Firma Seçimi";
			x=1;
		  }
	  else{
		    s.style.marginLeft="24%";
			document.getElementById("yazi").placeholder="Meslek Seçimi";
			x=0;
		  }
	}
var b=document.getElementsByClassName("c_bilgi");
var yazi=document.getElementsByClassName("yazisi");
var secili=document.getElementById("secili");
b.item(0).style.background="#f5f5f5";
yazi.item(0).style.display="block";
var geri=yazi.item(0);
var onceki=b.item(0);
onay1=true;
onay2=true;
onay3=true;
function bil(i){
	    if(onceki!=b.item(i)){
			  b.item(i).style.background="#f5f5f5";
	          onceki.style.background="#ddd";
	          onceki=b.item(i);
		      yazi.item(i).style.display="block";
		      geri.style.display="none";
		      geri=yazi.item(i);
			}
}
var sec=document.getElementById("secil");
function alan(x){
	   
}