import {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.css';

const LESSON_URL = '/public/lessons/profile-service-lesson.json';

export default function App() {
  const [lesson, setLesson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(LESSON_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load lesson');
        }
        return response.json();
      })
      .then((data) => {
        setLesson(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="app-container">
        <p className="error">{error}</p>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="app-container">
        <div className="loader" aria-label="Loading lesson" />
      </div>
    );
  }

  const markdown = `# ${lesson.title}\n\n${lesson.summary}`;

  return (
    <div className="app-container">
      <header>
        <h1>{lesson.title}</h1>
        <p>{lesson.summary}</p>
      </header>
      <section className="markdown">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </section>
    </div>
  );
}
