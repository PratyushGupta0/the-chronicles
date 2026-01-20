import React from 'react';

interface FlourishDividerProps {
    className?: string;
}

const FlourishDivider = ({ className = "mt-32 opacity-60" }: FlourishDividerProps) => {
    return (
        <div className={`flex justify-center items-center space-x-6 ${className}`}>
            <div className="h-px w-24 bg-amber-950"></div>
            <span className="text-4xl text-amber-950 font-serif">❦</span>
            <div className="h-px w-24 bg-amber-950"></div>
        </div>
    );
};

export default FlourishDivider;
