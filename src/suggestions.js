function Suggestion({ imagemUsuario, nome, razao }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imagemUsuario} alt={nome} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Suggestions() {
    const sugestoes = [
        {
            imagemUsuario: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            razao: "Segue você",
        },
        {
            imagemUsuario: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            razao: "Segue você",
        },
        {
            imagemUsuario: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            razao: "Novo no Instagram",
        },
        {
            imagemUsuario: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            razao: "Segue você",
        },
        {
            imagemUsuario: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            razao: "Segue você",
        },
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map((sugestao, index) => (
                <Suggestion
                    key={index}
                    imagemUsuario={sugestao.imagemUsuario}
                    nome={sugestao.nome}
                    razao={sugestao.razao}
                />
            ))}
        </div>
    )
}
