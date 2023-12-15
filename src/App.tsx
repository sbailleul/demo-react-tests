import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './state/store'
import { setContent, uppercaseTicket } from './state/ticket.slice'

function App() {
  const content = useAppSelector(state=> state.tickets.content)
  const dispatch = useAppDispatch();
  return (
    <div className='root'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input type='text' value={content} onChange={event=> dispatch( setContent(event.target.value))}></input>
        <button onClick={() => dispatch(uppercaseTicket())} >Uppercase</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
