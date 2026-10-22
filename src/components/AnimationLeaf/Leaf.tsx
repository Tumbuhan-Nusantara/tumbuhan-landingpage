import styles from './Leaf.module.css';

export default function LeafSpinLoading() {
  return (
    <div className="flex flex-col items-center justify-center p-12 dark:bg-zinc-950 rounded-2xl">

      <svg
        className={`w-16 h-16 ${styles.spinContinuous}`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#1bc83e">
    
          <g transform="translate(50, 26) rotate(-15)">
            <path d="M -22 10 C -12 -12, 12 -18, 26 -6 C 10 -2, -6 18, -22 10 Z" />
            <path 
              d="M -22 10 C -2 -3, 10 -5, 26 -6" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
            />
          </g>

          <g transform="translate(68, 58) rotate(105)">
            <path d="M -22 10 C -12 -12, 12 -18, 26 -6 C 10 -2, -6 18, -22 10 Z" />
            <path 
              d="M -22 10 C -2 -3, 10 -5, 26 -6" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
            />
          </g>

          <g transform="translate(32, 66) rotate(225)">
            <path d="M -22 10 C -12 -12, 12 -18, 26 -6 C 10 -2, -6 18, -22 10 Z" />
            <path 
              d="M -22 10 C -2 -3, 10 -5, 26 -6" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
            />
          </g>

        </g>
      </svg>

      <p className="mt-6 text-sm tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold font-mono animate-pulse">
        loading...
      </p>
    </div>
  );
}