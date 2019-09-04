import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise6B.vue'

describe('Exercise6B.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('data returns correctly in list element', () => {
    const name = 'John Doe'
    const language = 'Javascript'

    wrapper.setData({
      name: name,
      language: language,
    })

    expect(
      wrapper
        .findAll('.overview li')
        .at(1)
        .text()
    ).toEqual('Name: ' + name)
    expect(
      wrapper
        .findAll('.overview li')
        .at(2)
        .text()
    ).toEqual('Preference: ' + language)
  })
})
