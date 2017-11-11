var modal = document.getElementsByClassName('info'); /*obtenemos el modal*/
var span = document.getElementsByClassName("close");
var link = document.getElementsByClassName('modal-js'); /*el elemento enlace*/
for (i = 0; i < link.length; i++) {
	link[i].addEventListener('click', showContent);
  span[i].addEventListener('click', closeContent);
}


function closeContent (event){
this.parentNode.parentNode.style.display="none";
}



function showContent(event) {
	var container = event.target.parentNode;
	var selectionImage = container.dataset.name;
	if(selectionImage ==="img1"){
    modal[0].style.display="block";
  }
 else if (selectionImage ==="img2"){
    modal[1].style.display="block";

}
else if (selectionImage ==="img3"){
   modal[2].style.display="block";

}
else if (selectionImage ==="img4"){
   modal[3].style.display="block";

}
else if (selectionImage ==="img5"){
   modal[4].style.display="block";

}
else if (selectionImage ==="img6"){
   modal[5].style.display="block";

}
}
