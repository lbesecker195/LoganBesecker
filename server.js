const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve any static assets placed in public directory
app.use(express.static(path.join(__dirname, 'public')));

// Favicon route (prevents 502 Bad Gateway logs)
app.get('/favicon.ico', (req, res) => {
  const svgFavicon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="6" fill="#09090b"/>
      <text x="50%" y="54%" font-family="monospace" font-size="16" font-weight="bold" fill="#38bdf8" text-anchor="middle" dominant-baseline="middle">LB</text>
    </svg>
  `.trim();

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svgFavicon);
});

// Root Landing Page Route
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logan Besecker // Software & AI Engineer</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-sky-500 selection:text-white">

  <!-- HEADER / NAV -->
  <header class="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="font-extrabold text-lg tracking-tight text-sky-400">LoganBesecker.com</a>
      <nav class="hidden sm:flex items-center gap-6 text-sm font-semibold text-slate-300">
        <a href="#about" class="hover:text-sky-400 transition">About</a>
        <a href="#apps" class="hover:text-sky-400 transition">Hosted Apps</a>
        <a href="#hire" class="hover:text-sky-400 transition text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1 rounded-full">Hire Me</a>
      </nav>
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main class="flex-1 max-w-6xl w-full mx-auto px-6 py-12 space-y-24">

    <!-- SECTION 1: ABOUT ME -->
    <section id="about" class="space-y-8 pt-4">
      <div class="inline-block text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
        01 // Background & Identity
      </div>
      
      <div class="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight mb-6 text-slate-50">
          Logan Besecker
        </h1>

        <div class="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          <!-- ZEALOT REQUIREMENT AT THE TOP -->
          <div class="p-4 sm:p-5 bg-amber-950/30 border-l-4 border-amber-500 rounded-r-xl">
            <h2 class="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">Foundational Conviction</h2>
            <p class="text-amber-200/90 font-semibold text-lg">One of God's Zealots, guided by purpose, faith, and relentless dedication in all endeavors.</p>
          </div>

          <p>
            Software and prompt engineer with a strong focus on modern artificial intelligence architectures, intelligent agents, and high-performance web engineering.
          </p>

          <p>
            When away from code and architecture design, I spend my time scaling rock faces as an avid rock climber, constantly pushing technical and physical limits.
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: HOSTED APPS -->
    <section id="apps" class="space-y-8">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20 mb-2">
            02 // Application Directory
          </div>
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-50">Interactive Suite & Games</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Cloud Bill Billionaire -->
        <a href="/Apps/Cloud-Bill-Billionaire.html" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/80 hover:shadow-xl hover:shadow-cyan-500/10">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-cyan-400/15 text-2xl rounded-lg">☁️</div>
                <span class="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">Game</span>
              </div>
              <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">Cloud Bill Billionaire</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">Build cloud infrastructure, scale user feature revenue, optimize hosting expenses, and manage burn rates.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-cyan-400">
              <span>Launch Application</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </article>
        </a>

        <!-- Job Search, the Game -->
        <a href="/Apps/Job-Search-The-Game.html" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/80 hover:shadow-xl hover:shadow-sky-500/10">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-sky-400/10 text-2xl rounded-lg">🎮</div>
                <span class="text-xs font-semibold text-sky-400 bg-sky-400/10 px-2.5 py-1 rounded-full border border-sky-400/20">Gamified</span>
              </div>
              <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-sky-300 transition-colors">Job Search, the Game</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">Navigate the job market, submit targeted applications, and survive the recruitment pipeline simulation.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-sky-400">
              <span>Launch Application</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </article>
        </a>

        <!-- Git Rebase Survivor -->
        <a href="/Apps/Git-Rebase-Survivor-Merge-Hell.html" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-xl hover:shadow-amber-500/10">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-amber-400/10 text-2xl rounded-lg">🔀</div>
                <span class="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">Game</span>
              </div>
              <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-300 transition-colors">Git Rebase Survivor</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">Resolve high-stress merge conflicts, manage terminal operations, and keep CI/CD runner costs down.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-amber-400">
              <span>Launch Application</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </article>
        </a>

        <!-- Log Stream Regex Analyzer -->
        <a href="/Apps/Log-Stream-Regex-Analyzer.html" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-xl hover:shadow-emerald-500/10">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-emerald-400/10 text-2xl rounded-lg">🔍</div>
                <span class="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">Utility</span>
              </div>
              <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-300 transition-colors">Log Stream Regex Analyzer</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">Parse, filter, and extract insights from live log streams using custom regular expressions.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-emerald-400">
              <span>Launch Application</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </article>
        </a>

        <!-- SQLite Parquet Explorer -->
        <a href="/Apps/SQLite-Parquet-Explorer.html" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400/80 hover:shadow-xl hover:shadow-indigo-500/10">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-indigo-400/10 text-2xl rounded-lg">🗄️</div>
                <span class="text-xs font-semibold text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-full border border-indigo-400/20">Utility</span>
              </div>
              <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors">SQLite Parquet Explorer</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">Query schema layouts and analyze columnar Parquet files directly alongside browser-based SQLite instances.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-indigo-400">
              <span>Launch Application</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </article>
        </a>

        <!-- Vim Speedrun -->
        <a href="/Apps/Vim-Speedrun.html" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-slate-900/80 border border-slate-800 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-rose-400/80 hover:shadow-xl hover:shadow-rose-500/10">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-rose-400/10 text-2xl rounded-lg">⌨️</div>
                <span class="text-xs font-semibold text-rose-400 bg-rose-400/10 px-2.5 py-1 rounded-full border border-rose-400/20">Game</span>
              </div>
              <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-rose-300 transition-colors">Vim Speedrun</h3>
              <p class="text-sm text-slate-400 leading-relaxed mb-6">Master modal navigation, keys, motions, and speed editing mechanics against time trials.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-rose-400">
              <span>Launch Application</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </article>
        </a>

      </div>
    </section>

    <!-- SECTION 3: HIRE ME CONTRACTOR -->
    <section id="hire" class="space-y-8 pb-12">
      <div class="inline-block text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
        03 // Professional Contracting
      </div>

      <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-4xl space-y-6">
          <h2 class="text-2xl sm:text-4xl font-black text-slate-50 tracking-tight">
            Hire Me as an AI Engineer Contractor
          </h2>

          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            I help engineering teams, startups, and enterprises build custom AI models, prompt automation pipelines, and high-performance web systems.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <!-- SPECIALIZED AI ENGINEERING CARD -->
            <div class="bg-slate-950/80 border border-emerald-500/30 p-5 rounded-xl shadow-lg relative overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
              <div class="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span>🧠</span> AI Engineering
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                PyTorch & TensorFlow model architecture design, LLM fine-tuning (LoRA, PEFT, Hugging Face), local inference execution, and custom dataset preparation pipelines.
              </p>
            </div>

            <!-- PROMPT & AGENTIC SYSTEMS CARD -->
            <div class="bg-slate-950/80 border border-slate-800/80 p-5 rounded-xl">
              <div class="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span>🤖</span> Agents & Prompts
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                Autonomous LLM agent workflows, prompt optimization, retrieval-augmented generation (RAG) pipelines, and structured API tool-calling interfaces.
              </p>
            </div>

            <!-- FULL STACK WEB ARCHITECTURE CARD -->
            <div class="bg-slate-950/80 border border-slate-800/80 p-5 rounded-xl">
              <div class="text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span>⚡</span> Full-Stack Web
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">
                High-performance Express & Node.js backends, responsive Tailwind UI/UX layouts, database integration, and subpath web hosting architectures.
              </p>
            </div>
          </div>

          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a href="mailto:me@LoganBesecker.com" class="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition shadow-lg shadow-emerald-500/20">
              Get in Touch →
            </a>
            <span class="text-xs text-slate-400 font-mono">me@LoganBesecker.com</span>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="border-t border-slate-800/80 bg-slate-900/40 py-8 px-6 text-center text-xs text-slate-500">
    <p>© 2026 Logan Besecker. All rights reserved.</p>
  </footer>

</body>

</html>`);
});

app.listen(PORT, () => {
  console.log(`Root server running at http://localhost:${PORT}`);
});