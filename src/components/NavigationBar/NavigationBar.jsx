import {FooterNav, NavLink} from "./styles.js";
import React from "react";
import {MdOutlineGroup, MdOutlineHome, MdOutlineSettings, MdStyle} from "react-icons/md";
import {useNavigate} from "react-router-dom";

const navItems = [
    { id: 'home', label: 'Home', IconComponent: MdOutlineHome, href: '/' },
    { id: 'games', label: 'Partidas', IconComponent: MdStyle, href: '/games' },
    { id: 'ranking', label: 'Ranking', IconComponent: MdOutlineGroup, href: '/ranking' },
    { id: 'admin', label: 'Admin', IconComponent: MdOutlineSettings, href: '/admin'},
];

export function NavigationBar({ activePage }) {
    const navigate = useNavigate();
    return (
        <FooterNav>
            {navItems.map(item => (
                <NavLink key={item.id} onClick={() => navigate(item.href)} $active={activePage === item.id}>
                    <item.IconComponent />
                    <p>{item.label}</p>
                </NavLink>
            ))}
        </FooterNav>
    );
}