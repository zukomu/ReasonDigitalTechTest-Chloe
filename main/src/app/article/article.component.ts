import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { article } from 'src/model/classes/articles';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private articlesService: ArticlesService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articleId = Number.parseInt(this._route.snapshot.paramMap.get('article_id')!)
    this.article = this.articlesService.articles.find(a => a.id == this.articleId)!
  }
  articleId: number
  article: article
  imgSource: string = "../../assets/articleImages/"
  getImgAddress(imgName: string): string{
    return this.imgSource + imgName
  }

}
