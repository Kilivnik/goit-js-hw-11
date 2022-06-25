import axios from 'axios';
export default class PhotoApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchPhotos() {
    const options = {
      key: '28248023-dbaca864bf44e8898997f45b7',
      q: '',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: this.page,
      per_page: 40,
    };

    const BASE_URL = 'https://pixabay.com/api/';

    const url = `${BASE_URL}?key=${options.key}&q=${this.searchQuery}&image_type=${options.image_type}&orientation=${options.orientation}&safesearch=${options.safesearch}&page=${this.page}&per_page=${options.per_page}`;
    console.log(url);
    return axios.get(url, options).then(data => {
      console.log(data);
      this.page += 1;
      console.log(data);
      return data.data;
    });
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
