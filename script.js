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
