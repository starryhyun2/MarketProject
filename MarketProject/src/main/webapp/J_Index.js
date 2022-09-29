/**
 * 
 */
var chk = true;
 
function darkMode() {
	var idTitle = document.getElementById('idTitle');
	var _txIndex = document.getElementsByClassName('_txIndex');
	

		if (chk == true) {
				
				document.body.style.backgroundColor = 'black';
				_btnTheme.value='Day mode';
				for (var i =  0; i<_txIndex.length;i++){
					_txIndex[i].style.color = 'white';
				}
				
				chk = false;
		} else if(chk == false){
				
				document.body.style.backgroundColor = 'white';
				_btnTheme.value='Dark mode';
				for (var i =  0; i<_txIndex.length;i++){
					_txIndex[i].style.color = 'black';
				}
				chk = true;
				
		}
		
				/*if(window.matchMedia("(prefers-color-scheme: dark").matches){
			document.documentElement.classList.add("dark");
		}
		
		document.getElementById("_btnTheme").addEventListener("clcik",() => {
			document.documentElement.classList._btnTheme("dark")
			})
		*/
}