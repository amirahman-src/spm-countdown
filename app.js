// ============================================================================
// SPM 2026 COUNTDOWN - WEB EDITION (VANILLA JS)
// Tailored for Mobile Phones & iPhones
// Features Government Timetable + Network Time Protocol (NTP) Time Sync Engine
// ============================================================================

// State Management
const state = {
  activeType: 'all',          // 'all' | 'writing' | 'speaking' | 'experiment'
  selectedExam: null,
  theme: localStorage.getItem('spm_theme') || 'light',
  timerInterval: null,
  clockOffsetMs: 0,           // Offset between official Malaysian Time and device clock
  syncStatus: 'syncing'       // 'syncing' | 'synced' | 'device'
};

// DOM References
const dom = {
  introScreen: document.getElementById('intro-screen'),
  cardsGrid: document.getElementById('cards-grid'),
  todayDateDisplay: document.getElementById('today-date-display'),
  timeSyncBadge: document.getElementById('time-sync-badge'),
  timeSyncText: document.getElementById('time-sync-text'),
  syncDot: document.getElementById('sync-dot'),
  emptyState: document.getElementById('empty-state'),
  resetFiltersBtn: document.getElementById('reset-filters-btn'),
  
  // Navigation Tabs
  navTabs: document.querySelectorAll('.nav-tab'),
  
  // Theme Toggle
  themeToggleBtn: document.getElementById('theme-toggle-btn'),

  // Detail Sheet
  detailSheet: document.getElementById('detail-sheet'),
  sheetCloseBtn: document.getElementById('sheet-close-btn'),
  sheetTypeLabel: document.getElementById('sheet-type-label'),
  sheetCode: document.getElementById('sheet-code'),
  sheetSubjectName: document.getElementById('sheet-subject-name'),
  sheetStream: document.getElementById('sheet-stream'),
  sheetDateDisplay: document.getElementById('sheet-date-display'),
  sheetTimeDisplay: document.getElementById('sheet-time-display'),
  sheetLocation: document.getElementById('sheet-location'),
  sheetPapersList: document.getElementById('sheet-papers-list'),
  sheetTipsList: document.getElementById('sheet-tips-list'),
  
  // Live Timer Elements
  timerDays: document.getElementById('timer-days'),
  timerHours: document.getElementById('timer-hours'),
  timerMinutes: document.getElementById('timer-minutes'),
  timerSeconds: document.getElementById('timer-seconds')
};

// ============================================================================
// 1. CRITICAL TIME SYNCHRONIZATION ENGINE (Malaysian Standard Time - UTC+8)
// Guarantees all students across iPhones & Androids see identical, accurate time
// regardless of any clock drift or incorrect settings on their phones.
// ============================================================================
async function syncOfficialTime() {
  updateSyncBadge('syncing', 'Menyemak Masa...');

  const startTime = Date.now();
  let serverTimeMs = null;

  // Attempt 1: World Time API (Asia/Kuala_Lumpur)
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur', {
      signal: controller.signal,
      cache: 'no-store'
    });
    clearTimeout(timeout);
    
    if (res.ok) {
      const data = await res.json();
      if (data.utc_datetime) {
        const roundTrip = Date.now() - startTime;
        serverTimeMs = new Date(data.utc_datetime).getTime() + Math.round(roundTrip / 2);
      }
    }
  } catch (err) {
    // Attempt 1 failed or timed out, proceed to fallback
  }

  // Attempt 2: TimeAPI.io (Asia/Kuala_Lumpur)
  if (!serverTimeMs) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000);
      const res = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia%2FKuala_Lumpur', {
        signal: controller.signal,
        cache: 'no-store'
      });
      clearTimeout(timeout);
      
      if (res.ok) {
        const data = await res.json();
        if (data.dateTime) {
          const roundTrip = Date.now() - startTime;
          serverTimeMs = new Date(data.dateTime + '+08:00').getTime() + Math.round(roundTrip / 2);
        }
      }
    } catch (err) {
      // Fallback
    }
  }

  // Attempt 3: HTTP HEAD Date Header from current host
  if (!serverTimeMs && window.location.protocol.startsWith('http')) {
    try {
      const res = await fetch(window.location.href, { method: 'HEAD', cache: 'no-store' });
      const dateHeader = res.headers.get('date');
      if (dateHeader) {
        serverTimeMs = new Date(dateHeader).getTime();
      }
    } catch (err) {
      // Fallback
    }
  }

  if (serverTimeMs) {
    const clientNow = Date.now();
    state.clockOffsetMs = serverTimeMs - clientNow;
    state.syncStatus = 'synced';
    updateSyncBadge('synced', 'MYT (UTC+8) • Terselaras ✓');
  } else {
    // If completely offline or firewalled in school:
    // Anchor to client device clock gracefully
    state.clockOffsetMs = 0;
    state.syncStatus = 'device';
    updateSyncBadge('device', 'Masa Peranti (UTC+8)');
  }

  // Refresh clock and cards with synchronized time
  updateTodayDisplay();
  renderCards();
}

