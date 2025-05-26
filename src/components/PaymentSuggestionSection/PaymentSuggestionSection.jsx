import {
    PayerReceiverName,
    PaymentArrow,
    PaymentSuggestionContainer,
    PaymentSuggestionItem,
    PaymentSuggestionList,
    SuggestionText
} from "./styles.js";
import {useQuery} from "@tanstack/react-query";
import {getPaymentSuggestion} from "../../services/apiService.js";
import {useEffect, useState} from "react";
import {SectionTitle} from "../SectionTitle/SectionTitle.jsx";
import {formatNumberToBRL} from "../../utils/numberUtils.js";

export function PaymentSuggestionSection({gameId}) {
    const [paymentSuggestions, setPaymentSuggestions] = useState([]);

    const {data} = useQuery({
        queryKey: ["payment-suggestions", gameId], // Adicionado gameId à queryKey para exclusividade
        queryFn: () =>  getPaymentSuggestion(gameId),
        enabled: !!gameId, // A query só será executada se gameId estiver presente
    })

    useEffect(() => {
        if (data) {
            setPaymentSuggestions(data);
        }
    }, [data]);

    if (!paymentSuggestions || paymentSuggestions.length === 0) {
        return (
            <PaymentSuggestionContainer>
                <SectionTitle title={"Sugestões de Pagamento"}/>
                <PaymentSuggestionList>
                    <PaymentSuggestionItem>
                        <SuggestionText>
                            Nenhuma sugestão de pagamento disponível.
                        </SuggestionText>
                    </PaymentSuggestionItem>
                </PaymentSuggestionList>
            </PaymentSuggestionContainer>
        )
    }

    return (
        <PaymentSuggestionContainer>
            <SectionTitle title={"Sugestões de Pagamento"}/>
            <PaymentSuggestionList>
                {paymentSuggestions.map((suggestion) => (
                    <PaymentSuggestionItem key={`${suggestion.payerId}-${suggestion.receiverId}-${suggestion.amount}`}> {/* Chave mais robusta */}
                        <SuggestionText>
                            <PayerReceiverName>{suggestion.payerName}</PayerReceiverName>
                            <PaymentArrow>→</PaymentArrow>
                            <PayerReceiverName>{suggestion.receiverName}</PayerReceiverName>
                            : <span className="amount">{formatNumberToBRL(suggestion.amount)}</span>
                        </SuggestionText>
                    </PaymentSuggestionItem>
                ))}
            </PaymentSuggestionList>
        </PaymentSuggestionContainer>
    )
}