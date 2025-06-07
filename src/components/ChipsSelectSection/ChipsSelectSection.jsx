import {ChipQuantityControl} from "../ChipQuantityControl/ChipQuantityControl.jsx";
import {ChipColorIndicator, ChipInfo, ChipName, ChipSelect, ChipsSection, ChipValue} from "./styles.js";
import {getChips} from "../../services/apiService.js";
import {useQuery} from "@tanstack/react-query";
import capitalize from "antd/es/_util/capitalize.js";
import React from "react";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {Section} from "../Section/Section.jsx";

export function ChipsSelectSection({onChange, chipsData = []}) {

    const { data: availableChips = [] } = useQuery({
        queryKey: ['chips'],
        queryFn: getChips
    });

    return (
        <Section title={"Fichas"}>
            <ChipsSection>
                {availableChips && availableChips.map(chip => {
                    const existingChipData = chipsData.find(cd => cd.chipId === chip.id);
                    const initialQuantity = existingChipData ? existingChipData.quantity : 0;
                    return (
                        <ChipSelect key={chip.id}>
                            <ChipInfo>
                                <ChipColorIndicator color={chip.colorHex} />
                                <div>
                                    <ChipName>{capitalize(chip.color)}</ChipName>
                                    <ChipValue>{formatNumberToBRL(chip.value)}</ChipValue>
                                </div>
                            </ChipInfo>
                            <ChipQuantityControl initial={initialQuantity} onChange={(value) => onChange(chip.id, value)}/>
                        </ChipSelect>
                    );
                })}
            </ChipsSection>
        </Section>
    );
}