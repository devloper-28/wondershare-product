import React from "react";

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <button

                onClick={() => {
                    window.open("https://t.me/WeRTrends_admin", "_blank");
                }}
            >
                Contact Admin
            </button>
        </div>
    );
};

export default ContactUs;
