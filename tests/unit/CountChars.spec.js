import { shallowMount } from '@vue/test-utils'
import CountChars from '@/components/CountChars'

describe('CountChars.vue Test', () => {
  it('returns 0 when the string is empty', () => {
    const wrapper = shallowMount(CountChars, {
      propsData: {
        copy: ''
      }
    })

    expect(wrapper.text()).toMatch('0');
  })

  it('returns the characters length', () => {
    const wrapper = shallowMount(CountChars, {
      propsData: {
        copy: 'No te entiendo nada porque aca esta el espiritu.'
      }
    })

    expect(wrapper.text()).toMatch('48');
  })
})
