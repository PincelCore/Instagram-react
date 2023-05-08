import { useState } from "react";

export default function User() {
    const [username, setUsername] = useState('catanacomics');
    const [userPic, setUserpic] = useState('assets/img/catanacomics.svg');

    const changeName = () => {
        const name = prompt("Digite um novo nome de usuário: ");
        if (name) {
            setUsername(name);
        }
    }

    const changePic = () => {
        const pic = prompt("Digite um novo link de imagem de perfil: ");
        if (pic) {
            setUserpic(pic);
        }
    }

    return (
        <div class="usuario">
            <img src={userPic} alt="imagem de perfil" onClick={changePic} data-test="profile-image" />
            <div class="texto">
                <span>
                    <strong data-test="name">{username}</strong>
                    <ion-icon name="pencil" onClick={changeName} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    )
}