import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const SegundaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { pontuacao } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao = pontuacao+1;
    navigation.navigate('TerceiraPergunta', {pontuacao: novaPontuacao});
  }

  const respostaErrada = () => {
    const novaPontuacao = pontuacao+0;
    navigation.navigate('TerceiraPergunta', {pontuacao: novaPontuacao});
  }

  return(
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 2 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: {pontuacao}</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/imagem2.jpeg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é a profissão de Arthur Weasley no Ministério da Magia?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaCerta}>
            <Text style={stylePerguntas.respostaQuestao}> a) Trabalhador na Seção de Regulamentação e Controle das Criaturas Mágicas</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> b) Auror</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> c)  Professor de Hogwarts</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Funcionário do Departamento de Mistérios</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default SegundaPergunta;