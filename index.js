$(document).ready(function() {
    parser = new DOMParser();
    //htmlDoc = parser.parseFromString(, )
    var docHTML = ''
    var courseTitles = [];
    var courseTimes = [];
    $("#parseHTML").click(function() {
        //console.log($('#html').val());
        docHTML = $('#html').val();
        $('#scheduletable').html(docHTML);
        $('*[id*=win0divE_CLASS_DESCR]:visible').each(function() {
            var x = $(this.childNodes[0])
            courseTitles.push(x[0].innerHTML)
            console.log("Title: " + x[0].innerHTML);
        });
        $('*[id*=win0divDERIVED_REGFRM1_SSR_MTG_SCHED_LONG]:visible').each(function() {
            var x = $(this.childNodes[0])
            courseTimes.push(x[0].innerHTML)
            console.log("Times: " + x[0].innerHTML);
        });
    });
    var htmlDoc = parser.parseFromString(docHTML, "text/html")
    console.log(htmlDoc);

});