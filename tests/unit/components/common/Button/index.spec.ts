import Button from '@/components/factories/Button/index.vue'
import { shallowMount, VueWrapper } from '@vue/test-utils'

type ButtonProps = {
  onClick: () => void
  disabled?: boolean
  type?: 'primary' | 'secondary'
  height?: number
  width?: number
}

describe('<Button />', () => {
  let wrapper: VueWrapper<any>;

  const createComponent = (buttonProps: ButtonProps) => {
    wrapper = shallowMount(Button, {
      props: {
        ...buttonProps
      }
    })
  }

  const createComponentWithDefaultProps = () => {
    createComponent({
      onClick: () => {},
      disabled: false,
      type: 'primary',
      height: 40,
      width: 100
    })
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render correctly', () => {
    createComponentWithDefaultProps()

    expect(wrapper.element).toMatchSnapshot()
  })

  it('should call onClick prop when clicked', () => {
    const onClick = jest.fn()
    createComponent({
      onClick,
    })

    wrapper.find('button').trigger('click')

    expect(onClick).toHaveBeenCalled()
  })

  it('should have a primary class when type is primary', () => {
    createComponent({
      onClick: () => {},
      type: 'primary'
    })

    expect(wrapper.classes()).toContain('common__button--primary')
  })

  it('should have a secondary class when type is secondary', () => {
    createComponent({
      onClick: () => {},
      type: 'secondary'
    })

    expect(wrapper.classes()).toContain('common__button--secondary')
  })

  it('should set height to 100px when height is 100', () => {
    createComponent({
      onClick: () => {},
      height: 100
    })

    expect(wrapper.attributes('style')).toContain('height: 100px')
  })

  it('should set width 100px when width is 100', () => {
    createComponent({
      onClick: () => {},
      width: 100
    })

    expect(wrapper.attributes('style')).toContain('width: 100px')
  })

  it('should set disabled when disabled is true', () => {
    createComponent({
      onClick: () => {},
      disabled: true
    })

    expect(wrapper.attributes()).toHaveProperty('disabled')
  })
})