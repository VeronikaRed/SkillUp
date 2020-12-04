import { Details } from '../Details/Details';
import './Card.scss';

export const Card = ({ data, generalInfo }) => {
    const { firstName, lastName, age, imageUrl, userInfo } = data;
    const { nameUser, lastNameUser, ageUser, dataUser, moreBtn } = generalInfo;
    return (
        <div className="card">
            <div className="card__top">
                <div className="card__image-wrapper">
                    <img
                        onClick={event => event.stopPropagation()}
                        className="card__image"
                        src={imageUrl}
                        alt={`${firstName} ${lastName}`}
                    />
                </div>

                <div className="card__info">
                    <Details label={nameUser} value={firstName} />
                    <Details label={lastNameUser} value={lastName} />
                    <Details label={ageUser} value={age} />
                </div>
            </div>

            <div className="card__bottom">
                <span className="card__label">{dataUser}</span>

                <p className="card__text">{userInfo}</p>

                <a href="/" className="card__link">
                    {moreBtn}
                </a>
            </div>
        </div>
    );
};
