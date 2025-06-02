import {useNavigate, useParams} from 'react-router-dom';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {getPaymentSuggestion, makePayment} from '../../services/apiService.js';
import {useTitle} from '../../utils/useTitle.js';
import {formatNumberToBRL} from '../../utils/numberUtils.js';

import {MainHeader} from '../../components/MainHeader/MainHeader.jsx';
import {PageTitle} from '../../components/PageTitle/PageTitle.jsx';
import {Button} from '../../components/Button/Button.jsx';
import {NavigationBar} from '../../components/NavigationBar/NavigationBar.jsx';

import {
    MakePaymentPageContainer,
    NoSuggestionsMessage,
    PaymentListItem,
    PaymentsList,
    SuggestionInfo
} from './styles.js';

export function MakePaymentPage({ title }) {
    useTitle(title);
    const { gameId } = useParams();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {
        data: paymentSuggestions = [],
        isError: isErrorSuggestions,
    } = useQuery({
        queryKey: ['paymentSuggestions', gameId],
        queryFn: () => getPaymentSuggestion(gameId),
        enabled: !!gameId,
    });

    const { mutate: processPayment, isPending: isProcessingPayment } = useMutation({
        mutationFn: makePayment,
        onSuccess: () => {
            alert('Pagamento processado com sucesso!');
            queryClient.invalidateQueries(['paymentSuggestions', gameId]);
            queryClient.invalidateQueries(['game', gameId]);
            queryClient.invalidateQueries(['participants', gameId]);
        },
        onError: (error) => {
            console.error("Erro ao processar pagamento:", error);
            const errorMessage = error.response?.data?.message || error.message || "Ocorreu um erro.";
            alert(`Erro ao processar pagamento: ${errorMessage}`);
        }
    });

    const handlePayClick = (suggestion) => {
        if (isProcessingPayment) return;

        const paymentData = {
            gameId: gameId,
            payerId: suggestion.payerId,
            receiverId: suggestion.receiverId,
            amount: suggestion.amount
        };
        processPayment(paymentData);
    };

    if (isErrorSuggestions) {
        return (
            <MakePaymentPageContainer>
                <MainHeader />
                <PageTitle text="Realizar Pagamento" subtitle="Erro ao carregar sugestões." />
                <NoSuggestionsMessage>
                    Não foi possível carregar as sugestões de pagamento. Tente novamente mais tarde.
                </NoSuggestionsMessage>
                <Button onClick={() => navigate(`/game/${gameId}`)} backgroundColor="var(--text-gray-color)">Voltar aos Detalhes da Partida</Button>
                <NavigationBar />
            </MakePaymentPageContainer>
        );
    }

    return (
        <MakePaymentPageContainer>
            <MainHeader />
            <PageTitle text="Realizar Pagamento" subtitle={`Referente à Partida #${gameId}`} />

            {paymentSuggestions.length === 0 ? (
                <NoSuggestionsMessage>
                    Nenhuma sugestão de pagamento disponível para esta partida ou todos os pagamentos foram concluídos.
                </NoSuggestionsMessage>
            ) : (
                <PaymentsList>
                    {paymentSuggestions.map((suggestion, index) => (
                        <PaymentListItem key={`${suggestion.payerId}-${suggestion.receiverId}-${suggestion.amount}-${index}`}>
                            <SuggestionInfo>
                                <span><span className="label">De:</span> <span className="name">{suggestion.payerName}</span></span>
                                <span><span className="label">Para:</span> <span className="name">{suggestion.receiverName}</span></span>
                                <span><span className="label">Valor:</span> <span className="amount">{formatNumberToBRL(suggestion.amount)}</span></span>
                            </SuggestionInfo>
                            <Button
                                onClick={() => handlePayClick(suggestion)}
                                disabled={isProcessingPayment}
                                backgroundColor="var(--green-color)"
                            >
                                {isProcessingPayment ? 'Processando...' : 'Pagar'}
                            </Button>
                        </PaymentListItem>
                    ))}
                </PaymentsList>
            )}
            <Button onClick={() => navigate(`/game/${gameId}`)} >
                Voltar aos Detalhes da Partida
            </Button>
            <NavigationBar />
        </MakePaymentPageContainer>
    );
}