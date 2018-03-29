// this script flips the flashcards when clicked

$(document).ready(function() {
  $('.flashcard').on('click', function() {
    $(this).toggleClass('flipped');
  });
});
