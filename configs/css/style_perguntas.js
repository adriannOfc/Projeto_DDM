import { StyleSheet } from 'react-native';

const stylePerguntas = StyleSheet.create({
  container:{
    width: '100%',
    height: 696,
    resizeMode: 'cover',
  },
  conteudoPrincipal:{
    flex: 1,
    backgroundColor: '#000000',
  },
  headerPerguntas:{
    width: '100%',
    height: 50,
    backgroundColor: '#fefefe',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomStartRadius: 13,
    borderBottomEndRadius: 13,
    padding: '0px 20px',
  },
  textoHeader:{
    color: '#020202',
    fontSize: 22,
    fontFamily: "Verdana",
    flexDirection: 'row',
  },
  campoImagem:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 215,
    backgroundColor: '#ffffff',
    marginTop: 60,
    marginLeft: 15,
    borderRadius: 13,
  },
  imagemPergunta:{
    width: '100%',
    height: 250,
    borderRadius: 13,
    resizeMode: 'cover',
  },
  cntQuestao:{
    width: '90%',
    height: 'auto',
    backgroundColor: '#ffffff',
    margin: '0px 15px',
    padding: 15,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    marginBottom: 20,
  },
  txtQuestao:{
    color: '#020205',
    fontSize: 16,
    textAlign: 'justify',
    fontFamily: "Verdana",
  },
  botoesQuestoes:{
    margin: 15,
  },
  btnQuestao:{
    width: '100%',
    height: 'auto',
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    paddingLeft: 10,
    marginBottom: 10,
    borderRadius: 13,
    padding: '10px 0px',
  },
  respostaQuestao:{
    color: '#020205',
    fontSize: 18,
    fontFamily: "Verdana",
  }
});

export default stylePerguntas;