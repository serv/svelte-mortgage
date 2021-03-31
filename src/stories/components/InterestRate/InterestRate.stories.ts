import InterestRate from '../../../components/InterestRate';

export default {
  title: 'components/InterestRate',
  component: InterestRate
};

const Template = ({ ...args }) => ({
  Component: InterestRate,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
