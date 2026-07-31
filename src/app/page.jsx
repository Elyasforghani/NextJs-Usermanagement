'use client'
import { Box, Button, List, ListItem, ListItemText, TextField } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Footer from './components/Footer'
import FriendSearch from './components/FriendSearch'


export default function Page() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://6a3459d98248ee962fa55807.mockapi.io/project')
      .then((res) => res.json())
      .then((lava) => setData(lava))
  }, [])

  const [inp, setInp] = useState({
    Firstname: '',
    Lastname: '',
    Age: '',
    Number: ''
  })

  const myInp = (e) => {
    switch (e.target.name) {
      case 'Firstname':
        setInp({ ...inp, Firstname: e.target.value })
        break
      case 'Lastname':
        setInp({ ...inp, Lastname: e.target.value })
        break
      case 'Age':
        setInp({ ...inp, Age: e.target.value })
        break
      case 'Number':
        setInp({ ...inp, Number: e.target.value })
        break
    }
  }

  const para = () => {
    fetch('https://6a3459d98248ee962fa55807.mockapi.io/project', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(inp)
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((task) => {
        alert('user added')
      })
      .catch((error) => {
        alert('error')
      })
  }

  return (
    <div>
      {/* Search component passing fetched API data as prop */}
      <FriendSearch data={data} />

      <Box
        component="div"
        sx={{
          width: '100%',
          maxWidth: 480,
          mx: 'auto',
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          p: { xs: 2.5, sm: 4 },
          bgcolor: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(56, 189, 248, 0.1)',
          border: '1px solid',
          borderColor: 'rgba(56, 189, 248, 0.15)'
        }}
      >
        <TextField
          id="outlined-basic"
          label="Firstname"
          name="Firstname"
          value={inp.Firstname}
          onChange={myInp}
            sx={{
            '& .MuiOutlinedInput-root': {
              color: '#e2e8f0',
              '& fieldset': { borderColor: 'rgba(56, 189, 248, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(56, 189, 248, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
            },
            '& .MuiInputLabel-root': { color: 'rgba(148, 163, 184, 0.8)' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#38bdf8' },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Lastname"
          name="Lastname"
          value={inp.Lastname}
          onChange={myInp}
            sx={{
            '& .MuiOutlinedInput-root': {
              color: '#e2e8f0',
              '& fieldset': { borderColor: 'rgba(56, 189, 248, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(56, 189, 248, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
            },
            '& .MuiInputLabel-root': { color: 'rgba(148, 163, 184, 0.8)' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#38bdf8' },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Age"
          name="Age"
          value={inp.Age}
          onChange={myInp}
            sx={{
            '& .MuiOutlinedInput-root': {
              color: '#e2e8f0',
              '& fieldset': { borderColor: 'rgba(56, 189, 248, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(56, 189, 248, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
            },
            '& .MuiInputLabel-root': { color: 'rgba(148, 163, 184, 0.8)' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#38bdf8' },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Number"
          name="Number"
          value={inp.Number}
          onChange={myInp}
            sx={{
            '& .MuiOutlinedInput-root': {
              color: '#e2e8f0',
              '& fieldset': { borderColor: 'rgba(56, 189, 248, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(56, 189, 248, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: '#38bdf8' },
            },
            '& .MuiInputLabel-root': { color: 'rgba(148, 163, 184, 0.8)' },
            '& .MuiInputLabel-root.Mui-focused': { color: '#38bdf8' },
          }}
        />
        <Button variant="contained" onClick={para}   sx={{
            bgcolor: 'rgba(56, 189, 248, 0.15)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
            textTransform: 'uppercase',
            fontWeight: 600,
            letterSpacing: '0.05em',
            py: 2,
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'rgba(56, 189, 248, 0.25)',
              borderColor: 'rgba(56, 189, 248, 0.5)',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)',
            }
          }}>
          <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            send
          </motion.span>
        </Button>
      </Box>
      <Footer />
    </div>
  )
}