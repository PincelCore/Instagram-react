import { useState } from "react";

function BookmarkIcon({ isFilled, setIsFilled }) {
    return (
        <ion-icon
            name={isFilled ? "bookmark" : "bookmark-outline"}
            onClick={() => setIsFilled(!isFilled)}
        ></ion-icon>
    );
}
function LikePost({ isLiked, setIsLiked, likeNumber, setLikeNumber }) {
    const handleClick = () => {
        setIsLiked(!isLiked);
        setLikeNumber(isLiked ? likeNumber - 1 : likeNumber + 1);
    };

    const iconClass = isLiked ? "liked" : "";

    return (
        <ion-icon
            name={isLiked ? "heart" : "heart-outline"}
            onClick={handleClick}
            className={iconClass} data-test="like-post"
        ></ion-icon>
    );
}
const posts = [
    {
        usuario: "mylittlepony",
        imagemUsuario: "assets/img/m.png",
        imagemConteudo: "assets/img/mylittlepony.png",
        curtidoPor: { nome: "pinkiepie", imagem: "assets/img/download.jpeg" },
        numeroLikes: 6656991,
    },
    {
        usuario: "meowed",
        imagemUsuario: "assets/img/meowed.svg",
        imagemConteudo: "assets/img/gato-telefone.svg",
        curtidoPor: { nome: "respondeai", imagem: "assets/img/respondeai.svg" },
        numeroLikes: 101523,
    },
    {
        usuario: "barked",
        imagemUsuario: "assets/img/barked.svg",
        imagemConteudo: "assets/img/dog.svg",
        curtidoPor: { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg" },
        numeroLikes: 99159,
    },
];

export default function Posts() {
    return (
        <div>
            {posts.map((post, index) => (
                <Post post={post} key={index} />
            ))}
        </div>
    );
}

function Post({ post }) {
    const [isFilled, setIsFilled] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [likeNumber, setLikeNumber] = useState(post.numeroLikes);
    const [showHeart, setShowHeart] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(true);
        setShowHeart(true);
        setTimeout(() => {
            setShowHeart(false);
        });
        setLikeNumber(isLiked ? likeNumber : likeNumber + 1);
    };

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={post.imagemUsuario} alt={post.usuario} />
                    {post.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={post.imagemConteudo} onDoubleClick={handleLikeClick} data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div className="flex">
                        <div className="heart-container">
                            <LikePost isLiked={isLiked} setIsLiked={setIsLiked} likeNumber={likeNumber} setLikeNumber={setLikeNumber} />
                        </div>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <BookmarkIcon isFilled={isFilled} setIsFilled={setIsFilled} data-test="save-post" />
                    </div>
                </div>

                <div className="curtidas">
                    <img src={post.curtidoPor.imagem} alt={post.curtidoPor.nome} />
                    <div className="texto">
                        Curtido por <strong>{post.curtidoPor.nome}</strong> e <strong data-test="likes-number">outras {likeNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}


