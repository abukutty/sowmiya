const questionsData = {
    Maths: [
        { q: "What is 1 + 1?", a: ["1", "2", "3", "4"], correct: "2" },
        { q: "What is 5 - 2?", a: ["2", "3", "4", "5"], correct: "3" },
        { q: "Which number is biggest?", a: ["10", "50", "30", "5"], correct: "50" },
        { q: "What is 2 + 2?", a: ["4", "5", "6", "2"], correct: "4" },
        { q: "What shape is a ball?", a: ["Square", "Circle", "Triangle", "Cube"], correct: "Circle" },
        { q: "How many sides does a triangle have?", a: ["1", "2", "3", "4"], correct: "3" },
        { q: "What is 10 + 10?", a: ["10", "20", "30", "40"], correct: "20" },
        { q: "What is half of 4?", a: ["1", "2", "3", "4"], correct: "2" },
        { q: "Which is smaller?", a: ["100", "10", "50", "80"], correct: "10" },
        { q: "What is 3 + 0?", a: ["0", "3", "30", "6"], correct: "3" },
        { q: "How many legs do 2 cats have?", a: ["4", "6", "8", "10"], correct: "8" },
        { q: "What is 5 + 5?", a: ["10", "15", "5", "20"], correct: "10" },
        { q: "What comes after 9?", a: ["8", "10", "11", "12"], correct: "10" },
        { q: "What is 2 x 2?", a: ["2", "4", "6", "8"], correct: "4" },
        { q: "Which is a pair?", a: ["1", "2", "3", "5"], correct: "2" },
        { q: "What is 7 + 1?", a: ["6", "7", "8", "9"], correct: "8" },
        { q: "What is 4 - 4?", a: ["0", "1", "4", "8"], correct: "0" },
        { q: "Count the fingers on one hand:", a: ["4", "5", "6", "10"], correct: "5" },
        { q: "What is 6 + 2?", a: ["7", "8", "9", "10"], correct: "8" },
        { q: "Which is more: 5 or 3?", a: ["5", "3", "Equal", "None"], correct: "5" },
        { q: "What is 10 - 1?", a: ["8", "9", "10", "11"], correct: "9" },
        { q: "What shape is a box?", a: ["Square/Cube", "Circle", "Oval", "Line"], correct: "Square/Cube" },
        { q: "What is 3 + 3?", a: ["3", "6", "9", "12"], correct: "6" },
        { q: "What is 8 - 2?", a: ["4", "5", "6", "7"], correct: "6" },
        { q: "What is 10, 20, 30, ...?", a: ["35", "40", "50", "60"], correct: "40" }
    ],
    English: [
        { q: "Which is a vowel?", a: ["B", "C", "A", "D"], correct: "A" },
        { q: "What is the opposite of 'Hot'?", a: ["Warm", "Cold", "Sunny", "Ice"], correct: "Cold" },
        { q: "Which is an animal?", a: ["Apple", "Dog", "Table", "Car"], correct: "Dog" },
        { q: "What color is a banana?", a: ["Red", "Blue", "Yellow", "Green"], correct: "Yellow" },
        { q: "Which letter comes after 'A'?", a: ["B", "C", "D", "E"], correct: "B" },
        { q: "A for...?", a: ["Ball", "Apple", "Cat", "Dog"], correct: "Apple" },
        { q: "Which is a big letter?", a: ["a", "b", "G", "e"], correct: "G" },
        { q: "The opposite of 'Up' is?", a: ["Left", "Right", "Down", "High"], correct: "Down" },
        { q: "Which is a bird?", a: ["Lion", "Parrot", "Fish", "Ant"], correct: "Parrot" },
        { q: "One boy, two ...?", a: ["Boy", "Boys", "Boies", "Child"], correct: "Boys" },
        { q: "What is the color of the Sky?", a: ["Green", "Pink", "Blue", "Black"], correct: "Blue" },
        { q: "B for...?", a: ["Ant", "Bat", "Cat", "Egg"], correct: "Bat" },
        { q: "Which one is a fruit?", a: ["Mango", "Potato", "Onion", "Carrot"], correct: "Mango" },
        { q: "The plural of 'Cat' is?", a: ["Cat", "Cats", "Cates", "Kitten"], correct: "Cats" },
        { q: "Which word rhymes with 'Cat'?", a: ["Dog", "Rat", "Sun", "Boy"], correct: "Rat" },
        { q: "Which is a 'Action' word?", a: ["Run", "Book", "Pen", "Desk"], correct: "Run" },
        { q: "How many letters in 'DOG'?", a: ["2", "3", "4", "5"], correct: "3" },
        { q: "The color of an Apple is?", a: ["Red", "Blue", "Yellow", "White"], correct: "Red" },
        { q: "Which is a vegetable?", a: ["Carrot", "Orange", "Grape", "Melon"], correct: "Carrot" },
        { q: "Which is the last letter of Alphabet?", a: ["X", "Y", "Z", "A"], correct: "Z" },
        { q: "Opposite of 'Happy' is?", a: ["Glad", "Sad", "Angry", "Fun"], correct: "Sad" },
        { q: "C for...?", a: ["Apple", "Ball", "Cat", "Dog"], correct: "Cat" },
        { q: "What do we do with a book?", a: ["Eat", "Read", "Sleep", "Run"], correct: "Read" },
        { q: "Which is a name of a day?", a: ["Monday", "Morning", "Night", "Today"], correct: "Monday" },
        { q: "Which is a 'Naming' word?", a: ["Jump", "Raja", "Cry", "Fast"], correct: "Raja" }
    ],
    Science: [
        { q: "What do we breathe?", a: ["Water", "Air", "Food", "Juice"], correct: "Air" },
        { q: "Where does the sun rise?", a: ["West", "East", "North", "South"], correct: "East" },
        { q: "How many legs does a spider have?", a: ["6", "8", "10", "4"], correct: "8" },
        { q: "Which is a living thing?", a: ["Stone", "Tree", "Car", "Doll"], correct: "Tree" },
        { q: "What do bees make?", a: ["Milk", "Honey", "Water", "Sugar"], correct: "Honey" },
        { q: "Which planet do we live on?", a: ["Mars", "Jupiter", "Earth", "Saturn"], correct: "Earth" },
        { q: "What color are leaves usually?", a: ["Blue", "Red", "Green", "Yellow"], correct: "Green" },
        { q: "Which part of the body helps us see?", a: ["Ears", "Nose", "Eyes", "Hand"], correct: "Eyes" },
        { q: "What does ice turn into when it melts?", a: ["Gas", "Water", "Rock", "Snow"], correct: "Water" },
        { q: "Which animal gives us milk?", a: ["Dog", "Cow", "Cat", "Lion"], correct: "Cow" },
        { q: "What is the giant star in our system?", a: ["Moon", "Earth", "Sun", "Mars"], correct: "Sun" },
        { q: "Which part of a plant is under the ground?", a: ["Leaf", "Flower", "Roots", "Stem"], correct: "Roots" },
        { q: "How many senses do humans have?", a: ["3", "4", "5", "6"], correct: "5" },
        { q: "Fish breathe through their...?", a: ["Lungs", "Gills", "Nose", "Mouth"], correct: "Gills" },
        { q: "Which animal can fly?", a: ["Dog", "Bird", "Pig", "Tiger"], correct: "Bird" },
        { q: "What do we use to smell?", a: ["Eyes", "Ears", "Nose", "Tongue"], correct: "Nose" },
        { q: "The moon shines at...?", a: ["Day", "Morning", "Night", "Noon"], correct: "Night" },
        { q: "Which is the fastest animal?", a: ["Snail", "Cheetah", "Turtle", "Elephant"], correct: "Cheetah" },
        { q: "What do we call a baby dog?", a: ["Kitten", "Cub", "Puppy", "Calf"], correct: "Puppy" },
        { q: "What is the boiling point of water?", a: ["50°C", "100°C", "0°C", "200°C"], correct: "100°C" },
        { q: "Which gas do plants need?", a: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: "Carbon Dioxide" },
        { q: "Which is the largest animal on Earth?", a: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct: "Blue Whale" },
        { q: "What is a baby frog called?", a: ["Fry", "Tadpole", "Kid", "Cub"], correct: "Tadpole" },
        { q: "How many bones are in the adult body?", a: ["100", "206", "300", "50"], correct: "206" },
        { q: "Which force pulls things to the ground?", a: ["Wind", "Magnet", "Gravity", "Light"], correct: "Gravity" }
    ],
    Tamil: [
        { q: "தமிழ் மொழியின் முதல் எழுத்து எது?", a: ["ஆ", "அ", "இ", "ஈ"], correct: "அ" },
        { q: "உயிர் எழுத்துக்கள் மொத்தம் எத்தனை?", a: ["10", "12", "18", "216"], correct: "12" },
        { q: "மெய் எழுத்துக்கள் மொத்தம் எத்தனை?", a: ["12", "15", "18", "20"], correct: "18" },
        { q: "ஆயுத எழுத்து எது?", a: ["அ", "ஆ", "ஃ", "இ"], correct: "ஃ" },
        { q: "நமது மாநிலம் எது?", a: ["கேரளா", "தமிழ்நாடு", "மும்பை", "டெல்லி"], correct: "தமிழ்நாடு" },
        { q: "முக்கனிகள் எவை?", a: ["ஆப்பிள், ஆரஞ்சு", "மா, பலா, வாழை", "திராட்சை", "கொய்யா"], correct: "மா, பலா, வாழை" },
        { q: "காட்டில் ராஜா யார்?", a: ["யானை", "புலி", "சிங்கம்", "கரடி"], correct: "சிங்கம்" },
        { q: "தமிழ்நாட்டின் மாநில விலங்கு எது?", a: ["புலி", "சிங்கம்", "வரையாடு", "யானை"], correct: "வரையாடு" },
        { q: "தேசியப் பறவை எது?", a: ["காகம்", "மயில்", "கிளி", "குயில்"], correct: "மயில்" },
        { q: "வாரம் எத்தனை நாட்கள்?", a: ["5", "6", "7", "8"], correct: "7" },
        { q: "இரவில் வானில் தெரிவது எது?", a: ["சூரியன்", "நிலா", "மேகம்", "மழை"], correct: "நிலா" },
        { q: "பழங்களின் அரசன்?", a: ["மாம்பழம்", "வாழைப்பழம்", "ஆப்பிள்", "பலா"], correct: "மாம்பழம்" },
        { q: "நமக்கு பால் தரும் விலங்கு?", a: ["நாய்", "பூனை", "பசு", "சிங்கம்"], correct: "பசு" },
        { q: "தேன் தரும் பூச்சி எது?", a: ["எறும்பு", "தேனீ", "வண்டு", "ஈ"], correct: "தேனீ" },
        { q: "கண் எத்தனை?", a: ["1", "2", "3", "4"], correct: "2" },
        { q: "சுவை எத்தனை வகைப்படும்?", a: ["4", "5", "6", "7"], correct: "6" },
        { q: "ஆத்திச்சூடி எழுதியவர் யார்?", a: ["பாரதியார்", "அவ்வையார்", "கம்பர்", "வள்ளுவர்"], correct: "அவ்வையார்" },
        { q: "திருக்குறளை எழுதியவர்?", a: ["கம்பர்", "வள்ளுவர்", "பாரதி", "அவ்வை"], correct: "வள்ளுவர்" },
        { q: "நமது நாட்டின் பெயர் என்ன?", a: ["இந்தியா", "அமெரிக்கா", "ஜப்பான்", "சீனா"], correct: "இந்தியா" },
        { q: "நீரின் நிறம் என்ன?", a: ["வெள்ளை", "நீலம்", "நிறமில்லை", "சிவப்பு"], correct: "நிறமில்லை" },
        { q: "எத்தனை உயிர்மெய் எழுத்துக்கள்?", a: ["18", "12", "216", "247"], correct: "216" },
        { q: "பந்து - இதன் முதல் எழுத்து?", a: ["ப", "ம", "த", "க"], correct: "ப" },
        { q: "மழை தருவது எது?", a: ["மரம்", "மேகம்", "காடு", "மலை"], correct: "மேகம்" },
        { q: "வீட்டு விலங்கு எது?", a: ["புலி", "நாய்", "சிங்கம்", "யானை"], correct: "நாய்" },
        { q: "தமிழ் புத்தாண்டு எப்போது?", a: ["தை 1", "சித்திரை 1", "ஆடி 1", "புரட்டாசி 1"], correct: "சித்திரை 1" }
    ],
    GK: [
        { q: "How many colors in a rainbow?", a: ["5", "6", "7", "8"], correct: "7" },
        { q: "Who is the Prime Minister of India?", a: ["Rahul Gandhi", "Narendra Modi", "Amit Shah", "Nehru"], correct: "Narendra Modi" },
        { q: "Which is the festival of colors?", a: ["Diwali", "Holi", "Eid", "Pongal"], correct: "Holi" },
        { q: "How many hours in a day?", a: ["12", "24", "48", "60"], correct: "24" },
        { q: "Which animal is known as ship of desert?", a: ["Horse", "Camel", "Lion", "Elephant"], correct: "Camel" },
        { q: "Capital of India?", a: ["Mumbai", "Chennai", "New Delhi", "Kolkata"], correct: "New Delhi" },
        { q: "Which is the tallest building?", a: ["Burj Khalifa", "Eiffel Tower", "Taj Mahal", "Pentagon"], correct: "Burj Khalifa" },
        { q: "How many states in India?", a: ["25", "28", "29", "30"], correct: "28" },
        { q: "Who discovered zero?", a: ["Newton", "Einstein", "Aryabhatta", "Galileo"], correct: "Aryabhatta" },
        { q: "National Fruit of India?", a: ["Apple", "Mango", "Banana", "Orange"], correct: "Mango" },
        { q: "National Anthem singer?", a: ["Tagore", "Gandhi", "Nehru", "Azad"], correct: "Tagore" },
        { q: "Which is the largest ocean?", a: ["Indian", "Atlantic", "Pacific", "Arctic"], correct: "Pacific" },
        { q: "How many wonders in the world?", a: ["5", "6", "7", "8"], correct: "7" },
        { q: "Which is the smallest bird?", a: ["Sparrow", "Hummingbird", "Crow", "Parrot"], correct: "Hummingbird" },
        { q: "Brain of computer?", a: ["RAM", "CPU", "Mouse", "Keyboard"], correct: "CPU" },
        { q: "Which city is called Pink City?", a: ["Delhi", "Jaipur", "Pune", "Surat"], correct: "Jaipur" },
        { q: "Baby of a cat?", a: ["Puppy", "Kitten", "Calf", "Kid"], correct: "Kitten" },
        { q: "Which is the longest river?", a: ["Ganga", "Nile", "Amazon", "Yamuna"], correct: "Nile" },
        { q: "National Flower of India?", a: ["Rose", "Lotus", "Lily", "Sunflower"], correct: "Lotus" },
        { q: "How many continents?", a: ["5", "6", "7", "8"], correct: "7" },
        { q: "Which planet has rings?", a: ["Mars", "Saturn", "Venus", "Earth"], correct: "Saturn" },
        { q: "Festival of lights?", a: ["Holi", "Diwali", "Christmas", "Easter"], correct: "Diwali" },
        { q: "Who is the Father of Nation?", a: ["Nehru", "Gandhi", "Bose", "Patel"], correct: "Gandhi" },
        { q: "Fastest bird?", a: ["Ostrich", "Eagle", "Peregrine Falcon", "Swift"], correct: "Peregrine Falcon" },
        { q: "What do we call a person who goes to space?", a: ["Pilot", "Doctor", "Astronaut", "Scientist"], correct: "Astronaut" }
    ]
};

let currentSubject = "";
let currentQuestionIndex = 0;
let userAnswers = [];
let tempSelection = null;

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

// --- Quiz Logic ---
function startQuiz(subject) {
    playSfx('click');
    currentSubject = subject;
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('quiz-title').innerText = subject;
    showQuestion();
}

function showQuestion() {
    const qData = questionsData[currentSubject][currentQuestionIndex];
    document.getElementById('question-count').innerText = `Question ${currentQuestionIndex + 1} of ${questionsData[currentSubject].length}`;
    document.getElementById('question-text').innerText = qData.q;
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
    const name = document.getElementById('child-name').value || "Little Star";
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
            scale: 4,                 // 🔥 Higher quality
            useCORS: true,
            letterRendering: true,
            allowTaint: true,
            backgroundColor: null     // 🔥 Keeps real background colors
        },

        jsPDF: {
            unit: 'px',
            format: [900, 600],
            orientation: 'landscape'
        }
    };

    html2pdf().set(opt).from(element).save();
}