import { Component, OnInit } from '@angular/core';
import { article } from 'src/model/classes/articles';
import { articleType } from 'src/model/enums/articleTypes';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }
  articleType = articleType
  get articles(): article[] { 
    if (this.currentFilter != -1) return this.articlesService.articles.filter(a => a.type == this.currentFilter)
    return this.articlesService.articles 
  }
  imgSource: string = "../../assets/articleImages/"
  getImgAddress(imgName: string): string{
    return this.imgSource + imgName
  }
  currentFilter: number = -1
  filter(newValue: number){
    this.currentFilter = newValue
  }
}
