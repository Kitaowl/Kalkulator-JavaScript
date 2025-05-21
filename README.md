# Kalkulator

To jest projekt kalkulatora w języku JavaScript, który ma na celu naukę programowania i algorytmów.  
Trzeba dokończyć pisanie kodu kalkulatora.

## Instrukcje

1. **Wyświetlacz**: Referencja do elementu wyświetlacza w kalkulatorze
    ```javascript
    const display = document.querySelector('.calculator-screen');
    ```

2. **Przyciski**: Referencja do elementów brzyciskó w kalkulatorze
    ```javascript
    const buttons = document.querySelectorAll(".calculator-keys>button");
    ```

3. **Zmiennie**:
    - `buttonNum`: Tablica przechowująca przyciski liczb.
    - `buttonOperator`: Tablica przechowująca przyciski operatorów.
    - `buttonFunction`: Tablica przechowująca przyciski funkcyjne.
    - `cache`: Tablica przechowująca wartości wprowadzone przez użytkownika.
    - `cacheValue`: Przechowuje bieżącą wartość wprowadzoną przez użytkownika.

4. **Działania**:
    - Dodawanie: Funkcja `add(a)` dodaje wartości przechowywane w `cache`.
    - Odejmowanie: Funkcja `subtract(a)` odejmuje wartości przechowywane w `cache`.
    - Mnożenie i dzielenie: Funkcje te są do zaimplementowania.
    - Wyczyść wyświetlacz: Funkcja `clearDisplay()` czyści zawartość wyświetlacza.
    - Ustaw wartość wyświetlacza: Funkcja `setDisplayValue(value)` ustawia wartość na wyświetlaczu.
    - Ustaw wartość wyświetlacza jako wynik działań: Funkcja do zaimplementowania

5. **Obsługa przycisków**: Każdy przycisk ma przypisane działanie na podstawie jego klasy CSS (operator, decimal, all-clear, equal-sign) i wartości.

## Do zrobienia

- Implementacja funkcji mnożenia i dzielenia.
- Implementacja funkcji wyświetlenia wyniku.
- Uzupełnienie funkcji dla liczb zmiennoprzecinkowych.
- Dodanie komentarzy wyjaśniających działanie kodu.
- Udokumentowanie kodu w plikach Markdown w folderze `Documentation`.


---

Ten projekt jest częścią modułu 0: Kalkulator i ma na celu naukę podstaw programowania w JavaScript.

Kalkulator można zobaczyć tutaj
https://kitaowl.github.io/Kalkulator-JavaScript/
