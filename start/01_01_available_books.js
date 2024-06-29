// Write your code here
class Book{
  constructor(title, author, ISBN, numCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }
  getAvailability(){
    if(this.numCopies === 0)
      return "Out of Stock";
    else if (this.numCopies < 10)
      return "Low Stock";
    else
      return "In Stock";
  }
  get availability(){
    return this.getAvailability();
  }
  sell(numSold = 1){
      this.numCopies -= numSold;
  }
  restock(numCopies = 5){
    this.numCopies += numCopies;
  }
}

const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log("Book Stock:", HungerGames.availability);

HungerGames.restock(12);
console.log("12 Books Restocked!");
console.log("Book Stock:", HungerGames.availability);

HungerGames.sell(17);
console.log("17 Books Sold!");
console.log("Book Stock:", HungerGames.availability);