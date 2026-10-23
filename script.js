// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// BibTeX drawer toggle & clipboard copy
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bibtex-toggle').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        const isOpen = target.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        btn.classList.toggle('active', isOpen);
      }
    });
  });

  document.querySelectorAll('.copy-bibtex-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const codeEl = document.getElementById(targetId);
      const textToCopy = codeEl ? codeEl.innerText.trim() : btn.getAttribute('data-bibtex');
      
      if (textToCopy && navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
          }, 2000);
        }).catch(err => {
          console.error('Copy failed: ', err);
        });
      }
    });
  });
});
