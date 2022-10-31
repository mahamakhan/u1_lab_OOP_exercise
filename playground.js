const { High, Middle, Primary, SportsTeam, Student } = require('.')
// Utilize this file to create new instances of your classes. Practice using the class methods to create and add students, sportsTeams etc. Create a few schools as well.  You'll have access to your classes with the statement on line 1. DO NOT TOUCH LINE 1.

const highSchool = new High()
const student1 = new Student('John', john.com)
const student2 = new Student('Almizan', almizan.com)
const student3 = new Student('Hafsa', hafsa.com)
const student4 = new Student('Aiman', aiman.com)
const student5 = new Student('Zac', zac.com)

highSchool.enrollStudent(student1)
highSchool.enrollStudent(student2)
highSchool.enrollStudent(student3)
highSchool.enrollStudent(student4)
highSchool.enrollStudent(student5)

const sportsTeam1 = new SportsTeam('49ers', 'football', 30)
const sportsTeam2 = new SportsTeam('Laykers', basketball, 20)

highSchool.addTeam(sportsTeam1)
highSchool.addTeam(sportsTeam2)

console.log(highSchool)
