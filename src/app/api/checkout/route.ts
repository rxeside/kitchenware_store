import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, lastName, address, town, country, phone, notes } = body;

        if (!email) {
            return new Response(JSON.stringify({ message: "Email обязателен" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Подтверждение заказа",
            html: `
                <h1>Здравствуйте, ${firstName}!</h1>
                <p>Спасибо за ваш заказ. Товар придёт в течении 2х рабочих дней на указанный адрес. Благодарим за ожидание.</p>
                <p><strong>Адрес:</strong> ${address}, ${town}, ${country}</p>
                <p><strong>Телефон:</strong> ${phone}</p>
                <p><strong>Примечания:</strong> ${notes || "Нет"}</p>
            `,
        });

        return new Response(JSON.stringify({ message: "Email отправлен" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Ошибка при отправке email:", error);

        return new Response(JSON.stringify({ message: "Ошибка при отправке email", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
