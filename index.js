var docHTML = ''
var Courses = []


var courseTitles = [];
var courseTimes = [];
var courseDays = [];
var courseLocations = [];
var courseInstructors = [];


var inputTitles = [];
var inputTimeDates = [];
var inputTimes = [];
var inputDates = [];
var inputLocations = [];
var inputInstructors = [];

class Course {
    constructor(title, time, colorId, days, location, instructor, startDate, endDate) {
        this.title = title;
        this.time = time;
        this.colorId = colorId;
        this.days = days;
        this.location = location;
        this.instructor = instructor;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

$(document).ready(function() {
    testInputHTML = getUrlParam('Courses', 'Empty');
    // this is for the URL input
    if (testInputHTML != 'Empty') {
        $('#boldText').hide();
        $('#html').hide();
        $('#parseHTML').hide();
        inputTitles = decodeURI(getUrlParam('Courses', 'Empty')).split('~');
        inputTimeDates = decodeURI(getUrlParam('Times', 'Empty')).split('~');
        inputLocations = decodeURI(getUrlParam('Locations', 'Empty')).split('~');
        inputInstructors = decodeURI(getUrlParam('Instructors', 'Empty')).split('~');
        // console.log(inputTitles);
        // console.log(inputTimeDates);
        // console.log(inputLocations);
        // console.log(inputInstructors);
        splitNeeded = inputTimeDates;
        //console.log(splitNeeded);
        for (var i = 0; i < splitNeeded.length; i++) {
            elem = splitNeeded[i];
            var tempTime = elem.split(" ").slice(1).join(' ');
            if (tempTime == "" || tempTime == " ") {
                inputTimes.push("N/A")
            } else {
                inputTimes.push(tempTime)
            }
            var tempDay = elem.split(" ")[0]
            if (tempDay == "TBA" || tempDay == "" || tempDay.replace(/\s/g, '').length == 0) {
                inputDates.push("N/A");
            } else {
                inputDates.push(tempDay);
            }
        }
        // console.log(inputTimes);
        // console.log(inputDates);
        mainLogic(inputTitles, inputTimes, inputDates, inputLocations, inputInstructors);
    }

    //this is for manual input
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
            var times = x[0].innerText.split(" ").slice(1).join(' ')
            if (times == "" || times == " ") {
                courseTimes.push("N/A")
            } else {
                courseTimes.push(times)
            }
            //console.log("Times: " + times);
        });
        $('*[id*=win0divDERIVED_REGFRM1_SSR_MTG_SCHED_LONG]:visible').each(function() {
            var x = $(this.childNodes[0])
            var days = x[0].innerText.split(" ")[0]
            if (days == "TBA" || days == "" || days.replace(/\s/g, '').length == 0) {
                courseDays.push("N/A")
            } else {
                courseDays.push(days)
            }
            //console.log("Days: " + days);
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
        mainLogic(courseTitles, courseTimes, courseDays, courseLocations, courseInstructors);
    });
    //console.log(htmlDoc);
});


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlparameter = defaultvalue;
    if (window.location.href.indexOf(parameter) > -1) {
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function mainLogic(courseTitles, courseTimes, courseDays, courseLocations, courseInstructors) {
    for (var i = 0; i < courseTitles.length; i++) {
        populateClassesTable(courseTitles[i], courseTimes[i], courseDays[i], courseLocations[i], courseInstructors[i], "", "", i)
    }
    $('#SubmitClassesButton').show();


    $('#scheduletable').html("");
}


function populateClassesTable(courseTitle, courseTime, courseDays, courseLocation, courseInstructor, courseStartDate, courseEndDate, counter) {
    var newRow = $('<tr class="course">');
    var cols = "";

    cols += '<td><input type="text" class="form-control" value="' + courseTitle + '" id="courseTitle' + counter + '"/></td>';
    cols += '<td><select id="ClassColors' + counter + '" name="ClassColors' + counter + '" onchange="updateSelected(' + counter + ')"> <option class="">Pick a Color </option> <option class="_1" value="#7986cb">Lavendar</option><option class="_2" value="#33b679">Sage</option><option class="_3" value="#8e24aa">Grape</option><option class="_4" value="#e67c73">Flamingo</option><option class="_5" value="#f6c026">Banana</option><option class="_6" value="#f5511d">Tangerine</option><option class="_7" value="#039be5">Peacock</option><option class="_8" value="#616161">Graphite</option><option class="_9" value="#3f51b5">Blueberry</option><option class="_10" value="#0b8043">Basil</option><option class="_11" value="#d60000">Tomato</option> </select></td>';
    cols += '<td><input type="text" class="form-control" value="' + courseDays + '" id="courseDay' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" value="' + courseTime + '" id="courseTime' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" value="' + courseLocation + '" id="courseLocation' + counter + '"/></td>';
    cols += '<td><input type="text" class="form-control" value="' + courseInstructor + '" id="courseInstructor' + counter + '"/></td>';
    cols += '<td><input type="date" class="form-control" value="2019-01-21" id="courseStartDate' + counter + '"/></td>';
    cols += '<td><input type="date" class="form-control" value="2019-05-06" id="courseEndDate' + counter + '"/></td>';
    cols += '<td><input type="button" class="ibtnDel btn btn-md btn-danger "  value="Delete"></td>';
    newRow.append(cols);
    $("#myClassTable").append(newRow);
}

function updateSelected(counter) {
    // var colorID = $('select[name="ClassColors' + counter + '"] option:selected').attr('class').replace(/^_+/i, '')
    // console.log(colorID)
    var hexColor = $('#ClassColors' + counter).val()
    document.getElementById('ClassColors' + counter).style.backgroundColor = hexColor;
}


function getUserData() {
    //console.log("Validating data");
    counter = 0;
    $("tr.course").each(function() {
        var courseTitle = $(this).find("#courseTitle" + counter).val();
        var courseTime = $(this).find("#courseTime" + counter).val();
        var courseColorId = $('select[name="ClassColors' + counter + '"] option:selected').attr('class').replace(/^_+/i, '')
        var courseDay = $(this).find("#courseDay" + counter).val();
        var courseLocation = $(this).find("#courseLocation" + counter).val();
        var courseInstructor = $(this).find("#courseInstructor" + counter).val();
        var courseStartDate = $(this).find("#courseStartDate" + counter).val();
        var courseEndDate = $(this).find("#courseEndDate" + counter).val();
        counter++;
        let tempCourse = new Course(courseTitle, courseTime, courseColorId, courseDay, courseLocation, courseInstructor, courseStartDate, courseEndDate)
        //console.log(tempCourse)
        Courses.push(tempCourse);
    });
    if (validateData()) {
        createEvents();
    } else {
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'One or more classes is incorrectly formatted!',
            footer: 'Make sure you entered valid dates for the start and end'
        })
    }

}

