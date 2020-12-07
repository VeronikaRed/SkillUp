import {useContext} from 'react';
import { AppContext } from '../App/App';
import './TranslateForm.scss';

export const TranslateForm = () => {
    return (
        <div className="traslateForm">
            <label>
                <div>
                    Enter short name of language{' '}
                    <input placeholder="UA"></input>
                </div>
            </label>
            <p>Choose the place you want to translate</p>
        </div>
    );
};

export const CreateTranslateBtn = () => {
    const {page, setPage} = useContext(AppContext);
    const handleAddPage = () => {
        setPage(page.push(page)) 
        const
    }
    return (
        <div>
            <button className="btn" type="button" onClick="handleAddPage">
                Create new translation
            </button>
        </div>
    );
};
