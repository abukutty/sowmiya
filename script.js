const questionsData = {
    Maths: [
        { q: "What is 1 + 1?", a: ["1", "2", "3", "4"], correct: "2", img: "demo.jpeg" },
        { q: "What is 5 - 2?", a: ["2", "3", "4", "5"], correct: "3", img: "demo.jpeg" },
        { q: "Which number is biggest?", a: ["10", "50", "30", "5"], correct: "50", img: "demo.jpeg" },
        { q: "What is 2 + 2?", a: ["4", "5", "6", "2"], correct: "4", img: "demo.jpeg" },
        { q: "What shape is a ball?", a: ["Square", "Circle", "Triangle", "Cube"], correct: "Circle", img: "demo.jpeg" },
        { q: "How many sides does a triangle have?", a: ["1", "2", "3", "4"], correct: "3", img: "demo.jpeg" },
        { q: "What is 10 + 10?", a: ["10", "20", "30", "40"], correct: "20", img: "demo.jpeg" },
        { q: "What is half of 4?", a: ["1", "2", "3", "4"], correct: "2", img: "demo.jpeg" },
        { q: "Which is smaller?", a: ["100", "10", "50", "80"], correct: "10", img: "demo.jpeg" },
        { q: "What is 3 + 0?", a: ["0", "3", "30", "6"], correct: "3", img: "demo.jpeg" },
        { q: "How many legs do 2 cats have?", a: ["4", "6", "8", "10"], correct: "8", img: "demo.jpeg" },
        { q: "What is 5 + 5?", a: ["10", "15", "5", "20"], correct: "10", img: "demo.jpeg" },
        { q: "What comes after 9?", a: ["8", "10", "11", "12"], correct: "10", img: "demo.jpeg" },
        { q: "What is 2 x 2?", a: ["2", "4", "6", "8"], correct: "4", img: "demo.jpeg" },
        { q: "Which is a pair?", a: ["1", "2", "3", "5"], correct: "2", img: "demo.jpeg" }
    ],

    English: [
        { q: "Which is a vowel?", a: ["B", "C", "A", "D"], correct: "A", img: "demo.jpeg" },
        { q: "What is the opposite of 'Hot'?", a: ["Warm", "Cold", "Sunny", "Ice"], correct: "Cold", img: "demo.jpeg" },
        { q: "Which is an animal?", a: ["Apple", "Dog", "Table", "Car"], correct: "Dog", img: "demo.jpeg" },
        { q: "What color is a banana?", a: ["Red", "Blue", "Yellow", "Green"], correct: "Yellow", img: "demo.jpeg" },
        { q: "Which letter comes after 'A'?", a: ["B", "C", "D", "E"], correct: "B", img: "demo.jpeg" },
        { q: "A for...?", a: ["Ball", "Apple", "Cat", "Dog"], correct: "Apple", img: "demo.jpeg" },
        { q: "Which is a big letter?", a: ["a", "b", "G", "e"], correct: "G", img: "demo.jpeg" },
        { q: "The opposite of 'Up' is?", a: ["Left", "Right", "Down", "High"], correct: "Down", img: "demo.jpeg" },
        { q: "Which is a bird?", a: ["Lion", "Parrot", "Fish", "Ant"], correct: "Parrot", img: "demo.jpeg" },
        { q: "One boy, two ...?", a: ["Boy", "Boys", "Boies", "Child"], correct: "Boys", img: "demo.jpeg" },
        { q: "What is the color of the Sky?", a: ["Green", "Pink", "Blue", "Black"], correct: "Blue", img: "demo.jpeg" },
        { q: "B for...?", a: ["Ant", "Bat", "Cat", "Egg"], correct: "Bat", img: "demo.jpeg" },
        { q: "Which one is a fruit?", a: ["Mango", "Potato", "Onion", "Carrot"], correct: "Mango", img: "demo.jpeg" },
        { q: "The plural of 'Cat' is?", a: ["Cat", "Cats", "Cates", "Kitten"], correct: "Cats", img: "demo.jpeg" },
        { q: "Which word rhymes with 'Cat'?", a: ["Dog", "Rat", "Sun", "Boy"], correct: "Rat", img: "demo.jpeg" }
    ],

    Science: [
        { q: "What do we breathe?", a: ["Water", "Air", "Food", "Juice"], correct: "Air", img: "demo.jpeg" },
        { q: "Where does the sun rise?", a: ["West", "East", "North", "South"], correct: "East", img: "demo.jpeg" },
        { q: "How many legs does a spider have?", a: ["6", "8", "10", "4"], correct: "8", img: "demo.jpeg" },
        { q: "Which is a living thing?", a: ["Stone", "Tree", "Car", "Doll"], correct: "Tree", img: "demo.jpeg" },
        { q: "What do bees make?", a: ["Milk", "Honey", "Water", "Sugar"], correct: "Honey", img: "demo.jpeg" },
        { q: "Which planet do we live on?", a: ["Mars", "Jupiter", "Earth", "Saturn"], correct: "Earth", img: "demo.jpeg" },
        { q: "What color are leaves usually?", a: ["Blue", "Red", "Green", "Yellow"], correct: "Green", img: "demo.jpeg" },
        { q: "Which part of the body helps us see?", a: ["Ears", "Nose", "Eyes", "Hand"], correct: "Eyes", img: "demo.jpeg" },
        { q: "What does ice turn into when it melts?", a: ["Gas", "Water", "Rock", "Snow"], correct: "Water", img: "demo.jpeg" },
        { q: "Which animal gives us milk?", a: ["Dog", "Cow", "Cat", "Lion"], correct: "Cow", img: "demo.jpeg" },
        { q: "What is the giant star in our system?", a: ["Moon", "Earth", "Sun", "Mars"], correct: "Sun", img: "demo.jpeg" },
        { q: "Which part of a plant is under the ground?", a: ["Leaf", "Flower", "Roots", "Stem"], correct: "Roots", img: "demo.jpeg" },
        { q: "How many senses do humans have?", a: ["3", "4", "5", "6"], correct: "5", img: "demo.jpeg" },
        { q: "Fish breathe through their...?", a: ["Lungs", "Gills", "Nose", "Mouth"], correct: "Gills", img: "demo.jpeg" },
        { q: "Which animal can fly?", a: ["Dog", "Bird", "Pig", "Tiger"], correct: "Bird", img: "demo.jpeg" }
    ],

    Tamil: [
        { q: "தமிழ் மொழியின் முதல் எழுத்து எது?", a: ["ஆ", "அ", "இ", "ஈ"], correct: "அ", img: "demo.jpeg" },
        { q: "உயிர் எழுத்துக்கள் மொத்தம் எத்தனை?", a: ["10", "12", "18", "216"], correct: "12", img: "demo.jpeg" },
        { q: "மெய் எழுத்துக்கள் மொத்தம் எத்தனை?", a: ["12", "15", "18", "20"], correct: "18", img: "demo.jpeg" },
        { q: "ஆயுத எழுத்து எது?", a: ["அ", "ஆ", "ஃ", "இ"], correct: "ஃ", img: "demo.jpeg" },
        { q: "நமது மாநிலம் எது?", a: ["கேரளா", "தமிழ்நாடு", "மும்பை", "டெல்லி"], correct: "தமிழ்நாடு", img: "demo.jpeg" },
        { q: "முக்கனிகள் எவை?", a: ["ஆப்பிள், ஆரஞ்சு", "மா, பலா, வாழை", "திராட்சை", "கொய்யா"], correct: "மா, பலா, வாழை", img: "demo.jpeg" },
        { q: "காட்டில் ராஜா யார்?", a: ["யானை", "புலி", "சிங்கம்", "கரடி"], correct: "சிங்கம்", img: "demo.jpeg" },
        { q: "தமிழ்நாட்டின் மாநில விலங்கு எது?", a: ["புலி", "சிங்கம்", "வரையாடு", "யானை"], correct: "வரையாடு", img: "demo.jpeg" },
        { q: "தேசியப் பறவை எது?", a: ["காகம்", "மயில்", "கிளி", "குயில்"], correct: "மயில்", img: "demo.jpeg" },
        { q: "வாரம் எத்தனை நாட்கள்?", a: ["5", "6", "7", "8"], correct: "7", img: "demo.jpeg" },
        { q: "இரவில் வானில் தெரிவது எது?", a: ["சூரியன்", "நிலா", "மேகம்", "மழை"], correct: "நிலா", img: "demo.jpeg" },
        { q: "பழங்களின் அரசன்?", a: ["மாம்பழம்", "வாழைப்பழம்", "ஆப்பிள்", "பலா"], correct: "மாம்பழம்", img: "demo.jpeg" },
        { q: "நமக்கு பால் தரும் விலங்கு?", a: ["நாய்", "பூனை", "பசு", "சிங்கம்"], correct: "பசு", img: "demo.jpeg" },
        { q: "தேன் தரும் பூச்சி எது?", a: ["எறும்பு", "தேனீ", "வண்டு", "ஈ"], correct: "தேனீ", img: "demo.jpeg" },
        { q: "கண் எத்தனை?", a: ["1", "2", "3", "4"], correct: "2", img: "demo.jpeg" }
    ],

    GK: [
        { q: "How many colors in a rainbow?", a: ["5", "6", "7", "8"], correct: "7", img: "demo.jpeg" },
        { q: "Who is the Prime Minister of India?", a: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Nehru"], correct: "Narendra Modi", img: "demo.jpeg" },
        { q: "Which is the festival of colors?", a: ["Diwali", "Holi", "Eid", "Pongal"], correct: "Holi", img: "demo.jpeg" },
        { q: "How many hours in a day?", a: ["12", "24", "48", "60"], correct: "24", img: "demo.jpeg" },
        { q: "Which animal is known as ship of desert?", a: ["Horse", "Camel", "Lion", "Elephant"], correct: "Camel", img: "demo.jpeg" },
        { q: "Capital of India?", a: ["Mumbai", "Chennai", "New Delhi", "Kolkata"], correct: "New Delhi", img: "demo.jpeg" },
        { q: "Which is the tallest building?", a: ["Burj Khalifa", "Eiffel Tower", "Taj Mahal", "Pentagon"], correct: "Burj Khalifa", img: "demo.jpeg" },
        { q: "How many states in India?", a: ["25", "28", "29", "30"], correct: "28", img: "demo.jpeg" },
        { q: "Who discovered zero?", a: ["Newton", "Einstein", "Aryabhatta", "Galileo"], correct: "Aryabhatta", img: "demo.jpeg" },
        { q: "National Fruit of India?", a: ["Apple", "Mango", "Banana", "Orange"], correct: "Mango", img: "demo.jpeg" },
        { q: "National Anthem singer?", a: ["Tagore", "Gandhi", "Nehru", "Azad"], correct: "Tagore", img: "demo.jpeg" },
        { q: "Which is the largest ocean?", a: ["Indian", "Atlantic", "Pacific", "Arctic"], correct: "Pacific", img: "demo.jpeg" },
        { q: "How many wonders in the world?", a: ["5", "6", "7", "8"], correct: "7", img: "demo.jpeg" },
        { q: "Which is the smallest bird?", a: ["Sparrow", "Hummingbird", "Crow", "Parrot"], correct: "Hummingbird", img: "demo.jpeg" },
        { q: "Brain of computer?", a: ["RAM", "CPU", "Mouse", "Keyboard"], correct: "CPU", img: "demo.jpeg" }
    ]
};

let currentSubject = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let tempSelection = null;
let childProfile = {
    name: "",
    age: "",
    avatar: "🧒"
};

// --- Sounds ---
const sounds = {
    click: new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'),
    correct: new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'),
    win: new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3'),
    error: new Audio('https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3')
};

function playSfx(name) {
    sounds[name].currentTime = 0;
    sounds[name].play().catch(e => console.log("Sound play failed"));
}

// --- Popup Logic ---
function openPopup() {
    playSfx('error');
    document.getElementById('custom-popup').classList.remove('hidden');
}

function closePopup() {
    playSfx('click');
    document.getElementById('custom-popup').classList.add('hidden');
}

// --- Profile Functions ---
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
    
    // Remove selected class from all options
    document.querySelectorAll('.avatar-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.classList.add('selected');
}

function submitProfile() {
    const name = document.getElementById('child-name-input').value.trim();
    const age = document.getElementById('child-age-input').value.trim();
    
    if (!name || !age) {
        openPopup();
        return;
    }
    
    childProfile.name = name;
    childProfile.age = age;
    
    // Update header profile badge
    document.getElementById('header-avatar').innerText = childProfile.avatar;
    document.getElementById('header-name').innerText = childProfile.name;
    document.getElementById('header-age').innerText = childProfile.age + ' yrs';
    
    playSfx('click');
    document.getElementById('profile-form-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    
    // Start quiz with the selected subject
    startQuiz();
}

// --- Quiz Logic ---
function startQuiz() {
    playSfx('click');
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('quiz-title').innerText = currentSubject;
    showQuestion();
}

function showQuestion() {
    const qData = questionsData[currentSubject][currentQuestionIndex];
    document.getElementById('question-count').innerText = `Question ${currentQuestionIndex + 1} of ${questionsData[currentSubject].length}`;
    document.getElementById('question-text').innerText = qData.q;
    
    // Set question image
    const questionImage = document.getElementById('question-image');
    if (qData.img) {
        questionImage.src = qData.img;
        questionImage.alt = qData.q;
    }
    
    const container = document.getElementById('answer-buttons');
    container.innerHTML = '';
    tempSelection = null;

    qData.a.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer;
        btn.classList.add('answer-btn');
        btn.onclick = () => handleChoice(btn, answer);
        container.appendChild(btn);
    });
}

