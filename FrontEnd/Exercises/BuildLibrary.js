class Media {
    constructor(title, isCheckedOut) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    getAverageRating() {
        let ratings = this._ratings.reduce((total, number) => {
            return total + number;
        });
        ratings /= this.ratings.length;
        return ((`Rating: ${ratings}/5`));
    }
    toggleCheckOutStatus() {
        return this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        if (rating >= 0 && rating <= 5)
        return this._ratings.push(rating);
        else console.log("Can't add this rating");
    }
}

class Book extends Media {
    constructor(title, isCheckedOut, author, pages) {
        super(title, isCheckedOut);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, isCheckedOut, director, runTime) {
        super(title, isCheckedOut);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, isCheckedOut, artist, songs) {
        super(title, isCheckedOut);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

const bruh = new CD("Bruh Moment", true, "BruhDabLord", ["Bruh", "Moment", "Dab (censored edition)"]);

bruh.addRating(5);
bruh.addRating(5);
bruh.addRating(5);
bruh.addRating(5);
bruh.addRating(5);

console.log(bruh.ratings);
console.log(bruh.getAverageRating());
