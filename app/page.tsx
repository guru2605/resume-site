'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Database, ChevronDown, Download, Briefcase, Award } from 'lucide-react';
import { resumeData } from '@/libs/data';

export default function Home() {
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    // Splash screen timer
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  },[]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
            >
              GS.
            </motion.div>
            <motion.div 
              className="w-32 h-1 mt-6 overflow-hidden rounded-full bg-slate-800"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="h-full bg-cyan-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <div className="px-6 py-12 mx-auto max-w-5xl sm:px-12">
          
          {/* HERO SECTION */}
          <section className="flex flex-col justify-center min-h-[90vh] pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 mb-6 text-sm border rounded-full text-cyan-400 bg-cyan-950/30 border-cyan-800/50 w-fit"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Available for new opportunities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight sm:text-7xl text-slate-100"
            >
              {resumeData.basics.name}
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-2xl font-medium sm:text-4xl text-slate-400"
            >
              {resumeData.basics.title}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mt-6 text-lg leading-relaxed text-slate-400"
            >
              {resumeData.basics.summary}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mt-10"
            >
              <a href="#experience" className="px-6 py-3 font-medium text-black transition-all rounded-lg bg-cyan-500 hover:bg-cyan-400 hover:scale-105 active:scale-95">
                View Experience
              </a>
              <a 
                href="/Gurudatta_Shanbhag_Resume.pdf" 
                download="Gurudatta_Shanbhag_Resume.pdf"
                className="flex items-center px-6 py-3 font-medium transition-all border rounded-lg text-slate-300 border-slate-700 bg-slate-900/50 hover:bg-slate-800 hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 mr-2" /> Resume
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
              <ChevronDown className="w-6 h-6 text-slate-500" />
            </motion.div>
          </section>

          {/* IMPACT HIGHLIGHTS */}
          <section className="py-20 border-t border-slate-800/50">
            <div className="flex items-center mb-10 gap-3">
              <Award className="w-6 h-6 text-cyan-400" />
              <h3 className="text-3xl font-bold">Key Highlights</h3>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {resumeData.achievements.map((ach, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-6 border rounded-xl bg-slate-900/40 border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/30 transition-colors"
                >
                  <h4 className="text-2xl font-bold text-cyan-400">{ach.title}</h4>
                  <p className="mt-2 text-sm text-slate-400">{ach.context}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="py-20 border-t border-slate-800/50">
            <div className="flex items-center mb-10 gap-3">
              <Briefcase className="w-6 h-6 text-cyan-400" />
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            <div className="relative pl-6 space-y-12 border-l-2 border-slate-800">
              {resumeData.experience.map((job, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute w-4 h-4 rounded-full bg-cyan-500 -left-[33px] top-2 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                  <div className="p-6 border rounded-xl bg-slate-900/40 border-slate-800 backdrop-blur-sm group hover:border-slate-600 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-200">{job.role}</h4>
                        <p className="text-lg font-medium text-cyan-400">{job.company}</p>
                      </div>
                      <div className="text-sm font-medium text-slate-500 md:text-right">
                        <p>{job.dates}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-400">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-3 text-cyan-500 mt-1">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SKILLS SECTION */}
          <section className="py-20 border-t border-slate-800/50 mb-20">
            <div className="flex items-center mb-10 gap-3">
              <Database className="w-6 h-6 text-cyan-400" />
              <h3 className="text-3xl font-bold">Technical Arsenal</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resumeData.skills.map((skillGroup, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="p-6 border rounded-xl bg-slate-900/40 border-slate-800 backdrop-blur-sm"
                >
                  <h4 className="mb-4 text-sm font-semibold tracking-wider text-slate-500 uppercase">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 text-sm font-medium border rounded-md text-slate-300 bg-slate-800/50 border-slate-700/50">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      )}
    </>
  );
}