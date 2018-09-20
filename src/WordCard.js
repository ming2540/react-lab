import React,{Component} from 'react';
import CharacterCard from './CharacterCard'
import _ from 'lodash'

const prepareStateForward = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
        return {
            word,
            chars,
            attempt: 1,
            guess: [],
            complete: false,
            lose : false
        }
}

export default class WordCard extends Component{
    
    constructor(props){
        super(props)
        this.state = prepareStateForward(this.props.value)
    }


    activateHandler = (c) => {

        let guess = [this.state.guess]+c

        if(this.state.attempt <= 5){
            this.setState({guess})
            if(guess.length === this.state.word.length){
                if(guess === this.state.word){
                    this.setState({guess: [], complete: true})
                }else{
                    this.setState({guess: [], attempt: this.state.attempt+1})
                    if(this.state.attempt === 5)
                        this.setState({lose:true})
                }
            }
        }


    }

    render() {
        return (
            <div className="App">
            { 
                Array.from(this.state.chars).map( 
                    (c,i)=> <CharacterCard value = {c} key = {i} attempt={this.state.attempt} activateHandler={this.activateHandler}/> 
                )
            }
            
            <p>Your attempt : {this.state.attempt}</p>
            <p>attempt left : {5- this.state.attempt}</p>
            
            <h1>{this.state.lose? "You Lose" : ""}</h1>
            <h1>{this.state.complete? "You Win" : ""}</h1>
            
            </div>
        )
    }
}