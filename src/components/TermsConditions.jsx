import React from "react";

const TermsConditions = () => {
    return (
        <div style={styles.container}>
            <h1>Terms and Conditions</h1>
            <ul>
                <li>All purchases are subject to applicable laws and regulations.</li>
                <li>The software license is non-transferable and for personal use only.</li>
                <li>Unauthorized copying, sharing, or resale of the software is prohibited.</li>
                <li>Wondershare reserves the right to update these terms at any time.</li>
                <li>Using the product constitutes agreement with these terms.</li>
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

export default TermsConditions;
