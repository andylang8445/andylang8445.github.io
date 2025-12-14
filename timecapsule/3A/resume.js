/* =========================================================
   Resume renderer (EN + KO)
   - Stable paper size (A4/Letter)
   - Print-safe (no transform scaling)
   - ATS-friendly copy (short, scannable)
   ========================================================= */

const $ = (id) => document.getElementById(id);

const DATA = {
  en: {
    brandTitle: "Resume",
    helpTitle: "Print tips (Chrome / Safari)",
    helpBody: [
      "1) Prefer US Letter unless instructed otherwise.",
      "2) Print dialog: turn OFF 'Headers and footers'.",
      "3) Margins = None (or Minimum), Scale = 100%."
    ],
    helpHint:
      "If an ATS is picky, consider a 1-column export. This template avoids blank pages and hairline artifacts.",
    headings: {
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      service: "Service",
      volunteering: "Volunteering"
    },
    profile: {
      name: "Andy Yun",
      headline: "Backend / AI Tooling Engineer (Co-op / Intern)",
      summary:
        "Backend-focused ECE student who ships internal AI tooling and production backends. Built a Windows + FastAPI LLM assistant with governance (RBAC/audit/versioned distribution), prompt templates, and leakage-risk monitoring for a ~50-person org."
    },
    contact: {
      siteLabel: "site",
      site: "git.io/JXa1p",
      email1: "andy.yun@uwaterloo.ca",
      email2: "a2yun@uwaterloo.ca",
      phone: "+1 (226) 507-9755"
    },
    experience: [
      {
        org: "Korea Fund Ratings (KFR)",
        role: "AI Researcher / Internal Tooling (Intern)",
        date: "2024.01–2024.04",
        bullets: [
          "Led an internal LLM assistant for a ~50-person org: Windows client (PySide6) + always-on FastAPI service.",
          "Built governance: authentication, RBAC admin tools, versioned client distribution, and audit logs (usage + IP/MAC/app version).",
          "Shipped a prompt template library (~10) with attribution + moderation; added leakage-risk keyword thresholds (A/B/C) with admin alerts.",
          "Connected internal sources (news/Excel/fund docs) via SQL Server (SQLAlchemy/pyodbc); added optional local summarization to reduce token overflow and UI stalls."
        ],
        tech: ["Python","FastAPI","PySide6","SQLAlchemy","SQL Server","LangChain","OpenAI API","PyInstaller"]
      },
      {
        org: "Escape Platforms",
        role: "Software Backend Developer (Co-op)",
        date: "2023.06–2023.08",
        bullets: [
          "Built ~10 REST endpoints and serverless data flows on AWS.",
          "Implemented AppSync + Lambda + DynamoDB pipelines with Node.js/TypeScript; streamlined ops via GraphQL; shipped Jest tests."
        ],
        tech: ["TypeScript","Node.js","GraphQL","AWS AppSync","Lambda","DynamoDB","Jest"]
      },
      {
        org: "Huawei Technologies Canada",
        role: "6G R&D Engineer (Co-op)",
        date: "2022.09–2022.12",
        bullets: [
          "Developed internal APIs (C++14/Boost) callable from Python; integrated with a CARLA server for simulation workflows.",
          "Built a PyQt GUI to monitor/control Unreal Engine simulation; implemented ray-tracing logic in a CARLA context."
        ],
        tech: ["C++14","Boost","Python","PyQt","CARLA","Unreal Engine"]
      },
      {
        org: "Stackpole International",
        role: "Software Developer (Co-op)",
        date: "2022.01–2022.04",
        bullets: [
          "Reduced PLC↔Host communication overhead by ~30% via a caching mechanism.",
          "Built GUI/ML/telemetry tooling with Python (Qt), OpenCV, and PyTorch; supported PLC and GPU servers.",
          "Built a lightweight ANN model for Jetson Nano + PLC to reduce server load and improve response time."
        ],
        tech: ["Python","Qt","OpenCV","PyTorch","PLC","Jetson"]
      }
    ],
    projects: [
      {
        name: "Logic.Gate Tutoring Platform",
        meta: "2021–Present",
        desc: [
          "STEM tutoring platform; prototyping tutoring workflows and evaluation-first improvements with a reliability/UX focus."
        ],
        tech: ["RAG","Agents","Backend"]
      },
      {
        name: "Find My Pill Platform",
        meta: "2022.10–2023.12",
        desc: [
          "Built REST API and data model; improved response time by ~23.7% via 3NF normalization.",
          "Designed a microservice-friendly architecture and a custom recommendation approach for text input."
        ],
        tech: ["Python","Flask","SQL","REST"]
      }
    ],
    right: {
      skills: [
        { k: "Backend", v: "Python (FastAPI), Node.js/TypeScript, SQL, GraphQL, REST" },
        { k: "Cloud / Data", v: "AWS (Lambda/AppSync/DynamoDB), SQLAlchemy/pyodbc, UNIX/Linux" },
        { k: "AI Tooling", v: "LangChain, OpenAI API, governance/audit, optional local summarization" },
        { k: "Systems", v: "C/C++ (Boost), Qt (PySide6/PyQt), packaging & internal distribution" }
      ],
      education: [
        { k: "University of Waterloo", v: "BASc Candidate, Computer Engineering (ECE) · 2021.09–2026.06" },
        { k: "Scholarship", v: "University of Waterloo President’s Scholarship (2021)" }
      ],
      service: [
        { k: "Republic of Korea Army", v: "Tactical C4I Maintenance & Operation · 2024.09–2026.03" }
      ],
      volunteering: [
        { k: "FIRST Robotics Team 7722", v: "Programming & Computing Mentor · 2023.01–2023.08" },
        { k: "", v: "Mentored 9 students in embedded programming, sensor fusion, and motion planning; improved autonomous reliability (reported 93% success)." }
      ]
    }
  },

  ko: {
    brandTitle: "이력서",
    helpTitle: "인쇄/저장 팁 (Chrome / Safari)",
    helpBody: [
      "1) 한국 기업 제출은 보통 A4를 권장합니다.",
      "2) 인쇄 옵션에서 ‘머리글/바닥글(머리말/꼬리말)’은 반드시 OFF.",
      "3) 여백 = 없음(또는 최소), 배율 = 100% 권장.",
      "4) 제출처가 Letter를 요구하면 Paper를 Letter로 바꿔 출력하세요."
    ],
    helpHint:
      "KO 템플릿은 한글 전용 1열 구성(2025–26 스타일)이며, 인쇄/PDF에는 이 패널이 포함되지 않습니다.",
    headings: {
      skillsTop: "핵심역량",
      experience: "경력",
      projects: "프로젝트",
      education: "학력",
      service: "병역",
      volunteering: "봉사/대외활동"
    },
    profile: {
      name: "윤홍준 (Andy Yun)",
      headline: "백엔드 · 사내 AI 업무도구/플랫폼 엔지니어",
      summary:
        "비개발자도 바로 사용할 수 있는 사내 AI 업무도구를 ‘운영 가능한 형태’로 설계·구현·배포해왔습니다. 로그인/RBAC, 감사 로그, 버전 관리·배포, 민감정보 유출 위험 키워드 감지(알림) 등 거버넌스 기능을 구축한 경험이 있습니다."
    },
    contact: {
      siteLabel: "웹",
      site: "git.io/JXa1p",
      email1: "andy.yun@uwaterloo.ca",
      email2: "a2yun@uwaterloo.ca",
      phone: "+1 (226) 507-9755"
    },
    topSkills: [
      { k: "백엔드", v: "Python(FastAPI), Node.js/TypeScript, SQL, REST, GraphQL" },
      { k: "데이터/연동", v: "SQL Server, SQLAlchemy/pyodbc, 문서·엑셀·뉴스 연동" },
      { k: "사내 AI 도구", v: "LangChain, OpenAI API, 로컬 요약 옵션, 프롬프트 템플릿" },
      { k: "거버넌스/운영", v: "RBAC, 감사 로그, 버전 관리·배포, 위험 키워드 알림" }
    ],
    experience: [
      {
        org: "한국펀드평가 (KFR)",
        role: "AI 도입 연구원 / 사내 툴 개발 (인턴)",
        date: "2024.01–2024.04",
        bullets: [
          "약 50명 규모 조직 대상 사내 LLM 업무보조 도구(베타) 개발 주도: Windows(PySide6) + FastAPI 서버(상시 구동).",
          "로그인/권한(RBAC), 버전 관리·배포, 감사 로그(사용자·IP/MAC·앱 버전)로 운영·컴플라이언스 기반 구축.",
          "프롬프트 템플릿(약 10개) 제공: 작성자 표시 + 관리자 검수/삭제. 민감정보 유출 위험 키워드 임계치 초과 시 관리자 알림.",
          "뉴스/엑셀/펀드 설명서 등 내부 자료를 SQL Server(SQLAlchemy/pyodbc)로 연동. 로컬 요약 옵션으로 토큰 초과·UI 멈춤 이슈 완화."
        ],
        tech: ["Python","FastAPI","PySide6","SQLAlchemy","SQL Server","LangChain","OpenAI API","PyInstaller"]
      },
      {
        org: "Escape Platforms",
        role: "백엔드 개발 (Co-op)",
        date: "2023.06–2023.08",
        bullets: [
          "댓글/채팅/내부 기능 등 REST API(약 10개) 및 AWS 서버리스 데이터 플로우 구현.",
          "Node.js/TypeScript로 AppSync + Lambda + DynamoDB 파이프라인 구축. GraphQL 기반 운영 단순화 및 Jest 테스트로 신뢰성 강화."
        ],
        tech: ["TypeScript","Node.js","GraphQL","AWS AppSync","Lambda","DynamoDB","Jest"]
      },
      {
        org: "Huawei Technologies Canada",
        role: "6G R&D 엔지니어 (Co-op)",
        date: "2022.09–2022.12",
        bullets: [
          "Python에서 호출 가능한 내부 API(C++14/Boost) 개발 및 CARLA 서버 연동으로 시뮬레이션 워크플로우 구성.",
          "Unreal Engine 시뮬레이션 모니터링/제어용 PyQt GUI 제작, CARLA 환경 레이 트레이싱 로직 구현."
        ],
        tech: ["C++14","Boost","Python","PyQt","CARLA","Unreal Engine"]
      },
      {
        org: "Stackpole International",
        role: "소프트웨어 개발 (Co-op)",
        date: "2022.01–2022.04",
        bullets: [
          "캐싱 메커니즘 도입으로 PLC↔Host 통신 오버헤드 약 30% 절감.",
          "Python(Qt), OpenCV, PyTorch 기반 GUI/ML/텔레메트리 툴 개발 및 PLC·GPU 서버 운영 지원.",
          "Jetson Nano + PLC 환경 경량 ANN 모델 구축으로 서버 부하 및 응답시간 개선."
        ],
        tech: ["Python","Qt","OpenCV","PyTorch","PLC","Jetson"]
      }
    ],
    projects: [
      {
        name: "Logic.Gate 튜터링 플랫폼",
        meta: "2021–현재",
        desc: [
          "STEM 교육 플랫폼: 튜터링 워크플로우를 프로토타이핑하고 평가 중심으로 개선(신뢰성/UX)."
        ],
        tech: ["RAG","에이전트","백엔드"]
      },
      {
        name: "Find My Pill 플랫폼",
        meta: "2022.10–2023.12",
        desc: [
          "REST API + 데이터 모델 구축, 3NF 정규화로 응답시간 약 23.7% 개선.",
          "마이크로서비스 친화 아키텍처 및 텍스트 입력 기반 추천 로직 설계."
        ],
        tech: ["Python","Flask","SQL","REST"]
      }
    ],
    education: [
      { k: "워털루 대학교", v: "공학사 과정(Computer Engineering, ECE) · 2021.09–2026.06" },
      { k: "장학", v: "University of Waterloo President’s Scholarship (2021)" }
    ],
    service: [
      { k: "대한민국 육군", v: "전술 C4I 정비/운용 · 2024.09–2026.03" }
    ],
    volunteering: [
      { k: "FIRST 로보틱스 팀 7722", v: "프로그래밍/컴퓨팅 멘토 · 2023.01–2023.08" },
      { k: "", v: "고등학생 9명을 대상으로 임베디드/센서퓨전/모션 플래닝을 멘토링했으며, 자율주행 신뢰성을 향상(보고 성공률 93%)." }
    ]
  }
};

