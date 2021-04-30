import DashboardContent from '../../../components/DashboardContent';
import config from '../../../config';
import amortize from 'amortizationjs';
const {
  defaultHomePrice,
  defaultDownPaymentPercentage,
  defaultInterestRate,
  defaultMortgageLength,
  defaultPaymentCountPerYear
} = config;

const loan = amortize(
  defaultHomePrice,
  defaultDownPaymentPercentage,
  defaultInterestRate,
  defaultMortgageLength,
  defaultPaymentCountPerYear
);
export default {
  title: 'components/DashboardContent',
  component: DashboardContent
};

const Template = ({ ...args }) => ({
  Component: DashboardContent,
  props: args
});

export const WithValues = Template.bind({});
WithValues.args = {
  principleInterest: 1500,
  loan
};
