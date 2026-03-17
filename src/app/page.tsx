import CanvasBackground from "@/components/CanvasBackground";
import IntroAnimation from "@/components/IntroAnimation";
import { Mail, ArrowRight, ExternalLink, GraduationCap, Microscope, Award, BrainCircuit, Dna, FileText, Activity, ShieldCheck, Cpu } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <IntroAnimation />
      <CanvasBackground />

      {/* --- HERO SECTION: The Visionary Headline --- */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center z-10 glass-card relative">
          <p className="text-cold-cyan font-outfit font-semibold tracking-widest uppercase mb-4 text-sm animate-pulse flex items-center justify-center gap-2">
            <Dna size={16} /> Molecular Biology & Precision Oncology
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-outfit text-white mb-6 leading-tight flex flex-col items-center">
            Bridging Wet-Lab Precision and 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cold-cyan via-cold-teal to-purple-400 mt-2">
              Dry-Lab Analytics for Translational Cancer Research.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-inter">
            MSc Cancer Researcher (University of Glasgow) | Specializing in 3D Organoids, CRISPR-Cas9, and Multi-Omics Pipeline Integration.
          </p>
          
          {/* Why Hire Me Prominent Link with Cancer Intro Theme Concept */}
          <div className="flex justify-center mb-10">
             <a href="#whyhireme" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-900/40 to-teal-900/40 border border-teal-500/50 hover:border-teal-400 text-white rounded-full font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-[0_0_20px_rgba(45,212,191,0.3)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Activity className="text-teal-400 group-hover:animate-pulse relative z-10" size={20} />
                <span className="relative z-10">Why Hire Me?</span>
             </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://scholar.google.com/citations?user=zjB56GEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-purple-500/50 hover:bg-purple-500/20 hover:border-purple-400 text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 backdrop-blur-sm">
              <GraduationCap size={18} /> Google Scholar
            </a>
            <a href="https://linkedin.com/in/souhrid-sarkar" target="_blank" rel="noopener noreferrer" className="bg-white/5 border border-cold-cyan/50 hover:bg-cold-cyan/20 hover:border-cold-cyan text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 backdrop-blur-sm">
              <ExternalLink size={18} /> LinkedIn
            </a>
            <a href="mailto:souhridsarkar.work@gmail.com" className="bg-cold-teal hover:bg-teal-500 text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(20,184,166,0.6)] flex items-center justify-center gap-2">
              <Mail size={18} /> Email Me
            </a>
          </div>
        </div>
      </section>

      {/* --- WHY HIRE ME SECTION (New Narrative) --- */}
      <section id="whyhireme" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-6 flex items-center gap-4 group">
          <span className="w-12 h-px bg-cold-cyan group-hover:w-24 transition-all duration-300"></span>
          Why Hire Me: Bridging the Translational Gap
        </h2>
        
        <div className="max-w-4xl mb-16">
           <p className="text-slate-300 text-lg leading-relaxed border-l-2 border-cold-cyan pl-6 italic">
             Cancer is fundamentally a disease of unregulated plasticity and evasion. Tackling it requires more than just isolated benchwork or pure computation—it demands a holistic, visionary approach. I bring a unique synthesis of <strong className="text-cold-cyan font-semibold">wet-lab modeling</strong> and <strong className="text-purple-400 font-semibold">dry-lab informatics</strong>, characterized by the ability to <strong className="text-white font-semibold">work independently</strong>, meticulously <strong className="text-white font-semibold">troubleshoot complex assays</strong>, and seamlessly translate raw data into clinical insights. Here is what makes me a standout candidate:
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-cold-cyan relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-cold-cyan/10 rounded-full blur-3xl -z-10"></div>
             <Microscope className="text-cold-cyan mb-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" size={32} />
             <h3 className="text-xl font-bold text-white mb-3">Rigorous Experimental Design</h3>
             <ul className="text-slate-300 space-y-2 list-disc list-inside">
               <li>Expertise in establishing complex 3D organoid models mimicking tumor microenvironments.</li>
               <li>Proven track record of high-reproducibility assays (Flow cytometry, CRISPR perturbations) yielding definitive survival outcomes (&gt;99.7% viability loss).</li>
             </ul>
          </div>

          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-purple-400 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl -z-10"></div>
             <BrainCircuit className="text-purple-400 mb-4 drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]" size={32} />
             <h3 className="text-xl font-bold text-white mb-3">Multi-Omic Data Fluency</h3>
             <ul className="text-slate-300 space-y-2 list-disc list-inside">
               <li>Bridging the gap safely from raw sequencing to actionable biological pathways (R, Python).</li>
               <li>Comfortable harmonizing disparate datasets (TCGA, OpenCRAVAT) and extracting machine-learning-ready features without dependency on pure bioinformaticians.</li>
             </ul>
          </div>

          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-teal-400 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl -z-10"></div>
             <ShieldCheck className="text-teal-400 mb-4 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" size={32} />
             <h3 className="text-xl font-bold text-white mb-3">Translational Clinical Vision</h3>
             <ul className="text-slate-300 space-y-2 list-disc list-inside">
               <li>End-to-end perspective: From fundamental biomarker discovery (miRNA processing) to predicting clinical risk thresholds using routine data (FIB-4).</li>
               <li>Keen understanding of compliance and SOP development (CLIA, ICH-GCP) required for transition to trials.</li>
             </ul>
          </div>

        </div>
      </section>

      {/* --- FORMAL NARRATIVE: Experience Timeline --- */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-outfit font-bold mb-16 flex items-center justify-center gap-3">
            <Activity className="text-teal-400 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]" size={32} /> Professional Experience
        </h2>
        
        <div className="relative border-l border-white/20 ml-6 md:ml-12 space-y-16 pb-8">
            
            {/* Item 1 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[1.15rem] top-1 w-8 h-8 rounded-full border border-teal-400/50 bg-slate-900 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.4)] flex items-center justify-center z-10">
                <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
              </div>
              <div className="glass-card border border-teal-400/20 hover:border-teal-400/50 transition-colors">
                <span className="text-teal-400 text-sm font-bold uppercase tracking-wider mb-2 block">Apr 2025 – Sep 2025</span>
                <h3 className="text-xl font-bold text-white mb-1">Graduate Research Assistant</h3>
                <h4 className="text-slate-400 mb-4 font-medium uppercase tracking-wider text-sm">CRUK, Scotland Institute</h4>
                <ul className="list-disc list-outside ml-4 text-slate-300 space-y-2">
                  <li>Ran combination drug screens on KRASG12CPN and KRASG12DPN colorectal cancer organoids, demonstrating &gt;99.7% viability loss in G12C models with Afatinib-based regimens.</li>
                  <li>Profiled stemness-associated and stress-response markers using confocal microscopy, flow cytometry, and Western blotting.</li>
                  <li>Contributed to in vivo research pipelines by assisting with immunohistochemistry, immunofluorescence, and murine dissection.</li>
                  <li>Independently prepared qPCR workflows on treated organoids, integrating transcriptomic and phenotypic readouts.</li>
                </ul>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[1.15rem] top-1 w-8 h-8 rounded-full border border-purple-400/50 bg-slate-900 text-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.4)] flex items-center justify-center z-10">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              </div>
              <div className="glass-card border border-purple-400/20 hover:border-purple-400/50 transition-colors">
                <span className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-2 block">June 2023 – Dec 2023</span>
                <h3 className="text-xl font-bold text-white mb-1">Research Intern</h3>
                <h4 className="text-slate-400 mb-4 font-medium uppercase tracking-wider text-sm">Medical College and Hospital, Kolkata</h4>
                <ul className="list-disc list-outside ml-4 text-slate-300 space-y-2">
                  <li>Processed and analysed 200+ paediatric cancer plasma samples to validate circulating protein and miRNA biomarkers for treatment-response prediction.</li>
                  <li>Performed ELISA, HPLC, and flow cytometry assays with &gt;95% reproducibility.</li>
                  <li>Integrated assay results with patient clinical data to identify biomarker thresholds with potential 80% predictive accuracy.</li>
                  <li>Performed immunophenotyping using flow cytometry to characterize immune cell populations and leukemic subtypes.</li>
                </ul>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[1.15rem] top-1 w-8 h-8 rounded-full border border-cold-cyan/50 bg-slate-900 text-cold-cyan shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center justify-center z-10">
                <span className="w-2 h-2 bg-cold-cyan rounded-full"></span>
              </div>
              <div className="glass-card border border-cold-cyan/20 hover:border-cold-cyan/50 transition-colors">
                <span className="text-cold-cyan text-sm font-bold uppercase tracking-wider mb-2 block">July 2022 – Jan 2023</span>
                <h3 className="text-xl font-bold text-white mb-1">Research Associate</h3>
                <h4 className="text-slate-400 mb-4 font-medium uppercase tracking-wider text-sm">BioLim Centre for Science & Technology</h4>
                <ul className="list-disc list-outside ml-4 text-slate-300 space-y-2">
                  <li>Curated and harmonised multi-omics datasets from GEO/TCGA across 5+ breast and cervical cancer cohorts.</li>
                  <li>Shortlisted 54 candidate biomarkers via differential expression analysis in R, increasing prioritisation efficiency for wet-lab validation by 40%.</li>
                  <li>Mapped high-priority genes to signalling pathways in STRING/Reactome.</li>
                </ul>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute -left-[1.15rem] top-1 w-8 h-8 rounded-full border border-slate-500/50 bg-slate-900 text-slate-400 flex items-center justify-center z-10">
                <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
              </div>
              <div className="glass-card border border-white/10 hover:border-slate-400/50 transition-colors">
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2 block">May 2021 – Jan 2022</span>
                <h3 className="text-xl font-bold text-white mb-1">Research Intern</h3>
                <h4 className="text-slate-400 mb-4 font-medium uppercase tracking-wider text-sm">Indian Institute of Technology, Bombay</h4>
                <ul className="list-disc list-outside ml-4 text-slate-300 space-y-2">
                  <li>Built an RNA-seq analysis pipeline that improved pituitary adenoma subtype classification accuracy by 20%.</li>
                  <li>Identified molecular drivers of non-functional adenomas through pathway enrichment, informing potential drug repurposing.</li>
                  <li>Simulated drug–target interactions via computational modelling, predicting three compounds with &gt;70% binding affinity.</li>
                </ul>
              </div>
            </div>
            
        </div>
      </section>

      {/* --- FORMAL NARRATIVE: Separate Education Section --- */}
      <section id="education" className="py-24 px-6 max-w-7xl mx-auto relative z-10 bg-white/[0.02] border-y border-white/5 rounded-[4rem]">
        <h2 className="text-3xl font-outfit font-bold mb-16 flex items-center justify-center gap-3">
          <GraduationCap className="text-cold-cyan drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" size={32} /> Academic Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="glass-card flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-cold-cyan"></div>
              <span className="self-end px-3 py-1 bg-cold-cyan/10 text-cold-cyan text-xs font-bold rounded-full mb-2">2024 - 2025</span>
              <h3 className="text-2xl font-bold text-white mb-1">MSc in Cancer Research and Precision Oncology</h3>
              <h4 className="text-slate-400 mb-4 font-medium">University of Glasgow, UK</h4>
              <div className="bg-white/5 p-4 rounded mb-4 border border-white/10">
                 <p className="text-white font-medium mb-1">Grade: A (First Class with distinction)</p>
                 <p className="text-cold-cyan text-sm">Awards: The International Leadership Award, The India Merit Award</p>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                 <strong>Master's Thesis:</strong> Understanding the Role of Autophagy in KRAS-Mutant Colorectal Cancer.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                 <span className="text-xs bg-black/30 px-2 py-1 rounded text-slate-300 border border-white/5">Drug Discovery</span>
                 <span className="text-xs bg-black/30 px-2 py-1 rounded text-slate-300 border border-white/5">Immunotherapy</span>
                 <span className="text-xs bg-black/30 px-2 py-1 rounded text-slate-300 border border-white/5">Clinical Trials</span>
              </div>
            </div>

            <div className="glass-card flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-slate-500"></div>
              <span className="self-end px-3 py-1 bg-white/5 text-slate-400 text-xs font-bold rounded-full mb-2">2020 - 2024</span>
              <h3 className="text-2xl font-bold text-white mb-1">BTech in Biotechnology</h3>
              <h4 className="text-slate-400 mb-4 font-medium">Amity University Kolkata, India</h4>
              <div className="bg-white/5 p-4 rounded mb-4 border border-white/10">
                 <p className="text-white font-medium">Grade: First Division</p>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                 <strong>Bachelor's Thesis:</strong> Folate functionalized nanomedicine use for tumour targeted drug delivery in breast cancer.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                 <span className="text-xs bg-black/30 px-2 py-1 rounded text-slate-300 border border-white/5">Molecular & Cell Biology</span>
                 <span className="text-xs bg-black/30 px-2 py-1 rounded text-slate-300 border border-white/5">Immunology</span>
                 <span className="text-xs bg-black/30 px-2 py-1 rounded text-slate-300 border border-white/5">Nanomedicine</span>
              </div>
            </div>

        </div>
      </section>

      {/* --- PROJECTS SECTION: The 'Impact' Project Gallery --- */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-12 flex items-center gap-4 group">
          <span className="w-12 h-px bg-purple-500 group-hover:w-24 transition-all duration-300"></span>
          Highlighted Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 border border-purple-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase rounded border border-purple-500/30 mb-4 inline-block">Independent Project</span>
            <h3 className="text-xl font-bold text-white mb-3">Non-Invasive HCC Risk Stratification</h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Developed a predictive model using the FIB-4 score to identify high-risk cirrhotic patients.
            </p>
            <div className="bg-white/5 p-3 rounded-md border border-white/5 mt-auto">
               <p className="text-xs text-purple-200"><strong>Impact:</strong> Utilizing routine clinical parameters to prioritize patients for early-stage malignancy detection.</p>
            </div>
          </div>

          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 border border-blue-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase rounded border border-blue-500/30 mb-4 inline-block">MSc Project</span>
            <h3 className="text-xl font-bold text-white mb-3">EGFR/HER2 Expression in Pancreatic Cancer</h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
              Compared TCGA and GTEx transcriptomic datasets, linking EGFR/HER2 overexpression to poor prognosis and gemcitabine resistance.
            </p>
            <div className="bg-white/5 p-3 rounded-md border border-white/5 mt-auto">
               <p className="text-xs text-blue-200"><strong>Result:</strong> Delivered reproducible code pipeline and visual survival analyses.</p>
            </div>
          </div>

          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 border border-teal-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <span className="px-3 py-1 bg-teal-500/20 text-teal-300 text-[10px] font-bold uppercase rounded border border-teal-500/30 mb-4 inline-block">MSc Project</span>
            <h3 className="text-xl font-bold text-white mb-3">SNP Harmonization Pipeline</h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed">
               Built a harmonised dataset of 885 SNPs by integrating VCF files across OpenCRAVAT, Ensembl VEP, and dbSNP.
            </p>
            <div className="bg-white/5 p-3 rounded-md border border-white/5 mt-auto">
               <p className="text-xs text-teal-200"><strong>Result:</strong> Produced a clean SQLite-ready database for cancer genomics applications.</p>
            </div>
          </div>

          <div className="glass-card hover:-translate-y-2 transition-transform duration-300 border border-pink-500/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-pink-500/10 rounded-full blur-xl group-hover:bg-pink-500/20 transition-all"></div>
            <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-[10px] font-bold uppercase rounded border border-pink-500/30 mb-4 inline-block animate-pulse">Ongoing</span>
            <h3 className="text-xl font-bold text-white mb-3">Clonal Evolution via NGS Pipelines</h3>
            <p className="text-slate-300 mb-4 text-sm leading-relaxed relative z-10">
              Utilizing Whole Genome Sequencing (WGS) and bulk RNA-seq to track clonal dynamics and genomic instability in colorectal cancer models under therapeutic pressure.
            </p>
          </div>
          
        </div>
      </section>

      {/* --- PUBLICATIONS: Scholarly Gallery --- */}
      <section id="publications" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-12 flex items-center gap-4 group">
          <span className="w-12 h-px bg-cold-cyan group-hover:w-24 transition-all duration-300"></span>
          Publications
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          
          <div className="glass-card group hover:bg-white/5 transition-colors border border-transparent hover:border-cold-cyan/30 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-cold-cyan/10 text-cold-cyan text-[10px] font-bold uppercase rounded border border-cold-cyan/20">Peer-Reviewed, 1st Author</span>
            </div>
            <div className="bg-cold-cyan/10 p-4 rounded-lg hidden md:block border border-cold-cyan/20">
              <FileText className="text-cold-cyan w-8 h-8 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
            </div>
            <div className="pt-8 md:pt-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white pr-20">Immunomodulatory Signaling Networks in Glioblastoma Multiforme</h3>
              </div>
              <p className="text-slate-400 text-sm mb-3">Human Cell (July 2024) | 10.1007/s13577-024-01112-8</p>
              <p className="text-slate-300 text-sm italic border-l-2 border-slate-600 pl-4 py-1 leading-relaxed">
                Performed an in-depth review of immunomodulatory signaling networks in glioblastoma multiforme, identifying key therapeutic targets and actionable insights for treatment development.
              </p>
            </div>
          </div>

          <div className="glass-card group hover:bg-white/5 transition-colors border border-transparent hover:border-cold-teal/30 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
             <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-cold-teal/10 text-cold-teal text-[10px] font-bold uppercase rounded border border-cold-teal/20">Peer-Reviewed, 1st Author</span>
            </div>
            <div className="bg-cold-teal/10 p-4 rounded-lg hidden md:block border border-cold-teal/20">
              <FileText className="text-cold-teal w-8 h-8 drop-shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
            </div>
            <div className="pt-8 md:pt-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white pr-20">Role of Extracellular Vesicles in Intercellular Communication in the Brain</h3>
              </div>
              <p className="text-slate-400 text-sm mb-3">Cell Biochemistry and Biophysics (Feb 2024) | 10.1007/s12013-024-01221-z</p>
              <p className="text-slate-300 text-sm italic border-l-2 border-slate-600 pl-4 py-1 leading-relaxed">
                Examined the role of Extracellular Vesicles (EVs) in neurodegenerative diseases, identifying their potential as biomarkers and therapeutic targets for Alzheimer's and Parkinson's disease.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Awards section combined cleanly */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
          <div className="glass-card bg-slate-900/60 border border-yellow-500/20 flex flex-col md:flex-row justify-around items-center gap-6">
              <div className="text-center">
                  <Award className="text-yellow-500 mx-auto mb-2 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" size={32} />
                  <p className="text-white font-bold mb-1">Honors & Awards</p>
                  <p className="text-slate-400 text-sm">International Leadership Award</p>
                  <p className="text-slate-400 text-sm">India Merit Award</p>
                  <p className="text-slate-400 text-sm">Graduate Skills Award</p>
              </div>
              <div className="hidden md:block w-px h-24 bg-white/10"></div>
              <div className="text-center">
                  <Dna className="text-blue-400 mx-auto mb-2 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" size={32} />
                  <p className="text-white font-bold mb-1">Specializations</p>
                  <p className="text-slate-400 text-sm">Genomic Data Science (Johns Hopkins University)</p>
                  <p className="text-slate-400 text-sm">Young Researcher Award (AlzForum)</p>
              </div>
              <div className="hidden md:block w-px h-24 bg-white/10"></div>
              <div className="text-center">
                  <Activity className="text-pink-400 mx-auto mb-2 drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]" size={32} />
                  <p className="text-white font-bold mb-1">Affiliations</p>
                  <p className="text-slate-400 text-sm">AACR, ASCO, EACR, RSB</p>
              </div>
          </div>
      </section>

      {/* --- SKILLS: Comprehensive Grid based on CV --- */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative z-10 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold text-transparent bg-clip-text bg-gradient-to-r from-cold-cyan to-purple-400 inline-block">
            The Flowing Skills Universe
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">A comprehensive synergy of biological modeling, data extraction, and quality compliance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Molecular Biology */}
          <div className="glass-card border border-cold-cyan/20 bg-gradient-to-b from-slate-900/80 to-slate-900/40 relative overflow-hidden group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2 border-b border-white/10 pb-4 relative z-10">
              <Microscope className="text-cold-cyan" size={24} /> Molecular Biology & Cell Culture
            </h3>
            <div className="flex flex-col gap-3 relative z-10">
              {['CRISPR-Cas9 gene editing', 'qPCR & Western blot', 'Flow cytometry & Confocal microscopy', '2D/3D mammalian cell culture', 'Organoid culture (colorectal)'].map((skill, i) => (
                <div key={i} className={`px-4 py-2 rounded bg-cold-cyan/5 border border-cold-cyan/20 text-cold-cyan text-sm font-medium hover:bg-cold-cyan hover:text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.2)]`}
                     style={{ animation: `float ${2.5 + i%2}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Bioinformatics */}
          <div className="glass-card border border-purple-400/20 bg-gradient-to-b from-slate-900/80 to-slate-900/40 relative overflow-hidden group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2 border-b border-white/10 pb-4 relative z-10">
              <Cpu className="text-purple-400" size={24} /> Computational & Bioinformatics
            </h3>
            <div className="flex flex-col gap-3 relative z-10">
               {[
                 { name: 'DESeq2, edgeR, Python (pandas, numpy)', color: 'text-purple-300', border: 'border-purple-400/30' },
                 { name: 'VCF, GEO, TCGA, cBioPortal data mining', color: 'text-blue-300', border: 'border-blue-400/30' },
                 { name: 'GSEA, STRING, Reactome', color: 'text-pink-300', border: 'border-pink-400/30' },
                 { name: 'Protein structure modelling (AlphaFold)', color: 'text-teal-300', border: 'border-teal-400/30' },
                 { name: 'MySQL database management', color: 'text-indigo-300', border: 'border-indigo-400/30' }
               ].map((skill, i) => (
                <div key={i} className={`px-4 py-2 rounded bg-white/5 border ${skill.border} ${skill.color} text-sm font-medium hover:bg-white/10 hover:text-white transition-all shadow-[0_2px_10px_rgba(0,0,0,0.2)]`}
                     style={{ animation: `float-reverse ${3 + i%2}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }}>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Data Analysis */}
          <div className="glass-card border border-teal-400/20 bg-gradient-to-b from-slate-900/80 to-slate-900/40 relative overflow-hidden group">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center gap-2 border-b border-white/10 pb-4 relative z-10">
              <ShieldCheck className="text-teal-400" size={24} /> Data Analysis & Compliance
            </h3>
            <div className="flex flex-col gap-3 relative z-10">
              {['GraphPad Prism, FlowJo, QuPath', 'ICH-GCP, CLIA, GDP standards', 'Statistical testing (survival analysis)', 'Experimental design & QC', 'Documentation & SOP development'].map((skill, i) => (
                <div key={i} className={`px-4 py-2 rounded bg-teal-400/5 border border-teal-400/20 text-teal-300 text-sm font-medium hover:bg-teal-400 hover:text-slate-900 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.2)]`}
                     style={{ animation: `float ${2.8 + i%2}s ease-in-out infinite`, animationDelay: `${i * 0.25}s` }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center relative z-10 bg-slate-950/80 backdrop-blur-md">
        <p className="text-slate-400 text-sm mb-4">
          &copy; {new Date().getFullYear()} Souhrid Sarkar. Deciphering the complexities of cancer biology.
        </p>
        <div className="flex justify-center gap-6">
           <a href="https://scholar.google.com/citations?user=zjB56GEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-400 hover:scale-110 transition-all"><GraduationCap size={24}/></a>
           <a href="https://linkedin.com/in/souhrid-sarkar" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cold-cyan hover:scale-110 transition-all"><ExternalLink size={24}/></a>
           <a href="mailto:souhridsarkar.work@gmail.com" className="text-slate-500 hover:text-cold-teal hover:scale-110 transition-all"><Mail size={24}/></a>
        </div>
      </footer>

      {/* Global Style overrides for specific animations used here */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(6px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </main>
  );
}
