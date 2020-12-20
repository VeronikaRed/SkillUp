import PT from 'prop-types';

import { StyledWrapper, StyledCard } from './styles';
import { Link } from '../../components';
const { REACT_APP_STORAGE_URL } = process.env;

export const HomePage = ({ movies }) => (
    <StyledWrapper>
        {movies.map(({ id, original_title, poster_path }) => {
            const imageUrl = REACT_APP_STORAGE_URL + poster_path;

            return (
                <StyledCard key={id} $imageUrl={imageUrl}>
                    <Link to={`/movie/${id}`}>{original_title}</Link>
                </StyledCard>
            );
        })}
    </StyledWrapper>
);

HomePage.propTypes = {
    movies: PT.arrayOf(
        PT.shape({
            id: PT.number.isRequired,
            original_title: PT.string.isRequired,
            poster_path: PT.string
        })
    ).isRequired
};
