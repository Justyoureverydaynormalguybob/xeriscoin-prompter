import './globals.css'

export const metadata = {
  title: 'XerisCoin Testnet Prompter',
  description: 'Command helper for installing and running XerisCoin testnet validator',
  keywords: 'xeriscoin, testnet, blockchain, validator, crypto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
