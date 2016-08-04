//聊天列表
$(document).ready(function(){


//聊天列表获取
 $("#chatListGet").click(function(){

		$("#chatListTable tbody").empty();
		
		var url="获取聊天列表的url";

		$.get(url, function(json){
			
			var chatIsSaw;
			$str='';
			for (var i=0;i<json.length ;i++ )
			{
				if (json[i].chatIsSaw=='1')
				{chatIsSaw="是";}
				else chatIsSaw="否";
				var	chatTime=new Date(parseInt(json[i].chatTime)).toLocaleString();
				var chatMessage=json[i].chatMessage.slice(0,10);
				$str+="<tr>";
				$str+="<td>"+json[i].chatId+"</td>";//聊天记录ID
				$str+="<td>"+json[i].chatFrom+"</td>";// 发送方ID
				$str+="<td>"+json[i].chatTo+"</td>";    // 接收方ID 
				$str+="<td>"+"<a class='chatMessage'>"+chatMessage+"</a>"+"</td>";    // 聊天信息
				$str+="<td>"+chatTime+"</td>";  //聊天时间
				$str+="<td>"+chatIsSaw+"</td>";//是否被查阅
				$str+="</tr>";
		 
			}
			$("#chatListTable").append($str);
			$("#chatList .panel-footer .record").text(json.length);    
		});
	});


//查看具体聊天信息
$(".display").find("tbody").on('click', '.chatMessage', function(){
	var id=$(this).parent().siblings().first().text();

	var url="根据聊天记录id获得该聊天的具体聊天信息";
    
	$.post(url,{charId:id},function(data){
		alert(data);
		$(this).parent().next().next().text("是");
	});

});





});