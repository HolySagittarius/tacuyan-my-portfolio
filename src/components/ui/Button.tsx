interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  let style = 'px-6 py-3 rounded font-mono text-sm transition-all duration-300 ';
  if (variant === 'primary') {
    style += 'border border-[#64ffda] text-[#64ffda] bg-transparent hover:bg-[#64ffda]/10';
  } else {
    style += 'border border-[#8892b0] text-[#8892b0] bg-transparent hover:border-[#64ffda] hover:text-[#64ffda]';
  }
  return <button onClick={onClick} className={style}>{children}</button>;
}