import { useState } from 'react'

function App() {
  const [food, setFood] = useState(['Pasta','Pizza','Burger','Idli','Vadapav']);
function AddFoodItem(event){
  const newItem=document.getElementById('foodItem').value
  document.getElementById('foodItem').value="";
  // setFood([...food,newItem]);
  setFood(f=>[...f,newItem]);
}
function RemoveFoodItem(index){
  setFood(food.filter((_,i)=>i!==index));
}
  return (
    <>
      <div>
      <h2>Food List</h2>
      <ul>
        {food.map((item, index) => (
          <li key={index} onClick={()=>RemoveFoodItem(index)}>{item}</li>
        ))}
      </ul>
      <input id='foodItem'></input>
      <button onClick={AddFoodItem}>Add Item</button>
        </div>
      
    </>
  )
}

export default App
