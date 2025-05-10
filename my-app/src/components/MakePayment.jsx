import React, { useState, useEffect } from 'react';

const MakePayment = () => {
    const [activeTab, setActiveTab] = useState('cards');

    return (
        <div>
            <div className="row">
                <div className="col-md-7">
                    <h3>Complete Your Payment</h3>
                    <div className="booking-summary mb-4">
                        <h5>Booking Summary</h5>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span>Flight: Delhi to Paris</span>
                                    <span className="booking-detail">AI-309</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span>Date</span>
                                    <span className="booking-detail">Nov 15, 2023</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span>Passengers</span>
                                    <span className="booking-detail">2 Adults</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span>Base Fare</span>
                                    <span className="booking-detail">₹85,000</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <span>Taxes &amp; Fees</span>
                                    <span className="booking-detail">₹15,000</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center fw-bold">
                                    <span>Total Amount</span>
                                    <span className="booking-detail total-amount">₹1,00,000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Payment Method Selection */}
                    <div className="payment-methods mb-4">
                        <h5>Select Payment Method</h5>
                        <div className="payment-method-tabs">
                            <ul className="nav nav-pills mb-3" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'cards' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('cards')}
                                        type="button"
                                    >
                                        <i className="fas fa-credit-card me-1" /> Cards
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'upi' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('upi')}
                                        type="button"
                                    >
                                        <i className="fas fa-mobile-alt me-1" /> UPI
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'wallets' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('wallets')}
                                        type="button"
                                    >
                                        <i className="fas fa-wallet me-1" /> Wallets
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className={`nav-link ${activeTab === 'bnpl' ? 'active' : ''}`}
                                        onClick={() => setActiveTab('bnpl')}
                                        type="button"
                                    >
                                        <i className="fas fa-hourglass-half me-1" /> BNPL
                                    </button>
                                </li>
                            </ul>

                            <div>
                                {activeTab === 'cards' && (
                                    <div className="tab-pane active">
                                        <form id="cardPaymentForm">
                                            <div className="mb-3">
                                                <label htmlFor="cardholderName" className="form-label">
                                                    Cardholder Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cardholderName"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">Please enter cardholder name.</div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="cardNumber" className="form-label">
                                                    Card Number
                                                </label>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cardNumber"
                                                        placeholder="1234 5678 9012 3456"
                                                        required=""
                                                    />
                                                    <span className="input-group-text">
                                                        <i className="fab fa-cc-visa me-1" />
                                                        <i className="fab fa-cc-mastercard me-1" />
                                                        <i className="fab fa-cc-amex" />
                                                    </span>
                                                </div>
                                                <div className="invalid-feedback">Please enter a valid card number.</div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label htmlFor="expiryDate" className="form-label">
                                                        Expiry Date
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="expiryDate"
                                                        placeholder="MM/YY"
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">Please enter expiry date.</div>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="cvv" className="form-label">
                                                        CVV
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="cvv"
                                                        placeholder={123}
                                                        required=""
                                                    />
                                                    <div className="invalid-feedback">Please enter CVV.</div>
                                                </div>
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input" id="saveCard" />
                                                <label className="form-check-label" htmlFor="saveCard">
                                                    Save this card for future transactions
                                                </label>
                                            </div>
                                            <button type="submit" className="btn btn-primary pay-btn">
                                                Pay ₹1,00,000
                                            </button>
                                        </form>

                                    </div>
                                )}

                                {activeTab === 'upi' && (
                                    <div className="tab-pane active">
                                        <form id="upiPaymentForm">
                                            <div className="mb-3">
                                                <label htmlFor="upiId" className="form-label">
                                                    UPI ID
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="upiId"
                                                    placeholder="username@upi"
                                                    required=""
                                                />
                                                <div className="invalid-feedback">Please enter a valid UPI ID.</div>
                                                <div className="form-text">Enter your UPI ID (e.g., yourname@okbank)</div>
                                            </div>
                                            <div className="upi-icons mb-3">
                                                <span className="upi-icon" data-provider="gpay">
                                                    <i className="fab fa-google-pay" /> Google Pay
                                                </span>
                                                <span className="upi-icon" data-provider="phonepe">
                                                    <i className="fas fa-mobile-alt" /> PhonePe
                                                </span>
                                                <span className="upi-icon" data-provider="paytm">
                                                    <i className="fas fa-wallet" /> Paytm
                                                </span>
                                                <span className="upi-icon" data-provider="other">
                                                    <i className="fas fa-ellipsis-h" /> Others
                                                </span>
                                            </div>
                                            <button type="submit" className="btn btn-primary pay-btn">
                                                Pay ₹1,00,000
                                            </button>
                                        </form>

                                    </div>
                                )}

                                {activeTab === 'wallets' && (
                                    <div className="tab-pane active">
                                        <>
                                            <div className="wallet-options">
                                                <div className="wallet-option">
                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="wallet-options"
                                                        id="wallet-paytm"
                                                        autoComplete="off"
                                                    />
                                                    <label className="btn btn-outline-secondary" htmlFor="wallet-paytm">
                                                        <i className="fas fa-wallet me-2" />
                                                        Paytm
                                                    </label>
                                                </div>
                                                <div className="wallet-option">
                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="wallet-options"
                                                        id="wallet-amazon"
                                                        autoComplete="off"
                                                    />
                                                    <label className="btn btn-outline-secondary" htmlFor="wallet-amazon">
                                                        <i className="fab fa-amazon me-2" />
                                                        Amazon Pay
                                                    </label>
                                                </div>
                                                <div className="wallet-option">
                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="wallet-options"
                                                        id="wallet-freecharge"
                                                        autoComplete="off"
                                                    />
                                                    <label className="btn btn-outline-secondary" htmlFor="wallet-freecharge">
                                                        <i className="fas fa-bolt me-2" />
                                                        Freecharge
                                                    </label>
                                                </div>
                                                <div className="wallet-option">
                                                    <input
                                                        type="radio"
                                                        className="btn-check"
                                                        name="wallet-options"
                                                        id="wallet-mobikwik"
                                                        autoComplete="off"
                                                    />
                                                    <label className="btn btn-outline-secondary" htmlFor="wallet-mobikwik">
                                                        <i className="fas fa-money-bill-wave me-2" />
                                                        MobiKwik
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <div className="alert alert-info">
                                                    <i className="fas fa-info-circle me-2" />
                                                    You will be redirected to the selected wallet provider to complete your
                                                    payment.
                                                </div>
                                                <button type="button" className="btn btn-primary pay-btn">
                                                    Continue to Pay ₹1,00,000
                                                </button>
                                            </div>
                                        </>

                                    </div>
                                )}

                                {activeTab === 'bnpl' && (
                                    <div className="tab-pane active">
                                        <div className="bnpl-options mb-4">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="bnplOption"
                                                            id="bnpl-lazypay"
                                                            defaultChecked=""
                                                        />
                                                        <label
                                                            className="form-check-label d-flex justify-content-between align-items-center"
                                                            htmlFor="bnpl-lazypay"
                                                        >
                                                            <div>
                                                                <strong>LazyPay</strong>
                                                                <div className="text-muted small">Pay on 15th of next month</div>
                                                            </div>
                                                            <i className="fas fa-hourglass-half" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="bnplOption"
                                                            id="bnpl-simpl"
                                                        />
                                                        <label
                                                            className="form-check-label d-flex justify-content-between align-items-center"
                                                            htmlFor="bnpl-simpl"
                                                        >
                                                            <div>
                                                                <strong>Simpl</strong>
                                                                <div className="text-muted small">Pay in 2 weeks</div>
                                                            </div>
                                                            <i className="fas fa-calendar-alt" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="bnplOption"
                                                            id="bnpl-emi"
                                                        />
                                                        <label
                                                            className="form-check-label d-flex justify-content-between align-items-center"
                                                            htmlFor="bnpl-emi"
                                                        >
                                                            <div>
                                                                <strong>EMI Options</strong>
                                                                <div className="text-muted small">3, 6, or 12 month options</div>
                                                            </div>
                                                            <i className="fas fa-credit-card" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="alert alert-warning">
                                            <i className="fas fa-exclamation-triangle me-2" />
                                            BNPL services are subject to eligibility and credit limit approval.
                                        </div>
                                        <button type="button" className="btn btn-primary pay-btn">
                                            Continue with BNPL
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="payment-security-info card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fas fa-shield-alt me-2" />
                                Secure Checkout
                            </h5>
                            <p className="card-text">
                                Your payment information is encrypted and secure.
                            </p>
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fas fa-check-circle text-success me-2" />
                                    SSL encrypted payment
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-success me-2" />
                                    Verified by Visa
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-success me-2" />
                                    MasterCard SecureCode
                                </li>
                                <li>
                                    <i className="fas fa-check-circle text-success me-2" />
                                    PCI DSS Compliant
                                </li>
                            </ul>
                            <hr />
                            <div className="d-flex gap-2 justify-content-center">
                                <i className="fab fa-cc-visa fa-2x" />
                                <i className="fab fa-cc-mastercard fa-2x" />
                                <i className="fab fa-cc-amex fa-2x" />
                                <i className="fab fa-cc-discover fa-2x" />
                            </div>
                        </div>
                    </div>
                    <div className="need-help card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">
                                <i className="fas fa-question-circle me-2" />
                                Need Help?
                            </h5>
                            <p className="card-text">
                                Our travel experts are available 24/7 to assist you with your payment.
                            </p>
                            <div className="d-grid gap-2">
                                <a href="#" className="btn btn-outline-primary">
                                    <i className="fas fa-headset me-2" />
                                    Contact Support
                                </a>
                                <a href="#" className="btn btn-outline-secondary">
                                    <i className="fas fa-file-alt me-2" />
                                    Payment FAQ
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MakePayment;
