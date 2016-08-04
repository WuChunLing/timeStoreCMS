//查询聊天信息
$(document).ready(function(){

//聊天信息查询
$("#searchChat").click(function(){
	var ouser_name=document.getElementById("chatUser").value();
	$("#chatListSearchTable tbody").empty();
  $.post(url,
  {
    userName:ouser_name
  },
  function(json){
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
			$("#chatListSearchTable").append($str);
			$("#searchChatList .panel-footer .record").text(json.length);    
		if (json==null)
		{
			alert("聊天信息不存在！");
		}
  });
});


});
