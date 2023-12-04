import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 4,
    height: '100%',
    backgroundColor: '#000000',
  },
  containerImagem:{
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderBottom: '1px solid #cccccc',
  },
  headerConteudo:{
    width: '100%',
    height: 60,
    backgroundColor: '#020205',
    justifyContent: 'center',
    padding: '30px 20px',
  },
  texto:{
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 500,
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  titulosConteudo:{
    margin: '10px 20px',
  },
  tituloDescricao:{
    color: '#a3a3a3',
    fontSize: 17,
    fontFamily: 'Verdana',
    fontWeight: 600,
  },
  headerInformacoes:{
    width: '100%',
    height: 35,
    backgroundColor: '#101010',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descricao:{
    color: '#cccccc',
    fontSize: 14,
    fontFamily: "Verdana",
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textoHeader:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: "Verdana",
  },
  descricaoConteudo:{
    backgroundColor: '#ffffff',
    border: '1px solid #0000005e',
    padding: 5,
  },
  textoDescricao:{
    color: '#2f2d2d',
    textAlign: 'justify',
    padding: 10,
    fontFamily: "Verdana",
    fontSize: 16,
    fontWeight: 400,
  },
  imageBakcgroundFundo:{
    width: '100%',
    height: 580,
    resizeMode: 'cover',
  },
  btnComecar:{
    width: '100%',
    height: 50,
    backgroundColor: '#020205',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #ffffff',
    borderRadius: 5,
  },
  textoBtn:{
    color: '#ffffff',
    fontSize: 17,
    fontFamily: "Verdana",
    fontWeight: 500,
  },
  campoImagem:{
    width: '70%',
    height: 90,
  }
});

export default styles;