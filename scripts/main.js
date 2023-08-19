gsap.to("#hero", {
    transform: "translate(-3100px, 0px)",
    color: "#a3e635",
    duration: 10,
    scrollTrigger: {
        trigger: ".hero",
        scroller: "body",
        scrub: 2,
        pin: true,
        end: "top -500%"
    }
})

gsap.from(".skillset", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".skills",
        scroller: "body",
    }


})

gsap.from("#pf", {
    transform: "translateY(455px)",
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".About",
        scroller: "body",
    }


})

document.getElementById("nav_skills").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("nav_about").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("nav_projects").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("nav_contact").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("nav_work").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("work").scrollIntoView({
        behavior: "smooth"
    });
});

gsap.from("#proj1", {
    transform: "translateY(-100px)",
    duration: 2,
    scrollTrigger: {
        trigger: ".proj1",
        scroller: "body"

    }
})

gsap.from("#proj2", {
    transform: "translateY(-100px)",
    duration: 2,
    scrollTrigger: {
        trigger: ".proj2",
        scroller: "body"

    }
})

gsap.from("#proj3", {
    transform: "translateY(-100px)",
    duration: 2,
    scrollTrigger: {
        trigger: ".proj3",
        scroller: "body"

    }
})
let interval = "";
let num = 0;
let elem = "";
function issues() {
    if (num <= 180) {
        elem = document.getElementById("issues");
        let temp = Math.floor(Math.random() * 10);
        num = num + temp;
        elem.innerHTML = num;
    }
    else {
        elem.innerHTML = "189";
        clearInterval(interval)
    }

}


function issue_start() {
    interval = setInterval(issues, 100)
}

gsap.from("#issues", {
    scrollTrigger: {
        trigger: ".issues",
        onEnter: issue_start,
    }
})

let interval1 = "";
let num1 = 0;
let elem1 = "";
function contri() {
    if (num1 <= 77) {
        elem1 = document.getElementById("contri");
        let temp = Math.floor(Math.random() * 10);
        num1 = num1 + temp;
        elem1.innerHTML = num1;
    }
    else {
        elem1.innerHTML = "80+";
        clearInterval(interval1)
    }

}


function contri_start() {
    interval1 = setInterval(contri, 100)
}

gsap.from("#contri", {
    scrollTrigger: {
        trigger: ".contri",
        onEnter: contri_start
    }
})

let interval2 = "";
let num2 = 0;
let elem2 = "";
function lines() {
    if (num2 <= 8000) {
        elem2 = document.getElementById("lines");
        let temp = Math.floor(Math.random() * 10);
        num2 = num2 + temp;
        elem2.innerHTML = num2;
    }
    else {
        elem2.innerHTML = "8000+";
        clearInterval(interval2)
    }

}


function lines_start() {
    interval2 = setInterval(lines, 5)
}

gsap.from("#lines", {
    scrollTrigger: {
        trigger: ".lines",
        onEnter: lines_start
    }
})

gsap.to("#me", {
    scrollTrigger: {
        trigger: ".resume",
        scroller: "body",
        onEnter: font_updater_start

    }
})
let inter = "";
function font_updater_start() {
    inter = setInterval(font_updater, 200)
}

function font_updater() {
    let arr = [
        "Roboto",
        "monospace",
        "serif",
        "Arial",
        "BlinkMacSystemFont",
        "Consolas",
        "Times New Roman",
        "Segoe UI Symbol",
        "Georgia"];
    const colors = [
        '#6AD4C0',
        '#34DF62',
        '#DEE361',
        '#924827',
        '#D925C3',
        '#ADBFE9',
        '#800080',
        '#C2F90C',
        '#E26C07',
        '#800000'
    ];
    let rand = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);

    document.getElementById("me").style.fontFamily = arr[rand]
    document.getElementById("me").style.color = colors[col]

}


const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


gsap.from(".social_banner .social",{
    opacity:0,
    scale: 0,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".social_banner",
        scroller: "body"
    }
})


gsap.from(".main .work_exp",{
    transform: "translateX(400px)",
    opacity: 0,
    scale: 0,
    duration:1,
    stagger: 0.3,
    scrollTrigger:{
        trigger: ".work_exp",
        scroller: "body"
    }
})

const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)