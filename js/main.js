$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

// $('#login-form .btn').on('click', function(event){
//     $('#login-form').hide();
//     $('.user-info').show();
//     $('span.user-fullname').text(userInfo.firstName + ' ' + userInfo.lastName);
// });

// view-detaisl
// $('.view-details').on('click', function(event){
//     console.log(event);
//     var targetElement = event.target;
//     var container = targetElement.parentElement.parentElement;
//     $(container).find('.details').each(function(index, el){
//         if ($(el).is(':visible')){
//             $(el).fadeOut();
//             targetElement.innerText = "View Details"
//         } else {
//             $(el).fadeIn();
//             targetElement.innerText = "Hide Details"
//         }
//     });
// });

// voting
$('.voting button').on('click', function(event){
    if($(this).attr('data-vote') === 'great'){
        ++voteCounts.great;
    } else {
        ++voteCounts.greatest;
    }

    ++voteCounts.total;
    console.log(voteCounts);

    var greatPercent = (voteCounts.great/voteCounts.total*100)+'%';
    console.log(greatPercent);
    var greatestPercent = (voteCounts.greatest/voteCounts.total*100)+'%';

    $('.great-progress').attr('style', 'width: ' + greatPercent);
    $('.greatest-progress').attr('style', 'width: ' + greatestPercent);
});


// active tab + smooth scroll
$('a.js-link-scroll').on('shown.bs.tab', function (e) {
    $('#tabs .active').removeClass('active');
    $('a[href="'+$(this).attr('href')+'"]').parent().addClass('active');
      var that = this;
      $('html, body').animate({
        scrollTop: $( $(that).attr('href') ).offset().top
      }, 800);
});


// validation
$('#order-form').validate({
  submitHandler: function(form) {

    form.submit();
  },

  rules: {
    "your-name": {
      required: true,
      minLength: 128,
      digits: false
    },
    "your-email": {
      required: true,
    },
    "your-city": {
      required: true,
    },
    "your-state": {
      required: true,
      maxlength: 2
    },
    "your-zip": {
      required: true,
      maxlength: 5,
      digits: true
    }
  }
});


});
