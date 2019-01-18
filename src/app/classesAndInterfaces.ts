export class Details {
    courseId: number;
    numPlayers: number;
    tee: number;
    playerNames = [];
    scores = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];
}

export interface PlayerScore {
    id: number;
    total: number;
    in: number;
    out: number;
    relToPar: number;
}