import { Component } from 'react';
import { InputForm } from './components/InputForm/InputForm';
import { Card } from './components/Card/Card';
import { random } from './utils/random';
import './App.scss';

let CARDS = [];

export class App extends Component {
    state = { customers: [], flag: '' };

    updateData = (name, lastName) => {
        CARDS = CARDS.concat({
            name: name,
            lastName: lastName,
            secretNumber: random(1000000000, 9999999999)
        });
        this.setState({ customers: CARDS });
    };

    handleRemoveCard = index => {
        CARDS.splice(index, 1);
        this.setState({ customers: CARDS });
    };

    render() {
        const { customers } = this.state;
        return (
            <div className="wrapper">
                <div className="inputCard">
                    <InputForm updateData={this.updateData}></InputForm>
                </div>
                <div className="cards">
                    {customers.map((person, i) => {
                        return (
                            <div key={i}>
                                <Card
                                    name={person.name}
                                    lastName={person.lastName}
                                    secretNumber={person.secretNumber}
                                    index={i}
                                    removeMethod={this.handleRemoveCard}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
