export default function Eyebrow({
  children,
  align = "left",
}: {
  children: string;
  align?: "left" | "center";
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[#C76A1B] text-xs font-bold tracking-[0.2em] uppercase mb-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
      {children}
      <span className="w-4 h-[2px] bg-[#C76A1B] rounded" />
    </p>
  );
}
