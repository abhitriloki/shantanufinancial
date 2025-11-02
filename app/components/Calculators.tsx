'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, TrendingUp, Home, Target, Percent, CreditCard } from 'lucide-react';

export default function Calculators() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const calculators = [
    { name: t('sipCalculator'), icon: TrendingUp },
    { name: t('retirementCalculator'), icon: Target },
    { name: t('emiCalculator'), icon: Home },
    { name: t('goalPlanner'), icon: Target },
    { name: t('loanEmiCalculator'), icon: CreditCard },
    { name: t('interestCalculator'), icon: Percent },
  ];

  return (
    <div className="py-8">
      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
        {calculators.map((calc, index) => {
          const Icon = calc.icon;
          return (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeTab === index
                  ? 'bg-deepBlue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon size={18} />
              {calc.name}
            </button>
          );
        })}
      </div>

      {/* Calculator Content */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        {activeTab === 0 && <SIPCalculator />}
        {activeTab === 1 && <RetirementCalculator />}
        {activeTab === 2 && <EMICalculator />}
        {activeTab === 3 && <GoalPlanner />}
        {activeTab === 4 && <LoanEMICalculator />}
        {activeTab === 5 && <InterestCalculator />}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Disclaimer:</strong> {t('calculatorDisclaimer')}
        </p>
      </div>
    </div>
  );
}

