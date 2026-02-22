import React, { useState } from 'react';

export default function App() {
  // --- APPLICATION STATE ---
  const [currentTab, setCurrentTab] = useState('DASHBOARD');
  const [tasks, setTasks] = useState([
    { id: 1, text: "Initialize internship repository", status: "COMPLETED" },
    { id: 2, text: "Build responsive React dashboard", status: "IN_PROGRESS" },
    { id: 3, text: "Document daily learning outcomes", status: "PENDING" }
  ]);
  const [taskInput, setTaskInput] = useState("");

  // --- LOGIC HANDLERS ---
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    const newTask = { id: Date.now(), text: taskInput, status: "PENDING" };
    setTasks([newTask, ...tasks]);
    setTaskInput("");
  };

  const updateStatus = (id) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === "PENDING" ? "IN_PROGRESS" : 
                           t.status === "IN_PROGRESS" ? "COMPLETED" : "PENDING";
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  return (
    <div style={styles.appContainer}>
      {/* 1. LEFT SIDEBAR (NAVIGATION) */}
      <aside style={styles.sidebar}>
        <div style={styles.brand}>
          <div style={styles.brandDot} />
          <span style={styles.brandTitle}>CORE_OS v2.0</span>
        </div>

        <nav style={styles.navMenu}>
          {['DASHBOARD', 'TASKS', 'SYSTEM'].map(tab => (
            <button 
              key={tab}
              onClick={() => setCurrentTab(tab)}
              style={currentTab === tab ? styles.activeTab : styles.inactiveTab}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div style={styles.footerInfo}>
          SESSION: 2026_ACTIVE
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA (FULL DESKTOP VIEW) */}
      <main style={styles.mainContent}>
        
        {/* TOP STATUS BAR */}
        <header style={styles.header}>
          <div style={styles.pathIndicator}>root / {currentTab.toLowerCase()}</div>
          <div style={styles.systemMetrics}>
            <span>Uptime: 48:12:05</span>
            <div style={styles.userBadge}>ADMIN_DEV</div>
          </div>
        </header>

        {/* CONTENT BODY */}
        <section style={styles.viewport}>
          {currentTab === 'DASHBOARD' && (
            <div style={styles.grid}>
              <div style={styles.gridCard}>
                <h4>System Statistics</h4>
                <div style={styles.statLine}>Completion Rate: {Math.round((tasks.filter(t => t.status === "COMPLETED").length / tasks.length) * 100)}%</div>
                <div style={styles.statLine}>Total Operations: {tasks.length}</div>
              </div>
              <div style={styles.gridCard}>
                <h4>Recent Logs</h4>
                <p style={{color: '#666', fontSize: '13px'}}>State synchronized successfully...</p>
                <p style={{color: '#666', fontSize: '13px'}}>Virtual DOM reconciliation active...</p>
              </div>
            </div>
          )}

          {currentTab === 'TASKS' && (
            <div style={styles.taskContainer}>
              <form onSubmit={handleAddTask} style={styles.formGroup}>
                <input 
                  style={styles.terminalInput}
                  placeholder="Execute new task command..."
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                />
                <button type="submit" style={styles.executeBtn}>EXECUTE</button>
              </form>

              <div style={styles.tableHeader}>
                <span style={{flex: 2}}>IDENTIFIER</span>
                <span style={{flex: 1, textAlign: 'right'}}>STATUS_CODE</span>
              </div>

              <div style={styles.listArea}>
                {tasks.map(task => (
                  <div key={task.id} style={styles.listRow}>
                    <span style={{flex: 2}}>{task.text}</span>
                    <button 
                      onClick={() => updateStatus(task.id)}
                      style={{
                        ...styles.statusTag,
                        color: task.status === 'COMPLETED' ? '#00ff9d' : 
                               task.status === 'IN_PROGRESS' ? '#00a2ff' : '#ff4d4d'
                      }}
                    >
                      {task.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// --- FULL DESKTOP CSS-IN-JS ---
const styles = {
  appContainer: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#0a0a0a',
    color: '#d1d1d1',
    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
    overflow: 'hidden'
  },
  sidebar: {
    width: '280px',
    backgroundColor: '#111',
    borderRight: '1px solid #222',
    display: 'flex',
    flexDirection: 'column',
    padding: '30px'
  },
  brand: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '50px' },
  brandDot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#00ff9d' },
  brandTitle: { fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' },
  navMenu: { flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' },
  activeTab: {
    textAlign: 'left', padding: '15px', background: '#1a1a1a', border: 'none',
    color: '#00ff9d', borderLeft: '3px solid #00ff9d', cursor: 'pointer'
  },
  inactiveTab: {
    textAlign: 'left', padding: '15px', background: 'transparent', border: 'none',
    color: '#555', cursor: 'pointer', transition: '0.2s'
  },
  footerInfo: { fontSize: '0.7rem', color: '#333' },
  mainContent: { flex: 1, display: 'flex', flexDirection: 'column' },
  header: {
    height: '70px', background: '#111', borderBottom: '1px solid #222',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px'
  },
  pathIndicator: { color: '#00ff9d', fontSize: '0.8rem' },
  systemMetrics: { display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.8rem' },
  userBadge: { background: '#222', padding: '5px 12px', borderRadius: '4px', color: '#fff' },
  viewport: { flex: 1, padding: '40px', overflowY: 'auto' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  gridCard: { background: '#141414', padding: '25px', border: '1px solid #222', borderRadius: '4px' },
  statLine: { margin: '10px 0', fontSize: '1.1rem' },
  taskContainer: { maxWidth: '1000px' },
  formGroup: { display: 'flex', gap: '15px', marginBottom: '40px' },
  terminalInput: {
    flex: 1, background: '#000', border: '1px solid #333',
    padding: '15px', color: '#00ff9d', outline: 'none', fontSize: '1rem'
  },
  executeBtn: { background: '#00ff9d', color: '#000', border: 'none', padding: '0 30px', fontWeight: 'bold', cursor: 'pointer' },
  tableHeader: { display: 'flex', padding: '10px 20px', color: '#444', fontSize: '0.7rem', borderBottom: '1px solid #222' },
  listArea: { display: 'flex', flexDirection: 'column' },
  listRow: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px', borderBottom: '1px solid #181818', transition: '0.2s'
  },
  statusTag: { 
    background: 'transparent', border: '1px solid currentColor', 
    padding: '4px 10px', fontSize: '0.7rem', cursor: 'pointer', minWidth: '100px' 
  }
};