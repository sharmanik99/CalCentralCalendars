var docHTML = ''
var courseTitles = [];
var courseTimes = [];
var courseLocations = [];
var courseInstructors = [];
var Courses = []

class Course {
    constructor(title, time, location, instructor, startDate, endDate) {
        this.title = title;
        this.time = time;
        this.location = location;
        this.instructor = instructor;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

$(document).ready(function() {
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
        for (var i = 0; i < courseTitles.length; i++) {
            populateClassesTable(courseTitles[i], courseTimes[i], courseLocations[i], courseInstructors[i], "", "", i)
        }
        $('#SubmitClassesButton').show();

        //let tempCourse = new Course(courseTitles[i], courseTimes[i], courseLocations[i], courseInstructors[i], "", "")
        // var tempCourseObject = {
        //     title: courseTitles[i],
        //     time: courseTimes[i],
        //     location: courseLocations[i],
        //     instructor: courseInstructors[i]
        // };
        //Courses.push(tempCourse);

        $('#scheduletable').html("");
    });
    //console.log(htmlDoc);
});

function validateData() {
    console.log("Validating data");
    counter = 0;
    $("tr.course").each(function() {
        var quantity1 = $(this).find("#courseTitle" + counter).val();
        console.log(quantity1);
        counter++;
    });

}

function populateClassesTable(courseTitle, courseTime, courseLocation, courseInstructor, courseStartDate, courseEndDate, counter) {
    var newRow = $('<tr class="course">');
    var cols = "";

    cols += '<td><input type="text" class="form-control" value="' + courseTitle + '" id="courseTitle' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" value="' + courseTime + '" id="courseTime' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" value="' + courseLocation + '" id="courseLocation' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" value="' + courseInstructor + '" id="courseInstructor' + counter + '"/></td>';
    cols += '<td><input type="date" class="form-control" value="' + courseStartDate + '" id="courseStartDate' + counter + '"/></td>';
    cols += '<td><input type="date" class="form-control" value="' + courseEndDate + '" id="courseEndDate' + counter + '"/></td>';
    cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
    newRow.append(cols);
    $("#myClassTable").append(newRow);
}

// function createModal() {
//     $('#dialog-form').dialog({
//         width: 600,
//         modal: true,
//         open: function() {
//             //$(this).html(generateMoreInformationModal(courseTitles[i], courseTimes[i], courseLocations[i], courseInstructors[i]));
//         },
//         buttons: {
//             "Create Class": function() {
//                 console.log($('#courseTitle').val());
//             },
//             Cancel: function() {
//                 dialog.dialog('close')
//             }
//         },
//         close: function(event, ui) {
//             // do whatever you need on close
//         }
//     });
// }



// function generateMoreInformationModal(title, time, location, instructor, i) {
//     console.log(title + " " + time + " " + location + " " + instructor)
//     var HTMLcode = "<div id=\"dialog-form\" title=\"Create new class\">" +
//         "<p class=\"validateTips\">All form fields are required.</p>" +
//         "<form>" +
//         "<fieldset>" +
//         "<label for=\"name\">Course Title:</label>" +
//         "<input type=\"text\" name=\"courseTitle\" id=\"courseTitle" + i + "\"  value=\"" + title + "\" class=\"text ui-widget-content ui-corner-all\">" +
//         "<label for=\"email\">Course Time:</label>" +
//         "<input type=\"text\" name=\"courseTime\" id=\"courseTime\" value=\"" + time + "\" class=\"text ui-widget-content ui-corner-all\">" +
//         "<label for=\"password\">Course Location:</label>" +
//         "<input type=\"text\" name=\"courseLocation\" id=\"courseLocation\" value=\"" + location + "\" class=\"text ui-widget-content ui-corner-all\">" +
//         "<label for=\"instructor\">Course Instructor:</label>" +
//         "<input type=\"text\" name=\"courseInstructor\" id=\"courseInstructor\"  value=\"" + instructor + "\" class=\"text ui-widget-content ui-corner-all\">" +
//         "<input type=\"submit\">" + 

//         "</fieldset>" +
//         "</form>" +
//         "</div>"
//     return HTMLcode;
// }

function createEvents() {
    console.log("Creating event");
    var event = {
        'summary': 'Google I/O 2015',
        'location': '800 Howard St., San Francisco, CA 94103',
        'description': 'A chance to hear more about Google\'s developer products.',
        'start': {
            'dateTime': '2018-07-28T09:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': '2018-07-28T17:00:00-07:00',
            'timeZone': 'America/Los_Angeles'
        },
        'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
            { 'email': 'lpage@example.com' },
            { 'email': 'sbrin@example.com' }
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                { 'method': 'email', 'minutes': 24 * 60 },
                { 'method': 'popup', 'minutes': 10 }
            ]
        }
    };
    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });

    request.execute(function(event) {
        appendPre('Event created: ' + event.htmlLink);
    });
}