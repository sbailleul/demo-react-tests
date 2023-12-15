import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import './src/index.css'
// import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';
// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});