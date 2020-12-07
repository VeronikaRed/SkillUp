import { useState, createContext } from 'react';
import { Page } from '../Page/Page';
import { Card } from '../Card/Card';
import image1 from '../../resources/images/image-1.jpg';
import image2 from '../../resources/images/image-2.jpg';
import image3 from '../../resources/images/image-3.jpg';
import './App.scss';

const MAIN_INFORMATION = [
    {
        btn: 'Add new translation',
        headText: 'User profiles',
        text: 'Here you can overview the user profiles',
        nameUser: 'First name',
        lastNameUser: 'Last name',
        ageUser: 'Age',
        dataUser: 'About myself:',
        moreBtn: 'Read more'
    }
];
const HEADER_INFORMATION = [
    {
        btn: 'Add new translation',
        headText: 'User profiles',
        text: 'Here you can overview the user profiles'
    }
];
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
const LINKS = [
    [
        { id: 1, url: '/', text: 'Home' },
        { id: 2, url: '/office', text: 'Office' },
        { id: 3, url: '/admin', text: 'Admin Panel' }
    ]
];

export const AppContext = createContext(() => {});

export const App = () => {
    const [translation, setTranslation] = useState(0);
    const [main, setMain] = useState(MAIN_INFORMATION);
    const [header, setHeader] = useState(HEADER_INFORMATION);
    const [users, setUsers] = useState(USERS);
    const [links, setLinks] = useState(LINKS);

    return (
        <AppContext.Provider
            value={{
                translation,
                setTranslation,
                main,
                setMain,
                header,
                setHeader,
                users,
                setUsers,
                links,
                setLinks
            }}
        >
            <div className="app">
                <Page>
                    <div className="app__cards">
                        {users[translation].map(u => (
                            <Card key={u.id} data={u} />
                        ))}
                    </div>
                </Page>
            </div>
        </AppContext.Provider>
    );
};
