import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const QuartaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao: novaPontuacao2 } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao3 = novaPontuacao2+1;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

  const respostaErrada = () => {
    const novaPontuacao3 = novaPontuacao2+0;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

  return(
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 4 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: {novaPontuacao2}</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/imagem4.jpeg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Quem é o diretor de Hogwarts durante a maior parte da série de livros?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity onPress={respostaCerta} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> a) Alvo Dumbledore</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> b) Severo Snape</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> c) Minerva McGonagall</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Horácio Slughorn</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default QuartaPergunta;