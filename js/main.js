$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };

    var voteCounts = {
        great: 0,
        greatest: 0,
        best: 0,
        total: 0
    };

// enlarge image --> work-in-progress ********************************************************
$(".pop").on("click", function() {
   $('#imagepreview').attr('src', $('#imageresource').attr('src'));
   $('#imagemodal').modal('show');
});

// voting
$('.vote').on('click', function(event){
    console.log(event);
    if ($(this).attr('data-vote')==="great"){
        voteCounts.great++;
        voteCounts.total++;
    }else{
        if ($(this).attr('data-vote')==="greatest"){
            voteCounts.greatest++;
            voteCounts.total++;
        }else{
          if ($(this).attr('data-vote')==="best"){
            voteCounts.best++;
            voteCounts.total++;
          }
        }
    }

console.log("gr "+ voteCounts.great);
console.log("Greatest" + voteCounts.greatest);
console.log("Best" + voteCounts.best);
console.log("total" + voteCounts.total);

var greatPercent = voteCounts.great / voteCounts.total * 100 + '%';
var greatestPercent = voteCounts.greatest / voteCounts.total * 100 + '%';
var bestPercent = voteCounts.best / voteCounts.total * 100 + '%';
$('.great-progress').css('width', greatPercent);
$('.greatest-progress').css('width', greatestPercent);
$('.best-progress').css('width', bestPercent);
console.log(greatPercent);
console.log(greatestPercent);
console.log(bestPercent);
$('.boxGreat').html("Number of votes for Great are: " + voteCounts.great + "&nbsp;&nbsp;&nbsp;&nbsp;");
$('.boxGreatest').html("Number of votes for Greatest of all time are: " + voteCounts.greatest + "&nbsp;&nbsp;&nbsp;&nbsp;");
$('.boxBest').html("Number of votes for Best of all time are: " + voteCounts.best + "&nbsp;&nbsp;&nbsp;&nbsp;");
$('.boxTotal').html("The total number of votes is: " + voteCounts.total + "&nbsp;");
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
