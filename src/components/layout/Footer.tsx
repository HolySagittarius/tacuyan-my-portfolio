export default function Footer() {
  return (
    <footer className="py-10 px-6 flex flex-col items-center gap-6 border-t border-[#233554]">
      <div className="flex gap-6">
        <a href="https://github.com/HolySagittarius" target="_blank" className="text-[#8892b0] hover:text-[#64ffda]">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-[#8892b0] hover:text-[#64ffda]">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" className="text-[#8892b0] hover:text-[#64ffda]">Twitter</a>
        <a href="https://vercel.com/holysagittarius" target="_blank" className="text-[#8892b0] hover:text-[#64ffda]">Vercel</a>
      </div>
      <p className="font-mono text-xs text-center">© {new Date().getFullYear()} Henry Dave Tacuyan</p>
      <a href="mailto:herohenrydaveb.tacuyan@gmail.com" className="font-mono text-xs text-[#64ffda]">herohenrydaveb.tacuyan@gmail.com</a>
    </footer>
  );
}