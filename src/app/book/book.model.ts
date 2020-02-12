export class Book {
  public name: string;
  public description: string;
  public imageURL: string;
  public price: number;
  public author: string;
  public publicDate: string;
  public createdDate: string;

  constructor(name: string, description: string, imageURL: string, price: number,
              author: string, publicDate: string, createdDate: string) {
  this.name = name;
  this.description = description;
  this.imageURL = imageURL;
  this.price = price;
  this.author = author;
  this.publicDate = publicDate;
  this.createdDate = createdDate;
  }
}
