import ShoppingList from '~/src/components/ShoppingList.vue';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

describe('ShoppingList', function() {
  let wrapper;
  let itemCheckbox;
  let input;
  let props;
  const items = [
    {text : 'Banana', checked : false },
    {text : 'Oranges', checked : false },
    {text : 'Mangoes', checked : false },
  ];
  beforeEach(function() {
    props = {
      items
    };
    wrapper = shallowMount(ShoppingList, {propsData: props });
    input = wrapper.find('input[type="text"]');
    itemCheckbox = wrapper.find('li:first-of-type input[type="checkbox"]');
  });
  // should display the list of items given the items props
  it('displays a list of given items props', () => {
    items.forEach((item, index) => expect(wrapper.find(`li:nth-child(${index+1})`).text()).to.contain(item.text));
  });
  // should display an input for adding new items
  it('display an input for adding new items', () => {
    expect(input.exists()).to.be.true;
  });
  // should change the list item styling from unchecked to checked on checkbox click and vice versa
  it('change the list item styling from unchecked to checked on checkbox click and vice versa', async () => {
    expect(itemCheckbox.element.checked).to.be.false;
    await itemCheckbox.setChecked(true);
    expect(itemCheckbox.element.checked).to.be.true;
    await itemCheckbox.setChecked(false);
    expect(itemCheckbox.element.checked).to.be.false;
  });

  // should add new item in list when clicking on add button. will reset the input value
  it('adds a new item in list when clicking on add button. will reset the name input value', async () =>  {
    await input.setValue('Kiwi');
    await wrapper.find('form').trigger('submit');
    expect(wrapper.find('ul').text()).contain('Kiwi');
    expect(input.element.value).to.be.empty;
  });
});
