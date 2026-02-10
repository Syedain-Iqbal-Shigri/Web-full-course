import React, { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * Modern React Component - Task Manager
 * Demonstrates: Hooks, State Management, Event Handling, Conditional Rendering
 */

// Custom Hook for localStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// Task Component
function Task({ task, onToggle, onDelete }) {
  return (
    <div 
      className={`task ${task.completed ? 'completed' : ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        background: 'white',
        borderRadius: '8px',
        marginBottom: '0.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{ marginRight: '1rem', cursor: 'pointer' }}
      />
      <span 
        style={{
          flex: 1,
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#999' : '#333'
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: '#ff4444',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}
      >
        Delete
      </button>
    </div>
  );
}

// Filter Buttons Component
function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = ['all', 'active', 'completed'];
  
  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          style={{
            padding: '0.5rem 1rem',
            background: currentFilter === filter ? '#4CAF50' : '#f0f0f0',
            color: currentFilter === filter ? 'white' : '#333',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            textTransform: 'capitalize',
            transition: 'all 0.3s ease'
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

// Main TaskManager Component
function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  // Add task
  const addTask = useCallback((e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  }, [inputValue, tasks, setTasks]);

  // Toggle task completion
  const toggleTask = useCallback((id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }, [tasks, setTasks]);

  // Delete task
  const deleteTask = useCallback((id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }, [tasks, setTasks]);

  // Filtered tasks using useMemo for performance
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Task statistics
  const stats = useMemo(() => ({
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length
  }), [tasks]);

  return (
    <div style={{
      maxWidth: '600px',
      margin: '2rem auto',
      padding: '2rem',
      background: '#f9f9f9',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#333',
        textAlign: 'center'
      }}>
        Task Manager
      </h1>

      {/* Task Statistics */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '2rem',
        padding: '1rem',
        background: 'white',
        borderRadius: '8px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50' }}>
            {stats.total}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>Total</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2196F3' }}>
            {stats.active}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>Active</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#9C27B0' }}>
            {stats.completed}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>Completed</div>
        </div>
      </div>

      {/* Add Task Form */}
      <form onSubmit={addTask} style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s ease'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem 1.5rem',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
          >
            Add
          </button>
        </div>
      </form>

      {/* Filter Buttons */}
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

      {/* Task List */}
      <div>
        {filteredTasks.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            color: '#999'
          }}>
            No tasks found. Add one above!
          </div>
        ) : (
          filteredTasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>

      {/* Clear Completed Button */}
      {stats.completed > 0 && (
        <button
          onClick={() => setTasks(tasks.filter(t => !t.completed))}
          style={{
            marginTop: '1rem',
            width: '100%',
            padding: '0.75rem',
            background: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background 0.3s ease'
          }}
        >
          Clear Completed ({stats.completed})
        </button>
      )}
    </div>
  );
}

export default TaskManager;

/**
 * Key Concepts Demonstrated:
 * 
 * 1. Custom Hooks (useLocalStorage)
 * 2. useState for component state
 * 3. useEffect for side effects (implicit in custom hook)
 * 4. useCallback for memoizing functions
 * 5. useMemo for expensive calculations
 * 6. Component composition
 * 7. Conditional rendering
 * 8. Event handling
 * 9. Props and prop drilling
 * 10. Inline styles (in production, use CSS modules or styled-components)
 * 
 * Production Improvements:
 * - Add TypeScript for type safety
 * - Use CSS modules or styled-components
 * - Add error boundaries
 * - Implement proper accessibility (ARIA labels)
 * - Add animations with Framer Motion
 * - Add unit tests with React Testing Library
 */
