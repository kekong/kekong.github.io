// JavaScript Document
var changeImgTimeout = null;
var changeImgNum =0 ;
function changeImg(){
	 
}
var changeColorTimeout = null;

function changeWeixinColor(){
	clearTimeout(changeColorTimeout);
	
	if(document.getElementById('weixin').style.color == "rgb(255, 255, 255)"){
		document.getElementById('weixin').style.color = "#CD5C5C";
	}else{
		document.getElementById('weixin').style.color = "#fff";
	}
	changeColorTimeout = setTimeout("changeWeixinColor()",500);
}
var mouseover = [["image/1.jpg","image/2.png"],["image/1.jpg","image/2.png"],["image/1.jpg","image/2.png"],["image/1.jpg","image/2.png"]];
function changeCotinerImg(_id,flag){
	var idPos = _id.split('_')[1];
	document.getElementById(_id).src=mouseover[idPos][flag];
}