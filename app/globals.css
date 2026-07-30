@tailwind base;
@tailwind components;
@tailwind utilities;

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #081826;
  color: #F3F8FF;
}

/* Glassmorphism card */
.glass-card {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.055) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.glass-card:hover {
  border-color: rgba(47, 111, 237, 0.45);
  box-shadow: 0 0 40px rgba(47, 111, 237, 0.18);
  transform: translateY(-4px);
}

/* Scroll reveal utility, paired with IntersectionObserver in components */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

::selection {
  background: rgba(34, 211, 238, 0.35);
  color: #ffffff;
}

/* Focus visibility for keyboard nav */
a:focus-visible,
button:focus-visible {
  outline: 2px solid #22D3EE;
  outline-offset: 3px;
  border-radius: 6px;
}

/* Thin scrollbar accent */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #081826;
}
::-webkit-scrollbar-thumb {
  background: #1a3f8f;
  border-radius: 20px;
}
