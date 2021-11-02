const { School, Student, High, Primary, SportsTeam } = require('..')

module.exports = () =>
  describe('Test Class Methods', () => {
    const school = new School('Test', 'High')
    const stu = new Student('Joe Bean', 'joe@mail.com')
    describe('School Class Methods', () => {
      it('enrollStudent should add a student to the students array', () => {
        school.enrollStudent(stu)
        expect(school.students).toEqual([stu])
      })
      it('listEnrollmentNumbers should return the total number of enrolled students', () => {
        expect(school.listEnrollmentNumbers()).toEqual(1)
      })
    })
    describe('High Class Methods', () => {
      const hs = new High('Middleboro')
      const team = new SportsTeam('Bandits', 'tennis', 6)
      it('addTeam should add a team to the high classes sportsteams array', () => {
        hs.addTeam(team)
        expect(hs.sportsTeams).toEqual([team])
      })
    })
    describe('Primary Class Methods', () => {
      const ps = new Primary('Bouncy House Elementary', '4pm')
      it(`listPickUpPolicy should return a string with the following message:\n 
        'You must pick up your child at <Whatever the pickup policy is>!'
      `, () => {
        let phrase = 'You must pick up your child at'
        expect(ps.listPickUpPolicy()).toEqual(`${phrase} ${ps.pickUpPolicy}!`)
      })
    })
  })