// SIP Calculator
function SIPCalculator() {
  const { t } = useLanguage();
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [result, setResult] = useState<any>(null);

  const calculateSIP = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = timePeriod * 12;
    
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const totalInvestment = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvestment;

    setResult({
      futureValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      estimatedReturns: Math.round(estimatedReturns),
    });
  };

  const reset = () => {
    setMonthlyInvestment(5000);
    setReturnRate(12);
    setTimePeriod(10);
    setResult(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 font-poppins">{t('sipCalculator')}</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Monthly Investment (₹)</label>
            <input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Expected Return Rate (% p.a.)</label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="calculator-input"
              step="0.1"
            />
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time Period (Years)</label>
            <input
              type="number"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="1"
              max="40"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div className="flex gap-4">
            <button onClick={calculateSIP} className="btn-primary flex-1">
              {t('calculate')}
            </button>
            <button onClick={reset} className="btn-secondary flex-1">
              {t('reset')}
            </button>
          </div>
        </div>
      </div>

      <div>
        {result && (
          <div className="calculator-result">
            <h4 className="text-xl font-semibold mb-4">{t('results')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Total Investment</p>
                <p className="text-3xl font-bold">₹{result.totalInvestment.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Estimated Returns</p>
                <p className="text-3xl font-bold">₹{result.estimatedReturns.toLocaleString('en-IN')}</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm opacity-90">Future Value</p>
                <p className="text-4xl font-bold">₹{result.futureValue.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Retirement Calculator
function RetirementCalculator() {
  const { t } = useLanguage();
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpense, setMonthlyExpense] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);
  const [result, setResult] = useState<any>(null);

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge;
    const yearsInRetirement = 25; // Assuming 25 years post-retirement
    
    const futureMonthlyExpense = monthlyExpense * Math.pow(1 + inflation / 100, yearsToRetirement);
    const yearlyExpense = futureMonthlyExpense * 12;
    
    const realReturnRate = ((1 + returnRate / 100) / (1 + inflation / 100) - 1) * 100;
    
    const corpusRequired = (yearlyExpense * ((1 - Math.pow(1 + realReturnRate / 100, -yearsInRetirement)) / (realReturnRate / 100)));
    
    const monthlyRate = returnRate / 12 / 100;
    const months = yearsToRetirement * 12;
    const monthlySavingRequired = corpusRequired / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));

    setResult({
      corpusRequired: Math.round(corpusRequired),
      monthlySavingRequired: Math.round(monthlySavingRequired),
      futureMonthlyExpense: Math.round(futureMonthlyExpense),
    });
  };

  const reset = () => {
    setCurrentAge(30);
    setRetirementAge(60);
    setMonthlyExpense(50000);
    setInflation(6);
    setReturnRate(12);
    setResult(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 font-poppins">{t('retirementCalculator')}</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Current Age (Years)</label>
            <input
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="calculator-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Retirement Age (Years)</label>
            <input
              type="number"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              className="calculator-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Current Monthly Expense (₹)</label>
            <input
              type="number"
              value={monthlyExpense}
              onChange={(e) => setMonthlyExpense(Number(e.target.value))}
              className="calculator-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Expected Inflation (% p.a.)</label>
            <input
              type="number"
              value={inflation}
              onChange={(e) => setInflation(Number(e.target.value))}
              className="calculator-input"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Expected Return (% p.a.)</label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="calculator-input"
              step="0.1"
            />
          </div>

          <div className="flex gap-4">
            <button onClick={calculateRetirement} className="btn-primary flex-1">
              {t('calculate')}
            </button>
            <button onClick={reset} className="btn-secondary flex-1">
              {t('reset')}
            </button>
          </div>
        </div>
      </div>

      <div>
        {result && (
          <div className="calculator-result">
            <h4 className="text-xl font-semibold mb-4">{t('results')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Corpus Required at Retirement</p>
                <p className="text-3xl font-bold">₹{result.corpusRequired.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Monthly Saving Required</p>
                <p className="text-3xl font-bold">₹{result.monthlySavingRequired.toLocaleString('en-IN')}</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm opacity-90">Future Monthly Expense</p>
                <p className="text-2xl font-bold">₹{result.futureMonthlyExpense.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// EMI Calculator
function EMICalculator() {
  const { t } = useLanguage();
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [result, setResult] = useState<any>(null);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    setResult({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principal: principal,
    });
  };

  const reset = () => {
    setLoanAmount(1000000);
    setInterestRate(8.5);
    setTenure(20);
    setResult(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 font-poppins">{t('emiCalculator')}</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Loan Amount (₹)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="100000"
              max="10000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Interest Rate (% p.a.)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="calculator-input"
              step="0.1"
            />
            <input
              type="range"
              min="5"
              max="20"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Loan Tenure (Years)</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="1"
              max="30"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div className="flex gap-4">
            <button onClick={calculateEMI} className="btn-primary flex-1">
              {t('calculate')}
            </button>
            <button onClick={reset} className="btn-secondary flex-1">
              {t('reset')}
            </button>
          </div>
        </div>
      </div>

      <div>
        {result && (
          <div className="calculator-result">
            <h4 className="text-xl font-semibold mb-4">{t('results')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Monthly EMI</p>
                <p className="text-4xl font-bold">₹{result.emi.toLocaleString('en-IN')}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div>
                  <p className="text-sm opacity-90">Principal Amount</p>
                  <p className="text-xl font-bold">₹{result.principal.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Total Interest</p>
                  <p className="text-xl font-bold">₹{result.totalInterest.toLocaleString('en-IN')}</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm opacity-90">Total Payment</p>
                <p className="text-3xl font-bold">₹{result.totalPayment.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Goal Planner
function GoalPlanner() {
  const { t } = useLanguage();
  const [goalAmount, setGoalAmount] = useState(1000000);
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [timeToGoal, setTimeToGoal] = useState(10);
  const [returnRate, setReturnRate] = useState(12);
  const [result, setResult] = useState<any>(null);

  const calculateGoal = () => {
    const monthlyRate = returnRate / 12 / 100;
    const months = timeToGoal * 12;
    
    const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months);
    const remainingAmount = goalAmount - futureValueOfCurrentSavings;
    
    const monthlySavingRequired = remainingAmount > 0 
      ? remainingAmount / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
      : 0;
    
    const totalInvestment = currentSavings + (monthlySavingRequired * months);

    setResult({
      monthlySavingRequired: Math.round(monthlySavingRequired),
      totalInvestment: Math.round(totalInvestment),
      goalAmount: goalAmount,
      futureValueOfCurrentSavings: Math.round(futureValueOfCurrentSavings),
    });
  };

  const reset = () => {
    setGoalAmount(1000000);
    setCurrentSavings(100000);
    setTimeToGoal(10);
    setReturnRate(12);
    setResult(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 font-poppins">{t('goalPlanner')}</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Goal Amount (₹)</label>
            <input
              type="number"
              value={goalAmount}
              onChange={(e) => setGoalAmount(Number(e.target.value))}
              className="calculator-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Current Savings (₹)</label>
            <input
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(Number(e.target.value))}
              className="calculator-input"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time to Goal (Years)</label>
            <input
              type="number"
              value={timeToGoal}
              onChange={(e) => setTimeToGoal(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="1"
              max="30"
              value={timeToGoal}
              onChange={(e) => setTimeToGoal(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Expected Return (% p.a.)</label>
            <input
              type="number"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="calculator-input"
              step="0.1"
            />
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div className="flex gap-4">
            <button onClick={calculateGoal} className="btn-primary flex-1">
              {t('calculate')}
            </button>
            <button onClick={reset} className="btn-secondary flex-1">
              {t('reset')}
            </button>
          </div>
        </div>
      </div>

      <div>
        {result && (
          <div className="calculator-result">
            <h4 className="text-xl font-semibold mb-4">{t('results')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Monthly Saving Required</p>
                <p className="text-4xl font-bold">₹{result.monthlySavingRequired.toLocaleString('en-IN')}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div>
                  <p className="text-sm opacity-90">Current Savings Growth</p>
                  <p className="text-xl font-bold">₹{result.futureValueOfCurrentSavings.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Total Investment</p>
                  <p className="text-xl font-bold">₹{result.totalInvestment.toLocaleString('en-IN')}</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm opacity-90">Goal Amount</p>
                <p className="text-3xl font-bold">₹{result.goalAmount.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Loan EMI Calculator
function LoanEMICalculator() {
  const { t } = useLanguage();
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);
  const [result, setResult] = useState<any>(null);

  const calculateLoanEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    
    const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;

    setResult({
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principal: principal,
    });
  };

  const reset = () => {
    setLoanAmount(500000);
    setInterestRate(10.5);
    setTenure(5);
    setResult(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 font-poppins">{t('loanEmiCalculator')}</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Loan Amount (₹)</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="50000"
              max="5000000"
              step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Interest Rate (% p.a.)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="calculator-input"
              step="0.1"
            />
            <input
              type="range"
              min="5"
              max="24"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Loan Tenure (Years)</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="1"
              max="20"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div className="flex gap-4">
            <button onClick={calculateLoanEMI} className="btn-primary flex-1">
              {t('calculate')}
            </button>
            <button onClick={reset} className="btn-secondary flex-1">
              {t('reset')}
            </button>
          </div>
        </div>
      </div>

      <div>
        {result && (
          <div className="calculator-result">
            <h4 className="text-xl font-semibold mb-4">{t('results')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Monthly EMI</p>
                <p className="text-4xl font-bold">₹{result.emi.toLocaleString('en-IN')}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                <div>
                  <p className="text-sm opacity-90">Principal Amount</p>
                  <p className="text-xl font-bold">₹{result.principal.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Total Interest</p>
                  <p className="text-xl font-bold">₹{result.totalInterest.toLocaleString('en-IN')}</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm opacity-90">Total Payment</p>
                <p className="text-3xl font-bold">₹{result.totalPayment.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Interest Calculator
function InterestCalculator() {
  const { t } = useLanguage();
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [time, setTime] = useState(5);
  const [compoundingFrequency, setCompoundingFrequency] = useState('yearly');
  const [result, setResult] = useState<any>(null);

  const calculateInterest = () => {
    let n = 1;
    if (compoundingFrequency === 'monthly') n = 12;
    if (compoundingFrequency === 'quarterly') n = 4;
    if (compoundingFrequency === 'halfYearly') n = 2;
    
    const simpleInterest = principal * rate * time / 100;
    const compoundAmount = principal * Math.pow(1 + rate / (100 * n), n * time);
    const compoundInterest = compoundAmount - principal;

    setResult({
      simpleInterest: Math.round(simpleInterest),
      compoundInterest: Math.round(compoundInterest),
      compoundAmount: Math.round(compoundAmount),
      principal: principal,
    });
  };

  const reset = () => {
    setPrincipal(100000);
    setRate(8);
    setTime(5);
    setCompoundingFrequency('yearly');
    setResult(null);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-6 font-poppins">{t('interestCalculator')}</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Principal Amount (₹)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="10000"
              max="10000000"
              step="10000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Rate of Interest (% p.a.)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="calculator-input"
              step="0.1"
            />
            <input
              type="range"
              min="1"
              max="20"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time Period (Years)</label>
            <input
              type="number"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="calculator-input"
            />
            <input
              type="range"
              min="1"
              max="30"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Compounding Frequency</label>
            <select
              value={compoundingFrequency}
              onChange={(e) => setCompoundingFrequency(e.target.value)}
              className="calculator-input"
            >
              <option value="yearly">Yearly</option>
              <option value="halfYearly">Half-Yearly</option>
              <option value="quarterly">Quarterly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button onClick={calculateInterest} className="btn-primary flex-1">
              {t('calculate')}
            </button>
            <button onClick={reset} className="btn-secondary flex-1">
              {t('reset')}
            </button>
          </div>
        </div>
      </div>

      <div>
        {result && (
          <div className="calculator-result">
            <h4 className="text-xl font-semibold mb-4">{t('results')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm opacity-90">Simple Interest</p>
                <p className="text-3xl font-bold">₹{result.simpleInterest.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm opacity-90">Compound Interest</p>
                <p className="text-3xl font-bold">₹{result.compoundInterest.toLocaleString('en-IN')}</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="text-sm opacity-90">Maturity Amount (Compound)</p>
                <p className="text-4xl font-bold">₹{result.compoundAmount.toLocaleString('en-IN')}</p>
              </div>
              <div className="text-sm opacity-80 bg-white/10 p-3 rounded-lg">
                Principal: ₹{result.principal.toLocaleString('en-IN')}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
