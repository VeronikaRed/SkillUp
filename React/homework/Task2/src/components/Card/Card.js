import { Details } from '../Details/Details';
import './Card.scss';

export const Card = ({ data: { firstName, lastName, age, imageUrl } }) => (
    <div className="card">
        <div className="card__top">
            <div className="card__image-wrapper">
                <img
                    className="card__image"
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                />
            </div>

            <div className="card__info">
                <Details label="First name" value={firstName} />
                <Details label="Last name" value={lastName} />
                <Details label="Age" value={age} />
            </div>
        </div>

        <div className="card__bottom">
            <span className="card__label">About myself:</span>

            <p className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis ullam aperiam animi consectetur ad debitis ea
                dolorem. Voluptates harum quo veritatis ab officia! Facilis
                tempora mollitia ducimus blanditiis nostrum porro deserunt vero
                iusto necessitatibus nobis. Minima illo delectus fugiat, quam
                corrupti quibusdam nobis pariatur reprehenderit quidem magnam
                temporibus. Odio, beatae?
            </p>

            <a href="/" className="card__link">
                Read more
            </a>
        </div>
    </div>
);
