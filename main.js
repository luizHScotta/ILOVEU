function sortearFrase() {
    const frases = [
        "Você me faz sentir bem quando está do meu lado.",
        "Você me faz querer te proteger.",
        "Você é uma pessoa forte, o que me faz sentir seguro.",
        "Você é determinada.",
        "Você é a mulher mais linda que eu já vi .",
        "Você é muito elegante.",
        "Você sempre tenta me incentivar a ser melhor.",
        "Você ama a Deus.",
        "Você tem visão de futuro.",
        "você tem um ótimo gosto musical.",
        "Você é cuidadosa.",
        "Você super prendada (parece que consegue fazer qualquer coisa).",
        "O seu carinho é tão bom.",
        "Eu te amo porque admiro muito a pessoa que você é.",
        "Eu amo os passos desengonçados quando dançamos juntos.",
        "Amo quando você corre igual o Naruto.",
        "Amo quando você é espontânea.",
        "Eu te amo porque eu posso ser exatamente quem eu sou quando estou com você.",
        "Eu amo o seu cheiro.",
        "Eu amo fazer planos futuros com você .",
        "Você é o presente que Deus reservou para mim.",
        "Eu amo a sua voz (principalmente quando me chama de amor).",
        "Eu amo contar com a sua companhia.",
        "Eu te amo porque quando eu te conheci você me fez sentir como é estar apaixonado como eu nunca senti.",
        "Eu te amo porque você me ensinou como é amar alguém e ser amado de volta.",
        "Eu te amo porque você me faz querer ser um homem melhor.",
        "Eu te amo porque você me faz imaginar uma família com você.",
        "Eu te amo porque você me ajuda a me aproximar de Deus.",
        "Eu te amo porque você sempre puxa minha orelha se achar que estou indo pelo caminho errado.",
        "Eu amo que você me ensinou o que é um namoro de verdade.",
        "Eu amo que você consegue me mostrar alegria como uma criança, mesmo que seja a pessoa mais adulta que eu conheço  .",
        "Eu amo o quanto amadureci com o nosso relacionamento.",
        "Eu te amo porque você nunca desistiu da gente mesmo nos dias difíceis.",
        "Eu te amo porque você me ensina diariamente como agir na vida.",
        "Eu amo dormir de conchinha com você (mesmo que a gente nunca acorde de conchinha) .",
        "Eu amo que a gente vê series juntos.",
        "Eu amo que a cada dia temos mais intimidade.",
        "Eu amo que a cada dia sinto que nossa relação melhora.",
        "Eu amo que posso passar todo tempo do mundo do teu lado, sem cansar.",
        "Eu amo a sua capacidade de me distrair e me fazer parar de pensar nos meus problemas.",
        "Eu amo que sinto saudade de você sempre, não pela saudade, mas por lembrar dos momentos bons mesmo quando a gente tá longe.",
        "Eu amo beijar você.",
        "Eu amo que você é meu porto seguro.",
        "Eu amo que tudo me faz lembrar de você.",
        "Como você me faz rir.",
        "Eu amo que só de estar com você qualquer momento é especial.",
        "Eu amo que posso falar meus medos e inseguranças com você.",
        "Amo que você é uma Mulher Virtuosa.",
        "Amo orar junto com você.",
        "Amo que você nunca duvida de mim.",
        "Amo que temos mais planos juntos do que tempo para fazer tudo haha.",
        "Amo ler para você.",
        "Amo que a gente faz de tudo para sentir que o outro está perto, nem que seja encostar a ponta do dedinho.",
        "amo que você me escuta e demonstra interesse mesmo não tendo ideia sobre o que eu to falando. ",
        "Gosto de como a gente consegue lidar com os problemas. ",
        "Eu gosto de como a gente fica quando tá junto.",
        "Gosto como você acha todas as flores lindas",
        "Gosto de como você é simples",
        "Amo o quanto aprendo com você",
        "Amo que me sinto completo com você"
    ];

    const indice = Math.floor(Math.random() * frases.length);
    const fraseSorteada = frases[indice];

    document.getElementById("mensagem").textContent = fraseSorteada;
    
}