import React from 'react'
import PropTypes from 'prop-types'
import { typography } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const CityInfo = ({ city, country }) => {
  return (
    <>
        <Text>{city}</Text>
        <Text>{country}</Text>
    </>
  )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
}

export default CityInfo