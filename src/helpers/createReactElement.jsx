import React from 'react'
import { Grid } from 'semantic-ui-react'
import cssToObject from 'css-to-object'
import componentList from '../components/components'

const getComponent = name => {
  const groups = Object.keys(componentList)
  const components = groups.reduce(
    (acc, group) => ({ ...acc, ...componentList[group] }),
    {}
  )
  const found = Object.keys(components).find(comp => comp === name)
  if (!~found) throw new Error(`Could not find component ${name}`)
  return components[found]
}

const getPropFromProps = (key, ownProps) => {
  const path = key.split('.')
  const value = path
    .slice(1)
    .reduce(
      (value, prop) =>
        value == null
          ? throw new Error(`Prop ${key} was not found in props!`)
          : value[prop],
      ownProps[path[0]]
    )
  console.log(ownProps)
  console.log({ key })
  console.log({ value })
  if (value === undefined) {
    throw new Error(`Prop ${key} was not found in props!`)
  }

  return value
}

const getPropFromDependencies = (key, map) => {
  const value = map[key]
  if (value === undefined) {
    return getComponent(key)
  }
  return value
}

const parseCssProp = prop =>
  typeof prop === 'string'
    ? cssToObject(prop, { camelCase: true, numbers: true })
    : prop

const parseProp = (propValue, ownProps, map) => {
  if (typeof propValue !== 'string') return propValue
  return propValue.startsWith('#')
    ? getPropFromProps(propValue.slice(1), ownProps)
    : propValue.startsWith('@')
      ? getPropFromDependencies(propValue.slice(1), map)
      : propValue
}

const parseProps = (json, ownProps, map) => {
  const props = { ...json.props }
  delete props.children

  return Object.keys(props).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]:
        prop === 'style'
          ? parseCssProp(props[prop])
          : parseProp(props[prop], ownProps, map)
    }),
    {}
  )
}

const getOperator = obj => Object.keys(obj)[0]

const evaluateTruthy = (expression, ownProps) => {
  const properties = expression.slice(1).split('.')

  return !!properties
    .slice(1)
    .reduce(
      (acc, property) =>
        acc != null
          ? acc[property]
          : throw new Error(
            `Invalid Property: ${property} in expression: ${expression}`
          ),
      ownProps[properties[0]]
    )
}

const evaluatePredicate = (predicate, ownProps) => {
  if (typeof predicate === 'string') {
    return evaluateTruthy(predicate, ownProps)
  }

  const operator = getOperator(predicate)

  if (operator === '$or') {
    return predicate['$or'].some(obj => evaluatePredicate(obj, ownProps))
  }

  if (operator === '$and') {
    return predicate['$and'].every(obj => evaluatePredicate(obj, ownProps))
  }

  if (operator === '$not') {
    return !evaluatePredicate(predicate['$not'], ownProps)
  }

  throw new Error('Missing/Invalid operator!')
}

const parseChildren = (children, ownProps, map) => {
  const childrenElements = children.map((child, index) => {
    const props = parseProps(child, ownProps, map)

    if (child.type === '$if') {
      child =
        child.props.children[~~evaluatePredicate(child.predicate, ownProps)]
    }

    const Component = map[child.type] || getComponent(child.type)
    if (!Component) {
      throw new Error(
        !child.type
          ? 'Element type not specified'
          : `${child.type} was not found in the dependencies.`
      )
    }
    console.log('!!!!!!!!!!', props)
    return (
      <Component key={index} {...props}>
        {child.props &&
          child.props.children &&
          parseChildren(child.props.children, ownProps, map)}
      </Component>
    )
  })

  return childrenElements
}

export default (map, propTypes) => {
  const DynamicGrid = ownProps => {
    const json = ownProps.page
    if (json.type !== 'Grid') {
      throw new Error('Grid must be the first element in the tree!')
    }
    return (
      <Grid {...parseProps(json, ownProps, map)}>
        {parseChildren(json.props.children, ownProps, map)}
      </Grid>
    )
  }

  DynamicGrid.propTypes = propTypes
  return DynamicGrid
}
