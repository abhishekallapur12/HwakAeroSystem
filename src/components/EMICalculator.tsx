import { useState } from 'react';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(599000);
  const [interestRate, setInterestRate] = useState(4.3);
  const [tenure, setTenure] = useState(4);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                 (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const calculateTotalInterest = () => {
    const emi = calculateEMI();
    return Math.round(emi * tenure * 12 - loanAmount);
  };

  const calculateTotalAmount = () => {
    return loanAmount + calculateTotalInterest();
  };

  const principalPercentage = Math.round((loanAmount / calculateTotalAmount()) * 100);
  const interestPercentage = 100 - principalPercentage;

  return (
    <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Calculate your Loan EMI
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-white text-lg">Loan Amount</label>
                <span className="text-white font-semibold">{loanAmount}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="1000000"
                step="1000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-white text-lg">Rate of Interest (p.a)</label>
                <span className="text-white font-semibold">{interestRate}</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-white text-lg">Loan Tenure</label>
                <span className="text-white font-semibold">{tenure}</span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <p className="text-white/70 text-sm mt-6">
              * The calculated EMI is indicative and may change based on lender terms and additional costs.
            </p>
          </div>

          <div className="bg-blue-700/50 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex justify-between items-center mb-8">
              <span className="text-white text-lg">Monthly EMI</span>
              <span className="text-white text-3xl font-bold">₹ {calculateEMI().toLocaleString()}*</span>
            </div>

            <div className="relative mb-8">
              <svg className="w-full max-w-md mx-auto" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#1e40af"
                  strokeWidth="40"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="40"
                  strokeDasharray={`${principalPercentage * 5.03} ${500 - principalPercentage * 5.03}`}
                  transform="rotate(-90 100 100)"
                />
                <text x="50" y="105" fill="#60a5fa" fontSize="24" fontWeight="bold">{principalPercentage}%</text>
                <text x="130" y="105" fill="#1e40af" fontSize="24" fontWeight="bold">{interestPercentage}%</text>
              </svg>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/20 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded"></div>
                  <span className="text-white">₹ {loanAmount.toLocaleString()}</span>
                </div>
                <span className="text-white/70">Principal Amount</span>
              </div>

              <div className="flex items-center justify-between pb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-900 rounded"></div>
                  <span className="text-white">₹ {calculateTotalInterest().toLocaleString()}</span>
                </div>
                <span className="text-white/70">Total Interest</span>
              </div>

              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white text-2xl font-bold">₹ {calculateTotalAmount().toLocaleString()}*</span>
                  <span className="text-white/70">Total Amount Payable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
