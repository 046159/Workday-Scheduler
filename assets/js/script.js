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