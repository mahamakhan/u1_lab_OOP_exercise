const { High } = require('../')

module.exports = () =>
  describe('High Class', () => {
    let hS = new High('TestH')
    it('should extend the School class and pass the name in the constructor to super', () => {
      expect(hS.schoolName).toBeDefined()
    })
    it('should extend the School class and pass the level in the constructor to super', () => {
      expect(hS.level).toBeDefined()
    })
    it('should have a sportsTeams property', () => {
      expect(hS.sportsTeams).toBeDefined()
    })
    it('sportTeams should be an array', () => {
      expect(hS.sportsTeams).toEqual([])
    })
    it('should have an addTeam method', () => {
      expect(hS.addTeam).toBeDefined()
    })
  })
