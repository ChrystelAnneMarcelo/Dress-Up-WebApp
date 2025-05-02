document.addEventListener("DOMContentLoaded", () => {
    const suits = [
        { src: 'images/bear.png', alt: 'BearSuit', class: 'char-layer Bear' },
        { src: 'images/cat.png', alt: 'CatSuit', class: 'char-layer Cat' },
        { src: 'images/bunny.png', alt: 'BunnySuit', class: 'char-layer Bunny' },
        { src: 'images/dog.png', alt: 'DogSuit', class: 'char-layer Dog' },
        { src: 'images/monkey.png', alt: 'MonkeySuit', class: 'char-layer Monkey' },
        { src: 'images/frog.png', alt: 'FrogSuit', class: 'char-layer Frog' },
    ];

    const bgChar = document.querySelector('.bg-char');
    let suitOffset = 0;

    function clearSuits() {
        const existing = document.querySelector('.Bear, .Cat, .Bunny, .Dog, .Monkey, .Frog');
        if (existing) existing.remove();
    }

    function showSuit(suit) {
        clearSuits();
        const img = document.createElement('img');
        img.src = suit.src;
        img.alt = suit.alt;
        img.className = suit.class;
        bgChar.appendChild(img);
    }

    function updateSelectionButtons() {
        for (let i = 0; i < 3; i++) {
            const suit = suits[suitOffset + i];
            const button = document.querySelector(`.select${i + 1} img`);
            if (suit) {
                button.src = suit.src;
                button.alt = suit.alt;
                button.parentElement.style.visibility = "visible";
            } else {
                button.src = '';
                button.alt = '';
                button.parentElement.style.visibility = "hidden";
            }
        }
    }

    for (let i = 0; i < 3; i++) {
        document.querySelector(`.select${i + 1}`).addEventListener('click', () => {
            const suit = suits[suitOffset + i];
            if (suit) showSuit(suit);
        });
    }

    document.querySelector('.leftButton').addEventListener('click', () => {
        if (suitOffset - 3 >= 0) {
            suitOffset -= 3;
            updateSelectionButtons();
        }
    });

    document.querySelector('.rightButton').addEventListener('click', () => {
        if (suitOffset + 3 < suits.length) {
            suitOffset += 3;
            updateSelectionButtons();
        }
    });

    updateSelectionButtons();
});