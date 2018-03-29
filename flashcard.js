// this script flips the flashcards when clicked

$(document).ready(function() {
  $('.flashcard').on('click touchstart', function() {
    $(this).toggleClass('flipped');
  });
});
