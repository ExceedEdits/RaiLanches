document.addEventListener('DOMContentLoaded', function () {
  var accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var icon = this.querySelector('i');
      if (this.classList.contains('collapsed')) {
        icon.classList.remove('bi-caret-up-fill');
        icon.classList.add('bi-caret-down-fill');
      } else {
        icon.classList.remove('bi-caret-down-fill');
        icon.classList.add('bi-caret-up-fill');
      }
    });
  });
});

function goTo(string){
    window.location.href = string;
}