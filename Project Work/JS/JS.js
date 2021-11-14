const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click' , () => {
    navbarLinks.classList.toggle('active')
})

$('.toggle-button').click(function () {
    $('.navbar-links').toggle();
});

if ($(window).width>400) {
    $('.navbar-links').show();
};