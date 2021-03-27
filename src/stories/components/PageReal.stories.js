import Page from '../../components/Page';

export default {
  title: 'PageReal',
  component: Page
};

const Template = ({ ...args }) => ({
  Component: Page,
  props: args
});

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};
