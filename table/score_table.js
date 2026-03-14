document.getElementById('average').addEventListener('click',function(){//求平均
	const table=document.getElementsByClassName('biao2')[0];//读表
	const rows=table.getElementsByTagName('tr');//读行
	let sum=0;
	let count=0;
	for(let i=1;i<=7;i++){
		const cells=rows[i].getElementsByTagName('td');//列数组
		if(cells.length>1){
			const value=parseFloat(cells[2].textContent);//读第三个单元格
			if(!isNaN(value)){//判数字
				sum+=value;
				count++;
			}
		}
	}
	const average=count>0?(sum/count).toFixed(2):'N/A';//判显示
	document.querySelector('.sscore').textContent=`${average}`;
});
document.getElementById('fail').addEventListener('click',function(){//求不及格
	const table=document.getElementsByClassName('biao2')[0];//表
	const rows=table.getElementsByTagName('tr');
	let result=[];//存不及格结果
	for(let i=1;i<=7;i++){
		const cells=rows[i].getElementsByTagName('td');//列数组
		if(cells.length>1){//确保一行有至少一列
			const value=parseFloat(cells[2].textContent);
			const firstColumnText=cells[0].textContent.trim();//第一列
			if(!isNaN(value)&&value<60){//数字且不及格
				result.push(`${firstColumnText}:${value}`);数组:课程名称:成绩
			}
		}
	}
	document.querySelector('.sscore').textContent=result.join(' ');//空格分隔
});
document.getElementById('DESC').addEventListener('click',function(){//降序
	const table=document.getElementsByClassName('biao2')[0];//表
	const rows=Array.from(table.getElementsByTagName('tr'));
	const rowsToSort=rows.slice(1,8);//2-8行
	rowsToSort.sort((rowA,rowB)=>{
		const cellA = rowA.getElementsByTagName('td')[2];//读成绩
		const cellB = rowB.getElementsByTagName('td')[2];
		const valueA = parseFloat(cellA.textContent);//获取数值
		const valueB = parseFloat(cellB.textContent);//获取数值
		//无法转换为数字排到最后
		if (isNaN(valueA)) return 1;
		if (isNaN(valueB)) return -1;
		
		return valueB - valueA;  //降序排列
	});
	const tbody = table.querySelector('tbody');//获取表格的 tbody 部分
	rowsToSort.forEach(row => tbody.appendChild(row));//重新排列行
});
let index=0;
fetch('../navbar.html')
	.then(response => response.text())
	.then(data => {
	    document.querySelector('.navbar-box').innerHTML = data;
	});
fetch('../float/float.html')
	.then(response => response.text())
	.then(data => {
		document.querySelector('.float').innerHTML = data;
		const topButton = document.querySelector('.top');
		topButton.addEventListener('click', function() {
		    window.scrollTo({ top: 0, behavior: 'smooth' });
		});
		const muplay=document.getElementsByClassName('player')[0];
		const audio=document.getElementById('myAudio');
		muplay.addEventListener('click',function(){
			muplay.classList.toggle('flipped');
			if(audio.paused){
				audio.play();
			}else{audio.pause();}
		});
	});	
const images=document.querySelectorAll('.imgs img');//得到图片元素数组
const totalImages=images.length;//获取图片总数
function changeImages(){
	// 移除当前活动图片的 "active" 类
	    images[index].classList.remove('active');
	    
	    // 计算下一个图片的索引
	    index = (index + 1) % totalImages;
	    
	    // 添加下一个图片的 "active" 类
	    images[index].classList.add('active');
}
setInterval(changeImages,1500);//每1500ms调用函数