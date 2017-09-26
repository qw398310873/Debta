window.onload = function() {
	var ologin = document.getElementById('abcd');
	var ores=document.getElementById('res');
	ologin.onsubmit = function() {
		var ostatus=document.getElementById('status');
		var ousername = document.getElementById('username');
		var opassword = document.getElementById('password');
		if(ousername.value==null||ousername.value==""){
			ostatus.innerHTML="用户名不能为空";
			return false;
		}else if(opassword.value==null||opassword.value=="")
		{
			ostatus.innerHTML="密码不能为空";
			return false;
		}else{
			
   }
		};
		
	ores.onclick=function(){
		var oresstatus=document.getElementById('resstatus');
		var oresusername = document.getElementById('resusername');
		var orespassword1 = document.getElementById('respassword1');
		var orespassword2 = document.getElementById('respassword2');
		if(oresusername.value==null||oresusername.value==""){
			oresstatus.innerHTML="用户名不能为空";
			return false;
		}else if(orespassword1.value==null||orespassword1.value==""||orespassword2.value==null||orespassword2.value=="")
		{
			oresstatus.innerHTML="密码不能为空";
			return false;
		}
		ores.setAttribute("data-dismiss","modal");
	};
};