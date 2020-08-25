const gameName = 'Nome do Jogo';
const bonusScene = ``;

const imageElement = document.getElementById('img');
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

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

const textNodes = [
  // HOME
  {
    id: 0,
    text: 
    `<div class="title">
      <h1 class="main-title anim-txt">${gameName}<sub class="subline">demo</sub></h1>
      <h3 class="subtitle">Medo e delírio no Limiar da Galáxia</h3>
      <br>
      <p class="line animate__animated animate__slideInUp animate__faster">Criado por Daniel Hogrefe & Jonas Dalacorte</p>
    </div>`,
    img:
      '<img class="img" src="https://64.media.tumblr.com/23ff7ca23c6bae22fe8d430cf5dbef3d/102dfc3987410b01-94/s1280x1920/959f41fd90cf6acc8ba9d226b432640091803b3b.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>Jogar ✨</strong>',
        nextText: 1,
      },
      {
        text: 'Créditos 👁‍🗨',
        nextText: 24,
      },
    ],
  },

  // CREDITS
  {
    id: 24,
    text: 
    `<div class="title">
      <h1 class="credits-title animate__animated animate__lightSpeedInRight animate__fast">${gameName}<sub class="subline">demo</sub></h1>
    </div>
  <div class="credits">
    <h4 class="credits-title">Criação</h4>
    <p>Daniel Hogrefe & Jonas Dalacorte</p>
    <h4 class="credits-title">Arte Original</h4>
    <p><a class="links" href="https://danielhogrefe.tumblr.com/" target="_blank">Daniel Hogrefe</a></p>
    <h4 class="credits-title">Programação & Design</h4>
    <p><a class="links" href="https://github.com/dpsmkr/" target="_blank">Jonas Dalacorte</a></p>
    <h4 class="credits-title">Trilha Original</h4>
    <p><a class="links" href="#">AKAAO</a></p>
    <br>
    <h4 class="credits-title">Recursos:</h4>
    <p class="line"><a class="links" href="https://github.com/WebDevSimplified" target="_blank">Web Dev Simplified</a></p>
    <p class="line"><a class="links" href="https://animate.style/" target="_blank">Animate.css</a></p>
  </div >`,
    img: '',
    options: [
      {
        text: 'Voltar',
        nextText: 0,
      },
    ],
  },

  // SCENE 1
  {
    id: 1,
    text: `<p class="txt animate__animated animate__fadeIn">Você acorda no chão de uma das cabines no banheiro do <span class="var">Mondrian's</span>, um bar de fim de noite no Limiar da Galáxia. Os únicos resquícios da noite passada são o vômito nas suas calças, uma dor de cabeça infernal e um frasco cheio até a metade com um <span class="var">Líquido Roxo</span> que parece remédio para dor de barriga no seu bolso esquerdo.<span class="cursor-blink">|</span></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>Sair</strong> do banheiro',
        nextText: 3,
      },
      {
        text: 'Investigar as <strong>outras cabines</strong>',
        nextText: 2,
      },
      {
        text: `Experimentar o <strong>Líquido Roxo</strong>`,
        nextText: 21,
      },
    ],
  },

  // SCENE 2
  {
    id: 2,
    text: `<p class="txt animate__animated animate__fadeIn">Além de um maço de cigarros úmidos e um cadáver de rato espacial, nada de útil na cabine da direita. Na cabine à sua esquerda você encontra um papel rasgado pela metade que parece ser uma prescrição médica. É possível ler apenas "<span class="var">Dra. Y.Suzuki</span>" e o código "<span class="var">Y2-SZK9</span>" - essa mesma sequência está anotada no frasco do Líquido Roxo.<span class="cursor-blink">|</span></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>Sair</strong> do banheiro',
        setState: { clue1: true },
        nextText: 3,
      },
    ],
  },

  // SCENE 3
  {
    id: 3,
    text: `<p class="txt animate__animated animate__fadeIn">Por baixo da porta de entrada é possível ver os primeiros raios do <span class="var">Segundo Sol</span> indicando que você já perdeu a manhã toda. No balcão, o Velho Barman te observa com indiferença enquanto fecha um de seus cigarros fedorentos.<span class="cursor-blink">|</span></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: 'Perguntar sobre a <strong>noite passada</strong>',
        nextText: 6,
      },
      {
        text: `Perguntar o que ele sabe sobre A Substância <strong>Y2-SZK9</strong>`,
        nextText: 4,
        requiredState: (currentState) => currentState.clue1,
      },
      {
        text: '<strong>Sair</strong> do bar',
        nextText: 7,
      },
    ],
  },

  // SCENE 4 (transition)
  {
    id: 4,
    text: `<p class="txt animate__animated animate__fadeIn">Uma das vantagens de ser um Local no Mondrian's é que você sabe que o Velho Barman antes de passar suas horas resmungando atrás do balcão empoeirado também foi um Trambiqueiro Espacial como você e pode ajudar a desvendar esse pequeno mistério ressaquento.<span class="cursor-blink">|</sspan></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>>>></strong>',
        nextText: 5,
      },
    ],
  },

  // SCENE 5
  {
    id: 5,
    text: `<p class="txt animate__animated animate__fadeIn">O Velho Barman explica que A Substância <span class="var">Y2-SZK9</span> não é produzida há mais de 300 anos e que provavelmente esse frasco veio parar nesse exato buraco no Limiar da Galáxia por meio de Contrabando Sônico - uma forma de viagem no tempo. Suas propriedades são desconhecidas já que sua "criadora", a <span class="var">Dra. Y.Suzuki</span>, desapareceu logo após a descoberta. Ele muda de feição instantaneamente e pede para ver A Substância mais de perto.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>"Sem chance!"</strong>, é hora de dar o fora',
        nextText: 7,
      },
      {
        text: `Entregar <strong>A Substância</strong> ao Velho Kroptiliano`,
        nextText: 22,
      },
      {
        text: `Perguntar sobre a <strong>Dra. Y.Suzuki</strong>`,
        nextText: 6,
      },
    ],
  },

  // SCENE 6
  {
    id: 6,
    text: `<p class="txt animate__animated animate__fadeIn">O Velho Barman ignora sua pergunta e fixa o olhar no frasco d'<span class="var">A Substância</span>. Um sentimento esmagador toma conta de seu peito. É hora de dar o fora.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>>>></strong>',
        nextText: 7,
      },
    ],
  },

  // SCENE 7 (carro)
  {
    id: 7,
    text: `<p class="txt animate__animated animate__fadeIn">Sem seus óculos escuros você leva alguns segundos para conseguir adaptar a visão ao dia e achar seu <span class="var">Turbo 4-BK20</span> estacionado há alguns metros do Bar. A chave não está no seu bolso... ainda está na ignição. Aparentemente a noite passada começou mais cedo do que você lembra.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: `Procurar algo para <strong>quebrar o vidro</strong> do Turbo 4-BK20`,
        setState: { spaceShip: true },
        nextText: 8,
      },
      {
        text:
          '<strong>"Que diabos de dia"</strong>, experimentar A Substância',
        nextText: 21,
      },
      {
        text:
          'Chamar um <strong>Táxi Espacial</strong> e curar a ressaca em casa',
        setState: { taxi: true },
        nextText: 10,
      },
    ],
  },
  // no return

  // SCENE 8 (ouvir / ignorar msg)
  {
    id: 8,
    text: `<p class="txt animate__animated animate__fadeIn">O vidro se espatifa em milhares de pedaços reluzentes com o impacto. Antes que o alarme soe você salta para dentro e gira a chave na ignição, o motor nuclear ruge e seu Turbo 4-BK20 está pronto para um <span class="var">Salto Sônico</span>. O ícone de mensagem recebida no monitor chama sua atenção.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>Abrir</strong> a mensagem',
        setState: { readMessage: true },
        nextText: 9,
      },
      {
        text:
          '<strong>Ignorar</strong> a mensagem e ir para casa curar a ressaca',
        setState: { taxi: true },
        nextText: 10,
      },
    ],
  },
  // no return

  // SCENE 9 (mensagem)
  {
    id: 9,
    text: `<p class="txt animate__animated animate__fadeIn">O rosto que aparece no telecomunicador é e não é familiar. Uma espécie de <em>déjà vu</em>. Você ouve atentamente a mensagem: A <span class="var">Dra. Y.Suzuki</span> se apresenta e avisa que você &mdash; seja lá quem for que estiver em posse d'A Substância &mdash; corre perigo e que forças sinistras estão atrás d'A Substância que pode alterar o curso da vida na Galáxia. Ela pede para que você salte imediatamente para <span class="var">Kluster-89</span> e mostra um papel com as coordenadas.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text:
          '<strong>Ignorar</strong> as instruções e ir para casa curar a ressaca',
        nextText: 10,
        requiredState: (currentState) => currentState.readMessage,
      },
      {
        text: `Seguir as instruções e saltar para <strong>Kluster-89</strong>`,
        nextText: 12,
      },
      {
        text: `Pesquisar o código e o nome da Dra. Y.Suzuki na <strong>Rede de Computadores</strong>`,
        nextText: 11,
      },
    ],
  },

  // SCENE 10 (casa)
  {
    id: 10,
    text:
      `<p class="txt animate__animated animate__fadeIn">Ao chegar em casa você se depara com a <span class="var">porta arrombada e suas coisas reviradas</span>. Alguém está atrás de você, e você não faz ideia do que está acontecendo.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: `Seguir as instruções e saltar para <strong>Kluster-89</strong>`,
        requiredState: (currentState) => currentState.readMessage,
        nextText: 12,
      },
      {
        text: 'Experimentar a maldita <strong>Substância</strong>',
        nextText: 21,
      },
      {
        text: `Checar sua <strong>caixa de mensagens</strong>`,
        requiredState: (currentState) => currentState.taxi,
        setState: { readMessage: false },
        nextText: 9,
      },
    ],
  },

  // SCENE 11 (google)
  {
    id: 11,
    text: `<p class="txt animate__animated animate__fadeIn">Há cerca de 300 anos a Dra. Y.Suzuki integrou um grupo de pesquisas na <span class="var">Universidade Monolítica da Galáxia</span>. Seu objeto de estudo era o funcionamento do cérebro humano e sua percepção da realidade. A Dra. anunciou que havia feito uma descoberta inimaginável com potencial para alterar o curso da história. No dia do anúncio, no entanto, o laboratório explodiu. Nenhum corpo foi encontrado, e os registros da pesquisa se perderam. Desde então frascos com A Substância descoberta são encontrados em determinados períodos no tempo e em locais improváveis no Universo.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: `Saltar para <span class="var">Kluster-89</span>`,
        nextText: 12,
      },
    ],
  },

  // SCENE 12 (transition)
  {
    id: 12,
    text: `<p class="txt animate__animated animate__fadeIn">Com o cansaço de não saber onde se meteu e a sede por respostas você decide que é hora de descobrir o que está acontecendo. O <span class="var">bio-vidro</span> do Turbo 4-BK20 completou seu autorreparo e você está pronto para o salto.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>>>></strong>',
        nextText: 13,
      },
    ],
  },

  // SCENE 13
  {
    id: 13,
    text: `<p class="txt animate__animated animate__fadeIn">Após anos luz de distância serem comprimidos em míseros segundos de existência você chega à <span class="var">Kluster-89</span>, ou o que sobrou dele. Ainda com a náusea causada pelo salto, você se encontra no meio do que parece ter sido uma praça, agora tomada pela densa selva tropical que cobre o planeta. Prédios enormes por todos os lados. De algum ponto no centro da praça emana uma <span class="var">Névoa Roxa</span>, com a mesma tonalidade d'A Substância no frasco. À sua esquerda, de frente para o centro da praça, um bar em pleno funcionamento.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: 'Investigar o <strong>Bar</strong>',
        nextText: 15,
      },
      {
        text: 'Investigar a <strong>Névoa</strong>',
        setState: { bar2: true },
        nextText: 16,
      },
      {
        text: `Acender um bom e velho <strong>cigarro Kroptiliano</strong> para curar o enjôo`,
        nextText: 14,
      },
    ],
  },

  // SCENE 14
  {
    id: 14,
    text: `<p class="txt animate__animated animate__fadeIn">Você se encosta no Turbo 4-BK20 e começa a fechar seu cigarro Kroptiliano enquanto observa o movimento de <em>entra-e-sai</em> no Bar envolto em <span class="var">Névoa Roxa</span>. Impressionante como algumas formas de socialização permanecem e sobrevivem até mesmo após a queda total da civilização. O enjôo desaparece como mágica depois de duas tragadas.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: 'Investigar o <strong>Bar</strong>',
        nextText: 15,
      },
      {
        text: 'Investigar a <strong>Névoa</strong>',
        setState: { bar2: true },
        nextText: 16,
      },
    ],
  },

  // SCENE 15
  {
    id: 15,
    text: `<p class="txt animate__animated animate__fadeIn">A mesma cena em todos os cantos do Universo Conhecido, do Centro Cósmico até o Limiar da Galáxia: O Bar de Fim de Noite. Como numa cena de algum <em>spaghetti western futurista</em>, alienígenas e humanos fedorentos se aglomeram no balcão e em volta das mesas bebendo em taças e canecas um líquido que se assemelha muito com <span class="var">A Substância</span>, sua entrada no bar é totalmente ignorada. Além da densa fumaça de cigarros, um tom arroxeado no ar chama sua a atenção pela semelhança com a cor d'A Substância.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: 'Perguntar ao Barman sobre a <strong>Névoa Roxa</strong>',
        nextText: 17,
      },
      {
        text: 'Pedir uma dose da <strong>Bebida</strong>',
        nextText: 21,
      },
      {
        text:
          '<strong>"Dane-se esse lugar"</strong>, seguir em direção à Névoa',
        setState: { bar2: true },
        nextText: 16,
      },
    ],
  },

  // SCENE 16
  {
    id: 16,
    text:
      '<p class="txt animate__animated animate__fadeIn">Se embrenhando por entre os galhos que parecem tentáculos de centenas de anos você consegue chegar numa clareira no centro da praça. De um buraco na terra um vapor denso e Roxo é expelido como em um geiser. Uma <span class="var">Figura Enigmática</span> pode ser vista através do vapor. Aparentemente sua presença não foi percebida.<span class="cursor-blink">|</strong></p>',
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text:
          'Esconder-se e <strong>observar</strong> a Figura Enigmática secretamente',
        nextText: 18,
      },
      {
        text:
          '<strong>Voltar ao Bar</strong> e tentar conseguir mais informações sobre o local',
        requiredState: (currentState) => currentState.bar2,
        nextText: 17,
      },
      {
        text:
          '<strong>Atacar</strong> a Figura Enigmática aproveitando o fator surpresa',
        nextText: 19,
      },
    ],
  },

  // SCENE 17
  {
    id: 17,
    text: `<p class="txt animate__animated animate__fadeIn">O barman, que parece uma versão alienígena do Velho Barman fica visivelmente desconfortável com a pergunta: <span class="var">"Eu não sei de nada! É melhor você dar o fora e cuidar da sua VIDA!"</span><span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: 'Investigar a <strong>Névoa</strong>',
        setState: { bar2: false },
        nextText: 16,
      },
      {
        text: 'Pedir uma dose da <strong>Bebida</strong>',
        nextText: 21,
      },
    ],
  },

  // SCENE 18 (transition)
  {
    id: 18,
    text: `<p class="txt animate__animated animate__fadeIn">Se esgueirando por entre os escombros cheios de limo da antiga praça você tenta uma aproximação. A Figura Enigmática tem algo em suas mãos &mdash; um frasco igual ao seu. Investigando com mais atenção você percebe se tratar da <span class="var">Dra. Y.Suzuki</span>. Ela percebe sua presença.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>>>></strong>',
        nextText: 19,
      },
    ],
  },

  // SCENE 19
  {
    id: 19,
    text: `<p class="txt animate__animated animate__fadeIn">A Dr. Y.Suzuki corre até você. Suas pupilas estão dilatadas, seus olhos são como duas azeitonas inchadas: "É tudo uma simples simulação. Nós conseguimos quebrar o universo. Nós descobrimos o caminho pra fora. Desde então eu tenho percorrido o tempo tentando encontrar um jeito de reunir minhas descobertas. O <span class="var">Y2-SZK9</span> que você trouxe até mim é um extrato de <span class="var"><em>Alternanthera Ficoidea</em></span>. Ele dissolve as amarras do programa. Libertando a mente. Mas é fatal.”. A Doutora mostra o frasco que ela tem em suas mãos e você percebe que a substância tem uma cor levemente diferente. "Essa é minha outra descoberta: <span class="var">A Substância W7-DHJ5</span> age no organismo limitando o efeito da Explosão Sônica causada pela Y2-SZK9. Os dois devem ser usados juntos.". A Doutora mistura as duas substâncias e oferece uma dose a você.<span class="cursor-blink">|</strong></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>Aceitar</strong> a dose',
        nextText: 20,
      },
      {
        text: '<strong>Recusar</strong> a dose',
        nextText: 22,
      },
    ],
  },

  // NEUTRAL
  {
    id: 21,
    text: `<p class="animate__animated animate__fadeIn fim">Você começa a ver cores que não existem e sente como se seu corpo não estivesse conectado com seus órgãos. A Galáxia é Você e Você é a Galáxia. <p class="var end-txt">Nada é verdadeiro, tudo é permitido.<span class="cursor-blink">|</strong></p></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>🌟 FIM 🌟</strong>',
        nextText: 23,
      },
    ],
  },

  // BAD
  {
    id: 22,
    text: '<p class="var end-txt">Game Over</p>',
    img: '<img class="img" src="./img/ph.jpg" alt="" title="Daniel Hogrefe"/>',
    options: [
      {
        text: '<strong>💥 FIM 💥</strong>',
        nextText: 23,
      },
    ],
  },

  // GOOD
  {
    id: 20,
    text: `<p class="animate__animated animate__fadeIn fim">No exato instante em que a mistura d'As Substâncias toca sua língua o verde que encobre a praça começa a derreter em pequenas <span class="var">partículas geométricas</span> e todo o vapor Roxo que era expelido pelos geisers se mistura com sua carne, agora exposta, do avesso, assim como a Dra Y.Suzuki. Você não sente dor, nem medo. Um flash branco te cega por alguns segundos. Aos poucos você consegue observar a fachada do Mondrian's. Você está sentado dentro do Turbo 4-BK20 e pelo retrovisor vê o Segundo Sol se pondo. <em>Isso aconteceu ou foi um sonho embriagado?</em> No seu colo um pedaço de papel quase transparente com as iniciais <span class="var">Y. S.</span> e uma única frase: <p class="var end-txt">"É tudo real"<span class="cursor-blink">|</strong></p></p>`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: '<strong>💊 FIM 💊</strong>',
        nextText: 23,
      },
    ],
  },

  // BONUS
  {
    id: 23,
    text: `${bonusScene}`,
    img: '<img class="img" src="./img/ph.jpg" alt="copyright Daniel Hogrefe" />',
    options: [
      {
        text: 'Obrigado por jogar 👾',
        nextText: -1,
      },
    ],
  },
];

startGame();
