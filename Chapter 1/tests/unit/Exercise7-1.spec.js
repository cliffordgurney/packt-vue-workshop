import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise7-1.vue'

describe('Exercise7-1.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('correct amount of arbitrary loops', () => {
    expect(wrapper.findAll('li')).toHaveLength(5)
  })
})
