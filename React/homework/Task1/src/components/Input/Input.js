import './Input.scss';

export const Input = ({ helpPrompt, refName }) => {
    return (
        <div>
            <input
                className="inputArea"
                type="text"
                required
                placeholder={helpPrompt}
                ref={refName}
            ></input>
        </div>
    );
};
