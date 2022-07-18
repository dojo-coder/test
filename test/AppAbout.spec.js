import AppAbout from '~/src/components/AppAbout.vue';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import { setActivePinia } from 'pinia'
import { worker } from '../mocks/browser'

describe('AppAbout.vue', function() {
  let wrapper;
  let counter;
  this.beforeAll(async () => {
    await worker.start({
        onUnhandledRequest: 'warn',
      })
  })
  beforeEach(function() {
    const pinia = createTestingPinia({ createSpy: sinon.spy, stubActions: false })
    setActivePinia(pinia)
    wrapper = shallowMount(AppAbout, {
        global: {
            plugins: [pinia],
        }
    });
    counter = wrapper.find('.counter');
  });
  this.afterEach(() => {
    worker.resetHandlers()
  })
  this.afterAll(() => {
    worker.stop()
  })
  // should show the first image
  it('displays the counter 1', () => {
    expect(counter.text()).to.equal('1');
  });
});
