document.addEventListener('DOMContentLoaded', () => {
    function generateRandomArray(length, max) {
      return Array.from({ length }, () => Math.floor(Math.random() * max));
    }
  
    function displayResults() {
      const randomArray = generateRandomArray(10, 100);
      document.getElementById('complete_array').innerText = randomArray.join(', ');
      document.getElementById('result').innerText = `First Element: ${randomArray[0]} and Last Element: ${randomArray[randomArray.length - 1]}`;
    }
  
    document.getElementById('get_elements').addEventListener('click', displayResults);
  });