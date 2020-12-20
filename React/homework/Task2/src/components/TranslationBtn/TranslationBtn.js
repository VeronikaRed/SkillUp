import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './TranslateBtn.scss';

export const TranslationBtn = ({
    onGetTranslation,
    changeFlag,
    translations
}) => {
    const { translation, setTranslation, handleUpdateInfo } = useContext(
        AppContext
    );
    let { id, text } = translation;

    const handleAddPage = event => {
        const shortText = onGetTranslation();
        if (translations.find(item => item.text === shortText)) {
            console.log('its language have ');
        } else {
            const data = { id: translations.length, text: shortText };
            translations.push(data);
            setTranslation(data);
            handleUpdateInfo();
        }

        changeFlag(false);
        event.stopPropagation();
    };
    return (
        <div>
            <button className="btn" type="button" onClick={handleAddPage}>
                Create new translation
            </button>
        </div>
    );
};
