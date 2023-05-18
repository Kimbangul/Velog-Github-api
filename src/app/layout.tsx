import GlobalStyle from "@/style/GlobalStyle";

export const metadata = {
  title: 'Velog Github Readme API',
  description: 'Velog Github Readme API',
}

export default function RooaptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="use-credentials" />
      <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
      rel="stylesheet"  
      // @ts-ignore
      precedence="default"
        />
      </head>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  )
}
