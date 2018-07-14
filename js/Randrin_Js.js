$(function(){
    $('[rel="popover"]').popover({
        container: 'body',
        html: true,
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).click(function(e) {
        e.preventDefault();
    });
    
    <!-- START: Animation Fade Some Partners -->
    $('#myCarousel').carousel({
        interval: 1000
    });
    
    $('.carousel .item').each(function(){
        var next = $(this).next();
        if (!next.length){
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length > 0){
           next.next().children(':first-child').clone().appendTo($(this)); 
        } else {
           $(this).siblings(':first').children(':first-child').clone().appendTo($(this)); 
        }
    });
    <!-- END: Animation Fade Some Partners -->

    <!-- START: Go to To pop Page -->
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');
    <!-- END: Go to To pop Page -->

    console.log($(window).width());
    <!-- START: section Project Small Device -->
    if ($(window).width() <= 1349 && $(window).width() >= 783) {
        $("#projectSmall").show();
        $("#project").hide();
    } else {
        $("#projectSmall").hide();
        $("#project").show();
    }
    <!-- END: Customization Button language Small Device -->
    
    <!-- START: Customization Button language Small Device -->
    if ($(window).width() < 992 && $(window).width() > 601) {
        console.log($(window).width());
        var str = $('.languageAlign strong').first().text();
            if (str == 'ENG') {
                var str = str.replace('ENG', '');
            }
            if (str == 'FRA') {
                var str = str.replace('FRA', '');
            }
            if (str == 'ITA') {
                var str = str.replace('ITA', '');
            }
        
        $('.languageAlign strong').first().text(str);
        $('.languageAlign').first().removeClass('languageAlign').addClass('languageAlignSmall');
    }
    <!-- END: Customization Button language Small Device -->
    
    <!-- START: Open Modal-Header Style Customization ->
    $(".modal-header").css({"background-color": "#000000", "opacity": "0.5"});
    $(".modal-title span, .modal-title i").css("padding-top", "15px");
    $(".modal-title").append("<img id='theImg' src='../img/Logos/LogoBis.png' width='10%' style='float: left;'/>");
    <!-- END: Open Modal-Header Style Customization ->
        
    <!-- START: Send Message clicking button ->
    $("#contactForm").submit(function(event){
        // cancels the form submission
        event.preventDefault();
        submitForm();
    });
    
    function submitForm(){
    console.log("Init ...");
    // Initiate Variables With Form Content
    var cognome = $("#cognome").val();
    var nome = $("#nome").val();
    var email = $("#email").val();
    var telefono = $("#telefono").val();
    var professione = $("#professione").val();
    var soggetto_messaggio = $("#soggetto_messaggio").val();
    var messaggio = $("#messaggio").val();

    console.log("Ajax call ...");
    $.ajax({
        type: "POST",
        url: "RandrinNzeukangForm.php",
        data: "cognome=" + cognome + "&nome=" + nome + "&email=" + email + "&telefono=" + telefono + "&professione=" + professione +  "&soggetto_messaggio=" + soggetto_messaggio + "&messaggio=" + messaggio,
        success : function(text){
            if (text == "success"){
                formSuccess();
                console.log("Call formSuccess()");
            }
        }
    });
    console.log("cognome=" + cognome + "&nome=" + nome + "&email=" + email + "&telefono=" + telefono + "&professione=" + professione +  "&soggetto_messaggio=" + soggetto_messaggio + "&messaggio=" + messaggio);
    }
    function formSuccess(){
        $("#msgSubmit").removeClass("hidden");
    }
    <!-- END: Send Message clicking button ->
    
    function makeTimer() {

            var endTime = new Date("30 April 2018 23:59:59"); 
        $("#endTime").html(endTime);
            endTime = (Date.parse(endTime) / 1000);

            var now = new Date();
            now = (Date.parse(now) / 1000);

            var timeLeft = endTime - now;

            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
            if (hours < "10") { hours = "0" + hours; }
            if (minutes < "10") { minutes = "0" + minutes; }
            if (seconds < "10") { seconds = "0" + seconds; }

            var str = $('.languageAlign strong').first().text();
            if (str == 'ENG') {
                $("#days").html(days + "<span class='countdown-timer'><strong>Days</strong></span>");
                $("#hours").html(hours + "<span class='countdown-timer'><strong>Hours</strong></span>");
                $("#minutes").html(minutes + "<span class='countdown-timer'><strong>Minutes</strong></span>");
                $("#seconds").html(seconds + "<span class='countdown-timer'><strong>Seconds</strong></span>"); 
            } else if (str == 'FRA') {
               $("#days").html(days + "<span class='countdown-timer'><strong>Jours</strong></span>");
                $("#hours").html(hours + "<span class='countdown-timer'><strong>Mois</strong></span>");
                $("#minutes").html(minutes + "<span class='countdown-timer'><strong>Minutes</strong></span>");
                $("#seconds").html(seconds + "<span class='countdown-timer'><strong>Secondes</strong></span>");       
            } else if (str == 'ITA') {
                $("#days").html(days + "<span class='countdown-timer'><strong>Giorni</strong></span>");
                $("#hours").html(hours + "<span class='countdown-timer'><strong>Ore</strong></span>");
                $("#minutes").html(minutes + "<span class='countdown-timer'><strong>Minuti</strong></span>");
                $("#seconds").html(seconds + "<span class='countdown-timer'><strong>Secondi</strong></span>");
            } 
        
        var endDays = $("#days").text().substr(0,2);
        var endHours = $("#hours").text().substr(0,2);
        var endMin = $("#minutes").text().substr(0,2);
        var endSedcs = $("#seconds").text().substr(0,2);
        
        console.log('endDays :' +endDays + ' endHours: ' +endHours);
        
        if (endDays < 0) {
        $("#timer").hide();
            $("#messageEndCounter").html("<span><strong>Release Time Finished ...</strong></span>");
            }
    }

    setInterval(function() { makeTimer(); }, 1000);
    $('[data-toggle="tooltip"]').tooltip();
    
    /*
    * This is the plugin
    */
    (function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";var selectLangauge = $('.languageAlign strong').first().text();html='<div class="modal fade" id="myModal" role="dialog">';html+='<div class="modal-dialog modal-lg">';html+='<div class="modal-content">';html+='<div class="modal-header" style="background-color: #000000; opacity: 0.5;">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';if(b.title.length>0){html+='<h3 class="modal-title">'+b.title+"</h3>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){
        if(selectLangauge == 'ENG'){
            html+='<button type="button" class="btn btn-success" data-dismiss="modal"><i class="fa fa-close fa-fw"></i> <strong>Close</strong></button>'
        }else if(selectLangauge == 'FRA'){
            html+='<button type="button" class="btn btn-success" data-dismiss="modal"><i class="fa fa-close fa-fw"></i> <strong>Fermer</strong></button>'
        }else if(selectLangauge == 'ITA'){
            html+='<button type="button" class="btn btn-success" data-dismiss="modal"><i class="fa fa-close fa-fw"></i> <strong>Chuidere</strong></button>'
        }
    }html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

    /*
    * Here is how you use it
    */  
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        $.createModal({
            title:'<img id="theImg" src="../img/Logos/LogoBis.png" width="10%" style="float: left;"/><p style="padding-top:15px;"><i class="ion-ribbon-b"></i> <strong>Certification</strong></p>',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;        
    });    
});