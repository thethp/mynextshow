$('form').on('click', '.register', function(e) {
  e.preventDefault();
  $('form').attr('action','/register');
  $(e.currentTarget).removeClass('.register');
});
