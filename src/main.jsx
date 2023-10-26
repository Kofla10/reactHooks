import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HooksApp } from './HooksApp'
import CounterApp from './01-useState/CounterApp'
import { CounterWithHooks } from './01-useState/CounterWithHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustonHook } from './02-useEffect/FormWithCustonHook'
import MultipleCustomHooks from './03-examples/MultipleCustomHooks'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    {/* <CounterApp/> */}
    {/* <CounterWithHooks/> */}
    {/* <FormWithCustonHook/> */}
    <MultipleCustomHooks/>
    </>
  // </React.StrictMode>,
)
