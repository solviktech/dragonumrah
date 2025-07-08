import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DzaUVSTX.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`import "../styles/global.css";
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
import Quote from '../components/Quote.astro'
import About from '../components/About.astro';
import Services from '../components/Services.astro';
import Showcase from '../components/Showcase.astro';
import Testimonials from '../components/Testimonials.astro';
import Contact from '../components/Contact.astro';
import QuickLinks from '../components/QuickLinks.astro';
import FAQ from '../components/FAQ.astro';
import Partners from '../components/Partners.astro';
import Footer from '../components/Footer.astro';
---
${renderComponent($$result, "Layout", Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", Navbar, {})}${renderComponent($$result2, "Hero", Hero, {})}${renderComponent($$result2, "Quote", Quote, {})}${renderComponent($$result2, "About", About, {})}${renderComponent($$result2, "Services", Services, {})}${renderComponent($$result2, "Showcase", Showcase, {})}${renderComponent($$result2, "Testimonials", Testimonials, {})}${renderComponent($$result2, "Contact", Contact, {})}${renderComponent($$result2, "QuickLinks", QuickLinks, {})}${renderComponent($$result2, "FAQ", FAQ, {})}${renderComponent($$result2, "Partners", Partners, {})}${renderComponent($$result2, "Footer", Footer, {})}` })}`;
}, "/Users/macbook/Desktop/dragon-umrah-astro/src/pages/index.astro", void 0);

const $$file = "/Users/macbook/Desktop/dragon-umrah-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
