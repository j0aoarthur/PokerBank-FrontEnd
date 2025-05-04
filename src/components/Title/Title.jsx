import {SubtitleWrapper, TitleWrapper, Wrapper} from "./styles.js";

export function Title({text, subtitle}) {
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
