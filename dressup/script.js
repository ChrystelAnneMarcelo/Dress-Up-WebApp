document.addEventListener("DOMContentLoaded", () => {
    const bear = document.querySelector('.Bear');
    const cat = document.createElement('img');
    cat.src = 'images/cat.png';
    cat.alt = 'CatSuit';
    cat.className = 'char-layer Cat';

    const bunny = document.createElement('img');
    bunny.src = 'images/bunny.png';
    bunny.alt = 'BunnySuit';
    bunny.className = 'char-layer Bunny';

    const bgChar = document.querySelector('.bg-char');

    // Clear current suit before adding new
    function clearSuits() {
        const suits = document.querySelectorAll('.Bear, .Cat, .Bunny');
        suits.forEach(suit => suit.remove());
    }

    document.querySelector('.select1').addEventListener('click', () => {
        clearSuits();
        bgChar.appendChild(bear);
    });

    document.querySelector('.select2').addEventListener('click', () => {
        clearSuits();
        bgChar.appendChild(cat);
    });

    document.querySelector('.select3').addEventListener('click', () => {
        clearSuits();
        bgChar.appendChild(bunny);
    });
});