export class ArticleDto {
    author;
    date;
    id;
    imgUrl;
    name;
    text;
    voteStatus;
    constructor(article) {
        this.author = this.checkString(article.author);
        this.date = this.checkDateFormat(article.date);
        this.id = article.id;
        this.imgUrl = this.checkImg(article.imgUrl);
        this.name = this.checkString(article.name);
        this.text = this.checkString(article.text);
        this.voteStatus = this.checkStatus(article.voteStatus);
    }

    checkString(str) {
        if (str)
            return str.charAt(0).toUpperCase() + str.slice(1);
        else
            return "";
    }

    checkImg(str) {
        if (str)
            return this.#getValidUrl(str);
        else
            return '../img/Error.jpg';
    }

    checkStatus(state) {
        if (state === 'undefined' || state === undefined) {
            return true;
        } else {
            return state;
        }
    }

    checkDateFormat(date) {
        if (date) {
            const mounth = +date.split('-')[1];
            if (mounth > 12) {
                const num = mounth % 12;
                return `${date.split('-')[0]}.${num === 0 ? `01` : num < 10 ? `0${num}` : num}.${date.split('-')[2]}`;
            } else {
                return `${date.split('-').join('.')}`;
            }
        } else {
            const date = new Date();
            const day = date.getDay();
            const mounth = date.getMonth();
            const year = date.getFullYear();
            return `${this.#checkDateNumber(day)}.${this.#checkDateNumber(mounth)}.${date.getFullYear()}`;
        }
    }

    #checkDateNumber(num) {
        if (+num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    #getValidUrl(url) {
        if (!url) return;
        const index = url.indexOf("://");
        if (index > 0) {
            const firstUrlPart = url.substring(0, index);
            if (firstUrlPart == "hhttps") {
                return url.slice(1);
            }
        }
        return url;
    }
}