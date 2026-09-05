(() => {
  if (window.__footeLoaded) return;
  window.__footeLoaded = true;

  const footerMarkup = `
    <footer class="shared-site-footer" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
      <div class="footer-grid">
        <div class="footer-brand"><a href="index.html#home"><img src="https://ik.imagekit.io/iuiy6mihw/Dr.sabnisLogo.png" alt="Dr. Shailaja Sabnis MD"></a><p>Consultant Physician &amp; Rheumatologist in Mumbai, helping patients with rheumatoid arthritis, lupus, osteoporosis, and autoimmune conditions through clear diagnosis and individualized care.</p></div>
        <div class="footer-column"><h2>Quick Links</h2><a href="index.html#home"><span>&gt;</span> Home</a><a href="index.html#about"><span>&gt;</span> About</a><a href="expertise.html"><span>&gt;</span> Expertise</a><a href="index.html#contact"><span>&gt;</span> Contact</a></div>
        <div class="footer-column"><h2>Services</h2><a href="rheumatoid-arthritis.html">Rheumatoid Arthritis</a><a href="sle-lupus.html">Lupus Care</a><a href="osteoarthritis.html">Osteoarthritis</a><a href="osteoporosis-bone-health.html">Osteoporosis Treatment</a><a href="gout-hyperuricemia.html">Gout &amp; Hyperuricemia</a><a href="ankylosing-spondylitis.html">Ankylosing Spondylitis</a><a href="psoriatic-arthritis.html">Psoriatic Arthritis</a></div>
        <div class="footer-column"><h2>Services</h2><a href="thyroid-disorders.html">Thyroid Disorders</a><a href="vasculitis-apla.html">Vasculitis &amp; APLA</a><a href="pregnancy-rheumatic-disease.html">Pregnancy &amp; Rheumatic Disease</a><a href="recurrent-pregnancy-loss.html">Recurrent Pregnancy Loss</a><a href="general-internal-medicine.html">General Internal Medicine</a><a href="expertise.html">Autoimmune Conditions</a></div>
        <div class="footer-column"><h2>Contact</h2><a href="mailto:drshailajasabnis@gmail.com">drshailajasabnis@gmail.com</a><a href="tel:+919833666967">+91 9833666967</a><p>Andheri East, Mumbai</p><div class="footer-actions"><a href="mailto:drshailajasabnis@gmail.com" title="Email" aria-label="Email"><svg viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></a><a class="whatsapp" href="https://wa.me/919833666967?text=Hello" target="_blank" rel="noopener" title="WhatsApp" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-8.66 15L2 22l5.16-1.3A10 10 0 1012 2zm5.3 13.8c-.23.64-1.34 1.18-1.84 1.23-.47.05-1.07.07-1.73-.14a14.7 14.7 0 01-1.53-.56c-2.69-1.16-4.44-3.85-4.57-4.03-.14-.18-1.1-1.46-1.1-2.79s.7-1.98.95-2.25c.25-.27.55-.34.73-.34h.53c.17 0 .4-.06.62.47l.83 2.02c.07.18.04.33-.02.45l-.3.48c-.12.16-.25.35-.36.46-.12.13-.24.27-.1.51.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.07l.72-.86c.17-.2.33-.17.56-.1l1.84.87c.24.12.4.18.46.28.06.1.06.62-.17 1.25z"/></svg></a><a href="tel:+919833666967" title="Phone" aria-label="Phone"><svg viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 011.9 1.27l1.1 3.3a1 1 0 01-.5 1.2l-2.1 1.05a11 11 0 005.5 5.5l1.05-2.1a1 1 0 011.2-.5l3.3 1.1A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z"/></svg></a></div></div>
      </div>
      <div class="footer-bottom"><p>&copy; 2026 Dr. Shailaja Sabnis. All rights reserved.</p><p>Consultant Physician &amp; Rheumatologist &middot; Mumbai, India</p></div>
    </footer>`;

  const footerStyles = `
    .shared-site-footer{display:block;grid-template-columns:none;gap:0;width:100%;max-width:none;margin:0;border-top:1px solid #ddd2be;background:linear-gradient(180deg,#f7f3ec,#faf7f2,#f4efe7);padding:56px max(24px,calc((100% - 1150px)/2));color:#26302a}.footer-grid{display:grid;width:100%;max-width:1150px;margin:0 auto;grid-template-columns:1.2fr 1fr 1fr 1fr 1.1fr;gap:32px;align-items:start}.shared-site-footer img{display:block;width:240px;height:80px;object-fit:contain;object-position:left}.shared-site-footer h2{margin:0 0 20px;padding-bottom:9px;border-bottom:1px solid rgba(63,87,68,.12);color:#3f5744;font:700 12px 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase}.shared-site-footer a,.shared-site-footer p{display:block;margin:0 0 11px;color:#5b6259;font-size:14px;line-height:1.65}.shared-site-footer a:hover{color:#3f5744}.footer-brand p{max-width:310px;margin-top:16px}.footer-column a span{display:inline-block;margin-right:8px;color:#3f5744;opacity:.6;transition:transform .2s}.footer-column a:hover span{transform:translateX(4px)}.footer-actions{display:flex;align-items:center;gap:12px;margin-top:22px}.footer-actions a{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin:0;border:1px solid rgba(0,0,0,.05);border-radius:16px;background:#fff;color:#3f5744;box-shadow:0 4px 12px rgba(38,48,42,.07);transition:all .3s}.footer-actions a:hover{color:#fff;background:#3f5744;transform:translateY(-5px);box-shadow:0 10px 20px rgba(38,48,42,.15)}.footer-actions a.whatsapp{color:#25d366}.footer-actions a.whatsapp:hover{background:#25d366;color:#fff}.footer-actions svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.footer-actions a.whatsapp svg{fill:currentColor;stroke:none}.footer-bottom{display:flex;justify-content:space-between;gap:20px;width:100%;max-width:1150px;margin:45px auto 0;padding-top:20px;border-top:1px solid rgba(221,210,190,.7)}.footer-bottom p{font-size:12px}.footer-bottom p:last-child{text-align:right}@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr;gap:36px}.footer-brand{grid-column:1/-1}}@media(max-width:520px){.shared-site-footer{padding:45px 24px}.footer-grid{grid-template-columns:1fr}.footer-brand{grid-column:auto}.footer-bottom{flex-direction:column;gap:5px}.footer-bottom p:last-child{text-align:left}}
  `;

  function addAnimations() {
    document
      .querySelectorAll(
        "main > section:not([data-aos]), main article:not([data-aos])",
      )
      .forEach((element, index) => {
        element.setAttribute("data-aos", "fade-up");
        element.setAttribute(
          "data-aos-delay",
          String(Math.min(index * 70, 280)),
        );
      });
    document
      .querySelectorAll(".shared-site-footer [data-aos]")
      .forEach((element) => element.setAttribute("data-aos-once", "true"));
  }

  function startAos() {
    addAnimations();
    if (window.AOS) {
      window.AOS.init({
        once: true,
        mirror: false,
        offset: 30,
        duration: 700,
        easing: "ease-out-cubic",
      });
      return;
    }
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href =
      "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
    document.head.appendChild(stylesheet);
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    script.onload = () =>
      window.AOS.init({
        once: true,
        mirror: false,
        offset: 30,
        duration: 700,
        easing: "ease-out-cubic",
      });
    document.body.appendChild(script);
  }

  function renderFooter() {
    const currentFooter = document.querySelector("footer");
    const footer = document
      .createRange()
      .createContextualFragment(footerMarkup).firstElementChild;
    currentFooter
      ? currentFooter.replaceWith(footer)
      : document.body.appendChild(footer);
    const style = document.createElement("style");
    style.textContent = footerStyles;
    document.head.appendChild(style);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      renderFooter();
      startAos();
    });
  } else {
    renderFooter();
    startAos();
  }
})();
