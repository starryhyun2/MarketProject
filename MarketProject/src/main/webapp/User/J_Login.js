/**
 * var _txid = document.getElementById('_txid');
	if(_txid.value == admin){
		alert('중복입니다.');
	}else{
		alert('사용가능한 아이디입니다.');
	}
 */
 
 const admin ="admin";
 const admin_pw ="admin";
 
 function check(){
	var _txid = document.getElementById('_txid');
	if(_txid.value == admin){
		alert('중복입니다.');
	}else{
		alert('사용가능한 아이디입니다.');
	}
}