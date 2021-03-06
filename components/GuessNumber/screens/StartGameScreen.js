import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from '../Card';
import Input from '../Input';
import Colors from '../constants/colors';



const StartGame = ()=> {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();



    const numberInputHandler = (inputText) => {
        
        setEnteredValue(inputText.replace(/[^0-9]/g), '');
    }

    const resetInputHandler = ()=> {
            setEnteredValue('');
            setConfirmed(false);
    }
    const confirmInputHandler = ()=>{
        const chosenNumber = parseInt(enteredValue);
        if(chosenNumber === 'Nan' || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 to 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return 
        }
            setConfirmed(true);
            setSelectedNumber( chosenNumber);
            setEnteredValue('');  
    }
    let confirmedOutput;
    if(confirmed){
        confirmedOutput = <Text>Choosen Number: {selectedNumber} </Text>
    }
    console.log("Entered Value:", enteredValue)
    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} 
                        blurOnSubmit autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}   
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={resetInputHandler} color={Colors.primary} title="Reset"  />
                    </View>
                    <View style={styles.button}>
                    <Button onPress={confirmInputHandler} color={Colors.secondary} title="Confirm"  />
                    </View>
                </View>

            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10, 
        alignItems: 'center',
        justifyContent: 'flex-start'
    }, 
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        // shadowColor: 'black',
        // shadowOffset: {width: 0, height: 2}, 
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // elevation: 8,
        // backgroundColor: 'white',
        // //borderBottomLeftRadius: 18 // you can also target individual corners like this
        // borderRadius: 10,
        // padding: 20
       
        
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%', 
        justifyContent: 'space-between',
    }, 
    button: {
        width: 100
    }, 
    input: {
        width: 50,
        textAlign: 'center',
    }

})