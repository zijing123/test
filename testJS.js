// JavaScript Document
var moreinf; 

function createCircle(){
   window.location.href="createCircle.html";
}

function changeColor(){
   		
      $("#btn4").removeClass("bdbtn");
	  $("#btn4").addClass("bdbtn2");

}

function showmorediv(){
	//alert("111");
	$("#hbg").show();
  $("#morediv").show();
}
//���ȡ����ť
function hiddmorediv(){
	$("#hbg").hide();
	$("#morediv").hide();
}
//���ȷ����ť
function hidemorediv2(){
  moreinf=$("#moreinfo").val();
  alert(moreinfo);
  	$("#hbg").hide();
	$("#morediv").hide();
}

//onfocus
function hideval(){
	alert("ttt");
  $("#moreinfo").val('');
}
//onblur
function showval(){
	alert("cccc");
	$("#moreinfo").val('��д��Ϣ');
}