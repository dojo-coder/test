import ImageSlider from '~/src/components/ImageSlider.vue';
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

describe('ImageSlider.vue', function() {
  let wrapper;
  let prevBtn;
  let nextBtn;
  let props;
  let img;
  const images = [
    'https://i.imgur.com/rmydi2w.jpg', 
    'https://i.imgur.com/rAFqZiM.jpg', 
    'https://i.imgur.com/Fpw5KKY.jpg', 
    'https://i.imgur.com/IbYRmoW.jpg', 
    'https://i.imgur.com/9poVrgA.jpg'
  ];
  beforeEach(function() {
    props = {
      images,
    };
    wrapper = shallowMount(ImageSlider, { propsData: props });
    prevBtn = wrapper.find('button:first-of-type');
    nextBtn = wrapper.find('button:last-of-type');
    img = wrapper.find('img');
  });
  // should show the first image
  it('displays the first image', () => {
    expect(img.attributes().src).to.equal(images[0]);
  });
  // should have the previous button disabled initially
  it('has the previous button initially disabled', () => {
    expect(prevBtn.attributes().disabled).to.be.equal('');
  });
  // clicking on next button should show the next image
  it('show the next image when clicking on the next button', async () => {
    await nextBtn.trigger("click");
    expect(img.attributes().src).to.be.equal(images[1]);
  });

  it('show the previous image when clicking on the previous button', async () => {
    await prevBtn.trigger("click");
    expect(img.attributes().src).to.be.equal(images[0]);
  });
  
  // the prev button should be enabled if the current image is not the first
  it('enables the previous button if current image is not the first', async () => {
    await nextBtn.trigger("click");
    expect(prevBtn.attributes().disabled).to.be.undefined;
  });

  // on reaching back to the first image the prev button should get disabled
  it('disables previous button when clicking previous button and the first image is displayed', async () => {
    await nextBtn.trigger("click");
    expect(img.attributes().src).to.be.equal(images[1]);
    expect(prevBtn.attributes().disabled).to.be.undefined;
    await prevBtn.trigger('click'); 
    expect(img.attributes().src).to.be.equal(images[0]);
    expect(prevBtn.attributes().disabled).to.be.empty;
  });

  // when reaching the end of the images list the next button should be disabled
  it('disables the next button when reaching the last image in images list', async () => {
    for(let i = 0; i < images.length-1; i++)
      await nextBtn.trigger('click');
    expect(nextBtn.attributes().disabled).to.be.empty;
  });

});
