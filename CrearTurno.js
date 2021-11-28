import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, ScrollView, Button, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import {Picker} from '@react-native-picker/picker'; //PICKER
import DateTimePicker from '@react-native-community/datetimepicker';



export default function CrearTurnos( { navigation } ) {
  const [loaded] = useFonts({
    Rochester: require('./assets/fonts/Rochester-Regular.ttf'),
    Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf')
  });  
  
  //PICKER IMPORTADO
  const [selectedLanguage, setSelectedLanguage] = useState();
  //PICKER DATE
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  //(APP) 
  
  return (    
    <ImageBackground source={require("./assets/img/fondos/fondo-login.jpg")} style={styles.imagen}>
    
      <ScrollView style={styles.scrollView}>
      <View style={styles.base}> 
          <View>
        <Text style={styles.titulo}>Spa Sentirse Bien</Text>
      </View>
      <View style={styles.fondoForms}>

                  
        <Text style={styles.normalText}>Seleccione un Servicio</Text>       
        <Picker style={styles.inputLogin}
            selectedValue={selectedLanguage}            
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Masajes Anti-stress" value="1" />
            <Picker.Item label="Masajes Descontracturantes" value="2" />
            <Picker.Item label="Masajes con piedras calientes" value="3" />
            <Picker.Item label="Masajes Circulatorios" value="4" />
            <Picker.Item label="Lifting de pestaña" value="5" />
            <Picker.Item label="Depilación Facial" value="6" />
            <Picker.Item label="Belleza de manos y pies" value="7" />
            <Picker.Item label="Micro exfoliación facial con punta de diamante" value="8" />
            <Picker.Item label="Limpieza facial profunda + Hidratación" value="9" />
            <Picker.Item label="Crio frecuencia facial con efecto lifting" value="10" />
            <Picker.Item label="VelaSlim" value="11" />
            <Picker.Item label="DermoHealth" value="12" />
            <Picker.Item label="Crio frecuencia corporal con efecto lifting" value="13" />
            <Picker.Item label="Ultracavitación" value="14" />
        </Picker>


        <View>
            <View>
            <TouchableOpacity onPress={showDatepicker} 
          style={styles.botonLogin} >
              <Text style={styles.normalText}>Seleccione fecha del turno</Text>
              </TouchableOpacity> 
            </View>
            <View>
            <TouchableOpacity onPress={showTimepicker} 
          style={styles.botonLogin} >
              <Text style={styles.normalText}>Seleccione Hora del turno</Text>
              </TouchableOpacity>
                
            </View>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
            )}
        </View>


        
        <Text style={styles.normalText}>Nombre indicado en la tarjeta</Text>
        <TextInput style={styles.inputLogin} placeholder="Nombre como se indica en la tarjeta"/>
        <Text style={styles.normalText}>Número de la tarjeta</Text>
        <TextInput style={styles.inputLogin}  placeholder="Numero de Tarjeta"/>
        <Text style={styles.normalText}>Vencimiento de la tarjeta</Text>
        <TextInput style={styles.inputLogin}  placeholder="MM/AA"/>
        <Text style={styles.normalText}>Codigo de la tarjeta</Text>
        <TextInput style={styles.inputLogin}  placeholder="Código de tarjeta"/>
        <View style={styles.contenedorRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Turnos')}
          style={styles.botonLogin}>
            <Text style={styles.normalText}>Crear Turno</Text>
          </TouchableOpacity>   
        </View>
      </View>
      <StatusBar style="auto" />  
      </View>      
      </ScrollView>
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    picker:{
        minWidth:100,
        minHeight:100,
        backgroundColor:"#ffffff",
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {        
        marginHorizontal: 20,
      },
  imagen:{
    flex: 1,
    justifyContent: 'center',
  },
  base:{
    margin: 0,
    padding: 0,
    fontFamily: "Roboto",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  fondoInicial:{
  },
  titulo:{
    color: "#FA03E6",
    fontFamily: "Rochester",
    fontWeight: "400",
    fontSize: 60,
  },
  contenedorCentrado:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',  
  },
  ancho100:{
    width:"100%",
  },
  ancho80:{
    width:"80%",
  },
  fondoForms:{
    margin:70,
    width:"90%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',    
    borderRadius: 100,
    flex:1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:30
  },
  inputLogin:{
    height: 50,
    fontSize: 15,
    color: "black",
    borderWidth:1,
    borderRadius: 50,
    margin: 12,
    padding: 10,
    backgroundColor: "#ffffff",
    width:"80%",
  },
  contenedorRow:{    
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    padding:0,
    margin:0,
  },
  botonLogin:{
    margin: 10,
    backgroundColor: "#008000",
    borderStyle: "solid",
    borderWidth:1,
    borderColor: "#ff0000",
    borderRadius:50,
    padding:10,
  },
  normalText:{
    fontFamily: "Roboto",
    fontSize: 20,
    color:"#ffffff",
  }
});
