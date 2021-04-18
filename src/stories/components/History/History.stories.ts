import History from '../../../components/History';

export default {
  title: 'components/History',
  component: History
};

const Template = ({ ...args }) => ({
  Component: History,
  props: args
});

export const WithContent = Template.bind({});
WithContent.args = {
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

export const WithStore = Template.bind({});
WithStore.args = {};
