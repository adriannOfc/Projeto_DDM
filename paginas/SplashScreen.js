import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import styles from '../configs/css/styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation(); 

  return(
    <View style={styles.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={styles.containerImagem}>
        <Animatable.Image animation="flipInY" style={styles.campoImagem} source={require('../configs/img/logo_harry_potter.png')} />
      </View>

      <Animatable.View animation="fadeInUp" delay={300} style={styles.conteudo}>
        <Text style={styles.titulo}>A Bruxaria Desvendada: Desafie-se com o Quiz de Harry Potter e prove seu domínio sobre o mundo mágico.</Text>
        <Text style={styles.texto}>Para continuar é necessário realizer um Login!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
          <Text style={styles.btntitulo}>EMBARQUE NESSA AVENTURA</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

export default SplashScreen;