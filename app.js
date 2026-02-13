// ========================================
// Quiz Data — 4 Modules, 5 Questions Each
// ========================================
const QUIZ_DATA = [
  {
    id: 1,
    title: "Module 01: The New Power Platform Vibe",
    description: "Copilot-First, MCP-First Paradigm",
    questions: [
      {
        id: 1,
        type: "single",
        question: "What does MCP stand for in the context of Power Platform's agentic architecture?",
        options: [
          "Microsoft Cloud Platform",
          "Model Context Protocol",
          "Multi-Channel Protocol",
          "Managed Connector Protocol"
        ],
        correct: 1,
        explanation: "MCP stands for Model Context Protocol — an open-source standard introduced by Anthropic in November 2024. It provides a universal, standardised way for AI systems (such as LLMs) to connect with external data sources, tools, and services. It was donated to the Linux Foundation's Agentic AI Foundation in December 2025."
      },
      {
        id: 2,
        type: "multi",
        question: "Which of the following are the three core principles of the Agentic AI in Power Platform course? (Select all that apply)",
        options: [
          "Copilot-First",
          "Cloud-First",
          "MCP-First",
          "Human-in-the-Loop"
        ],
        correct: [0, 2, 3],
        explanation: "The course is built around three core principles: Copilot-First (start by asking 'Can an AI agent handle this?'), MCP-First (use the Model Context Protocol as the standard integration layer), and Human-in-the-Loop (ensure human oversight for critical BFSI decisions like credit approvals and AML escalations)."
      },
      {
        id: 3,
        type: "order",
        question: "Arrange the three eras of Power Platform in chronological order (earliest first):",
        items: [
          "Copilot-Assisted (2023–2024)",
          "Agentic AI (2025+)",
          "Low-Code (2018–2022)"
        ],
        correctOrder: [2, 0, 1],
        explanation: "Power Platform evolved through three eras: Era 1 — Low-Code (2018–2022) focused on citizen developers with drag-and-drop; Era 2 — Copilot-Assisted (2023–2024) combining natural language with low-code; Era 3 — Agentic AI (2025+) where agents build and execute solutions autonomously."
      },
      {
        id: 4,
        type: "match",
        question: "Match each Dataverse role with its correct description:",
        pairs: [
          { left: "System of Record", right: "Enterprise data store for structured business data" },
          { left: "Agent Memory", right: "Shared persistent store for context and conversation history" },
          { left: "MCP Control Plane", right: "Standardised interface for AI agents to access and modify data" }
        ],
        explanation: "In the agentic AI era, Dataverse serves three roles: System of Record (enterprise data store), Agent Memory (shared persistent context enabling multi-agent coordination), and MCP Control Plane (the standardised interface through which AI agents discover, query, and modify enterprise data)."
      },
      {
        id: 5,
        type: "single",
        question: "Which organisation originally introduced MCP before donating it to the Linux Foundation?",
        options: [
          "Microsoft",
          "Google DeepMind",
          "Anthropic",
          "OpenAI"
        ],
        correct: 2,
        explanation: "MCP was introduced by Anthropic in November 2024 as an open-source standard. It was later donated to the Agentic AI Foundation under the Linux Foundation in December 2025, ensuring vendor-neutral governance. By late 2025 it had over 97 million monthly SDK downloads and 5,800+ MCP servers."
      }
    ]
  },
  {
    id: 2,
    title: "Module 02: Plan Designer & Intent-Driven Architecture",
    description: "AI-Powered Solution Design from Natural Language",
    questions: [
      {
        id: 1,
        type: "single",
        question: "What are the three phases of the Plan Designer workflow?",
        options: [
          "Plan, Execute, Deploy",
          "Describe, Review, Build",
          "Design, Develop, Test",
          "Analyse, Create, Publish"
        ],
        correct: 1,
        explanation: "Plan Designer follows a three-phase workflow: Describe (maker provides a natural language description), Review (inspect the generated blueprint — tables, apps, flows, agents), and Build (Plan Designer creates all components in the environment). The Review phase is the most important — makers should carefully inspect every component."
      },
      {
        id: 2,
        type: "multi",
        question: "Which components can Plan Designer generate from a single natural language description? (Select all that apply)",
        options: [
          "Dataverse tables",
          "Power Automate cloud flows",
          "Copilot Studio agents",
          "Azure DevOps pipelines"
        ],
        correct: [0, 1, 2],
        explanation: "Plan Designer can generate five types of components: Dataverse tables (with columns, relationships, sample data), model-driven/canvas apps, Power Automate cloud flows, Copilot Studio agent definitions, and Power Pages sites. It does NOT generate Azure DevOps pipelines, security roles, or environment variables."
      },
      {
        id: 3,
        type: "order",
        question: "Arrange Plan Designer's internal specialised agents in their processing order:",
        items: [
          "App Designer Agent",
          "Intent Analyser Agent",
          "Data Architect Agent",
          "Flow Designer Agent"
        ],
        correctOrder: [1, 2, 0, 3],
        explanation: "When a maker submits a description, Plan Designer's multi-agent system processes it in sequence: the Intent Analyser Agent parses the description first, then the Data Architect Agent designs the Dataverse schema, the App Designer Agent determines app types, and the Flow Designer Agent identifies automation opportunities. An Orchestrator coordinates all outputs."
      },
      {
        id: 4,
        type: "match",
        question: "Match each development approach with its defining characteristic:",
        pairs: [
          { left: "Traditional Approach", right: "Start with data model design and build components one by one" },
          { left: "Intent-Driven Approach", right: "Start with a business description and generate all components together" },
          { left: "Plan Designer", right: "AI-powered multi-agent system that designs complete solution blueprints" }
        ],
        explanation: "Traditional development follows a bottom-up approach (manual data model → apps → flows → AI). Intent-driven architecture flips this: the maker starts with a business intent in natural language, and Plan Designer — a multi-agent system — generates a cohesive architecture across all components simultaneously."
      },
      {
        id: 5,
        type: "single",
        question: "What is a core design principle of every Plan Designer output?",
        options: [
          "All outputs are anchored to SharePoint lists",
          "Every Plan Designer output is anchored to Dataverse",
          "Plan Designer creates its own proprietary database",
          "Outputs are stored in Azure SQL by default"
        ],
        correct: 1,
        explanation: "Every Plan Designer output is anchored to Dataverse. This is a core design principle — all data models are created as Dataverse tables, all apps read from and write to Dataverse, all flows act upon Dataverse events, and all agents use Dataverse as their knowledge source via MCP. This ensures a single source of truth."
      }
    ]
  },
  {
    id: 3,
    title: "Module 03: Power Apps Vibe – Copilot-First Creation",
    description: "Natural Language App Generation with React",
    questions: [
      {
        id: 1,
        type: "single",
        question: "What technology stack do Power Apps Vibe-generated applications use?",
        options: [
          "Traditional canvas app proprietary runtime",
          "React-based web applications",
          "Angular framework with TypeScript",
          "Power Fx formulas in a custom engine"
        ],
        correct: 1,
        explanation: "Vibe generates modern React-based web applications — not traditional canvas apps. The generated code is real JavaScript/React code that makers or pro developers can inspect, understand, and modify. This makes Vibe apps a bridge between the low-code world and the pro-code world."
      },
      {
        id: 2,
        type: "multi",
        question: "Which of the following are current limitations of the Power Apps Vibe experience? (Select all that apply)",
        options: [
          "Not production-ready (Public Preview only)",
          "Cannot generate any data model at all",
          "Limited offline support compared to canvas apps",
          "Complex business logic may be challenging"
        ],
        correct: [0, 2, 3],
        explanation: "Vibe's current limitations include: not production-ready (Public Preview — should be treated as prototypes), limited offline support (React apps require connectivity unlike traditional canvas apps), and difficulty with complex conditional logic. However, Vibe CAN generate data models — it auto-creates Dataverse tables with columns and relationships."
      },
      {
        id: 3,
        type: "order",
        question: "Arrange the Power Apps Vibe creation workflow steps in the correct order:",
        items: [
          "Save and Publish the app",
          "Describe Your App in natural language",
          "Iterate Through Conversation to refine",
          "Review the Generated App in preview"
        ],
        correctOrder: [1, 3, 2, 0],
        explanation: "The Vibe creation workflow follows these steps: (1) Describe Your App — enter natural language description; (2) Review the Generated App — inspect screens, data model, functionality; (3) Iterate Through Conversation — refine through dialogue (the most powerful step); (4) Save and Publish — make the app available to users."
      },
      {
        id: 4,
        type: "match",
        question: "Match each Power Apps generation with its key characteristic:",
        pairs: [
          { left: "Gen 1 — Canvas Apps", right: "Pixel-perfect control with Power Fx formulas and drag-and-drop" },
          { left: "Gen 2 — Model-Driven Apps", right: "Data-first approach generated from Dataverse table metadata" },
          { left: "Gen 3 — Vibe Experience", right: "Intent-first AI-generated React apps from natural language" }
        ],
        explanation: "Power Apps has evolved through three generations: Gen 1 Canvas Apps (2016–present) offer pixel-perfect control with Power Fx formulas; Gen 2 Model-Driven Apps (2018–present) use a data-first approach configured from Dataverse metadata; Gen 3 Vibe Experience (2025–present) enables intent-first creation using AI-generated React applications."
      },
      {
        id: 5,
        type: "single",
        question: "What is the dedicated URL to access the Power Apps Vibe experience?",
        options: [
          "make.powerapps.com",
          "vibe.powerapps.com",
          "apps.powerplatform.com",
          "copilot.microsoft.com"
        ],
        correct: 1,
        explanation: "The Power Apps Vibe experience is available at vibe.powerapps.com — the dedicated entry point for the Vibe experience. While Plan Designer can also be accessed from make.powerapps.com, the full Vibe experience with its conversational iteration loop is at its dedicated URL."
      }
    ]
  },
  {
    id: 4,
    title: "Module 04: MCP Dataverse in Power Apps",
    description: "Connecting AI Agents to Enterprise Data via MCP",
    questions: [
      {
        id: 1,
        type: "single",
        question: "When did the Dataverse MCP Server become Generally Available (GA)?",
        options: [
          "Build 2025 (June 2025)",
          "September 2025",
          "Ignite 2025 (November 2025)",
          "January 2026"
        ],
        correct: 2,
        explanation: "The Dataverse MCP Server was announced at Build 2025 (June 2025) and became Generally Available at Ignite 2025 (November 2025). It is the centrepiece of Microsoft's strategy to position Dataverse as the agent platform for enterprise AI."
      },
      {
        id: 2,
        type: "multi",
        question: "Which of the following are built-in tools provided by the Dataverse MCP Server? (Select all that apply)",
        options: [
          "list_tables",
          "delete_record",
          "describe_table",
          "read_query"
        ],
        correct: [0, 2, 3],
        explanation: "The Dataverse MCP Server provides seven built-in tools: list_tables, describe_table, read_query, create_record, update_record, search_knowledge, and prompt execution. It does NOT include a delete_record tool — deletion operations are not exposed through MCP for data safety."
      },
      {
        id: 3,
        type: "order",
        question: "Arrange the schema-driven reasoning steps in the correct order when an agent answers a data question:",
        items: [
          "Agent calls describe_table for schema details",
          "Agent executes read_query against the table",
          "User asks a question about data",
          "Agent calls list_tables to discover available tables"
        ],
        correctOrder: [2, 3, 0, 1],
        explanation: "The schema-driven reasoning pattern follows this sequence: (1) User asks a question; (2) Agent calls list_tables to discover available tables; (3) Agent calls describe_table to understand columns, types, and relationships; (4) Agent executes read_query with correct filters based on the schema. This pattern prevents hallucinated column names or filter values."
      },
      {
        id: 4,
        type: "match",
        question: "Match each Dataverse MCP security layer with its description:",
        pairs: [
          { left: "User Context Security", right: "Every MCP operation executes in the calling user's security role" },
          { left: "Table-Level Security", right: "Controls which tables appear in list_tables based on read access" },
          { left: "Column-Level Security", right: "Restricts sensitive columns from appearing in describe_table" },
          { left: "Record-Level Security", right: "Business unit ownership and sharing rules filter query results" }
        ],
        explanation: "The Dataverse MCP Server enforces security at multiple levels: User Context (inherits the user's security role), Table-Level (only tables with read access appear), Column-Level (restricted columns like PAN numbers are hidden), and Record-Level (business unit ownership and sharing rules apply to read_query results). MCP access boundaries and audit logging provide additional control."
      },
      {
        id: 5,
        type: "single",
        question: "What is the fundamental principle behind schema-driven reasoning in MCP?",
        options: [
          "Query data first and validate results later",
          "Understand the table structure before formulating any query",
          "Always use search_knowledge instead of read_query",
          "Skip schema discovery to improve agent response speed"
        ],
        correct: 1,
        explanation: "Schema-driven reasoning means the agent calls describe_table to understand the table structure (columns, data types, option set values, relationships) before formulating a read_query. This two-step pattern (understand, then act) is fundamental to reliable agent-data interaction — it prevents the agent from guessing wrong column names, missing filter options, or returning incorrect results."
      }
    ]
  }
];

