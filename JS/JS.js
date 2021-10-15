let MenuItems = document.getElementById('MenuItems');

MenuItems.style.maxHeight = "0px";

function menutoggle(){
  if(MenuItems.style.maxHeight == "0px")
  {
    MenuItems.style.maxHeight = "200px";
  }
  else
  {
    MenuItems.style.maxHeight = "0px";
  }
}

//---------------------------------------------------------JS for product Gallery---------------------------------------------------

const productImg = document.getElementById('Product-img');
const smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function(){
  productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
  productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
  productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
  productImg.src = smallImg[3].src;
}

/*function switchImg(){
  for (let i=0; i<=5; i++){
    productImg.src=smallImg[i].src;
  
  console.log(productImg.value);
}*/

//---------------------------------------------------------JS for toggle Form---------------------------------------------------



