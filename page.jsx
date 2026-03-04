<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tricomed Clinic | Istanbul's Elite Hair & Aesthetic Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        :root {
            --accent: #d4af37;
            --accent-dark: #b8860b;
            --bg-deep: #050505;
            --glass-white: rgba(255, 255, 255, 0.05);
            --glass-gold: rgba(212, 175, 55, 0.1);
        }
        
        body { 
            font-family: 'Plus Jakarta Sans', sans-serif; 
            background-color: #000; 
            color: #fff;
            scroll-behavior: smooth;
        }

        .serif-elite { font-family: 'Cinzel', serif; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 10px; }

        /* Glassmorphism Backgrounds */
        .glass-panel {
            background: var(--glass-white);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            transition: all 0.5s ease;
        }
        .glass-panel:hover {
            border-color: var(--accent);
            background: var(--glass-gold);
        }

        /* Animated Gradient Background */
        .mesh-bg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 70%);
            z-index: -1;
        }

        /* Bento Grid Specifics */
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 1.5rem;
        }

        /* Floating Animation */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
        .float-anim { animation: float 6s ease-in-out infinite; }

        /* Text Stroke */
        .text-stroke {
            -webkit-text-stroke: 1px rgba(212, 175, 55, 0.3);
            color: transparent;
        }
        
        .timeline-line::before {
            content: '';
            position: absolute;
            left: 50%; width: 2px; height: 100%;
            background: linear-gradient(to bottom, transparent, var(--accent), var(--accent), transparent);
            transform: translateX(-50%);
        }

        /* Before/After Custom Styles */
        .ba-card {
            position: relative;
            height: 450px;
            overflow: hidden;
            border-radius: 30px;
        }
        .ba-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
        }

        .header-scrolled {
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(20px);
            padding-top: 1rem !important;
            padding-bottom: 1rem !important;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        /* Comparison Slider */
        .comparison-slider {
            position: relative;
            width: 100%;
            height: 400px;
            overflow: hidden;
        }
        .comparison-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header id="main-header" class="fixed top-0 w-full z-[1000] py-6 px-10 flex justify-between items-center transition-all duration-700">
        <div class="serif-elite text-2xl font-black tracking-[8px] flex flex-col cursor-pointer" onclick="window.scrollTo(0,0)">
            TRICOMED <span class="text-[8px] tracking-[12px] text-[#d4af37] font-sans font-bold">CLINIC ISTANBUL</span>
        </div>
        
        <nav class="hidden xl:flex items-center space-x-10 text-[9px] font-bold tracking-[4px] uppercase">
            <a href="#" class="text-white/70 hover:text-white transition">Home</a>
            <a href="#results" class="text-white/70 hover:text-white transition">Cases</a>
            <a href="#tech" class="text-white/70 hover:text-white transition">Technology</a>
            <a href="#journey" class="text-white/70 hover:text-white transition">Journey</a>
            <a href="#blog" class="text-white/70 hover:text-white transition">Academy</a>
            <div class="h-4 w-px bg-white/10 mx-2"></div>
            <a href="#contact" class="text-[#d4af37] border-b border-[#d4af37] pb-1 hover:text-white hover:border-white transition">Book Appointment</a>
        </nav>

        <div class="flex items-center space-x-6">
            <div class="hidden lg:flex flex-col items-end mr-4">
                <span class="text-[8px] text-[#d4af37] font-bold tracking-widest">VIP CONCIERGE</span>
                <span class="text-sm font-light tracking-widest">+90 546 737 22 84</span>
            </div>
            <button class="w-12 h-12 glass-panel rounded-full flex items-center justify-center">
                <i data-lucide="menu" class="w-4 h-4"></i>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div class="mesh-bg"></div>
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div class="container mx-auto grid lg:grid-cols-12 gap-10 items-center">
            <div class="lg:col-span-7 z-10">
                <div class="flex items-center space-x-4 mb-8">
                    <span class="text-[#d4af37] text-xs font-bold tracking-[6px] uppercase">New Generation Medical Architecture</span>
                    <div class="h-px w-20 bg-[#d4af37]"></div>
                </div>
                <h1 class="serif-elite text-6xl md:text-9xl mb-10 leading-tight">
                    Perfect <br> 
                    <span class="text-stroke">Change</span> <br>
                    <span class="text-[#d4af37]">Design</span>
                </h1>
                <p class="text-white/50 text-xl font-light max-w-xl mb-12 leading-relaxed">
                    Tricomed Clinic is the most exclusive representative of advanced biotechnology and personalized luxury service in Turkey.
                </p>
                <div class="flex flex-wrap gap-6">
                    <button class="px-12 py-6 bg-[#d4af37] text-black font-bold text-[10px] tracking-[4px] uppercase hover:bg-white transition-all shadow-[0_10px_40px_rgba(212,175,55,0.3)]">
                        Free Analysis
                    </button>
                    <button class="px-12 py-6 glass-panel font-bold text-[10px] tracking-[4px] uppercase border border-white/10">
                        Explore Clinic
                    </button>
                </div>
            </div>
            <div class="lg:col-span-5 relative hidden lg:block">
                <div class="float-anim">
                    <div class="relative w-full aspect-square glass-panel rounded-full overflow-hidden p-4 border-[#d4af37]/30 border-[10px]">
                         <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80" class="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" alt="Specialist Surgeon">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Before / After Section -->
    <section id="results" class="py-40 bg-black">
        <div class="container mx-auto px-6">
            <div class="text-center mb-24">
                <h6 class="text-[#d4af37] tracking-[10px] uppercase text-[10px] font-bold mb-4">Masterpiece Collection</h6>
                <h2 class="serif-elite text-5xl md:text-7xl italic">Transformation <span class="text-white opacity-40">Archives</span></h2>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Case 1 -->
                <div class="ba-card group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Before After 1">
                    <div class="absolute inset-0 ba-overlay p-10 flex flex-col justify-end">
                        <span class="text-[#d4af37] text-[10px] font-bold tracking-[4px] uppercase mb-2">Sapphire FUE - 4500 Grafts</span>
                        <h4 class="serif-elite text-2xl">Natural Hairline Design</h4>
                    </div>
                    <div class="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 text-[9px] font-bold tracking-widest uppercase">12 Months After</div>
                </div>
                <!-- Case 2 -->
                <div class="ba-card group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1519419691348-3b3bb640342a?auto=format&fit=crop&q=80" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Before After 2">
                    <div class="absolute inset-0 ba-overlay p-10 flex flex-col justify-end">
                        <span class="text-[#d4af37] text-[10px] font-bold tracking-[4px] uppercase mb-2">DHI Technique - 3800 Grafts</span>
                        <h4 class="serif-elite text-2xl">Maximum Density Application</h4>
                    </div>
                    <div class="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 text-[9px] font-bold tracking-widest uppercase">9 Months After</div>
                </div>
                <!-- Case 3 -->
                <div class="ba-card group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1590159609029-79a0c0e7047d?auto=format&fit=crop&q=80" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Before After 3">
                    <div class="absolute inset-0 ba-overlay p-10 flex flex-col justify-end">
                        <span class="text-[#d4af37] text-[10px] font-bold tracking-[4px] uppercase mb-2">Revision Procedure</span>
                        <h4 class="serif-elite text-2xl">Corrective Hair Transplant</h4>
                    </div>
                    <div class="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 text-[9px] font-bold tracking-widest uppercase">14 Months After</div>
                </div>
            </div>
        </div>
    </section>

    <!-- NEW: Precision Comparison Section -->
    <section class="py-20 bg-zinc-950">
        <div class="container mx-auto px-6">
            <div class="glass-panel rounded-[50px] overflow-hidden p-2">
                <div class="grid lg:grid-cols-2">
                    <div class="p-12 md:p-20 flex flex-col justify-center">
                        <div class="flex items-center space-x-3 mb-6">
                            <span class="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                            <span class="text-[10px] font-bold tracking-[5px] uppercase text-white/50">Precision Mapping</span>
                        </div>
                        <h3 class="serif-elite text-4xl md:text-5xl mb-8 leading-tight italic">Volume and <span class="text-[#d4af37]">Density</span> Analysis</h3>
                        <p class="text-white/40 text-sm leading-relaxed mb-10 max-w-md">
                            With Tricomed's patented analysis techniques, we measure hair density before and after the transplant by calculating the number of follicles per square centimeter. Result: Indisputable success.
                        </p>
                        <div class="flex space-x-12">
                            <div>
                                <div class="text-3xl serif-elite text-[#d4af37] mb-1">98%</div>
                                <div class="text-[9px] font-bold tracking-widest text-white/30 uppercase">Satisfaction</div>
                            </div>
                            <div>
                                <div class="text-3xl serif-elite text-[#d4af37] mb-1">0.1mm</div>
                                <div class="text-[9px] font-bold tracking-widest text-white/30 uppercase">Channel Precision</div>
                            </div>
                        </div>
                    </div>
                    <div class="relative bg-black min-h-[400px] group overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" class="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 transition-transform duration-1000" alt="Comparison Analysis">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-32 h-32 rounded-full border border-[#d4af37]/30 flex items-center justify-center backdrop-blur-md bg-[#d4af37]/5">
                                <i data-lucide="scan" class="w-12 h-12 text-[#d4af37] animate-pulse"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Technology & Bento (Detailed) -->
    <section id="tech" class="py-40 px-6">
        <div class="container mx-auto">
            <div class="text-center mb-24">
                <h6 class="text-[#d4af37] tracking-[10px] uppercase text-[10px] font-bold mb-4">Science Meets Luxury</h6>
                <h2 class="serif-elite text-5xl md:text-7xl italic">Medical <span class="text-white opacity-40">Architecture</span></h2>
            </div>

            <div class="bento-grid">
                <!-- Large Feature: AI Diagnosis -->
                <div class="col-span-12 lg:col-span-8 glass-panel p-12 rounded-[40px] relative overflow-hidden group">
                    <div class="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div class="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-8">
                                <i data-lucide="cpu" class="w-10 h-10"></i>
                            </div>
                            <h3 class="serif-elite text-4xl md:text-5xl mb-6">AI-Powered <br> Diagnosis System</h3>
                            <p class="text-white/40 text-sm max-w-md leading-relaxed">Our artificial intelligence algorithms scan your scalp at a microscopic level, analyzing your hair loss pattern with 98% accuracy and calculating the most suitable graft distribution for you with millimetric precision.</p>
                        </div>
                        <div class="mt-12 flex space-x-8 text-[10px] font-bold tracking-widest uppercase text-[#d4af37]">
                            <span class="flex items-center"><i data-lucide="check-circle" class="w-4 h-4 mr-2"></i> 98% Precision</span>
                            <span class="flex items-center"><i data-lucide="check-circle" class="w-4 h-4 mr-2"></i> 3D Simulation</span>
                        </div>
                    </div>
                    <div class="absolute right-[-5%] top-[-5%] w-[40%] opacity-5 group-hover:opacity-10 transition-opacity">
                        <i data-lucide="scan-face" class="w-full h-full text-white"></i>
                    </div>
                </div>

                <!-- Feature 2: Safir Blade -->
                <div class="col-span-12 lg:col-span-4 glass-panel p-10 rounded-[40px] group">
                    <i data-lucide="gem" class="w-12 h-12 text-[#d4af37] mb-8"></i>
                    <h3 class="serif-elite text-2xl mb-4 text-[#d4af37]">Sapphire Clinic Blade</h3>
                    <p class="text-white/40 text-xs leading-relaxed mb-8">Blades made from genuine sapphire gemstones open smoother channels compared to steel blades, keeping tissue trauma near zero.</p>
                    <div class="w-full h-44 bg-white/5 rounded-3xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1579154235602-3c2c24fd2398?auto=format&fit=crop&q=80" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Technology">
                    </div>
                </div>

                <!-- NEW Feature: Exosome Therapy -->
                <div class="col-span-12 lg:col-span-4 glass-panel p-10 rounded-[40px] group bg-gradient-to-br from-zinc-900/50 to-transparent">
                    <div class="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] mb-8 border border-[#d4af37]/20">
                        <i data-lucide="microscope" class="w-6 h-6"></i>
                    </div>
                    <h3 class="serif-elite text-2xl mb-4">Exosome V3 Therapy</h3>
                    <p class="text-white/40 text-xs leading-relaxed">Awaken hair follicles with billions of regenerative signaling molecules. Exosomes carry 1000 times more growth factors than traditional methods.</p>
                </div>

                <!-- NEW Feature: Stem Cell -->
                <div class="col-span-12 lg:col-span-4 glass-panel p-10 rounded-[40px] group">
                    <div class="flex items-center space-x-4 mb-8">
                        <i data-lucide="dna" class="w-12 h-12 text-[#d4af37]"></i>
                        <span class="text-[8px] font-bold text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded-full uppercase">Bio-Regen</span>
                    </div>
                    <h3 class="serif-elite text-2xl mb-4">Autologous Stem Cell</h3>
                    <p class="text-white/40 text-xs leading-relaxed">Stem cells obtained from your own tissue increase vascularization in the operation area, maximizing the graft survival rate.</p>
                </div>

                <!-- Feature 5: Ozone Therapy -->
                <div class="col-span-12 lg:col-span-4 glass-panel p-10 rounded-[40px] group">
                    <div class="flex items-start justify-between mb-8">
                        <i data-lucide="wind" class="w-12 h-12 text-[#d4af37]"></i>
                        <span class="text-[8px] border border-[#d4af37]/40 px-3 py-1 rounded-full text-[#d4af37]">PREMIUM CARE</span>
                    </div>
                    <h3 class="serif-elite text-2xl mb-4">Medical Ozone Care</h3>
                    <p class="text-white/40 text-xs leading-relaxed">By providing oxygen loading to hair follicles post-operation, we increase recovery speed by 40% and shorten the crusting process.</p>
                </div>

                <!-- Feature 6: Hybrid Method -->
                <div class="col-span-12 lg:col-span-12 glass-panel p-12 rounded-[40px] relative overflow-hidden group">
                    <div class="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 class="serif-elite text-4xl mb-6">Hybrid DHI <span class="text-[#d4af37]">&</span> FUE</h3>
                            <p class="text-white/40 text-sm leading-relaxed mb-6">Every case is not confined to a single technique. We design maximum density using DHI Choi Pen for the hairline and Sapphire FUE for the crown area.</p>
                            <button class="text-[#d4af37] text-[10px] font-bold tracking-[3px] uppercase flex items-center group">
                                COMPARE TECHNIQUES <i data-lucide="chevron-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition"></i>
                            </button>
                        </div>
                        <div class="relative h-48 bg-black/40 rounded-3xl p-6 border border-white/5">
                            <div class="absolute inset-0 flex items-center justify-center">
                                <i data-lucide="layers" class="w-24 h-24 text-white/5"></i>
                            </div>
                            <div class="relative z-10 flex flex-col justify-between h-full">
                                <div class="flex justify-between items-center">
                                    <span class="text-[9px] text-white/60 uppercase tracking-widest">DHI Precision Density</span>
                                    <div class="w-24 h-1 bg-white/10 rounded-full overflow-hidden"><div class="w-[90%] h-full bg-[#d4af37] rounded-full"></div></div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-[9px] text-white/60 uppercase tracking-widest">FUE Global Coverage</span>
                                    <div class="w-24 h-1 bg-white/10 rounded-full overflow-hidden"><div class="w-[95%] h-full bg-[#d4af37] rounded-full"></div></div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="text-[9px] text-white/60 uppercase tracking-widest">Stem Cell Boost</span>
                                    <div class="w-24 h-1 bg-white/10 rounded-full overflow-hidden"><div class="w-[100%] h-full bg-blue-400 rounded-full"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Roadmap / Timeline -->
    <section id="journey" class="py-40 bg-black overflow-hidden relative">
        <div class="container mx-auto px-6">
            <div class="text-center mb-32">
                <h2 class="serif-elite text-5xl md:text-7xl">Patient <span class="text-stroke">Journey</span></h2>
                <p class="text-white/30 text-[10px] font-bold tracking-[6px] uppercase mt-4">6 Steps to a Flawless Experience</p>
            </div>
            
            <div class="relative timeline-line">
                <!-- Step 1 -->
                <div class="grid md:grid-cols-2 gap-20 mb-32 relative">
                    <div class="md:text-right">
                        <span class="text-7xl serif-elite text-white/5">01</span>
                        <h4 class="serif-elite text-3xl mb-4 text-[#d4af37]">Digital Consultation</h4>
                        <p class="text-white/40 text-sm max-w-sm ml-auto">Receive the first evaluation from our experts from your own home, using high-resolution photos.</p>
                    </div>
                    <div class="hidden md:block"></div>
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_20px_#d4af37]"></div>
                </div>

                <!-- Step 2 -->
                <div class="grid md:grid-cols-2 gap-20 mb-32 relative">
                    <div class="hidden md:block"></div>
                    <div>
                        <span class="text-7xl serif-elite text-white/5">02</span>
                        <h4 class="serif-elite text-3xl mb-4 text-[#d4af37]">VIP Transfer & Accommodation</h4>
                        <p class="text-white/40 text-sm max-w-sm">Upon your arrival in Istanbul, you will be met by your assistant and settled into your 5-star hotel.</p>
                    </div>
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full"></div>
                </div>

                <!-- Step 3 -->
                <div class="grid md:grid-cols-2 gap-20 mb-32 relative">
                    <div class="md:text-right">
                        <span class="text-7xl serif-elite text-white/5">03</span>
                        <h4 class="serif-elite text-3xl mb-4 text-[#d4af37]">Clinic Design & Testing</h4>
                        <p class="text-white/40 text-sm max-w-sm ml-auto">On the morning of the operation, advanced blood tests and the final drawing of your new hairline with the golden ratio are performed.</p>
                    </div>
                    <div class="hidden md:block"></div>
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full"></div>
                </div>

                <!-- Step 4 -->
                <div class="grid md:grid-cols-2 gap-20 mb-32 relative">
                    <div class="hidden md:block"></div>
                    <div>
                        <span class="text-7xl serif-elite text-white/5">04</span>
                        <h4 class="serif-elite text-3xl mb-4 text-[#d4af37]">Operation Day</h4>
                        <p class="text-white/40 text-sm max-w-sm">A process lasting an average of 6-8 hours, in the comfort of needle-free anesthesia, where you can even watch a movie.</p>
                    </div>
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full"></div>
                </div>

                <!-- Step 6 -->
                <div class="grid md:grid-cols-2 gap-20 relative">
                    <div class="hidden md:block"></div>
                    <div>
                        <span class="text-7xl serif-elite text-white/5">06</span>
                        <h4 class="serif-elite text-3xl mb-4 text-[#d4af37]">1-Year Follow-up</h4>
                        <p class="text-white/40 text-sm max-w-sm">When you return to your country, our medical team continues to monitor your progress digitally for 12 months.</p>
                    </div>
                    <div class="absolute left-1/2 top-0 -translate-x-1/2 w-4 h-4 bg-[#d4af37] rounded-full shadow-[0_0_20px_#d4af37]"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Content Carousel -->
    <section id="blog" class="py-40 bg-zinc-950">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-end mb-24">
                <h2 class="serif-elite text-5xl md:text-7xl">Clinic <span class="text-[#d4af37]">Academy</span></h2>
                <a href="#" class="text-[#d4af37] text-[10px] font-bold tracking-[4px] uppercase border-b border-[#d4af37] pb-2">View All</a>
            </div>

            <div class="swiper academySwiper overflow-visible">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="glass-panel p-10 rounded-[40px] group cursor-pointer">
                            <div class="w-full h-64 rounded-3xl overflow-hidden mb-8 relative">
                                <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="Blog 1">
                                <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[8px] font-bold tracking-widest text-[#d4af37]">TECHNOLOGY</div>
                            </div>
                            <h3 class="serif-elite text-2xl mb-4 group-hover:text-[#d4af37] transition">Guide for the First 10 Days After Transplant</h3>
                            <p class="text-white/40 text-sm mb-8">Critical tips for accelerating the healing process and protecting the grafts.</p>
                            <i data-lucide="arrow-right" class="w-6 h-6 text-[#d4af37] group-hover:translate-x-3 transition"></i>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="glass-panel p-10 rounded-[40px] group cursor-pointer">
                            <div class="w-full h-64 rounded-3xl overflow-hidden mb-8 relative">
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt="Blog 2">
                                <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[8px] font-bold tracking-widest text-[#d4af37]">MEDICAL</div>
                            </div>
                            <h3 class="serif-elite text-2xl mb-4 group-hover:text-[#d4af37] transition">What is Exosome Therapy?</h3>
                            <p class="text-white/40 text-sm mb-8">Discover this miraculous technology that enables communication between cells.</p>
                            <i data-lucide="arrow-right" class="w-6 h-6 text-[#d4af37] group-hover:translate-x-3 transition"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Detailed Footer -->
    <footer class="bg-[#020202] text-white pt-40 pb-10 border-t border-white/5 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px]"></div>
        
        <div class="container mx-auto px-10 relative z-10">
            <div class="grid lg:grid-cols-12 gap-16 mb-40">
                <!-- Branding & Newsletter -->
                <div class="lg:col-span-5">
                    <div class="serif-elite text-4xl font-black tracking-[10px] mb-8">TRICOMED</div>
                    <p class="text-white/40 text-sm max-w-sm leading-relaxed mb-12 italic">
                        "A global hub combining aesthetic and medical science with luxury. Excellence spreading from Istanbul to the world."
                    </p>
                    <div class="max-w-md">
                        <h6 class="text-[#d4af37] text-[10px] font-bold tracking-[4px] uppercase mb-6">Clinic Newsletter</h6>
                        <div class="flex p-1 glass-panel rounded-2xl border border-white/10">
                            <input type="email" placeholder="Your email address" class="bg-transparent border-none flex-grow px-6 text-sm outline-none">
                            <button class="bg-[#d4af37] text-black px-8 py-4 rounded-xl font-bold text-[9px] tracking-widest uppercase hover:bg-white transition">Subscribe</button>
                        </div>
                    </div>
                </div>

                <!-- Navigation Links -->
                <div class="lg:col-span-2">
                    <h6 class="text-[#d4af37] text-[10px] font-black tracking-[5px] uppercase mb-10">Explore</h6>
                    <ul class="space-y-6 text-sm text-white/40 font-medium tracking-tight">
                        <li><a href="#" class="hover:text-white transition">About Us</a></li>
                        <li><a href="#" class="hover:text-white transition">Our Architecture</a></li>
                        <li><a href="#" class="hover:text-white transition">Our Doctors</a></li>
                        <li><a href="#" class="hover:text-white transition">Partnerships</a></li>
                        <li><a href="#" class="hover:text-white transition">Careers</a></li>
                    </ul>
                </div>

                <!-- Treatment Links -->
                <div class="lg:col-span-3">
                    <h6 class="text-[#d4af37] text-[10px] font-black tracking-[5px] uppercase mb-10">Treatments</h6>
                    <ul class="space-y-6 text-sm text-white/40 font-medium tracking-tight italic">
                        <li><a href="#" class="hover:text-white transition">Sapphire FUE Transplant</a></li>
                        <li><a href="#" class="hover:text-white transition">DHI Choi Pen Method</a></li>
                        <li><a href="#" class="hover:text-white transition">Beard & Eyebrow Design</a></li>
                        <li><a href="#" class="hover:text-white transition">Exosome Cell Therapy</a></li>
                        <li><a href="#" class="hover:text-white transition">Ozone-Assisted Treatment</a></li>
                    </ul>
                </div>

                <!-- Social & Awards -->
                <div class="lg:col-span-2 flex flex-col justify-between">
                    <div>
                        <h6 class="text-[#d4af37] text-[10px] font-black tracking-[5px] uppercase mb-10">Social</h6>
                        <div class="flex space-x-6">
                            <a href="#" class="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition">
                                <i data-lucide="instagram" class="w-4 h-4"></i>
                            </a>
                            <a href="#" class="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition">
                                <i data-lucide="youtube" class="w-4 h-4"></i>
                            </a>
                            <a href="#" class="w-10 h-10 glass-panel rounded-full flex items-center justify-center hover:bg-[#d4af37] hover:text-black transition">
                                <i data-lucide="linkedin" class="w-4 h-4"></i>
                            </a>
                        </div>
                    </div>
                    <div class="mt-12 lg:mt-0 p-6 glass-panel border-dashed border-[#d4af37]/30 rounded-3xl">
                        <span class="text-[8px] font-bold text-[#d4af37] tracking-[3px] block mb-2 uppercase">Awarded Excellence</span>
                        <p class="text-white/40 text-[10px] italic">Best Hair Clinic 2025 Europe Winner</p>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="pt-12 pb-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[4px] text-white/20 uppercase font-bold">
                <div class="flex space-x-12 mb-8 md:mb-0">
                    <a href="#" class="hover:text-white transition">Privacy Policy</a>
                    <a href="#" class="hover:text-white transition">Cookie Settings</a>
                    <a href="#" class="hover:text-white transition">Medical Liability</a>
                </div>
                <p>© 2026 TRICOMED CLINIC ISTANBUL. HEALTH TOURISM LICENSE: 15422</p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Floating -->
    <a href="https://wa.me/905467372284" class="fixed bottom-10 right-10 z-[2000] group">
        <div class="absolute -inset-4 bg-[#25D366]/20 rounded-full animate-ping group-hover:bg-[#25D366]/40"></div>
        <div class="relative w-20 h-20 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
            <i data-lucide="message-square" class="w-10 h-10"></i>
        </div>
    </a>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        lucide.createIcons();

        // Header Scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Academy Carousel
        const swiper = new Swiper('.academySwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }
        });
    </script>
</body>
</html>
