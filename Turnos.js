import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground,Alert, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';


export default function Turnos( { navigation } ) {
  const [loaded] = useFonts({
    Rochester: require('./assets/fonts/Rochester-Regular.ttf'),
    Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf')
  });  
  
  if (!loaded) {
    return null;
  }
  return (    
    <ImageBackground source={require("./assets/img/fondos/fondo-login.jpg")} style={styles.imagen}>
    <View style={styles.base}>  
    
      <View>
        <Text style={styles.titulo}>Spa Sentirse Bien</Text>
      </View>
      <View style={styles.fondoForms}>
      <Text style={styles.normalText}>Se ah creado el turno con exito</Text>
        <View style={styles.contenedorRow}>
          <TouchableOpacity onPress={() => navigation.navigate('Index')}
          style={styles.botonLogin}>
            <Text style={styles.normalText}>Pagina de Inicio</Text>
          </TouchableOpacity>    
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 85,
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
    paddingTop:30,
    maxHeight:300,
    minHeight:300,
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
