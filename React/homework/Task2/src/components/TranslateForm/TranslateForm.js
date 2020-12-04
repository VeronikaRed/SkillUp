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
    return (
        <div>
            <button className="btn" type="button">
                Create new translation
            </button>
        </div>
    );
};
