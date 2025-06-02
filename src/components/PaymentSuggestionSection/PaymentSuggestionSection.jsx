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

    return (
        <PaymentSuggestionContainer>
            <SectionTitle title={"Pagamentos"} subtitle={"Pagar"} subtitleTo={"payment"}/>
            <PaymentSuggestionList>
                {paymentSuggestions.length > 0 ? paymentSuggestions.map((suggestion) => (
                    <PaymentSuggestionItem key={`${suggestion.payerId}-${suggestion.receiverId}-${suggestion.amount}`}> {/* Chave mais robusta */}
                        <SuggestionText>
                            <PayerReceiverName>{suggestion.payerName}</PayerReceiverName>
                            <PaymentArrow>→</PaymentArrow>
                            <PayerReceiverName>{suggestion.receiverName}</PayerReceiverName>
                            : <span className="amount">{formatNumberToBRL(suggestion.amount)}</span>
                        </SuggestionText>
                    </PaymentSuggestionItem>
                )) : <PaymentSuggestionItem>
                    <SuggestionText>
                        Todos pagamentos foram realizados.
                    </SuggestionText>
                </PaymentSuggestionItem>
                }
            </PaymentSuggestionList>
        </PaymentSuggestionContainer>
    )
}