const { Middle } = require('../')

module.exports = () =>
  describe('Middle Class', () => {
    let mS = new Middle('TestM')
    it('should extend the School class and pass the name in the constructor to super', () => {
      expect(mS.schoolName).toBeDefined()
    })
    it('should extend the School class and pass the level in the constructor to super', () => {
      expect(mS.level).toBeDefined()
    })
  })
