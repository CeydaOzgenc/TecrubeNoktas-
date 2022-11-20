// JavaScript Document
var k = document.getElementsByClassName("kyt");
var h2=document.getElementsByTagName("h2");
function myFunction (al){
for (i=0;i<h2.length;i++){
			if(al==i){
					 h2.item(i).style.fontSize="14px";
				     h2.item(i).style.marginTop="15px";
					 k.item(i).focus();
				}
}
}
function blurFunction (a) {
	  for (i=0;i<=h2.length;i++){
			if(a==i){
				  var v=k[i].value;
				  if(v==""){
				     h2.item(i).style.fontSize="17px";
				     h2.item(i).style.marginTop="22px";
				  }
				  else{
					    h2.item(i).style.fontSize="14px";
				        h2.item(i).style.marginTop="15px";
					  }
				}
		  }
	}