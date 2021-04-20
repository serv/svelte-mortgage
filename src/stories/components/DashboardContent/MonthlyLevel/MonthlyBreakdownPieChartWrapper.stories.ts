import MonthlyBreakdownPieChartWrapper from '../../../../components/DashboardContent/MonthlyLevel/MonthlyBreakdownPieChartWrapper.svelte';

export default {
  title:
    'components/DashboardContent/MonthlyLevel/MonthlyBreakdownPieChartWrapper',
  component: MonthlyBreakdownPieChartWrapper
};

const Template = ({ ...args }) => ({
  Component: MonthlyBreakdownPieChartWrapper,
  props: args
});

export const WithNone = Template.bind({});
WithNone.args = {};
