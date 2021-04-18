import Dashboard from '../../../components/Dashboard';
import Mortgage from '../../../models/Mortgage';
import _ from 'lodash-es';

export default {
  title: 'components/Dashboard',
  component: Dashboard
};

const Template = ({ ...args }) => ({
  Component: Dashboard,
  props: args
});

const many = [];
const mortgageLengths = [30, 20, 15, 10];
for (let i = 0; i < 7; i++) {
  let obj = objFactory();
  console.log(obj);

  many.push(obj);
}
localStorage.setItem('history', JSON.stringify(many));

function objFactory() {
  const homePrice = _.random(100_000, 2_000_000);
  const downPayment = _.random(0, 50.0);
  const percentage = _.random(1, 7.0);
  const mortgageLength = _.sample(mortgageLengths);

  return new Mortgage(
    homePrice,
    downPayment,
    percentage,
    mortgageLength,
    4,
    2021
  );
}

export const WithNone = Template.bind({});
WithNone.args = {};
