import { Component } from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import PT from 'prop-types';

export class Card extends Component {
    state = {
        showNumber: true
    };

    toggleSecretNumber(showNumber) {
        this.setState({ showNumber: !showNumber });
    }
    render() {
        const {
            name,
            lastName,
            secretNumber,
            index,
            removeMethod
        } = this.props;
        const { showNumber } = this.state;
        return (
            <div className="card">
                <div>Order number: #{index + 1}</div>
                <div>Name: {name}</div>
                <div>Last name: {lastName}</div>
                <div>
                    Secret number: {showNumber ? '********** ' : secretNumber}
                    <FontAwesomeIcon
                        icon={faEye}
                        className="eye"
                        title={
                            showNumber
                                ? 'show secret number'
                                : 'hide secret number'
                        }
                        onClick={() => this.toggleSecretNumber(showNumber)}
                    />
                </div>

                <div>
                    <button
                        type="button"
                        onClick={() => removeMethod(index)}
                        className="deleteBtn"
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    name: PT.oneOfType([PT.string, PT.number]),
    lastName: PT.oneOfType([PT.string, PT.number]),
    secretNumber: PT.number,
    index: PT.number,
    removeMethod: PT.func
};
