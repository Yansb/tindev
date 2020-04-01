Aplicação feita com base na Semana Omnistack 8 do usuario diego3g
banco de dados feito utilizando mongoDB,
frontend feito utilizando react,
backend feito utilizando expo (originalmente foi feito utilizando somente react-native)

Mobile feito com expo para que eu pudesse testar diretamente no meu celular ao inves de um emulador 
como no curso original, mantive apenas a logica,

Mudei a estrutura de pastar para a que aprendi na semana omnistack 11 
pois acredito que fica melhor a organização

tentei fazer o arquivo Routes.jscomo aprendido na semana omnistack 11 usando de: 
<NavigationContainer> e <AppStack.Navigator>
no lugar de:
createAppContainer(createSwitchNavigator({}));

queria usar stack pois ele dá uma maior legibilidade e tentei fazer com que quando ele fosse da pagina de login para a pagina principal, ele redefinisse a pilha para que não pudesse mais voltar a não ser que o usuario faça logout

porem quando eu queria pegar o parametro na pagina Main usando o navigation.getParam('user') q a pagina de login passava
ele dizia que navigation.getParam não era uma função e estava undefined