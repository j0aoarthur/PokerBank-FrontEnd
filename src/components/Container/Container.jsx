import {Outlet} from "react-router-dom";
import {ContainerWrapper} from "./styles.jsx";

export function Container() {
    return (
        <ContainerWrapper>
            <Outlet/>
        </ContainerWrapper>
    )
}