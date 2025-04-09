import React from "react";
import ContactForm from "./CamaroForm.jsx"; // Import the contact form component

function Footer() {
    return (
        <footer className="camaro-footer">
            <ContactForm />
            <a target="_blank" href={"https://www.surkhabmundi.com"}>
                <h3>
                    Visit my personal site here!
                </h3>
            </a>

            <a target="_blank" className="creditfooter" href={"https://docs.google.com/document/d/e/2PACX-1vSN7jv6h7ofg5tsJQEaAX7T6YnsTHgH2KqoWQC4L4-qdDSMZwrbGCo_xh9mMSQvmVqX4VtASQiiHaOV/pub"}>
                <h3>
                    View the full credits here!
                </h3>
            </a>

            <p>
                Camaro is a registered trademark of General Motors. This site is not affiliated with,
                sponsored by, or endorsed by Chevrolet or General Motors. All images are the property
                of their respective owners.
            </p>


        </footer>
    );
}

export default Footer;
