import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise9.vue'

describe('Exercise9.vue', () => {
  it('correct amount of arbitrary loops', () => {
    const wrapper = shallowMount(Exercise, {})
    expect(wrapper.findAll('li')).toHaveLength(5)
  })
  it('triggerAlert method', () => {
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
})
