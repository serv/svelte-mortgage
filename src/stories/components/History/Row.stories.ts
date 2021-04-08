import Row from '../../../components/History/Row.svelte';

export default {
  title: 'components/History/Row',
  component: Row
};

const Template = ({ ...args }) => ({
  Component: Row,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};

export const WithValues = Template.bind({});
WithNone.args = {
  homePrice: 1_234_000,
  downPayment: 25,
  percentage: 2.725,
  mortgageLength: 30
};
