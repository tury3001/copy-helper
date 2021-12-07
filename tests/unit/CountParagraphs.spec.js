import { shallowMount } from '@vue/test-utils'
import CountParagraphs from '@/components/CountParagraphs'

describe('CountParagraphs Test', () => {
    it('counts paragraphs with no text', () => {
      const wrapper = shallowMount(CountParagraphs, {
        propsData: {
          copy: ''
        }
      })

      expect(wrapper.text()).toMatch('0')
    })

    it('counts 1 paragraph', () => {
      const wrapper = shallowMount(CountParagraphs, {
        propsData: {
          copy: `
          Lorem ipsum.

          `
        }
      })

      expect(wrapper.text()).toMatch('1')
    })

    it('counts 3 paragraph', () => {
      const wrapper = shallowMount(CountParagraphs, {
        propsData: {
          copy: `
          Lorem ipsum.
          Lorem ipsum.
          Lorem ipsum.

          `
        }
      })

      expect(wrapper.text()).toMatch('3')
    })

    it('counts sentences in one paragraph', () => {
      const wrapper = shallowMount(CountParagraphs, {
        propsData: {
          copy: `
          Lorem ipsum. Lorem ipsum. Lorem ipsum.

          `
        }
      })

      expect(wrapper.text()).toMatch('1')
    })
})
