//用户查询

$(document).ready(function(){
	$("#search").click(function(){
		$("#searchUserTable tbody").empty();
		var ouser_name=document.getElementById("user_name").value();
		  $.post(url,
		  {
			userName:ouser-name
		  },
			function(json){
				if (json==null)
				{alert("该用户不存在！");}

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
				$("#searchUserTable").append($str); 
				$("#searchUser .panel-footer .record").text(json.length);    
		});
	});
});