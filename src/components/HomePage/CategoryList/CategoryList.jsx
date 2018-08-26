import React from 'react'
import { Grid, Segment, Divider } from 'semantic-ui-react'
import CategoryListItem from './CategoryListItem'
import PropTypes from 'prop-types'

const categories = [
  {
    categoryName: 'Cell Phones',
    imageUrl:
      'https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/topic_images/2014/Cell-Phone-Plans-topic-page-graphic.png?itok=QMawtS_h'
  },
  {
    categoryName: 'Laptops',
    imageUrl:
      'https://www.technobezz.com/best/wp-content/uploads/2018/04/Lenovo-ThinkPad-11e-Carbon-5th-Gen-.png'
  },
  {
    categoryName: 'Desktops',
    imageUrl:
      'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c05212704.png'
  }
]

const CategoryList = () => {
  const renderItems = categories.map(({ categoryName, imageUrl }, index) => (
    <>
      <CategoryListItem
        key={imageUrl}
        imageUrl={imageUrl}
        categoryName={categoryName}
      />
      {index < categories.length - 1 && <Divider />}
    </>
  ))

  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container verticalAlign="middle">
        {renderItems}
      </Grid>
    </Segment>
  )
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired
    })
  )
}

CategoryList.propList = {
  props: []
}

export default CategoryList
