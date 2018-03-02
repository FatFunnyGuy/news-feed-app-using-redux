import axios from 'axios';

export function loadNews(){
  return(dispatch) => {
    return axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7b81f9e45abc4b7080d24534c5428817')
            .then(response => {
              dispatch(takeNews(response.data.articles));
            })
  }
}

export function takeNews(news) {
  return {
    type: 'TAKE_NEWS',
    news: news
  }
}
