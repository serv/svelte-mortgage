import MortgageLength from '../../../components/MortgageLength';

export default {
  title: 'components/MortgageLength',
  component: MortgageLength
};

const Template = ({ ...args }) => ({
  Component: MortgageLength,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
