/**
 * UMAY Platform - Interactive Engine & Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Language Handling
  let currentLang = localStorage.getItem("umay_lang") || "en";

  const indicationData = {
    ipf: {
      target: "TGFB1 (Transforming Growth Factor Beta 1)",
      modality: "INHIBITOR (Small Molecule Allosteric)",
      candidates: "10,000 SELFIES -> 3 Filtered Leads",
      bestLead: "UMAY-IPF-091 (MW: 382.4 Da, Fsp3: 0.44)",
      affinity: "-10.8 kcal/mol (Kd ≈ 12 nM)",
      stability: "0.84 Å RMSD (< 1.0 Å Highly Stable)"
    },
    t2d: {
      target: "INSR / INS (Insulin Receptor Sensitizer)",
      modality: "ACTIVATOR / PAM (Medical Paradox Shield Active)",
      candidates: "10,000 SELFIES -> 3 Filtered Leads",
      bestLead: "UMAY-DIA-204 (MW: 412.1 Da, LogP: 2.1)",
      affinity: "-9.6 kcal/mol (Kd ≈ 45 nM)",
      stability: "0.92 Å RMSD (< 1.0 Å Highly Stable)"
    },
    ad: {
      target: "APP / BACE1 (Amyloid Secretase Axis)",
      modality: "INHIBITOR (CNS-Penetrant logBB: +0.22)",
      candidates: "10,000 SELFIES -> 3 Filtered Leads",
      bestLead: "UMAY-AD-718 (MW: 345.8 Da, TPSA: 68 Å²)",
      affinity: "-10.4 kcal/mol (Kd ≈ 18 nM)",
      stability: "0.76 Å RMSD (< 1.0 Å Highly Stable)"
    },
    kras: {
      target: "KRAS G12D (Undruggable GTPase Hub)",
      modality: "PROTAC DEGRADER (VHL E3 Ligase Recruit)",
      candidates: "10,000 SELFIES -> 3 Filtered Leads",
      bestLead: "UMAY-PRT-003 (Ternary Complex Validated)",
      affinity: "-11.2 kcal/mol (Kd ≈ 6 nM)",
      stability: "0.95 Å RMSD (< 1.0 Å Highly Stable)"
    }
  };

  function updateLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("umay_lang", lang);

    // Update active class on buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Update all text nodes with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(elem => {
      const path = elem.getAttribute("data-i18n").split(".");
      let val = translations[lang];
      for (const p of path) {
        if (val && val[p] !== undefined) {
          val = val[p];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null) {
        if (elem.tagName === "INPUT" || elem.tagName === "TEXTAREA") {
          elem.placeholder = val;
        } else {
          elem.textContent = val;
        }
      }
    });

    // Update select options if any
    const selectElem = document.getElementById("indication-select");
    if (selectElem && translations[lang].simulator && translations[lang].simulator.indications) {
      const inds = translations[lang].simulator.indications;
      selectElem.options[0].text = inds.ipf;
      selectElem.options[1].text = inds.t2d;
      selectElem.options[2].text = inds.ad;
      selectElem.options[3].text = inds.kras;
    }
  }

  // Bind language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      updateLanguage(btn.dataset.lang);
    });
  });

  // Initial language setup
  updateLanguage(currentLang);

  // 2. Interactive Molecular Simulation Widget
  const selectElem = document.getElementById("indication-select");
  const runBtn = document.getElementById("btn-run-sim");
  const progressBox = document.getElementById("sim-progress");
  const progressBarFill = document.getElementById("sim-bar-fill");
  const progressText = document.getElementById("sim-progress-text");

  const resTarget = document.getElementById("res-target");
  const resModality = document.getElementById("res-modality");
  const resCandidates = document.getElementById("res-candidates");
  const resLead = document.getElementById("res-lead");
  const resAffinity = document.getElementById("res-affinity");
  const resStability = document.getElementById("res-stability");

  function runSimulation() {
    const selectedKey = selectElem ? selectElem.value : "ipf";
    const data = indicationData[selectedKey] || indicationData.ipf;

    if (runBtn) runBtn.disabled = true;
    if (progressBarFill) progressBarFill.style.width = "0%";
    if (progressText) progressText.textContent = "Stage 1-5: Querying Open Targets & AlphaFold Coordinates...";

    let step = 0;
    const interval = setInterval(() => {
      step += 25;
      if (progressBarFill) progressBarFill.style.width = step + "%";

      if (step === 25) {
        if (progressText) progressText.textContent = "Stage 6: Generating 10,000 SELFIES candidates & BRICS fragments...";
      } else if (step === 50) {
        if (progressText) progressText.textContent = "Stage 7: Bayesian GP-LCB Acquisition Optimization...";
      } else if (step === 75) {
        if (progressText) progressText.textContent = "Stage 8: AutoDock Vina Ensemble & 10ns MD Trajectory...";
      } else if (step >= 100) {
        clearInterval(interval);
        if (progressText) progressText.textContent = "✓ Lead Candidate Validated (RMSD < 1.0Å) - IND Dossier Created";
        if (runBtn) runBtn.disabled = false;

        // Apply updated simulation results
        if (resTarget) resTarget.textContent = data.target;
        if (resModality) resModality.textContent = data.modality;
        if (resCandidates) resCandidates.textContent = data.candidates;
        if (resLead) resLead.textContent = data.bestLead;
        if (resAffinity) resAffinity.textContent = data.affinity;
        if (resStability) resStability.textContent = data.stability;
      }
    }, 280);
  }

  if (runBtn) {
    runBtn.addEventListener("click", runSimulation);
  }

  if (selectElem) {
    selectElem.addEventListener("change", runSimulation);
  }

  // 3. Modal Handlers
  const modal = document.getElementById("inquiry-modal");
  const modalClose = document.getElementById("modal-close");
  const inquiryForm = document.getElementById("inquiry-form");
  const formSuccess = document.getElementById("form-success");

  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) modal.classList.add("active");
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      if (modal) modal.classList.remove("active");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      inquiryForm.style.display = "none";
      if (formSuccess) formSuccess.style.display = "block";
      setTimeout(() => {
        if (modal) modal.classList.remove("active");
        setTimeout(() => {
          inquiryForm.reset();
          inquiryForm.style.display = "block";
          if (formSuccess) formSuccess.style.display = "none";
        }, 500);
      }, 2500);
    });
  }

  // 4. Background Canvas Interactive Particle / Molecular Network
  const canvas = document.getElementById("canvas-bg");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width, height;
    let particles = [];
    const particleCount = 55;
    const maxDistance = 140;

    let mouse = { x: null, y: null, radius: 150 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1.2;
        this.baseColor = Math.random() > 0.4 ? "rgba(6, 182, 212, " : "rgba(16, 185, 129, ";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse avoidance/attraction subtle reaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor + "0.65)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#06b6d4";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    animate();
  }
});
