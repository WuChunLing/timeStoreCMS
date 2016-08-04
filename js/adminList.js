//管理员列表
$(document).ready(function(){
var oNav=$(".Nav");

//管理员列表get
 $(oNav[5]).click(function(){
	$("#adminListTable tbody").empty();

		var url="获取管理员列表的url";

		$.get(url, function(json){
			var authority;
			$str='';
			for (var i=0;i<json.length ;i++ )
			{
				if (json[i].adminAuthority=='1')
				{authority="超级管理员";}
				else	authority="普通管理员";
				$str+="<tr>";
				$str+="<td>"+json[i].adminId+"</td>";//ID
				$str+="<td>"+json[i].adminAccount+"</td>";//账号 
				$str+="<td>"+json[i].adminName+"</td>"; // 姓名
				$str+="<td>"+json[i].adminPassword+"</td>";//  密码   
				$str+="<td>"+authority+"</td>"; //    权限		
				$str+="<td>"+"<a class='updateAdmin'>"+"修改"+"</a>"+"&brvbar;"+"<a class='delAdmin'>"+"删除"+"</a>"+"</td>";
				$str+="</tr>";
			}
			$("#adminListTable").append($str); 
			$("#adminList .panel-footer .record").text(json.length);    
		});
	});

	//管理员修改
	$(".display").find("tbody").on('click', '.updateAdmin', function(){		
        var currTd = $(this).parent().prevAll();
		//保存原始值的数组
		var textArray=new Array();
		for (var i=0;i<currTd.length ;i++ )
		{	
			textArray[i] = $(currTd[i]).html();	
		} 

		var currTd_update = $(this).parent();
		if (currTd.children("input").length > 0) {
            //如果当前td中已包含有文本框元素，则不执行click事件
            return false;
        }
	
		$('<input type="button"class="update_but"  value="确认" />').appendTo(currTd_update);
		$('<input type="button" class="update_but" value="取消" />').appendTo(currTd_update);
		for (var i=0;i<currTd.length ;i++ )
		{	
			var tdtext = $(currTd[i]).html();
			$(currTd[i]).html("");
			$("<input class='inputText'  type='text' />").val(tdtext).appendTo(currTd[i]);			
		} 
		//确认修改按钮点击事件
		var x=$(this).next().next();
		$(this).next().next().click(function(){
		var oinput=new Array();//文本框的内容存入数组
			for (var i=0;i<currTd.length ; i++)
			{
				oinput[i]=$(currTd[i]).find("input").val();
				 $(currTd[i]).html(oinput[i]);  
			}

			$(this).next().remove();
			$(this).remove();

		//将修改的数据更新到数据库  管理员

		var url="管理员修改的URL";

		$.post(url,{
		adminIdOld:textArray[0],		//修改行的id,根据该id进行判断，对原数据库的哪一行进行更换
		adminId:oinput[0],		//新的id
		adminAccount:oinput[1],
		adminName:oinput[2],
		adminPassword:oinput[3],
		adminAuthority:oinput[4],
		});


		});
		//取消修改按钮点击事件
		var x=$(this).next().next().next();
		$(this).next().next().next().click(function(){
			for (var i=0;i<currTd.length ; i++)
			{
                $(currTd[i]).html(textArray[i]);  
			}

			$(this).prev().remove();
			$(this).remove();

		});
    });	


	
//添加管理员
$("#addAdmin").click(function(){
	$("<tr>"+"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text' placeholder='请输入0或1，1表示超级管理员'>"+"</td>"+
					"<td>"+"<button class='ok'>确认</button>"+"<button class='no'>取消</button>"+"</td>"+
		"</tr>").prependTo("#adminListTable tbody ");
	//确认按钮点击事件
	$(".ok").click(function(){  
		var otd=$(this).parent().prevAll();
		var x=otd.length;
		var oinput=new Array();//文本框的内容存入数组
		for (var i=0;i<otd.length ;i++ )
		{
			oinput[i]=$(otd[i]).find("input").val();
			 $(otd[i]).html(oinput[i]);  
		}
		$(this).parent().html("<a class='updateAdmin'>修改</a>"+"&brvbar;"+"<a class='delAdmin'>删除</a>");
		//将新增管理员通过post请求传给后台，更新数据库

		var url="新增管理员的url";

		$.post(url,{
		adminId:oinput[0],
		adminAccount:oinput[1],
		adminPassword:oinput[2],
		adminAuthority:oinput[3],
		adminName:oinput[4]
		});
	});

		//取消按钮点击事件
	$(".no").click(function(){  
		 deleteRow("adminListTable",this);
	});

 });

//删除管理员
$(".display").find("tbody").on('click', '.delAdmin', function(){
	var i=this.parentNode.parentNode.rowIndex;
	var id=$(this).parent().parent().parent().parent().attr("id");
	var tdId=$(this).parent().siblings().first().text();
	document.getElementById(id).deleteRow(i);

	//将删除行的id传给后台
	var url="删除管理员的url";

	$.post(url,
   {
    adminId:tdId
   });

  });

});