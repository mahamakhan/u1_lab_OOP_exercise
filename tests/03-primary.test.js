const { Primary } = require('../')

module.exports = () =>
  describe('Primary Class', () => {
    let pS = new Primary('TestP', '3pm')
    it('should extend the School class and pass the name in the constructor to super', () => {
      expect(pS.schoolName).toBeDefined()
    })
    it('should extend the School class and pass the level in the constructor to super', () => {
      expect(pS.level).toBeDefined()
    })
    it('should have a pickUpPolicy property', () => {
      expect(pS.pickUpPolicy).toBeDefined()
    })
    it('pickUpPolicy should be a string', () => {
      expect(pS.pickUpPolicy).toEqual('3pm')
    })
    it('should have a listPickUpPolicy method', () => {
      expect(pS.listPickUpPolicy).toBeDefined()
    })
  })
