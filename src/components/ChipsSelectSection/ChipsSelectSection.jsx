import {NumberInput} from "../NumberInput/NumberInput.jsx";
import {ChipSelect, ChipsSection, SectionWrapper} from "./styles.js";

export function ChipsSelectSection({onChange}) {
    return (
        <SectionWrapper>
            <h2>Fichas</h2>
            <ChipsSection>
                <ChipSelect>
                    <h3>Pretas</h3>
                    <NumberInput onChange={(value) => onChange(1, value)} />
                </ChipSelect>
                <ChipSelect>
                    <h3>Verdes</h3>
                    <NumberInput onChange={(value) => onChange(2, value)} />
                </ChipSelect>
                <ChipSelect>
                    <h3>Azuis</h3>
                    <NumberInput onChange={(value) => onChange(3, value)} />
                </ChipSelect>
                <ChipSelect>
                    <h3>Amarelas</h3>
                    <NumberInput onChange={(value) => onChange(4, value)} />
                </ChipSelect>
                <ChipSelect>
                    <h3>Vermelhas</h3>
                    <NumberInput onChange={(value) => onChange(5, value)} />
                </ChipSelect>
            </ChipsSection>
        </SectionWrapper>
    )
}
