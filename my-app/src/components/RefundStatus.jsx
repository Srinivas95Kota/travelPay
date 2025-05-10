import React from 'react';

const RefundStatus = () => {
  return (
      <div>
          <h3>Refund Status Tracker</h3>
          <p class="text-muted mb-4">Track the status of your refund requests and see estimated processing times.</p>
          <div className="refund-list">
              {/* Refund Item 1 */}
              <div className="card mb-4 refund-item">
                  <div
                      className="card-header d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#refundDetails1"
                  >
                      <div>
                          <h5 className="mb-0">Paris Trip - Flight AI-309</h5>
                          <span className="badge bg-warning text-dark">In Progress</span>
                      </div>
                      <button className="btn btn-link" type="button">
                          <i className="fas fa-chevron-down" />
                      </button>
                  </div>
                  <div className="collapse show" id="refundDetails1">
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-8">
                                  <div className="refund-info">
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Booking Reference:</span>
                                          <span className="fw-bold">TRV78905432</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Cancelled On:</span>
                                          <span>Nov 5, 2023</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Refund Amount:</span>
                                          <span className="fw-bold">₹85,000</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Refund Method:</span>
                                          <span>Original Payment Method (Credit Card)</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Estimated Completion:</span>
                                          <span>Nov 15, 2023</span>
                                      </div>
                                  </div>
                                  <div className="refund-timeline mt-4">
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check" />
                                              </div>
                                              <p>Refund Requested</p>
                                              <p className="text-muted">Nov 5, 2023</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check" />
                                              </div>
                                              <p>Request Approved</p>
                                              <p className="text-muted">Nov 7, 2023</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step active">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-sync-alt fa-spin" />
                                              </div>
                                              <p>Processing</p>
                                              <p className="text-muted">In Progress</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-university" />
                                              </div>
                                              <p>Refund Issued</p>
                                              <p className="text-muted">Pending</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check-circle" />
                                              </div>
                                              <p>Completed</p>
                                              <p className="text-muted">Pending</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="alert alert-info">
                                      <h6>
                                          <i className="fas fa-info-circle me-2" />
                                          Refund Status
                                      </h6>
                                      <p className="mb-0">
                                          Your refund is being processed by the airline. This typically
                                          takes 7-10 business days.
                                      </p>
                                  </div>
                                  <div className="d-grid gap-2">
                                      <button className="btn btn-outline-primary btn-sm">
                                          <i className="fas fa-envelope me-2" />
                                          Email Updates
                                      </button>
                                      <button className="btn btn-outline-secondary btn-sm">
                                          <i className="fas fa-headset me-2" />
                                          Contact Support
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* Refund Item 2 */}
              <div className="card mb-4 refund-item">
                  <div
                      className="card-header d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#refundDetails2"
                  >
                      <div>
                          <h5 className="mb-0">Bali Resort - Grand Hyatt</h5>
                          <span className="badge bg-success">Completed</span>
                      </div>
                      <button className="btn btn-link" type="button">
                          <i className="fas fa-chevron-down" />
                      </button>
                  </div>
                  <div className="collapse show" id="refundDetails2">
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-8">
                                  <div className="refund-info">
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Booking Reference:</span>
                                          <span className="fw-bold">HTL45678923</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Cancelled On:</span>
                                          <span>Oct 15, 2023</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Refund Amount:</span>
                                          <span className="fw-bold">₹45,000</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Refund Method:</span>
                                          <span>Original Payment Method (UPI)</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Completed On:</span>
                                          <span>Oct 25, 2023</span>
                                      </div>
                                  </div>
                                  <div className="refund-timeline mt-4">
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check" />
                                              </div>
                                              <p>Refund Requested</p>
                                              <p className="text-muted">Oct 15, 2023</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check" />
                                              </div>
                                              <p>Request Approved</p>
                                              <p className="text-muted">Oct 17, 2023</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check" />
                                              </div>
                                              <p>Processing</p>
                                              <p className="text-muted">Oct 20, 2023</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check" />
                                              </div>
                                              <p>Refund Issued</p>
                                              <p className="text-muted">Oct 23, 2023</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check-circle" />
                                              </div>
                                              <p>Completed</p>
                                              <p className="text-muted">Oct 25, 2023</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="alert alert-success">
                                      <h6>
                                          <i className="fas fa-check-circle me-2" />
                                          Refund Completed
                                      </h6>
                                      <p className="mb-0">
                                          Your refund has been processed successfully and credited to your
                                          original payment method.
                                      </p>
                                  </div>
                                  <div className="receipt-download mt-3">
                                      <button className="btn btn-outline-primary btn-sm w-100">
                                          <i className="fas fa-download me-2" />
                                          Download Receipt
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* Refund Item 3 */}
              <div className="card mb-4 refund-item">
                  <div
                      className="card-header d-flex justify-content-between align-items-center"
                      data-bs-toggle="collapse"
                      data-bs-target="#refundDetails3"
                  >
                      <div>
                          <h5 className="mb-0">Mediterranean Cruise - Royal Caribbean</h5>
                          <span className="badge bg-danger">Rejected</span>
                      </div>
                      <button className="btn btn-link" type="button">
                          <i className="fas fa-chevron-down" />
                      </button>
                  </div>
                  <div className="collapse show" id="refundDetails3">
                      <div className="card-body">
                          <div className="row">
                              <div className="col-md-8">
                                  <div className="refund-info">
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Booking Reference:</span>
                                          <span className="fw-bold">CRS67890123</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Cancelled On:</span>
                                          <span>Oct 1, 2023</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Refund Amount:</span>
                                          <span className="fw-bold">₹0 (Non-refundable)</span>
                                      </div>
                                      <div className="d-flex justify-content-between mb-2">
                                          <span>Reason:</span>
                                          <span>Cancelled within 48 hours of departure</span>
                                      </div>
                                  </div>
                                  <div className="refund-timeline mt-4">
                                      <div className="timeline-step completed">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-check" />
                                              </div>
                                              <p>Refund Requested</p>
                                              <p className="text-muted">Oct 1, 2023</p>
                                          </div>
                                      </div>
                                      <div className="timeline-step rejected">
                                          <div className="timeline-content">
                                              <div className="inner-circle">
                                                  <i className="fas fa-times" />
                                              </div>
                                              <p>Request Rejected</p>
                                              <p className="text-muted">Oct 2, 2023</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-md-4">
                                  <div className="alert alert-danger">
                                      <h6>
                                          <i className="fas fa-exclamation-circle me-2" />
                                          Refund Rejected
                                      </h6>
                                      <p className="mb-0">
                                          Your refund request was rejected due to the cancellation policy.
                                          The booking was non-refundable within 48 hours of departure.
                                      </p>
                                  </div>
                                  <div className="d-grid gap-2">
                                      <button className="btn btn-outline-primary btn-sm">
                                          <i className="fas fa-headset me-2" />
                                          Appeal Decision
                                      </button>
                                      <button className="btn btn-outline-secondary btn-sm">
                                          <i className="fas fa-file-alt me-2" />
                                          View Policy
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  );
};

export default RefundStatus;
