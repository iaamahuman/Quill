'use client';
import { useState } from 'react'; // 1. Import useState
import styles from './Home.module.css';

export default function CollaborativeHomePage() {
  // 2. Add state to manage sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* 3. Add a hamburger menu button, only visible on mobile */}
      <button className={styles.menuToggle} onClick={toggleSidebar} aria-label="Open menu">
        &#9776; {/* This is the hamburger icon character */}
      </button>

      {/* 4. Conditionally apply a class to the sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}>
        {/* Your existing sidebar content goes here... */}
        <div className={styles.sidebarHeader}>
            <div className={styles.sidebarTitle}>Browse Notes</div>
            {/* Add a close button inside the sidebar */}
            <button className={styles.closeBtn} onClick={toggleSidebar} aria-label="Close menu">&times;</button>
        </div>
        <ul className={styles.subjectList}>
          <li className={`${styles.subjectItem} ${styles.active}`}>All Subjects</li>
          {/* ... other list items */}
        </ul>
        <div className={styles.tagList}>
          <span className={styles.tag}>ExamPrep</span>
          {/* ... other tags */}
        </div>
        <button className={styles.contributeBtn}>Contribute Notes</button>
      </div>

      {/* Add an overlay to dim the main content when the sidebar is open */}
      {isSidebarOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}

      <div className={styles.homeWrapper}>
        {/* The sidebar is now outside the main wrapper for positioning */}
        <div className={styles.sidebarDesktop}>
           {/* This is a duplicate for the desktop view */}
           <div className={styles.sidebarTitle}>Browse Notes</div>
            <ul className={styles.subjectList}>
                <li className={`${styles.subjectItem} ${styles.active}`}>All Subjects</li>
                <li className={styles.subjectItem}>Mathematics</li>
                <li className={styles.subjectItem}>Biology</li>
            </ul>
             <div className={styles.tagList}>
                <span className={styles.tag}>ExamPrep</span>
                <span className={styles.tag}>GroupStudy</span>
            </div>
            <button className={styles.contributeBtn}>Contribute Notes</button>
        </div>
        <main className={styles.mainContent}>
            {/* Your main content... */}
        </main>
      </div>
    </>
  );
}