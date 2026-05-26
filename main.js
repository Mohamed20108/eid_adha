// script.js

function startCelebration() {
    const nameInput = document.getElementById('user-name-input').value;
    const modal = document.getElementById('name-modal');
    const mainContent = document.getElementById('main-content');
    const welcomeMsg = document.getElementById('welcome-msg');

    if (nameInput.trim() !== "") {
        // إخفاء شاشة الطلب وإظهار التهنئة
        modal.style.display = 'none';
        mainContent.style.display = 'block';
        
        // تخصيص الرسالة بالاسم
        welcomeMsg.innerHTML = `عيد أضحى سعيد يا ${nameInput} ✨`;
        
        // تشغيل المؤثرات تلقائياً
        createConfetti();
    } else {
        alert("من فضلك أدخل اسمك أولاً 😊");
    }
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#d4af37', '#1e5128', '#ffffff', '#ffce31', '#4e944f'];

    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.opacity = Math.random();
        container.appendChild(confetti);

        setTimeout(() => { confetti.remove(); }, 3000);
    }
}