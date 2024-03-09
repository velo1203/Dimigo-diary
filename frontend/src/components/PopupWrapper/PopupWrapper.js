import React, { useRef, useEffect } from "react";
import {
    StyledPopupBackground,
    StyledPopupContent,
} from "../../style/layout/StyledPopupWrapper";

const PopupWrapper = ({ children, onClose }) => {
    const popupRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        // 이벤트 리스너 등록
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <StyledPopupBackground>
            <StyledPopupContent ref={popupRef}>{children}</StyledPopupContent>
        </StyledPopupBackground>
    );
};

export default PopupWrapper;
