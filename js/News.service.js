import {ArticleDto} from "./dto/Article.dto.js";

export class NewsService {
    async getAllNews(filterToDate = false) {
        const response = await fetch('https://dev.mykgproxy.webprofy.ru/upload/frontend/data.json');
        const res = await response.json();
        let data = [];
        if (filterToDate) {
            data = res
                .map(artile => {
                    return new ArticleDto(artile);
                })
                .sort((a, b) => {
                    return new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-'));
                })
            return data;
        } else {
            data = res
                .map(article => {
                    return new ArticleDto(article);
                });
            return data;
        }
    }
}