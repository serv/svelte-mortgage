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
WithValues.args = {
  homePrice: 1_234_000,
  downPayment: 25,
  percentage: 2.725,
  mortgageLength: 30
};

export const WithStartEnd = Template.bind({});
WithStartEnd.args = {
  homePrice: 1_234_000,
  downPayment: 25,
  percentage: 2.725,
  mortgageLength: 30,
  start: true,
  end: true
};

export const WithStart = Template.bind({});
WithStart.args = {
  homePrice: 1_234_000,
  downPayment: 25,
  percentage: 2.725,
  mortgageLength: 30,
  start: true,
  end: false
};

export const WithEnd = Template.bind({});
WithEnd.args = {
  homePrice: 1_234_000,
  downPayment: 25,
  percentage: 2.725,
  mortgageLength: 30,
  start: false,
  end: true
};

export const WithInBetween = Template.bind({});
WithInBetween.args = {
  homePrice: 1_234_000,
  downPayment: 25,
  percentage: 2.725,
  mortgageLength: 30,
  start: false,
  end: true
};