function validateData() {
    for (var i = 0; i < Courses.length; i++) {
        if (Courses[i].title == "" || Courses[i].time == "" || Courses[i].colorId == "" || Courses[i].days == "" || Courses[i].location == "" || Courses[i].instructor == "" || Courses[i].startDate == "" || Courses[i].endDate == "") {
            if (Courses[i].startDate == "" || Courses[i].endDate == "") {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'One or more class dates is incorrectly formatted!',
                })
            }
            return false
        }
    }
    return true;
}

function convertTo24Hour(time) {
    var hours = parseInt(time.substr(0, 2));
    if (time.indexOf('AM') != -1 && hours == 12) {
        time = time.replace('12', '0');
    }
    if (time.indexOf('PM') != -1 && hours < 12) {
        time = time.replace(hours, (hours + 12));
    }
    if (time.indexOf('AM') != -1) {
        return time.split("AM")[0] + ":00";
    }
    if (time.indexOf('PM') != -1) {
        return time.split("PM")[0] + ":00";
    }

}

function getByDayArray(i) {
    var byDay = []
    if (Courses[i].days.includes('Mo')) {
        byDay.push("MO")
    }
    if (Courses[i].days.includes('Tu')) {
        byDay.push("TU")
    }
    if (Courses[i].days.includes('We')) {
        byDay.push("WE")
    }
    if (Courses[i].days.includes('Th')) {
        byDay.push("TH")
    }
    if (Courses[i].days.includes('Fr')) {
        byDay.push("FR")
    }
    if (Courses[i].days.includes('Sa')) {
        byDay.push("SA")
    }
    if (Courses[i].days.includes('Su')) {
        byDay.push("SU")
    }
    var stringByDay = byDay.join(',')
    return stringByDay;
}

