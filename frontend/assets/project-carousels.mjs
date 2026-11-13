import {mountProjectCarousel} from './project-carousel.mjs';
let cleanups=[];
function mount(){for(const cleanup of cleanups)cleanup();cleanups=[...document.querySelectorAll('[data-project-carousel]')].map(root=>mountProjectCarousel(root));}
window.TechpediaCarousels={mount};
mount();
