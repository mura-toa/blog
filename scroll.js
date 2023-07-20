function scrollToElement(element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;
    const offset = 120; // 少し上にスクロールするオフセット量（ピクセル数）
  
    window.scrollTo({
      top: offsetTop - offset,
      behavior: 'smooth', // スムーズなスクロールを実行
    });
  }
  
  // ジャンプ先の要素を探してスクロール処理を実行するイベントリスナー
  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a.scroll-link');
  
    scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // リンクのデフォルトの挙動を無効化
  
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          scrollToElement(target);
        }
      });
    });
  });