import Icon from '@/components/common/Icon/index.vue'
import { VueWrapper, shallowMount } from "@vue/test-utils";

type IconProps = {
  name: string
}

describe('<Icon />', () => {
  let wrapper: VueWrapper<any>;

  const createComponent = (iconProps: IconProps) => {
    wrapper = shallowMount(Icon, {
      props: {
        ...iconProps
      }
    })
  }

  const createComponentWithDefaultProps = () => {
    createComponent({
      name: 'Logo'
    })
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render correctly', () => {
    createComponentWithDefaultProps()

    expect(wrapper.element).toMatchSnapshot()
  })
})