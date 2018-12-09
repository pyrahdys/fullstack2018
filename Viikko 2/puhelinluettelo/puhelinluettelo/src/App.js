import React from 'react';
import Person from './components/Person'
import personservice from './services/persons'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            notification: null
        }
        console.log('constructor')
    }

    componentDidMount() {
        personservice
            .getAll()
            .then(response => {
                this.setState({persons: response})
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

        personservice
            .create(personObject)
            .then(newPerson => {
                this.setState({
                    persons: this.state.persons.concat(newPerson),
                    newPerson: '',
                    notification: `lisättiin ${personObject.name}`
                })
                setTimeout(() => {
                    this.setState({notification: null})
                }, 5000)
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

    removeNameOf = (name) => {
        return () => {
            if (!window.confirm("Poistetaanko " + name)) { 
                console.log("Ei poistettu")
                return
            }

            const personObject = this.state.persons.find(p => p.name === name)
            
            personservice
                .remove(personObject.id)
                .then(response => {
                    this.setState({
                        persons: this.state.persons.filter(p => p.name !== name),
                        notification: `poistettiin ${personObject.name}`
                    })
                    setTimeout(() => {
                        this.setState({notification: null})
                    }, 5000)
            })
        }
    }

    render() {
        return (
            <div>
                <Notification message={this.state.notification}/>
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
                </form>
                <h2>Numerot</h2>
                <div>
                    <table>
                        <tbody>
                        {this.state.persons.map(person => 
                            <Person 
                                key={person.name} 
                                person={person} 
                                removeName={this.removeNameOf(person.name)}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="notification">
        {message}
      </div>
    )
  }

export default App