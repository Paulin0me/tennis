const score = new Map<number, string>([
  [0, "Love"],
  [1, 'Fifteen'],
  [2, 'Thirty'],
  [3, 'Forty']
]);


export class TennisScorer {
  public announceScore(servingPlayer: number, receivingPlayer: number): string {
    return score.get(servingPlayer) + "-" + score.get(receivingPlayer)
  }
}
