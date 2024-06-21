



gsap.to("#nav",{
    backgroundColor : "black",
    duration : 0.5,
    height : "90px",
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }

})


gsap.to("#main",{
    backgroundColor : "black",
    scrollTrigger: {
        trigger : "#main",
        scroller : "body",
        start : "top -30%",
        end : "top -80%",
        scrub : 2
    }
})