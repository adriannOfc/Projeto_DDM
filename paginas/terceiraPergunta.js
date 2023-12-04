import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const TerceiraPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { pontuacao: novaPontuacao } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao2 = novaPontuacao+1;
    navigation.navigate('QuartaPergunta', {novaPontuacao: novaPontuacao2});
  }

  const respostaErrada = () => {
    const novaPontuacao2 = novaPontuacao+0;
    navigation.navigate('QuartaPergunta', {novaPontuacao: novaPontuacao2});
  }

  return(
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 3 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: {novaPontuacao}</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/imagem3.jpeg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é o nome do elfo doméstico que serve à família Malfoy?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity onPress={respostaCerta} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> a) Kreacher</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> b) Dobby</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> c) Winky</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Hokey</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default TerceiraPergunta;