import React, { useState } from "react"
import {Text,Vibration,TextInput, View, TouchableOpacity} from 'react-native'
import ResultImc from './ResultImc/index'
import styles from './style'

export default function Form(){


    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura") 
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    //Uso de APIS
    const [errorMessage, setErrorMessage] = useState(null)

    function calcularImc(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    
    //Uso de APIS
    function verificaoImc(){
        if(imc==null){
            Vibration.vibrate();
            setErrorMessage("campo obrigatorio")
            
        }

    }


    function ValidacaoImc(){
        if(weight != null && height != null){
            calcularImc()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu Imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
            verificaoImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
           
        }
            
        
    

    return(
        <View style = {styles.formContext}>
            <View style= {styles.form}>
                <Text style = {styles.formLabe}>Altura</Text>
                <Text style = {styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                  style = {styles.input}
                  onChangeText={setHeight}
                  value={height}
                  placeholder="Ex. 1.75"
                  keyboardType="numeric"
                />
                
                <Text style = {styles.formLabe}>Peso</Text>
                <Text style = {styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                     style = {styles.input}
                     onChangeText={setWeight}
                     value={weight}
                     placeholder="Ex. 50.88"
                     keyboardType="numeric"
                />

                <TouchableOpacity
                    onPress= {() =>{
                        ValidacaoImc()
                    }}
                    style = {styles.buttonCalculater}
               >
                <Text style = {styles.textButtonCalculater}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
        </View>
    )
}