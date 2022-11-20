// JavaScript Document
html = '<div id="git">\
		   <a href="#" onClick="kapat()" id="close">\
			  X\
		   </a>\
		   <div class="container">\
		     <div id="basvurmak">\
			   <p>Profil bilginiz firmaya iletilecektir. Başvuru yazısı veya detaylı bilgileri aşağıya yazabilirsiniz.</p>\
			   <textarea></textarea>\
			   <input type="submit" value="Başvur">\
			 <\div>\
		   </div>\
		</div>';
function gitti(){
	  $( 'body' ).append( html );
	}
function kapat(){   
		 $("#git").remove();
	}