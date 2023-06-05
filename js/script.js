function animateScroll(){
    const animatedClass = document.querySelectorAll('.animate')

    function scrollHandler(){
        animatedClass.forEach(item =>{
            if (item.getBoundingClientRect().top <innerHeight -10){
                item.classList.add('slideUp')
            }
        });
    }

    document.addEventListener('scroll', scrollHandler);
}
animateScroll();