import MonthlyBreakdownPieChart from '../../../../components/DashboardContent/MonthlyLevel/MonthlyBreakdownPieChart.svelte';
import MonthlyArc from '../../../../models/MonthlyArc';

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

const arcs = [
  new MonthlyArc(
    'Principle & Interest',
    'principleInterest',
    1500,
    'rgb(255, 99, 132)'
  ),
  new MonthlyArc('Insurance', 'insurance', 200, 'rgb(54, 162, 235)'),
  new MonthlyArc('Tax', 'tax', 100, 'rgb(255, 205, 86)'),
  new MonthlyArc('HOA', 'hoa', 200, 'rgb(255, 105, 86)')
];
export const WithArcs = Template.bind({});
WithArcs.args = {
  arcs
};
