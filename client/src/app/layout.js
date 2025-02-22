import "./globals.css";

export const metadata = {
  title: "Akbar Haleel",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
    <title>Akbar Haleel</title>
    <meta name="description" content="Synx Up is a cutting-edge software company providing innovative and scalable solutions for businesses worldwide." />
    <meta name="keywords" content="Synx Up, software company, innovative software solutions, scalable software, business software, SaaS, custom software development, tech solutions" />
    <meta name="author" content="Synx Up Team" />
    <meta property="og:title" content="Synx Up - Innovative Software Solutions" />
    <meta property="og:description" content="Synx Up is dedicated to providing scalable, custom software solutions tailored to your business needs." />
    <meta property="og:image" content="https://i.postimg.cc/3xY5pBCf/Whats-App-Image-2024-12-31-at-09-59-14-362f6f71.png" />
    <meta property="og:url" content="https://synxup.tech" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Synx Up - Innovative Software Solutions" />
    <meta name="twitter:description" content="Explore how Synx Up provides scalable, custom software solutions tailored to your needs." />
    <meta name="twitter:image" content="https://i.postimg.cc/3xY5pBCf/Whats-App-Image-2024-12-31-at-09-59-14-362f6f71.png" />
    <link rel="icon" href="https://i.postimg.cc/3xY5pBCf/Whats-App-Image-2024-12-31-at-09-59-14-362f6f71.png" type="image/png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body className="antialiased">
    {children}
  </body>
</html>

  );
}
