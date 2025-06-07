import {useTitle} from "../../utils/useTitle.js";
import {useAdminForm} from "./useAdminForm.js";
import {
    AdminPageContainer,
    Card,
    ChipColorSwatch,
    ChipInfoContainer,
    Hr,
    InputField,
    ItemList,
    ItemText,
    Label,
    ListHeader,
    ListItem,
    MainContent,
    SubmitButton
} from "./styles.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import capitalize from "antd/es/_util/capitalize.js";
import {PageHeader} from "../../components/PageHeader/PageHeader.jsx";
import {Section} from "../../components/Section/Section.jsx";
import React from "react";

export function AdminPage({ title }) {
    useTitle(title);
    const {
        id,
        newPlayerName,
        handlePlayerNameChange,
        newChipName,
        newChipValue,
        newChipColor,
        handleNewChipNameChange,
        handleNewChipValueChange,
        handleNewChipColorChange,
        existingChips,
        existingPlayers,
        handleAddPlayer,
        isCreatingPlayer,
        handleAddChip,
        isAddingChip
    } = useAdminForm();

    return (
        <AdminPageContainer>
            <PageHeader title={"Administração"}/>
            <MainContent>
                <Section title={"Gerenciar Jogadores"}>
                    <Card>
                        <div>
                            <Label htmlFor={id + '-player'}>Nome do Jogador</Label>
                            <InputField
                                id={id + '-player'}
                                type="text"
                                placeholder="Digite o nome do novo jogador"
                                value={newPlayerName}
                                onChange={handlePlayerNameChange}
                            />
                        </div>
                        <SubmitButton onClick={handleAddPlayer} disabled={isCreatingPlayer}>
                            {isCreatingPlayer ? "Salvando..." : "Adicionar Jogador"}
                        </SubmitButton>
                    </Card>
                    <Card>
                        <ListHeader>Jogadores</ListHeader>
                        <ItemList>
                            {existingPlayers ? (
                                existingPlayers.map(player => (
                                    <ListItem key={player.id}>
                                        <ItemText>{player.name}</ItemText>
                                    </ListItem>
                                ))
                            ) : (
                                <ListItem>
                                    <ItemText>Nenhum jogador cadastrado.</ItemText>
                                </ListItem>
                            )}
                        </ItemList>
                    </Card>
                </Section>

                <Hr />

                <Section title={"Gerenciar Fichas"}>
                    <Card>
                        <div>
                            <Label htmlFor={id + 'chip-name'}>Cor da ficha</Label>
                            <InputField
                                id={id + 'chip-name'}
                                type="text"
                                placeholder="Ex. Vermelha, Azul"
                                value={newChipName}
                                onChange={handleNewChipNameChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor={id + 'chip-value'}>Valor da ficha (R$)</Label>
                            <InputField
                                id={id + 'chip-value'}
                                type="number"
                                placeholder="Digite o valor da ficha"
                                value={newChipValue}
                                onChange={handleNewChipValueChange}
                            />
                        </div>
                        <div>
                            <Label htmlFor={id + 'chip-color'}>Cor da ficha</Label>
                            <InputField
                                id={id + 'chip-color'}
                                type="text"
                                placeholder="Ex. #FF0000, #0000FF"
                                value={newChipColor}
                                onChange={handleNewChipColorChange}
                                maxLength={7}
                            />
                        </div>
                        <SubmitButton onClick={handleAddChip} disabled={isAddingChip}>
                            {isAddingChip ? "Adicionando..." : "Adicionar Ficha"}
                        </SubmitButton>
                    </Card>
                    <Card>
                        <ListHeader>Tipos de Fichas</ListHeader>
                        <ItemList>
                            {existingChips ? (
                                existingChips.map(chip => (
                                    <ListItem key={chip.id}>
                                        <ChipInfoContainer>
                                            <ChipColorSwatch color={chip.colorHex} />
                                            <ItemText>{capitalize(chip.color)} - {formatNumberToBRL(chip.value)}</ItemText>
                                        </ChipInfoContainer>
                                    </ListItem>
                                ))
                            ) : (
                                <ListItem>
                                    <ItemText>Nenhuma ficha cadastrada.</ItemText>
                                </ListItem>
                            )}
                        </ItemList>
                    </Card>
                </Section>
            </MainContent>
        </AdminPageContainer>
    );
}