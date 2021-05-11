<script lang="ts">
  import History from '../History';
  import MortgageInput from '../MortgageInput';
  import config from '../../config';
  import DashboardContent from '../DashboardContent';
  import { currentHistory } from '../../services/stores';
  import amortize from 'amortizationjs';
  const {
    defaultHomePrice,
    defaultDownPaymentPercentage,
    defaultInterestRate,
    defaultMortgageLength,
    defaultPaymentCountPerYear
  } = config;
  let homePrice = $currentHistory
    ? $currentHistory.homePrice
    : defaultHomePrice;
  let interestRate = $currentHistory
    ? $currentHistory.interestRate
    : defaultInterestRate;
  let mortgageLength = $currentHistory
    ? $currentHistory.mortgageLength
    : defaultMortgageLength;
  let downPaymentPercentage = $currentHistory
    ? $currentHistory.downPayment
    : defaultDownPaymentPercentage;
  let downPaymentAmount = (homePrice * downPaymentPercentage) / 100;
  $: getLoan = function () {
    homePrice = $currentHistory ? $currentHistory.homePrice : defaultHomePrice;
    interestRate = $currentHistory
      ? $currentHistory.interestRate
      : defaultInterestRate;
    mortgageLength = $currentHistory
      ? $currentHistory.mortgageLength
      : defaultMortgageLength;
    downPaymentPercentage = $currentHistory
      ? $currentHistory.downPayment
      : defaultDownPaymentPercentage;
    downPaymentAmount = (homePrice * downPaymentPercentage) / 100;
    return amortize(
      homePrice,
      downPaymentAmount,
      interestRate,
      mortgageLength,
      defaultPaymentCountPerYear
    );
  };
  let sidebarOpened: boolean = true;
  $: overlayClass = sidebarOpened
    ? 'fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden block'
    : 'fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden hidden';
  function closeSidebar() {
    sidebarOpened = false;
  }
  function openSidebar() {
    sidebarOpened = true;
  }
</script>

<div class="flex h-screen">
  <div on:click={closeSidebar} class={overlayClass} />

  {#if sidebarOpened}
    <div
      class="fixed z-30 inset-y-0 left-0 w-auto bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 pl-2 pr-4"
    >
      <div class="flex justify-end">
        <div
          on:click={closeSidebar}
          class="border border-gray-300 bg-gray-100 text-center px-2 py-1 cursor-pointer hover:border-gray-500 hover:bg-gray-200"
        >
          X
        </div>
      </div>
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center flex-col">
          <span class="text-gray-800 dark:text-white text-2xl font-semibold">
            MortageHero
          </span>

          <div class="mb-8">
            <MortgageInput
              homePrice={$currentHistory
                ? $currentHistory.homePrice
                : homePrice}
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
  {/if}

  <div class="flex-1 flex flex-col overflow-hidden bg-gray-100">
    <header class="flex justify-between items-center p-6">
      <div class="flex items-center space-x-4 lg:space-x-0">
        {#if !sidebarOpened}
          <div
            on:click={openSidebar}
            class="text-center px-2 py-1 cursor-pointer hover:bg-gray-200"
          >
            >>
          </div>
        {/if}
        <div>
          <h1 class="text-2xl font-medium text-gray-800">Overview</h1>
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-x-hidden overflow-y-auto">
      <div class="container mx-auto px-6 py-8">
        <DashboardContent loan={getLoan()} />
      </div>
    </main>
  </div>
</div>
