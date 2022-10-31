class School {
  constructor(schoolName, level) {
    this.schoolName = schoolName
    this.level = level
    this.students = []
  }
  enrollStudent(student) {
    this.students.push(student)
  }
  listEnrollmentNumbers() {
    return this.students.length
  }
}

class High extends School {
  constructor(schoolName) {
    super(schoolName, 12)

    this.sportsTeams = []
  }
  addTeam() {
    this.sportsTeams.push(team)
  }
}

class Middle extends School {
  constructor(name) {
    super(name, 6)
  }
}

class Primary extends School {
  constructor(name, pickUpPolicy) {
    super(name, 3)
    this.pickUpPolicy = pickUpPolicy
  }
  listPickUpPolicy() {
    return `You must pick up your child at ${this.pickUpPolicy}!`
  }
}

class Student {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}

class SportsTeam {
  constructor(name, sport, numOfPlayers) {
    this.name = name
    this.sport = sport
    this.numOfPlayers = numOfPlayers
  }
}

module.exports = {
  School,
  High,
  Middle,
  Primary,
  SportsTeam,
  Student
}
