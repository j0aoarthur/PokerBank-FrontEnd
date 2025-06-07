import {SectionContainer, SectionHeader, SectionSubtitle, SectionTitle} from "./styles.js";
import {useNavigate} from "react-router-dom";

export function Section({title, subtitle, subtitleTo, children, className}) {
    const navigate = useNavigate();

    return (
        <SectionContainer className={className}>
            <SectionHeader>
                <SectionTitle>{title}</SectionTitle>
                {subtitle && (
                    <SectionSubtitle onClick={() => navigate(subtitleTo)}>
                        {subtitle}
                    </SectionSubtitle>
                )}
            </SectionHeader>
            {children}
        </SectionContainer>
    )
}
