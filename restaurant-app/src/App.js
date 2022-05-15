import React,{ Component } from 'react';
import './App.css';
import FoodItems from './components/FoodItem';
import Orderform from './components/OrderForm';
import DrinkItem from './components/DrinkItem'



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      food:[],
      drink:[],
      isLoaded:false
    }
  }
  async componentDidMount(){
    try{
      let response = await fetch('http://localhost:5000')
      let drinkResponse = await fetch('http://localhost:5000/drink')
      console.log(response);
      console.log(drinkResponse);
      let foodData = await response.json();
      let drinkData = await drinkResponse.json();
      console.log(foodData +" drink"+drinkData);
      this.setState({
        food:foodData[0],
        drink:drinkData[0],
        isLoaded:true
      })
    }catch(error){
      console.log(error);
    }
  }
  render(){
    return (
      <div className="App">
        <Orderform/>
        <hr/>
        <h1>Food Menu : </h1>
        {
          this.state.food.map((item)=>
              <FoodItems dishName={item.dishName} dishPrice={item.dishPrice} dishType={item.dishType}></FoodItems>
        )}
        <hr/>
        <h1>Drinks Menu : </h1>
        {
          this.state.drink.map((item)=>
              <DrinkItem drinkType={item.drinkType} drinkName={item.drinkName} drinkPrice={item.drinkPrice}/>
          )
        }
        
      </div>
    );
  }
  
}

export default App;

// const food = [
//       {
//         dishType: 'Veg',
//         dishName: 'Panner Tikka',
//         dishPrice: 'INR 200'
//       },
//       {
//         dishType: 'Veg',
//         dishName: 'Panner Tikka Masala',
//         dishPrice: 'INR 220'
//       },
//       {
//         dishType: 'Non-veg',
//         dishName: 'Chicken Curry',
//         dishPrice: 'INR 300'
//       },
//       {
//         dishType:'Veg',
//         dishName: 'Panner Bhurji',
//         dishPrice: 'INR 180'
//       },
//       {
//         dishType:'Non-veg',
//         dishName: 'Egg Bhurji',
//         dishPrice: 'INR 180'
//       },
//       {
//         dishType:'Veg',
//         dishName: 'Panner Masala',
//         dishPrice: 'INR 180'
//       }
// ]
// const drink = [
//   {
//     drinkName:'Mojito',
//     drinkPrice:'INR 100'
//   },
//   {
//     drinkName:'Cocktail',
//     drinkPrice:'INR 200'
//   },
//   {
//     drinkName:'Milshake',
//     drinkPrice:'INR 180'
//   },
// ]