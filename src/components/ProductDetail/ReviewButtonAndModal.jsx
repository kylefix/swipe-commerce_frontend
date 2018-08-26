import React, { Component } from 'react'

import ReviewButton from './ReviewButton'

import { Button, Icon, Modal, Form, Message } from 'semantic-ui-react'

import ButtonProps from '../../propTypes/Button.info.json'

const options = [
  { key: '5', text: '★★★★★', value: 5 },
  { key: '4', text: '★★★★', value: 4 },
  { key: '3', text: '★★★', value: 3 },
  { key: '2', text: '★★', value: 2 },
  { key: '1', text: '★', value: 1 }
]

class ReviewModal extends Component {
  state = {
    modalOpen: false,
    rating: 5,
    review: '',
    content: '',
    error: false
  }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = evt => {
    evt.preventDefault()
    const { submitReview, productId, ...props } = this.props

    const { rating, review, content } = this.state

    if (!rating || !review || !content) {
      return this.setState({ error: true }, () =>
        setTimeout(() => this.setState({ error: false }), 2000)
      )
    }

    submitReview({ review, content, rating, productId })

    this.setState({ rating: 5, review: '', comments: '', error: false }, () =>
      this.handleClose()
    )
  }

  renderErrorMessage = () => {}

  render () {
    const { error, modalOpen, review, content, rating } = this.state
    const { submitReview, productId, ...props } = this.props

    return (
      <Modal
        trigger={<ReviewButton fluid onClick={this.handleOpen} {...props} />}
        open={modalOpen}
        onClose={this.handleClose}
        size="tiny"
        color="grey"
      >
        <Modal.Content>
          <Form onSubmit={this.handleSubmit} error={error}>
            <Form.Field required>
              <label>Rating</label>
              <Form.Select
                options={options}
                placeholder="Rating"
                name="rating"
                value={rating}
                onChange={this.handleChange}
                required
              />
            </Form.Field>

            <Form.Field required>
              <label>Topic</label>
              <Form.Input
                placeholder="Review Subject"
                name="review"
                error={review.length === 0}
                value={review}
                onChange={this.handleChange}
              />
            </Form.Field>

            <Form.Field required>
              <label>Comments</label>
              <Form.TextArea
                placeholder="Comments..."
                name="content"
                error={content.length === 0}
                value={content}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Message error header="Error!!" content="Cannot be blank" />
            <Button color="green">
              <Icon name="checkmark" /> Submit Review
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

ReviewModal.propList = { ...ButtonProps }

export default ReviewModal
