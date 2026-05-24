let day = 61;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        if (day === 6 || day === 7) {
            console.log("Weekend");
        }
        else {
            console.log("Invalid day");
        }
}