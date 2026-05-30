// Pilna datu bāze ar taviem 24 Pepe variantiem un lokālajiem attēlu ceļiem
const allPepes = [
    // 1. Resna Pepe
    { id: 'resna_normal', name: 'Resna Pepe', type: 'Normal', image: 'images/fat_normal.png' },
    { id: 'resna_gold', name: 'Resna Pepe', type: 'Gold', image: 'images/fat_gold.png' },
    { id: 'resna_cosmic', name: 'Resna Pepe', type: 'Cosmic', image: 'images/fat_cosmic.png' },

    // 2. Bēdīga Pepe
    { id: 'bediga_normal', name: 'Bēdīga Pepe', type: 'Normal', image: 'images/sad_normal.png' },
    { id: 'bediga_gold', name: 'Bēdīga Pepe', type: 'Gold', image: 'images/sad_gold.png' },
    { id: 'bediga_cosmic', name: 'Bēdīga Pepe', type: 'Cosmic', image: 'images/sad_cosmic.png' },

    // 3. Ninjas Pepe
    { id: 'ninja_normal', name: 'Ninjas Pepe', type: 'Normal', image: 'images/ninja_normal.png' },
    { id: 'ninja_gold', name: 'Ninjas Pepe', type: 'Gold', image: 'images/ninja_gold.png' },
    { id: 'ninja_cosmic', name: 'Ninjas Pepe', type: 'Cosmic', image: 'images/ninja_cosmic.png' },

    // 4. Rich Pepe
    { id: 'rich_normal', name: 'Rich Pepe', type: 'Normal', image: 'images/rich_normal.png' },
    { id: 'rich_gold', name: 'Rich Pepe', type: 'Gold', image: 'images/rich_gold.png' },
    { id: 'rich_cosmic', name: 'Rich Pepe', type: 'Cosmic', image: 'images/rich_cosmic.png' },

    // 5. Poor Pepe
    { id: 'poor_normal', name: 'Poor Pepe', type: 'Normal', image: 'images/poor_normal.png' },
    { id: 'poor_gold', name: 'Poor Pepe', type: 'Gold', image: 'images/poor_gold.png' },
    { id: 'poor_cosmic', name: 'Poor Pepe', type: 'Cosmic', image: 'images/poor_cosmic.png' },

    // 6. Cyber Pepe
    { id: 'cyber_normal', name: 'Cyber Pepe', type: 'Normal', image: 'images/cyber_normal.png' },
    { id: 'cyber_gold', name: 'Cyber Pepe', type: 'Gold', image: 'images/cyber_gold.png' },
    { id: 'cyber_cosmic', name: 'Cyber Pepe', type: 'Cosmic', image: 'images/cyber_cosmic.png' },

    // 7. Zombie Pepe
    { id: 'zombie_normal', name: 'Zombie Pepe', type: 'Normal', image: 'images/zombie_normal.png' },
    { id: 'zombie_gold', name: 'Zombie Pepe', type: 'Gold', image: 'images/zombie_gold.png' },
    { id: 'zombie_cosmic', name: 'Zombie Pepe', type: 'Cosmic', image: 'images/zombie_cosmic.png' },

    // 8. God Pepe
    { id: 'god_normal', name: 'God Pepe', type: 'Normal', image: 'images/god_normal.png' },
    { id: 'god_gold', name: 'God Pepe', type: 'Gold', image: 'images/god_gold.png' },
    { id: 'god_cosmic', name: 'God Pepe', type: 'Cosmic', image: 'images/god_cosmic.png' }
];

let cardsArray = [];
let flippedCards = [];
let moves = 0;
let matches = 0;
let lockBoard = false;

const gridContainer = document.getElementById('grid');
const movesDisplay = document.getElementById('moves');
const matchesDisplay = document.getElementById('matches');
const resetBtn = document.getElementById('reset-btn');

// Sagatavo 8 nejaušus pārus no 24 Pepe variantiem katrai spēlei
function prepareGameData() {
    const shuffledAll = [...allPepes].sort(() => Math.random() - 0.5);
    const selectedPepes = shuffledAll.slice(0, 8); // Paņemam 8 unikālus Pepe
    cardsArray = [...selectedPepes, ...selectedPepes]; // Dubultojam, lai sanāk 16 kārtis
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Ģenerē kāršu laukumu HTML struktūrā
function createBoard() {
    gridContainer.innerHTML = '';
    prepareGameData();
    shuffle(cardsArray);

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
        textName.textContent = pepe.name;

        const textType = document.createElement('span');
        textType.textContent = `[${pepe.type}]`;
        
        // Pievieno krāsu akcentu tekstam atkarībā no stila
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

    // Pārbauda, vai abām kārtīm pilnībā sakrīt Pepe ID un stils
    if (card1.dataset.pepeId === card2.dataset.pepeId) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matches++;
        matchesDisplay.textContent = matches;
        flippedCards = [];

        if (matches === 8) {
            setTimeout(() => alert(`Apsveicu! Tu sakrāji visus pārus ar ${moves} gājieniem!`), 500);
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

resetBtn.addEventListener('click', resetGame);
createBoard();
