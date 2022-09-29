/**
 * 
 */
 
 function Plus(){
	var plus= document.getElementById('plus');
	var num1= document.getElementById('num1');
	var num2= document.getElementById('num2');
	var ans = document.getElementById('ans');
	var re_ans = parseInt(num1.value)+ parseInt(num2.value);
	
	plus.style.background = 'red';
	ans.value=re_ans;

}

 function Minus(){
	var num1= document.getElementById('num1');
	var num2= document.getElementById('num2');
	var ans = document.getElementById('ans');
	var re_ans = parseInt(num1.value)- parseInt(num2.value);
	
	plus.style.background = 'red';
	ans.value=re_ans;

}
 function Multifly(){
	var num1= document.getElementById('num1');
	var num2= document.getElementById('num2');
	var ans = document.getElementById('ans');
	var re_ans = parseInt(num1.value)* parseInt(num2.value);
	
	plus.style.background = 'red';
	ans.value=re_ans;

}
 function Devide(){
	var num1= document.getElementById('num1');
	var num2= document.getElementById('num2');
	var ans = document.getElementById('ans');
	
	plus.style.background = 'red';
	if(parseInt(num1.value)==0){
		alert("첫 번째 숫자는 0이어서는 안됩니다.");
		
	}else{
		var re_ans = parseInt(num1.value)/ parseInt(num2.value);
		ans.value=re_ans;
	}

}