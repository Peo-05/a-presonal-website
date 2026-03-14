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
// 获取按钮和表单
const submitBtn = document.getElementById('submitBtn');
const commentForm = document.getElementById('commentForm');

// 当表单提交时执行
submitBtn.addEventListener('click', function(event) {
    // 阻止表单提交
    event.preventDefault();
    
    // 弹出提示框
    alert('服务不可用');
});