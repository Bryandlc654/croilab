export interface Client {
  name: string;
  classes: string;
}

export const clients: Client[] = [
  { name: 'NOVACORE', classes: 'text-2xl font-semibold tracking-[.3em] text-black/55' },
  { name: 'Meridian', classes: 'text-3xl font-bold italic tracking-tight text-black/50' },
  { name: 'altawind', classes: 'text-xl font-medium lowercase tracking-[.12em] text-black/60' },
  {
    name: 'VOLTEX<sup class="text-[10px]">®</sup>',
    classes: 'text-2xl font-semibold tracking-tight text-black/55',
  },
  { name: 'Lumina', classes: 'text-2xl font-light tracking-[.22em] uppercase text-black/50' },
  { name: 'orbito', classes: 'text-2xl font-bold italic text-black/60' },
  { name: 'Hépton', classes: 'text-3xl font-semibold tracking-[-.05em] text-black/55' },
  { name: 'Vertex.', classes: 'text-xl font-medium tracking-[.28em] uppercase text-black/50' },
  { name: 'KANDIA', classes: 'text-2xl font-black italic tracking-tight text-black/55' },
  { name: 'fluido', classes: 'text-2xl font-semibold lowercase tracking-wide text-black/50' },
];
