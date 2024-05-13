import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'rebass'

const BaseHeading = ({ children, ...rest }) =>
    <Heading>
        { children }
    </Heading>

BaseHeading.propTypes = {
    children: PropTypes.node.isRequired
}

export { BaseHeading }