// let i = 10;

// if (i < 5) {
//   console.log("inside if");
// } else {
//   console.log("inside else");
// }

// console.log("end");

let month = "January";

switch (month) {
  case "January":
  case "December":
  case "February":
    console.log("winter");
    break;
  case "October":
    console.log("Autumn");
    break;
  default:
    console.log("please input valid month name");
    break;
}
