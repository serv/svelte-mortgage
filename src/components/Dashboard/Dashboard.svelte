<script lang="ts">
  import History from '../History';
  import MortgageInput from '../MortgageInput';
  import config from '../../config';
  import DashboardContet from '../DashboardContent';
  import { currentHistory } from '../../services/stores';
  import DashboardContent from '../DashboardContent/DashboardContent.svelte';

  const {
    defaultHomePrice,
    defaultDownPaymentPercentage,
    defaultInterestRate,
    defaultMortgageLength
  } = config;

  // TODO: need to calculate monthly
  let principleInterest = 1500;
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
            homePrice={$currentHistory
              ? $currentHistory.homePrice
              : defaultHomePrice}
            interestRate={$currentHistory
              ? $currentHistory.interestRate
              : defaultInterestRate}
            mortgageLength={$currentHistory
              ? $currentHistory.mortgageLength
              : defaultMortgageLength}
            downPaymentPercentage={$currentHistory
              ? $currentHistory.downPayment
              : defaultDownPaymentPercentage}
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
        <DashboardContent {principleInterest} />
      </div>
    </main>
  </div>
</div>
