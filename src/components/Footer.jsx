export function Footer({ onOpenDownload }) {
  return (
    <footer className="w-full border-t border-slate-200/80 bg-white/70 backdrop-blur-xl py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <img
            alt="LOKALHIRE"
            className="h-7 w-auto object-contain opacity-80"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WjpVm4T6Vc0UbvQx0aoDXjwL682FA6uOSM83-X44iXCkHDjqYKqxBbjx7xsVPT_BjZLidCg_Od5FOEX0XgUsDPUZUdYZQb1IART_S9mwXErSmQPKuKlKz-jkFZfNWXL4DPkY6BhzlBL6uoNUClx_V3GViqpI7uo2scbN9Qt3rE6o9rdQPc-oXvKtvYuXYAGRIg01Ydah1MAej5Ir05fX8uqnnfLPbL6LE9fcA0YuIpIgYYLZ4nt1CMMDQ"
          />
          <span>• © 2026 LOKALHIRE. All rights reserved.</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
          <a className="hover:text-blue-600 transition-colors" href="#hero">
            Overview
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#benefits">
            Benefits
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#problem-solution">
            Comparison
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#match-engine">
            Match Engine
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#how-it-works">
            How It Works
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#openings">
            Pilot Openings
          </a>
          <a className="hover:text-blue-600 transition-colors" href="#roadmap">
            Roadmap
          </a>
          <button
            type="button"
            onClick={onOpenDownload}
            className="hover:text-blue-600 transition-colors font-semibold text-blue-600"
          >
            Download App
          </button>
        </div>
      </div>
    </footer>
  )
}