// ========================================
// Constants
// ========================================
const PASSWORD = "EY@123456";
const ADMIN_EMAIL = "admin@ey.com";
const STORAGE_KEY = "pplatform_quiz_users";
const CURRENT_USER_KEY = "pplatform_quiz_current";

// ========================================
// Firebase Configuration
// ========================================
// To enable shared data storage (so admin can see ALL participants' results
// from any browser), create a free Firebase project and fill in your config.
//
// Setup steps:
//   1. Go to https://console.firebase.google.com
//   2. Create a new project (free Spark plan is fine)
//   3. Go to Project Settings > General > Your apps > click "Web" icon
//   4. Register an app, then copy the firebaseConfig object below
//   5. Go to Build > Realtime Database > Create Database > choose "Start in test mode"
//   6. Deploy your site — results are now shared across all browsers!
//
// Without Firebase, data is stored in localStorage only (per-browser).
const FIREBASE_CONFIG = {
  // Uncomment and fill in your Firebase project values:
  // apiKey: "AIza...",
  // authDomain: "your-project.firebaseapp.com",
  // databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  // projectId: "your-project",
  // storageBucket: "your-project.appspot.com",
  // messagingSenderId: "123456789",
  // appId: "1:123456789:web:abcdef"
};

let firebaseDB = null;
let firebaseEnabled = false;

