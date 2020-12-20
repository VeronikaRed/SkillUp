// import { useContext } from 'react';
// import { AppContext } from '../../context/AppContext';
import './TranslateForm.scss';

export const TranslateForm = ({ transRef }) => {
    return (
        <div className="traslateForm">
            <label>
                <div>
                    Enter short name of language{' '}
                    <input
                        placeholder="UA"
                        ref={transRef}
                        onClick={event => {
                            event.stopPropagation();
                        }}
                    ></input>
                </div>
            </label>
            <p>Choose the place you want to translate</p>
        </div>
    );
};
