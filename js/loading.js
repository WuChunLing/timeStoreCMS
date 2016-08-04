window.onload=function(){//判断是否为超级管理员

	var url="返回1表示为超级管理员";

	$.get(url,function(data){
		
		if (data==1)
		{
			$("#hiddenAdmin").css("display","block");
		}

		else
			$("#hiddenAdmin").css("display","none");
	});



}