function initFirebase() {
  if (FIREBASE_CONFIG.apiKey) {
    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      firebaseDB = firebase.database();
      firebaseEnabled = true;
      console.log('[Quiz] Firebase connected — results will be shared across all browsers.');
    } catch (e) {
      console.warn('[Quiz] Firebase init failed, falling back to localStorage:', e);
    }
  } else {
    console.info('[Quiz] Firebase not configured — using localStorage only. Admin will only see local results.');
  }
}

// Firebase keys cannot contain . # $ [ ] /
function emailToFirebaseKey(email) {
  return email.replace(/\./g, ',').replace(/@/g, '__at__');
}

function firebaseKeyToEmail(key) {
  return key.replace(/,/g, '.').replace(/__at__/g, '@');
}

// ========================================
// State
// ========================================
let currentUser = null;
let isAdmin = false;
let currentModule = null;
let currentQuestionIndex = 0;
let currentAnswers = [];
let answered = false;

// ========================================
// DOM Helpers
// ========================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function showView(viewId) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $(`#${viewId}`).classList.add('active');
}

// ========================================
// Storage (localStorage + Firebase sync)
// ========================================
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function getUserData(email) {
  const users = getUsers();
  return users[email] || null;
}

function saveUserData(email, data) {
  const users = getUsers();
  users[email] = data;
  saveUsers(users);

  // Also persist to Firebase so admin can see all participants
  if (firebaseEnabled && firebaseDB) {
    const key = emailToFirebaseKey(email);
    firebaseDB.ref('users/' + key).set(data)
      .catch(err => console.warn('[Quiz] Firebase save failed:', err));
  }
}

// Fetch all users from Firebase (used by admin view)
async function fetchAllUsersFromFirebase() {
  if (!firebaseEnabled || !firebaseDB) return getUsers();
  try {
    const snapshot = await firebaseDB.ref('users').once('value');
    const raw = snapshot.val() || {};
    const users = {};
    Object.keys(raw).forEach(key => {
      const email = firebaseKeyToEmail(key);
      users[email] = raw[key];
    });
    // Cache in localStorage so CSV export and other sync reads work
    saveUsers(users);
    return users;
  } catch (err) {
    console.warn('[Quiz] Firebase fetch failed, using localStorage:', err);
    return getUsers();
  }
}

// Fetch a single user from Firebase (used at login to restore progress)
async function fetchUserFromFirebase(email) {
  if (!firebaseEnabled || !firebaseDB) return getUserData(email);
  try {
    const key = emailToFirebaseKey(email);
    const snapshot = await firebaseDB.ref('users/' + key).once('value');
    const data = snapshot.val();
    if (data) {
      // Update localStorage cache
      const users = getUsers();
      users[email] = data;
      saveUsers(users);
      return data;
    }
    return getUserData(email);
  } catch (err) {
    console.warn('[Quiz] Firebase user fetch failed, using localStorage:', err);
    return getUserData(email);
  }
}

