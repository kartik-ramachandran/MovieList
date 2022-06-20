const axios = require('axios');

export class AppService {

    private bearerToken: string = "Wookie2021";

    public async getMovies(): Promise<any> {
        const response = await axios.get('https://wookie.codesubmit.io/movies', { headers: {"Authorization" : `Bearer ${this.bearerToken}`} });
        return response.data;
    }

    public async getMovie(filter: string) {
        if (filter == null || filter == '') {
            return null;
        }
        const response = await axios.get(`https://wookie.codesubmit.io/movies?q=${filter}`, { headers: {"Authorization" : `Bearer ${this.bearerToken}`} });
        return response.data;
    }

}