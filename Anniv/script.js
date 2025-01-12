// Start the floating hearts animation immediately
function createFloatingHeartsAndImages() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('love');
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 3 + 's';
        heart.style.fontSize = Math.random() * 1.5 + 1.5 + 'em';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);

        const floatingImg = document.createElement('div');
        floatingImg.classList.add('floating-image');
        const img = document.createElement('img');
        img.src = 'img/moci.jpg';
        floatingImg.style.left = Math.random() * 100 + 'vw';
        floatingImg.appendChild(img);
        document.body.appendChild(floatingImg);

        setTimeout(() => {
            floatingImg.remove();
        }, 10000);
    }, 500);
}

// Cat battle logic
let hitCount = 0;
const maxHits = 3;

document.addEventListener('DOMContentLoaded', () => {
    // Start floating hearts immediately
    createFloatingHeartsAndImages();

    const attackBtn = document.getElementById('attack-btn');
    const moci = document.querySelector('.moci');
    const oyen = document.querySelector('.oyen');
    const oyenHealth = document.querySelectorAll('.hearts')[1];
    
    attackBtn.addEventListener('click', () => {
        // Disable button during animation
        attackBtn.disabled = true;
        
        // Add attack animation to Moci
        moci.classList.add('attack');
        
        // Add hit animation to Oyen after a small delay
        setTimeout(() => {
            oyen.classList.add('hit');
            hitCount++;
            
            // Update Oyen's health
            const hearts = '❤️'.repeat(maxHits - hitCount) + '🤍'.repeat(hitCount);
            oyenHealth.innerHTML = hearts;
            
            // Remove animation classes
            setTimeout(() => {
                moci.classList.remove('attack');
                oyen.classList.remove('hit');
                attackBtn.disabled = false;
                
                // Check if battle is over
                if (hitCount >= maxHits) {
                    endBattle();
                }
            }, 500);
        }, 250);
    });
});

function endBattle() {
    // Hide P1
    document.getElementById('p1').classList.add('hidden');
    
    // Show and fade in P2
    const p2 = document.getElementById('p2');
    p2.classList.add('fade-in');
}