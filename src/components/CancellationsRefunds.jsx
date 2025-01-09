import React from "react";

const CancellationsRefunds = () => {
    return (
        <div style={styles.container}>
            <h1>Cancellations and Refunds</h1>
            <ul>
                <li>Refund requests must be submitted within 1 days of purchase.</li>
                <li>Refunds are only applicable for products purchased directly from Wondershare.</li>
                <li>Products with activation issues due to technical limitations are eligible for a refund.</li>
                <li>Refunds will not be issued for customer negligence or misunderstanding of product features.</li>
                <li>Subscription cancellations must be made before the renewal date to avoid charges.</li>
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

export default CancellationsRefunds;
