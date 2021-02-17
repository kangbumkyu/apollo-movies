import { useParams } from "react-router-dom";
import { gql, useQuery } from '@apollo/client'

const GET_MOVIE = gql`
query getMovie($id: Int!) {
    movie(id: $id) {
        id
        title
        rating
        medium_cover_image
        description_intro
    }
    suggestions(id: $id) {
        id
        title
        medium_cover_image
    }
}
`;


export default () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, {
        variables: {id}
    });

    console.log(loading, data);
    if (loading) {
        return "loading...";
    }
    return (
        <>
            <div>{data?.movie?.title}</div>
            <div>
                {data?.suggestions?.map(sug => <span>{sug.title}</span>)}
            </div>
        </>
    )
   

}