<script lang="ts">
  import History from '../History';
  import MortgageInput from '../MortgageInput';
  import config from '../../config';
  import DashboardContet from '../DashboardContent';
  import { currentHistory } from '../../services/stores';
  import DashboardContent from '../DashboardContent/DashboardContent.svelte';
  import amortize from 'amortizationjs';

  const {
    defaultHomePrice,
    defaultDownPaymentPercentage,
    defaultInterestRate,
    defaultMortgageLength,
    defaultPaymentCountPerYear
  } = config;

  let homePrice = defaultHomePrice;
  let interestRate = defaultInterestRate;
  let mortgageLength = defaultMortgageLength;
  let downPaymentPercentage = defaultDownPaymentPercentage;
  let downPaymentAmount = (homePrice * downPaymentPercentage) / 100;

  // TODO: Need this updated based on changes from the Input
  let loan = amortize(
    homePrice,
    downPaymentAmount,
    interestRate,
    mortgageLength,
    defaultPaymentCountPerYear
  );

  $: principleInterest =
    loan && loan.monthlyPayment ? loan.monthlyPayment : 1398.45;
</script>

<div class="flex h-screen">
  <div
    class="fixed z-30 inset-y-0 left-0 w-auto transition duration-300 transform bg-white dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in pr-4"
  >
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center flex-col">
        <span class="text-gray-800 dark:text-white text-2xl font-semibold">
          MortageHero
        </span>

        <div class="mb-8">
          <MortgageInput
            homePrice={$currentHistory ? $currentHistory.homePrice : homePrice}
            interestRate={$currentHistory
              ? $currentHistory.interestRate
              : interestRate}
            mortgageLength={$currentHistory
              ? $currentHistory.mortgageLength
              : mortgageLength}
            downPaymentPercentage={$currentHistory
              ? $currentHistory.downPayment
              : downPaymentPercentage}
          />
        </div>

        <span class="text-gray-600 text-xl mb-4">Previously Generated</span>
        <History />
      </div>
    </div>
  </div>
  <div class="flex-1 flex flex-col overflow-hidden">
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div class="container mx-auto px-6 py-8">
        <DashboardContent bind:principleInterest {loan} />
      </div>
    </main>
  </div>
</div>
