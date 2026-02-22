// ----- DATA (unchanged) -----
const questionsData = {
    Maths: [{ q: "What is 1 + 1?", a: ["1", "2", "3", "4"], correct: "2", img: "demo.jpeg" }, { q: "What is 5 - 2?", a: ["2", "3", "4", "5"], correct: "3", img: "demo.jpeg" }, { q: "Which number is biggest?", a: ["10", "50", "30", "5"], correct: "50", img: "demo.jpeg" }, { q: "What is 2 + 2?", a: ["4", "5", "6", "2"], correct: "4", img: "demo.jpeg" }, { q: "What shape is a ball?", a: ["Square", "Circle", "Triangle", "Cube"], correct: "Circle", img: "demo.jpeg" }, { q: "How many sides does a triangle have?", a: ["1", "2", "3", "4"], correct: "3", img: "demo.jpeg" }, { q: "What is 10 + 10?", a: ["10", "20", "30", "40"], correct: "20", img: "demo.jpeg" }, { q: "What is half of 4?", a: ["1", "2", "3", "4"], correct: "2", img: "demo.jpeg" }, { q: "Which is smaller?", a: ["100", "10", "50", "80"], correct: "10", img: "demo.jpeg" }, { q: "What is 3 + 0?", a: ["0", "3", "30", "6"], correct: "3", img: "demo.jpeg" }, { q: "How many legs do 2 cats have?", a: ["4", "6", "8", "10"], correct: "8", img: "demo.jpeg" }, { q: "What is 5 + 5?", a: ["10", "15", "5", "20"], correct: "10", img: "demo.jpeg" }, { q: "What comes after 9?", a: ["8", "10", "11", "12"], correct: "10", img: "demo.jpeg" }, { q: "What is 2 x 2?", a: ["2", "4", "6", "8"], correct: "4", img: "demo.jpeg" }, { q: "Which is a pair?", a: ["1", "2", "3", "5"], correct: "2", img: "demo.jpeg" }],
    English: [{ q: "Which is a vowel?", a: ["B", "C", "A", "D"], correct: "A", img: "demo.jpeg" }, { q: "What is the opposite of 'Hot'?", a: ["Warm", "Cold", "Sunny", "Ice"], correct: "Cold", img: "demo.jpeg" }, { q: "Which is an animal?", a: ["Apple", "Dog", "Table", "Car"], correct: "Dog", img: "demo.jpeg" }, { q: "What color is a banana?", a: ["Red", "Blue", "Yellow", "Green"], correct: "Yellow", img: "demo.jpeg" }, { q: "Which letter comes after 'A'?", a: ["B", "C", "D", "E"], correct: "B", img: "demo.jpeg" }, { q: "A for...?", a: ["Ball", "Apple", "Cat", "Dog"], correct: "Apple", img: "demo.jpeg" }, { q: "Which is a big letter?", a: ["a", "b", "G", "e"], correct: "G", img: "demo.jpeg" }, { q: "The opposite of 'Up' is?", a: ["Left", "Right", "Down", "High"], correct: "Down", img: "demo.jpeg" }, { q: "Which is a bird?", a: ["Lion", "Parrot", "Fish", "Ant"], correct: "Parrot", img: "demo.jpeg" }, { q: "One boy, two ...?", a: ["Boy", "Boys", "Boies", "Child"], correct: "Boys", img: "demo.jpeg" }, { q: "What is the color of the Sky?", a: ["Green", "Pink", "Blue", "Black"], correct: "Blue", img: "demo.jpeg" }, { q: "B for...?", a: ["Ant", "Bat", "Cat", "Egg"], correct: "Bat", img: "demo.jpeg" }, { q: "Which one is a fruit?", a: ["Mango", "Potato", "Onion", "Carrot"], correct: "Mango", img: "demo.jpeg" }, { q: "The plural of 'Cat' is?", a: ["Cat", "Cats", "Cates", "Kitten"], correct: "Cats", img: "demo.jpeg" }, { q: "Which word rhymes with 'Cat'?", a: ["Dog", "Rat", "Sun", "Boy"], correct: "Rat", img: "demo.jpeg" }],
    Science: [{ q: "What do we breathe?", a: ["Water", "Air", "Food", "Juice"], correct: "Air", img: "demo.jpeg" }, { q: "Where does the sun rise?", a: ["West", "East", "North", "South"], correct: "East", img: "demo.jpeg" }, { q: "How many legs does a spider have?", a: ["6", "8", "10", "4"], correct: "8", img: "demo.jpeg" }, { q: "Which is a living thing?", a: ["Stone", "Tree", "Car", "Doll"], correct: "Tree", img: "demo.jpeg" }, { q: "What do bees make?", a: ["Milk", "Honey", "Water", "Sugar"], correct: "Honey", img: "demo.jpeg" }, { q: "Which planet do we live on?", a: ["Mars", "Jupiter", "Earth", "Saturn"], correct: "Earth", img: "demo.jpeg" }, { q: "What color are leaves usually?", a: ["Blue", "Red", "Green", "Yellow"], correct: "Green", img: "demo.jpeg" }, { q: "Which part of the body helps us see?", a: ["Ears", "Nose", "Eyes", "Hand"], correct: "Eyes", img: "demo.jpeg" }, { q: "What does ice turn into when it melts?", a: ["Gas", "Water", "Rock", "Snow"], correct: "Water", img: "demo.jpeg" }, { q: "Which animal gives us milk?", a: ["Dog", "Cow", "Cat", "Lion"], correct: "Cow", img: "demo.jpeg" }, { q: "What is the giant star in our system?", a: ["Moon", "Earth", "Sun", "Mars"], correct: "Sun", img: "demo.jpeg" }, { q: "Which part of a plant is under the ground?", a: ["Leaf", "Flower", "Roots", "Stem"], correct: "Roots", img: "demo.jpeg" }, { q: "How many senses do humans have?", a: ["3", "4", "5", "6"], correct: "5", img: "demo.jpeg" }, { q: "Fish breathe through their...?", a: ["Lungs", "Gills", "Nose", "Mouth"], correct: "Gills", img: "demo.jpeg" }, { q: "Which animal can fly?", a: ["Dog", "Bird", "Pig", "Tiger"], correct: "Bird", img: "demo.jpeg" }],
    Tamil: [{ q: "தமிழ் மொழியின் முதல் எழுத்து எது?", a: ["ஆ", "அ", "இ", "ஈ"], correct: "அ", img: "tamil1.jpg" }, { q: "உயிர் எழுத்துக்கள் மொத்தம் எத்தனை?", a: ["10", "12", "18", "216"], correct: "12", img: "tamil2.jpg" }, { q: "மெய் எழுத்துக்கள் மொத்தம் எத்தனை?", a: ["12", "15", "18", "20"], correct: "18", img: "tamil3.jpeg" }, { q: "ஆயுத எழுத்து எது?", a: ["அ", "ஆ", "ஃ", "இ"], correct: "ஃ", img: "tamil4.jpg" }, { q: "நமது மாநிலம் எது?", a: ["கேரளா", "தமிழ்நாடு", "மும்பை", "டெல்லி"], correct: "தமிழ்நாடு", img: "tamil5.png" }, { q: "முக்கனிகள் எவை?", a: ["ஆப்பிள், ஆரஞ்சு", "மா, பலா, வாழை", "திராட்சை", "கொய்யா"], correct: "மா, பலா, வாழை", img: "tamil6.jpg" }, { q: "காட்டில் ராஜா யார்?", a: ["யானை", "புலி", "சிங்கம்", "கரடி"], correct: "சிங்கம்", img: "tamil7.jpg" }, { q: "தமிழ்நாட்டின் மாநில விலங்கு எது?", a: ["புலி", "சிங்கம்", "வரையாடு", "யானை"], correct: "வரையாடு", img: "tamil8.jpg" }, { q: "தேசியப் பறவை எது?", a: ["காகம்", "மயில்", "கிளி", "குயில்"], correct: "மயில்", img: "tamil9.webp" }, { q: "வாரம் எத்தனை நாட்கள்?", a: ["5", "6", "7", "8"], correct: "7", img: "tamil10.webp" }, { q: "இரவில் வானில் தெரிவது எது?", a: ["சூரியன்", "நிலா", "மேகம்", "மழை"], correct: "நிலா", img: "tamil11.jpg" }, { q: "பழங்களின் அரசன்?", a: ["மாம்பழம்", "வாழைப்பழம்", "ஆப்பிள்", "பலா"], correct: "மாம்பழம்", img: "tamil12.avif" }, { q: "நமக்கு பால் தரும் விலங்கு?", a: ["நாய்", "பூனை", "பசு", "சிங்கம்"], correct: "பசு", img: "tamil13.png" }, { q: "தேன் தரும் பூச்சி எது?", a: ["எறும்பு", "தேனீ", "வண்டு", "ஈ"], correct: "தேனீ", img: "tamil14.jpg" }, { q: "கண் எத்தனை?", a: ["1", "2", "3", "4"], correct: "2", img: "tamil15.avif" }],
    GK: [{ q: "How many colors in a rainbow?", a: ["5", "6", "7", "8"], correct: "7", img: "demo.jpeg" }, { q: "Who is the Prime Minister of India?", a: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Nehru"], correct: "Narendra Modi", img: "demo.jpeg" }, { q: "Which is the festival of colors?", a: ["Diwali", "Holi", "Eid", "Pongal"], correct: "Holi", img: "demo.jpeg" }, { q: "How many hours in a day?", a: ["12", "24", "48", "60"], correct: "24", img: "demo.jpeg" }, { q: "Which animal is known as ship of desert?", a: ["Horse", "Camel", "Lion", "Elephant"], correct: "Camel", img: "demo.jpeg" }, { q: "Capital of India?", a: ["Mumbai", "Chennai", "New Delhi", "Kolkata"], correct: "New Delhi", img: "demo.jpeg" }, { q: "Which is the tallest building?", a: ["Burj Khalifa", "Eiffel Tower", "Taj Mahal", "Pentagon"], correct: "Burj Khalifa", img: "demo.jpeg" }, { q: "How many states in India?", a: ["25", "28", "29", "30"], correct: "28", img: "demo.jpeg" }, { q: "Who discovered zero?", a: ["Newton", "Einstein", "Aryabhatta", "Galileo"], correct: "Aryabhatta", img: "demo.jpeg" }, { q: "National Fruit of India?", a: ["Apple", "Mango", "Banana", "Orange"], correct: "Mango", img: "demo.jpeg" }, { q: "National Anthem singer?", a: ["Tagore", "Gandhi", "Nehru", "Azad"], correct: "Tagore", img: "demo.jpeg" }, { q: "Which is the largest ocean?", a: ["Indian", "Atlantic", "Pacific", "Arctic"], correct: "Pacific", img: "demo.jpeg" }, { q: "How many wonders in the world?", a: ["5", "6", "7", "8"], correct: "7", img: "demo.jpeg" }, { q: "Which is the smallest bird?", a: ["Sparrow", "Hummingbird", "Crow", "Parrot"], correct: "Hummingbird", img: "demo.jpeg" }, { q: "Brain of computer?", a: ["RAM", "CPU", "Mouse", "Keyboard"], correct: "CPU", img: "demo.jpeg" }]
};

// ---------- SOUNDS ----------
function playSfx(type) {
    try {
        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = ctx.createOscillator();
        let gain = ctx.createGain();
        osc.type = 'sine';
        if (type === 'click') osc.frequency.value = 520;
        else if (type === 'win') osc.frequency.value = 920;
        else if (type === 'error') osc.frequency.value = 280;
        else if (type === 'back') osc.frequency.value = 400;
        else if (type === 'next') osc.frequency.value = 750;
        else if (type === 'pop') osc.frequency.value = 650;
        else if (type === 'download') osc.frequency.value = 880;
        else osc.frequency.value = 600;
        gain.gain.value = 0.2;
        osc.connect(gain).connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.13);
    } catch (e) { }
}

// state
let currentSubject = "", currentQuestionIndex = 0, userAnswers = [];
let childProfile = { name: "", age: "", avatar: "🧒" };
let finalScore = 0;
let wrongCount = 0;
const MAX_WRONG = 8;

// ----- Page Refresh Alert (fixed) -----
let isNavigatingInternally = false;
let navigationTimestamp = 0;

window.removeEventListener('beforeunload', handleBeforeUnload);
window.addEventListener('beforeunload', handleBeforeUnload);

function handleBeforeUnload(e) {
    const now = Date.now();
    if (isNavigatingInternally || (now - navigationTimestamp < 500)) {
        isNavigatingInternally = false;
        return;
    }
    
    const hasProgress = !document.getElementById('profile-form-screen').classList.contains('hidden') ||
                        !document.getElementById('quiz-screen').classList.contains('hidden') ||
                        !document.getElementById('results-screen').classList.contains('hidden') ||
                        !document.getElementById('certificate-screen').classList.contains('hidden');
    
    const hasAnswers = userAnswers && userAnswers.length > 0 && userAnswers.some(ans => ans !== null);
    
    if (hasProgress || hasAnswers || currentSubject !== "") {
        e.preventDefault();
        e.returnValue = 'Are you sure you want to refresh? Your progress may be lost.';
        return 'Are you sure you want to refresh? Your progress may be lost.';
    }
}

// ----- Home Button Without Refresh -----
function goHome() {
    isNavigatingInternally = true;
    navigationTimestamp = Date.now();
    
    playSfx('click');
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
    document.getElementById('profile-form-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('certificate-screen').classList.add('hidden');
    
    document.getElementById('retake-popup').classList.add('hidden');
    document.getElementById('validation-popup').classList.add('hidden');
    document.getElementById('age-validation-popup').classList.add('hidden');
    document.getElementById('missing-details-popup').classList.add('hidden');
    
    currentSubject = "";
    currentQuestionIndex = 0;
    userAnswers = [];
    wrongCount = 0;
    finalScore = 0;
    childProfile = { name: "", age: "", avatar: "🧒" };
    
    document.getElementById('child-name-input').value = '';
    document.getElementById('child-age-input').value = '';
    document.getElementById('avatar-preview').innerText = '🧒';
    
    document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
    
    document.getElementById('header-avatar').innerText = '🧒';
    document.getElementById('header-name').innerText = 'Friend';
    document.getElementById('header-age').innerText = '5 yrs';
    
    setTimeout(() => {
        isNavigatingInternally = false;
    }, 1000);
}

function playAgain() {
    playSfx('click');
    goHome();
}

function startApp() {
    playSfx('click');
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}

// Popup controls
function showRetakePopup() {
    playSfx('pop');
    document.getElementById('retake-popup').classList.remove('hidden');
}
function hideRetakePopup() {
    document.getElementById('retake-popup').classList.add('hidden');
}
function showValidationPopup() {
    playSfx('pop');
    document.getElementById('validation-popup').classList.remove('hidden');
}
function closeValidationPopup() {
    document.getElementById('validation-popup').classList.add('hidden');
}
function showAgePopup() {
    playSfx('pop');
    document.getElementById('age-validation-popup').classList.remove('hidden');
}
function closeAgePopup() {
    document.getElementById('age-validation-popup').classList.add('hidden');
}
function showMissingDetailsPopup() {
    playSfx('pop');
    document.getElementById('missing-details-popup').classList.remove('hidden');
}
function closeMissingDetailsPopup() {
    document.getElementById('missing-details-popup').classList.add('hidden');
}

function retakeQuiz() {
    playSfx('click');
    hideRetakePopup();
    currentQuestionIndex = 0;
    userAnswers = Array(15).fill(null);
    wrongCount = 0;
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showProfileForm(subject) {
    playSfx('click');
    currentSubject = subject;
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('profile-form-screen').classList.remove('hidden');
}

function selectAvatar(avatar) {
    playSfx('click');
    childProfile.avatar = avatar;
    document.getElementById('avatar-preview').innerText = avatar;
    document.querySelectorAll('.avatar-option').forEach(opt => opt.classList.remove('selected'));
    event.target.classList.add('selected');
}

function submitProfile() {
    let name = document.getElementById('child-name-input').value.trim();
    let age = document.getElementById('child-age-input').value.trim();

    if (!name || !age) {
        showMissingDetailsPopup();
        return;
    }

    if (parseInt(age) < 3) {
        showAgePopup();
        return;
    }

    childProfile.name = name;
    childProfile.age = age;
    document.getElementById('header-avatar').innerText = childProfile.avatar;
    document.getElementById('header-name').innerText = childProfile.name;
    document.getElementById('header-age').innerText = childProfile.age + ' yrs';
    document.getElementById('profile-form-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    document.getElementById('quiz-title').innerText = currentSubject + ' Quiz';
    
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = Array(15).fill(null);
    wrongCount = 0;
    showQuestion();
}

function showQuestion() {
    let qData = questionsData[currentSubject][currentQuestionIndex];
    document.getElementById('question-count').innerText = `Question ${currentQuestionIndex + 1} of 15`;
    document.getElementById('question-text').innerText = qData.q;
    document.getElementById('question-image').src = qData.img || 'demo.jpeg';
    document.getElementById('prev-btn').style.visibility = currentQuestionIndex === 0 ? "hidden" : "visible";
    let container = document.getElementById('answer-buttons'); container.innerHTML = '';
    qData.a.forEach(ans => {
        let btn = document.createElement('button');
        btn.innerText = ans; btn.classList.add('answer-btn');
        if (userAnswers[currentQuestionIndex] === ans) btn.classList.add('selected');
        btn.onclick = () => {
            playSfx('click');
            userAnswers[currentQuestionIndex] = ans;
            document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        };
        container.appendChild(btn);
    });
}

function nextQuestion() {
    playSfx('next');
    if (!userAnswers[currentQuestionIndex]) {
        showValidationPopup();
        return;
    }
    let correctAns = questionsData[currentSubject][currentQuestionIndex].correct;
    if (userAnswers[currentQuestionIndex] !== correctAns) {
        wrongCount++;
        if (wrongCount >= MAX_WRONG) {
            playSfx('error');
            document.getElementById('quiz-screen').classList.add('hidden');
            showRetakePopup();
            return;
        }
    }

    if (currentQuestionIndex < 14) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    playSfx('back');
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    let score = 0;
    let reviewHtml = '';
    for (let i = 0; i < 15; i++) {
        let q = questionsData[currentSubject][i];
        let userAns = userAnswers[i] || '(not answered)';
        let isCorrect = (userAns === q.correct);
        if (isCorrect) score++;
        let itemClass = isCorrect ? 'correct' : 'wrong';
        reviewHtml += `
            <div class="review-item ${itemClass}">
                <div class="review-question">${i + 1}. ${q.q}</div>
                <div>
                    <span class="review-answer user-answer">Your answer: ${userAns}</span>
                    ${!isCorrect ? `<span class="review-answer correct-answer">Correct: ${q.correct}</span>` : ''}
                </div>
            </div>
        `;
    }
    finalScore = score;
    document.getElementById('score-summary').innerHTML = `<h3>Score: ${score} / 15</h3>`;
    document.getElementById('answers-review').innerHTML = reviewHtml;

    let actionsDiv = document.getElementById('results-actions');
    if (score >= 8 && wrongCount < MAX_WRONG) {
        playSfx('win');
        actionsDiv.innerHTML = `
            <button class="action-btn" onclick="showCertDisplay()">Get Certificate! 🏆😊</button>
            <button class="action-btn" style="background:#ff9248;" onclick="playAgain()">Play Again 🔄</button>
        `;
    } else {
        playSfx('error');
        actionsDiv.innerHTML = `
            <p style="color:#c0392b; font-weight:bold;">You need 8 marks to pass. Try again! 😢</p>
            <button class="action-btn" style="background:#e67e22;" onclick="retakeQuiz()">Retake Quiz 🔄</button>
            <button class="action-btn" style="background:#ff9248; margin-top:5px;" onclick="playAgain()">Home 🏠</button>
        `;
    }
}

function showCertDisplay() {
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('certificate-screen').classList.remove('hidden');
    document.getElementById('cert-name-display').innerText = childProfile.name;
    document.getElementById('cert-subject').innerText = currentSubject;
    document.getElementById('cert-score').innerText = finalScore + ' / 15';
    
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        addScreenshotOption();
    }
}

// Add screenshot option for mobile
function addScreenshotOption() {
    if (document.getElementById('screenshot-btn')) return;
    
    const screenshotBtn = document.createElement('button');
    screenshotBtn.id = 'screenshot-btn';
    screenshotBtn.className = 'action-btn';
    screenshotBtn.style.background = '#3b82f6';
    screenshotBtn.style.marginTop = '10px';
    screenshotBtn.innerHTML = 'Take Screenshot 📸';
    screenshotBtn.onclick = takeScreenshot;
    
    document.querySelector('#certificate-screen .button-group').appendChild(screenshotBtn);
}

// Automatic screenshot function
function takeScreenshot() {
    playSfx('click');
    showScreenshotLoading();
    
    const element = document.getElementById('certificate-download-area');
    
    html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        allowTaint: false,
        useCORS: true,
        logging: false
    }).then(canvas => {
        hideScreenshotLoading();
        
        const imageData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `${childProfile.name}_Certificate.png`;
        link.href = imageData;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        
        setTimeout(() => {
            document.body.removeChild(link);
        }, 100);
        
        showScreenshotSuccess();
    }).catch(error => {
        console.error('Screenshot failed:', error);
        hideScreenshotLoading();
        showManualScreenshotInstructions();
    });
}

// Manual screenshot instructions
function showManualScreenshotInstructions() {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isAndroid = /Android/i.test(navigator.userAgent);
    
    let instructions = '';
    if (isIOS) {
        instructions = '📱 iPhone: Press Side + Volume Up buttons simultaneously';
    } else if (isAndroid) {
        instructions = '📱 Android: Press Power + Volume Down buttons simultaneously';
    } else {
        instructions = '📱 Press Print Screen (PrtScn) button on your keyboard';
    }
    
    const instructionPopup = document.createElement('div');
    instructionPopup.className = 'popup-overlay';
    instructionPopup.innerHTML = `
        <div class="popup-box validation" style="max-width: 450px;">
            <span class="popup-balloon left">🎈</span>
            <span class="popup-balloon right">🎈</span>
            <span class="popup-emoji">📸</span>
            <h3>Take a Screenshot</h3>
            <p style="font-size: 1.2rem;">${instructions}</p>
            <div style="background: #fff3cd; border-radius: 30px; padding: 15px; margin: 15px 0;">
                <p style="font-size: 1rem; margin: 5px 0;">✨ Then find it in your Photos/Gallery app</p>
            </div>
            <button onclick="this.closest('.popup-overlay').remove()" style="font-size: 1.5rem;">Got it! 👍</button>
        </div>
    `;
    document.body.appendChild(instructionPopup);
    
    setTimeout(() => {
        const popup = document.querySelector('.popup-overlay:last-child');
        if (popup) popup.remove();
    }, 9000);
}

// Screenshot loading indicator
function showScreenshotLoading() {
    const loader = document.createElement('div');
    loader.className = 'pdf-loading';
    loader.id = 'screenshot-loader';
    loader.innerHTML = `
        <div class="spinner"></div>
        <p style="font-size: 1.2rem; color: #2d1b4e;">Taking screenshot...</p>
        <p style="font-size: 1rem; color: #3b82f6; margin-top: 10px;">📸 Capturing your certificate</p>
    `;
    document.body.appendChild(loader);
}

function hideScreenshotLoading() {
    const loader = document.getElementById('screenshot-loader');
    if (loader) {
        loader.remove();
    }
}

// Screenshot success message
function showScreenshotSuccess() {
    const successPopup = document.createElement('div');
    successPopup.className = 'popup-overlay';
    successPopup.id = 'screenshot-success-popup';
    successPopup.innerHTML = `
        <div class="popup-box validation" style="max-width: 450px;">
            <span class="popup-balloon left">🎈</span>
            <span class="popup-balloon right">🎈</span>
            <span class="popup-emoji">✅</span>
            <h3>Screenshot Saved!</h3>
            <p style="font-size: 1.3rem;">Your certificate screenshot has been saved!</p>
            <div style="background: #e6f7ff; border-radius: 40px; padding: 15px; margin: 15px 0;">
                <p style="font-size: 1rem; margin: 5px 0;">📁 Check your Downloads folder</p>
                <p style="font-size: 0.9rem; margin: 5px 0;">Filename: ${childProfile.name}_Certificate.png</p>
            </div>
            <button onclick="this.closest('.popup-overlay').remove()" style="font-size: 1.5rem;">Awesome! 👍</button>
        </div>
    `;
    document.body.appendChild(successPopup);
    
    setTimeout(() => {
        const popup = document.getElementById('screenshot-success-popup');
        if (popup) popup.remove();
    }, 9000);
}

// Loading indicator functions
function showLoadingIndicator() {
    const loader = document.createElement('div');
    loader.className = 'pdf-loading';
    loader.id = 'pdf-loader';
    loader.innerHTML = `
        <div class="spinner"></div>
        <p style="font-size: 1.2rem; color: #2d1b4e;">Generating your certificate...</p>
        <p style="font-size: 1rem; color: #f97316; margin-top: 10px;">Please wait . . . ⏱️</p>
    `;
    document.body.appendChild(loader);
}

function hideLoadingIndicator() {
    const loader = document.getElementById('pdf-loader');
    if (loader) {
        loader.remove();
    }
}

// Mobile download confirmation
function showMobileDownloadConfirmation() {
    const successPopup = document.createElement('div');
    successPopup.className = 'popup-overlay';
    successPopup.id = 'download-success-popup';
    successPopup.innerHTML = `
        <div class="popup-box validation" style="max-width: 450px;">
            <span class="popup-balloon left">🎈</span>
            <span class="popup-balloon right">🎈</span>
            <span class="popup-emoji">✅</span>
            <h3>Success!</h3>
            <p style="font-size: 1.3rem;">Your PDF certificate has been downloaded!</p>
            <div style="background: #f0f9ff; border-radius: 40px; padding: 15px; margin: 15px 0; text-align: left;">
                <p style="font-size: 1.1rem; margin: 5px 0; color: #0369a1;">📱 <strong>To view your certificate:</strong></p>
                <p style="font-size: 1rem; margin: 8px 0; color: #164863;">1. Open your Downloads folder</p>
                <p style="font-size: 1rem; margin: 8px 0; color: #164863;">2. Tap on the PDF file</p>
                <p style="font-size: 1rem; margin: 8px 0; color: #164863;">3. Use pinch-to-zoom to adjust view</p>
            </div>
            <button onclick="this.closest('.popup-overlay').remove()" style="font-size: 1.5rem; padding: 12px 25px;">OK, Got it! 👍</button>
        </div>
    `;
    document.body.appendChild(successPopup);
    
    setTimeout(() => {
        const popup = document.getElementById('download-success-popup');
        if (popup) popup.remove();
    }, 9000);
}

function showMobileErrorPopup() {
    const errorPopup = document.createElement('div');
    errorPopup.className = 'popup-overlay';
    errorPopup.innerHTML = `
        <div class="popup-box validation">
            <span class="popup-balloon left">🎈</span>
            <span class="popup-balloon right">🎈</span>
            <span class="popup-emoji">❌</span>
            <h3>Oops!</h3>
            <p>Sorry, PDF download failed.</p>
            <p style="font-size: 1rem; margin-top: -10px;">Please try taking a screenshot instead 📸</p>
            <button onclick="this.closest('.popup-overlay').remove()" style="font-size: 1.5rem;">OK 👍</button>
        </div>
    `;
    document.body.appendChild(errorPopup);
    
    setTimeout(() => {
        const popup = document.querySelector('.popup-overlay:last-child');
        if (popup) popup.remove();
    }, 9000);
}

// ----- FIXED: Mobile PDF Download with Proper Sizing -----
function downloadCertificate() {
    playSfx('download');
    
    // Show loading popup
    showLoadingIndicator();
    
    // Wait 4 seconds before downloading
    setTimeout(function() {
        const element = document.getElementById('certificate-download-area');
        
        // Check if we're on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
            // For mobile devices - OPTIMIZED FOR MOBILE VIEWING
            // Get the actual dimensions of the certificate element
            const certificateWidth = element.offsetWidth;
            const certificateHeight = element.offsetHeight;
            
            // Calculate aspect ratio
            const aspectRatio = certificateWidth / certificateHeight;
            
            // Set PDF dimensions to match certificate aspect ratio
            // Use a standard width for mobile PDFs (6 inches is good for mobile screens)
            const pdfWidth = 6; // inches
            const pdfHeight = pdfWidth / aspectRatio;
            
            html2pdf().from(element).set({
                margin: 0, // No margins to use full space
                filename: `${childProfile.name}_Certificate.pdf`,
                pagebreak: { mode: 'avoid-all' }, // Prevent page breaks
                html2canvas: { 
                    scale: 2, // Higher scale for better quality
                    letterRendering: true, 
                    useCORS: true, 
                    logging: false,
                    allowTaint: false,
                    backgroundColor: '#ffffff',
                    windowWidth: certificateWidth,
                    windowHeight: certificateHeight,
                    scrollX: 0,
                    scrollY: 0
                },
                jsPDF: { 
                    unit: 'in', 
                    format: [pdfWidth, pdfHeight],
                    orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
                    compress: true,
                    precision: 16
                },
                image: { type: 'jpeg', quality: 0.98 } // Better image quality
            }).toPdf().get('pdf').then(function(pdf) {
                // Add metadata for better mobile viewing
                pdf.setProperties({
                    title: `${childProfile.name}'s Certificate`,
                    subject: 'Quiz Certificate',
                    author: 'Kids Learning Club',
                    keywords: 'certificate, kids, quiz',
                    creator: 'Kids Learning Club'
                });
                
                // Convert PDF to blob and create download link
                const blob = pdf.output('blob');
                const url = URL.createObjectURL(blob);
                
                // Create a temporary link and trigger download
                const link = document.createElement('a');
                link.href = url;
                link.download = `${childProfile.name}_Certificate.pdf`;
                link.style.display = 'none';
                
                document.body.appendChild(link);
                link.click();
                
                setTimeout(function() {
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                }, 100);
                
                hideLoadingIndicator();
                showMobileDownloadConfirmation();
            }).catch(function(error) {
                console.error('PDF generation failed:', error);
                hideLoadingIndicator();
                showMobileErrorPopup();
            });
        } else {
            // For desktop - use standard A4 landscape
            html2pdf().from(element).set({
                margin: 0.3,
                filename: `${childProfile.name}_Certificate.pdf`,
                html2canvas: { 
                    scale: 2, 
                    letterRendering: true, 
                    useCORS: true, 
                    logging: false,
                    backgroundColor: '#ffffff'
                },
                jsPDF: { 
                    unit: 'in', 
                    format: 'a4', 
                    orientation: 'landscape'
                },
                image: { type: 'jpeg', quality: 0.95 }
            }).save().then(function() {
                hideLoadingIndicator();
            }).catch(function(error) {
                console.error('PDF generation failed:', error);
                hideLoadingIndicator();
                alert('Sorry, PDF download failed. Please try again.');
            });
        }
    }, 4000); // 4 second delay
}

