


import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ==========================================
// 1. MINI CALENDAR POPUP (Functional & Styled)
// ==========================================
const MiniDatePicker = ({ onApply, initialDate }) => {
  const [viewDate, setViewDate] = useState(initialDate || new Date(2025, 1, 1)); // Default Feb 2025
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date(2025, 1, 14));

  const changeMonth = (offset) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1));
  };

  // Mini Calendar starts on SUNDAY
  const generateGrid = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDayIndex = new Date(year, month, 1).getDay(); // 0=Sun
    const grid = [];
    for (let i = 0; i < startDayIndex; i++) grid.push(null);
    for (let i = 1; i <= daysInMonth; i++) grid.push(new Date(year, month, i));
    return grid;
  };

  const grid = generateGrid();
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  return (
    <div 
      className="bg-white shadow-lg rounded p-3 position-absolute end-0" 
      style={{ 
        top: '115%', 
        width: '320px', 
        zIndex: 1050, 
        border: '1px solid #e9ecef',
        fontFamily: 'sans-serif'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
          {viewDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </span>
        <div className="d-flex gap-1">
          <button onClick={() => changeMonth(-1)} className="btn btn-sm btn-light text-secondary px-2 border-0" style={{backgroundColor: '#f8f9fa'}}>&lt;</button>
          <button onClick={() => changeMonth(1)} className="btn btn-sm btn-light text-secondary px-2 border-0" style={{backgroundColor: '#f8f9fa'}}>&gt;</button>
        </div>
      </div>

      <div className="d-grid mb-2" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {weekDays.map(d => <div key={d} className="text-center text-secondary fw-bold" style={{ fontSize: '0.75rem', opacity: 0.7 }}>{d}</div>)}
      </div>

      <div className="d-grid mb-3" style={{ gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '8px' }}>
        {grid.map((date, i) => {
          if (!date) return <div key={i}></div>;
          const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
          return (
            <div key={i} className="d-flex justify-content-center" style={{ cursor: 'pointer' }} onClick={() => setSelectedDate(date)}>
              <div 
                className={`d-flex justify-content-center align-items-center rounded ${isSelected ? 'bg-primary text-white' : 'text-dark'}`} 
                style={{ 
                  width: '32px', 
                  height: '32px', 
                  fontSize: '0.85rem',
                  fontWeight: isSelected ? '600' : '400',
                  backgroundColor: isSelected ? '#0d6efd' : 'transparent'
                }}
              >
                {date.getDate()}
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-top pt-3">
        <p className="text-muted mb-2" style={{ fontSize: '0.7rem' }}>*You can choose multiple date</p>
        <button className="btn btn-primary w-100 py-2" onClick={() => onApply(selectedDate)} style={{ fontSize: '0.9rem', fontWeight: 500 }}>
          Apply Now
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 2. MAIN CALENDAR (Exact UI Match)
// ==========================================
const AttendanceCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2019, 9, 1)); // Oct 2019
  const [showPopup, setShowPopup] = useState(false);
  const [btnLabel, setBtnLabel] = useState("Jan'25");
  
  // Close popup on outside click
  const containerRef = useRef(null);
  useEffect(() => {
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setShowPopup(false);
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  // --- GRID LOGIC ---
  const generateMainGrid = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1; // Mon Start
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    
    const grid = [];
    // Prev Month
    for (let i = startOffset - 1; i >= 0; i--) {
      grid.push({ date: new Date(year, month - 1, daysInPrevMonth - i), type: 'prev', dayNum: daysInPrevMonth - i });
    }
    // Current Month
    for (let i = 1; i <= daysInMonth; i++) {
      grid.push({ date: new Date(year, month, i), type: 'current', dayNum: i });
    }
    // Next Month
    const remaining = 42 - grid.length;
    for (let i = 1; i <= remaining; i++) {
      grid.push({ date: new Date(year, month + 1, i), type: 'next', dayNum: i });
    }
    return grid;
  };
  const gridData = generateMainGrid();

  // --- EVENTS DATA (Matched Strings) ---
  const rawEvents = [
    { date: '2019-10-03', title: 'Subtitution', type: 'substitution' },
    { date: '2019-10-16', title: 'On leave', type: 'leave' },
    { date: '2019-10-20', title: '', type: 'exam-start' },
    { date: '2019-10-21', title: 'Exam Invigilator', type: 'exam-middle' },
    { date: '2019-10-22', title: '', type: 'exam-end' },
    { date: '2019-10-25', title: 'Substitution', type: 'substitution' }
  ];

  const getEvent = (d) => {
    const iso = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    return rawEvents.find(e => e.date === iso);
  };

  // --- HANDLERS ---
  const nav = (offset) => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  const onPopupApply = (d) => {
    setBtnLabel(d.toLocaleDateString('en-US', {month:'short', year:'2-digit'}).replace(" ", "'"));
    setShowPopup(false);
  };

  // --- CUSTOM STYLES (To match image exactly) ---
  const colors = {
    headerBg: '#e0e0e0', // The gray header for Mon/Tue
    stripe: '#f2f2f2',   // The diagonal line color
    purple: { bg: '#dcd6fc', text: '#5c4de4' },
    red: { bg: '#f7d4d4', text: '#c01818' },
    orange: { bg: '#ffe8d6', text: '#ff8c42' },
  };

  // Diagonal Stripe CSS
  const stripeStyle = {
    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${colors.stripe} 10px, ${colors.stripe} 11px)`,
    color: '#adb5bd'
  };

  const getEventStyle = (type) => {
    const base = { position: 'absolute', bottom: '10px', fontSize: '0.75rem', fontWeight: '700', padding: '4px 8px', whiteSpace: 'nowrap', overflow: 'hidden', height: '24px', lineHeight: '16px' };
    switch(type) {
      case 'substitution': return { ...base, backgroundColor: colors.purple.bg, color: colors.purple.text, borderLeft: `4px solid ${colors.purple.text}`, left: '5%', width: '90%' };
      case 'leave': return { ...base, backgroundColor: colors.red.bg, color: colors.red.text, borderLeft: `4px solid ${colors.red.text}`, left: '0', width: '100%' };
      // Exam: Negative margins to create overlap look
      case 'exam-start': return { ...base, backgroundColor: colors.orange.bg, color: 'transparent', borderLeft: `4px solid ${colors.orange.text}`, left: '0', width: '102%', zIndex: 10 };
      case 'exam-middle': return { ...base, backgroundColor: colors.orange.bg, color: colors.orange.text, left: '-2%', width: '104%', textAlign: 'center', zIndex: 9 };
      case 'exam-end': return { ...base, backgroundColor: colors.orange.bg, color: 'transparent', left: '-2%', width: '102%', zIndex: 8 };
      default: return {};
    }
  };

  return (
    <div className="container-fluid bg-white min-vh-100 p-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: '1000px' }}>
        
        {/* TOP HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0 text-dark fw-normal" style={{ letterSpacing: '-0.5px' }}>Attendance Heatmap Calendar</h4>
          
          <div className="d-flex align-items-center gap-4">
            <button onClick={() => nav(-1)} className="btn btn-link text-dark text-decoration-none fs-4 fw-bold p-0">&lt;</button>
            <span className="fs-3 fw-bold text-dark" style={{ letterSpacing: '-0.5px' }}>
              {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={() => nav(1)} className="btn btn-link text-dark text-decoration-none fs-4 fw-bold p-0">&gt;</button>
          </div>

          <div className="position-relative" ref={containerRef}>
            <button 
              className="btn bg-white border d-flex align-items-center gap-2 text-secondary px-3 py-2 shadow-sm"
              style={{ borderRadius: '8px', fontSize: '0.9rem' }}
              onClick={() => setShowPopup(!showPopup)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
              </svg>
              {btnLabel}
            </button>
            {showPopup && <MiniDatePicker onApply={onPopupApply} />}
          </div>
        </div>

        {/* CALENDAR CONTAINER */}
        <div className="shadow-sm rounded overflow-hidden border">
          
          {/* Gray Header Row */}
          <div className="d-grid" style={{ gridTemplateColumns: 'repeat(7, 1fr)', backgroundColor: colors.headerBg }}>
            {['MON', 'TUE', 'WED', 'THE', 'FRI', 'SAT', 'SUN'].map(day => (
              <div key={day} className="text-center py-3 fw-bold text-secondary" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                {day}
              </div>
            ))}
          </div>

          {/* Grid Cells */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {gridData.map((cell, idx) => {
              const event = getEvent(cell.date);
              const isCurrent = cell.type === 'current';
              const borderStyle = { borderRight: '1px solid #dee2e6', borderBottom: '1px solid #dee2e6' };
              // Combine base style with stripe style if off-month
              const bgStyle = isCurrent ? { backgroundColor: '#fff' } : stripeStyle;

              return (
                <div key={idx} className="position-relative" style={{ minHeight: '120px', ...borderStyle, ...bgStyle }}>
                  {/* Date Number */}
                  <span style={{ 
                    position: 'absolute', top: '10px', right: '15px', 
                    fontSize: '0.9rem', fontWeight: cell.dayNum === 1 ? '700' : '500',
                    color: isCurrent ? '#333' : '#adb5bd' // Gray text for off-months
                  }}>
                    {cell.dayNum}
                  </span>
                  
                  {/* Event Bar */}
                  {event && (
                    <div style={getEventStyle(event.type)}>
                      {event.title}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AttendanceCalendar;