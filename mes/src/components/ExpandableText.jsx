import { useState } from 'react';

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };
  
  if (!text) return null;

  const firstDotIndex = text.indexOf('.');
  const shortText = firstDotIndex !== -1 ? text.slice(0, firstDotIndex + 1) : text;

  const canBeExpanded = text.length > shortText.length;

  return (
    <div>
      <p style={{ lineHeight: '1.6' }}>
        {isExpanded ? text : shortText}
      </p>
      {canBeExpanded && (
        <button onClick={toggleText}>
          {isExpanded ? 'Скрыть' : 'Показать подробнее'}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;