// ========================================
// Login
// ========================================
function initLogin() {
  const form = $('#login-form');
  const errorEl = $('#login-error');
  const adminToggle = $('#admin-toggle');
  const submitBtn = form.querySelector('button[type="submit"]');
  let adminMode = false;

  function resetAdminMode() {
    adminMode = false;
    adminToggle.textContent = 'Admin Login';
    $('#login-name').parentElement.style.display = 'block';
    $('#login-name').required = true;
    submitBtn.textContent = 'Start Assessment';
  }

  // Expose so logout handlers can reset admin state
  window._resetAdminMode = resetAdminMode;

  adminToggle.addEventListener('click', (e) => {
    e.preventDefault();
    adminMode = !adminMode;
    adminToggle.textContent = adminMode ? 'User Login' : 'Admin Login';
    $('#login-name').parentElement.style.display = adminMode ? 'none' : 'block';
    $('#login-name').required = !adminMode;
    submitBtn.textContent = adminMode ? 'Admin Login' : 'Start Assessment';
    if (adminMode) {
      $('#login-email').value = ADMIN_EMAIL;
    } else {
      $('#login-email').value = '';
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = $('#login-name').value.trim();
    const email = $('#login-email').value.trim().toLowerCase();
    const password = $('#login-password').value;

    errorEl.classList.add('hidden');

    if (password !== PASSWORD) {
      errorEl.textContent = 'Incorrect password. Please try again.';
      errorEl.classList.remove('hidden');
      return;
    }

    if (adminMode || email === ADMIN_EMAIL) {
      isAdmin = true;
      currentUser = { email: ADMIN_EMAIL, fullName: 'Administrator' };
      showAdminView();
      return;
    }

    if (!name) {
      errorEl.textContent = 'Please enter your full name.';
      errorEl.classList.remove('hidden');
      return;
    }
    if (!email) {
      errorEl.textContent = 'Please enter your email address.';
      errorEl.classList.remove('hidden');
      return;
    }

    // Disable form while loading
    submitBtn.disabled = true;
    submitBtn.textContent = 'Loading...';

    // Try to fetch existing progress from Firebase (restores progress across browsers)
    let userData = await fetchUserFromFirebase(email);

    if (!userData) {
      userData = {
        fullName: name,
        email: email,
        modules: {},
        createdAt: new Date().toISOString()
      };
      saveUserData(email, userData);
    } else {
      // Update name if different
      userData.fullName = name;
      saveUserData(email, userData);
    }

    submitBtn.disabled = false;
    submitBtn.textContent = adminMode ? 'Admin Login' : 'Start Assessment';

    currentUser = userData;
    isAdmin = false;
    showDashboard();
  });
}

// ========================================
// Dashboard
// ========================================
function showDashboard() {
  showView('dashboard-view');
  const userData = getUserData(currentUser.email);
  currentUser = userData;

  $('#user-greeting').textContent = `Hello, ${userData.fullName}`;

  renderModuleCards();
  renderOverallProgress();
  checkCertificateEligibility();
}

function renderModuleCards() {
  const container = $('#module-cards');
  container.innerHTML = '';

  QUIZ_DATA.forEach((mod, i) => {
    const moduleResult = currentUser.modules[mod.id];
    const completed = moduleResult && moduleResult.completed;
    const score = completed ? moduleResult.score : null;
    const total = mod.questions.length;

    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <div class="module-card-header">
        <div class="module-number mod-${mod.id}">${String(mod.id).padStart(2, '0')}</div>
        <div class="module-card-info">
          <h3>${mod.title}</h3>
          <p>${mod.description}</p>
        </div>
      </div>
      <div class="module-card-body">
        <div class="module-card-status">
          ${completed
            ? `<span class="module-score completed">${score}/${total} correct</span>`
            : `<span class="module-score">${total} questions</span>`
          }
        </div>
        ${completed
          ? `<button class="btn btn-completed btn-full" disabled>Completed &#10003;</button>`
          : `<button class="btn btn-primary btn-full start-module-btn" data-module="${mod.id}">Start Module</button>`
        }
      </div>
    `;
    container.appendChild(card);
  });

  // Attach events
  container.querySelectorAll('.start-module-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modId = parseInt(btn.dataset.module);
      startModule(modId);
    });
  });
}

function renderOverallProgress() {
  const container = $('#overall-progress');
  const completedCount = QUIZ_DATA.filter(m => currentUser.modules[m.id]?.completed).length;
  const pct = (completedCount / QUIZ_DATA.length) * 100;
  container.innerHTML = `<div class="overall-progress-fill" style="width: ${pct}%"></div>`;
}

function checkCertificateEligibility() {
  const allDone = QUIZ_DATA.every(m => currentUser.modules[m.id]?.completed);
  const section = $('#certificate-section');

  if (allDone) {
    let totalScore = 0;
    let totalQuestions = 0;
    QUIZ_DATA.forEach(m => {
      totalScore += currentUser.modules[m.id].score;
      totalQuestions += m.questions.length;
    });
    const pct = Math.round((totalScore / totalQuestions) * 100);
    $('#final-score-text').textContent = `You scored ${totalScore}/${totalQuestions} (${pct}%) across all modules.`;
    section.classList.remove('hidden');
  } else {
    section.classList.add('hidden');
  }
}

// ========================================
// Quiz Engine
// ========================================
function startModule(moduleId) {
  currentModule = QUIZ_DATA.find(m => m.id === moduleId);
  currentQuestionIndex = 0;
  currentAnswers = [];
  answered = false;

  showView('quiz-view');
  $('#quiz-module-title').textContent = currentModule.title;
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = currentModule.questions[currentQuestionIndex];
  const total = currentModule.questions.length;

  // Progress
  $('#quiz-progress').textContent = `Question ${currentQuestionIndex + 1} of ${total}`;
  $('#quiz-progress-fill').style.width = `${((currentQuestionIndex) / total) * 100}%`;

  // Buttons
  $('#submit-answer-btn').classList.remove('hidden');
  $('#submit-answer-btn').disabled = true;
  $('#next-question-btn').classList.add('hidden');
  $('#feedback-container').classList.add('hidden');

  const container = $('#question-container');

  // Badge
  const badges = {
    single: '<span class="question-type-badge badge-single">Single Choice</span>',
    multi: '<span class="question-type-badge badge-multi">Multiple Choice</span>',
    order: '<span class="question-type-badge badge-order">Chronological Order</span>',
    match: '<span class="question-type-badge badge-match">Match the Pair</span>'
  };

  let html = badges[q.type];
  html += `<p class="question-text">${q.question}</p>`;

  if (q.type === 'single') {
    html += renderSingleChoice(q);
  } else if (q.type === 'multi') {
    html += '<p class="question-hint">Select all correct answers</p>';
    html += renderMultiChoice(q);
  } else if (q.type === 'order') {
    html += '<p class="question-hint">Drag items or use arrows to arrange in correct order</p>';
    html += renderOrderQuestion(q);
  } else if (q.type === 'match') {
    html += '<p class="question-hint">Select the matching description for each item</p>';
    html += renderMatchQuestion(q);
  }

  container.innerHTML = html;
  attachQuestionEvents(q);
}

function renderSingleChoice(q) {
  return `<div class="options-list">
    ${q.options.map((opt, i) => `
      <div class="option-item" data-index="${i}">
        <span class="option-marker"></span>
        <span class="option-text">${opt}</span>
      </div>
    `).join('')}
  </div>`;
}

function renderMultiChoice(q) {
  return `<div class="options-list">
    ${q.options.map((opt, i) => `
      <div class="option-item multi" data-index="${i}">
        <span class="option-marker"></span>
        <span class="option-text">${opt}</span>
      </div>
    `).join('')}
  </div>`;
}

function renderOrderQuestion(q) {
  // Shuffle items
  const indices = q.items.map((_, i) => i);
  shuffleArray(indices);

  return `<div class="order-list" id="order-list">
    ${indices.map((origIdx, pos) => `
      <div class="order-item" draggable="true" data-orig-index="${origIdx}">
        <span class="order-number">${pos + 1}</span>
        <span class="order-handle">&#9776;</span>
        <span class="order-text">${q.items[origIdx]}</span>
        <div class="order-arrows">
          <button class="arrow-btn arrow-up" title="Move up">&#9650;</button>
          <button class="arrow-btn arrow-down" title="Move down">&#9660;</button>
        </div>
      </div>
    `).join('')}
  </div>`;
}

function renderMatchQuestion(q) {
  // Shuffle right side options
  const rightOptions = q.pairs.map(p => p.right);
  const shuffled = [...rightOptions];
  shuffleArray(shuffled);

  return `<div class="match-container">
    ${q.pairs.map((pair, i) => `
      <div class="match-row" data-index="${i}">
        <div class="match-left">${pair.left}</div>
        <span class="match-arrow">&#8594;</span>
        <select class="match-select" data-index="${i}">
          <option value="">-- Select --</option>
          ${shuffled.map(r => `<option value="${r}">${r}</option>`).join('')}
        </select>
      </div>
    `).join('')}
  </div>`;
}

function attachQuestionEvents(q) {
  if (q.type === 'single') {
    $$('.option-item').forEach(item => {
      item.addEventListener('click', () => {
        $$('.option-item').forEach(o => o.classList.remove('selected'));
        item.classList.add('selected');
        $('#submit-answer-btn').disabled = false;
      });
    });
  } else if (q.type === 'multi') {
    $$('.option-item.multi').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('selected');
        const anySelected = $$('.option-item.selected').length > 0;
        $('#submit-answer-btn').disabled = !anySelected;
      });
    });
  } else if (q.type === 'order') {
    initDragAndDrop();
    initArrowButtons();
    $('#submit-answer-btn').disabled = false;
  } else if (q.type === 'match') {
    $$('.match-select').forEach(sel => {
      sel.addEventListener('change', () => {
        const allSelected = Array.from($$('.match-select')).every(s => s.value !== '');
        $('#submit-answer-btn').disabled = !allSelected;
      });
    });
  }
}

// Drag and drop for order questions
function initDragAndDrop() {
  const list = $('#order-list');
  if (!list) return;

  let dragItem = null;

  list.querySelectorAll('.order-item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
      dragItem = item;
      item.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      list.querySelectorAll('.order-item').forEach(i => i.classList.remove('drag-over'));
      updateOrderNumbers();
    });

    item.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      if (item !== dragItem) {
        item.classList.add('drag-over');
      }
    });

    item.addEventListener('dragleave', () => {
      item.classList.remove('drag-over');
    });

    item.addEventListener('drop', (e) => {
      e.preventDefault();
      item.classList.remove('drag-over');
      if (item !== dragItem && dragItem) {
        const items = Array.from(list.children);
        const dragIdx = items.indexOf(dragItem);
        const dropIdx = items.indexOf(item);
        if (dragIdx < dropIdx) {
          list.insertBefore(dragItem, item.nextSibling);
        } else {
          list.insertBefore(dragItem, item);
        }
        updateOrderNumbers();
      }
    });
  });
}

function initArrowButtons() {
  const list = $('#order-list');
  if (!list) return;

  list.querySelectorAll('.arrow-up').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.order-item');
      const prev = item.previousElementSibling;
      if (prev) {
        list.insertBefore(item, prev);
        updateOrderNumbers();
      }
    });
  });

  list.querySelectorAll('.arrow-down').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = btn.closest('.order-item');
      const next = item.nextElementSibling;
      if (next) {
        list.insertBefore(next, item);
        updateOrderNumbers();
      }
    });
  });
}

function updateOrderNumbers() {
  const list = $('#order-list');
  if (!list) return;
  list.querySelectorAll('.order-item').forEach((item, i) => {
    item.querySelector('.order-number').textContent = i + 1;
  });
}

// ========================================
// Submit Answer
// ========================================
function submitAnswer() {
  if (answered) return;
  answered = true;

  const q = currentModule.questions[currentQuestionIndex];
  let isCorrect = false;
  let userAnswer = null;

  if (q.type === 'single') {
    const selected = $('.option-item.selected');
    if (!selected) return;
    const selectedIdx = parseInt(selected.dataset.index);
    userAnswer = selectedIdx;
    isCorrect = selectedIdx === q.correct;

    // Show correct/incorrect
    $$('.option-item').forEach(item => {
      item.classList.add('disabled');
      const idx = parseInt(item.dataset.index);
      if (idx === q.correct) item.classList.add('correct');
      if (idx === selectedIdx && !isCorrect) item.classList.add('incorrect');
    });

  } else if (q.type === 'multi') {
    const selected = Array.from($$('.option-item.selected')).map(el => parseInt(el.dataset.index));
    userAnswer = selected;
    isCorrect = arraysEqual(selected.sort(), [...q.correct].sort());

    $$('.option-item').forEach(item => {
      item.classList.add('disabled');
      const idx = parseInt(item.dataset.index);
      if (q.correct.includes(idx)) item.classList.add('correct');
      if (selected.includes(idx) && !q.correct.includes(idx)) item.classList.add('incorrect');
    });

  } else if (q.type === 'order') {
    const items = Array.from($$('#order-list .order-item'));
    const userOrder = items.map(el => parseInt(el.dataset.origIndex));
    userAnswer = userOrder;
    isCorrect = arraysEqual(userOrder, q.correctOrder);

    items.forEach((item, pos) => {
      item.classList.add('disabled');
      item.setAttribute('draggable', 'false');
      const origIdx = parseInt(item.dataset.origIndex);
      if (origIdx === q.correctOrder[pos]) {
        item.classList.add('correct-pos');
      } else {
        item.classList.add('incorrect-pos');
      }
      // Disable arrow buttons
      item.querySelectorAll('.arrow-btn').forEach(b => b.style.display = 'none');
    });

  } else if (q.type === 'match') {
    const selects = Array.from($$('.match-select'));
    const userMatches = selects.map(s => s.value);
    userAnswer = userMatches;

    isCorrect = q.pairs.every((pair, i) => userMatches[i] === pair.right);

    $$('.match-row').forEach((row, i) => {
      const sel = row.querySelector('.match-select');
      sel.disabled = true;
      if (userMatches[i] === q.pairs[i].right) {
        row.classList.add('correct');
      } else {
        row.classList.add('incorrect');
      }
    });
  }

  // Save answer
  currentAnswers.push({
    questionId: q.id,
    type: q.type,
    userAnswer: userAnswer,
    isCorrect: isCorrect
  });

  // Show feedback
  showFeedback(isCorrect, q.explanation);

  // Toggle buttons
  $('#submit-answer-btn').classList.add('hidden');
  $('#next-question-btn').classList.remove('hidden');

  if (currentQuestionIndex === currentModule.questions.length - 1) {
    $('#next-question-btn').textContent = 'View Results';
  } else {
    $('#next-question-btn').textContent = 'Next Question →';
  }
}

function showFeedback(isCorrect, explanation) {
  const container = $('#feedback-container');
  container.className = `feedback-container ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`;
  container.innerHTML = `
    <div class="feedback-header">
      ${isCorrect ? '&#10003; Correct!' : '&#10007; Incorrect'}
    </div>
    <div class="feedback-explanation">${explanation}</div>
  `;
  container.classList.remove('hidden');
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
  if (currentQuestionIndex < currentModule.questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    finishModule();
  }
}

function finishModule() {
  const score = currentAnswers.filter(a => a.isCorrect).length;
  const total = currentModule.questions.length;

  // Save to user data
  const userData = getUserData(currentUser.email);
  userData.modules[currentModule.id] = {
    score: score,
    total: total,
    answers: currentAnswers,
    completed: true,
    completedAt: new Date().toISOString()
  };
  saveUserData(currentUser.email, userData);
  currentUser = userData;

  showModuleResult(score, total);
}

function showModuleResult(score, total) {
  showView('module-result-view');

  const pct = Math.round((score / total) * 100);
  let cls, icon, msg;

  if (pct >= 80) {
    cls = 'excellent'; icon = '&#127942;';
    msg = 'Excellent work! You have a strong understanding of this module.';
  } else if (pct >= 60) {
    cls = 'good'; icon = '&#128077;';
    msg = 'Good effort! Consider reviewing the areas you missed.';
  } else if (pct >= 40) {
    cls = 'needs-work'; icon = '&#128221;';
    msg = 'Some areas need review. Revisit the courseware for topics you missed.';
  } else {
    cls = 'poor'; icon = '&#128218;';
    msg = 'This module needs more study. Please review the courseware material.';
  }

  $('#result-icon').innerHTML = icon;
  $('#result-module-name').textContent = currentModule.title;
  $('#result-score').className = `result-score ${cls}`;
  $('#result-score').textContent = `${score}/${total}`;
  $('#result-message').textContent = msg;

  // Breakdown
  const breakdown = $('#result-breakdown');
  breakdown.innerHTML = currentAnswers.map((a, i) => {
    const q = currentModule.questions[i];
    const icon = a.isCorrect ? '&#10003;' : '&#10007;';
    const cls = a.isCorrect ? 'correct' : 'incorrect';
    return `
      <div class="breakdown-item">
        <span class="breakdown-icon">${a.isCorrect ? '&#9989;' : '&#10060;'}</span>
        <span class="breakdown-q">Q${i + 1}: ${q.question.substring(0, 80)}${q.question.length > 80 ? '...' : ''}</span>
        <span class="breakdown-result ${cls}">${a.isCorrect ? 'Correct' : 'Incorrect'}</span>
      </div>
    `;
  }).join('');
}

// ========================================
// Certificate Generation
// ========================================
function generateCertificate() {
  const canvas = $('#cert-canvas');
  const ctx = canvas.getContext('2d');
  const W = 1200, H = 850;

  // Background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, W, H);

  // Border
  ctx.strokeStyle = '#2E2E38';
  ctx.lineWidth = 3;
  ctx.strokeRect(20, 20, W - 40, H - 40);

  // Inner border
  ctx.strokeStyle = '#FFE600';
  ctx.lineWidth = 2;
  ctx.strokeRect(30, 30, W - 60, H - 60);

  // Corner accents
  const accentSize = 60;
  ctx.fillStyle = '#FFE600';
  [[35, 35], [W - 35 - accentSize, 35], [35, H - 35 - accentSize], [W - 35 - accentSize, H - 35 - accentSize]].forEach(([x, y]) => {
    ctx.fillRect(x, y, accentSize, 3);
    ctx.fillRect(x, y, 3, accentSize);
  });
  // Bottom-right corners need different treatment
  ctx.fillRect(W - 35, 35, -accentSize, 3);
  ctx.fillRect(W - 38, 35, 3, accentSize);
  ctx.fillRect(W - 35, H - 35, -accentSize, -3);
  ctx.fillRect(W - 38, H - 35, 3, -accentSize);
  ctx.fillRect(35, H - 35, accentSize, -3);
  ctx.fillRect(35, H - 38, 3, -accentSize);

  // Header brand
  ctx.fillStyle = '#2E2E38';
  ctx.font = '600 14px Inter, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('AGENTIC AI IN POWER PLATFORM', W / 2, 80);

  // Title
  ctx.fillStyle = '#2E2E38';
  ctx.font = '300 36px Inter, sans-serif';
  ctx.fillText('CERTIFICATE OF COMPLETION', W / 2, 140);

  // Divider line
  ctx.strokeStyle = '#FFE600';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W / 2 - 120, 160);
  ctx.lineTo(W / 2 + 120, 160);
  ctx.stroke();

  // "This is to certify that"
  ctx.fillStyle = '#616161';
  ctx.font = '400 16px Inter, sans-serif';
  ctx.fillText('This is to certify that', W / 2, 210);

  // Name
  ctx.fillStyle = '#2E2E38';
  ctx.font = '700 34px Inter, sans-serif';
  ctx.fillText(currentUser.fullName, W / 2, 265);

  // Underline name
  const nameWidth = ctx.measureText(currentUser.fullName).width;
  ctx.strokeStyle = '#FFE600';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(W / 2 - nameWidth / 2 - 20, 278);
  ctx.lineTo(W / 2 + nameWidth / 2 + 20, 278);
  ctx.stroke();

  // "has successfully completed"
  ctx.fillStyle = '#616161';
  ctx.font = '400 16px Inter, sans-serif';
  ctx.fillText('has successfully completed the Knowledge Assessment for', W / 2, 320);

  // Course name
  ctx.fillStyle = '#2E2E38';
  ctx.font = '600 22px Inter, sans-serif';
  ctx.fillText('Agentic AI in Power Platform', W / 2, 360);

  // Modules subtitle
  ctx.fillStyle = '#616161';
  ctx.font = '400 14px Inter, sans-serif';
  ctx.fillText('Modules 01–04: New Power Platform Vibe | Plan Designer | Power Apps Vibe | MCP Dataverse', W / 2, 390);

  // Score
  let totalScore = 0, totalQuestions = 0;
  QUIZ_DATA.forEach(m => {
    const r = currentUser.modules[m.id];
    if (r) { totalScore += r.score; totalQuestions += r.total; }
  });
  const pct = Math.round((totalScore / totalQuestions) * 100);

  // Score box
  ctx.fillStyle = '#F5F6FA';
  ctx.fillRect(W / 2 - 160, 420, 320, 90);
  ctx.strokeStyle = '#E0E0E0';
  ctx.lineWidth = 1;
  ctx.strokeRect(W / 2 - 160, 420, 320, 90);

  ctx.fillStyle = '#2E2E38';
  ctx.font = '700 36px Inter, sans-serif';
  ctx.fillText(`${totalScore}/${totalQuestions}`, W / 2, 465);

  ctx.fillStyle = '#616161';
  ctx.font = '400 14px Inter, sans-serif';
  ctx.fillText(`Score: ${pct}%`, W / 2, 495);

  // Module breakdown
  ctx.font = '400 12px Inter, sans-serif';
  ctx.fillStyle = '#757575';
  const modLine = QUIZ_DATA.map(m => {
    const r = currentUser.modules[m.id];
    return `M${String(m.id).padStart(2, '0')}: ${r ? r.score : 0}/${m.questions.length}`;
  }).join('    |    ');
  ctx.fillText(modLine, W / 2, 540);

  // Date
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  ctx.fillStyle = '#616161';
  ctx.font = '400 14px Inter, sans-serif';
  ctx.fillText(`Date: ${dateStr}`, W / 2, 590);

  // Divider
  ctx.strokeStyle = '#E0E0E0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, 630);
  ctx.lineTo(W - 100, 630);
  ctx.stroke();

  // Signature lines
  ctx.strokeStyle = '#BDBDBD';
  ctx.lineWidth = 1;

  // Left signature
  ctx.beginPath();
  ctx.moveTo(200, 720);
  ctx.lineTo(420, 720);
  ctx.stroke();
  ctx.fillStyle = '#757575';
  ctx.font = '400 12px Inter, sans-serif';
  ctx.fillText('Course Administrator', 310, 745);

  // Right signature
  ctx.beginPath();
  ctx.moveTo(W - 420, 720);
  ctx.lineTo(W - 200, 720);
  ctx.stroke();
  ctx.fillText('Assessment Platform', W - 310, 745);

  // Footer
  ctx.fillStyle = '#BDBDBD';
  ctx.font = '400 10px Inter, sans-serif';
  ctx.fillText(`Certificate ID: AIPP-${Date.now().toString(36).toUpperCase()} | ${currentUser.email}`, W / 2, 800);

  // Download
  const link = document.createElement('a');
  link.download = `Certificate_${currentUser.fullName.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// ========================================
// Admin Panel
// ========================================
async function showAdminView() {
  showView('admin-view');

  // Show loading state while fetching from Firebase
  if (firebaseEnabled) {
    $('#admin-stats').innerHTML = '<div class="stat-card"><div class="stat-label">Loading results from database...</div></div>';
    $('#admin-results-body').innerHTML = '<tr><td colspan="8" class="empty-state"><p>Loading...</p></td></tr>';
    await fetchAllUsersFromFirebase();
  }

  renderAdminOverview();
  renderAdminTabs();
}

function renderAdminTabs() {
  $$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.tab-btn').forEach(b => b.classList.remove('active'));
      $$('.tab-content').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      $(`#tab-${btn.dataset.tab}`).classList.add('active');

      if (btn.dataset.tab === 'individual') {
        renderIndividualSelector();
      }
    });
  });
}

function renderAdminOverview() {
  const users = getUsers();
  const userList = Object.values(users);
  const totalParticipants = userList.length;
  const completedAll = userList.filter(u => QUIZ_DATA.every(m => u.modules[m.id]?.completed)).length;
  const inProgress = totalParticipants - completedAll;

  let avgScore = 0;
  let scoredCount = 0;
  userList.forEach(u => {
    let total = 0, scored = 0;
    QUIZ_DATA.forEach(m => {
      if (u.modules[m.id]?.completed) {
        total += u.modules[m.id].total;
        scored += u.modules[m.id].score;
        scoredCount++;
      }
    });
    if (total > 0) avgScore += (scored / total) * 100;
  });
  avgScore = scoredCount > 0 ? Math.round(avgScore / (scoredCount / QUIZ_DATA.length)) : 0;

  // Stats
  $('#admin-stats').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Total Participants</div>
      <div class="stat-value">${totalParticipants}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Completed All Modules</div>
      <div class="stat-value" style="color: var(--success)">${completedAll}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">In Progress</div>
      <div class="stat-value" style="color: var(--warning)">${inProgress}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Avg. Score (completed)</div>
      <div class="stat-value" style="color: var(--blue)">${avgScore}%</div>
    </div>
  `;

  // Table
  const tbody = $('#admin-results-body');
  if (userList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-state"><p>No participants yet.</p></td></tr>`;
    return;
  }

  tbody.innerHTML = userList.map(u => {
    const modScores = QUIZ_DATA.map(m => {
      const r = u.modules[m.id];
      return r?.completed ? `${r.score}/${r.total}` : '—';
    });
    let totalScore = 0, totalQ = 0;
    QUIZ_DATA.forEach(m => {
      if (u.modules[m.id]?.completed) {
        totalScore += u.modules[m.id].score;
        totalQ += u.modules[m.id].total;
      }
    });
    const allDone = QUIZ_DATA.every(m => u.modules[m.id]?.completed);
    const anyDone = QUIZ_DATA.some(m => u.modules[m.id]?.completed);
    const statusBadge = allDone
      ? '<span class="status-badge status-complete">Completed</span>'
      : anyDone
        ? '<span class="status-badge status-progress">In Progress</span>'
        : '<span class="status-badge status-not-started">Not Started</span>';

    return `<tr>
      <td><strong>${u.fullName}</strong></td>
      <td>${u.email}</td>
      ${modScores.map(s => `<td>${s}</td>`).join('')}
      <td><strong>${totalQ > 0 ? `${totalScore}/${totalQ}` : '—'}</strong></td>
      <td>${statusBadge}</td>
    </tr>`;
  }).join('');
}

