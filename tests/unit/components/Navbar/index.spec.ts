import Navbar from '@/components/Navbar/index.vue'
import { shallowMount, VueWrapper } from '@vue/test-utils'

describe('<Navbar />', () => {
  let wrapper: VueWrapper<any>

  const createComponent = () => {
    wrapper = shallowMount(Navbar)
  }

  const findLinkList = () => wrapper.find('ul')

  afterEach(() => {
    wrapper.unmount()
  })

  it ('renders correctly', () => {
    createComponent()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should have a link to home page', () => {
    createComponent()

    const linkList = findLinkList()

    expect(linkList.text()).toContain('Home')
  })

  it('should have a link to about page', () => {
    createComponent()

    const linkList = findLinkList()

    expect(linkList.text()).toContain('About')
  })

  it('should have a link to features page', () => {
    createComponent()

    const linkList = findLinkList()

    expect(linkList.text()).toContain('Features')
  })
})