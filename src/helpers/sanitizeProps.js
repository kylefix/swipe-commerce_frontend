import objectToCss from './objectToCss'

const sanitizeCss = style =>
  typeof style === 'string' ? style : objectToCss(style)

const sanitizeChildren = children =>
  children.map(child => ({
    ...child,
    props: {
      ...(child.props ? sanitizeProps(child.props) : { children: [] })
    }
  }))

export const sanitizeProps = props => {
  const style = props.style ? sanitizeCss(props.style) : ''
  return {
    ...props,
    ...(style ? { style } : {}),
    children: props.children ? sanitizeChildren(props.children) : []
  }
}
