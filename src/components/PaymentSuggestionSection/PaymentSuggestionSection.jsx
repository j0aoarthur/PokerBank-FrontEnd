import {PaymentAmount, PaymentArrow, PaymentSuggestionInfo, PaymentSuggestionItemCard, PaymentText} from "./styles.js";
import {useQuery} from "@tanstack/react-query";
import {getPaymentSuggestion} from "../../services/apiService.js";
import React, {useEffect, useState} from "react";
import {formatNumberToBRL} from "../../utils/numberUtils.js";
import {Section} from "../Section/Section.jsx";
import {MdPayment} from "react-icons/md";

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
        <Section title={"Pagamentos"} subtitle={"Pagar"} subtitleTo={"payment"}>
            {paymentSuggestions.length > 0 ? paymentSuggestions.map((suggestion, index) => (
                <PaymentSuggestionItemCard key={index}>
                    <PaymentSuggestionInfo>
                        <MdPayment />
                        <div>
                            <PaymentText>
                                <span>{suggestion.payerName}</span>
                                <PaymentArrow>→</PaymentArrow>
                                <span>{suggestion.receiverName}</span>
                            </PaymentText>
                        </div>
                    </PaymentSuggestionInfo>
                    <PaymentAmount>{formatNumberToBRL(suggestion.amount)}</PaymentAmount>
                </PaymentSuggestionItemCard>
            )): (
                <PaymentSuggestionItemCard>
                    <PaymentSuggestionInfo>
                        <PaymentText>
                            Todos pagamentos foram realizados.
                        </PaymentText>
                    </PaymentSuggestionInfo>
                </PaymentSuggestionItemCard>
            )}
        </Section>
    )
}