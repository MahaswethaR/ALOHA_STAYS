document.addEventListener('click', function (e) {
    if (e.target.classList.contains('aminities-toggle')) {
        const aminities = e.target.closest('.aminities');

        aminities.classList.toggle('show-all');

        console.log(aminities);

        e.target.textContent = aminities.classList.contains('show-all')
            ? 'Show Less'
            : 'More Amenities';
    }

});