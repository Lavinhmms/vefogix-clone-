export default function RefundPolicy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Refund Policy</h1>
          <p>Our policy regarding order cancellations, refunds, and chargebacks on the Vefogix platform.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, margin: "auto" }}>
          <h2>Order Cancellation</h2>
          <p>
            Buyers may cancel an order within 24 hours of placement for a full refund, provided the publisher
            has not yet begun work on the guest post. After 24 hours or if the publisher has already started
            processing the order, cancellation is subject to the publisher's discretion and may incur a
            processing fee of up to 15% of the order value.
          </p>

          <h2>Refund Eligibility</h2>
          <p>
            Refunds are issued if the publisher fails to publish the guest post within the agreed timeframe,
            the published content does not match the agreed specifications, or the website violates our quality
            standards. Refund requests must be submitted within 14 days of the expected publication date.
            Delays caused by the buyer, including late content submission, may void refund eligibility.
          </p>

          <h2>Refund Process</h2>
          <p>
            To request a refund, open a dispute through your order dashboard or contact our support team at
            support@vefogix.com. Our team will review the case and mediate between buyer and publisher.
            Approved refunds are processed within 5-10 business days and returned to the original payment
            method. Platform fees are non-refundable.
          </p>

          <h2>Chargebacks</h2>
          <p>
            Initiating a chargeback without first attempting to resolve the issue through our dispute process
            may result in permanent account suspension. If a chargeback is filed, we reserve the right to
            dispute it and provide transaction records to the payment processor. Buyers who abuse the
            chargeback process may be banned from the platform.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about this Refund Policy or to initiate a refund request, please reach out to our
            support team at support@vefogix.com. We aim to respond to all inquiries within 24 hours during
            business days and will work diligently to resolve any issues fairly and promptly.
          </p>
        </div>
      </section>
    </>
  );
}
