//1) tener a react en scope 
import React from 'react'

//2) Tener reactDom en el scope
import ReactDom from 'react-dom'

//3) Tener por lo menos un componente
import {App} from './App'


//4) lleva dos parametros a,b -> a lo que se quiere ver - b donde se va a ver
//Mostrar la aplicación en el Dom 
ReactDom.render(
    <App />, 
document.getElementById('root')
);