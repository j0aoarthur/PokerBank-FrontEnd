import {SubtitleWrapper, TitleWrapper, Wrapper} from "./styles.js";

export function PageTitle({text, subtitle}) {
    return (
        <Wrapper>
            <TitleWrapper>
                {text}
            </TitleWrapper>
            {subtitle && (
                <SubtitleWrapper>
                    {subtitle}
                </SubtitleWrapper>
            )}
        </Wrapper>

    )
}
