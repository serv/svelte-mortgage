import Rows from '../../../components/History/Rows.svelte';

export default {
  title: 'components/History/Rows',
  component: Rows
};

const Template = ({ ...args }) => ({
  Component: Rows,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {
  content: [
    {
      homePrice: 1_234_000,
      downPayment: 20,
      percentage: 3,
      mortgageLength: 30
    },
    {
      homePrice: 534_000,
      downPayment: 10,
      percentage: 4.5,
      mortgageLength: 30
    },
    {
      homePrice: 654_000,
      downPayment: 20,
      percentage: 3.45,
      mortgageLength: 20
    }
  ]
};
