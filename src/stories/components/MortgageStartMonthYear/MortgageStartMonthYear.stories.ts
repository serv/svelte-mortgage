import MortgageStartMonthYear from '../../../components/MortgageStartMonthYear';

export default {
  title: 'components/MortgageStartMonthYear',
  component: MortgageStartMonthYear
};

const Template = ({ ...args }) => ({
  Component: MortgageStartMonthYear,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
