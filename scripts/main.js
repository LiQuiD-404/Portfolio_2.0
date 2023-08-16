gsap.to("#hero",{
    transform: "translate(-3100px, 0px)",
    color : "#a3e635",
    fontWeight: 400,
    duration:10,
    scrollTrigger:{
        trigger: ".hero",
        scroller: "body",
        scrub: 2,
        pin: true,
        end: "top -500%"
    }
})

gsap.from(".skillset",{
    scale : 0,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger:{
        trigger: ".skills",
        scroller: "body",
    }
    

})

gsap.from("#pf",{
    transform : "translateY(455px)",
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger: ".About",
        scroller: "body",
    }
    

})

document.getElementById("nav_skills").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("nav_about").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("nav_projects").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});
