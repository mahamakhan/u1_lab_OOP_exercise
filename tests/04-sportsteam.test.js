const { SportsTeam } = require('../')

module.exports = () =>
  describe('SportsTeam Class', () => {
    let sportsTeam = new SportsTeam('TestTeam', 'soccer', 22)
    it('should have a name property', () => {
      expect(sportsTeam.name).toBeDefined()
    })
    it('should accept name in the constructor', () => {
      expect(sportsTeam.name).toBe('TestTeam')
    })
    it('should have a sport property', () => {
      expect(sportsTeam.sport).toBeDefined()
    })
    it('should accept sport in the constructor', () => {
      expect(sportsTeam.sport).toBe('soccer')
    })
    it('should have a numOfPlayers property', () => {
      expect(sportsTeam.numOfPlayers).toBeDefined()
    })
    it('should accept numOfPlayers in the constructor', () => {
      expect(sportsTeam.numOfPlayers).toBe(22)
    })
  })
