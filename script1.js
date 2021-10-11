function change_tab(id)
 {
   document.getElementById("page_content").innerHTML=document.getElementById(id+"_page").innerHTML;
   document.getElementById("home").className="notclicked";
   document.getElementById("about").className="notclicked";
   document.getElementById("education").className="notclicked";
   document.getElementById("skills").className="notclicked";
   document.getElementById(id).className="clicked";
 }