import { Injectable } from "@angular/core";
import { article } from "src/model/classes/articles";
import { articleType } from "src/model/enums/articleTypes";


@Injectable()
export class ArticlesService{
    constructor(){}

    
  loremIpsum: string = `
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    \n
    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
    \n
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  `


  articles: article[] = [
    new article("Album Covers", articleType.People, ["record-1.jpg", "record-2.png", "record-3.jpg"], 
      this.loremIpsum, ["Concept", "Printing", "Photography"], 0),
    new article("Adestra", articleType.Print, ["adestra.png"], this.loremIpsum, ["Concept", "Printing", "Photography"], 1),
    new article("Desk Concept", articleType.Furniture, ["desk-1.jpg", "desk-2.jpg", "desk-3.jpg"],
      this.loremIpsum, ["Concept", "Printing", "Photography"], 2),
    new article("Round Things", articleType.People, ["round-1.jpg", "round-2.jpg", "round-3.png"],
      this.loremIpsum, ["Concept", "Printing", "Photography"], 3),
    new article("Book", articleType.People, ["book-1.jpg", "book-2.jpg", "book-3.jpg"], 
      this.loremIpsum, ["Concept", "Printing", "Photography"], 4),
    new article("Colour Swatches", articleType.People, ["swatch-1.png", "swatch-2.jpg", "swatch-3.jpg"], 
      this.loremIpsum, ["Concept", "Printing", "Photography"], 5),
  ]
}