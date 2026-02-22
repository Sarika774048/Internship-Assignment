import React, { useState } from 'react';

export default function WhiteModeArchitect() {
  // --- STATE ---
  const [goals, setGoals] = useState([
    { id: 1, title: "Study React Hooks", streak: 5, completed: false },
    { id: 2, title: "Morning Exercise", streak: 12, completed: true },
    { id: 3, title: "Push Assignment to Git", streak: 2, completed: false }
  ]);
  const [newGoal, setNewGoal] = useState("");

  // --- LOGIC ---
  const handleAdd = (e) => {
    e.preventDefault();
    if (!newGoal.trim()) return;
    setGoals([{ id: Date.now(), title: newGoal, streak: 0, completed: false }, ...goals]);
    setNewGoal("");
  };

  const toggleComplete = (id) => {
    setGoals(goals.map(g => g.id === id ? { ...g, completed: !g.completed } : g));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  return (
    <div style={styles.appWrapper}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainTitle}>Routine_Architect</h1>
          <p style={styles.subtitle}>Refine your daily performance.</p>
        </header>

        {/* INPUT SECTION */}
        <form onSubmit={handleAdd} style={styles.inputArea}>
          <input 
            style={styles.whiteInput}
            placeholder="Define a new goal..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <button type="submit" style={styles.addBtn}>ADD GOAL</button>
        </form>

        {/* LIST SECTION */}
        <div style={styles.list}>
          {goals.map(goal => (
            <div key={goal.id} style={goal.completed ? styles.cardDone : styles.card}>
              <div onClick={() => toggleComplete(goal.id)} style={styles.clickArea}>
                <div style={goal.completed ? styles.checkActive : styles.check}>
                   {goal.completed && "✓"}
                </div>
                <div>
                  <h3 style={goal.completed ? styles.goalTitleDone : styles.goalTitle}>
                    {goal.title}
                  </h3>
                  <span style={styles.streakLabel}>STREAK: {goal.streak} DAYS</span>
                </div>
              </div>
              <button onClick={() => deleteGoal(goal.id)} style={styles.delBtn}>Remove</button>
            </div>
          ))}
        </div>

        {/* FOOTER STATS */}
        <footer style={styles.footer}>
          ACTIVE_TASKS: {goals.filter(g => !g.completed).length} | 
          SUCCESS_RATE: {Math.round((goals.filter(g => g.completed).length / goals.length) * 100) || 0}%
        </footer>
      </div>
    </div>
  );
}

const styles = {
  appWrapper: {
    height: '100vh', width: '100vw', backgroundColor: '#f8f9fa',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    fontFamily: "'Inter', system-ui, sans-serif", color: '#2d3436'
  },
  container: {
    width: '100%', maxWidth: '650px', height: '85%',
    background: '#ffffff', borderRadius: '32px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
    padding: '50px', display: 'flex', flexDirection: 'column', border: '1px solid #edf2f7'
  },
  header: { marginBottom: '40px' },
  mainTitle: { fontSize: '2.2rem', margin: 0, color: '#1a202c', fontWeight: '800' },
  subtitle: { color: '#718096', fontSize: '1rem', marginTop: '5px' },
  inputArea: { display: 'flex', gap: '12px', marginBottom: '40px' },
  whiteInput: {
    flex: 1, background: '#f1f5f9', border: '1px solid #e2e8f0',
    borderRadius: '16px', padding: '16px 20px', color: '#1a202c', fontSize: '1rem', outline: 'none'
  },
  addBtn: {
    background: '#3182ce', color: '#fff', border: 'none', borderRadius: '16px',
    padding: '0 24px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s'
  },
  list: { flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' },
  card: {
    background: '#fff', padding: '20px', borderRadius: '20px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
    border: '1px solid #edf2f7', boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
  },
  cardDone: {
    background: '#f8fafc', padding: '20px', borderRadius: '20px',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
    border: '1px solid #e2e8f0', opacity: 0.7
  },
  clickArea: { display: 'flex', alignItems: 'center', gap: '18px', cursor: 'pointer', flex: 1 },
  check: { width: '26px', height: '26px', borderRadius: '8px', border: '2px solid #cbd5e0' },
  checkActive: { 
    width: '26px', height: '26px', borderRadius: '8px', background: '#38a169', 
    color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' 
  },
  goalTitle: { margin: 0, fontSize: '1.1rem', color: '#2d3748' },
  goalTitleDone: { margin: 0, fontSize: '1.1rem', color: '#a0aec0', textDecoration: 'line-through' },
  streakLabel: { fontSize: '0.75rem', color: '#3182ce', fontWeight: '600' },
  delBtn: { background: 'none', border: 'none', color: '#e53e3e', fontSize: '0.85rem', cursor: 'pointer', fontWeight: '500' },
  footer: { marginTop: '30px', textAlign: 'center', color: '#a0aec0', fontSize: '0.8rem', fontWeight: '500' }
};