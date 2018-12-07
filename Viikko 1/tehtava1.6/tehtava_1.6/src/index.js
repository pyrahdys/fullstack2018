import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyvä: 0,
            neutraali: 0,
            huono: 0,
        }
    }

    klikHyvä = () => {
        this.setState({hyvä: this.state.hyvä + 1})
    }

    klikNeutraali = () => {
        this.setState({neutraali: this.state.neutraali + 1})
    }

    klikHuono = () => {
        this.setState({huono: this.state.huono + 1})
    }

    render() {
        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                    <Button 
                        handleClick={this.klikHyvä}
                        text="hyvä"
                    />
                    <Button 
                        handleClick={this.klikNeutraali}
                        text="neutraali"
                    />
                    <Button 
                        handleClick={this.klikHuono}
                        text="huono"
                    />
                </div>
                <div>
                <h1>statistiikka</h1>
                    <Statistics
                        hyvä={this.state.hyvä}
                        neutraali={this.state.neutraali}
                        huono={this.state.huono}
                    />
                </div>
            </div>
        )
    }
}

const Statistics = ({ hyvä, neutraali, huono }) => {
    if (hyvä + neutraali + huono === 0) {
        return <p>ei yhtään palautetta annettu</p>
    }
    return (
        <div>
            <table>
                <tbody>
                <Statistic 
                    value={hyvä}
                    text="hyvä"
                />

                <Statistic 
                    value={neutraali}
                    text="neutraali"
                />

                <Statistic 
                    value={huono}
                    text="huono"
                />

                <Statistic 
                    value={keskiarvo({hyvä}, {neutraali}, {huono})}
                    text="keskiarvo"
                />

                <Statistic 
                    value={positiivisia({hyvä}, {neutraali}, {huono})}
                    text="positiivisia"
                />

                </tbody>
            </table>


            
        </div>
    )
}

const keskiarvo = ({hyvä}, {neutraali}, {huono}) => {
    if (hyvä + neutraali + huono === 0) {
        return 0
    }
    
    return Math.round(((hyvä - huono) / (hyvä + neutraali + huono)) * 10) / 10
}

const positiivisia = ({hyvä}, {neutraali}, {huono}) => {
    if (hyvä + neutraali + huono === 0) {
        return 0 + " %"
    }

    return Math.round((hyvä / (hyvä + neutraali + huono)) * 1000) / 10 + " %"
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({value, text}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));