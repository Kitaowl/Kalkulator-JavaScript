// Pobranie referencji do wyświetlacza kalkulatora
const display = document.querySelector('.calculator-screen');

// Pobranie wszystkich przycisków z kalkulatora
const buttons = document.querySelectorAll(".calculator-keys>button");

// Zmienne pomocnicze
let cache = [];          // Przechowuje wartości liczbowe
let cacheValue = "";     // Aktualna wpisywana wartość
let lastOperator = null; // Ostatnio użyty operator (+, -, *, /)
let expression = "";     // NOWE: ciąg znaków reprezentujący całe działanie

// Obsługa przycisków
buttons.forEach((button) => {
    const value = button.value;

    // Obsługa operatorów
    if (button.classList.contains('operator')) {
        button.addEventListener('click', () => {
            // Dodaj operator do wyrażenia tylko jeśli nie zaczynamy od operatora
            if (expression !== "" && !isOperator(expression.slice(-1))) {
                expression += value;
                display.innerText = expression;
            }
        });

    // Obsługa przecinka (dziesiętne liczby)
    } else if (button.classList.contains('decimal')) {
        button.addEventListener('click', () => {
            if (!endsWithDecimalPart(expression)) {
                expression += '.';
                display.innerText = expression;
            }
        });

    // Obsługa przycisku "AC" - czyści wszystko
    } else if (button.classList.contains('all-clear')) {
        button.addEventListener('click', () => {
            clearDisplay();
            cache = [];
            cacheValue = "";
            lastOperator = null;
            expression = "";
        });

    // Obsługa przycisku "=" - wykonuje działanie
    } else if (button.classList.contains('equal-sign')) {
        button.addEventListener('click', () => {
            equal();
        });

    // Obsługa przycisków z cyframi
    } else {
        button.addEventListener('click', () => {
            expression += value;
            display.innerText = expression;
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

// NOWA funkcja: sprawdza, czy znak to operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// NOWA funkcja: sprawdza, czy liczba nie ma już części dziesiętnej
function endsWithDecimalPart(expr) {
    const parts = expr.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    return lastPart.includes('.');
}

// NOWA funkcja equal() - obsługa "=" z eval()
function equal() {
    try {
        // Użycie eval do obliczenia wyrażenia
        const result = eval(expression); // Tak, tutaj eval jest OK, bo kontrolujemy dane wejściowe
        display.innerText = result;
        expression = result.toString(); // żeby można było dalej liczyć
    } catch (e) {
        display.innerText = "Błąd";
        expression = "";
    }
}
