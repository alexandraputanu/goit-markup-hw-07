document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code here (if any)
});

function filterSelection(category) {
    var listClasses = ['.portfolio-list-one', '.portfolio-list-two', '.portfolio-list-three'];

    listClasses.forEach(function(listClass) {
        var elements = document.querySelectorAll(listClass + ' li');
        elements.forEach(function(element) {
            var itemCategory = element.getAttribute('data-category');
            if (category === 'all' || itemCategory === category) {
                element.style.display = 'flex';
            } else {
                element.style.display = 'none';
            }
        });
    });
}