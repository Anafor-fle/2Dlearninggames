import React, { Component } from 'react';
import './App.css';
import Receipe from './components/receipe';
import Counters from './components/counters'
import Footer from './components/footer';
import Apple from './images/apple.svg';
import Apricot from './images/apricot.svg';
import Banana from './images/banana.svg';
import Cherry from './images/cherry.svg';
import Kiwi from './images/kiwi.svg';
import Orange from './images/orange.svg';
import Pear from './images/pear.svg';
import Raspberry from './images/raspberry.svg';
import Strawberry from './images/strawberry.svg';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        counters: [
            {id:1, value:0, image:Apple},
            {id:2, value:0, image:Apricot},
            {id:3, value:0, image:Banana},
            {id:4, value:0, image:Cherry},
            {id:5, value:0, image:Kiwi},
            {id:6, value:0, image:Orange},
            {id:7, value:0, image:Pear},
            {id:8, value:0, image:Raspberry},
            {id:9, value:0, image:Strawberry}
        ],
        receipes: [
          {title:"salade de fruits d'été",
          ingredients:
           [ {name:'deux pommes', id:1, value:2},
            {name:'quinze fraises', id:9, value:15},
            {name:'cinq abricots', id:2, value:5},
            {name:'douze framboises', id:8, value:12},
            {name:'trois bananes', id:3, value:3},]
        
          },
          {title:"salade de fruits d'hiver",
          ingredients:
           [ {name:'une pomme', id:1, value:1},
            {name:'treize petites oranges', id:6, value:13},
            {name:'un kiwi', id:5, value:1},
            {name:'quatre poires', id:7, value:4},
            {name:'trois bananes', id:3, value:3},]
        
          },
          {title:"salade de fruits rouges",
          ingredients:
           [ {name:'quatorze cerises', id:4, value:14},
            {name:'seize framboises', id:8, value:16},
            {name:'quinze fraises', id:9, value:15},
            {name:'six bananes', id:3, value:6},
            {name:'cinq pommes', id:1, value:5},]
        
          }
        ],
      activeReceipe: null,
      matchingCounters: [],
      nullCounters: [],
      showWinModal: false,
    }

  }

// functions to select a random receipe & display during mounting phase
  selectRandomReceipe = () => {
    const receipeOptions = this.state.receipes
    const randomIndex = Math.floor(Math.random() * receipeOptions.length);
    this.setState({
      receipes: [...receipeOptions].splice(randomIndex, 1),
      activeReceipe: receipeOptions[randomIndex]
    });
 }

 componentWillMount() {
  this.selectRandomReceipe();
}
     
// functions to update the value of counters by the user
  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
  };

  handleDecrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({counters});
  };

  handleReset = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value = 0;
      this.setState({counters});
  };


//functions to match user's value & receipe value, determining if game is won or errors
 
//sorting out counters depending if they are part of receipe or not
 sortingCounters = async () => {
    var receipeIngredients = [...this.state.activeReceipe.ingredients];
    var countersIngredients = [...this.state.counters];
    var matchingCounters = [];
    var nullCounters = [];
  for (let i = 0; i < countersIngredients.length; i++) {
    let seenReceipeIngredients = false;
    for (let j = 0; j < receipeIngredients.length; j++) {
      if (countersIngredients[i].id === receipeIngredients[j].id) {
         seenReceipeIngredients = true;
         break; //avoid going through all ingredients when the ingredient is seen
      } 
    }
    if (seenReceipeIngredients) {
      matchingCounters.push(countersIngredients[i])
       
    } else {
      nullCounters.push(countersIngredients[i])
    }
  }
   this.setState({matchingCounters} , function() {console.log(this.state.matchingCounters)});
   this.setState({nullCounters}, function() {console.log(this.state.nullCounters)});
}

    //checking values of matchingCounters
  checkMatchingCounters = () => {
    const receipeIngredients = [...this.state.activeReceipe.ingredients];
    for (let i = 0; i < receipeIngredients.length; i++) { // loop through ingredients of receipeIngredients
    let matchingIngredient = this.state.matchingCounters.find(element => element.id === receipeIngredients[i].id && element.value === receipeIngredients[i].value);
   if (matchingIngredient === undefined) {
     return false;
    }
  }
  return true; 
} 


    //checking values of nullCounters
  checkNullCounters = () => {
    for (let i = 0; i < this.state.nullCounters.length; i++) {
      if (this.state.nullCounters[i].value !== 0) {

        return false;
      }
    } 
    return true;
  }
    
  checkAnswer = async (footer) => { //using async to make sure that Matching counters & nullCounters are updated before triggering the rest
    await this.sortingCounters(); 
      if (this.checkMatchingCounters()) {
      if(this.checkNullCounters()){
        console.log("c'est gagné")
        return}
    }
     
    //display loose modal
    console.log("c'est pas gagné")
    return 
      
  
  }
 


  render() { 
    return (
      <React.Fragment>

            <div className="row align-items-center">
                <div className="col-{breakpoint}-auto m-5 ">
                <Receipe 
                  activeReceipe={this.state.activeReceipe}
                />
                </div>
                <div className="col-{breakpoint}-auto m-5 border border-secondary">
                <Counters 
                  counters={this.state.counters}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                />
                </div>
              </div>
     <div className="row ">
      <div className="col-lg-5 m-5">
        <Footer 
          onCheck={this.checkAnswer}
        /> 
        </div>
        </div>
      </React.Fragment>
    );
  }




}
 
export default App;


