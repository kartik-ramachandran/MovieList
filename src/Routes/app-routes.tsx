import { MovieDescription } from '../Components/movie-description';
import { MovieList } from '../Components/movie-list';

const AppRoutes = [
    {
        index: true,
        element: <MovieList />
    },
    {
        path: '/movie-description/:id',
        element: <MovieDescription />
    }
];

export default AppRoutes;
