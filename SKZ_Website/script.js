const bgm = document.getElementById('select-page-bgm');
const sfx = document.getElementById('click-sfx');
const fullImg = document.getElementById('char-full-img');

// 頁面載入後的設定
window.onload = () => {
    bgm.volume = 0.3; // 背景音樂設為 30% 音量，維持氛圍
    sfx.volume = 1.0; // 特效音設為 100% 音量，增加衝擊感
    
    // 嘗試啟動背景音樂
    bgm.play().catch(e => {
        console.log("瀏覽器限制自動播放，點擊畫面任何處啟動背景音");
        window.addEventListener('click', () => { bgm.play(); }, { once: true });
    });
};

const members = [
    { name: "Bang Chan", desc: "Leader & Producer", img: "photo/member0.jpg" },
    { name: "Lee Know", desc: "Main Dancer", img: "photo/member1.jpg" },
    { name: "Changbin", desc: "Main Rapper", img: "photo/member2.jpg" },
    { name: "Hyunjin", desc: "Visual & Dancer", img: "photo/member3.jpg" },
    { name: "HAN", desc: "All-Rounder Ace", img: "photo/member4.jpg" },
    { name: "Felix", desc: "Deep Voice Dancer", img: "photo/member5.jpg" },
    { name: "Seungmin", desc: "Main Vocalist", img: "photo/member6.jpg" },
    { name: "I.N", desc: "Maknae on Top", img: "photo/member7.jpg" }
];

const grid = document.getElementById('member-grid');

members.forEach(m => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.innerHTML = `<img src="${m.img}">`;
    
    // 當滑鼠「移入」時觸發聲音與背景更換
    card.onmouseenter = () => {
        // --- 特效音處理 ---
        sfx.currentTime = 0; // 強制音效回到開頭，這樣快速切換才不會卡住
        sfx.play(); // 播放特效音，這不會影響到正在播放的 bgm

        // --- 視覺與文字更換 ---
        document.getElementById('char-name').innerText = m.name;
        document.getElementById('char-desc').innerText = m.desc;
        fullImg.style.backgroundImage = `url(${m.img})`;
        
        // --- 增加瞬間背景特效 ---
        fullImg.style.filter = "brightness(2) contrast(1.5) grayscale(1)";
        setTimeout(() => {
            fullImg.style.filter = "brightness(0.7) contrast(1.2) grayscale(0)";
        }, 100);
    };

    grid.appendChild(card);
});