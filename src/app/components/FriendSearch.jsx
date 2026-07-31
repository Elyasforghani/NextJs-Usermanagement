'use client'
import { Box, List, ListItem, ListItemText, TextField, Button, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function FriendSearch() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [hasSearched, setHasSearched] = useState(false)

    const handleSearch = () => {
        setHasSearched(true)

        if (!query.trim()) {
            setResults([])
            return
        }

        const url = new URL('https://6a3459d98248ee962fa55807.mockapi.io/project')
        url.searchParams.append('Firstname', query)

        fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        })
        .then(res => res.json())
        .then(tasks => setResults(tasks))
        .catch(() => setResults([]))
    }

    return (
        <Box sx={{ 
            maxWidth: 480, 
            mx: 'auto', 
            mt: 4,
            p: { xs: 2.5, sm: 4 },
            borderRadius: 3,
            bgcolor: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(56, 189, 248, 0.1)',
            border: '1px solid',
            borderColor: 'rgba(56, 189, 248, 0.15)'
        }}>
            <TextField
                fullWidth
                label="Search your friends"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
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
            <Button 
                variant="contained" 
                onClick={handleSearch}
                sx={{ 
                    mt: 2,
                    bgcolor: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    color: '#38bdf8',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    py: 1,
                    px: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        bgcolor: 'rgba(56, 189, 248, 0.25)',
                        borderColor: 'rgba(56, 189, 248, 0.5)',
                        boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)',
                    }
                }}
            >
                Search
            </Button>

            <List sx={{ mt: 2 }}>
                {hasSearched && results.length === 0 ? (
                    <ListItem sx={{ justifyContent: 'center' }}>
                        <ListItemText 
                            primary={
                                <Typography sx={{ color: '#f87171', textAlign: 'center', fontWeight: 500 }}>
                                    User not found
                                </Typography>
                            }
                        />
                    </ListItem>
                ) : (
                    results.map((val, i) => (
                        <ListItem 
                            key={val.id || i}
                            sx={{
                                borderRadius: 1.5,
                                mb: 0.5,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    bgcolor: 'rgba(56, 189, 248, 0.08)',
                                }
                            }}
                        >
                            <ListItemText 
                                primary={
                                    <Typography sx={{ color: '#e2e8f0', fontWeight: 500 }}>
                                        {val.Firstname} - {val.Lastname}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))
                )}
            </List>
        </Box>
    )
}