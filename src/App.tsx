type ResourceLink = {
  label: string
  url: string
  note?: string
}

type PracticeLevel = {
  id: 'beginner' | 'intermediate' | 'pro' | 'advance'
  title: string
  tagline: string
  focus: string[]
  routine: Array<{ minutes: string; item: string }>
  notationTitle: string
  notation: string
  links: ResourceLink[]
}

const levels: PracticeLevel[] = [
  {
    id: 'beginner',
    title: 'Beginner',
    tagline: 'Build clean chords, steady rhythm, and confidence fast.',
    focus: [
      'Tuning, posture, and relaxed fretting hand',
      'Essential open chords + smooth chord changes',
      'Strumming patterns (downstrokes → down/up)',
      'Simple riffs + your first full songs',
    ],
    routine: [
      { minutes: '5', item: 'Warm-up: slow finger independence + light stretches' },
      { minutes: '10', item: 'Chord changes: 2-chord loop with a metronome' },
      { minutes: '10', item: 'Strumming: keep the right hand moving constantly' },
      { minutes: '10', item: 'Song practice: 1–2 easy songs end-to-end' },
    ],
    notationTitle: 'Starter TAB + counting',
    notation:
      'Count 8ths:  1 & 2 & 3 & 4 &\n\nTAB (play slowly, even timing):\nE|----------------|\nB|----------------|\nG|----------------|\nD|--------2---0---|\nA|--0--0----0---2-|\nE|----------------|\n   1  &  2 & 3 &',
    links: [
      {
        label: 'JustinGuitar Beginner Grade 1 (video course page)',
        url: 'https://www.justinguitar.com/classes/beginner-guitar-course-grade-one',
      },
      {
        label: 'JustinGuitar Beginner Grade 2 (video course page)',
        url: 'https://www.justinguitar.com/classes/beginner-guitar-course-grade-two',
      },
      {
        label: 'JustinGuitar Beginner Grade 3 (video course page)',
        url: 'https://www.justinguitar.com/classes/beginner-guitar-course-grade-three',
      },
    ],
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    tagline: 'Unlock barre chords, scales, and tighter groove.',
    focus: [
      'Barre chords (E-shape + A-shape) and moving shapes',
      'Pentatonic patterns + connecting positions',
      'Better timing: accents, subdivisions, and muting',
      'Improvising over simple progressions',
    ],
    routine: [
      { minutes: '5', item: 'Warm-up: alternate picking + string crossing' },
      { minutes: '10', item: 'Barre chords: 2 shapes, clean tone, no buzz' },
      { minutes: '10', item: 'Scale work: minor pentatonic + 1–2 licks' },
      { minutes: '10', item: 'Groove: strum + muting with a drum loop' },
      { minutes: '10', item: 'Song/jam: play with backing tracks or a friend' },
    ],
    notationTitle: 'Minor pentatonic “box 1” (A minor)',
    notation:
      'A minor pentatonic (Box 1)\nE|----------------5--8-|\nB|------------5--8-----|\nG|--------5--7---------|\nD|----5--7-------------|\nA|5--7-----------------|\nE|5--8-----------------|\n\nTip: start at 60 BPM and increase 2–5 BPM when clean.',
    links: [
      {
        label: 'JustinGuitar Intermediate Grade 4 (video course page)',
        url: 'https://www.justinguitar.com/classes/intermediate-guitar-course-grade-four',
      },
      {
        label: 'JustinGuitar Intermediate Grade 5 (video course page)',
        url: 'https://www.justinguitar.com/classes/intermediate-guitar-course-grade-five',
      },
      {
        label: 'JustinGuitar Intermediate Grade 6 (video course page)',
        url: 'https://www.justinguitar.com/classes/intermediate-guitar-course-grade-six',
      },
      {
        label: 'Scales & Modes (video lesson hub)',
        url: 'https://www.justinguitar.com/categories/scales-modes',
      },
    ],
  },
  {
    id: 'pro',
    title: 'Pro',
    tagline: 'Advanced harmony, improvisation, and “music-first” practice.',
    focus: [
      'CAGED framework + triads all over the neck',
      'Chord extensions (7ths/9ths/11ths/13ths) and voice-leading',
      'Improvising with targets (chord tones > scales)',
      'Rhythm fills, dynamics, and phrasing',
    ],
    routine: [
      { minutes: '10', item: 'Technique: pick control, legato, and clean bends' },
      { minutes: '10', item: 'Harmony: learn one chord family in 3 positions' },
      { minutes: '10', item: 'Improvisation: chord-tone targeting over changes' },
      { minutes: '10', item: 'Repertoire: refine 1 song (tone, feel, dynamics)' },
      { minutes: '10', item: 'Record yourself and take 2 notes for tomorrow' },
    ],
    notationTitle: 'ii–V–I shell voicings (key of C)',
    notation:
      'Shell voicings (3rds + 7ths)\nDm7   G7    Cmaj7\nE|---------------------|\nB|--6-----3-----5------|\nG|--5-----4-----4------|\nD|---------------------|\nA|---------------------|\nE|---------------------|\n\nListen for smooth voice-leading: notes move by 1 fret.',
    links: [
      {
        label: 'JustinGuitar Advanced Grade 7 (video course page)',
        url: 'https://www.justinguitar.com/classes/advanced-guitar-course-grade-seven',
      },
      {
        label: 'Technique Study (video lesson hub)',
        url: 'https://www.justinguitar.com/categories/technique-study',
      },
      {
        label: 'Practical Music Theory (video course page)',
        url: 'https://www.justinguitar.com/classes/practical-fast-fun-music-theory',
        note: 'Some lessons may require an account/subscription for full access.',
      },
    ],
  },
  {
    id: 'advance',
    title: 'Advance',
    tagline: 'Mastery track: ears, vocabulary, and creative control.',
    focus: [
      'Transcribing: learn solos/melodies by ear and write them down',
      'Arpeggios and chord-tone lines through progressions',
      'Modes & melodic sequencing without “running shapes”',
      'Time feel: pocket, polyrhythms, and articulation',
    ],
    routine: [
      { minutes: '10', item: 'Ear training: identify intervals + chord quality' },
      { minutes: '15', item: 'Transcribe 2–4 bars (slow down, sing it first)' },
      { minutes: '15', item: 'Arpeggios: one progression, 3 positions' },
      { minutes: '10', item: 'Creative constraints: improvise with 3 notes only' },
      { minutes: '10', item: 'Performance: play a full take, no stopping' },
    ],
    notationTitle: 'Arpeggio idea (Cmaj7) — think “liquid chord”',
    notation:
      'Cmaj7 arpeggio tones: C E G B\nE|----------------7-8-|\nB|-----------8--------|\nG|------9-------------|\nD|-10-----------------|\nA|--------------------|\nE|--------------------|\n\nGoal: connect to the next chord by the nearest note.',
    links: [
      {
        label: 'Transcribing (video lesson hub)',
        url: 'https://www.justinguitar.com/categories/transcribing',
      },
      {
        label: 'Arpeggios (video lesson hub)',
        url: 'https://www.justinguitar.com/categories/arpeggios',
      },
      {
        label: 'Ear Training (video lesson hub)',
        url: 'https://www.justinguitar.com/categories/ear-training',
      },
      {
        label: 'Scales & Modes (video lesson hub)',
        url: 'https://www.justinguitar.com/categories/scales-modes',
      },
    ],
  },
]

