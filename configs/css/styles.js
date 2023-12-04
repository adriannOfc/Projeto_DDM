import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerImagem:{
    flex: 2,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 440,
    resizeMode: 'contain',
  },
  containerImagem2:{
    flex: 3,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 440,
    resizeMode: 'contain',
  },
    titulo:{
    fontSize: 19,
    margin: '25px 0px 14px 0px',
    color: '#151515',
    fontFamily: 'Verdana',
    fontWeight: 400,
    textAlign: 'justify',
  },
  texto:{
    color: '#a2a2a2',
    fontSize: 14,
    textTransform: 'uppercase',
    textAlign: 'justify',
    fontFamily: 'Verdana',
  },
  btn:{
    position: 'absolute',
    backgroundColor: '#101010',
    borderRadius: 10,
    paddingVertical: 15,
    width: '80%',
    alignSelf: 'center',
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  campoImagem:{
    width: 260,
    height: 100,
    resizeMode: 'cover',
  },
  conteudo:{
    flex: 1.2,
    backgroundColor: '#fefefe',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '10%',
    paddingEnd: '10%',
  },
   conteudo2:{
    flex: 2.3,
    backgrundColor: '#fefefe',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '10%',
    paddingEnd: '10%',
  },
  btntitulo:{
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  }
});

export default styles;