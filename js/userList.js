//用户列表

$(document).ready(function(){

	//用户列表get
	$("#userListGet").click(function(){
		$("#userListTable tbody").empty();

		var url="你的获取用户列表的url";

		$.get(url, function(json){
				
				$str='';
				for (var i=0;i<json.length ;i++ )
				{
					$str+="<tr>";
					$str+="<td>"+json[i].userId+"</td>";//用户id
					$str+="<td>"+json[i].userAccount+"</td>"; //用户账号
					$str+="<td>"+json[i].userName+"</td>";  //用户昵称
					$str+="<td>"+"<a class='popUserData'>"+"具体个人资料"+"</a>"+"</td>";//  用户具体个人资料
					$str+="<td>"+"<a class='popUserComment'>"+json[i].commentNum+"</a>"+"</td>";    // 		评论数
					$str+="<td>"+"<a class='popUserRequest'>"+json[i].requestNum+"</a>"+"</td>";    // 		请求数
					$str+="<td>"+"<a class='popUserChat'>"+json[i].chatNum+"</a>"+"</td>";    // 		聊天数
					$str+="<td>"+"<a class='popUserPost'>"+json[i].demandNum+"</a>"+"</td>";    // 		帖子数
					$str+="<td>"+"<a class='delUser'>"+"删除该用户"+"</a>"+"</td>";
					$str+="</tr>";
				}
				$("#userListTable").append($str); 
				$("#userList .panel-footer .record").text(json.length);    
			});
	});


	//查看用户具体资料
	$(".display").find("tbody").on('click', '.popUserData', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="你的查看用户具体资料的url";

			$.post(url,{
				 userId:id
			 },
			 function(json){
					var	LoginTime=new Date(parseInt(userLastLoginTime)).toLocaleString();
					var	Birthday=new Date(parseInt(userBirthday)).toLocaleString();
					$str='';	

					$str+="<ul>";
					$str+="<li>"+"用户昵称："+userName+"</li>";//用户昵称
					$str+="<li>"+"用户密码："+userPassword+"</li>"; //用户密码
					$str+="<li>"+"用户头像："+userFacePath+"</li>";  //用户头像
					$str+="<li>"+"用户性别："+userSex+"</li>";//  用户性别
					$str+="<li>"+"用户生日："+Birthday+"</li>";    //用户生日
					$str+="<li>"+"用户所在学校："+userSchool+"</li>";    // 用户所在学校
					$str+="<li>"+"用户等级："+userLevel+"</li>";    // 用户等级
					$str+="<li>"+"用户经验值："+userExperience+"</li>";    // 用户经验值
					$str+="<li>"+"用户最近一次登陆时间："+LoginTime+"</li>";    // 用户最近一次登陆时间
					$str+="<li>"+"用户个性签名："+userSign+"</li>";    // 用户个性签名
					$str+="</ul>";
					$("#demo #list").append($str); 
			});
			$("#close").click(function(){
				$("#demo").css("display","none");
			 });
	});
			


	//查看评论列表
		$(".display").find("tbody").on('click', '.popUserComment', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="你的查看用户评论列表的url";

			$.post(url,{
				 userId:id
			 },
			 function(json){
				
					$str="<table class='table table-bordered table-hover'>";	
					$str+="<tr>";
					$str+="<th>"+"需求ID"+"</th>"; //需求id
					$str+="<th>"+"评论内容"+"</th>";  //评论内容
					$str+="<th>"+"评论时间"+"</th>";    //评论时间
					$str+="</tr>";
					
					for (var i=0;i<json.length ;i++ )
					{
						var	commentTime=new Date(parseInt(json[i].commentTime)).toLocaleString();
						$str+="<tr>";
						$str+="<td>"+json[i].commentDemandId+"</td>"; //需求id
						$str+="<td>"+json[i].commentContent+"</td>";  //评论内容
						$str+="<td>"+commentTime+"</td>";    //评论时间
						$str+="</tr>";
					}
					$str+="</table>";
					$("#demo #list").append($str); 
			});
			$("#close").click(function(){
				$("#demo").css("display","none");
			 });
	});




	//查看请求列表
	$(".display").find("tbody").on('click', '.popUserRequest', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="你的查看用户请求列表的url";

			$.post(url,{
				 userId:id
			 },
			 function(json){
				
					$str="<table class='table table-bordered table-hover'>";	
					$str+="<tr>";
					$str+="<th>"+"需求ID"+"</th>"; //需求id
					$str+="<th>"+"请求时间"+"</th>";  //请求时间
					$str+="<th>"+"请求内容"+"</th>";    //请求内容
					$str+="<th>"+"请求状态"+"</th>";    //请求状态
					$str+="</tr>";
					for (var i=0;i<json.length ;i++ )
					{
						var	requestTime=new Date(parseInt(json[i].requestTime)).toLocaleString();
						$str+="<tr>";
						$str+="<td>"+json[i].requestDemandId+"</td>"; //需求id
						$str+="<td>"+requestTime+"</td>";  //请求时间
						$str+="<td>"+json[i].requestMessage+"</td>";    //请求内容
						$str+="<td>"+json[i].requestStatus+"</td>";    //请求状态
						$str+="</tr>";
					}
					$str+="</table>";
					$("#demo #list").append($str); 
			});
			$("#close").click(function(){
				$("#demo").css("display","none");
			 });
	});


	//查看聊天列表
	$(".display").find("tbody").on('click', '.popUserChat', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="你的查看用户聊天列表的url";

			$.post(url,{
				 userId:id
			 },
			 function(json){
				
					$str="<table class='table table-bordered table-hover'>";	
					$str+="<tr>";
					$str+="<th>"+"寄送聊天用户id"+"</th>"; //寄送聊天用户id
					$str+="<th>"+"收到聊天用户id"+"</th>";  //收到聊天用户id
					$str+="<th>"+"聊天时间"+"</th>";    //聊天时间
					$str+="<th>"+"聊天信息"+"</th>";    //聊天信息
					$str+="</tr>";
					for (var i=0;i<json.length ;i++ )
					{
						var chatMessage=json[i].chatMessage.slice(0,10);
						var	chatTime=new Date(parseInt(json[i].chatTime)).toLocaleString();
						$str+="<tr>";
						$str+="<td>"+json[i].chatFrom+"</td>"; //寄送聊天用户id
						$str+="<td>"+json[i].chatTo+"</td>";  //收到聊天用户id
						$str+="<td>"+chatTime+"</td>";    //聊天时间
						$str+="<td>"+"<a class='chatMessage'>"+chatMessage+"</a>"+"</td>";    // 聊天信息
						$str+="</tr>";
					}
					$str+="</table>";
					$("#demo #list").append($str); 
			});
			$("#close").click(function(){
				$("#demo").css("display","none");
			 });
	});

	//查看帖子列表
	$(".display").find("tbody").on('click', '.popUserPost', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="你的查看用户帖子列表的url";

			$.post(url,{
				 userId:id
			 },
			 function(json){
				
					$str="<table class='table table-bordered table-hover'>";	
					$str+="<tr>";
					$str+="<th>"+"需求标题"+"</th>"; //需求标题
					$str+="<th>"+"需求类型"+"</th>";  //需求类型
					$str+="<th>"+"需求愿意付出的价格"+"</th>";    //需求愿意付出的价格
					$str+="<th>"+"需求发布时间"+"</th>";    //需求发布时间
					$str+="<th>"+"需求状态"+"</th>";    //需求状态
					$str+="</tr>";
					for (var i=0;i<json.length ;i++ )
					{
					var	demandTime=new Date(parseInt(json[i].demandTime)).toLocaleString();
					$str+="<tr>";
					$str+="<td>"+json[i].demandTitle+"</td>"; //需求标题
					$str+="<td>"+json[i].demandType+"</td>";  //需求类型
					$str+="<td>"+json[i].demandPay+"</td>";    //需求愿意付出的价格
					$str+="<td>"+demandTime+"</td>";    //需求发布时间
					$str+="<td>"+json[i].demandStatus+"</td>";    //需求状态
					$str+="</tr>";
					}
					$str+="</table>";
					$("#demo #list").append($str); 
			});
			$("#close").click(function(){
				$("#demo").css("display","none");
			 });
	});


	//删除该用户
	$(".display").find("tbody").on('click', '.delUser', function(){
		var i=this.parentNode.parentNode.rowIndex;
		var id=$(this).parent().parent().parent().parent().attr("id");
		var ouserId=$(this).parent().siblings().first().text();
		document.getElementById(id).deleteRow(i);

		//将删除行的id传给后台
		var url="你的删除用户的url";

		$.post(url,
	   {
		userId:ouserId
	   });

	  });



});