import React, { useState } from 'react';
import MakePayment from './components/MakePayment';
import RefundStatus from './components/RefundStatus';
import SplitPayment from './components/SplitPayment';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('makePayment'); // Default active tab
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>
            <div class="container main-content mt-4">
                <h1 class="mb-4">Payment & Refund Dashboard</h1>
                <ul class="nav nav-tabs" id="paymentTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'makePayment' ? 'active' : ''}`}
                            onClick={() => handleTabClick('makePayment')}
                        >
                            <i class="fas fa-credit-card me-2"></i>Make Payment
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'refundStatus' ? 'active' : ''}`}
                            onClick={() => handleTabClick('refundStatus')}
                        >
                            <i class="fas fa-undo-alt me-2"></i>Refund Status
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button
                            className={`nav-link ${activeTab === 'splitPayment' ? 'active' : ''}`}
                            onClick={() => handleTabClick('splitPayment')}
                        >
                            <i class="fas fa-users me-2"></i>Split Payment
                        </button>
                    </li>
                </ul>

                <div className="tab-content p-4 bg-white shadow-sm">
                    {activeTab === 'makePayment' && <MakePayment />}
                    {activeTab === 'refundStatus' && <RefundStatus />}
                    {activeTab === 'splitPayment' && <SplitPayment />}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
