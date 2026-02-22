
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
    // Reset state
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
        showMissingDetailsPopup(); // Show popup instead of alert
        return;
    }

    // Check if age is below 3
    if (parseInt(age) < 3) {
        showAgePopup();
        return; // Don't proceed to quiz
    }

    childProfile.name = name;
    childProfile.age = age;
    document.getElementById('header-avatar').innerText = childProfile.avatar;
    document.getElementById('header-name').innerText = childProfile.name;
    document.getElementById('header-age').innerText = childProfile.age + ' yrs';
    document.getElementById('profile-form-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
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
        actionsDiv.innerHTML = `<button class="action-btn" onclick="showCertDisplay()">Get Certificate! 🏆😊</button>
                                        <button class="action-btn" style="background:#ff9248;" onclick="location.reload()">Home 🏠</button>`;
    } else {
        playSfx('error');
        actionsDiv.innerHTML = `<p style="color:#c0392b; font-weight:bold;">You need 8 marks to pass. Try again! 😢</p>
                                        <button class="action-btn" style="background:#e67e22;" onclick="retakeQuiz()">Retake Quiz 🔄</button>
                                        <button class="action-btn" style="background:#ff9248; margin-top:5px;" onclick="location.reload()">Home 🏠</button>`;
    }
}

function showCertDisplay() {
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('certificate-screen').classList.remove('hidden');
    document.getElementById('cert-name-display').innerText = childProfile.name;
    document.getElementById('cert-subject').innerText = currentSubject;
    document.getElementById('cert-score').innerText = finalScore + ' / 15';
}

function downloadCertificate() {
    playSfx('download');
    
    const element = document.getElementById('certificate-download-area');
    
    // Check if we're on a mobile device
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        // For mobile devices, use a different approach
        html2pdf().from(element).set({
            margin: 0.2,
            filename: `${childProfile.name}_Award.pdf`,
            html2canvas: { 
                scale: 2, 
                letterRendering: true, 
                useCORS: true, 
                logging: false,
                allowTaint: false,
                backgroundColor: '#ffffff'
            },
            jsPDF: { 
                unit: 'in', 
                format: 'a4', 
                orientation: 'landscape',
                compress: true
            }
        }).toPdf().get('pdf').then(function(pdf) {
            // Convert PDF to blob and create download link
            const blob = pdf.output('blob');
            const url = URL.createObjectURL(blob);
            
            // Create a temporary link and trigger download
            const link = document.createElement('a');
            link.href = url;
            link.download = `${childProfile.name}_Award.pdf`;
            link.style.display = 'none';
            
            // For iOS, we need to append to body
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            setTimeout(function() {
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
            }, 100);
        }).catch(function(error) {
            console.error('PDF generation failed:', error);
            alert('Sorry, PDF download failed. Please try again or take a screenshot.');
        });
    } else {
        // For desktop, use the original method
        html2pdf().from(element).set({
            margin: 0.3,
            filename: `${childProfile.name}_Award.pdf`,
            html2canvas: { scale: 2, letterRendering: true, useCORS: true, logging: false },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
        }).save();
    }
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
window.closeValidationPopup = closeValidationPopup;
window.closeAgePopup = closeAgePopup;
window.closeMissingDetailsPopup = closeMissingDetailsPopup;

// Handle Enter key on input fields
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('child-name-input');
    const ageInput = document.getElementById('child-age-input');
    
    function handleInputKeyPress(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault(); // Prevent form submission
            submitProfile(); // Call the submit function
        }
    }
    
    if (nameInput) {
        nameInput.addEventListener('keypress', handleInputKeyPress);
    }
    
    if (ageInput) {
        ageInput.addEventListener('keypress', handleInputKeyPress);
    }
});
function showLoadingIndicator() {
    const loader = document.createElement('div');
    loader.className = 'pdf-loading';
    loader.id = 'pdf-loader';
    loader.innerHTML = `
        <div class="spinner"></div>
        <p style="font-size: 1.2rem; color: #2d1b4e;">Generating your certificate...</p>
    `;
    document.body.appendChild(loader);
}

function hideLoadingIndicator() {
    const loader = document.getElementById('pdf-loader');
    if (loader) {
        loader.remove();
    }
}
