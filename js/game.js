/* reusable bla

// required state to show option
requiredState: (currentState) => currentState.pohRoxo,


// has state
setState: { pohRoxo: true },


// PROMPT USER NAME TO BEGIN ${userName}

*/

// names
const alien = 'Kroptilo';
const nomeDoBar = 'Nome_do_Bar';
const liquidoRoxo = 'Líquido Roxo';
const papel = 'papel rasgado pela metade';
const codigoFrasco = '138-POx';
const draName = 'D.Suzuki';
const barman = 'Kleitonn';
const nomeDoCarro = '4-BIK-20';
const planetB = 'Kluster-89';
const cigarroDeArtista = 'cigarro Kroptiliano';
const plantaLouca = 'Alternanthera Ficoidea';
const substanciaB = 'B7-DHJD';

const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const imageElement = document.getElementById('img');

let state = {};

function startGame() {
  state = {};
  showTextNode(0);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerHTML = textNode.text;
  imageElement.innerHTML = textNode.img;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement('button');
      button.innerHTML = option.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectOption(option));
      optionButtonsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

// story
const textNodes = [
  // scene start - HOME
  {
    id: 0,
    text:
      '<div class="title"><h1>Space Muamba 3020</h1><p>Criado por Jonas Dalacorte & Daniel Hogrefe</p></div>',
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Começar',
        nextText: 1,
      },
      {
        text: 'Créditos',
        nextText: 420,
      },
    ],
  },
  // scene end

  // scene start
  {
    id: 420,
    text: '<h1>Space Muamba 3020</h1><p class="credits"></p>',
    img: '',
    options: [
      {
        text: 'Voltar',
        nextText: 0,
      },
    ],
  },
  // scene end

  // cena 1
  {
    id: 1,
    text: `Você acorda no chão de uma das cabines no banheiro do ${nomeDoBar}, um bar de fim de noite no Limiar da Galáxia. Os únicos resquícios da noite passada são o vômito nas suas calças, uma dor de cabeça infernal e um frasco cheio até a metade com um ${liquidoRoxo} que parece remédio para dor de barriga no seu bolso esquerdo. Apenas mais uma noite no ${nomeDoBar}.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Sair do banheiro',
        nextText: 3,
      },
      {
        text: 'Vasculhar as outras cabines',
        nextText: 2,
      },
      {
        text: `Experimentar o ${liquidoRoxo}`,
        nextText: 51,
      },
    ],
  },

  // cena 2
  {
    id: 2,
    text: `Além de um maço de cigarros úmidos e um cadáver de rato espacial, nada de útil na cabine da direita. Na cabine à sua esquerda você encontra um ${papel} que parece ser uma prescrição médica. É possível ler apenas "Dra. ${draName}" e o código "${codigoFrasco}" - essa mesma sequência está anotada no frasco do ${liquidoRoxo}.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Sair do banheiro',
        setState: { papelCodigo: true },
        nextText: 3,
      },
    ],
  },

  // cena 3
  {
    id: 3,
    text: `Por baixo da porta de entrada é possível ver os primeiros raios do Segundo Sol indicando que você já perdeu a manhã toda. No balcão, o Velho ${barman} lhe observa com indiferença enquanto fecha um de seus cigarros fedorentos.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Perguntar sobre a noite passada',
        nextText: 6,
      },
      {
        text: `Perguntar sobre A Substância ${codigoFrasco}`,
        nextText: 4,
        requiredState: (currentState) => currentState.papelCodigo,
      },
      {
        text: 'Dar de ombros e sair do bar',
        nextText: 7,
      },
    ],
  },

  // cena 4 transição
  {
    id: 4,
    text: `Uma das vantagens de ser um Local no ${nomeDoBar} é que você sabe que o Velho ${barman} antes de passar suas horas resmungando atrás do balcão empoeirado também foi um Trambiqueiro Espacial como você e pode ajudar a desvendar esse pequeno mistério ressaquento.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Próximo',
        nextText: 5,
      },
    ],
  },

  // cena 5
  {
    id: 5,
    text: `O Velho ${barman} explica que A Substância ${codigoFrasco} não é produzida há mais de 300 anos e que provavelmente esse frasco veio parar nesse buraco no Limiar da Galáxia por meio de Contrabando Sônico - uma forma de viagem no tempo. Suas propriedades são desconhecidas já que sua criadora, a Dra. ${draName} desapareceu logo após sua descoberta. Ele muda de feição instantaneamente e pede para ver A Substância mais de perto.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: '"Sem chance!", é hora de dar o fora',
        nextText: 7,
      },
      {
        text: 'Deixar o Velho matar a curiosidade',
        nextText: 52,
      },
      {
        text: `Perguntar sobre a Dra. ${draName}`,
        nextText: 6,
      },
    ],
  },

  // cena 6
  {
    id: 6,
    text: `O Velho ${barman} ignora sua pergunta e segue olhando fixamente para A Substância. Um sentimento esmagador toma conta de seu peito. É hora de dar o fora.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Sair do bar',
        nextText: 7,
      },
    ],
  },
  // cena 7
  {
    id: 7,
    text: `Sem seus óculos escuros você leva alguns segundos para conseguir adaptar a visão e achar seu ${nomeDoCarro} estacionado há alguns metros do Bar. A chave não está no seu bolso... ainda está na ignição. Aparentemente a noite passada começou mais cedo do que você lembra.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: `Procurar algo por perto para quebrar o vidro do ${nomeDoCarro}`,
        nextText: 8,
      },
      {
        text: '“Que diabos de dia”, experimentar A Substância',
        nextText: 51,
      },
      {
        text: 'Chamar um Táxi Espacial e curar a ressaca em casa',
        nextText: 10,
      },
    ],
  },
  // cena 8
  {
    id: 8,
    text: `O vidro se espatifa em milhares de pedaços reluzentes com o impacto. Antes que o alarme soe você salta para dentro e gira a chave na ignição, o motor nuclear ruge e seu ${nomeDoCarro} está pronto para um Salto Sônico. O ícone de mensagem recebida no monitor chama sua atenção.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Ouvir a mensagem',
        setState: { instruction: true },
        nextText: 9,
      },
      {
        text: 'Ignorar a mensagem e ir pra casa curar a ressaca',
        setState: { msg: true },
        nextText: 10,
      },
    ],
  },
  // cena 9
  {
    id: 9,
    text: `O rosto que aparece no telecomunicador não é familiar, você ouve atentamente a mensagem: A Dra. ${draName} se apresenta e avisa que você corre perigo e que forças sinistras estão atrás d'A Substância que pode alterar o curso da vida na Galáxia. Ela pede para que você salte imediatamente para ${planetB} e lhe passa as coordenadas.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Ignorar as instruções e ir para casa curar a ressaca',
        setState: { msg: false, instruction: true },
        nextText: 10,
      },
      {
        text: `Seguir as instruções e saltar para ${planetB}`,
        nextText: 12,
      },
      {
        text: `Jogar o código e o nome da Dra. ${draName} na Rede de Computadores`,
        nextText: 11,
      },
    ],
  },
  // cena 10
  {
    id: 10,
    text:
      'Ao chegar em casa você se depara com a porta arrombada e com suas coisas reviradas. Alguém está atrás de você, e você não faz ideia do que está acontecendo.',
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: `Seguir as Instruções e saltar para ${planetB}`,
        requiredState: (currentState) => currentState.instruction,
        nextText: 12,
      },
      {
        text: `Jogar o código e o nome da Dra. ${draName} na Rede de Computadores`,
        nextText: 11,
      },
      {
        text: 'Experimentar a maldita Substância',
        nextText: 51,
      },
      {
        text: `Voltar para o ${nomeDoCarro} e abrir a mensagem`,
        requiredState: (currentState) => currentState.msg,
        nextText: 9,
      },
    ],
  },
  // cena 11
  {
    id: 11,
    text: `Há cerca de 300 anos a Dra. ${draName} integrou um grupo de pesquisas na Universidade Monolítica da Galáxia. Seu objeto de estudo era o funcionamento do cérebro humano e sua percepção da realidade. A Dra. anunciou que havia feito uma descoberta inimaginável com potencial para alterar o curso da história. No dia do anúncio, no entanto, o laboratório explodiu. Nenhum corpo foi encontrado, e os registros da pesquisa se perderam. Desde então frascos com A Substância descoberta são encontrados de tempos em tempos em locais improváveis. `,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: `Seguir as Instruções e saltar para ${planetB}`,
        nextText: 12,
      },
    ],
  },
  // cena 12 transição
  {
    id: 12,
    text: `Cansado de não saber onde se meteu e sedento por respostas você decide que é hora de descobrir o que está acontecendo. O vidro biológico do ${nomeDoCarro} completou seu autorreparo e você está pronto para o salto.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Próximo',
        nextText: 13,
      },
    ],
  },
  // cena 13
  {
    id: 13,
    text: `Após anos luz de distância serem comprimidos em míseros segundos de existência você chega ao ${planetB}, ou o que sobrou dele. Ainda nauseado do salto você está no meio do que parece ter sido uma praça, agora tomada pela densa selva tropical que cobre o planeta. Prédios enormes por todos os lados. De algum ponto no centro da praça emana uma Névoa Roxa, com a mesma tonalidade d'A Substância no frasco. À sua esquerda, de frente para o centro da praça, um bar em pleno funcionamento.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Investigar o Bar',
        nextText: 15,
      },
      {
        text: 'Investigar a Névoa',
        nextText: 16,
      },
      {
        text: `Acender um bom e velho ${cigarroDeArtista} para curar o enjôo`,
        nextText: 14,
      },
    ],
  },
  // cena 14
  {
    id: 14,
    text: `Você se escora/apoia/encosta no ${nomeDoCarro} e começa a fechar seu ${cigarroDeArtista} enquanto observa o movimento de entra-e-sai no Bar envolto em Névoa Roxa. Impressionante como algumas formas de socialização permanecem e sobrevivem até mesmo após a queda total da civilização. O enjôo desaparece como mágica depois de duas tragadas.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Investigar o Bar',
        nextText: 15,
      },
      {
        text: 'Investigar a Névoa',
        nextText: 16,
      },
    ],
  },
  // cena 15
  {
    id: 15,
    text: `A mesma cena em todos os cantos do Universo Conhecido, do Centro Cósmico até o Limiar da Galáxia: O Bar de Fim de Noite. Como numa cena de algum <em>spaghetti western futurista</em>, alienígenas e humanos fedorentos se aglomeram no balcão e em volta das mesas bebendo em taças e canecas um líquido que se assemelha muito com A Substância, sua entrada no bar é ignorada totalmente. Além da densa fumaça de cigarros, um tom arroxeado na fumaça chama sua a atenção pela semelhança com a cor d'A Substância.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Perguntar ao Barman sobre a Névoa Roxa',
        nextText: 17,
      },
      {
        text: 'Pedir uma dose da Bebida ao Barman',
        nextText: 51,
      },
      {
        text: '"Dane-se esse lugar", seguir em direção à Névoa',
        setState: { barB: true },
        nextText: 16,
      },
    ],
  },
  // cena 16
  {
    id: 16,
    text:
      'Se embrenhando por entre os galhos que parecem tentáculos de centenas de anos você consegue chegar numa clareira no centro da praça. De um buraco na terra um vapor denso e Roxo é expelido como em um geiser. Uma silhueta enigmática pode ser vista através do vapor. Aparentemente sua presença não foi percebida.',
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Esconder-se e observar a Figura Enigmática secretamente',
        nextText: 18,
      },
      {
        text: 'Voltar ao Bar e tentar conseguir mais informações sobre o local',
        requiredState: (currentState) => currentState.barB,
        nextText: 15,
      },
      {
        text: 'Atacar a Figura Enigmática aproveitando o fator surpresa',
        nextText: 19,
      },
    ],
  },
  // cena 17
  {
    id: 17,
    text: `O barman, que parece uma versão alienígena do Velho ${barman} fica visivelmente desconfortável com a pergunta: "Eu não sei de nada! É melhor você dar o fora e cuidar da sua VIDA.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Pedir uma dose da Bebida ao Barman',
        nextText: 51,
      },
      {
        text: 'Investigar a Névoa',
        setState: { barB: false },
        nextText: 16,
      },
    ],
  },
  // cena 18 transição
  {
    id: 18,
    text: `Se esgueirando por entre os escombros cheios de limo da antiga praça você se aproxima para observar melhor. Uma humanóide anda de um lado para o outro com alguma coisa na mão - um frasco igual ao seu. Ela parece impaciente e ansiosa. Prestando mais atenção você percebe que trata-se da Dra. ${draName}. Ela interrompe sua caminhada e percebe sua presença.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Próximo',
        nextText: 20,
      },
    ],
  },
  // cena 19 transição
  {
    id: 19,
    text: `Esgueirando-se sem fazer nenhum ruído você contorna a praça para conseguir uma posição favorável de ataque. Os escombros e pedras soltas dificultam seu avanço e acabam por te fazer tropeçar, revelando sua presença. A Figura Enigmática se aproxima e revela ser a Dr. ${draName}. Ela parece completamente transtornada e ri ao reconhecer você.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Próximo',
        nextText: 20,
      },
    ],
  },
  // cena 20
  {
    id: 20,
    text: `A Dr. ${draName} corre até você. Suas pupilas estão dilatadas, seus olhos são como duas azeitonas inchadas, um fino fio de baba escorre do canto da sua boca, suas roupas estão rasgadas e imundas: “É tudo uma simulação! Nós conseguimos quebrar o universo! Nós descobrimos... o caminho pra fora! Desde então eu tenho percorrido... o tempo... tentando encontrar um jeito de reunir minhas descobertas. O ${codigoFrasco} que você trouxe até mim é um extrato de ${plantaLouca}! Ele dissolve as amarras do programa... libertando a mente. Mas é fatal!”. A Doutora mostra o frasco que ela tem em suas mãos e você percebe que a substância tem uma cor levemente diferente. “Essa é minha outra descoberta: a Substância ${substanciaB} age no organismo limitando o efeito da Explosão Sônica causada pelo ${codigoFrasco}! Os dois devem ser usados juntos!”. A Doutora mistura as duas substâncias e oferece uma dose pra você.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Aceitar a dose',
        nextText: 53,
      },
    ],
  },
  // fim 1
  {
    id: 51,
    text: `Você começa a ver cores que não existem e sente como se seu corpo não estivesse conectado com seus órgãos. A Galáxia é Você e Você é a Galáxia. Nada é verdadeiro, tudo é permitido.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'FIM',
        nextText: 69,
      },
    ],
  },
  // fim 2
  {
    id: 52,
    text: `O Velho ${barman} arranca A Substância das suas mãos numa velocidade impossível. Num piscar de olhos abre o frasco e joga pra dentro da boca fétida e murcha todo o conteúdo roxo gosmento. Seus olhos instantaneamente transformam-se em dois grandes buracos negros sugando toda a luz do ambiente. Sua barriga infla e uma luz roxa vibra de dentro pra fora. Só há tempo de ver os primeiros milissegundos da explosão antes que tudo seja consumido pelo cogumelo cósmico da reação química entre o ${alien} e A Substância ${codigoFrasco}.`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'FIM',
        nextText: 69,
      },
    ],
  },
  // fim 3
  {
    id: 53,
    text: ` descrever alguma loucura estilo medo e delirio em las vegas (vou ler de novo pra inspirar) ou burroughs kkkkk`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'FIM',
        nextText: 69,
      },
    ],
  },
  // BONUS
  {
    id: 69,
    text: `nessa tela pode aparecer o bagulho do download do disco/ep etc essas coisa coisetal`,
    img: '<img class="img" src="./img/img.jpg" alt="test-img" />',
    options: [
      {
        text: 'Obrigado por jogar 👾',
        nextText: -1,
      },
    ],
  },
];

startGame();
