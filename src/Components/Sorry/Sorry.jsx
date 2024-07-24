import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Sorry.scss";

function Sorry() {
    const navigate = useNavigate();
    const noButtonRef = useRef(null);

    const handleSuccessClick = () => {
        navigate("/success");
    };

    const moveButton = () => {
        const button = noButtonRef.current;
        const container = button.parentElement;

        const containerRect = container.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();

        const maxLeft = containerRect.width - buttonRect.width;
        const maxTop = containerRect.height - buttonRect.height;

        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;

        button.style.left = `${randomLeft}px`;
        button.style.top = `${randomTop}px`;
    };

    return (
        <div className="sorry-container">
            <div className="gif-image">
                <img src="https://media1.giphy.com/media/Lfi2G7BzY15333JtK1/giphy.gif?cid=6c09b952t4c32macs3n3jmiyirf7akhexsol4drb6ifspstl&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="Sorry GIF" />
            </div>
            <div className="text">
                {/* chị oi, em xin lũi mừ. Chị tha lỗi cho em nhaaaa */}
                Xin lỗi mà, Tha lỗi nha
            </div>
            <div className="buttons">
                <button onClick={handleSuccessClick}>okeee nè</button>
                <button ref={noButtonRef} onMouseEnter={moveButton} className="move-button">không</button>
            </div>
        </div>
    );
}

export default Sorry;
