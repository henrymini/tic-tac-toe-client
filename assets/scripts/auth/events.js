'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const onSignup = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
  // console.log('im in')
}

const onSignin = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  console.log(formData)
}

const onSignout = event => {
  event.preventDefault()
  console.log('signed out')
}

const addHandlers = event => {
  $('#signup').on('submit', onSignup)
  $('#signin').on('submit', onSignin)
  $('#changepw').on('submit', onChangePassword)
  $('#signout').on('submit', onSignout)
}

module.exports = {
  addHandlers
}
