// 页面加载完成后执行
window.onload = function() {
    // 获取所有的a标签元素
    var links = document.querySelectorAll('a');
  
    // 为每个链接添加点击事件监听器
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // 阻止链接默认行为，即不进行跳转
        event.preventDefault();
      });
    });
  };