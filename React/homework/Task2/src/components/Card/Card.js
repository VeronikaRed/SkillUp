import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Details } from '../Details/Details';
import './Card.scss';

const MAIN_INFORMATION = [
    {
        nameUser: 'First name',
        lastNameUser: 'Last name',
        ageUser: 'Age',
        dataUser: 'About myself:',
        moreBtn: 'Read more'
    }
];

export const Card = ({ data }) => {
    const { firstName, lastName, age, imageUrl, userInfo } = data;
    const { translation } = useContext(AppContext);
    const {
        nameUser,
        lastNameUser,
        ageUser,
        dataUser,
        moreBtn
    } = MAIN_INFORMATION[translation.id];
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
