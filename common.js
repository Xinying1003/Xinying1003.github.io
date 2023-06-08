$(document).ready(function() {
    $('.nav-link-scroll').click(function(e) {
      e.preventDefault(); // 阻止默認點擊事件
  
      var target = $(this).attr('href'); // 獲取目標錨點的ID
      var offset = $(target).offset().top; // 獲取目標錨點的垂直偏移量
  
      $('html, body').animate({
        scrollTop: offset // 平滑滾動到目標錨點位置
      }, 800); // 滾動時間，以毫秒為單位
    });
  });