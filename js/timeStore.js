/*页面切换跳转的控制代码
*/	
window.onload=function(){
var omynav=document.getElementById("mynav").getElementsByTagName("li");
var oa=document.getElementById("mynav").getElementsByTagName("a");
var ozinav=document.getElementsByClassName("zinav");
var odisplay=document.getElementsByClassName("display");	
var ozinavLi=document.getElementsByClassName("zinavLi");	

	for (var i=0;i<omynav.length ;i++ )
	{
		   omynav[i].index = i;
		   omynav[i].onclick = function (){
			  
		for (var p=0;p<odisplay.length ;p++ )odisplay[p].style.display="none";
	    switch (this.index)
		{
			case 0:odisplay[0].style.display="block";break;
			case 1:odisplay[3].style.display="block";break;
			case 2:odisplay[6].style.display="block";break;
			case 3:odisplay[9].style.display="block";break;
			case 4:odisplay[10].style.display="block";break;
			case 5:odisplay[11].style.display="block";break;
			default:break;
		}
	    for (var i=0;i<omynav.length ;i++ )omynav[i].className = "Nav";
		this.className = "active Nav";
		for(var n = 0; n < ozinav.length; n++) ozinav[n].style.display = "none";
		ozinav[this.index].style.display = "block";
		

	  }
	}

	for (var i=0; i<ozinavLi.length;i++ )
	{
		ozinavLi[i].index = i;
		ozinavLi[i].onclick=function(){
		for (var i=0; i<ozinavLi.length;i++ ){ozinavLi[i].className="zinavLi";}
		this.className="active zinavLi";
			for (var n=0;n<odisplay.length ;n++ )
			{
				odisplay[n].style.display="none";
			}
			odisplay[this.index].style.display="block";
		}
	}

	var panelBody=document.getElementsByClassName("panel-body");
	for (var i=0;i<panelBody.length ;i++ )
	{
		var otr=document.getElementsByClassName("panel-body")[i].getElementsByTagName("tr");
		var otrLength=otr.length-1;
		 var orecord=document.getElementsByClassName("record")[i];
	     orecord.innerHTML=otrLength;
	}

}
//放弃新增管理员或跑马灯时的取消事件
function deleteRow(id,r)
  {
  var i=r.parentNode.parentNode.rowIndex;
  document.getElementById(id).deleteRow(i);
  }
  