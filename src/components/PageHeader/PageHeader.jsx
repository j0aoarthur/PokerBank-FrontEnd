import {AppHeader, HeaderButton, HeaderContent, HeaderTitle} from "./styles.js";
import {MdArrowBackIosNew, MdMoreHoriz} from "react-icons/md";
import React from "react";
import {useNavigate} from "react-router-dom";

export function PageHeader({ title, onMore }) {
    const navigate = useNavigate();
    return (
        <AppHeader>
            <HeaderContent>
                <HeaderButton onClick={() => navigate(-1)} aria-label="Back">
                    <MdArrowBackIosNew size={20} />
                </HeaderButton>
                <HeaderTitle>{title}</HeaderTitle>
                <HeaderButton
                    onClick={onMore}
                    aria-label="More options"
                    style={{ visibility: onMore ? 'visible' : 'hidden' }}
                    disabled={!onMore}
                >
                    <MdMoreHoriz size={24}/>
                </HeaderButton>
            </HeaderContent>
        </AppHeader>
    )
}
