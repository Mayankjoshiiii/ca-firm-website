// M/s Associated CA Practice - Master Interactive Engine
// Contact / WhatsApp: +91 74043 17320

const CA_PHONE = "917404317320";

// Theme Switcher Engine (Default Light Mode, toggles Dark Mode)
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('ca_theme') || 'light';
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    if (toggleBtn) toggleBtn.innerHTML = `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>`;
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    if (toggleBtn) toggleBtn.innerHTML = `<i data-lucide="moon" class="w-5 h-5 text-slate-700"></i>`;
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      html.classList.toggle('light', !isDark);
      localStorage.setItem('ca_theme', isDark ? 'dark' : 'light');
      
      toggleBtn.innerHTML = isDark 
        ? `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>`
        : `<i data-lucide="moon" class="w-5 h-5 text-slate-700"></i>`;
      
      if (window.lucide) lucide.createIcons();
    });
  }
}

// Interactive Ambient Cursor Spotlight Engine (Replaces wireframe 3D shapes)
function initCursorSpotlight() {
  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateSpotlight() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(4, 120, 87, 0.07)';

    spotlight.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, ${color}, transparent 80%)`;
    requestAnimationFrame(animateSpotlight);
  }
  animateSpotlight();
}

// SOP Master Data
const SOP_DATA = {
  accounting: {
    title: "1. Accounting & Financial Reporting",
    badge: "Bookkeeping & Finalization",
    sections: [
      {
        heading: "Daily Entry & Reconciliations",
        items: [
          "Purchase and Sales register verification & daily entry",
          "Bank, Cash, and Journal voucher entry in Tally Prime / Zoho Books / Busy / QuickBooks",
          "Petty cash imprest maintenance & expense categorization",
          "Monthly Bank Reconciliation Statements (BRS)",
          "Ledger scrutinies (Debtors, Creditors, Unsecured Loans)"
        ]
      },
      {
        heading: "Finalization & Depreciation",
        items: [
          "Inventory valuation, stock statement matching & gross margin calculation",
          "Trial Balance preparation and balance extraction",
          "Depreciation calculation (Companies Act Schedule II vs. Income Tax Act Sec 32)",
          "Compiling Profit & Loss Account, Balance Sheet, and Audit Grouping Schedules"
        ]
      }
    ]
  },
  gst: {
    title: "2. Indirect Taxation (GST Compliance)",
    badge: "GST Filings & Scrutiny",
    sections: [
      {
        heading: "Invoicing & E-Way Bills",
        items: [
          "E-Way bill generation, vehicle number update, validity extensions",
          "E-Invoicing validation, IRN generation, and QR-code check",
          "GST New Registration document compilation & Portal filing",
          "ARN Tracking & Certificate Download"
        ]
      },
      {
        heading: "Monthly Returns & Reconciliation",
        items: [
          "GSTR-1, GSTR-2B/2A ITC Matching, GSTR-3B & RCM Calculations",
          "Composition Scheme: CMP-08 & GSTR-4",
          "GST R1A, R10, R2X, IFF Filings",
          "Bill Amendment on Portal & GST R-09 (Cash Balance Transfer)",
          "Annual Returns (GSTR-9 & GSTR-9C) & Notice Replies"
        ]
      }
    ]
  },
  direct_tax: {
    title: "3. Direct Taxation (Income Tax & TDS/TCS)",
    badge: "ITR Filings & Form 16",
    sections: [
      {
        heading: "TDS & TCS Compliance",
        items: [
          "Section-wise deduction check (Sec 194C, 194J, 194I, 194O, 194T)",
          "Monthly tax payment verification (Challan ITNS 281) before due dates",
          "Quarterly e-TDS returns filing: Form 24Q (Salary), Form 26Q, Form 27Q",
          "Generation of Form 16/16A via TRACES portal",
          "Correction of Defaults and Notice Resolutions"
        ]
      },
      {
        heading: "Income Tax Returns & AIS Reconciliation",
        items: [
          "ITR Registration & Portal Setup",
          "Advance tax estimation and schedule payments (June, Sept, Dec, March)",
          "Matching statements with AIS, TIS, and Form 26AS",
          "Computation of income & return filing (ITR-1 to ITR-4, 44AD/44ADA)",
          "Rectifications u/s 154 and pending refund tracking"
        ]
      }
    ]
  },
  audit_setup: {
    title: "4. Auditing, Assurance & Business Setup",
    badge: "Sec 44AB Tax Audit & Registration",
    sections: [
      {
        heading: "Audit & Assurance",
        items: [
          "Tax Audit: Reporting under Section 44AB (Form 3CA/3CB and Form 3CD)",
          "GST Audit & Statutory Certification"
        ]
      },
      {
        heading: "Business Setup & Legal Documentation",
        items: [
          "Udyam (MSME) Registration & GST Revocation/Amendments",
          "Legal Documents: Partnership Deed, Rent Agreement, NOC",
          "Statutory Filings: PF Registration, Linking Aadhaar-PAN",
          "Financial Drafting: Balance Sheet & Profit & Loss Preparation",
          "PAN, TAN, FSSAI, Shop & Establishment Registrations"
        ]
      }
    ]
  }
};

const PRICING_RULES = {
  itr_salaried: { base: 799, unit: "per return", name: "Salaried ITR (ITR-1 / ITR-2)" },
  itr_business: { base: 1999, unit: "per return", name: "Business / Professional ITR (44AD/44ADA)" },
  gst_monthly: { base: 999, unit: "per month", name: "Monthly GST Filing (GSTR 1 & 3B)" },
  tax_audit: { base: 14999, unit: "per audit", name: "Tax Audit u/s 44AB (Form 3CD)" },
  bookkeeping: { base: 2499, unit: "per month", name: "Monthly Accounting & BRS" },
  business_setup: { base: 1499, unit: "one-time", name: "Business Registration (MSME/GST/Partnership)" }
};

// Fee Calculator Engine
function initCalculator() {
  const serviceSelect = document.getElementById('calc-service');
  const volumeSlider = document.getElementById('calc-volume');
  const volumeVal = document.getElementById('calc-volume-val');
  const resultAmount = document.getElementById('calc-result-amount');
  const resultService = document.getElementById('calc-result-service');
  const whatsappQuoteBtn = document.getElementById('calc-whatsapp-btn');

  if (!serviceSelect) return;

  function updateQuote() {
    const serviceKey = serviceSelect.value;
    const volume = parseInt(volumeSlider.value);
    if (volumeVal) volumeVal.innerText = volume;

    const rule = PRICING_RULES[serviceKey];
    let total = rule.base;

    if (serviceKey === 'gst_monthly') {
      if (volume > 50 && volume <= 200) total = 1499;
      else if (volume > 200 && volume <= 500) total = 2499;
      else if (volume > 500) total = 3999;
    } else if (serviceKey === 'bookkeeping') {
      if (volume > 100 && volume <= 300) total = 3999;
      else if (volume > 300) total = 5999;
    } else if (serviceKey === 'tax_audit') {
      if (volume > 100) total = 24999;
      if (volume > 300) total = 34999;
    }

    if (resultAmount) resultAmount.innerText = `₹${total.toLocaleString('en-IN')}`;
    if (resultService) resultService.innerText = `${rule.name} (${rule.unit})`;

    const text = encodeURIComponent(
      `Namaste CA Team! I checked your website fee calculator:\n\n` +
      `• Service: ${rule.name}\n` +
      `• Estimated Volume: ${volume} transactions/month\n` +
      `• Fee Quote: ₹${total.toLocaleString('en-IN')} (${rule.unit})\n\n` +
      `Please connect with me for assistance.`
    );
    if (whatsappQuoteBtn) whatsappQuoteBtn.href = `https://wa.me/${CA_PHONE}?text=${text}`;
  }

  serviceSelect.addEventListener('change', updateQuote);
  if (volumeSlider) volumeSlider.addEventListener('input', updateQuote);
  updateQuote();
}

