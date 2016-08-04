//用户报表

$(document).ready(function(){

//用户报表获取
  $("#show").click(function(){
		$("#userReport_1").empty();

		 url="你的url：根据学校统计用户数";

	  $.get(url,function(json){		//  根据各学校统计用户数
			$str= ' ';
			for (var i=0;i<json.length ;i++ )
			{
			$str+="<tr>";
			$str+="<td>"+json[i].school+"</td>";   //学校
			$str+="<td>"+json[i].userNum+"</td>"; //用户数量
			$str+="</tr>"; 
			}
			$("#userReport_1").append($str);  
	  });
	  	    $("#userReport_1").slideToggle();
  });




   $("#checkUser").click(function(){		//查看当天登陆的用户
	  $("#checkUserTable").empty();

	   var url="你的url—查看当天登陆的所有用户的账号和昵称";

	   $.get(url,function(json){
			$str+="<tr>";
			$str+="<th>"+"用户账号"+"</th>";   //用户账号
			$str+="<th>"+"用户昵称"+"</th>"; //用户昵称
			$str+="</tr>"; 
			for (var i=0;i<json.length ;i++ )
			{
			$str+="<tr>";
			$str+="<td>"+json[i].userAccount+"</td>";   //用户账号
			$str+="<td>"+json[i].userName+"</td>"; //用户昵称
			$str+="</tr>"; 
			}
			$("#checkUserTable").append($str);  
			
	   });
	 $("#checkUserTable").slideToggle();  
  });



//用户报表数据交互
$("#userReportGet").click(function(){

  var url="你的url显示当前系统用户总数和当天登陆的用户数量";

  $.get(url,function(json){
	$("#userAmount").text(json[0]);   //当前系统用户总数
	$("#userAmountToday").text(json[1]);  //当天登陆的用户数
  });

});


//根据具体时间查询注册用户
	$("#userReportSearch").click(function(){
		$("#userReportSearchTable").empty();
		var date=$("#chooseDateUser").val();

		var url="你的URL根据具体时间查询注册用户";

		$.post(url,{
		userLastLoginTime:date
		},
		function(json){
			$str+="<tr>";
			$str+="<th>"+"用户账号"+"</th>";   //用户账号
			$str+="<th>"+"用户昵称"+"</th>"; //用户昵称
			$str+="</tr>"; 
			for (var i=0;i<json.length ;i++ )
			{
			$str+="<tr>";
			$str+="<td>"+json[i].userAccount+"</td>";   //用户账号
			$str+="<td>"+json[i].userName+"</td>"; //用户昵称
			$str+="</tr>"; 
			}
			$("#userReportSearchTable").append($str); 
		
		});
	});

});