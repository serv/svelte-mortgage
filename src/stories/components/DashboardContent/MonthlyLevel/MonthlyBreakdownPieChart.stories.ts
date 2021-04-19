import MonthlyBreakdownPieChart from '../../../../components/DashboardContent/MonthlyLevel/MonthlyBreakdownPieChart.svelte';

export default {
  title: 'components/DashboardContent/MonthlyLevel/MonthlyBreakdownPieChart',
  component: MonthlyBreakdownPieChart
};

const Template = ({ ...args }) => ({
  Component: MonthlyBreakdownPieChart,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
