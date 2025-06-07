import React from 'react';
import {
    AmountText,
    FullWidthButton,
    MainContent,
    PageSubtitle,
    PageTitle,
    PayButton,
    PaymentCard,
    PaymentCardActions,
    PaymentCardInfo,
    PaymentCardsContainer,
    StickyFooter
} from './styles';
import {MakePaymentPageContainer} from "./styles.js";
import {PageHeader} from "../../components/PageHeader/PageHeader.jsx";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getGameDetails, getPaymentSuggestion, makePayment} from "../../services/apiService.js";
import {formatFullDate} from "../../utils/dateUtils.js";

export function MakePaymentPage() {
    const { gameId } = useParams();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { data: paymentSuggestions = [] } = useQuery({
        queryKey: ['paymentSuggestions', gameId],
        queryFn: () => getPaymentSuggestion(gameId),
        enabled: !!gameId,
    });

    const { data: gameDetailsData } = useQuery({
        queryKey: ["gameDetails", gameId],
        queryFn: () => getGameDetails(gameId)
    });

    const { mutate: processPayment, isPending: isProcessingPayment } = useMutation({
        mutationFn: makePayment,
        onSuccess: () => {
            alert('Pagamento processado com sucesso!');
            queryClient.invalidateQueries({ queryKey: ['paymentSuggestions', gameId] });
            queryClient.invalidateQueries({ queryKey: ["gameDetails", gameId] });
            queryClient.invalidateQueries({ queryKey: ['participants', gameId] });
        },
        onError: (error) => {
            console.error("Erro ao processar pagamento:", error);
            const errorMessage = error.response?.data?.message || error.message || "Ocorreu um erro.";
            alert(`Erro ao processar pagamento: ${errorMessage}`);
        }
    });

    const handlePay = (suggestion) => {
        if (isProcessingPayment || !suggestion) return;

        const paymentData = {
            gameId: gameId,
            payerId: suggestion.payerId,
            receiverId: suggestion.receiverId,
            amount: suggestion.amount
        };
        processPayment(paymentData);
    };

    return (
        <MakePaymentPageContainer>
            <PageHeader title={"Pagamento"}/>
            <MainContent>
                <PageTitle>Realizar Pagamento</PageTitle>
                <PageSubtitle>Partida: {gameDetailsData && formatFullDate(gameDetailsData?.date)}</PageSubtitle>

                <PaymentCardsContainer>
                    {paymentSuggestions && paymentSuggestions.length > 0 ? (paymentSuggestions.map((suggestion, index) => (
                            <PaymentCard key={`${suggestion.payerId}-${suggestion.receiverId}-${suggestion.amount}-${index}`}>
                                <PaymentCardInfo>
                                    <div>
                                        <p>De: <span>{suggestion.payerName}</span></p>
                                        <p>Para: <span>{suggestion.receiverName}</span></p>
                                    </div>
                                </PaymentCardInfo>
                                <PaymentCardActions>
                                    <AmountText>Valor: <span>{formatNumberToBRL(suggestion.amount)}</span></AmountText>
                                    <PayButton onClick={() => handlePay(suggestion)}>
                                        Pagar
                                    </PayButton>
                                </PaymentCardActions>
                            </PaymentCard>
                        ))
                    ) : (
                        // Adicionar verificação para estado de carregamento das sugestões também, se necessário
                        <p>Sem pagamentos pendentes ou carregando sugestões...</p>
                    )}
                </PaymentCardsContainer>
            </MainContent>
            <StickyFooter>
                <FullWidthButton onClick={() => navigate(`/game/${gameDetailsData?.gameId}`)}>
                    Voltar aos Detalhes da Partida
                </FullWidthButton>
            </StickyFooter>
        </MakePaymentPageContainer>
    );
}