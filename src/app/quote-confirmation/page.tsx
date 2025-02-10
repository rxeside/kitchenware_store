import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Подтверждение запроса",
};

export default function ConfirmationPage() {
    return (
        <main>
            <h1>Спасибо за ваш запрос!</h1>
            <p>КП придёт в течение 2 рабочих дней на указанный адрес.</p>
        </main>
    );
}