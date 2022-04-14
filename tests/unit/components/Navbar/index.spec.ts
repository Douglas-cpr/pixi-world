import Navbar from '@/components/Navbar/index.vue'
import { shallowMount } from '@vue/test-utils'

describe('<Navbar />', () => {
  it ('renders correctly', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should have a link to home page', () => {
    const wrapper = shallowMount(Navbar)
  })
})