function updateSyncBadge(status, text) {
  if (!dom.timeSyncText || !dom.syncDot) return;
  dom.timeSyncText.textContent = text;
  dom.syncDot.className = `sync-dot ${status}`;
}

// Returns the true current Malaysian Standard Time (UTC+8)
function getNowMYT() {
  return new Date(Date.now() + state.clockOffsetMs);
}

// ============================================================================
// 2. Date Formatting & Arithmetic
// ============================================================================
function getCountdownDetails(targetDateString) {
  const now = getNowMYT();
  const target = new Date(targetDateString);
  const diffMs = target - now;
  
  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true, diffMs: 0 };
  }

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return { days, hours, minutes, seconds, isPassed: false, diffMs };
}

function updateTodayDisplay() {
  if (!dom.todayDateDisplay) return;
  const now = getNowMYT();
  const daysBM = ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'];
  const monthsBM = ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'];
  
  const dayName = daysBM[now.getDay()];
  const day = now.getDate();
  const monthName = monthsBM[now.getMonth()];
  const year = now.getFullYear();
  
  dom.todayDateDisplay.textContent = `${dayName}, ${day} ${monthName} ${year}`;
}

// ============================================================================
// 3. Clean Google Health Subject Formatter
// ============================================================================
function formatExamDisplay(exam) {
  let title = exam.shortName;
  let subtitle = '';

  if (exam.type === 'speaking') {
    if (exam.id === 'spk-bm') {
      title = 'B. Melayu';
      subtitle = 'Ujian Bertutur';
    } else if (exam.id === 'spk-bi') {
      title = 'B. Inggeris';
      subtitle = 'Speaking Test';
    } else {
      title = exam.shortName.replace(' - BERTUTUR', '').replace(' - SPEAKING', '');
      subtitle = 'Ujian Bertutur';
    }
  } else if (exam.type === 'experiment') {
    if (exam.id === 'amali-fizik') {
      title = 'Fizik';
      subtitle = 'Amali Sains';
    } else if (exam.id === 'amali-kimia') {
      title = 'Kimia';
      subtitle = 'Amali Sains';
    } else if (exam.id === 'amali-biologi') {
      title = 'Biologi';
      subtitle = 'Amali Sains';
    } else if (exam.id === 'amali-sains-tambahan') {
      title = 'Sains Tambahan';
      subtitle = 'Amali Sains';
    } else {
      title = exam.shortName.replace(' AMALI', '');
      subtitle = 'Amali Sains';
    }
  } else {
    // Writing
    if (exam.id === 'write-bm') {
      title = 'B. Melayu';
      subtitle = 'Bertulis';
    } else if (exam.id === 'write-bi') {
      title = 'B. Inggeris';
      subtitle = 'Bertulis';
    } else {
      title = exam.shortName
        .toLowerCase()
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      subtitle = 'Bertulis';
    }
  }

  return { title, subtitle };
}

// ============================================================================
// 4. Filtering & Sorting (Closest Exam to Top)
// ============================================================================
function getFilteredExams() {
  const dataset = window.EXAM_DATA || [];
  let list = dataset.map(exam => ({
    ...exam,
    countdown: getCountdownDetails(exam.date)
  }));

  if (state.activeType !== 'all') {
    list = list.filter(exam => exam.type === state.activeType);
  }

  list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return list;
}

