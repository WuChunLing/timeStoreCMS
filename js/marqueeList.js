//跑马灯列表
$(document).ready(function(){
var oNav=$(".Nav");

	//跑马灯列表get
  $(oNav[3]).click(function(){
	  $("#marqueeTable tbody").empty();

	  var url="获取跑马灯的url";

		$.get(url, function(json){
			
			$str='';
			for (var i=0;i<json.length ;i++ )
			{
				var carouselAddTime=new Date(parseInt(json[i].carouselAddTime)).toLocaleString();
				$str+="<tr>";
				$str+="<td>"+json[i].carouselId+"</td>";//跑马灯id
				$str+="<td>"+json[i].carouselTitle+"</td>"; //跑马灯主题
				$str+="<td>"+"<span>"+json[i].carouselSequence+"</span>"+"&nbsp;"+"<span class='glyphicon glyphicon-chevron-up'></span>&nbsp;&nbsp;<span class='glyphicon glyphicon-chevron-down'></span>"+"</td>";  //序列 
				$str+="<td>"+carouselAddTime+"</td>"; //  添加时间  
				$str+="<td>"+json[i].carouselPath+"</td>"; // 图片路径
				$str+="<td>"+"<a class='updateMarquee'>"+"修改"+"</a>"+"&brvbar;"+"<a class='delMarquee'>"+"删除"+"</a>"+"</td>";//
				$str+="</tr>";
		 
			}
			$("#marqueeTable").append($str);  
			$("#marqueeList .panel-footer .record").text(json.length);    

		});
	});
	//跑马灯序号上调或下调
//上调
$(".display").find("tbody").on('click', '.glyphicon-chevron-up', function(){
	var order=$(this).siblings().first().text();//获得跑马灯当前的序列
	var id=$(this).parent().siblings().first().text();//获得跑马灯当前的id
	$("#marqueeTable tbody").empty();

	var url="跑马灯重新载入的url";

	$.post(url,{
		carouselSequence:order,//跑马灯当前的序列
		carouselId:id},//跑马灯当前的id
		function(json){
		$str='';
			for (var i=0;i<json.length ;i++ )
			{
		
				var carouselAddTime=new Date(parseInt(json[i].carouselAddTime)).toLocaleString();
				$str+="<tr>";
				$str+="<td>"+json[i].carouselId+"</td>";//跑马灯id
				$str+="<td>"+json[i].carouselTitle+"</td>"; //跑马灯主题
				$str+="<td>"+"<span>"+json[i].carouselSequence+"</span>"+"&nbsp;"+"<span class='glyphicon glyphicon-chevron-up'></span>&nbsp;&nbsp;<span class='glyphicon glyphicon-chevron-down'></span>"+"</td>";  //序列 
				$str+="<td>"+carouselAddTime+"</td>"; //  添加时间  
				$str+="<td>"+json[i].carouselPath+"</td>"; // 图片路径
				$str+="<td>"+"<a class='updateMarquee'>"+"修改"+"</a>"+"&brvbar;"+"<a class='delMarquee'>"+"删除"+"</a>"+"</td>";//
				$str+="</tr>";
		 
			}
			$("#marqueeTable").append($str);  
			$("#marqueeList .panel-footer .record").text(json.length);  
		});

});
//下调
$(".display").find("tbody").on('click', '.glyphicon-chevron-down', function(){
	var order=$(this).siblings().first().text();
	var id=$(this).parent().siblings().first().text();
	$("#marqueeTable tbody").empty();

	var url="跑马灯重新载入的url";

	$.post(url,{
		carouselSequence:order,
		carouselId:id},
		function(json){
		$str='';
			for (var i=0;i<json.length ;i++ )
			{
		
				var carouselAddTime=new Date(parseInt(json[i].carouselAddTime)).toLocaleString();
				$str+="<tr>";
				$str+="<td>"+json[i].carouselId+"</td>";//跑马灯id
				$str+="<td>"+json[i].carouselTitle+"</td>"; //跑马灯主题
				$str+="<td>"+"<span>"+json[i].carouselSequence+"</span>"+"&nbsp;"+"<span class='glyphicon glyphicon-chevron-up'></span>&nbsp;&nbsp;<span class='glyphicon glyphicon-chevron-down'></span>"+"</td>";  //序列 
				$str+="<td>"+carouselAddTime+"</td>"; //  添加时间  
				$str+="<td>"+json[i].carouselPath+"</td>"; // 图片路径
				$str+="<td>"+"<a class='updateMarquee'>"+"修改"+"</a>"+"&brvbar;"+"<a class='delMarquee'>"+"删除"+"</a>"+"</td>";//
				$str+="</tr>";
			}
			$("#marqueeTable").append($str);  
			$("#marqueeList .panel-footer .record").text(json.length);  
		});

});



//跑马灯信息修改	
$(".display").find("tbody").on('click', '.updateMarquee', function(){		
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
			if (i!=2){
				$(currTd[i]).html("");
				$("<input class='inputText'  type='text' />").val(tdtext).appendTo(currTd[i]);
				}		
		} 
		//确认修改按钮点击事件
		$(this).next().next().click(function(){
		var oinput=new Array();//文本框的内容存入数组
			for (var i=0;i<currTd.length ; i++)
			{
				oinput[i]=$(currTd[i]).find("input").val();
				if(i==2){}
				else
				 $(currTd[i]).html(oinput[i]);  
			}

			$(this).next().remove();
			$(this).remove();

		//将修改的数据更新到数据库 
		var url="跑马灯修改的url";

		$.post(url,{
		carouselIdOld:textArray[0],		//修改行的id,根据该id进行判断，对原数据库的哪一行进行更换
		carouselId:oinput[0],//修改后的跑马灯id
		carouselTitle:oinput[1],//主题
		carouselAddTime:oinput[2],//添加时间
		carouselPath:oinput[3]//图片路径
		});


	});
		//取消修改按钮点击事件
		$(this).next().next().next().click(function(){
			for (var i=0;i<currTd.length ; i++)
			{
				if (i!=2)
				{
					 $(currTd[i]).html(textArray[i]); 
				}            
			}

			$(this).prev().remove();
			$(this).remove();

		});
    });	

	//删除跑马灯
	$(".display").find("tbody").on('click', '.delMarquee', function(){
		var i=this.parentNode.parentNode.rowIndex;
		var id=$(this).parent().parent().parent().parent().attr("id");
		var marqueeId=$(this).parent().siblings().first().text();
		document.getElementById(id).deleteRow(i);

		//将删除行的id传给后台
		var url="你的删除跑马灯的url";

		$.post(url,
	   {
		carouselId:marqueeId
	   });

	  });


	//添加跑马灯
$("#addMarquee").click(function(){
	$("<tr>"+"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<input type='text'>"+"</td>"+
					"<td>"+"<button class='ok'>确认</button>"+"<button class='no'>取消</button>"+"</td>"+
		"</tr>").prependTo("#marqueeListTable tbody ");
	//确认按钮点击事件
	$(".ok").click(function(){  
		var otd=$(this).parent().prevAll();
		var x=otd.length;
		var oinput=new Array();//文本框的内容存入数组
		for (var i=0;i<otd.length ;i++ )
		{
			oinput[i]=$(otd[i]).find("input").val();
			if (i==2)
			{
				$(otd[i]).html("<span>"+oinput[i]+"</span>"+"&nbsp;"+"<span class='glyphicon glyphicon-chevron-up'></span>&nbsp;&nbsp;<span class='glyphicon glyphicon-chevron-down'></span>");  
			}
			else{
			 $(otd[i]).html(oinput[i]);  }
		}
		$(this).parent().html("<a class='updateMarquee'>修改</a>"+"&brvbar;"+"<a class='delMarquee'>删除</a>");
		
		//将新增跑马灯通过post请求传给后台,更新到数据库

		var url="新增跑马灯的url";

		$.post(url,{
		carouselId:oinput[0],
		carouselTitle:oinput[1],
		carouselSequence:oinput[2],
		carouselAddTime:oinput[3],
		carouselPath:oinput[4]
		});


	});

		//取消按钮点击事件
	$(".no").click(function(){  
		 deleteRow("marqueeListTable",this);
	});

 });

});