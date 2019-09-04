import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise7-2.vue'

describe('Exercise7-2.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('interests loop correctly', () => {
    wrapper.setData({
      interests: ['1', '2', '3'],
    })

    expect(
      wrapper
        .findAll('li')
        .at(0)
        .text()
    ).toEqual('1')
    expect(
      wrapper
        .findAll('li')
        .at(1)
        .text()
    ).toEqual('2')
    expect(
      wrapper
        .findAll('li')
        .at(2)
        .text()
    ).toEqual('3')
  })
})
