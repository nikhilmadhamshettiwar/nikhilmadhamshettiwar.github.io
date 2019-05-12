/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: false,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();



var contestants = [{
    contestantId : 1,
    name : "Tracy",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img1.jpg"
},{
    contestantId : 2,
    name : "Tracy 2",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img2.jpg"
},{
    contestantId : 3,
    name : "Tracy 3",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img3.jpg"
},
{
    contestantId : 4,
    name : "Tracy 4",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img4.jpg"
},{
    contestantId : 5,
    name : "Tracy 5",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img1.jpg"
},{
    contestantId : 6,
    name : "Tracy 6",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img2.jpg"
},{
    contestantId : 7,
    name : "Tracy 7",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img3.jpg"
},
{
    contestantId : 8,
    name : "Tracy 8",
    youtube : "https://www.youtube.com/embed/WA4_DJvrU30",
    imageName : "team-img4.jpg"
}]

function loadContestants(){
    let contetstatHtmlString = "";
    contestants.forEach(element => {
        contetstatHtmlString = `${contetstatHtmlString}<div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="0" data-wow-delay="0.5s">
        <div class="team-wrapper">
            <img id="${element.contestantId}" src="images/${element.imageName}" class="img-responsive" alt="team img 1" data-toggle="modal" data-id="${element.contestantId}" data-name="${element.name}" data-video="${element.youtube}" data-target=".profile-modal-lg">
                <div class="team-des">
                    <h4>${element.name}</h4>
                </div>
        </div>
    </div>`
    }); 
    console.log($("#participans-container"));
    $("#participans-container").append(contetstatHtmlString);
}

loadContestants();

var contestantId = location.search.replace("?contestantId=", "");
$("#"+contestantId).trigger('click');
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */

$(document).on('show.bs.modal','#myModal', function (e) {
// console.log("modal dsdsfsdf ddsf"+e.target)  
// console.log(e)  
var button = $(e.relatedTarget) // Button that triggered the modal
//   var contName = button.data('name') // Extract info from data-* attributes
  var modal = $(this)
  modal.find('.title').text(button.data('name'))
  modal.find('.iframe').attr('src',button.data('video'))
});
