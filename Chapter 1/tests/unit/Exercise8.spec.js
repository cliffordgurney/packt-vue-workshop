import { shallowMount } from '@vue/test-utils'
import Exercise from '@/components/Exercise8.vue'

describe('Exercise8.vue', () => {
  const wrapper = shallowMount(Exercise, {})

  it('find all looped items correctly', () => {
    wrapper.setData({
      interests: [
        {
          title: 'TV',
          favorite: ['Designated Survivor', 'Spongebob'],
        },
        {
          title: 'Games',
          favorite: ['CS:GO'],
        },
        {
          title: 'Sports',
          favorite: [],
        },
      ],
    })

    expect(wrapper.findAll('ul > li')).toHaveLength(3)
    expect(wrapper.findAll('ol li')).toHaveLength(3)
  })
})
