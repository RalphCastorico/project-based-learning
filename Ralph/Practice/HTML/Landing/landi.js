document.getElementById('loadButton').addEventListener('click', function () {
    document.getElementById('loader').style.display = 'block';

    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        
    }, 15000);
})