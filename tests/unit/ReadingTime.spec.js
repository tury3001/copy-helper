import { shallowMount } from '@vue/test-utils'
import ReadingTime from '@/components/ReadingTime'

describe('ReadingTime.vue Test', () => {

  it('Checks reading time with empty text', () => {
    const wrapper = shallowMount(ReadingTime, {
      propsData: {
        copy: ''
      }
    })

    expect(wrapper.text()).toMatch("0 s.")
  })

  it('Checks reading time with 10 words, less than a minute', () => {
    const wrapper = shallowMount(ReadingTime, {
      propsData: {
        copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor.'
      }
    })

    expect(wrapper.text()).toMatch("3 s.")
  })

  it('Checks reading 500 words, time more than a minute', () => {
    const wrapper = shallowMount(ReadingTime, {
      propsData: {
        copy: 'lorem '.repeat(500)
      }
    })

    expect(wrapper.text()).toMatch("1:49 m.")
  })

})
