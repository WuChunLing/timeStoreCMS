//帖子列表
$(document).ready(function(){

//帖子列表get
$("#postListGet").click(function(){

	$("#postListTable tbody").empty();

	 var url="帖子列表的url";

	$.get(url, function(json){
			
			$str='';
			for (var i=0;i<json.length ;i++ )
			{
			
			$str+="<tr>";
			$str+="<td>"+json[i].demandId+"</td>";//帖子id
			$str+="<td>"+json[i].demandUserId+"</td>"; //发布者
			$str+="<td>"+"<a class='demandTitle'>"+json[i].demandTitle+"</a>"+"</td>";  //需求标题
			$str+="<td>"+"<a class='popPostComment'>"+json[i].demandCommentCount+"</a>"+"</td>";//  评论列表
			$str+="<td>"+"<a class='popPostLike'>"+json[i].demandLikeCount+"</a>"+"</td>";    // 		点赞列表
			$str+="<td>"+"<a class='popPostRequest'>"+json[i].requestCount+"</a>"+"</td>";    // 		请求列表
			$str+="<td>"+"<button class='likeComment'>"+"点赞或评论"+"</button>"+"</td>";// 		具体操作
			$str+="<td>"+"<a class='delPost'>"+"删除该帖子"+"</a>"+"</td>";    // 		删除帖子
			$str+="</tr>";
		 
			}
			$("#postListTable").append($str);  
			$("#postList .panel-footer .record").text(json.length);    
		});


});

	//查看需求内容
$(".display").find("tbody").on('click', '.demandTitle', function(){
		var id=$(this).parent().siblings().first().text();//获得当前帖子的id
		
		var url="获得当前帖子的需求内容的URL";

		$.post(url,{
		demandId:id
		},function(data){
		alert(data);
		})
	
	});


//查看评论列表
$(".display").find("tbody").on('click', '.popPostComment', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="当前帖子的评论列表的url";

			$.post(url,{
				 demandId:id
			 },
			 function(json){
					var commentTime=new Date(parseInt(json[i].commentTime)).toLocaleString();
					$str="<table class='table table-bordered table-hover'>";	
					$str+="<tr>";
					$str+="<th>"+"用户ID"+"</th>"; //用户id
					$str+="<th>"+"评论内容"+"</th>";  //评论内容
					$str+="<th>"+"评论时间"+"</th>";    //评论时间
					$str+="</tr>";
					for (var i=0;i<json.length ;i++ )
					{
					$str+="<tr>";
					$str+="<td>"+json[i].userId+"</td>"; //用户id
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


//查看点赞列表
$(".display").find("tbody").on('click', '.popPostLike', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="当前帖子的点赞列表的url";

			$.post(url,{
				 demandId:id
			 },
			 function(json){
					var likeTime=new Date(parseInt(json[i].likeTime)).toLocaleString();
					$str="<table style='border:1px;'>";	
					$str+="<tr>";
					$str+="<th>"+"点赞用户ID"+"</th>"; //点赞用户id
					$str+="<th>"+"点赞时间"+"</th>";  //点赞时间
					$str+="</tr>";
					for (var i=0;i<json.length ;i++ )
					{
					$str+="<tr>";
					$str+="<td>"+json[i].likeUserId+"</td>"; //点赞用户id
					$str+="<td>"+likeTime+"</td>";  //点赞时间
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
$(".display").find("tbody").on('click', '.popPostRequest', function(){
			$("#demo #list").empty();
			$("#demo").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="当前帖子请求列表的url";

			$.post(url,{
				 demandId:id
			 },
			 function(json){
					var requestTime=new Date(parseInt(json[i].requestTime)).toLocaleString();
					$str="<table class='table table-bordered table-hover'>";	
					$str+="<tr>";
					$str+="<th>"+"请求用户ID"+"</th>"; //请求用户id
					$str+="<th>"+"请求时间"+"</th>";  //请求时间
					$str+="<th>"+"请求内容"+"</th>";    //请求内容
					$str+="<th>"+"请求状态"+"</th>";    //请求状态
					$str+="</tr>";
					for (var i=0;i<json.length ;i++ )
					{
					$str+="<tr>";
					$str+="<td>"+json[i].requestClientId+"</td>"; //请求用户ID
					$str+="<td>"+json[i].requestTime+"</td>";  //请求时间
					$str+="<td>"+requestMessage+"</td>";    //请求内容
					$str+="<td>"+json[i].requestStatus+"</td>";    //请求状态
					$str+="</tr>";
					}
					$str+="</table>";
					$("#demo").append($str); 
			});
			$("#close").click(function(){
				$("#demo").css("display","none");
			 });
	});

//点赞或评论
$(".display").find("tbody").on('click', '.likeComment', function(){
	$("#likeComment #likeCommentTable tbody").empty();
			$("#likeComment").css("display","block");
			var id=$(this).parent().siblings().first().text();

			var url="获得用户id的url";

			$.get(url,function(json){
				$str='';
				for (var i=0;i<json.length ;i++ )
				{
				
				$str+="<tr>";
				$str+="<td>"+json[i].userId+"</td>";//用户id
				$str+="<td>"+"<input type='checkbox'  />"+"</td>"; //点赞选择框
				$str+="<td>"+"<input type='text'  />"+"</td>";  //评论内容
				$str+="</tr>";
			 
				}
				$("#likeCommentTable").append($str);  
			
			});
			$("#close").click(function(){
				$("#likeComment").css("display","none");
			 });

});


//删除帖子
$(".display").find("tbody").on('click', '.delPost', function(){
		var i=this.parentNode.parentNode.rowIndex;
		var id=$(this).parent().parent().parent().parent().attr("id");
		var odemandId=$(this).parent().siblings().first().text();
		document.getElementById(id).deleteRow(i);

		//将删除行的id传给后台
		var url="你的删除帖子的url";

		$.post(url,
	   {
		demandId:odemandId
	   });

	  });

});