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
      <rect width="32" height="32" rx="6" fill="#0f172a"/>
      <text x="50%" y="54%" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#0284c7" text-anchor="middle" dominant-baseline="middle">LB</text>
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

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TJDDRBWMC5"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-TJDDRBWMC5');
  </script>
</head>

<body class="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans antialiased selection:bg-sky-200 selection:text-slate-900">

  <!-- HEADER / NAV -->
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
    <div class="max-w-6xl mx-auto px-6 min-h-16 py-3 flex items-center justify-between gap-4">
      <a href="#" class="font-extrabold text-lg tracking-tight text-sky-700 shrink-0">LoganBesecker.com</a>
      <nav class="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-slate-600">
        <a href="https://cosmicgovernmentsambassador.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">CosmicGovernmentsAmbassador</a>
        <a href="https://csuitefinder.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">CSuiteFinder</a>
        <a href="https://www.csuitnecessities.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">CSuitNecessities</a>
        <a href="https://seriouslysimpleanalytics.com" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">SeriouslySimpleAnalytics</a>
        <a href="https://ai.mcpharbor.dev/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">MCP Registry</a>
        <a href="https://www.rnews1.com/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">rnews1</a>
        <a href="https://ai.agentemaillist.com/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">Agent Email List</a>
        <a href="https://piecework.loganbesecker.com/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">Piecework</a>
        <a href="https://claudeslist.loganbesecker.com/" target="_blank" rel="noopener noreferrer" class="hover:text-sky-700 transition whitespace-nowrap">ClaudesList</a>
        <a href="#hire" class="hover:text-sky-700 transition text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full whitespace-nowrap">Hire Me</a>
      </nav>
    </div>
  </header>

  <!-- MAIN CONTENT -->
  <main class="flex-1 max-w-6xl w-full mx-auto px-6 py-12 space-y-24">

    <!-- SECTION 1: ABOUT ME -->
    <section id="about" class="space-y-8 pt-4">
      <div class="inline-block text-xs font-bold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
        01 // Background &amp; Identity
      </div>
      
      <div class="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl pointer-events-none"></div>
        
        <h1 class="text-3xl sm:text-5xl font-black tracking-tight mb-6 text-slate-900">
          Logan Besecker
        </h1>

        <div class="space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg relative">
          <div class="p-4 sm:p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
            <h2 class="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Foundational Conviction</h2>
            <p class="text-amber-900 font-semibold text-lg">One of God's Zealots, guided by faith and purpose.</p>
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

    <!-- SECTION 2: LUCKY NUMBERS -->
    <section id="lucky" class="space-y-8">
      <div>
        <div class="inline-block text-xs font-bold uppercase tracking-widest text-violet-700 bg-violet-50 px-3 py-1 rounded-full border border-violet-200 mb-2">
          04 // Lucky Numbers
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Personal Lucky Numbers</h2>
        <p class="mt-2 text-slate-500 text-base max-w-2xl">A curated set of numbers I keep close — for games, fun, and good fortune.</p>
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm">
        <div class="flex flex-wrap gap-2.5">
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">0</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">1</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">2</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">3</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">4</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">5</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">6</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">7</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">8</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">9</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">10</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">11</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">12</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">13</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">14</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">17</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">22</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">23</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">24</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">25</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">26</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">27</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">topMill</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">216</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">195</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">41</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">1119</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">193</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">1193</span>
            <span class="inline-flex items-center justify-center min-w-[2.75rem] h-11 px-3 rounded-full bg-sky-50 text-sky-800 font-semibold text-sm border border-sky-200">111993</span>
        </div>
      </div>
    </section>


    <!-- SECTION 3: PRODUCTS -->
    <section id="products" class="space-y-8">
      <div>
        <div class="inline-block text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mb-2">
          02 // Products &amp; Ventures
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Live Products</h2>
        <p class="mt-2 text-slate-500 text-base max-w-2xl">Independent products I build and operate.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <a href="https://csuitefinder.com" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-indigo-50 text-xl font-black text-indigo-700 rounded-lg border border-indigo-100">CF</div>
                <span class="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">SaaS</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">CSuiteFinder.com</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">Turn a name and company into a verified work email. Reach the decision-maker — not the contact form — via browser seats or a plain JSON API.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-indigo-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>

        <a href="https://www.csuitnecessities.com" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-amber-50 text-xl font-black text-amber-700 rounded-lg border border-amber-100">CN</div>
                <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">Reviews</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">CSuitNecessities.com</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">Hands-on reviews of the leather, pens, audio, chairs, luggage, and desk gear that belong in an executive&rsquo;s daily kit — straight answers on what&rsquo;s worth the spend.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-amber-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>

        <a href="https://seriouslysimpleanalytics.com" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-emerald-50 text-xl font-black text-emerald-700 rounded-lg border border-emerald-100">SA</div>
                <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Analytics</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">SeriouslySimpleAnalytics.com</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">Free, unlimited website analytics from one script tag — dwell vs engaged time, scroll depth, click paths, form abandonment, and named AI crawler traffic.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-emerald-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>


        <a href="https://ai.mcpharbor.dev/" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-emerald-50 text-xl font-black text-emerald-700 rounded-lg border border-emerald-100">MR</div>
                <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">Directory</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">MCP Registry</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">Browse and publish Model Context Protocol servers. A searchable registry AI agents can query directly over MCP.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-emerald-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>

        <a href="https://www.rnews1.com/" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-rose-50 text-xl font-black text-rose-700 rounded-lg border border-rose-100">RN</div>
                <span class="text-xs font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">Newsletter</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-rose-700 transition-colors">rnews1.com</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">Real news, made for one reader at a time. Original reporting, chosen and written per subscriber, in a dozen languages.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-rose-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>

        <a href="https://ai.agentemaillist.com/" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-violet-50 text-xl font-black text-violet-700 rounded-lg border border-violet-100">AE</div>
                <span class="text-xs font-semibold text-violet-700 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">API</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-violet-700 transition-colors">AgentEmailList.com</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">A mail API built for autonomous agents. Send and receive real email over a plain JSON interface, no SMTP wrangling.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-violet-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>

        <a href="https://piecework.loganbesecker.com/" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-cyan-50 text-xl font-black text-cyan-700 rounded-lg border border-cyan-100">PW</div>
                <span class="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">Marketplace</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">Piecework</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">A marketplace for AI work paid by the piece, settled in sats. Post a task, get it done, pay per unit delivered.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-cyan-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>


        <a href="/Apps/" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-amber-50 text-xl font-black text-amber-700 rounded-lg border border-amber-100">AD</div>
                <span class="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">Free Tools</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">App Directory</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">A growing set of free browser tools and developer games &mdash; regex log analysis, SQLite and Parquet exploration, a Vim speedrun, and more. No signup, nothing to install.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-amber-700">
              <span>Open the directory</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>


        <a href="https://claudeslist.loganbesecker.com/" target="_blank" rel="noopener noreferrer" class="group block h-full no-underline">
          <article class="h-full flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-100">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 flex items-center justify-center bg-teal-50 text-xl font-black text-teal-700 rounded-lg border border-teal-100">CL</div>
                <span class="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">Marketplace</span>
              </div>
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">ClaudesList</h3>
              <p class="text-sm text-slate-500 leading-relaxed mb-6">Classifieds written for AI agents. Post and browse listings in a structured format agents can read, search and act on directly.</p>
            </div>
            <div class="flex items-center text-sm font-semibold text-teal-700">
              <span>Visit site</span>
              <span class="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
            </div>
          </article>
        </a>

      </div>
    </section>

    <!-- SECTION 4: HIRE ME CONTRACTOR -->
    <section id="hire" class="space-y-8 pb-12">
      <div class="inline-block text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
        05 // Professional Contracting
      </div>

      <div class="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm relative overflow-hidden">
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-4xl space-y-6 relative">
          <h2 class="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Hire Me as an AI Engineer Contractor
          </h2>

          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            I help engineering teams, startups, and enterprises build custom AI models, prompt automation pipelines, and high-performance web systems.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div class="bg-slate-50 border border-emerald-200 p-5 rounded-xl shadow-sm relative overflow-hidden">
              <div class="text-emerald-700 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span>🧠</span> AI Engineering
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                PyTorch &amp; TensorFlow model architecture design, LLM fine-tuning (LoRA, PEFT, Hugging Face), local inference execution, and custom dataset preparation pipelines.
              </p>
            </div>

            <div class="bg-slate-50 border border-slate-200 p-5 rounded-xl">
              <div class="text-emerald-700 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span>🤖</span> Agents &amp; Prompts
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Autonomous LLM agent workflows, prompt optimization, retrieval-augmented generation (RAG) pipelines, and structured API tool-calling interfaces.
              </p>
            </div>

            <div class="bg-slate-50 border border-slate-200 p-5 rounded-xl">
              <div class="text-emerald-700 font-bold mb-2 text-sm uppercase tracking-wide flex items-center gap-1.5">
                <span>⚡</span> Full-Stack Web
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                High-performance Express &amp; Node.js backends, responsive Tailwind UI/UX layouts, database integration, and subpath web hosting architectures.
              </p>
            </div>
          </div>

          <div class="pt-4 flex flex-wrap items-center gap-4">
            <a href="mailto:me@LoganBesecker.com" class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition shadow-md shadow-emerald-200">
              Get in Touch &rarr;
            </a>
            <span class="text-xs text-slate-500 font-mono">me@LoganBesecker.com</span>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- FOOTER -->
  <footer class="border-t border-slate-200 bg-white py-8 px-6 text-center text-xs text-slate-500">
    <p>&copy; 2026 Logan Besecker. All rights reserved.</p>
  </footer>

</body>

</html>`);
});

app.listen(PORT, () => {
  console.log(`Root server running at http://localhost:${PORT}`);
});
