import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native';
import stylesInicio from '../configs/css/style_incio';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';

const Inicio = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { nome } = route.params ? route.params : {};

  return(
    <View style={stylesInicio.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={stylesInicio.containerImagem}>
        <Animatable.Image animation="flipInY" style={stylesInicio.campoImagem} source={require('../configs/img/logo_harry_potter.png')} />
      </View>

      <Animatable.View animation="fadeInUp" delay={300} style={stylesInicio.conteudo}>
            <View style={stylesInicio.headerConteudo}>
              <Text style={stylesInicio.texto}>Olá, como vai?</Text>
            </View>

            <View style={stylesInicio.titulosConteudo}>
              <View style={stylesInicio.headerInformacoes}>
                <Text style={stylesInicio.textoHeader}>COMO O QUIZ FUNCIONA?</Text>
              </View>

              <View style={stylesInicio.descricaoConteudo}>
                <Text style={stylesInicio.textoDescricao}>Prepare-se para enfrentar os desafios mais mágicos no fascinante mundo de Harry Potter! Este quiz vai testar seus conhecimentos sobre a aclamada série de aventuras e magia de J.K. Rowling. Ao longo do jogo, você será desafiado com uma seleção cuidadosamente elaborada de perguntas que abrangem desde detalhes dos personagens até os momentos mais emblemáticos da trama. Esteja preparado para mergulhar no mundo dos feitiços e encantamentos enquanto enfrenta questões que vão testar sua memória e sua habilidade de conhecimento mágico.</Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate('PrimeiraPergunta')} style={stylesInicio.btnComecar}>
                <Text style={stylesInicio.textoBtn}>TESTE SEUS CONHECIMENTOS</Text>
              </TouchableOpacity>
            </View>
        </Animatable.View>
    </View>
  );
}

export default Inicio;