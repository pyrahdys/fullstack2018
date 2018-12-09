import React from 'react';
import axios from 'axios'
import Person from './components/Person'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('did mount')
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                console.log('promise fulfilled')
                this.setState({persons: response.data})
            })
    }

    addName = (event) => {
        event.preventDefault()
        
        for (let i = 0; i < this.state.persons.length; i++) {
            if (this.state.persons[i].name === this.state.newName) {
                alert("Puhelinluettelossa on jo nimi " + this.state.persons[i].name)
                return
            }
        }

        const personObject = {
            name: this.state.newName,
            number: this.state.newNumber
        }
        const pers = this.state.persons.concat(personObject)

        this.setState({
            persons: pers,
            newName: ''
        })
    }

    handleNameChange = (event) => {
        this.setState({newName: event.target.value})
        console.log(this.state.newName)
    }

    handleNumberChange = (event) => {
        this.setState({newNumber: event.target.value})
        console.log(this.state.newNumber)
    }

    render() {
        const yhteystiedot = this.state.persons.map(person => <Person key={person.name} person={person}/>)
        
        console.log('render')

        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form>
                    <div>
                        nimi: <input 
                        value={this.stateNewName}
                        onChange={this.handleNameChange}
                        />
                    </div>
                    <div>
                        numero: <input 
                        value={this.stateNewNumber}
                        onChange={this.handleNumberChange}
                        />
                    </div>
                    <div>
                        <button type="submit" onClick={this.addName}>lisää</button>
                    </div>
                    <div>
                        debug: {this.state.newName}
                    </div>
                </form>
                <h2>Numerot</h2>
                <div>
                    <table>
                        <tbody>
                            {yhteystiedot}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default App