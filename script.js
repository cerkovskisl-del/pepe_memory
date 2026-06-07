// Pepe datu bāze (Ar tulkojumiem katram tēlam un tipam)
const allPepes = [
    { id: 'resna_normal', name: { lv: 'Resna Pepe', en: 'Fat Pepe', ru: 'Толстый Пепе' }, type: 'Normal', image: 'fat_normal.png' },
    { id: 'resna_gold', name: { lv: 'Resna Pepe', en: 'Fat Pepe', ru: 'Толстый Пепе' }, type: 'Gold', image: 'fat_gold.png' },
    { id: 'resna_cosmic', name: { lv: 'Resna Pepe', en: 'Fat Pepe', ru: 'Толстый Пепе' }, type: 'Cosmic', image: 'fat_cosmic.png' },
    { id: 'bediga_normal', name: { lv: 'Bēdīga Pepe', en: 'Sad Pepe', ru: 'Грустный Пепе' }, type: 'Normal', image: 'sad_normal.png' },
    { id: 'bediga_gold', name: { lv: 'Bēdīga Pepe', en: 'Sad Pepe', ru: 'Грустный Пепе' }, type: 'Gold', image: 'sad_gold.png' },
    { id: 'bediga_cosmic', name: { lv: 'Bēdīga Pepe', en: 'Sad Pepe', ru: 'Грустный Пепе' }, type: 'Cosmic', image: 'sad_cosmic.png' },
    { id: 'ninja_normal', name: { lv: 'Ninjas Pepe', en: 'Ninja Pepe', ru: 'Ниндзя Пепе' }, type: 'Normal', image: 'ninja_normal.png' },
    { id: 'ninja_gold', name: { lv: 'Ninjas Pepe', en: 'Ninja Pepe', ru: 'Ниндзя Пепе' }, type: 'Gold', image: 'ninja_gold.png' },
    { id: 'ninja_cosmic', name: { lv: 'Ninjas Pepe', en: 'Ninja Pepe', ru: 'Ниндзя Пепе' }, type: 'Cosmic', image: 'ninja_cosmic.png' },
    { id: 'rich_normal', name: { lv: 'Rich Pepe', en: 'Rich Pepe', ru: 'Богатый Пепе' }, type: 'Normal', image: 'rich_normal.png' },
    { id: 'rich_gold', name: { lv: 'Rich Pepe', en: 'Rich Pepe', ru: 'Богатый Пепе' }, type: 'Gold', image: 'rich_gold.png' },
    { id: 'rich_cosmic', name: { lv: 'Rich Pepe', en: 'Rich Pepe', ru: 'Богатый Пепе' }, type: 'Cosmic', image: 'rich_cosmic.png' },
    { id: 'poor_normal', name: { lv: 'Poor Pepe', en: 'Poor Pepe', ru: 'Бедный Пепе' }, type: 'Normal', image: 'poor_normal.png' },
    { id: 'poor_gold', name: { lv: 'Poor Pepe', en: 'Poor Pepe', ru: 'Бедный Пепе' }, type: 'Gold', image: 'poor_gold.png' },
    { id: 'poor_cosmic', name: { lv: 'Poor Pepe', en: 'Poor Pepe', ru: 'Бедный Пепе' }, type: 'Cosmic', image: 'poor_cosmic.png' },
    { id: 'cyber_normal', name: { lv: 'Cyber Pepe', en: 'Cyber Pepe', ru: 'Кибер Пепе' }, type: 'Normal', image: 'cyber_normal.png' },
    { id: 'cyber_gold', name: { lv: 'Cyber Pepe', en: 'Cyber Pepe', ru: 'Кибер Пепе' }, type: 'Gold', image: 'cyber_gold.png' },
    { id: 'cyber_cosmic', name: { lv: 'Cyber Pepe', en: 'Cyber Pepe', ru: 'Кибер Пепе' }, type: 'Cosmic', image: 'cyber_cosmic.png' },
    { id: 'zombie_normal', name: { lv: 'Zombie Pepe', en: 'Zombie Pepe', ru: 'Зомби Пепе' }, type: 'Normal', image: 'zombie_normal.png' },
    { id: 'zombie_gold', name: { lv: 'Zombie Pepe', en: 'Zombie Pepe', ru: 'Зомби Пепе' }, type: 'Gold', image: 'zombie_gold.png' },
    { id: 'zombie_cosmic', name: { lv: 'Zombie Pepe', en: 'Zombie Pepe', ru: 'Зомби Пепе' }, type: 'Cosmic', image: 'zombie_cosmic.png' },
    { id: 'god_normal', name: { lv: 'God Pepe', en: 'God Pepe', ru: 'Бог Пепе' }, type: 'Normal', image: 'god_normal.png' },
    { id: 'god_gold', name: { lv: 'God Pepe', en: 'God Pepe', ru: 'Бог Пепе' }, type: 'Gold', image: 'god_gold.png' },
    { id: 'god_cosmic', name: { lv: 'God Pepe', en: 'God Pepe', ru: 'Бог Пепе' }, type: 'Cosmic', image: 'god_cosmic.png' }
];

