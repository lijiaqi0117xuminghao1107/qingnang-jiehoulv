let oleft = document.querySelector(".left");
let oright = document.querySelector(".right");
let oimglist = document.querySelector(".img_list");


let index = 0;

let lock = true;
function handlerightbtn() {
    if (!lock) return;

    index++;
    oimglist.style.left = index * -100 + "%";
    oimglist.style.transition = "0.5s ease";
    if (index === 5) {
        index = 0;
        setTimeout(() => {
            oimglist.style.left = 0;
            oimglist.style.transition = "none";
        }, 500);
    }

    setcircles();

    lock = false;
    setTimeout(() => {
        lock = true;
    }, 500);
}

//左右按键
oright.addEventListener("click", handlerightbtn);
oleft.addEventListener("click", () => {
    if (!lock) return;

    index--;
    if (index === -1) {
        oimglist.style.left = 5 * -100 + "%";
        oimglist.style.transition = "none";
        index = 4;
        setTimeout(() => {
            oimglist.style.left = index * -100 + "%";
            oimglist.style.transition = "0.5s ease";
        }, 0)
    } else {
        oimglist.style.left = index * -100 + "%";
    }

    setcircles();

    lock = false;
    setTimeout(() => {
        lock = true;
    }, 500);
});

//小圆点高亮显示
const circles = document.querySelectorAll(".circle");
function setcircles() {
    for (let i = 0; i < circles.length; i++) {
        if (i === index) {
            circles[i].classList.add("active");
        } else {
            circles[i].classList.remove("active");
        }
    }
}

//点击切换图片
const ocircle = document.querySelector(".lbt_circle");
ocircle.addEventListener("click", (e) => {
    if (e.target.nodeName.toLowerCase() === "li") {
        const n = Number(e.target.getAttribute("data-n"));
        index = n;
        setcircles();
        oimglist.style.left = index * -100 + "%";
    }
});

// 为图片添加点击跳转逻辑
const images = document.querySelectorAll(".img_list img");
images.forEach((img) => {
    img.addEventListener("click", function () {
        const href = this.getAttribute('data-href');
        if (href) {
            window.location.href = href;
        }
    });
});

//自动轮播
let autoplay = setInterval(handlerightbtn,2000);
const owrap = document.getElementById("lbt_wrap");
//鼠标移入停止轮播
owrap.addEventListener("mouseenter", () => {
    clearInterval(autoplay);
});
//鼠标移出继续轮播
owrap.addEventListener("mouseleave", () => {
    clearInterval(autoplay);
    autoplay = setInterval(handlerightbtn, 2000);
})