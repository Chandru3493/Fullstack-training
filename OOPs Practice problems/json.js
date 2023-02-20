const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
const age = 250;
const isMarried = true;

const student = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

const jsonString1 = JSON.stringify(skills);
console.log(jsonString1);

const jsonString2 = JSON.stringify(age);
console.log(jsonString2);

const jsonString3 = JSON.stringify(isMarried);
console.log(jsonString3);

const jsonString4 = JSON.stringify(student);
console.log(jsonString4);

const jsonString5 = JSON.stringify(
  `${student.firstName} ${student.lastName} ${student.skills}`
);
console.log(jsonString5);
