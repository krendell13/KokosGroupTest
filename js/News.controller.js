import {NewsService} from "./News.service.js";
import { card } from './Card.js';
class NewsController {
    #data = [];
    #newsService = new NewsService();
    async getAllNews(filterToDate = false) {
        this.#data = await this.#newsService.getAllNews(filterToDate);
    }
    render() {
        const list = document.querySelector('.cards');
        list.innerHTML = '';
        this.#data.forEach((article, index) => {
            list.innerHTML += card(article, index);
        })
        this.clicker();
    }

    async init() {
        await this.getAllNews(true);
        await this.render();
    }

    clicker() {
        document.querySelectorAll('.like').forEach((like, index) => {
            like.addEventListener('click', (e) => {
                e.preventDefault();
                this.#data[index].voteStatus = !this.#data[index].voteStatus;
                this.render()
            })
        })
        document.querySelectorAll('.dislike').forEach((like, index) => {
            like.addEventListener('click', (e) => {
                e.preventDefault();
                this.#data[index].voteStatus = !this.#data[index].voteStatus;
                this.render()
            })
        })
    }
}

const newsController = new NewsController()

export default newsController;