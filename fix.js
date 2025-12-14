// 將以下代碼複製並粘貼到腳本“Google Hit Hider by Domain”第304行，然後點擊上方“文件”菜單中的“保存”，再刷新頁面即可。
let timer = null;
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
    const currentY = window.scrollY;
    const isDown = currentY > lastY;
    lastY = currentY;
    isDown && !timer && (timer = setTimeout(() => {
        GHHbDinit();
        timer = null;
    }, 1000));
});
