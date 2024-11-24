
document.addEventListener('DOMContentLoaded', function() {
    // 处理下拉菜单
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            this.querySelector('.dropdown').classList.toggle('show');
        });
    });

    // 显示和隐藏弹窗
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-btn');

    window.onload = function() {
        popup.classList.add('show');
    };

    closeButton.addEventListener('click', function() {
        popup.classList.remove('show');
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });

    // 创建和移动星星
    createAndMoveStars();
});

function createAndMoveStars() {
    const stars = [];
    const numberOfStars = 200; // 星星的数量

    function createStars() {
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * window.innerHeight + 'px';
            star.style.width = Math.random() * 2 + 1 + 'px';
            star.style.height = star.style.width; // 保持圆形
            star.style.backgroundImage = 'radial-gradient(circle, white, transparent)';
            document.body.appendChild(star);
            stars.push(star);
        }
    }

    function moveStars() {
        stars.forEach(star => {
            const left = parseFloat(star.style.left);
            const speed = Math.random() * 2 + 1; // 星星移动的速度
            const newLeft = (left - speed);

            if (newLeft < -star.offsetWidth) {
                star.style.left = '100vw'; // 从右侧重新进入
            } 
            else {
                star.style.left = newLeft + 'px'; // 正常移动
            }
        });

        requestAnimationFrame(moveStars); // 继续动画循环
    }

    createStars();
    moveStars();
}


    // 获取“About”按钮的DOM元素
    const aboutButton = document.querySelector('.about-link');

    // 为“About”按钮添加点击事件监听器
    aboutButton.addEventListener('click', function(event) {
        // 阻止<a>标签的默认行为（即不让它导航到href指定的URL）
        event.preventDefault();

        // 使用JavaScript进行页面跳转
        window.location.href = 'about.html';
    });
});
