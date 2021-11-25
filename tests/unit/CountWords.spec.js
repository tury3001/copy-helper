import { shallowMount } from '@vue/test-utils'
import CountWords from '@/components/CountWords'

describe('CountWords.vue Test', () => {

  it('Counts no word', () => {
    const wrapper = shallowMount(CountWords, {
      propsData: {
        copy: ''
      }
    })

    expect(wrapper.text()).toMatch("0");
  })

  it('Counts one word', () => {
    const wrapper = shallowMount(CountWords, {
      propsData: {
        copy: 'Dog'
      }
    })

    expect(wrapper.text()).toMatch("1");
  })

  it('Counts two words', () => {
    const wrapper = shallowMount(CountWords, {
      propsData: {
        copy: 'Amazing things'
      }
    })

    expect(wrapper.text()).toMatch("2");
  })

  it('Counts three words', () => {
    const wrapper = shallowMount(CountWords, {
      propsData: {
        copy: 'The Dark Knight.'
      }
    })

    expect(wrapper.text()).toMatch("3");
  })

  it('Counts ten words', () => {
    const wrapper = shallowMount(CountWords, {
      propsData: {
        copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.'
      }
    })

    expect(wrapper.text()).toMatch("10");
  })

  it('Counts words with extra spaces', () => {
    const wrapper = shallowMount(CountWords, {
      propsData: {
        copy: 'Lorem     ipsum     dolor    sit'
      }
    })

    expect(wrapper.text()).toMatch("4");
  })

})
