document.addEventListener('DOMContentLoaded', function() {
    // 处理下拉菜单
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            this.querySelector('.dropdown').classList.toggle('show');
        });
    });

    // 获取弹窗元素
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-btn');

    // 显示弹窗
    window.onload = function() {
        popup.classList.add('show');
    };

    // 点击关闭按钮隐藏弹窗
    closeButton.onclick = function() {
        popup.classList.remove('show');
    };

    // 点击弹窗外部区域隐藏弹窗
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.classList.remove('show');
        }
    }
});



@keyframes changeColor {
    0%   {color: white;}
    25%  {color: #ff7f50;}
    50%  {color: #6495ed;}
    75%  {color: #da70d6;}
    100% {color: white;}
}



    // 创建星星
   function createStars() {
    const numberOfStars = 200; // 星星的数量

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.opacity = Math.random(); // 随机透明度
        star.style.animationName = 'changeColor'; // 应用颜色变化动画
        star.style.animationDuration = Math.random() * 3 + 2 + 's'; // 随机动画持续时间
        star.style.animationIterationCount = 'infinite'; // 无限循环动画
        star.style.animationTimingFunction = 'linear'; // 线性动画
        document.body.appendChild(star);
    }
}
    // 移动星星
    function moveStars() {
    stars.forEach(star => {
        const left = parseFloat(star.style.left);
        const speed = Math.random() * 2 + 1; // 星星移动的速度，可以根据需要调整
        const newLeft = (left - speed) + 'px';

        // 检查星星是否已经移动出屏幕右侧
        if (left - speed < -star.offsetWidth) {
            star.style.left = '100vw'; // 从右侧重新进入
        } else if (left - speed > window.innerWidth) { // 检查是否移动出屏幕左侧
            star.style.left = '-100vw'; // 从左侧重新进入
        } else {
            star.style.left = newLeft; // 正常移动
        }
    });

    requestAnimationFrame(moveStars); // 继续动画循环
}
    createStars();
    moveStars();
    
});
