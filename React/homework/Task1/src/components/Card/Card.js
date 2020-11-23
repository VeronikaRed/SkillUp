import { Component } from 'react';
import './Card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export class Card extends Component {
    state = {
        showNumber: true
    };

    toggleSecretNumber(showNumber) {
        this.setState({ showNumber: !showNumber });
    }
    render() {
        const { name, lastName, secretNumber } = this.props.data;
        const { showNumber } = this.state;
        return (
            <div className="card">
                <div>Order number: #{this.props.index + 1}</div>
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
                        onClick={() =>
                            this.props.removeMethod(this.props.index)
                        }
                        className="deleteBtn"
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}
