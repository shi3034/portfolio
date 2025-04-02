import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import BackgroundEffects from './shared/BackgroundEffects';

const Socials = () => {
  return (
    <section className="py-20 relative" id="connect">
      <BackgroundEffects type="socials" />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-blue-400 text-center mb-12">
          Connect With Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/shi3034"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-4 block bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <Github className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg text-slate-100 font-semibold">GitHub</h3>
                <p className="text-slate-400">@shi3034</p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shivangi-srivastva-90ab73270/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-4 block bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-400/10 rounded-lg">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg text-slate-100 font-semibold">LinkedIn</h3>
                <p className="text-slate-400">Shivangi Srivastva</p>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:shivangisrivastva30@gmail.com"
            className="md:col-span-4 block bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 p-3 bg-blue-400/10 rounded-lg">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg text-slate-100 font-semibold">Email</h3>
                <p className="text-slate-400 break-all">
                  shivangisrivastva30@gmail.com
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials; 