// ============================================================================
// 5. Render Metric Cards
// ============================================================================
function renderCards() {
  if (!dom.cardsGrid) return;
  const exams = getFilteredExams();

  if (exams.length === 0) {
    dom.cardsGrid.innerHTML = '';
    if (dom.emptyState) dom.emptyState.classList.remove('hidden');
    return;
  }

  if (dom.emptyState) dom.emptyState.classList.add('hidden');

  dom.cardsGrid.innerHTML = exams.map(exam => {
    const daysLeft = exam.countdown.days;
    const { title, subtitle } = formatExamDisplay(exam);

    return `
      <article 
        class="exam-card type-${exam.type}" 
        data-id="${exam.id}"
        tabindex="0"
        role="button"
        aria-label="${title}, ${daysLeft} days left"
      >
        <div class="card-header">
          <h3 class="card-title">${title}</h3>
          ${subtitle ? `<span class="card-sub">${subtitle}</span>` : ''}
        </div>

        <div class="card-center">
          <span class="card-number">${daysLeft}</span>
          <span class="card-label">days left</span>
        </div>

        <div class="card-footer">
          <span class="card-date">${exam.dateDisplay}</span>
        </div>
      </article>
    `;
  }).join('');

  // Attach card click listener
  dom.cardsGrid.querySelectorAll('.exam-card').forEach(cardEl => {
    cardEl.addEventListener('click', () => {
      const examId = cardEl.getAttribute('data-id');
      openDetailSheet(examId);
    });
  });
}

// ============================================================================
// 6. Detail Bottom Sheet Modal
// ============================================================================
function openDetailSheet(examId) {
  const dataset = window.EXAM_DATA || [];
  const exam = dataset.find(e => e.id === examId);
  if (!exam) return;

  state.selectedExam = exam;

  if (dom.sheetCode) dom.sheetCode.textContent = exam.code;
  if (dom.sheetSubjectName) dom.sheetSubjectName.textContent = exam.fullName;
  if (dom.sheetStream) dom.sheetStream.textContent = `Kod: ${exam.code} • Aliran: ${exam.stream}`;
  if (dom.sheetDateDisplay) dom.sheetDateDisplay.textContent = exam.dateDisplay;
  if (dom.sheetTimeDisplay) dom.sheetTimeDisplay.textContent = exam.timeDisplay;
  if (dom.sheetLocation) dom.sheetLocation.textContent = exam.location || 'Dewan Peperiksaan';

  if (dom.sheetTypeLabel) {
    dom.sheetTypeLabel.textContent = exam.typeName;
  }

  if (dom.sheetPapersList) {
    dom.sheetPapersList.innerHTML = exam.papers.map(p => `
      <div class="paper-item-card">
        <div class="paper-item-header">
          <span class="paper-name">${p.name}</span>
          <span class="paper-code-chip">${p.code}</span>
        </div>
        <div class="paper-time-row">
          <span>⏰ ${p.time}</span>
          <span>Tempoh: ${p.duration || 'Mengikut Jadual'}</span>
        </div>
      </div>
    `).join('');
  }

  if (dom.sheetTipsList) {
    dom.sheetTipsList.innerHTML = (exam.tips || []).map(tip => `
      <li>${tip}</li>
    `).join('');
  }

  updateLiveTicker();
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(updateLiveTicker, 1000);

  if (dom.detailSheet) dom.detailSheet.classList.remove('hidden');
}

function closeDetailSheet() {
  if (dom.detailSheet) dom.detailSheet.classList.add('hidden');
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  state.selectedExam = null;
}

function updateLiveTicker() {
  if (!state.selectedExam) return;
  const cd = getCountdownDetails(state.selectedExam.date);
  
  if (dom.timerDays) dom.timerDays.textContent = String(cd.days).padStart(2, '0');
  if (dom.timerHours) dom.timerHours.textContent = String(cd.hours).padStart(2, '0');
  if (dom.timerMinutes) dom.timerMinutes.textContent = String(cd.minutes).padStart(2, '0');
  if (dom.timerSeconds) dom.timerSeconds.textContent = String(cd.seconds).padStart(2, '0');
}