function handleChoice(selectedBtn, answer) {
    playSfx('click');
    const allBtns = document.querySelectorAll('.answer-btn');
    allBtns.forEach(b => b.classList.remove('selected'));
    selectedBtn.classList.add('selected');
    tempSelection = answer;
}

function nextQuestion() {
    if (tempSelection === null) {
        openPopup();
        return;
    }

    playSfx('correct');
    userAnswers[currentQuestionIndex] = tempSelection;
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsData[currentSubject].length) {
        showQuestion();
    } else {
        playSfx('win');
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    let score = 0;
    let reviewHTML = "";
    const questions = questionsData[currentSubject];
    questions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        if (isCorrect) score++;
        reviewHTML += `
            <div class="review-item">
                <p><strong>Q${index + 1}: ${q.q}</strong></p>
                <p>You picked: <span class="${isCorrect ? 'correct-text' : 'wrong-text'}">${userAnswers[index]}</span></p>
                ${!isCorrect ? `<p>Correct: <span class="correct-text">${q.correct}</span></p>` : ''}
            </div>`;
    });
    document.getElementById('score-summary').innerHTML = `<h3>Final Marks: ${score} / ${questions.length}</h3>`;
    document.getElementById('answers-review').innerHTML = reviewHTML;
    window.finalScore = score;
}

function goToNameScreen() {
    playSfx('click');
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('name-screen').classList.remove('hidden');
}

function showCertificate() {
    playSfx('win');
    const name = document.getElementById('child-name').value || childProfile.name || "Little Star";
    document.getElementById('name-screen').classList.add('hidden');
    document.getElementById('certificate-screen').classList.remove('hidden');
    document.getElementById('cert-name-display').innerText = name;
    document.getElementById('cert-subject').innerText = currentSubject;
    document.getElementById('cert-score').innerText = `${window.finalScore} / ${questionsData[currentSubject].length}`;
}

// PDF Export Function
function downloadCertificate() {
    playSfx('click');

    const element = document.getElementById('certificate-download-area');
    const userName = document.getElementById('cert-name-display').innerText;

    const opt = {
        margin: 0,
        filename: userName + '_Award.pdf',
        image: {
            type: 'jpeg',
            quality: 1
        },
        html2canvas: {
            scale: 4,
            useCORS: true,
            letterRendering: true,
            allowTaint: true,
            backgroundColor: null
        },
        jsPDF: {
            unit: 'px',
            format: [900, 600],
            orientation: 'landscape'
        }
    };

    html2pdf().set(opt).from(element).save();
}