// Valodu vārdnīca interfeisam
const translations = {
    lv: {
        title: "Pepe Atmiņas Spēle",
        easy: "Viegls (4 pāri)",
        medium: "Vidējs (8 pāri)",
        hard: "Grūts (12 pāri)",
        extreme: "Extreme (24 pāri)",
        moves: "Gājieni",
        matches: "Atrastie pāri",
        reset: "Sākt no jauna",
        winNormal: "Apsveicu! Tu pabeidzi šo līmeni ar {moves} gājieniem!",
        winExtreme: "NEIEDOMĀJAMI! Tu pieveici EXTREME līmeni ar {moves} gājieniem! Tu esi īsts Pepe Dievs! 🏆🔥"
    },
    en: {
        title: "Pepe Memory Game",
        easy: "Easy (4 pairs)",
        medium: "Medium (8 pairs)",
        hard: "Hard (12 pairs)",
        extreme: "Extreme (24 pairs)",
        moves: "Moves",
        matches: "Pairs found",
        reset: "Reset Game",
        winNormal: "Congratulations! You completed this level in {moves} moves!",
        winExtreme: "UNBELIEVABLE! You completed the EXTREME level in {moves} moves! You are a true Pepe God! 🏆🔥"
    },
    ru: {
        title: "Пепе Игра Мемори",
        easy: "Легкий (4 пары)",
        medium: "Средний (8 пары)",
        hard: "Тяжелый (12 пар)",
        extreme: "Экстрим (24 пары)",
        moves: "Ходы",
        matches: "Найденные пары",
        reset: "Начать заново",
        winNormal: "Поздравляем! Вы прошли этот уровень за {moves} ходов!",
        winExtreme: "НЕВЕРОЯТНО! Ты прошёл EXTREME уровень за {moves} ходов! Ты настоящий Бог Пепе! 🏆🔥"
    }
};

let currentLang = 'lv'; 
let cardsArray = [];
let flippedCards = [];
let moves = 0;
let matches = 0;
let lockBoard = false;
let currentPairs = 8; 

const gridContainer = document.getElementById('grid');
const movesDisplay = document.getElementById('moves');
const matchesDisplay = document.getElementById('matches');
const totalMatchesDisplay = document.getElementById('total-matches');
const resetBtn = document.getElementById('reset-btn');
const diffButtons = document.querySelectorAll('.diff-btn');
const langButtons = document.querySelectorAll('.lang-btn');

function updateInterfaceLanguage() {
    const t = translations[currentLang];
    document.getElementById('game-title').textContent = t.title;
    document.getElementById('btn-easy').textContent = t.easy;
    document.getElementById('btn-medium').textContent = t.medium;
    document.getElementById('btn-hard').textContent = t.hard;
    document.getElementById('btn-extreme').textContent = t.extreme;
    document.getElementById('text-moves').textContent = t.moves;
    document.getElementById('text-matches').textContent = t.matches;
    resetBtn.textContent = t.reset;
}

