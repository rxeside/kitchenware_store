"use client";
import { useState } from "react";

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Отправленные данные:", formData); // Временная логика через консоль
        window.location.href = "/quote-confirmation";
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Имя"
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="tel"
                placeholder="Телефон"
                required
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
                type="text"
                placeholder="Адрес"
                required
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <button type="submit">Отправить запрос</button>
        </form>
    );
}