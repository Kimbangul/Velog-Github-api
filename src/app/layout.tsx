import GlobalStyle from "@/style/GlobalStyle"

export const metadata = {
  title: 'Velog Github Readme API',
  description: 'Velog Github Readme API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  )
}
