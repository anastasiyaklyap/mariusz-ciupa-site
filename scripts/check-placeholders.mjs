import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const MARKER = 'data-placeholder-todo';
const OUT_DIR = 'out';

const htmlFiles = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return full.endsWith('.html') ? [full] : [];
  });

let files;
try {
  files = htmlFiles(OUT_DIR);
} catch {
  console.error(`Nie znaleziono katalogu "${OUT_DIR}/". Uruchom najpierw build.`);
  process.exit(1);
}

const offenders = files.filter((f) => readFileSync(f, 'utf8').includes(MARKER));

if (offenders.length > 0) {
  console.error('\n\x1b[41m\x1b[97m  BUILD ZATRZYMANY  \x1b[0m\n');
  console.error(
    `Znaleziono nieuzupełnione placeholdery na ${offenders.length} stronach:\n`,
  );
  for (const f of offenders) console.error(`  • ${f}`);
  console.error(
    '\nUzupełnij dane od klienta i usuń <Placeholder> z tych miejsc,' +
      '\nalbo zbuduj wersję testową przez `npm run build`.\n',
  );
  process.exit(1);
}

console.log(`✓ Brak placeholderów — ${files.length} stron gotowych na produkcję.`);
