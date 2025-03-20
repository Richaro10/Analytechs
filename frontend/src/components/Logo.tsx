import React from 'react';
import { Database, BarChart2 } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Symbole simplifié avec effet de superposition */}
      <div className="relative">
        {/* Effet de brillance */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
        
        {/* Icônes superposées */}
        <div className="relative flex items-center justify-center">
          <Database 
            className="h-7 w-7 text-primary absolute transform rotate-[-15deg]" 
          />
          <BarChart2 
            className="h-7 w-7 text-accent transform rotate-[15deg]" 
          />
        </div>
      </div>

      {/* Texte du logo */}
      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-primary">
            Analy
          </span>
          <span className="text-2xl font-bold text-accent">
            techs
          </span>
        </div>
        <span className="text-[0.65rem] uppercase tracking-wider text-gray-500 font-medium -mt-1">
          Data & Dev & Management
        </span>
      </div>
    </div>
  );
};

export default Logo;