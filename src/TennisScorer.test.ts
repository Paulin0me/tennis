import { assert, property, string } from 'fast-check'
import { TennisScorer } from './TennisScorer'

describe('Tennis Score', () => {
  it('answers Love-Love as starting score', () => {
    assert(property(string(), () => {
      // Arrange
      const tennisScorer = new TennisScorer()

      // Act
      const answer = tennisScorer.announceScore(0,0)

      // Assert
      expect(answer).toBe("Love-Love")
    }))
  })
})
