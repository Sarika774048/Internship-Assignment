// Scroll Progress Bar
window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scrollBar").style.width = scrolled + "%";

    // Fade-in on scroll
    document.querySelectorAll('.fade-in').forEach(fade => {
        const rect = fade.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
            fade.classList.add('show');
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        let count = +counter.innerText;
        const increment = target / 200; // slower smooth count

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            requestAnimationFrame(updateCounter);
        } else counter.innerText = target;
    };
    updateCounter();
});

// Typing Effect
const texts = ["Aspiring Software Engineer", "Backend Developer", "DSA Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;
function type(){
    if(i >= texts.length) i = 0;
    current = texts[i];
    if(!isDeleting){
        document.querySelector(".typing").textContent = current.substring(0,j++);
        if(j > current.length){ isDeleting = true; setTimeout(type, 1000); return; }
    } else{
        document.querySelector(".typing").textContent = current.substring(0,j--);
        if(j < 0){ isDeleting=false; i++; }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();
