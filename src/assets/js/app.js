var app = {};

app = {
    init: function() {
        var button = document.querySelector('.js-app-store-button');

        button.addEventListener('click', function(e) {
            e.preventDefault;
            alert('She\'s on her way... Stay tuned');
        }, false)
    }
}