const state = { lang: "en", paper: "LETTER" };
const lastPaperByLang = { en: "LETTER", ko: "A4" };

function setPaperVars(paper){
  const root = document.documentElement.style;
  if(paper === "A4"){
    root.setProperty("--pageW", "var(--w-a4)");
    root.setProperty("--pageH", "var(--h-a4)");
  } else {
    root.setProperty("--pageW", "var(--w-letter)");
    root.setProperty("--pageH", "var(--h-letter)");
  }
}

function applyPageRule(){
  const page = (state.paper === "A4") ? "A4" : "letter";
  $("pageStyle").textContent = `@page { size: ${page}; margin: 0; }`;
}

function escapeHtml(s){
  return (s ?? "").replace(/[&<>"']/g, (c)=>({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

function buildContact(c, lang){
  const siteUrl = `https://${c.site}`;
  const phoneLabel = (lang === "ko") ? "전화" : "phone";
  const emailLabel = (lang === "ko") ? "이메일" : "email";
  return `
    <div>${escapeHtml(c.siteLabel)}: <a href="${escapeHtml(siteUrl)}" target="_blank" rel="noopener">${escapeHtml(c.site)}</a></div>
    <div>${emailLabel}: <a href="mailto:${escapeHtml(c.email1)}">${escapeHtml(c.email1)}</a></div>
    <div><a href="mailto:${escapeHtml(c.email2)}">${escapeHtml(c.email2)}</a></div>
    <div>${phoneLabel}: ${escapeHtml(c.phone)}</div>
  `;
}

function buildEN(d){
  const h = d.headings;
  const p = d.profile;
  const c = d.contact;

  const exp = d.experience.map(job => `
    <div class="item">
      <div class="row">
        <div>
          <div class="org">${escapeHtml(job.org)}</div>
          <div class="role">${escapeHtml(job.role)}</div>
        </div>
        <div class="meta">${escapeHtml(job.date)}</div>
      </div>
      <ul>${job.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      <div class="chips">${job.tech.map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
    </div>
  `).join("");

  const projects = d.projects.map(pr => `
    <div class="item">
      <div class="row">
        <div>
          <div class="org">${escapeHtml(pr.name)}</div>
          <div class="role">${escapeHtml(pr.desc?.[0] ?? "")}</div>
        </div>
        <div class="meta">${escapeHtml(pr.meta)}</div>
      </div>
      ${pr.desc && pr.desc.length > 1 ? `<ul>${pr.desc.slice(1).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ``}
      <div class="chips">${pr.tech.map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
    </div>
  `).join("");

  const skills = d.right.skills.map(x => `
    <div>
      <div class="k">${escapeHtml(x.k)}</div>
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  const edu = d.right.education.map((x,i) => `
    <div class="${i===0?"":"line"}">
      <div class="k">${escapeHtml(x.k)}</div>
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  const svc = d.right.service.map((x,i) => `
    <div class="${i===0?"":"line"}">
      <div class="k">${escapeHtml(x.k)}</div>
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  const vol = d.right.volunteering.map((x,i) => `
    <div class="${i===0?"":"line"}">
      ${x.k ? `<div class="k">${escapeHtml(x.k)}</div>` : ``}
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  return `
    <div class="header">
      <div>
        <div class="name">${escapeHtml(p.name)}</div>
        <div class="headline">${escapeHtml(p.headline)}</div>
        <div class="summary">${escapeHtml(p.summary)}</div>
      </div>
      <div class="contact">${buildContact(c,"en")}</div>
    </div>

    <div class="grid en">
      <div>
        <div class="sec">
          <h2>${escapeHtml(h.experience)}</h2>
          ${exp}
        </div>
        <div class="sec">
          <h2>${escapeHtml(h.projects)}</h2>
          ${projects}
        </div>
      </div>

      <div>
        <div class="sec">
          <h2>${escapeHtml(h.skills)}</h2>
          <div class="kv">${skills}</div>
        </div>
        <div class="sec">
          <h2>${escapeHtml(h.education)}</h2>
          <div class="kv">${edu}</div>
        </div>
        <div class="sec">
          <h2>${escapeHtml(h.service)}</h2>
          <div class="kv">${svc}</div>
        </div>
        <div class="sec">
          <h2>${escapeHtml(h.volunteering)}</h2>
          <div class="kv">${vol}</div>
        </div>
      </div>
    </div>
  `;
}

function buildKO(d){
  const h = d.headings;
  const p = d.profile;
  const c = d.contact;

  const topSkills = d.topSkills.map(x => `
    <div>
      <div class="k">${escapeHtml(x.k)}</div>
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  const exp = d.experience.map(job => `
    <div class="item">
      <div class="row">
        <div>
          <div class="org">${escapeHtml(job.org)}</div>
          <div class="role">${escapeHtml(job.role)}</div>
        </div>
        <div class="meta">${escapeHtml(job.date)}</div>
      </div>
      <ul>${job.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
      <div class="chips">${job.tech.map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
    </div>
  `).join("");

  const projects = d.projects.map(pr => `
    <div class="item">
      <div class="row">
        <div>
          <div class="org">${escapeHtml(pr.name)}</div>
          <div class="role">${escapeHtml(pr.desc?.[0] ?? "")}</div>
        </div>
        <div class="meta">${escapeHtml(pr.meta)}</div>
      </div>
      ${pr.desc && pr.desc.length > 1 ? `<ul>${pr.desc.slice(1).map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>` : ``}
      <div class="chips">${pr.tech.map(t => `<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
    </div>
  `).join("");

  const edu = d.education.map((x,i) => `
    <div class="${i===0?"":"line"}">
      <div class="k">${escapeHtml(x.k)}</div>
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  const svc = d.service.map((x,i) => `
    <div class="${i===0?"":"line"}">
      <div class="k">${escapeHtml(x.k)}</div>
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  const vol = d.volunteering.map((x,i) => `
    <div class="${i===0?"":"line"}">
      ${x.k ? `<div class="k">${escapeHtml(x.k)}</div>` : ``}
      <div class="v">${escapeHtml(x.v)}</div>
    </div>
  `).join("");

  return `
    <div class="header">
      <div>
        <div class="name">${escapeHtml(p.name)}</div>
        <div class="headline">${escapeHtml(p.headline)}</div>
        <div class="summary">${escapeHtml(p.summary)}</div>
      </div>
      <div class="contact">${buildContact(c,"ko")}</div>
    </div>

    <div class="ko-top-skills" aria-label="${escapeHtml(h.skillsTop)}">
      ${topSkills}
    </div>

    <div class="grid ko">
      <div class="sec">
        <h2>${escapeHtml(h.experience)}</h2>
        ${exp}
      </div>

      <div class="sec">
        <h2>${escapeHtml(h.projects)}</h2>
        ${projects}
      </div>

      <div class="sec">
        <h2>${escapeHtml(h.education)}</h2>
        <div class="kv">${edu}</div>
      </div>

      <div class="sec">
        <h2>${escapeHtml(h.service)}</h2>
        <div class="kv">${svc}</div>
      </div>

      <div class="sec">
        <h2>${escapeHtml(h.volunteering)}</h2>
        <div class="kv">${vol}</div>
      </div>
    </div>
  `;
}

function setBrandSub(){
  const paper = state.paper === "A4" ? "A4" : "US Letter";
  const template = (state.lang === "ko") ? "KO template (1-col)" : "EN template (2-col)";
  $("brandSub").textContent = `${template} · Paper: ${paper} · Print-stable`;
}

function render(){
  const d = DATA[state.lang];

  document.body.dataset.lang = state.lang;
  document.body.dataset.paper = state.paper;
  document.documentElement.lang = (state.lang === "ko") ? "ko" : "en";

  setPaperVars(state.paper);
  applyPageRule();
  setBrandSub();

  $("brandTitle").textContent = d.brandTitle;
  $("helpTitle").textContent = d.helpTitle;
  $("helpBody").innerHTML = d.helpBody.map(x => escapeHtml(x)).join("<br/>");
  $("helpHint").textContent = d.helpHint;

  $("paperSel").value = state.paper;
  $("resumeRoot").innerHTML = (state.lang === "ko") ? buildKO(d) : buildEN(d);
}

$("langSel").addEventListener("change", (e)=>{
  lastPaperByLang[state.lang] = state.paper;
  state.lang = e.target.value;
  state.paper = lastPaperByLang[state.lang] || ((state.lang === "ko") ? "A4" : "LETTER");
  $("paperSel").value = state.paper;
  render();
});

$("paperSel").addEventListener("change", (e)=>{
  state.paper = e.target.value;
  lastPaperByLang[state.lang] = state.paper;
  render();
});

window.addEventListener("beforeprint", ()=> applyPageRule());
const mql = window.matchMedia("print");
mql.addEventListener?.("change", (e)=>{ if(e.matches) applyPageRule(); });

async function safePrint(){
  applyPageRule();
  try{ if(document.fonts && document.fonts.ready) await document.fonts.ready; }catch(e){}
  await new Promise(r => requestAnimationFrame(()=> requestAnimationFrame(r)));
  setTimeout(()=> window.print(), 60);
}

$("printBtn").addEventListener("click", ()=> safePrint());

function init(){
  state.lang = "en";
  state.paper = "LETTER";
  lastPaperByLang.en = "LETTER";
  lastPaperByLang.ko = "A4";

  $("langSel").value = state.lang;
  $("paperSel").value = state.paper;
  render();
}
init();

/* keep these functions after init so they’re in scope */
function setPaperVars(paper){
  const root = document.documentElement.style;
  if(paper === "A4"){
    root.setProperty("--pageW", "var(--w-a4)");
    root.setProperty("--pageH", "var(--h-a4)");
  } else {
    root.setProperty("--pageW", "var(--w-letter)");
    root.setProperty("--pageH", "var(--h-letter)");
  }
}