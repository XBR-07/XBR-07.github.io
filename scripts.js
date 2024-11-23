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



// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const stars = [];
    const numberOfStars = 200; // 星星的数量

    // 创建星星
   function createStars() {
    const numberOfStars = 200;
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.backgroundColor = getRandomColor(); // 随机颜色
        document.body.appendChild(star);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    }

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
