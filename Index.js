import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground,Alert, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';


export default function Index( { navigation } ) {
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
      <View style={styles.fondo}>
        <Text style={styles.normalText}>
            Buscamos atraer la atención de nuestros clientes
            a traves de experiencias en la seducción de los
            sentidos. Adaptamos las propuestas con el objetivo de que
            logre desconectarse completamente de la rutina y disfrute de un momento
            de bienestar en total armonia con la naturaleza. 
        </Text>
      </View>
        <View style={styles.contenedorRow}>          
            <TouchableOpacity onPress={() => navigation.navigate('CrearTurnos')}
                style={styles.botonLogin}>
                  <Text style={styles.normalText}>Crear Turno</Text>
                </TouchableOpacity>   
                <TouchableOpacity onPress={() => navigation.navigate('Turnos')}
                style={styles.botonLogin}>
                  <Text style={styles.normalText}>Mis Turnos</Text>
            </TouchableOpacity>       
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}
                style={styles.botonLogin}>
                  <Text style={styles.normalText}>Cerrar Sesion</Text>
            </TouchableOpacity> 
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
  fondo:{
    backgroundColor:"#ffffff50",
    marginTop:10,
    marginRight:20,
    marginLeft:20,
    width:"90%",   
    borderRadius: 100,
    flex:1, 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:30,
    maxHeight:300,
    minHeight:300,
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
    textAlign:'center',
    fontFamily: "Roboto",
    fontSize: 20,
    color:"#000000",
    maxWidth: 300,
  }
});
