import MonthlyLevel from '../../../../components/DashboardContent/MonthlyLevel';

export default {
  title: 'components/DashboardContent/MonthlyLevel',
  component: MonthlyLevel
};

const Template = ({ ...args }) => ({
  Component: MonthlyLevel,
  props: args
});

export const WithValues = Template.bind({});
WithValues.args = {
  principleInterest: 1500,
  insurance: 100,
  tax: 400,
  hoa: 300
};