// expose globals
window.startApp = startApp;
window.showProfileForm = showProfileForm;
window.selectAvatar = selectAvatar;
window.submitProfile = submitProfile;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.showCertDisplay = showCertDisplay;
window.downloadCertificate = downloadCertificate;
window.retakeQuiz = retakeQuiz;
window.playAgain = playAgain;
window.closeValidationPopup = closeValidationPopup;
window.closeAgePopup = closeAgePopup;
window.closeMissingDetailsPopup = closeMissingDetailsPopup;
window.goHome = goHome;

// Enhanced Enter Key Handler
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('child-name-input');
    const ageInput = document.getElementById('child-age-input');
    
    function handleInputKeyPress(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault();
            
            if (!document.getElementById('profile-form-screen').classList.contains('hidden')) {
                submitProfile();
            } else if (!document.getElementById('quiz-screen').classList.contains('hidden')) {
                nextQuestion();
            }
        }
    }
    
    if (nameInput) {
        nameInput.addEventListener('keypress', handleInputKeyPress);
    }
    
    if (ageInput) {
        ageInput.addEventListener('keypress', handleInputKeyPress);
    }
    
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
            
            if (!document.getElementById('quiz-screen').classList.contains('hidden')) {
                e.preventDefault();
                nextQuestion();
            }
        }
    });
});


