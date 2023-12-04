import { View, Text, TouchableOpacity, StatusBar, Image, ImageBackground, TextInput} from 'react-native';
import stylesLogin from '../configs/css/style_login';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute} from '@react-navigation/native';
import React, { useState } from 'react';

const Login = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { nome, senha } = route.params ? route.params : {};

  const[nomeLogin, setNomeLogin] = useState('');
  const[senhaLogin, setSenhaLogin] = useState('');

  const verificarLogin = () =>{
    if(nomeLogin == "" && senhaLogin == ""){
      window.alert("É necessário preencher todos os Campos");
    }else if(nomeLogin == ""){
      window.alert("É necessário que o campo de Email seja preenchido");
    }else if(senhaLogin == ""){
      window.alert("É necessário que o campo de Senha seja preenchido");
    }else if(senhaLogin.length < 8){
      window.alert("É necessário que o campo de Senha tenha no minímo 8 caractérs");
    }else if(nome === nomeLogin && senha === senhaLogin){
      navigation.navigate('Inicio', {nome});
    }else{
      window.alert("Vimos que o que você passou pelo formulário não está registrado em nosso Banco de Dados");
    }
  }

  return(
    <View style={stylesLogin.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={stylesLogin.containerImagem}>
        <Animatable.Image animation="flipInY" style={stylesLogin.campoImagem} source={require('../configs/img/logo_harry_potter.png')} />
      </View>

      <Animatable.View animation="fadeInUp" delay={300} style={stylesLogin.conteudo}>
        <Text style={stylesLogin.titulo}>Entre com sua Conta!</Text>
        <Text style={stylesLogin.texto}>Apresente-se com suas credenciais: Conecte-se à sua conta pessoal para acessar o Quiz do Mundo Bruxo de Harry Potter!</Text>

        <View style={stylesLogin.formulario}>
          <Text style={stylesLogin.textologininput}>Nome de Usuário <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={nomeLogin}
            onChangeText={nomeFormulario => setNomeLogin(nomeFormulario)}
            style={stylesLogin.inputForm}
            placeholder="Digite o seu Nome de Usuário"
          />

          <Text style={stylesLogin.textologininput}>Senha de Acesso <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={senhaLogin}
            onChangeText={senhaFormulario => setSenhaLogin(senhaFormulario)}
            style={stylesLogin.inputForm}
            secureTextEntry={true}
            placeholder="Digite a sua senha de Acesso"
          />
        
          <TouchableOpacity onPress={verificarLogin} style={stylesLogin.btnLogin}>
            <Text style={stylesLogin.btntituloLogin}>CONTINUAR COM LOGIN</Text>
          </TouchableOpacity>

          <Text style={stylesLogin.criarConta}>Não possui uma Conta? <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}
          >
            <Text style={stylesLogin.textoCriar}>Criar Conta</Text>
          </TouchableOpacity></Text>
        </View>
      </Animatable.View>
    </View>
  );
}

export default Login;