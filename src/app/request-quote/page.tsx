import QuoteForm from "@/components/QuoteForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Запрос КП | Ваш магазин",
};

export default function QuotePage() {
    return (
        <main>
            <QuoteForm />
        </main>
    );
}