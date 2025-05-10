import React from 'react';

const SplitPayment = () => {
  return (
      <div>
          <h3>Split Payment with Friends</h3>
          <p class="text-muted mb-4">Share the cost of your booking with friends and family.</p>
          <div className="row">
              <div className="col-md-7">
                  <div className="card mb-4">
                      <div className="card-header">
                          <h5 className="mb-0">Trip Details</h5>
                      </div>
                      <div className="card-body">
                          {/* Trip Details Form */}
                          <form id="splitPaymentForm">
                              <div className="mb-3">
                                  <label htmlFor="tripName" className="form-label">
                                      Trip Name
                                  </label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      id="tripName"
                                      defaultValue="Goa Beach Vacation"
                                      required=""
                                  />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="totalAmount" className="form-label">
                                      Total Amount
                                  </label>
                                  <div className="input-group">
                                      <span className="input-group-text">₹</span>
                                      <input
                                          type="number"
                                          className="form-control"
                                          id="totalAmount"
                                          defaultValue={60000}
                                          required=""
                                      />
                                  </div>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label">Number of Participants</label>
                                  <div className="d-flex align-items-center">
                                      <button
                                          type="button"
                                          className="btn btn-outline-secondary btn-sm"
                                          id="decreaseParticipants"
                                      >
                                          <i className="fas fa-minus" />
                                      </button>
                                      <span className="mx-3" id="participantsCount">
                                          3
                                      </span>
                                      <button
                                          type="button"
                                          className="btn btn-outline-secondary btn-sm"
                                          id="increaseParticipants"
                                      >
                                          <i className="fas fa-plus" />
                                      </button>
                                  </div>
                              </div>
                              <div id="participantsContainer">
                                  {/* Participant 1 */}
                                  <div className="card mb-3 participant-card" data-participant={1}>
                                      <div className="card-body">
                                          <div className="d-flex justify-content-between align-items-center mb-2">
                                              <h6 className="mb-0">Participant 1 (You)</h6>
                                              <div className="participant-share">
                                                  <span className="badge bg-primary">₹15,000</span>
                                              </div>
                                          </div>
                                          <div className="mb-2">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Your Name"
                                                  defaultValue="John Doe"
                                                  required=""
                                              />
                                          </div>
                                          <div className="mb-2">
                                              <input
                                                  type="email"
                                                  className="form-control"
                                                  placeholder="Email"
                                                  defaultValue="john@example.com"
                                                  required=""
                                              />
                                          </div>
                                          <div className="form-check form-switch">
                                              <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  id="customShare1"
                                              />
                                              <label className="form-check-label" htmlFor="customShare1">
                                                  Custom share amount
                                              </label>
                                          </div>
                                          <div className="custom-share-input mt-2 d-none">
                                              <div className="input-group">
                                                  <span className="input-group-text">₹</span>
                                                  <input
                                                      type="number"
                                                      className="form-control custom-amount"
                                                      defaultValue={15000}
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  {/* Participant 2 */}
                                  <div className="card mb-3 participant-card" data-participant={2}>
                                      <div className="card-body">
                                          <div className="d-flex justify-content-between align-items-center mb-2">
                                              <h6 className="mb-0">Participant 2</h6>
                                              <div className="participant-share">
                                                  <span className="badge bg-primary">₹15,000</span>
                                              </div>
                                          </div>
                                          <div className="mb-2">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Friend's Name"
                                                  defaultValue="Sarah Johnson"
                                                  required=""
                                              />
                                          </div>
                                          <div className="mb-2">
                                              <input
                                                  type="email"
                                                  className="form-control"
                                                  placeholder="Email"
                                                  defaultValue="sarah@example.com"
                                                  required=""
                                              />
                                          </div>
                                          <div className="form-check form-switch">
                                              <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  id="customShare2"
                                              />
                                              <label className="form-check-label" htmlFor="customShare2">
                                                  Custom share amount
                                              </label>
                                          </div>
                                          <div className="custom-share-input mt-2 d-none">
                                              <div className="input-group">
                                                  <span className="input-group-text">₹</span>
                                                  <input
                                                      type="number"
                                                      className="form-control custom-amount"
                                                      defaultValue={15000}
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  {/* Participant 3 */}
                                  <div className="card mb-3 participant-card" data-participant={3}>
                                      <div className="card-body">
                                          <div className="d-flex justify-content-between align-items-center mb-2">
                                              <h6 className="mb-0">Participant 3</h6>
                                              <div className="participant-share">
                                                  <span className="badge bg-primary">₹15,000</span>
                                              </div>
                                          </div>
                                          <div className="mb-2">
                                              <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Friend's Name"
                                                  defaultValue="Mike Smith"
                                                  required=""
                                              />
                                          </div>
                                          <div className="mb-2">
                                              <input
                                                  type="email"
                                                  className="form-control"
                                                  placeholder="Email"
                                                  defaultValue="mike@example.com"
                                                  required=""
                                              />
                                          </div>
                                          <div className="form-check form-switch">
                                              <input
                                                  className="form-check-input"
                                                  type="checkbox"
                                                  id="customShare3"
                                              />
                                              <label className="form-check-label" htmlFor="customShare3">
                                                  Custom share amount
                                              </label>
                                          </div>
                                          <div className="custom-share-input mt-2 d-none">
                                              <div className="input-group">
                                                  <span className="input-group-text">₹</span>
                                                  <input
                                                      type="number"
                                                      className="form-control custom-amount"
                                                      defaultValue={15000}
                                                  />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <button type="button" className="btn btn-primary" id="calculateSplit">
                                  Calculate Split
                              </button>
                              <button type="submit" className="btn btn-success">
                                  Send Split Payment Requests
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
              <div className="col-md-5">
                  <div className="card mb-4">
                      <div className="card-header">
                          <h5 className="mb-0">Split Summary</h5>
                      </div>
                      <div className="card-body">
                          <div className="mb-4">
                              <h6>Equal Split</h6>
                              <div className="progress mb-2">
                                  <div
                                      className="progress-bar"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      data-bs-toggle="tooltip"
                                      title="John Doe: ₹15,000"
                                  />
                                  <div
                                      className="progress-bar bg-info"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      data-bs-toggle="tooltip"
                                      title="Sarah Johnson: ₹15,000"
                                  />
                                  <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      data-bs-toggle="tooltip"
                                      title="Mike Smith: ₹15,000"
                                  />
                                  <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "25%" }}
                                      aria-valuenow={25}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      data-bs-toggle="tooltip"
                                      title="Jessica Lee: ₹15,000"
                                  />
                              </div>
                              <div className="split-details">
                                  <div className="d-flex justify-content-between mb-2">
                                      <span>Amount per person:</span>
                                      <span className="fw-bold">₹20,000</span>
                                  </div>
                                  <div className="d-flex justify-content-between mb-2">
                                      <span>Total participants:</span>
                                      <span>3</span>
                                  </div>
                                  <div className="d-flex justify-content-between mb-2">
                                      <span>Total amount:</span>
                                      <span className="fw-bold">₹60,000</span>
                                  </div>
                              </div>
                          </div>
                          <div className="share-options mb-4">
                              <h6>Split Options</h6>
                              <div className="form-check mb-2">
                                  <input
                                      className="form-check-input"
                                      type="radio"
                                      name="splitOption"
                                      id="equalSplit"
                                      defaultChecked=""
                                  />
                                  <label className="form-check-label" htmlFor="equalSplit">
                                      Equal Split (<b>₹20,000</b> each)
                                  </label>
                              </div>
                              <div className="form-check mb-2">
                                  <input
                                      className="form-check-input"
                                      type="radio"
                                      name="splitOption"
                                      id="percentageSplit"
                                  />
                                  <label className="form-check-label" htmlFor="percentageSplit">
                                      Percentage Split
                                  </label>
                              </div>
                              <div className="form-check mb-2">
                                  <input
                                      className="form-check-input"
                                      type="radio"
                                      name="splitOption"
                                      id="customSplit"
                                  />
                                  <label className="form-check-label" htmlFor="customSplit">
                                      Custom Amount Split
                                  </label>
                              </div>
                          </div>
                          <div className="split-payment-methods">
                              <h6>Payment Collection Methods</h6>
                              <div className="list-group">
                                  <a href="#" className="list-group-item list-group-item-action">
                                      <div className="d-flex justify-content-between align-items-center">
                                          <div>
                                              <i className="fas fa-link me-2" />
                                              <span>Payment Link</span>
                                          </div>
                                          <span className="badge bg-success rounded-pill">
                                              Recommended
                                          </span>
                                      </div>
                                  </a>
                                  <a href="#" className="list-group-item list-group-item-action">
                                      <div className="d-flex align-items-center">
                                          <i className="fas fa-qrcode me-2" />
                                          <span>QR Code</span>
                                      </div>
                                  </a>
                                  <a href="#" className="list-group-item list-group-item-action">
                                      <div className="d-flex align-items-center">
                                          <i className="fas fa-envelope me-2" />
                                          <span>Email Request</span>
                                      </div>
                                  </a>
                                  <a href="#" className="list-group-item list-group-item-action">
                                      <div className="d-flex align-items-center">
                                          <i className="fas fa-mobile-alt me-2" />
                                          <span>SMS Request</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h5 className="mb-0">Split Payment Status</h5>
                      </div>
                      <div className="card-body">
                          <div className="alert alert-info">
                              <i className="fas fa-info-circle me-2" />
                              Click "Send Split Payment Requests" to initiate the payment collection
                              process.
                          </div>
                          <div className="payment-status-list">
                              <div className="mb-2">
                                  <span className="fw-bold">You (John Doe)</span>
                                  <span className="badge bg-success float-end">Paid</span>
                              </div>
                              <div className="mb-2">
                                  <span className="fw-bold">Sarah Johnson</span>
                                  <span className="badge bg-warning text-dark float-end">
                                      Pending
                                  </span>
                              </div>
                              <div className="mb-2">
                                  <span className="fw-bold">Mike Smith</span>
                                  <span className="badge bg-warning text-dark float-end">
                                      Pending
                                  </span>
                              </div>
                              <div className="mb-2">
                                  <span className="fw-bold">Jessica Lee</span>
                                  <span className="badge bg-warning text-dark float-end">
                                      Pending
                                  </span>
                              </div>
                          </div>
                          <div className="payment-reminder mt-3">
                              <button className="btn btn-outline-primary btn-sm w-100">
                                  <i className="fas fa-bell me-2" />
                                  Send Reminders
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  );
};

export default SplitPayment;
