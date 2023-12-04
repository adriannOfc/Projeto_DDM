import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './paginas/Login';
import SplashScreen from './paginas/SplashScreen';
import Cadastro from './paginas/Cadastro';
import Inicio from './paginas/Inicio';
import PrimeiraPergunta from './paginas/primeiraPergunta';
import SegundaPergunta from './paginas/segundaPergunta';
import TerceiraPergunta from './paginas/terceiraPergunta';
import QuartaPergunta from './paginas/quartaPergunta';
import QuintaPergunta from './paginas/quintaPergunta';
import ResultadoTela from './paginas/resultadoTela';

const App = ({navigation}) => {
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"SplashScreen"} component={SplashScreen}/> 
        <Stack.Screen name={"Login"} component={Login}/>
        <Stack.Screen name={"Inicio"} component={Inicio}/>
        <Stack.Screen name={"Cadastro"} component={Cadastro}/>   
        <Stack.Screen name={"PrimeiraPergunta"} component={PrimeiraPergunta}/>   
        <Stack.Screen name={"SegundaPergunta"} component={SegundaPergunta}/>
        <Stack.Screen name={"TerceiraPergunta"} component={TerceiraPergunta}/>
        <Stack.Screen name={"QuartaPergunta"} component={QuartaPergunta}/>
        <Stack.Screen name={"QuintaPergunta"} component={QuintaPergunta}/>
        <Stack.Screen name={"ResultadoTela"} component={ResultadoTela}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;