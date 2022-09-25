
import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './Styles'

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root} >
       <Typography variant='h4' > Hello from Header </Typography>
    </div>
  )
}

export default Header 