import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, ImageBackground, TextInput, ScrollView} from 'react-native';
import stylesLogin from '../configs/css/style_login';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const[nome, setNome] = useState('');
  const[email, setEmail] = useState('');
  const[senha, setSenha] = useState('');

  const informacaoUsuario = () =>{
    if(nome === "" && email === "" && telefone === "" && senha === "" && confirmarSenha === ""){
      window.alert("É necessário preencher todos os Campos");
    }else if(nome === ""){
      window.alert("É necessário que o campo de Nome seja Preenchido");
    }else if(nome.length < 8){
      window.alert("É necessário que o campo de Nome tenha no minímo 8 caractérs");
    }else if(email === ""){
      window.alert("É necessário que o campo de Email seja preenchido");
    }else if(email.indexOf("@") === -1){
      window.alert("É necessário que o campo de Email tenha o símbolo de '@'");
    }else if(senha === ""){
      window.alert("É necessário que o campo de Senha seja preenchido");
    }else if(senha.length < 8){
      window.alert("É necessário que o campo de Senha tenha no minímo 8 caractérs");
    }else{
      navigation.navigate('Login', {nome, email, senha});
    }
  } 

  return(
    <View style={stylesLogin.container}>
      <StatusBar backgroundColor="#202020" barStyle="light-content"/>
      <View style={stylesLogin.containerImagem}>
        <Animatable.Image animation="flipInY" style={stylesLogin.campoImagem} source={require('../configs/img/logo_harry_potter.png')} />
      </View>

      <Animatable.View animation="fadeInUp" delay={300} style={stylesLogin.conteudo}>
        <Text style={stylesLogin.titulo}>Crie uma Nova Conta</Text>
        <Text style={stylesLogin.texto}>Desbloqueie todos os recursos do App, basta apenas Criar uma Conta em nossa Plartaforma</Text>

        <View style={stylesLogin.formulario}>
          <Text style={stylesLogin.textologininput}>Nome de Usuário <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={nome}
            onChangeText={novoNome => setNome(novoNome)}
            style={stylesLogin.inputForm}
            placeholder="Crie um novo UserName"
          />
          
          <Text style={stylesLogin.textologininput}>Endereço de E-mail <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={email}
            onChangeText={novoEmail => setEmail(novoEmail)}
            style={stylesLogin.inputForm}
            keyboardType="email-address"
            placeholder="Digite seu melhor E-mail"
          />

          <Text style={stylesLogin.textologininput}>Senha de Acesso <Text style={stylesLogin.validado}>*</Text></Text>
          <TextInput
            value={senha}
            onChangeText={novaSenha => setSenha(novaSenha)}
            style={stylesLogin.inputForm}
            secureTextEntry={true}
            placeholder="Crie uma senha Forte"
          />
        
          <TouchableOpacity onPress={informacaoUsuario} style={stylesLogin.btnLogin}>
            <Text style={stylesLogin.btntituloLogin}>CRIAR NOVA CONTA</Text>
          </TouchableOpacity>

          <Text style={stylesLogin.criarConta}>Já tem uma Conta? <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={stylesLogin.textoCriar}>Faça Login</Text>
          </TouchableOpacity></Text>
        </View>
      </Animatable.View>
    </View>
  );
}

export default SplashScreen;