import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
  },
  containerImagem:{
    flex: 1.8,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
    titulo:{
    fontSize: 20,
    margin: '30px 0px 20px 0px',
    color: '#151515',
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  texto:{
    color: '#a1a1a1',
    fontSize: 13,
    textTransform: 'uppercase',
    fontFamily: 'Verdana',
    textAlign: 'justify',
  },
  btnLogin:{
    backgroundColor: '#101010',
    borderRadius: 10,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  campoImagem:{
    width: 220,
    height: 100,
    resizeMode: 'cover',
  },
  conteudo:{
    flex: 3,
    backgroundColor: '#fefefe',
    paddingStart: '10%',
    paddingEnd: '10%',
  },
  btntituloLogin:{
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
  formulario:{
    margin: '15px 4px',
  },
  textologininput:{
    fontSize: 16,
    color: '#202020',
    fontFamily: 'Verdana',
  },
  validado:{
    color: '#9a9a9a',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputForm:{
    width: '100%',
    height: '6vh',
    border: '1px solid #00000042',
    marginBottom: 20,
    color: '#202020',
    fontFamily: 'Verdana',
    paddingLeft: 5,
    fontSize: 16,
    borderRadius: 10,
  },
  titulosenha:{
    margin: '5px 0px 8px 0px',
    color: '#1f4391',
    fontSize: 14,
    fontFamily: 'Verdana',
    fontWeight: 500,
  },
  criarConta:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#949494',
    fontFamily: 'Verdana',
  },
  textoCriar:{
    color: '#1f4391',
    fontSize: 17,
    fontFamily: 'Verdana',
    fontWeight: 500,
  }
});

export default styles;