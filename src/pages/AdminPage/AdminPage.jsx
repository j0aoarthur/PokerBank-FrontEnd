import {Input} from 'antd';
import {MainHeader} from "../../components/MainHeader/MainHeader.jsx";
import {PageTitle} from "../../components/PageTitle/PageTitle.jsx";
import {Button} from "../../components/Button/Button.jsx";
import {SectionTitle} from "../../components/SectionTitle/SectionTitle.jsx";
import {useTitle} from "../../utils/useTitle.js";
import {useAdminForm} from "./useAdminForm.js";
import {
    AdminPageContainer,
    AdminSection,
    ChipListContainer,
    ChipListItem,
    FormWrapper,
    InputWrapper
} from "./styles.js";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import capitalize from "antd/es/_util/capitalize.js";
import {NavigationBar} from "../../components/NavigationBar/NavigationBar.jsx";

export function AdminPage({ title }) {
    useTitle(title);
    const {
        newPlayerName,
        handlePlayerNameChange,
        newChipName,
        newChipValue,
        handleNewChipNameChange,
        handleNewChipValueChange,
        existingChips,
        handleAddPlayerSubmit,
        isCreatingPlayer,
        handleAddChipSubmit,
        isAddingChip
    } = useAdminForm();

    return (
        <AdminPageContainer>
            <MainHeader />
            <PageTitle text="Administração" subtitle="Gerenciar jogadores e fichas" />

            <AdminSection>
                <SectionTitle title="Cadastrar Novo Jogador" />
                <FormWrapper>
                    <InputWrapper>
                        <label htmlFor="newPlayerName">Nome do Jogador<span> *</span></label>
                        <Input
                            id="newPlayerName"
                            placeholder="Digite o nome do novo jogador"
                            value={newPlayerName}
                            onChange={handlePlayerNameChange}
                            size="large"
                        />
                    </InputWrapper>
                    <Button onClick={handleAddPlayerSubmit} disabled={isCreatingPlayer}>
                        {isCreatingPlayer ? "Salvando..." : "Cadastrar Jogador"}
                    </Button>
                </FormWrapper>
            </AdminSection>

            <AdminSection>
                <SectionTitle title="Gerenciar Fichas" />
                <FormWrapper>
                    <InputWrapper>
                        <label htmlFor="newChipName">Nome da Cor da Ficha<span> *</span></label>
                        <Input
                            id="newChipName"
                            placeholder="Ex: Roxa, Laranja"
                            value={newChipName}
                            onChange={handleNewChipNameChange}
                            size="large"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="newChipValue">Valor da Ficha<span> *</span></label>
                        <Input
                            id="newChipValue"
                            addonBefore="R$"
                            placeholder="100.00"
                            value={newChipValue}
                            onChange={handleNewChipValueChange}
                            inputMode="decimal"
                            size="large"
                        />
                    </InputWrapper>
                    <Button onClick={handleAddChipSubmit} disabled={isAddingChip}>
                        {isAddingChip ? "Adicionando..." : "Adicionar Ficha"}
                    </Button>
                </FormWrapper>

                <SectionTitle title="Fichas Cadastradas" />
                {existingChips ? (
                    <ChipListContainer>
                        {existingChips.map(chip => (
                            <ChipListItem key={chip.id}>
                                <span>{capitalize(chip.color)}</span>
                                <span>{formatNumberToBRL(chip.value)}</span>
                            </ChipListItem>
                        ))}
                    </ChipListContainer>
                ) : <p>Nenhuma ficha cadastrada.</p>}
            </AdminSection>
            <NavigationBar activePage={"admin"} />
        </AdminPageContainer>
    );
}