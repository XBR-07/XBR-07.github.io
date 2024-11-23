// 用于处理下拉菜单的显示和隐藏
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            this.querySelector('.dropdown').classList.toggle('show');
        });
    });
});