import React from 'react';
import { Code2, Database, BarChart2 } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Groupe d'icônes superposées avec effet de profondeur */}
      <div className="relative mr-2">
        <Database className="h-6 w-6 text-primary absolute -left-1.5 -top-0.5" />
        <Code2 className="h-6 w-6 text-secondary absolute -left-0.5 top-0" />
        <BarChart2 className="h-6 w-6 text-accent relative left-0.5 top-0.5" />
      </div>
      {/* Texte du logo avec style moderne */}
      <div className="font-bold tracking-tight">
        <span className="text-primary text-xl">Analy</span>
        <span className="text-accent text-xl">techs</span>
        <span className="text-xs text-gray-500 block -mt-1 tracking-wider">DATA & DEV & MANAGEMENT</span>
      </div>
    </div>
  );
};

export default Logo;