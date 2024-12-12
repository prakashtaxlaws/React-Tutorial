import React from 'react'
import PropTypes from 'prop-types'

export default function Allskills(props) {
    console.log(props)
  return (
    <>
    <p>{props.skills} {props.emoji}</p>
    </>
  )
}

