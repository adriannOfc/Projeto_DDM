import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import styles from '../configs/css/styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const ResultadoTela = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao3: novaPontuacao4 } = route.params ? route.params : {};

  var mensagem = [];

  if(novaPontuacao4 == 0){
    mensagem = "Se você não conseguiu acertar nenhuma questão, não desanime! Continue explorando o mundo mágico de Harry Potter e tente novamente.";
  }else if(novaPontuacao4 == 1 || novaPontuacao4 == 2){
    mensagem = "Quase lá! Com um pouco mais de conhecimento, você estará dominando o universo de Harry Potter. Continue se aventurando e tente novamente!";
  }else if(novaPontuacao4 == 3 || novaPontuacao4 == 4){
    mensagem = "Parabéns! Seu conhecimento sobre a série de Harry Potter é impressionante. Continue explorando esse mundo mágico e aprofundando sua expertise.";
  }else if(novaPontuacao4 == 5){
    mensagem = "Uau! Você realmente sabe tudo sobre a série de Harry Potter. Seu conhecimento é digno de um verdadeiro fã. Continue se encantando com esse universo mágico!";
  }

  return(
    <View style={styles.container}>
       <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={styles.containerImagem}>
        <Animatable.Image animation="flipInY" style={styles.campoImagem} source={require('../configs/img/logo_harry_potter.png')} />
      </View>

      <Animatable.View animation="fadeInUp" delay={300} style={styles.conteudo2}>
        <Image style={{ width: 100, height: 100, marginLeft: 75, marginTop: 15, }} source={require('../configs/img/trofeu.png')}/>
        <Text style={{ marginTop: 30, fontFamily: "Verdana", fontSize: 15, textTransform: 'uppercase', marginBottom: 5}}> {mensagem}</Text>
        <Text style={styles.texto}>A sua pontuação foi de: {novaPontuacao4} Pontos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio')} style={styles.btn}>
          <Text style={styles.btntitulo}>VOLTAR AO MENU INICIAL</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

export default ResultadoTela;