import {SectionTitleWrapper} from "./styles.js";
import {useNavigate} from "react-router-dom";

export function SectionTitle({title, subtitle, subtitleTo}) {
    const navigate = useNavigate();

    return (
        <SectionTitleWrapper>
            <h2>{title}</h2>
            <h5 onClick={() => navigate(subtitleTo)}>{subtitle}</h5>
        </SectionTitleWrapper>
    )
}