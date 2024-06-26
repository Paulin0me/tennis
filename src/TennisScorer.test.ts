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

  it('answers Fifteen-Love for score 1-0', () => {
    assert(property(string(), () => {
      // Arrange
      const tennisScorer = new TennisScorer()

      // Act
      const answer = tennisScorer.announceScore(1,0)

      // Assert
      expect(answer).toBe("Fifteen-Love")
    }))
  })

  it('answers Fifteen-Thirty for score 1-2', () => {
    assert(property(string(), () => {
      // Arrange
      const tennisScorer = new TennisScorer()

      // Act
      const answer = tennisScorer.announceScore(1,2)

      // Assert
      expect(answer).toBe("Fifteen-Thirty")
    }))
  })

  it('answers Forty-Thirty for score 3-2', () => {
    assert(property(string(), () => {
      // Arrange
      const tennisScorer = new TennisScorer()

      // Act
      const answer = tennisScorer.announceScore(3,2)

      // Assert
      expect(answer).toBe("Forty-Thirty")
    }))
  })

  it('answers Deuce for score 3-3', () => {
    assert(property(string(), () => {
      // Arrange
      const tennisScorer = new TennisScorer()

      // Act
      const answer = tennisScorer.announceScore(3,3)

      // Assert
      expect(answer).toBe("Deuce")
    }))
  })

  it('answers Deuce for score 4-4', () => {
    assert(property(string(), () => {
      // Arrange
      const tennisScorer = new TennisScorer()

      // Act
      const answer = tennisScorer.announceScore(4,4)

      // Assert
      expect(answer).toBe("Deuce")
    }))
  })

  it('answers Advantage-Forty for score 4-3', () => {
    assert(property(string(), () => {
      // Arrange
      const tennisScorer = new TennisScorer()

      // Act
      const answer = tennisScorer.announceScore(4,3)

      // Assert
      expect(answer).toBe("Advantage-Forty")
    }))
  })
})
