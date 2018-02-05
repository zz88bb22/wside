$('#js-form-submit').click(function(){validateForm();return false;});function validateForm(){var name, email, price, atpos, dotpos; name=$('#name').val(); email=$('#email').val(); price=$('#price').val(); atpos=email.indexOf('@'); dotpos=email.lastIndexOf('.'); if (name==null || name==''){$('#js-form-message').addClass('text-error text-large').text('* Please enter your name.'); $('#name').focus(); return false;}if (email==null || email==''){$('#js-form-message').addClass('text-error text-large').text('* Please enter your email address.'); $('#email').focus(); return false;}if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >=email.length){$('#js-form-message').addClass('text-error text-large').text('* Please enter a valid email address.'); $('#email').focus(); return false;}if (price==null || price==''){$('#js-form-message').addClass('text-error text-large').text('* Please an offer price in U.S. Dollars.'); $('#price').focus(); return false;}else{var datastring=$("#js-form-send").serialize(); $.ajax({url: "https://formspree.io/zztop22@protonmail.com", method: "POST", data: datastring, dataType: "json"}); $('#js-form-message').addClass('text-success').text('Your inqury has been sent successfully. We will be in touch as soon as possible. Thank you for your interest.'); return false;}}