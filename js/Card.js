export const card = (article, index) => {
    return `
        <li class="card">
        <img src="${article.imgUrl}" alt="" class="card__img">
            <div class="card-item">
                <div class="card-item-content">
                    <h3 class="card-item-content__h3">${article.name}</h3>
                    <span class="card-item-content__date">${article.date}</span>
                    <p class="card-item-content__description">${article.text}</p>
                </div>
                <div class="card-item-subcontent">
                            <p class="card-item-subcontent__name">${article.author}</p>
                            <a class=" like like-${index}" href="#" style="display: ${article.voteStatus ? 'block' : 'none'}">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <g clip-path="url(#clip0_2_57)">
                                    <path d="M29.9505 9.37092C29.5126 4.55103 26.101 1.0541 21.8316 1.0541C18.9872 1.0541 16.3828 2.58476 14.9173 5.03798C13.4651 2.55303 10.9675 1.05352 8.16866 1.05352C3.89976 1.05352 0.487636 4.55045 0.0503028 9.37035C0.0156854 9.58324 -0.126246 10.7037 0.305317 12.5309C0.927276 15.1664 2.3639 17.5637 4.45883 19.4619L14.9104 28.9465L25.5414 19.4625C27.6363 17.5637 29.0729 15.167 29.6949 12.5309C30.1265 10.7043 29.9845 9.58382 29.9505 9.37092Z" fill="#00A15C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2_57">
                                    <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            
                            <a class="dislike dislike-${index}" href="#" style="display: ${article.voteStatus ? 'none' : 'block'}">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <g clip-path="url(#clip0_2_28)">
                                    <path d="M29.9505 9.37092C29.5126 4.55103 26.101 1.0541 21.8316 1.0541C18.9872 1.0541 16.3828 2.58476 14.9173 5.03798C13.4651 2.55303 10.9675 1.05352 8.16866 1.05352C3.89976 1.05352 0.487636 4.55045 0.0503028 9.37035C0.0156854 9.58324 -0.126246 10.7037 0.305317 12.5309C0.927276 15.1664 2.3639 17.5637 4.45883 19.4619L14.9104 28.9465L25.5414 19.4625C27.6363 17.5637 29.0729 15.167 29.6949 12.5309C30.1265 10.7043 29.9845 9.58382 29.9505 9.37092ZM28.5716 12.2667C28.0038 14.6737 26.6878 16.8667 24.7694 18.6045L14.9173 27.3945L5.23426 18.6068C3.31241 16.8656 1.99695 14.6732 1.42865 12.2661C1.02017 10.537 1.18806 9.56016 1.18864 9.55382L1.19729 9.49555C1.57231 5.2728 4.50383 2.20743 8.16866 2.20743C10.8728 2.20743 13.2534 3.86907 14.3831 6.54326L14.9144 7.80276L15.4458 6.54326C16.5576 3.91003 19.0639 2.20801 21.8321 2.20801C25.4964 2.20801 28.4285 5.27338 28.811 9.55093C28.8122 9.56016 28.98 10.5375 28.5716 12.2667Z" fill="#00A15C"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2_28">
                                    <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
            </div>
        </li>
        `
}