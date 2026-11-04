import { profile } from "../data/portfolio"

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-white/70">
      <p>
        Copyright © {new Date().getFullYear()} by {profile.name} | All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
