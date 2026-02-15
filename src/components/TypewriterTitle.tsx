'use client';

import { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import { colors } from '@/lib/styles';

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1.0em;
  background: ${colors.text};
  margin-left: 4px;
  vertical-align: middle;
  animation: blink 1s ease-in infinite;

  @keyframes blink {
    0%, 100% { opacity: 0.9; }
    50% { opacity: 0.01; }
  }
`;

const TITLE = 'TheBlankPage.xyz';
const TYPE_DELAY = 150;

export default function TypewriterTitle() {
  const [length, setLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (length < TITLE.length) {
      const timeout = setTimeout(() => setLength(length + 1), TYPE_DELAY);
      return () => clearTimeout(timeout);
    }
  }, [length]);

  useEffect(() => {
    const timeout = setTimeout(() => setShowCursor(false), 20000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {TITLE.slice(0, length)}
      {showCursor && <Cursor />}
    </>
  );
}
