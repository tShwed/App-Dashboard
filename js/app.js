var  $notification = $('#notificationBtn'),
     $light = $('#alert-light'),

     $message1 = $('#message1'),
  	 $offBtn1 = $('#offButton1'),
     $message2 = $('#message2'),
     $offBtn2 = $('#offButton2'),
     $message3 = $('#message3'),
     $offBtn3 = $('#offButton3'),

  	 $weekly = $('#weekly'),
  	 $hourly = $('#hourly'),
  	 $daily = $('#daily'),
  	 $monthly = $('#monthly'),

  	 $chart = $('#lineChart-daily'),

  	 $onoffswitch1 = $('#myonoffswitch'),
  	 $onoffswitch2 = $('#myonoffswitch2'),
  	 $timezone = $('.timezone'),
  	 $save = $('.save'),
  	 $cancel = $('.cancel'),
     $send = $('#send');

$( document ).ready(function() {
    $weekly.addClass( "selected" );
});

$notification.click("on", function() {
    $light.hide();
    $message2.show();
    $message3.show();
});

$offBtn1.click("on" ,function(){
    $message1.slideUp(300);
});

$offBtn2.click("on" ,function(){
    $message2.slideUp(300);
});

$offBtn3.click("on" ,function(){
    $message3.slideUp(300);
});


$send.click(function () {
    if (document.getElementById("contact_message").value === "") {
        $(".warning-message").text("Please enter message").css('background-color', 'transparent').css('color', '#6060CD');
    } else {
        $(".warning-message").text("Your message sent successfully").css('background-color', '#6060CD').css('border-radius', '3%', 'padding', '10px').css('color', 'white').width(260);
    }
    if (document.getElementById("contact_name").value === "") {
        $(".warning-message").text("Which member are you trying to contact?").css('background-color', 'transparent').css('color', '#6060CD');
    }
});

function loadSettings() {
	if (localStorage.email == "unchecked") {
    	$onoffswitch1.prop('checked', false);
	}
	if (localStorage.profile == "unchecked") {
    	$onoffswitch2.prop('checked', false);
	}
    	$timezone.val(localStorage.timezone);
	}


function saveSettings() {
	if ($onoffswitch1.is(":checked")) {
		localStorage.email = "checked";
	} else {
		localStorage.email = "unchecked";
	}

	if ($onoffswitch2.is(":checked")) {
		localStorage.profile = "checked";
	} else {
		localStorage.profile = "unchecked";
	}
    	localStorage.timezone = $timezone.val();
}

$save.click( function() {
	saveSettings();
});

$cancel.click( function() {
	localStorage.timezone = 0;
	localStorage.profile = "checked";
	localStorage.email = "checked";
});

loadSettings();


$hourly.click("on" ,function(){
    $weekly.removeClass( "selected" );
    $daily.removeClass( "selected" );
    $monthly.removeClass( "selected" );
    $hourly.addClass( "selected" );
});

$daily.click("on" ,function(){
    $weekly.removeClass( "selected" );
    $hourly.removeClass( "selected" );
    $monthly.removeClass( "selected" );
    $daily.addClass( "selected" );
});

$weekly.click("on" ,function(){
    $hourly.removeClass( "selected" );
    $daily.removeClass( "selected" );
    $monthly.removeClass( "selected" );
    $weekly.addClass( "selected" );
});

$monthly.click("on" ,function(){
    $weekly.removeClass( "selected" );
    $hourly.removeClass( "selected" );
    $daily.removeClass( "selected" );
    $monthly.addClass( "selected" );
});

$chart.show();


$hourly.click("on" ,function(){
   $chart.show();
});

$daily.click("on" ,function(){
   $chart.show();
});

$weekly.click("on" ,function(){
   $chart.show();
});

$monthly.click("on" ,function(){
   $chart.show();
});
