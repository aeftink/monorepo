import React from 'react'
import { partition } from 'lodash'

export const Button = () => {
  const onClick = () => {
    const part = partition([1, 2, 3, 4], n => n % 2)
    console.log("Works.", part)
  }
  return <button onClick={onClick}>WooHoo!</button>
}