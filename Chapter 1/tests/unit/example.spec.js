import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise2A.vue'

describe('Exercise2A.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Exercise, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
