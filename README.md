# minesweeper-mobile

## Sumário

- [minesweeper-mobile](#minesweeper-mobile)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Galeria](#galeria)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este app consiste no jogo campo minado para dispositivos móveis.

Tal jogo consiste em um tabuleiro de células, onde algumas contêm minas e outras não. O objetivo do jogo é descobrir todas as células que não contêm minas sem detonar uma das minas. Cada célula pode ser aberta pelo jogador ou marcada com uma bandeira para indicar uma mina. O jogo termina quando todas as células sem minas forem descobertas (o jogador ganha) ou quando uma mina for detonada (o jogador perde).

O repositório de código contém três arquivos principais:

1. O arquivo [`config.js`](./src/config.js) define algumas constantes e funções que serão usadas em outros arquivos do projeto;
2. O arquivo [`logic.js`](./src/logic.js) contém as principais funções do jogo, como a criação do tabuleiro, a distribuição das minas, a abertura de células e a verificação de vitória ou derrota;
3. Finalmente, o arquivo [`Cell/index.js`](./src/components/Cell/index.js) contém a implementação da célula individual no tabuleiro. Cada célula pode estar aberta ou fechada, pode conter uma mina ou não, e pode estar marcada com uma bandeira ou não.

Na função [`openCell`](./src/logic.js) foram utilizadas duas técnicas: recursão, para propagar a abertura das células adjacentes até que se alcance as células que não possuem mais minas em seu entorno, e busca em largura (também conhecida como flood fill), para encontrar as células adjacentes a uma célula específica. Essas técnicas são essenciais para tornar o jogo campo minado jogável e eficiente na sua resolução. A combinação delas permite que, ao se abrir uma célula livre de minas, todas as células vazias conectadas a ela também sejam abertas automaticamente, além de percorrer todas as células vizinhas para determinar o número de minas ao redor de uma célula e ajudar na decisão do jogador em relação a qual célula deve ser aberta em seguida.

Eis a representação dos índices de linha e coluna das células adjacentes desenhada pelo professor:

| -1, -1 | -1, 0 | -1, 1 |
|--------|-------|-------|
|  0, -1 |  0, 0 |  0, 1 |
|  1, -1 |  1, 0 |  1, 1 |

> Vale destacar que o presente app se encontra em andamento.

Este foi o segundo repositório de código apresentado no [Curso Superior de TSI](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) do IFMS como requisito para obtenção da nota parcial das atividades da unidade curricular Programação para Dispositivos Móveis I.

| [&larr; Repositório anterior](https://github.com/mdccg/simple-calc) | [Próximo repositório &rarr;](#) |
|-|-|

## Pilha de tecnologia

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Plataforma | [Expo](https://expo.dev/) | 
| Linguagem de programação | [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) |
| Front-end | [React Native](https://reactnative.dev/) |

## Galeria

<!-- pôr foto aqui -->

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional);
- Dispositivo móvel:
  - [Expo Go](https://expo.dev/client).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);
   
3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run start
```

Para Yarn:

```console
$ yarn start
```

5. Uma vez iniciado, aparecerá um QR Code. Você deve escaneá-lo com o aplicativo [Expo Go](https://expo.dev/client), disponível para Android e iOS;

6. Como alternativa, você pode executar o app no seu navegador, pressionando o atalho `w`. Entretanto, alguns módulos podem não funcionar na versão web do app;

7. Exclusivamente para este repositório de código, você pode executar uma versão similar no meu _snack_[<sup>1</sup>](#nota-de-rodape-1) [mdccg/ppdm-rascunho-campo-minado](https://snack.expo.dev/@mdccg/ppdm-rascunho-campo-minado).

<sup id="nota-de-rodape-1">1</sup> _Snack_ refere-se a um recurso do site da Expo onde os desenvolvedores podem criar, visualizar e compartilhar trechos de código-fonte em tempo real usando um ambiente de desenvolvimento on-line. Esses trechos de código-fonte geralmente contêm exemplos de como implementar recursos específicos no React Native, e os usuários podem testá-los instantaneamente em seus próprios dispositivos móveis, sem precisar configurar um ambiente de desenvolvimento em seu computador.
