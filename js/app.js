class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = true;
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
  toggleCheckoutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    let lengthOfArray = this._ratings.length;
    let finalRating = ratingsSum / lengthOfArray;
    //toFixed turns int to str and only gives 2 decimals
    return finalRating.toFixed(2);
  }
  set isCheckedOut(newCheckedOut) {
    if (typeof newCheckedOut === "string") {
      this._isCheckedOut === newCheckedOut;
    }
  }
  addRating(newRating) {
    this.ratings.push(newRating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
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
  constructor(director, title, runTime) {
    super(title);
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

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
historyOfEverything.toggleCheckoutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckoutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed);
