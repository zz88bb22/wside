var $contactForm = $('#js-form-send');

$contactForm.submit(function(e) {
	e.preventDefault();
	var $submit = $('input:submit', $contactForm);
  var defaultSubmitText = $submit.val();
  var name = $("input#name").val();
  var email = $("input#email").val();
  var offer = $("input#price").val();
        

	$.ajax({
		url: 'https://formspree.io/zztop22@protonmail.com',
		method: 'POST',
		data: {
      name: name,
      email: email,
      offer: offer
    },
		dataType: 'json',
		beforeSend: function() {
			$submit.attr('disabled', true).val('Sending message…');
		},
		success: function(data) {
			$submit.val('Message sent! We will be in touch.');
			//setTimeout(function() {
			//	$submit.attr('disabled', false).val(defaultSubmitText);
			//}, 4000);
		},
		error: function(err) {
			$submit.val('There was an error. Try again.');
			setTimeout(function() {
				$submit.attr('disabled', false).val(defaultSubmitText);
			}, 4000);
		}
	});
});