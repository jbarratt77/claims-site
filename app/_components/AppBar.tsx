'use client'

import { FC } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'

export const ButtonAppBar: FC = () => {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SolanaCorn Claims Site Template
          </Typography>
          <WalletMultiButton />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
