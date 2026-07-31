'use client'

import React from 'react'
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
  Chip,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import CodeIcon from '@mui/icons-material/Code'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { motion } from 'framer-motion'
import { Web } from '@mui/icons-material'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
}

export default function Footer() {
  // ── Original data ─────────────────────────────────────
  const socialLinks = [
    { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/Elyasforghani', color: '#e2e8f0' },
    { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/alireza-forghani-b4746b263/', color: '#38bdf8' },
    { icon: <EmailIcon />, label: 'Email', href: 'mailto@example.com', color: '#f87171' },
    { icon: <Web />, label: 'website', href: 'https://Elyasforghani.com/', color: '#f87171' },
  ]

  const techStack = ['React', 'Next.js', 'Tailwind', 'JavaScript', 'MUI']


  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        mt: 10,
        py: 6,
        px: { xs: 3, md: 8 },
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(to right, #0f172a, #1e293b, #0f172a)',
        borderTop: '1px solid rgba(56, 189, 248, 0.1)',
      }}
    >
      {/* Top gradient line */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '0%',
          right: '0%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.5), rgba(248, 113, 113, 0.5), transparent)',
        }}
      />

      {/* Background Glow */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
          height: 300,
          background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Box
          sx={{
            maxWidth: 600,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Avatar with Glow Ring */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: -3,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #38bdf8, #f87171)',
                    opacity: 0.6,
                    filter: 'blur(8px)',
                    animation: 'pulse 3s ease-in-out infinite',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
                    '50%': { opacity: 0.8, transform: 'scale(1.05)' },
                  },
                }}
              >
                <Avatar
                  src="/profile.jpg"
                  alt="Elyas Forghani"
                  sx={{
                    width: 100,
                    height: 100,
                    border: '3px solid rgba(56, 189, 248, 0.2)',
                    boxShadow: '0 0 30px rgba(56, 189, 248, 0.2)',
                  }}
                />
              </Box>
            </motion.div>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={itemVariants}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #38bdf8 0%, #f87171 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 0.5,
                }}
              >
                Elyas Forghani
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 0.5,
                  color: 'rgba(148, 163, 184, 0.8)',
                }}
              >
                <CodeIcon sx={{ fontSize: 16, color: '#38bdf8' }} />
                Frontend Developer & UI Enthusiast
              </Typography>
            </Box>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="body2"
              sx={{
                textAlign: 'center',
                maxWidth: 420,
                lineHeight: 1.7,
                fontSize: '0.9rem',
                color: 'rgba(148, 163, 184, 0.7)',
              }}
            >
              Crafting beautiful, performant web experiences with modern technologies.
              Passionate about clean code and intuitive design.
            </Typography>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
              {techStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(56, 189, 248, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#38bdf8',
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    '&:hover': {
                      bgcolor: 'rgba(56, 189, 248, 0.15)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 4px 12px rgba(56, 189, 248, 0.15)',
                    },
                  }}
                />
              ))}
            </Box>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants}>
            <Box sx={{ display: 'flex', gap: 2.5, mt: 1 }}>
              {socialLinks.map((social) => (
                <Tooltip key={social.label} title={social.label} arrow>
                  <motion.div whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <IconButton
                      component="a"
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        bgcolor: 'rgba(56, 189, 248, 0.05)',
                        border: '1px solid rgba(56, 189, 248, 0.15)',
                        color: 'rgba(226, 232, 240, 0.7)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          bgcolor: `${social.color}15`,
                          borderColor: `${social.color}40`,
                          color: social.color,
                          boxShadow: `0 8px 25px ${social.color}20`,
                        },
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                </Tooltip>
              ))}
            </Box>
          </motion.div>

          {/* Divider Line */}
          <motion.div variants={itemVariants} style={{ width: '100%' }}>
            <Box
              sx={{
                width: '60%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.2), transparent)',
                my: 3,
                mx: 'auto',
              }}
            />
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants}>
            <Typography
              variant="caption"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'rgba(148, 163, 184, 0.5)',
              }}
            >
              Built with{' '}
              <FavoriteIcon
                sx={{
                  fontSize: 14,
                  color: '#f87171',
                  animation: 'heartbeat 1.5s ease-in-out infinite',
                  '@keyframes heartbeat': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                  },
                }}
              />{' '}
              by Elyas Forghani &copy; {new Date().getFullYear()}
            </Typography>
          </motion.div>
        </Box>
      </motion.div >
    </Box >
  )
}