//添加帖子
$(document).ready(function(){
	$(".display").find(".form-group").on('onfocus', '#addPostUserId', function(){		

		var url="获取假的用户id";

		$("#addPostUserId").empty();

		$.get(url,function(json){
			$str=' ';
			for (var i=0;i<json.length ;i++ )
			{
				$str+="<option>";
				$str+=json[i].userId;   //用户id
				$str+="</option>"; 
			}
			$("#addPostUserId").append($str); 
		});
	});
//确认添加帖子
	$("#addPostButton").click(function(){
		var inputText=$("#addPost").find("input").val();
		alert(inputText);
	});
});