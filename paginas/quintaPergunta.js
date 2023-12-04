import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const QuintaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao2: novaPontuacao3 } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao4 = novaPontuacao3+1;
    navigation.navigate('ResultadoTela', {novaPontuacao3: novaPontuacao4});
  }

  const respostaErrada = () => {
    const novaPontuacao4 = novaPontuacao3+0;
    navigation.navigate('ResultadoTela', {novaPontuacao3: novaPontuacao4});
  }

  return(
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 5 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: {novaPontuacao3}</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/imagem5.jpeg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é o feitiço usado para invocar a varinha de um oponente?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> a) Avada Kedavra</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> b) Expelliarmus</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> c) Wingardium Leviosa</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Petrificus Totalus</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default QuintaPergunta;