import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState(""); // For success message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formspreeEndpoint = "https://formspree.io/f/xldjerey";

        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Success! Your message has been sent.");
                setFormData({ firstName: "", email: "", subject: "", message: "" }); // Clear form
            } else {
                setStatus("Oops! Something went wrong.");
            }
        } catch (error) {
            setStatus("Oops! Something went wrong.");
        }

        setTimeout(() => setStatus(""), 3000); // Hide success message after 3 seconds
    };

    return (
        <div className="contact-container">
            <h2>Have Suggestions? Concerns? Contact Me!</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            {status && <p className="success-message">{status}</p>}
        </div>
    );
}

export default ContactForm;
