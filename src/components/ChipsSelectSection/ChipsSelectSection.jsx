import {NumberInput} from "../NumberInput/NumberInput.jsx";
import {ChipSelect, ChipsSection, SectionWrapper} from "./styles.js";
import {getChips} from "../../services/apiService.js";
import {useQuery} from "@tanstack/react-query";
import capitalize from "antd/es/_util/capitalize.js";

export function ChipsSelectSection({onChange, chipsData = []}) {

    const { data: availableChips = [] } = useQuery({
        queryKey: ['chips'],
        queryFn: getChips
    });

    return (
        <SectionWrapper>
            <h2>Fichas</h2>
            <ChipsSection>
                {availableChips && availableChips.map(chip => {
                    const existingChipData = chipsData.find(cd => cd.chipId === chip.id);
                    const initialQuantity = existingChipData ? existingChipData.quantity : 0;
                    return (
                        <ChipSelect key={chip.id}>
                            <h3>{capitalize(chip.color)}</h3>
                            <NumberInput initial={initialQuantity} onChange={(value) => onChange(chip.id, value)}/>
                        </ChipSelect>
                    );
                })}
            </ChipsSection>
        </SectionWrapper>
    );
}