function classNames(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(' ')
}

function ExternalLink({ link }: { link: ResourceLink }) {
  return (
    <a
      className="inline-flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
      href={link.url}
      target="_blank"
      rel="noreferrer"
      title={link.note ?? link.label}
    >
      <span className="truncate">{link.label}</span>
      <span className="shrink-0 text-white/50">↗</span>
    </a>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-700/30 via-sky-600/20 to-amber-500/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="font-semibold tracking-tight">
            <span className="text-white">Papan&apos;s</span>{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-amber-300 to-sky-300 bg-clip-text text-transparent">
              Guitar Class
            </span>
          </a>
          <nav className="hidden gap-2 md:flex">
            {levels.map((level) => (
              <a
                key={level.id}
                href={`#${level.id}`}
                className="rounded-full px-3 py-1 text-sm text-white/80 hover:bg-white/10 hover:text-white"
              >
                {level.title}
              </a>
            ))}
            <a
              href="#notation"
              className="rounded-full px-3 py-1 text-sm text-white/80 hover:bg-white/10 hover:text-white"
            >
              Notation
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-16 pt-10">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-10">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

          <div className="relative">
            <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
              Practice guitar with a plan made by Papan —{' '}
              <span className="bg-gradient-to-r from-fuchsia-400 via-amber-300 to-sky-300 bg-clip-text text-transparent">
                from first chords to advanced musicianship
              </span>
              .
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base text-white/75 md:text-lg">
              Four levels, clear routines, and notation you can actually use.
              Pick your level, follow the daily practice block, and use the linked video lessons to guide you.
            </p>
            <div className="mt-6">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-2xl border border-white/10"
                  src="https://www.youtube.com/embed/j6I4cBS5HUE"
                  title="Course end result demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#beginner"
                className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-amber-400 to-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                Start practicing
              </a>
              <a
                href="https://www.justinguitar.com/metronome"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Open a metronome ↗
              </a>
            </div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold text-white">Simple</div>
                <div className="mt-1 text-sm text-white/70">One page. Four levels. Zero fluff.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold text-white">Practical</div>
                <div className="mt-1 text-sm text-white/70">Short daily blocks you can repeat.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold text-white">Musical</div>
                <div className="mt-1 text-sm text-white/70">Always connect technique to songs.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6">
          {levels.map((level) => (
            <article
              key={level.id}
              id={level.id}
              className={classNames(
                'scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8',
              )}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    <span className="bg-gradient-to-r from-amber-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
                      {level.title}
                    </span>
                  </h2>
                  <p className="mt-2 max-w-2xl text-white/75">{level.tagline}</p>
                </div>
                <a
                  href="#top"
                  className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  Back to top
                  <span className="text-white/50">↑</span>
                </a>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-sm font-semibold text-white">What to focus on</div>
                  <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-white/75">
                    {level.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-sm font-semibold text-white">Daily practice (40–55 min)</div>
                  <ul className="mt-3 grid gap-2 text-sm text-white/75">
                    {level.routine.map((r) => (
                      <li key={`${r.minutes}-${r.item}`} className="flex gap-3">
                        <span className="w-10 shrink-0 rounded-lg bg-white/10 px-2 py-1 text-center text-xs font-semibold text-white">
                          {r.minutes}
                        </span>
                        <span className="leading-relaxed">{r.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="text-sm font-semibold text-white">Videos & lessons</div>
                  <div className="mt-3 grid gap-2">
                    {level.links.map((link) => (
                      <ExternalLink key={link.url} link={link} />
                    ))}
                  </div>
                  <p className="mt-3 text-xs text-white/55">
                    Links open externally. Availability may vary by region/account.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <div className="text-sm font-semibold text-white">{level.notationTitle}</div>
                <pre className="mt-3 overflow-x-auto rounded-xl bg-black/30 p-4 font-mono text-xs leading-relaxed text-white/85 md:text-sm">
                  {level.notation}
                </pre>
              </div>
            </article>
          ))}
        </section>

        <section id="notation" className="mt-10 scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Notation cheat sheet</h2>
          <p className="mt-2 max-w-3xl text-white/75">
            A quick reference so the exercises above make sense.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <div className="text-sm font-semibold text-white">TAB basics</div>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-black/30 p-4 font-mono text-xs leading-relaxed text-white/85 md:text-sm">
{`TAB lines (top is thinnest string):
e|----------------|
B|----------------|
G|----------------|
D|----------------|
A|----------------|
E|----------------|

Numbers = frets, 0 = open string
h = hammer-on, p = pull-off
/ or \\ = slide up/down
b = bend, r = release bend
~ = vibrato`}
              </pre>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <div className="text-sm font-semibold text-white">Rhythm counting</div>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-black/30 p-4 font-mono text-xs leading-relaxed text-white/85 md:text-sm">
{`Quarter notes:   1   2   3   4
Eighth notes:     1 & 2 & 3 & 4 &
Sixteenth notes:  1 e & a 2 e & a 3 e & a 4 e & a

Metronome tip:
- Click = quarters
- Keep your strumming/picking moving in the subdivision`}
              </pre>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <div className="text-sm font-semibold text-white">Chord boxes</div>
              <pre className="mt-3 overflow-x-auto rounded-xl bg-black/30 p-4 font-mono text-xs leading-relaxed text-white/85 md:text-sm">
{`Chord box = 6 strings (left→right: E A D G B e)
X = mute, 0 = open, numbers = fingers

Example: Em
e|--0
B|--0
G|--0
D|--2
A|--2
E|--0`}
              </pre>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-white/60">
          <p>
            Built for practice. Keep it musical. Keep it fun.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
