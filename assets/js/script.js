const header = document.getElementById('hore');
window.addEventListener('scroll', () => {
    header.style.display = "grid"
    if(window.pageYOffset == 0){
        header.style.display = "none"
    }
    var scrollY = window.pageYOffset;   
    document.documentElement.style.setProperty('--scrollY', scrollY+"px")
    
})
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= -400 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight+200 || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

document.addEventListener('scroll', function () {
    if (isInViewport(two)){
        let img = two.childNodes[1]
        let text = two.childNodes[3]
        img.style.opacity = 1
        text.style.opacity =1    

    }else{
        let img = two.childNodes[1]
        let text = two.childNodes[3]
        img.style.opacity = 0
        text.style.opacity =0
    }
    if(isInViewport(three)){        
        let img = three.childNodes[1]
        let text = three.childNodes[3]
        img.style.opacity = 1
        text.style.opacity =1       
    }
    else{
        let img = three.childNodes[1]
        let text = three.childNodes[3]
        img.style.opacity = 0
        text.style.opacity =0
    }
})