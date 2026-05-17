// Tab functionality
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        tabcontent.style.display = "none"; 
    }

    event.currentTarget.classList.add("active-link");

    var activeTab = document.getElementById(tabname);
    activeTab.classList.add("active-tab");
    activeTab.style.display = "block"; 
}

opentab('Skills');

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile Menu Toggle
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form Submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const popup = document.createElement('div');
    popup.className = 'success-popup show';
    popup.textContent = 'Message sent successfully!';
    document.body.appendChild(popup);
    
    setTimeout(() => {
        popup.remove();
    }, 3000);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
