import History from '../../../components/History';
import faker from 'faker';
import _ from 'lodash-es';

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

const many = [];
const mortgageLengths = [30, 20, 15, 10];
for (let i = 0; i < 100; i++) {
  let obj = {
    homePrice: _.random(100_000, 2_000_000),
    downPayment: _.random(0, 50.0),
    percentage: _.random(1, 7.0),
    mortgageLength: _.sample(mortgageLengths)
  };
  many.push(obj);
}

export const WithMany = Template.bind({});
WithMany.args = {
  content: many
};
