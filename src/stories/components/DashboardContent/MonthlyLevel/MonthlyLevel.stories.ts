import MonthlyLevel from '../../../../components/DashboardContent/MonthlyLevel';

export default {
  title: 'components/DashboardContent/MonthlyLevel',
  component: MonthlyLevel
};

const Template = ({ ...args }) => ({
  Component: MonthlyLevel,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
