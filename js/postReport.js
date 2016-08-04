//帖子报表
$(document).ready(function(){

	//帖子报表数据交互
	$("#userReportGet").click(function(){

		var url="获取帖子报表的5个数字的url";

		$.get(url,function(json){
		var x=$(".postNum");
		for (var i=0;i<json.length ;i++ )
		{
			$(x[i]).text(json[i].num);
		}
		});

	});


//根据具体日期查询当天帖子数量
	$("#postReportSearch").click(function(){
		$("#postReportSearchTable").empty();
		var date=$("#chooseDatePost").val();

		var url="根据具体时间查询当天帖子数量";

		$.post(url,{
		demandTime:date
		},
		function(num){
			$str="当天帖子数量为："+num;
			$("#userReportSearchTable").append($str); 
		
		});
	});

});