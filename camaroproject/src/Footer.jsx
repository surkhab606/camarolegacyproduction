import React from "react";
import ContactForm from "./CamaroForm.jsx"; // Import the contact form component

function Footer() {
    return (
        <footer className="camaro-footer">
            <ContactForm />
            <p>
                Camaro is a registered trademark of General Motors. This site is not affiliated with,
                sponsored by, or endorsed by Chevrolet or General Motors. All images are the property
                of their respective owners.
            </p>
        </footer>
    );
}

export default Footer;
