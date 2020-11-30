import { Page } from '../Page/Page';
import { Card } from '../Card/Card';
import image1 from '../../resources/images/image-1.jpg';
import image2 from '../../resources/images/image-2.jpg';
import image3 from '../../resources/images/image-3.jpg';
import './App.scss';

// Предположительно данные полученные от сервера (не подлежат редактированию)
const USERS = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 23, imageUrl: image1 },
    { id: 2, firstName: 'Mike', lastName: 'Smith', age: 45, imageUrl: image2 },
    { id: 3, firstName: 'Bob', lastName: 'Brown', age: 56, imageUrl: image3 }
];

// Эти данные подлежат редактированию, они здесь как пример
const DEFAULT_TRANSLATIONS = [{ id: 1, text: 'en' }];

export const App = () => (
    <div className="app">
        <Page translations={DEFAULT_TRANSLATIONS}>
            <div className="app__cards">
                {USERS.map(u => (
                    <Card key={u.id} data={u} />
                ))}
            </div>
        </Page>
    </div>
);
