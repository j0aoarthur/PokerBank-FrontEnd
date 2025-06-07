import {Outlet, useLocation} from "react-router-dom";
import {ContainerWrapper} from "./styles.js";
import {NavigationBar} from "../NavigationBar/NavigationBar.jsx";
import {Footer} from "../Footer/Footer.jsx";

const navItemsForLookup = [
    { id: 'home', href: '/' },
    { id: 'games', href: '/games' },
    { id: 'ranking', href: '/ranking' },
    { id: 'admin', href: '/admin'},
];

export function Container() {
    const location = useLocation();
    const currentPath = location.pathname;

    let activePageId = '';

    const activeNavItem = navItemsForLookup.find(item => {
        if (item.href === '/') {
            return currentPath === item.href;
        }
        return currentPath.startsWith(item.href);
    });

    if (activeNavItem) {
        activePageId = activeNavItem.id;
    }

    return (
        <ContainerWrapper>
            <Outlet/>
            <Footer>
                <NavigationBar activePage={activePageId} />
            </Footer>
        </ContainerWrapper>
    );
}