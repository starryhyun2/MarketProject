/**
 * 
 */
 function getValue(){
 	var plus= document.getElementById('plus');
 	var minus= document.getElementById('minus');
 	var multiply=document.getElementById('multiply');
 	var devide=document.getElementById('devide');
 	var ans = document.getElementById('ans');
 }
 function result(a){
	getValue();
	var num1= document.getElementById('num1');
	var num2= document.getElementById('num2');
	if(a=='+'){
		ans.value = parseInt(num1.value)+ parseInt(num2.value);
		plus.style.background = 'red';
	}else if(a =='-'){
		ans.value = parseInt(num1.value)- parseInt(num2.value);
		minus.style.background = 'red';
	}else if(a =='*'){
		ans.value = parseInt(num1.value)* parseInt(num2.value);
		multiply.style.background = 'red';
	}else if(a =='/'){
		
		if(parseInt(num1.value)==0){
		alert("첫 번째 숫자는 0이어서는 안됩니다.");
		
		}else{
		ans.value = parseInt(num1.value)/ parseInt(num2.value);
		devide.style.background = 'red';
		}
	}
}
 	
