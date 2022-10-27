import React from 'react';
import * as React from "react"
import{NavigationContainer} from "@react-navigation/native ";
import{createStacknvigator}from "@react-navigation/stack ";

import Main from "./screens/Main";
import Home from "./screens/Home ";

const Stack =createStackNavigator ();

function App( ){
  return(
    <NavigationContainer>
      <Stack.navigator intialRouteName ="home" screenOptions ={{
        header:false
      }}>
        <Stack.Screen name ="Home" component ={Home }/>
        <Stack.Screen name ="Main" component ={Main }/>
      </Stack.navigator>
    </NavigationContainer>
  )
}

export default App ;