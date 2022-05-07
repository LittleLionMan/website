const intro = document.getElementById('intro');
document.getElementById('headlines').onclick = function() {
    if (intro.style.display === 'none') {
        intro.style.display = 'block';
    } else {
        intro.style.display = 'none';
    }
  };