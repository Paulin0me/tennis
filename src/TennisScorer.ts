const score = new Map<number, string>([
  [0, 'Love'],
  [1, 'Fifteen'],
  [2, 'Thirty'],
  [3, 'Forty'],
  [4, 'Advantage']
]);


export class TennisScorer {
  public announceScore(servingPlayer: number, receivingPlayer: number): string {
    if(servingPlayer === receivingPlayer && servingPlayer >= 3) {
      return "Deuce"
    }
    return score.get(servingPlayer) + "-" + score.get(receivingPlayer)
  }
}
