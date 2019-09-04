import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise10.vue'

describe('Exercise10.vue', () => {
  it('correct amount of arbitrary loops', () => {
    const wrapper = shallowMount(Exercise, {})
    expect(wrapper.findAll('li')).toHaveLength(5)
  })
  it('add items to cart', () => {
    const triggerAlert = jest.fn()
    const wrapper = shallowMount(Exercise, {
      methods: {
        triggerAlert,
      },
    })
    const button = wrapper.findAll('li a').at(1)

    button.trigger('click')

    expect(triggerAlert).toHaveBeenCalled()
  })

  // it('format currency correctly', () => {

  // })
})
