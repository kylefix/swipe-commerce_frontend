import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Icon,
  Container,
  Dimmer,
  Loader,
  Progress
} from 'semantic-ui-react'

import { submitProduct, editProduct } from '../../../../reducers/seller'

const ProductHeader = props => (
  <Grid.Row>
    <Grid.Column>
      <Header as='h1' textAlign='center' style={{ margin: '2rem 0' }}>
        {props.children}
      </Header>
    </Grid.Column>
  </Grid.Row>
)

class ProductForm extends Component {
  state = {}
  static contextTypes = {
    router: PropTypes.object
  }

  constructor (props, context) {
    super(props, context)
    const { product } = this.props

    this.state = {
      edit: product && product.title,
      title: product ? product.title : '',
      price: product ? product.price : '',
      images: product ? product.images : [],
      qInStock: product ? product.qInStock : '',
      description: product ? product.description : '',
      status: product ? product.status : '',
      categoryId: product ? product.categoryId : '',
      city: product ? product.city : '',
      imageUrl: product ? product.images : [],
      isUploading: [false, false, false],
      progress: [0, 0, 0],
      uploadError: [0, 0, 0],
      error: product ? product.error : false
    }
  }

  handleChange = (e, { name, value }) => {
    console.log({ name, value })
    this.setState({ [name]: value })
  }

  handleSubmit = evt => {
    evt.preventDefault()

    if (Object.values(this.state).some(value => value === '')) {
      return this.setState({ error: true }, () =>
        setTimeout(() => this.setState({ error: false }), 2000)
      )
    }

    const data = {
      ...this.state,
      imageUrl: undefined,
      error: undefined,
      isUploading: undefined,
      progress: undefined,
      uploadError: undefined,
      images: [...this.state.imageUrl]
    }

    if (this.state.edit) {
      this.props.editProduct({
        ...data,
        _id: this.props.id
      })
    } else {
      this.props.submit(data)
    }

    // TODO do error checking here
    this.context.router.history.push('/dashboard/products')
  }
  handleUploadStart = i => {
    const uploadingArr = [...this.state.isUploading]
    const progressArr = [...this.state.progress]
    progressArr[i] = 0
    uploadingArr[i] = true
    this.setState({ isUploading: uploadingArr, progress: progressArr })
  }
  handleProgress = (progress, i) => {
    const progressArr = [...this.state.progress]
    progressArr[i] = progress
    this.setState({ progress: progressArr })
  }
  handleUploadError = (error, i) => {
    const errorArr = [...this.state.uploadError]
    errorArr[i] = error
    this.setState({ uploadError: errorArr })
    console.error(error)
  }
  handleUploadSuccess = (filename, i) => {
    const uploadingArr = [...this.state.isUploading]
    const progressArr = [...this.state.progress]
    progressArr[i] = 100
    uploadingArr[i] = false
    this.setState({ progress: progressArr, isUploading: uploadingArr })
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        const imageUrl = [...this.state.imageUrl]
        imageUrl[i] = url
        this.setState({ imageUrl: imageUrl })
      })
  }

  renderUpload = i => (
    <Form.Field key={i} required>
      <label> Image 1 </label>
      <FileUploader
        accept='image/*'
        name='avatar'
        randomizeFilename
        storageRef={firebase.storage().ref('images')}
        onUploadStart={() => this.handleUploadStart(i)}
        onUploadError={error => this.handleUploadError(error, i)}
        onUploadSuccess={filename => this.handleUploadSuccess(filename, i)}
        onProgress={progress => this.handleProgress(progress, i)}
      />
      {this.state.isUploading[i] && (
        <Progress percent={this.state.progress[i]} color='green' autoSuccess />
      )}
      {this.state.imageUrl[i] && <img src={this.state.imageUrl[i]} />}
    </Form.Field>
  )

  render () {
    const {
      title,
      price,
      qInStock,
      description,
      categoryId,
      status,
      city,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      error
    } = this.state

    if (this.props.loading) {
      return (
        <Dimmer page active>
          <Loader active size='huge' />
        </Dimmer>
      )
    }

    return (
      <Grid>
        <ProductHeader>New Product</ProductHeader>
        <Container style={{ marginBottom: '3rem' }}>
          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit} error={error}>
                <Form.Field required>
                  <label> Title </label>
                  <Form.Input
                    placeholder='Product Title'
                    name='title'
                    value={title}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Form.Field required>
                  <label> Price </label>
                  <Form.Input
                    type='number'
                    placeholder='Price'
                    name='price'
                    value={price}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Form.Field required>
                  <label> Quantity In Stock </label>
                  <Form.Input
                    type='number'
                    placeholder='Quantity In Stock'
                    name='qInStock'
                    value={qInStock}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Form.Field required>
                  <label> Status </label>
                  <Form.Input
                    placeholder='Product Status'
                    name='status'
                    value={status}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Form.Field required>
                  <label> City </label>
                  <Form.Input
                    placeholder='City'
                    name='city'
                    value={city}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Form.Field required>
                  <label> Description </label>
                  <Form.TextArea
                    placeholder='Description of the product'
                    name='description'
                    value={description}
                    onChange={this.handleChange}
                  />
                </Form.Field>

                <Form.Field required>
                  <label> Category </label>
                  <Form.Dropdown
                    placeholder='Select Category'
                    fluid
                    search
                    selection
                    name='categoryId'
                    value={categoryId}
                    onChange={this.handleChange}
                    options={this.props.categories}
                  />
                </Form.Field>

                {[...Array(3)].map((_, i) => this.renderUpload(i))}

                <Message error header='Error!!' content='Cannot be blank' />
                <Button color='black'>
                  <Icon name='checkmark' /> Submit Product
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Container>
      </Grid>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.seller.loading,
  product: state.seller.products[ownProps.id],
  categories: state.categories.list.map(cat => ({
    key: cat._id,
    value: cat._id,
    text: cat.name
  }))
})

const mapDispatchToProps = dispatch => ({
  submit: data => dispatch(submitProduct(data)),
  editProduct: data => dispatch(editProduct(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)
