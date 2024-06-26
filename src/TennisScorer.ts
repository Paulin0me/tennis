const score = new Map<number, string>([
  [0, "Love"],
]);


export class TennisScorer {
  public announceScore(servingPlayer: number, receivingPlayer: number): string {
    return score.get(servingPlayer) + "-" + score.get(receivingPlayer)
  }
}
