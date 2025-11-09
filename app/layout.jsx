import "../styles/globals.css";

export const metadata = {
  title: "ML Notes (Hindi, Roman Script)",
  description: "World-class beginner-friendly ML notes with visuals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="brand" href="/">ML Notes</a>
            <nav className="nav">
              <a href="/linear-regression">Linear Regression</a>
              <a href="/logistic-regression">Logistic Regression</a>
            </nav>
          </div>
        </header>
        <main className="container content">{children}</main>
        <footer className="site-footer">
          <div className="container">
            <span>Made for beginners ? Hindi (English script)</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
