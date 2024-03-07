import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
    <Box sx={{my:18, textAlign:'center',p:1.2,"& h4" :{
      fontWeight:'bold',my:2,fontSize:'2rem',},
      "& p":{
        textAlign:'justify',
      },

    }}>
      <Typography variant='h4'>
        Welcome to my Restaurant
      </Typography>
      <p>
      In addition to breakfast, hotels often have lunch and dinner offerings that cater to different tastes. The menu can range from a simple soup and salad to more elaborate dishes like pasta, poultry, or even lobster. They also have a selection of vegetables and other sides to choose from.
      In addition to breakfast, hotels often have lunch and dinner offerings that cater to different tastes. The menu can range from a simple soup and salad to more elaborate dishes like pasta, poultry, or even lobster. They also have a selection of vegetables and other sides to choose from.
      </p>
      <br />
      <p>
      A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.

      A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet.
      </p>
    </Box>
    </Layout>
      )
}

export default About