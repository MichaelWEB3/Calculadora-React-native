import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

import styled from 'styled-components/native'




const Container = styled.View`
 background:black;
  flex:1;
  justify-content:center;
  align-items: center;
`
const Linhas = styled.View`
  flex-direction: row;
  width:400px;
  height:100px;
  background:black;
 
  
`
const Button = styled.Text`
  width: 75px;
  height: 75px;
  background-color:  ${(props) => props.cor};
  border-radius: 50px;
  text-align: center;
  justify-content: center;
  color: ${(props) => props.color};
  flex-grow:${(props) => props.row};
 margin: 12px;
`
const Button0 = styled.Text`
  width: 50px;
  height: 70px;
  background-color:  ${(props) => props.cor};
  border-radius: 50px;
  text-align: center;
  justify-content: center;
  color: ${(props) => props.color};
  flex-grow:${(props) => props.row};
  margin-top: 20px;
  margin-left: 20px;
`


const Texto = styled.Text`

font-size: 50px;
margin: auto;
`

const TextoR = styled.Text`
    color: #FFF;
    font-size: 50px;
    position: relative;
    left: 150px;
`
const LinhasResp = styled.View`
align-items: flex-end;
justify-content: flex-end;
`
export default props => {
  const [value, setValue] = useState("")
  const [operador, setOperador] = useState("")
  const [value2, setValue2] = useState("")
  const [calcular, setCalcular] = useState(false)
  const [total, setTotal] = useState("")
  function igual(value, operador, value2) {

    const valor1 = parseInt(value)
    const valor2 = parseInt(value2)
    const operadoor = operador
    setValue("")
    setValue2("")
    setOperador("")
    if (operadoor == "+") {
      setTotal(valor1 + valor2)
    } else if (operadoor == "-") {
      setTotal(valor1 - valor2)
    } else if (operadoor == "x") {
      setTotal(valor1 * valor2)
    } else if (operadoor == "/") {
      setTotal(valor1/valor2)
    }
    setCalcular(true)

  }
  function mostrar(calc) {

    if (calcular) {
      return calc
    } else {
      return operador ? value : value2
    }

  }

  function zerar(){
    setValue("")
    setOperador("")
    setValue2("")
    setCalcular(false)
    setTotal("")
  }

  return (
    <Container>

      <LinhasResp ><TextoR>{mostrar(total)}</TextoR></LinhasResp>
      <Linhas>
        <Button row={0} cor={'#A9A9A9	'} color={'black'} onPress={() => {zerar()}}><Texto>C</Texto></Button>
        <Button row={0} cor={'#A9A9A9	'} color={'black'}><Texto>+/-</Texto></Button>
        <Button row={0} cor={'#A9A9A9	'} color={'black'}><Texto>%</Texto></Button>
        <Button row={0} cor={'#D2691E'} color={'#FFF'}  onPress={() => { setOperador("/") }}><Texto>/</Texto></Button>

      </Linhas>


      <Linhas>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 7) } : () => { setValue2(value2 + 7) }} ><Texto>7</Texto></Button>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 8) } : () => { setValue2(value2 + 8) }}><Texto>8</Texto></Button>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 9) } : () => { setValue2(value2 + 9) }} ><Texto>9</Texto></Button>
        <Button row={0} cor={'#D2691E'} color={'#FFF'} onPress={() => { setOperador("x") }}><Texto>x</Texto></Button>

      </Linhas>
      <Linhas>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 4) } : () => { setValue2(value2 + 4) }}><Texto>4</Texto></Button>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 5) } : () => { setValue2(value2 + 5) }}><Texto>5</Texto></Button>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 6) } : () => { setValue2(value2 + 6) }}><Texto>6</Texto></Button>
        <Button row={0} cor={'#D2691E'} color={'#FFF'} onPress={() => { setOperador("-") }}><Texto>-</Texto></Button>

      </Linhas>
      <Linhas>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 1) } : () => { setValue2(value2 + 1) }}><Texto>1</Texto></Button>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 2) } : () => { setValue2(value2 + 2) }}><Texto>2</Texto></Button>
        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 3) } : () => { setValue2(value2 + 3) }}><Texto>3</Texto></Button>
        <Button row={0} cor={'#D2691E'} color={'#FFF'} onPress={() => { setOperador("+") }}><Texto>+</Texto></Button>

      </Linhas>
      <Linhas>
        <Button0 row={1} cor={'#1C1C1C	'} color={'#FFF'} onPress={operador ? () => { setValue(value + 0) } : () => { setValue2(value2 + 0) }} ><Texto>0</Texto></Button0>

        <Button row={0} cor={'#1C1C1C	'} color={'#FFF'} onPress={() => { setValue(value + ".") }}><Texto>,</Texto></Button>
        <Button row={0} cor={'#D2691E'} color={'#FFF'} onPress={() => { igual(value, operador, value2) }}><Texto>=</Texto></Button>

      </Linhas>

    </Container>
  )
}