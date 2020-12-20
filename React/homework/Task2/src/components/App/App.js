import { useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Page } from '../Page/Page';
import { Card } from '../Card/Card';
import image1 from '../../resources/images/image-1.jpg';
import image2 from '../../resources/images/image-2.jpg';
import image3 from '../../resources/images/image-3.jpg';
import './App.scss';

const USERS = [
    [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            age: 23,
            imageUrl: image1,
            userInfo:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam animi consectetur ad debitis ea dolorem. Voluptates harum quo veritatis ab officia! Facilis tempora mollitia ducimus blanditiis nostrum porro deserunt vero iusto necessitatibus nobis. Minima illo delectus fugiat, quam corrupti quibusdam nobis pariatur reprehenderit quidem magnam temporibus. Odio, beatae?'
        },
        {
            id: 2,
            firstName: 'Mike',
            lastName: 'Smith',
            age: 45,
            imageUrl: image2,
            userInfo:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam animi consectetur ad debitis ea dolorem. Voluptates harum quo veritatis ab officia! Facilis tempora mollitia ducimus blanditiis nostrum porro deserunt vero iusto necessitatibus nobis. Minima illo delectus fugiat, quam corrupti quibusdam nobis pariatur reprehenderit quidem magnam temporibus. Odio, beatae?'
        },
        {
            id: 3,
            firstName: 'Bob',
            lastName: 'Brown',
            age: 56,
            imageUrl: image3,
            userInfo:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam aperiam animi consectetur ad debitis ea dolorem. Voluptates harum quo veritatis ab officia! Facilis tempora mollitia ducimus blanditiis nostrum porro deserunt vero iusto necessitatibus nobis. Minima illo delectus fugiat, quam corrupti quibusdam nobis pariatur reprehenderit quidem magnam temporibus. Odio, beatae?'
        }
    ]
];

export const App = () => {
    const [translation, setTranslation] = useState({
        id: 0,
        text: 'en'
    });

    // const handleUpdateInfo = () => {
    //     array.push(obj);
    // };

    return (
        <AppContext.Provider
            value={{
                translation,
                setTranslation
                // handleUpdateInfo
            }}
        >
            <div className="app">
                <Page>
                    <div className="app__cards">
                        {USERS[translation.id].map(u => (
                            <Card key={u.id} data={u} />
                        ))}
                    </div>
                </Page>
            </div>
        </AppContext.Provider>
    );
};