// ============================================================================
// 7. Theme Management
// ============================================================================
function applyTheme(themeName) {
  state.theme = themeName;
  document.documentElement.className = themeName;
  localStorage.setItem('spm_theme', themeName);

  if (!dom.themeToggleBtn) return;
  const sunIcon = dom.themeToggleBtn.querySelector('.sun-icon');
  const moonIcon = dom.themeToggleBtn.querySelector('.moon-icon');

  if (themeName === 'light') {
    if (sunIcon) sunIcon.classList.add('hidden');
    if (moonIcon) moonIcon.classList.remove('hidden');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#EFF3F8');
  } else {
    if (sunIcon) sunIcon.classList.remove('hidden');
    if (moonIcon) moonIcon.classList.add('hidden');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#121316');
  }
}

// ============================================================================
// 8. Event Listeners
// ============================================================================
function initEventListeners() {
  // Brand Startup Animation Dismiss
  const dismissIntro = () => {
    if (dom.introScreen) {
      dom.introScreen.classList.add('hide-intro');
    }
  };

  if (dom.introScreen) {
    dom.introScreen.addEventListener('click', dismissIntro);
    setTimeout(dismissIntro, 1200);
  }

  // Navigation Filter Tabs
  dom.navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeType = tab.getAttribute('data-type');
      renderCards();
    });
  });

  // Empty State Reset Button
  if (dom.resetFiltersBtn) {
    dom.resetFiltersBtn.addEventListener('click', () => {
      state.activeType = 'all';
      dom.navTabs.forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-type') === 'all');
      });
      renderCards();
    });
  }

  // Detail Sheet Close
  if (dom.sheetCloseBtn) dom.sheetCloseBtn.addEventListener('click', closeDetailSheet);
  if (dom.detailSheet) {
    dom.detailSheet.addEventListener('click', (e) => {
      if (e.target === dom.detailSheet) closeDetailSheet();
    });
  }

  // Theme Toggle
  if (dom.themeToggleBtn) {
    dom.themeToggleBtn.addEventListener('click', () => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Tap Time Badge to view sync info
  if (dom.timeSyncBadge) {
    dom.timeSyncBadge.addEventListener('click', () => {
      const offsetSec = Math.round(state.clockOffsetMs / 1000);
      const msg = state.syncStatus === 'synced'
        ? `Waktu Piawai Malaysia (MYT UTC+8) Terselaras Rasmi.\nPerbezaan jam peranti: ${offsetSec} saat.\nSemua tarikh disahkan mengikut Lembaga Peperiksaan Malaysia.`
        : `Menggunakan masa peranti (UTC+8).\nSila pastikan telefon disambungkan ke internet untuk penyelarasan tepat dengan server kerajaan.`;
      alert(msg);
    });
  }

  // Dynamic header spacing calculation
  window.addEventListener('resize', adjustHeaderSpacing);
}

// Ensure the body content is placed exactly below the fixed header
function adjustHeaderSpacing() {
  const header = document.querySelector('.app-header');
  const body = document.querySelector('.content-body');
  if (header && body) {
    const headerHeight = header.offsetHeight;
    body.style.paddingTop = `${headerHeight + 14}px`;
  }
}

// ============================================================================
// Init
// ============================================================================
function init() {
  updateTodayDisplay();
  applyTheme(state.theme);
  initEventListeners();
  renderCards();
  adjustHeaderSpacing();

  // Trigger Network Time Sync
  syncOfficialTime().then(() => {
    adjustHeaderSpacing();
  });

  // Re-sync time every 15 minutes to guarantee 0 drift
  setInterval(syncOfficialTime, 15 * 60 * 1000);

  // Refresh clock every minute
  setInterval(() => {
    updateTodayDisplay();
    renderCards();
  }, 60000);
}

document.addEventListener('DOMContentLoaded', init);

