/* -------------------------------------------------------------------------- */
/*                   Display today's date at top of the page                  */
/* -------------------------------------------------------------------------- */

// Get current date
var currentDate = dayjs();

// Format current date to required format e.g. Saturday, January 20th
var formattedDate = dayjs(currentDate).format('dddd, MMMM D');

// Add suffix
var suffix = "";
var dayofMonth = new Date().getDate();
switch (dayofMonth) {
    case 1:
        suffix = "st";
        break;
    case 21:
        suffix = "st";
        break;
    case 31:
        suffix = "st";
        break;
    case 2:
        suffix = "nd";
        break;
    case 22:
        suffix = "nd";
        break;
    case 3:
        suffix = "rd";
        break;
    case 23:
        suffix = "rd";
        break;
    default:
        suffix = "th";
        break;
}

// Display today's date in the required format
formattedDate = formattedDate + suffix;
$("#currentDay").text(formattedDate);

/* -------------------------------------------------------------------------- */
/*                  Colour the input fields depending on time                 */
/* -------------------------------------------------------------------------- */

// Get current hour
var currentHour = new Date().getHours();

// For hours between 9 and 17 do
for (let index = 9; index < 18; index++) {

    // "element" will identify the ID of the input field whose colour will be changed
    var element = "#" + index;

    // Past hour
    if (index < currentHour) {
        console.log(`${index} "Past"`);
        $(element).addClass('past').removeClass('present future');
    }

    // Current hour
    else if (index === currentHour) {
        console.log(`${index} "Present"`);
        $(element).addClass('present').removeClass('past future');
    }

    //Future hour
    else {
        console.log(`${index} "Future"`);
        $(element).addClass('future').removeClass('present past');
    };
}