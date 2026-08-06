// Treść czekająca na potwierdzenie lub uzupełnienie przez klienta.
//
// `draft`   — mamy propozycję opartą na czymś konkretnym; klient ma ją
//             potwierdzić albo poprawić.
// `missing` — nie mamy podstawy, żeby cokolwiek napisać; klient musi podać dane.
//
// Oba warianty niosą `data-placeholder-todo`, którego szuka
// scripts/check-placeholders.mjs — `npm run build:prod` przerywa z błędem,
// jeśli którykolwiek trafi do buildu produkcyjnego.
type PlaceholderProps = {
  variant?: 'draft' | 'missing';
  children: React.ReactNode;
};

const STYLES = {
  draft: {
    box: 'border-[#F5A524] bg-[#F5A524]/10',
    tag: 'text-[#F5A524]',
    text: 'text-white/90',
    label: 'do potwierdzenia',
  },
  missing: {
    box: 'border-[#FF2D9B] bg-[#FF2D9B]/15',
    tag: 'text-[#FF2D9B]',
    text: 'text-[#FFB3DC]',
    label: 'do uzupełnienia',
  },
} as const;

export const Placeholder = ({
  variant = 'missing',
  children,
}: PlaceholderProps) => {
  const style = STYLES[variant];

  return (
    <span
      data-placeholder-todo=''
      className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md border-2 border-dashed px-2.5 py-1 align-middle ${style.box}`}
    >
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.18em] ${style.tag}`}
      >
        {style.label}
      </span>
      <span className={`font-medium ${style.text}`}>{children}</span>
    </span>
  );
};
