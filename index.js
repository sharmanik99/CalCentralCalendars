$(document).ready(function() {
    parser = new DOMParser();
    //htmlDoc = parser.parseFromString(, )
    var docHTML = ''
    var courseTitles = [];
    var courseTimes = [];
    var courseLocations = [];
    var courseInstructors = [];
    var Courses = []
    $("#parseHTML").click(function() {
        //console.log($('#html').val());
        docHTML = $('#html').val();
        $('#scheduletable').html(docHTML);
        $('*[id*=win0divE_CLASS_DESCR]:visible').each(function() {
            var x = $(this.childNodes[0])
            courseTitles.push(x[0].innerText)
            //console.log("Title: " + x[0].innerText);
        });
        $('*[id*=win0divDERIVED_REGFRM1_SSR_MTG_SCHED_LONG]:visible').each(function() {
            var x = $(this.childNodes[0])
            courseTimes.push(x[0].innerText)
            //console.log("Times: " + x[0].innerText);
        });
        $('*[id*=win0divDERIVED_REGFRM1_SSR_MTG_LOC_LONG]:visible').each(function() {
            var x = $(this.childNodes[0])
            courseLocations.push(x[0].innerText)
            //console.log("Locations: " + x[0].innerText);
        });
        $('*[id*=win0divDERIVED_REGFRM1_SSR_INSTR_LONG]:visible').each(function() {
            var x = $(this.childNodes[0])
            courseInstructors.push(x[0].innerText)
            //console.log("Instructors: " + x[0].innerText);
        });
        // console.log(courseTitles.length)
        // console.log(courseTimes.length)
        // console.log(courseLocations.length)
        // console.log(courseInstructors.length)
        for(var i = 0; i < courseTitles.length; i++){
        	var tempCourseObject = {
        		title: courseTitles[i],
        		time: courseTimes[i],
        		location: courseLocations[i],
        		instructor: courseInstructors[i]
        	};
        	Courses.push(tempCourseObject);
        }
        console.log(Courses); // Courses contains an array of Course Objects that have most of the relevant information to be able to make Google Calendar API call

    });
    var htmlDoc = parser.parseFromString(docHTML, "text/html")
    //console.log(htmlDoc);

});