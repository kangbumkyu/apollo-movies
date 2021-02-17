import { gql, useQuery } from '@apollo/client'
import Movie from '../components/Movie';

const GET_MOVIES = gql`
{
    movies {
        id
        medium_cover_image
    }
}
`

export default () => {
    const { data, loading, error } = useQuery(GET_MOVIES);
    console.log(loading, data);
    if (loading) {
        return "loading...";
    }
    if (data && data.movies) {
        return data.movies.map(movie => <Movie key={movie.id} id={movie.id} />);
    }
};