function renderIndividualSelector() {
  const users = getUsers();
  const sel = $('#individual-select');
  sel.innerHTML = '<option value="">-- Select Participant --</option>';
  Object.values(users).forEach(u => {
    sel.innerHTML += `<option value="${u.email}">${u.fullName} (${u.email})</option>`;
  });

  sel.onchange = () => {
    const email = sel.value;
    $('#download-individual-csv').disabled = !email;
    if (email) {
      renderIndividualDetail(email);
    } else {
      $('#individual-detail').innerHTML = '';
    }
  };
}

function renderIndividualDetail(email) {
  const user = getUserData(email);
  if (!user) return;

  const container = $('#individual-detail');
  container.innerHTML = QUIZ_DATA.map(mod => {
    const result = user.modules[mod.id];
    if (!result?.completed) {
      return `
        <div class="detail-module-card">
          <div class="detail-module-header">
            <h4>${mod.title}</h4>
            <span class="status-badge status-not-started">Not Attempted</span>
          </div>
        </div>
      `;
    }

    const questionsHtml = mod.questions.map((q, i) => {
      const ans = result.answers[i];
      return `
        <div class="detail-question-item">
          <span class="detail-q-icon">${ans?.isCorrect ? '&#9989;' : '&#10060;'}</span>
          <span class="detail-q-text">${q.question}</span>
          <span class="detail-q-result ${ans?.isCorrect ? 'correct' : 'incorrect'}">${ans?.isCorrect ? 'Correct' : 'Incorrect'}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="detail-module-card">
        <div class="detail-module-header">
          <h4>${mod.title}</h4>
          <span class="module-score completed">${result.score}/${result.total}</span>
        </div>
        <div class="detail-question-list">${questionsHtml}</div>
      </div>
    `;
  }).join('');
}

// ========================================
// CSV Export
// ========================================
function downloadAllCSV() {
  const users = getUsers();
  const userList = Object.values(users);
  if (userList.length === 0) return;

  const headers = ['Full Name', 'Email'];
  QUIZ_DATA.forEach(m => {
    headers.push(`Module ${m.id} Score`);
    headers.push(`Module ${m.id} Total`);
    headers.push(`Module ${m.id} Percentage`);
    headers.push(`Module ${m.id} Completed At`);
  });
  headers.push('Total Score', 'Total Questions', 'Overall Percentage', 'Status');

  const rows = userList.map(u => {
    const row = [csvEscape(u.fullName), csvEscape(u.email)];
    let totalS = 0, totalQ = 0;
    QUIZ_DATA.forEach(m => {
      const r = u.modules[m.id];
      if (r?.completed) {
        row.push(r.score, r.total, Math.round((r.score / r.total) * 100) + '%', r.completedAt || '');
        totalS += r.score;
        totalQ += r.total;
      } else {
        row.push('', '', '', '');
      }
    });
    const allDone = QUIZ_DATA.every(m => u.modules[m.id]?.completed);
    row.push(totalQ > 0 ? totalS : '', totalQ > 0 ? totalQ : '', totalQ > 0 ? Math.round((totalS / totalQ) * 100) + '%' : '');
    row.push(allDone ? 'Completed' : 'In Progress');
    return row;
  });

  downloadCSV('Quiz_Results_All_Participants.csv', headers, rows);
}

function downloadIndividualCSV() {
  const email = $('#individual-select').value;
  if (!email) return;
  const user = getUserData(email);
  if (!user) return;

  const headers = ['Module', 'Question', 'Type', 'Result', 'Question Text'];
  const rows = [];

  QUIZ_DATA.forEach(mod => {
    const result = user.modules[mod.id];
    mod.questions.forEach((q, i) => {
      const ans = result?.answers?.[i];
      rows.push([
        csvEscape(mod.title),
        `Q${i + 1}`,
        q.type,
        ans ? (ans.isCorrect ? 'Correct' : 'Incorrect') : 'Not Attempted',
        csvEscape(q.question)
      ]);
    });
  });

  // Summary row
  rows.push([]);
  rows.push(['SUMMARY']);
  let totalS = 0, totalQ = 0;
  QUIZ_DATA.forEach(m => {
    const r = user.modules[m.id];
    if (r?.completed) {
      rows.push([csvEscape(m.title), '', '', `${r.score}/${r.total}`, `${Math.round((r.score / r.total) * 100)}%`]);
      totalS += r.score;
      totalQ += r.total;
    }
  });
  if (totalQ > 0) {
    rows.push(['TOTAL', '', '', `${totalS}/${totalQ}`, `${Math.round((totalS / totalQ) * 100)}%`]);
  }

  downloadCSV(`Quiz_Results_${user.fullName.replace(/\s+/g, '_')}.csv`, headers, rows);
}

function csvEscape(val) {
  if (val == null) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function downloadCSV(filename, headers, rows) {
  const csv = [headers.join(','), ...rows.map(r => r.map(c => csvEscape(c)).join(','))].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

// ========================================
// Utilities
// ========================================
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, i) => val === b[i]);
}

// ========================================
// Event Bindings
// ========================================
function init() {
  initFirebase();
  initLogin();

  // Logout
  $('#logout-btn').addEventListener('click', () => {
    currentUser = null;
    isAdmin = false;
    $('#login-form').reset();
    if (window._resetAdminMode) window._resetAdminMode();
    showView('login-view');
  });

  $('#admin-logout-btn').addEventListener('click', () => {
    currentUser = null;
    isAdmin = false;
    $('#login-form').reset();
    if (window._resetAdminMode) window._resetAdminMode();
    showView('login-view');
  });

  // Quiz back button
  $('#quiz-back-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to leave? Your progress on this module will be lost.')) {
      showDashboard();
    }
  });

  // Submit answer
  $('#submit-answer-btn').addEventListener('click', submitAnswer);

  // Next question
  $('#next-question-btn').addEventListener('click', nextQuestion);

  // Module result continue
  $('#result-continue-btn').addEventListener('click', showDashboard);

  // Certificate download
  $('#download-cert-btn').addEventListener('click', generateCertificate);

  // Admin CSV downloads
  $('#download-all-csv').addEventListener('click', downloadAllCSV);
  $('#download-individual-csv').addEventListener('click', downloadIndividualCSV);
}

document.addEventListener('DOMContentLoaded', init);
