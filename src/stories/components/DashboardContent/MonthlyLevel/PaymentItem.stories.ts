import PaymentItem from '../../../../components/DashboardContent/MonthlyLevel/PaymentItem.svelte';

export default {
  title: 'components/DashboardContent/MonthlyLevel/PaymentItem',
  component: PaymentItem
};

const Template = ({ ...args }) => ({
  Component: PaymentItem,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};

export const WithName = Template.bind({});
WithName.args = {
  name: 'Principle & Interest'
};

export const WithColor = Template.bind({});
WithColor.args = {
  name: 'Principle & Interest',
  color: 'rgb(159, 123, 12)'
};

export const WithAmount = Template.bind({});
WithAmount.args = {
  name: 'Principle & Interest',
  color: 'rgb(159, 123, 12)',
  amount: 1234
};