function createEvents() {
    for (var i = 0; i < Courses.length; i++) {
        if (Courses[i].days != "N/A" || Courses[i].time != "N/A") {
            //console.log(Courses[i])
            //console.log(Courses[i].time.split(" "))
            // console.log("Start time: " + convertTo24Hour(Courses[i].time.split(" ")[0]))
            // console.log("End time: " + convertTo24Hour(Courses[i].time.split(" ")[2]))
            var startTime = convertTo24Hour(Courses[i].time.split(" ")[0])
            var endTime = convertTo24Hour(Courses[i].time.split(" ")[2])
            var stringByDay = getByDayArray(i)
            var tempEvent = {
                'summary': Courses[i].title,
                'colorId': Courses[i].colorId,
                'location': Courses[i].location,
                'description': 'Auto generated by CalCentralCalendar for ' + Courses[i].title + '.',
                'start': {
                    'dateTime': Courses[i].startDate + "T" + startTime,
                    'timeZone': 'America/Los_Angeles'
                },
                "end": {
                    "dateTime": Courses[i].startDate + "T" + endTime,
                    'timeZone': 'America/Los_Angeles'
                },
                'recurrence': [
                    "RRULE:FREQ=WEEKLY;UNTIL=" + Courses[i].endDate.replace(/-/g, '') + ";BYDAY=" + stringByDay
                ],
                'reminders': {
                    'useDefault': false,
                    'overrides': [
                        { 'method': 'popup', 'minutes': 15 }
                    ]
                }
            };
            console.log(tempEvent)
            // var tempEvent = {
            //     'summary': 'Google I/O 2015',
            //     'location': '800 Howard St., San Francisco, CA 94103',
            //     'description': 'A chance to hear more about Google\'s developer products.',
            //     'start': {
            //         'dateTime': '2018-07-28T09:00:00-07:00',
            //         'timeZone': 'America/Los_Angeles'
            //     },
            //     'end': {
            //         'dateTime': '2018-07-28T17:00:00-07:00',
            //         'timeZone': 'America/Los_Angeles'
            //     },
            //     'recurrence': [
            //         'RRULE:FREQ=DAILY;COUNT=2'
            //     ],
            //     'attendees': [
            //         { 'email': 'lpage@example.com' },
            //         { 'email': 'sbrin@example.com' }
            //     ],
            //     'reminders': {
            //         'useDefault': false,
            //         'overrides': [
            //             { 'method': 'email', 'minutes': 24 * 60 },
            //             { 'method': 'popup', 'minutes': 10 }
            //         ]
            //     }
            // };
            var request = gapi.client.calendar.events.insert({
                'calendarId': 'primary',
                'resource': tempEvent
            });
            request.execute(function(event) {
                swal(
                    'Congrats!',
                    'Your classes were created!',
                    'success'
                )
            });
        }
    }
    // console.log("Creating event");
    // var event = {
    //     'summary': 'Google I/O 2015',
    //     'location': '800 Howard St., San Francisco, CA 94103',
    //     'description': 'A chance to hear more about Google\'s developer products.',
    //     'start': {
    //         'dateTime': '2018-07-28T09:00:00-07:00',
    //         'timeZone': 'America/Los_Angeles'
    //     },
    //     'end': {
    //         'dateTime': '2018-07-28T17:00:00-07:00',
    //         'timeZone': 'America/Los_Angeles'
    //     },
    //     'recurrence': [
    //         'RRULE:FREQ=DAILY;COUNT=2'
    //     ],
    //     'attendees': [
    //         { 'email': 'lpage@example.com' },
    //         { 'email': 'sbrin@example.com' }
    //     ],
    // 'reminders': {
    //     'useDefault': false,
    //     'overrides': [
    //         { 'method': 'email', 'minutes': 24 * 60 },
    //         { 'method': 'popup', 'minutes': 10 }
    //     ]
    // }
    // };
    // var request = gapi.client.calendar.events.insert({
    //     'calendarId': 'primary',
    //     'resource': event
    // });

    // request.execute(function(event) {
    //     appendPre('Event created: ' + event.htmlLink);
    // });
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