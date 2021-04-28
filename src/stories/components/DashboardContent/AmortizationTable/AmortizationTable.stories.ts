import AmortizationTable from '../../../../components/DashboardContent/AmortizationTable';
import amortize from 'amortizationjs';
import config from '../../../../config';

const {
  defaultHomePrice,
  defaultDownPaymentPercentage,
  defaultInterestRate,
  defaultMortgageLength,
  defaultPaymentCountPerYear
} = config;

export default {
  title: 'components/DashboardContent/AmortizationTable',
  component: AmortizationTable
};

const Template = ({ ...args }) => ({
  Component: AmortizationTable,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};

const loan = amortize(
  defaultHomePrice,
  defaultDownPaymentPercentage,
  defaultInterestRate,
  defaultMortgageLength,
  defaultPaymentCountPerYear
);

export const WithLoan = Template.bind({});
WithLoan.args = { loan };