// Open Deliverable Modal
function openSopModal(key) {
  const modal = document.getElementById('sop-modal');
  const titleEl = document.getElementById('sop-modal-title');
  const badgeEl = document.getElementById('sop-modal-badge');
  const contentEl = document.getElementById('sop-modal-content');

  const data = SOP_DATA[key];
  if (!data) return;

  if (titleEl) titleEl.innerText = data.title;
  if (badgeEl) badgeEl.innerText = data.badge;

  let html = '';
  data.sections.forEach(sec => {
    html += `
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 0.95rem; font-weight: 800; border-bottom: 1px solid var(--border-color); padding-bottom: 8px; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span style="color: var(--brand-emerald);">✔</span> ${sec.heading}
        </h4>
        <ul style="list-style: none; padding: 0;">
          ${sec.items.map(item => `
            <li style="font-size: 0.85rem; font-weight: 600; margin-bottom: 8px; display: flex; align-items: flex-start; gap: 10px;">
              <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: var(--brand-emerald); margin-top: 6px;"></span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  });

  if (contentEl) contentEl.innerHTML = html;
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }
}

function closeSopModal() {
  const modal = document.getElementById('sop-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}

// Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-block');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('lead-name').value;
    const phone = document.getElementById('lead-phone').value;
    const service = document.getElementById('lead-service').value;
    const message = document.getElementById('lead-message').value;

    const text = encodeURIComponent(
      `Namaste! New Website Direct Lead:\n\n• Name: ${name}\n• Phone: ${phone}\n• Service Required: ${service}\n• Remarks: ${message}`
    );
    
    window.open(`https://wa.me/${CA_PHONE}?text=${text}`, '_blank');
    alert("Opening WhatsApp to connect with Chartered Accountant!");
    form.reset();
  });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCursorSpotlight();
  initCalculator();
  initFAQ();
  initContactForm();
  if (window.lucide) lucide.createIcons();
});
