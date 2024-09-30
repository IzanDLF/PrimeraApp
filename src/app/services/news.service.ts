import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResp } from '../interfaces';
import { Observable, map } from 'rxjs';
const apiKey = environment.apiKey;
@Injectable({providedIn: 'root'})

export class NewsService {

  constructor(private http: HttpClient) { }
  getTopNews():Observable<Article[]> {
    return this.http.get<NewsResp>("https://newsapi.org/v2/top-headlines?sources=techcrunch",{
      params: {
        apiKey: apiKey
      }
    }).pipe(map(( {articles } ) => articles));
  }
  getTopHeadlinesByCategory(
    category:
    string):Observable<Article[]>{
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?sources=${category}`,{
    params :{apiKey}
    }).pipe(map(( {
    articles } )=> articles));// Desestructuro los articulos
    }
    }
