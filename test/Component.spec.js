import Component from '~/src/components/Component.vue';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

describe('Component', function() {
  let wrapper;
  let h1;
  let input;
  let props;
  beforeEach(function() {
    props = {
      modelValue: ''
    };
    wrapper = shallowMount(Component, props);
    h1 = wrapper.find('h1');
    input = wrapper.find('input');
  });
  it("Display a h1 with the text Custom Input", function() {
    expect(h1.text()).to.equal('Custom Input');
  });
  it("Should display an input of type text", function() {
    expect(input.attributes().type).to.equal('text');
  });
  it("Should have a modelValue prop", function() {
    const userProps = wrapper.props();
    expect(userProps).to.deep.equal(props);
  });
  it("Should emit 'update:modelValue' when input event is triggered", async function() {
    await input.setValue('test');
    const emitted = wrapper.emitted('update:modelValue');
    const expectedPayload = 'test';
    expect(emitted[0][0]).to.equal(expectedPayload);
  });
});
