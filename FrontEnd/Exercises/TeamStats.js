// Much easier version of Meal Maker

const team = {
    _players: [
        {
            firstName: "Bruh",
            lastName: "Moment",
            position: "Server"
        },
        {
            firstName: "Ya",
            lastName: "Yeet",
            position: "Spiker"
        },
        {
            firstName: "Dab",
            lastName: "Ondem",
            position: "Defender"
        }
    ],
    _games: [
        {
            opponents: "Seijuu Prefecture",
            teamPoints: 2,
            opponentPoints: 200
        },
        {
            opponents: "Tokyo University",
            teamPoints: -12,
            opponentPoints: 4000
        },
        {
            opponents: "Tanaka Middle School",
            teamPoints: 20,
            opponentPoints: 45
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    set players(replacements) {
        this._players = replacements;
    },
    set games(rigged) {
        this._games = rigged;
    },
    addPlayer(fn, ln, p) {
        let player = {
            firstName: fn,
            lastName: ln,
            position: p,
        };
        return this._players.push(player);
    },
    addGame(opN, tP, oP) {
        let game = {
            opponents: opN,
            teamPoints: tP,
            opponentPoints: oP
        };
        return this._games.push(game);
    }
};

team.addPlayer("Gang", "Ster", "Volleyer");
team.addGame("Osaka Hoodlings", 12, 6);
console.log(team.players);
console.log(team.games);
