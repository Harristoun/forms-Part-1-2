import {useState} from 'react'
function App(props) {
  const [todos, setTodos] = useState([
    {
      text: 'hello',
      done: true
    },
    {
      text: 'hello grozny',
      done: false
    },
    {
      text: 'hello universe',
      done: false
    },
  ])
  const [text, setText] = useState('')
 

  const handleClick = () => {
    alert(text)

  }
  const handleChacnge = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type='text' value={text} onChange={handleChacnge}/>
      <input type= 'checkbox' />
      <div> 
{todos.map(item =>{
  return(
    <div>
      <input type='checkbox' />
      {item.text}
      </div>
  )
})}
      </div>
      <button onClick={handleClick}>Нажми</button>
    </div>
  );
}

export default App;