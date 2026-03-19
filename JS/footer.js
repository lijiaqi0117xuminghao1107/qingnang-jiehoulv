const listItems = document.querySelectorAll('.ewmlist li');

listItems.forEach(item => {
    const qrCode = document.createElement('div');

    if (item.querySelector('span').textContent === '邮箱') {
        qrCode.classList.add('qr-code2');
        const textNode = document.createTextNode('2841333824@qq.com');
        qrCode.appendChild(textNode);
    } else {
        qrCode.classList.add('qr-code');
        const img = document.createElement('img');
        img.src = '../img/' + item.dataset.qr;
        qrCode.appendChild(img);
    }

    item.appendChild(qrCode);

    item.addEventListener('mouseenter', () => {
        qrCode.style.display = 'block';
    });

    item.addEventListener('mouseleave', () => {
        qrCode.style.display = 'none';
    });
});