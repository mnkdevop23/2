// ANIMATION ON SCROLL
let animatedItems = document.querySelectorAll('.animated');

if (animatedItems.length) {
    function fadeInOnScroll() {
        for (i = 0; i < animatedItems.length; i++) {
            let animatedItem = animatedItems[i];
            let animatedItemHeight = animatedItem.offsetHeight;
            let animatedItemOffset = offset(animatedItem).top;
            let animationStart = 2;

            let animatedItemPoint = window.innerHeight - animatedItemHeight / animationStart;

            if (animatedItemHeight > window.innerHeight) {
                animatedItemPoint = window.innerHeight - window.innerHeight / animationStart;
            }

            if ((pageYOffset > animatedItemOffset - animatedItemPoint) && pageYOffset < (animatedItemOffset + animatedItemHeight)) {
                animatedItem.classList.add('fade-in');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
}

window.addEventListener('scroll', fadeInOnScroll);

// ANIMATED COUNTING
(function(){
    let counter = document.querySelectorAll('.counter');
    let limit = 0;
    window.addEventListener('scroll', function(){  
        if( limit == counter.length ){ return; }
        for(let i = 0; i < counter.length; i++){
        let pos = counter[i].getBoundingClientRect().top;
        let win = window.innerHeight - 90;
        if( pos < win && counter[i].dataset.stop === "0" ){
            counter[i].dataset.stop = 1;
            let x = 0;
            limit++;
            let int = setInterval(function(){
            x = x + Math.ceil( counter[i].dataset.to / 50 ); 
            counter[i].innerText = x;
            if( x > counter[i].dataset.to ){
                counter[i].innerText = counter[i].dataset.to;
                clearInterval(int);
            }
            }, 60);
        }
        }
    });
})();

// NAVIGATION
const scrollToElem = (elem) => {
    document.querySelector(elem).scrollIntoView({behavior:"smooth"});
}

// RANDOM INTEGER
const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
document.querySelector('.people-quantity').innerHTML = randomInt(109, 286);

// CURRENT YEAR
document.querySelector('.year').innerHTML = new Date().getFullYear();
                            
                            
                            
                            
                            
                            