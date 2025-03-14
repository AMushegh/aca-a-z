const employees = [
  {
    firstName: "Arabela",
    lastName: "Fockes",
    email: "afockes0@wired.com",
    salary: "$6.18",
    isEngineer: true,
    gender: "Female",
  },
  {
    firstName: "Bryant",
    lastName: "Marchi",
    email: "bmarchi1@theatlantic.com",
    salary: "$8.05",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Batholomew",
    lastName: "Eim",
    email: "beim2@goodreads.com",
    salary: "$7.26",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Ritchie",
    lastName: "Ferreira",
    email: "rferreira3@booking.com",
    salary: "$4.07",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Kaylyn",
    lastName: "Ivain",
    email: "kivain4@gmpg.org",
    salary: "$5.89",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Wilhelmina",
    lastName: "Portigall",
    email: "wportigall5@plala.or.jp",
    salary: "$2.06",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Rouvin",
    lastName: "Gillcrist",
    email: "rgillcrist6@aol.com",
    salary: "$7.29",
    isEngineer: true,
    gender: "Male",
  },
  {
    firstName: "Flemming",
    lastName: "Scroggins",
    email: "fscroggins7@msu.edu",
    salary: "$7.54",
    isEngineer: false,
    gender: "Male",
  },
  {
    firstName: "Sallee",
    lastName: "Schlagh",
    email: "sschlagh8@reuters.com",
    salary: "$2.24",
    isEngineer: false,
    gender: "Female",
  },
  {
    firstName: "Roxine",
    lastName: "Bedo",
    email: "rbedo9@whitehouse.gov",
    salary: "$6.47",
    isEngineer: false,
    gender: "Female",
  },
];

// 1
function getEmployeesFulNamesAsString(employees) {
  //   let temp = [];
  //   for (const employee of employees) {
  //     temp.push(employee.firstName + " " + employee.lastName);
  //   }
  //   return temp.toString();
  return employees
    .map((employee) => employee.firstName + " " + employee.lastName)
    .toString();
}

// 2
function getEmployeesEmailSalaryAsString(employees) {
  return myToString(
    employees.map((employee) => employee.email + ": " + employee.salary)
  );
}

// 3
function myToString(array) {
  let result = "";
  array.forEach((element, index) => {
    result += element;
    if (index !== array.length - 1) {
      result += ",";
    }
  });
  return result;
}

// 4
function getEmployeesEmailsWithDoubleSlashSeparator(employees) {
  return employees.map((employee) => employee.email).join("//");
}

// 5
function getEmployeesEmailSalaryAsStringV2(employees) {
  return employees
    .map((employee) => [employee.email, employee.salary].join(": "))
    .join(",");
}

// 6
function myJoin(array, separator = ",") {
  let result = "";
  array.forEach((element, index) => {
    result += element;
    if (index !== array.length - 1) {
      result += separator;
    }
  });
  return result;
}

console.log(getEmployeesFulNamesAsString(employees));
console.log("-".repeat(30));
console.log(getEmployeesEmailSalaryAsString(employees));
console.log("-".repeat(30));
console.log(getEmployeesEmailsWithDoubleSlashSeparator(employees));
console.log("-".repeat(30));
console.log(getEmployeesEmailSalaryAsStringV2(employees));
