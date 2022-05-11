const intro = document.getElementById('intro');
const spoiler = document.getElementById('spoiler');

spoiler.onclick = function() {
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
        spoiler.innerHTML = ' <<< Text einklappen >>> ';
    } else {
        intro.style.display = 'none';
        spoiler.innerHTML = ' >>> Text ausklappen <<< ';
    }
  };