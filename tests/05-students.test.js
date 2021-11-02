const { Student } = require('..')

module.exports = () =>
  describe('Student Class', () => {
    const stu = new Student('Joe Bean', 'joe@mail.com')
    it('should have a name property', () => {
      expect(stu.name).toBeDefined()
    })
    it('name should be provided in the constructor', () => {
      expect(stu.name).toBe('Joe Bean')
    })
    it('should have an email property', () => {
      expect(stu.email).toBeDefined()
    })
    it('email should be provided in the constructor', () => {
      expect(stu.email).toBe('joe@mail.com')
    })
  })
