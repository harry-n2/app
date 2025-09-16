function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // すべてのタブコンテンツを非表示にする
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // すべてのタブボタンからactiveクラスを削除
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // 選択されたタブを表示し、ボタンをアクティブにする
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// ページ読み込み時にスムーズなアニメーション効果を追加
document.addEventListener('DOMContentLoaded', function() {
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // セクションにホバー効果を追加
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

// キーボードナビゲーション対応
document.addEventListener('keydown', function(event) {
    const tabButtons = document.querySelectorAll('.tab-button');
    const activeButton = document.querySelector('.tab-button.active');
    let currentIndex = Array.from(tabButtons).indexOf(activeButton);
    
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault();
        
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % tabButtons.length;
        } else {
            currentIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
        }
        
        tabButtons[currentIndex].click();
        tabButtons[currentIndex].focus();
    }
});