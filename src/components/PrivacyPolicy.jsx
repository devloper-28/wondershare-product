import React from "react";

const PrivacyPolicy = () => {
    return (
        <div style={styles.container}>
            <h1>Privacy Policy</h1>
            <ul>
                <li>Wondershare values your privacy and ensures data protection.</li>
                <li>Personal information collected is used solely for product functionality and support.</li>
                <li>No user data is shared with third parties without consent.</li>
                <li>Cookies may be used to improve the user experience.</li>
                <li>Users can contact Wondershare to request data removal or modification.</li>
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
    },
};

export default PrivacyPolicy;
