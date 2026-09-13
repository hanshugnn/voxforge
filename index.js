const html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VoxForge | Autonomous Voice Agents & Real-Time Conversational AI</title>
  <meta name="description" content="Enterprise voice intelligence platform powering low-latency conversational agents, multimodal telecommunication, and automated speech synthesis.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    code, pre { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-[#090D16] text-slate-200 antialiased selection:bg-indigo-500 selection:text-white">
  <header class="sticky top-0 z-50 backdrop-blur-md bg-[#090D16]/80 border-b border-slate-800/80">
    <div class="max-w-7xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" /></svg>
        </div>
        <span class="text-xl font-extrabold tracking-tight text-white">Vox<span class="text-indigo-400">Forge</span></span>
      </div>
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
        <a href="#platform" class="hover:text-white transition">Platform</a>
        <a href="#architecture" class="hover:text-white transition">Architecture</a>
        <a href="#api" class="hover:text-white transition">API & SDK</a>
        <a href="#enterprise" class="hover:text-white transition">Enterprise</a>
      </nav>
      <div class="flex items-center space-x-4">
        <a href="#contact" class="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition shadow-md shadow-indigo-600/30">Request Sandbox Access</a>
      </div>
    </div>
  </header>

  <section class="relative pt-24 pb-20 overflow-hidden text-center">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-medium mb-8">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Sub-300ms Realtime Multimodal Inference Engine
      </div>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15]">
        Autonomous Voice AI for <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">Enterprise Infrastructure</span>
      </h1>
      <p class="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
        VoxForge powers ultra-low-latency, stateful conversational agents built on frontier multimodal models, bi-directional audio streaming, and deterministic tool execution.
      </p>
      <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#contact" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base shadow-xl shadow-indigo-600/30 transition">Deploy Voice Pipeline</a>
        <a href="#api" class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-base transition">Explore Documentation</a>
      </div>
    </div>
  </section>

  <section id="platform" class="py-20 border-t border-slate-800/80 bg-slate-950/40">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div class="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
        <h3 class="text-lg font-bold text-white mb-2">Multimodal Audio Streaming</h3>
        <p class="text-slate-400 text-sm">Direct speech-to-speech ingestion without transcription delay, preserving nuance, accent, and conversational tone.</p>
      </div>
      <div class="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
        <h3 class="text-lg font-bold text-white mb-2">Native Telephony Bridge</h3>
        <p class="text-slate-400 text-sm">Integrates directly into standard SIP/WebRTC carriers with integrated jitter buffering and low-latency packet routing.</p>
      </div>
      <div class="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
        <h3 class="text-lg font-bold text-white mb-2">Autonomous Action Execution</h3>
        <p class="text-slate-400 text-sm">Zero-friction function calling linked to CRM, billing databases, and verified internal microservices mid-call.</p>
      </div>
    </div>
  </section>

  <section id="contact" class="py-24 max-w-3xl mx-auto px-6 text-center">
    <div class="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-2xl shadow-xl">
      <h2 class="text-2xl font-extrabold text-white">Request Partner Access</h2>
      <p class="mt-2 text-slate-400 text-sm">Join enterprise teams deploying autonomous conversational voice agents.</p>
      <form class="mt-6 space-y-4 text-left" onsubmit="event.preventDefault(); alert('Request submitted successfully.');">
        <input type="email" required placeholder="corporate@company.com" class="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-indigo-500">
        <button type="submit" class="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition">Request Staging Key</button>
      </form>
    </div>
  </section>

  <footer class="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
    © 2026 VoxForge Inc. Realtime Conversational Voice Intelligence.
  </footer>
</body>
</html>`;

export default {
  async fetch(request) {
    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8",
        "cache-control": "public, max-age=3600"
      },
    });
  },
};
