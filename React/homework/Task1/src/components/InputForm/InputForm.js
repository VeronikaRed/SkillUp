import { Component, createRef } from 'react';
import { Input } from '../Input/Input';
import { ErCard } from '../ErrorCard/ErrorCard';
import './InputForm.scss';

export class InputForm extends Component {
    state = { showError: false };

    inputNameRef = createRef();
    inputLastNameRef = createRef();

    handleCheck() {
        if (
            this.inputNameRef.current.value &&
            this.inputLastNameRef.current.value
        ) {
            this.props.myMethod(
                this.inputNameRef.current.value,
                this.inputLastNameRef.current.value
            );
            this.setState({ showError: false });
        } else {
            this.setState({ showError: true });
        }
    }

    render() {
        const { showError } = this.state;
        return (
            <div>
                <form id="InForm">
                    <Input
                        helpPrompt="First name"
                        refName={this.inputNameRef}
                    />
                    <Input
                        helpPrompt="Last name"
                        refName={this.inputLastNameRef}
                    />
                    <button
                        className="addCardBtn"
                        type="button"
                        onClick={() => this.handleCheck()}
                    >
                        add
                    </button>
                </form>
                {showError && <ErCard />}
            </div>
        );
    }
}
