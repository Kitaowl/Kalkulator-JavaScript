// Pobranie referencji do wyświetlacza kalkulatora
const display = document.querySelector('.calculator-screen');

// Pobranie wszystkich przycisków z kalkulatora
const buttons = document.querySelectorAll(".calculator-keys>button");

// Zmienne pomocnicze
let cache = [];          // Przechowuje wartości liczbowe
let cacheValue = "";     // Aktualna wpisywana wartość
let lastOperator = null; // Ostatnio użyty operator (+, -, *, /)

// Obsługa przycisków
buttons.forEach((button) => {
    const value = button.value;

    // Obsługa operatorów
    if (button.classList.contains('operator')) {
        button.addEventListener('click', () => {
            if (cacheValue !== "") {
                const number = parseFloat(cacheValue);
                cache.push(number);
                cacheValue = "";
                lastOperator = value;
                clearDisplay();
            }
        });

    // Obsługa przecinka (dziesiętne liczby)
    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', () => {
            if (!cacheValue.includes('.')) {
                setDisplayValue('.');
            }
        });

    // Obsługa przycisku "AC" - czyści wszystko
    } else if (button.classList.contains('all-clear')) {
        button.addEventListener('click', () => {
            clearDisplay();
            cache = [];
            cacheValue = "";
            lastOperator = null;
        });

    // Obsługa przycisku "=" - wykonuje działanie
    } else if (button.classList.contains('equal-sign')) {
        button.addEventListener('click', () => {
            if (cacheValue !== "" && lastOperator !== null) {
                const number = parseFloat(cacheValue);
                cache.push(number);
                executeOperation();
            }
        });

    // Obsługa przycisków z cyframi
    } else {
        button.addEventListener('click', () => {
            setDisplayValue(value);
        });
    }
});


// Dodaje wartość do wyświetlacza i zmiennej cacheValue
function setDisplayValue(value) {
    display.innerText += value;
    cacheValue += value;
}

// Czyści wyświetlacz i zmienną cacheValue
function clearDisplay() {
    display.innerText = "";
    cacheValue = "";
}


// Wykonuje działanie w zależności od ostatniego operatora
function executeOperation() {
    let result;

    const a = cache[0];
    const b = cache[1];

    switch (lastOperator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                setDisplayValue("Błąd");
                cache = [];
                cacheValue = "";
                lastOperator = null;
                return;
            }
            result = a / b;
            break;
    }

    // Wyczyść wszystko i wyświetl wynik
    clearDisplay();
    setDisplayValue(result);
    cache = [result];  // wynik można wykorzystać dalej
    cacheValue = "";
    lastOperator = null;
}
