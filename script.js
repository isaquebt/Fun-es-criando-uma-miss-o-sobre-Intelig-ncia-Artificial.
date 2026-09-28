const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const btnReiniciar = document.getElementById("btn-reiniciar");

const perguntas = [
    {
        enunciado: "Você recebeu amigos de surpresa para o jantar e tem poucos ingredientes na geladeira. Qual é o seu primeiro passo na cozinha?",
        alternativas: [
            {
                texto: "Criar uma receita autoral de improviso misturando temperos e o que tiver à mão.",
                afirmacao: [
                    "Na cozinha, você destaca sua veia criativa e intuitiva, transformando o simples em pratos surpreendentes.",
                    "Você é um cozinheiro audacioso que confia no seu paladar para improvisar e criar novos sabores."
                ]
            },
            {
                texto: "Procurar uma receita clássica na internet ajustada estritamente aos ingredientes disponíveis.",
                afirmacao: [
                    "Sua abordagem culinária valoriza a precisão e o respeito às técnicas tradicionais já testadas.",
                    "Você busca no rigor das receitas a garantia de entregar um prato perfeito e bem estruturado."
                ]
            }
        ]
    },
    {
        enunciado: "Em uma viagem para um país com cultura gastronômica totalmente exótica, qual prato você escolhe no menu?",
        alternativas: [
            {
                texto: "O prato mais exótico e apimentado da casa que você nunca ouviu falar.",
                afirmacao: "Sua curiosidade gastronômica não tem limites e você encara novos temperos como aventuras inesquecíveis."
            },
            {
                texto: "Um prato local reconfortante e popular, recomendado pelo garçom da casa.",
                afirmacao: "Você prefere vivenciar a essência do conforto local através de sabores equilibrados e acolhedores."
            }
        ]
    },
    {
        enunciado: "Qual o seu tempero ou ingrediente secreto indispensável ao preparar uma grande refeição?",
        alternativas: [
            {
                texto: "Ervas frescas, pimentas aromáticas e especiarias marcantes.",
                afirmacao: "Adora camadas intensas de aroma e sabores marcantes que despertam todos os sentidos."
            },
            {
                texto: "Azeite de boa qualidade, alho, cebola e uma pitada na medida certa de sal marinho.",
                afirmacao: "Compreende que a verdadeira sofisticação reside na simplicidade e no equilíbrio dos ingredientes básicos."
            }
        ]
    },
    {
        enunciado: "Ao planejar o cardápio da semana para sua casa, qual é a sua prioridade principal?",
        alternativas: [
            {
                texto: "Ingredientes orgânicos, sazonais e de produtores locais focando na sustentabilidade.",
                afirmacao: "Entende a gastronomia como um ato consciente de conexão com a natureza e com o consumo sustentável."
            },
            {
                texto: "Praticidade, pratos saborosos, equilibrados e que economizem tempo de preparo.",
                afirmacao: "Valoriza a eficiência sem abrir mão do sabor, tornando a refeição um momento prático de prazer diário."
            }
        ]
    },
    {
        enunciado: "Para fechar um grande banquete com chave de ouro, qual sobremesa representa melhor sua filosofia gastronômica?",
        alternativas: [
            {
                texto: "Uma sobremesa elaborada com texturas contrastantes, como um soufflé quente com sorvete artesanal.",
                afirmacao: "E acredita que a refeição perfeita deve terminar com uma verdadeira experiência sensorial surpreendente."
            },
            {
                texto: "Um doce tradicional reconfortante, como uma boa torta de maçã ou um pudim aveludado.",
                afirmacao: "E celebra o encerramento do banquete com o calor e o afeto das memórias afetivas da alta doceria."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.innerHTML = `<span>${alternativa.texto}</span> <span style="opacity: 0.6; margin-left: 10px;">➔</span>`;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    if (Array.isArray(afirmacoes)) {
        const afirmacaoSorteada = afirmacoes[Math.floor(Math.random() * afirmacoes.length)];
        historiaFinal += afirmacaoSorteada + " ";
    } else {
        historiaFinal += afirmacoes + " ";
    }

    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final do banquete...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("ativo");
    btnReiniciar.classList.add("ativo");
}

function reiniciarQuiz() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("ativo");
    btnReiniciar.classList.remove("ativo");
    mostraPergunta();
}

btnReiniciar.addEventListener("click", reiniciarQuiz);

// Inicializa o quiz
mostraPergunta();