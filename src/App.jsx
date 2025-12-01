import { useState } from 'react'

import './main.css'
import './components/DataInput'
import DataInput from './components/DataInput'
import CalculateButton from './components/CalculateButton'
import ClassificationTable from './components/ClassificationTable/ClassificationTable'
import ValuesTable from './components/ValuesTable'

function App() {
  const [heightValue, setHeightValue] = useState("")
  const [weightValue, setWeightValue] = useState("")
  const [imcValue, setImcValue] = useState(0)
  const [activeID, setActiveID] = useState(0)
  const [valuesTableDisplay, setValuesTableDisplay] = useState("hidden")
  const heightValueHandler = (e) =>{
    setHeightValue(e.target.value)
    setValuesTableDisplay("hidden")

  }
  const weightValueHandler = (e) =>{
    setWeightValue(e.target.value)
    setValuesTableDisplay("hidden")
  }
  const calculateIMC = () =>{
    const height = parseFloat(heightValue)
    const weight = parseFloat(weightValue)
    if (isNaN(height) || isNaN(weight) || height === 0) {
      alert("Por favor, insira valores válidos para altura e peso")
      return null
    }
    const imc = weight / (height * height)
    setImcValue(imc)
    console.log("IMC calculado:", imc)
    console.log(activeID)
    return imc
  }
  const imcHandler = (imc) =>{
    if(imc < 17){
      setActiveID(1)
    } else if(imc >= 17 && imc < 18.49){
      setActiveID(2)
    } else if(imc >= 18.5 && imc < 24.99){
      setActiveID(3)
    } else if(imc >= 25 && imc < 29.99){
      setActiveID(4)
    } else if(imc >= 30 && imc < 34.99){
      setActiveID(5)
    } else if(imc >= 35 && imc < 39.99){
      setActiveID(6)
    } else if(imc >= 40){
      setActiveID(7)
    }
  }
  const changeTable = () =>{
    const imc = calculateIMC()
    if (imc !== null) {
      imcHandler(imc)
    }
    setValuesTableDisplay("")
  }
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <div className="container w-full lg:w-3/6  bg-[#2a2a2a] pt-2 lg:px-38 p-6 flex flex-col items-center h-full">
          <h1 className='text-gray-50 text-lg mb-4'>Calculadora imc</h1>
          <div className="container__data w-full">
            <DataInput 
              value={heightValue}
              holder="M"
              onChange={heightValueHandler}
              type="number"
              label="Altura"
            />
            <DataInput
              value={weightValue}
              holder="KG"
              onChange={weightValueHandler}
              type="number"
              label="Peso"
            />
            <CalculateButton
              onClick={changeTable}
            />
            <p className='text-center text-gray-200 my-3'>Calcule agora o seu IMC!</p>
            <ValuesTable
              valuesTableDisplay={valuesTableDisplay}
              height={heightValue}
              weight={weightValue}
              imc={imcValue}
            />
            <ClassificationTable
              activeID={activeID}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
