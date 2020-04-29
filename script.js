var button = document.getElementById("enter");

var input = document.getElementsByTagName("input")[0];

var ol = document.getElementsByTagName("ol")[0];


function creatingList(){
var li = document.createElement("li");
var button = document.createElement("button");

button.appendChild(document.createTextNode("Delete"));

button.className = "innerButton";


button.setAttribute("onclick",'deleteItemByList(this);')

li.appendChild(document.createTextNode(input.value));

li.appendChild(button);
ol.appendChild(li);

input.value="";
}


function addListByClick(){

if(input.value.length > 0){


creatingList();

}

}

function addListByEnter(event){

if(input.value.length > 0 && event.keyCode == 13  ){

creatingList();


}
 
}


function deleteItemByList(element){
	console.log(element);
	element.parentNode.parentNode.removeChild(element.parentNode);


}



button.addEventListener("click",addListByClick); //Passing Reference by Call Back Function
input.addEventListener("keypress",addListByEnter) ; //Passing Reference by Call Back Function
//innerButton.addEventListener("click",deleteItemByList);