function prepareGameData() {
    const shuffledAll = [...allPepes].sort(() => Math.random() - 0.5);
    const selectedPepes = shuffledAll.slice(0, currentPairs); 
    cardsArray = [...selectedPepes, ...selectedPepes]; 
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Responsīva režģa pielāgošana mobilajām ierīcēm (Aizstāti fiksētie pikseļi ar flex/fraction daļām)
function adjustGridColumns() {
    gridContainer.classList.remove('extreme-grid');

    if (currentPairs === 4) {
        gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; 
        gridContainer.style.maxWidth = '600px';
    } else if (currentPairs === 8) {
        gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; 
        gridContainer.style.maxWidth = '600px';
    } else if (currentPairs === 12) {
        gridContainer.style.gridTemplateColumns = 'repeat(6, 1fr)'; 
        gridContainer.style.maxWidth = '900px';
    } else if (currentPairs === 24) {
        gridContainer.classList.add('extreme-grid'); 
        gridContainer.style.gridTemplateColumns = 'repeat(8, 1fr)'; 
        gridContainer.style.maxWidth = '1000px';
    }
}

function createBoard() {
    gridContainer.innerHTML = '';
    prepareGameData();
    shuffle(cardsArray);
    adjustGridColumns();
    updateInterfaceLanguage();
    
    if (totalMatchesDisplay) {
        totalMatchesDisplay.textContent = currentPairs;
    }

    cardsArray.forEach((pepe, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.pepeId = pepe.id;
        card.dataset.index = index;

        const content = document.createElement('div');
        content.classList.add('card-content');

        const img = document.createElement('img');
        img.src = pepe.image;

        const textName = document.createElement('span');
        textName.textContent = pepe.name[currentLang];

        const textType = document.createElement('span');
        textType.textContent = `[${pepe.type}]`;
        
        if(pepe.type === 'Gold') textType.style.color = '#d4af37';
        if(pepe.type === 'Cosmic') textType.style.color = '#8a2be2';
        if(pepe.type === 'Normal') textType.style.color = '#555555';

        content.appendChild(img);
        content.appendChild(textName);
        content.appendChild(textType);
        card.appendChild(content);

        card.addEventListener('click', flipCard);
        gridContainer.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this.classList.contains('flipped') || this.classList.contains('matched')) return;
    if (flippedCards.length === 1 && flippedCards[0].dataset.index === this.dataset.index) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.pepeId === card2.dataset.pepeId) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matches++;
        matchesDisplay.textContent = matches;
        flippedCards = [];

        if (matches === currentPairs) {
            const t = translations[currentLang];
            let alertMsg = (currentPairs === 24) ? t.winExtreme : t.winNormal;
            alertMsg = alertMsg.replace("{moves}", moves);
            setTimeout(() => alert(alertMsg), 500);
        }
    } else {
        lockBoard = true;
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            lockBoard = false;
        }, 1000);
    }
}

function resetGame() {
    moves = 0;
    matches = 0;
    flippedCards = [];
    lockBoard = false;
    movesDisplay.textContent = moves;
    matchesDisplay.textContent = matches;
    createBoard();
}

diffButtons.forEach(button => {
    button.addEventListener('click', function() {
        diffButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        currentPairs = parseInt(this.dataset.pairs);
        resetGame();
    });
});

langButtons.forEach(button => {
    button.addEventListener('click', function() {
        langButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        currentLang = this.dataset.lang;
        
        updateInterfaceLanguage();
        const cardElements = gridContainer.querySelectorAll('.card');
        cardElements.forEach((cardElement, idx) => {
            const pepeData = cardsArray[idx];
            const nameSpan = cardElement.querySelector('.card-content span:nth-of-type(1)');
            if (nameSpan) {
                nameSpan.textContent = pepeData.name[currentLang];
            }
        });
    });
});

resetBtn.addEventListener('click', resetGame);
createBoard();
