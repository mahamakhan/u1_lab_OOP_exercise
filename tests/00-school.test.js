const { School } = require('../')

module.exports = () =>
  describe('School Class', () => {
    let nSch = new School('Test', 'High')
    it('should have a schoolName property', () => {
      expect(nSch.schoolName).toBeDefined()
    })
    it('should have a level property', () => {
      expect(nSch.level).toBeDefined()
    })
    it('should have a students property', () => {
      expect(nSch.students).toBeDefined()
    })
    it('students should be an array', () => {
      expect(nSch.students).toEqual([])
    })
    it('should have an enrollStudent method', () => {
      expect(nSch.enrollStudent).toBeDefined()
    })
    it('should have a listEnrollmentNumbers method', () => {
      expect(nSch.listEnrollmentNumbers).toBeDefined()
    })
  })
