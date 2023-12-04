import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylePerguntas from '../configs/css/style_perguntas';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const PrimeiraPergunta = () => {
  const navigation = useNavigation(); 
  var pontuacao = 0;
  
  const respostaCerta = () =>{
    pontuacao++;
    navigation.navigate('SegundaPergunta', {pontuacao});
  }

  const respostaErrada = () =>{
    pontuacao;
    navigation.navigate('SegundaPergunta', {pontuacao});
  }

  return(
      <View style={stylePerguntas.conteudoPrincipal}>
        <View style={stylePerguntas.headerPerguntas}>
          <Text style={stylePerguntas.textoHeader}>Perguntas: 1 / 5</Text>
          <Text style={stylePerguntas.textoHeader}>Pontuação: 0</Text>
        </View>

        <View style={stylePerguntas.campoImagem}>
          <Image style={stylePerguntas.imagemPergunta} source={require('../configs/img/imagensPerguntas/imagem1.jpeg')} />
        </View>

        <View style={stylePerguntas.cntQuestao}>
          <Text style={stylePerguntas.txtQuestao}>Qual é a casa a que pertence o personagem Draco Malfoy em Hogwarts?</Text>
        </View>

        <View style={stylePerguntas.botoesQuestoes}>
          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> a) Grifinória</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> b) Lufa-Lufa</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylePerguntas.btnQuestao} onPress={respostaErrada}>
            <Text style={stylePerguntas.respostaQuestao}> c) Corvinal</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={stylePerguntas.btnQuestao}>
            <Text style={stylePerguntas.respostaQuestao}> d) Sonserina</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default PrimeiraPergunta;