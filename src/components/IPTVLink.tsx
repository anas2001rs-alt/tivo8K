interface IPTVLinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function IPTVLink({ children = "IPTV", className = "" }: IPTVLinkProps) {
  return (
    <a
      href="https://tivo8k.co/"
      target="_blank"
      rel="dofollow"
      className={`text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 hover:decoration-blue-300 transition-all duration-200 font-semibold ${className}`}
    >
      {children}
    </a>
  );
}
