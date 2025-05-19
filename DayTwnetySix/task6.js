/*
Task 6: Data Streaming vs Bulk Loading
- Simulate fetching a large JSON file.
- Compare full-fetch vs chunked or paginated loading (simulate with setTimeout and smaller chunks).
- Discuss: When and why to avoid loading everything at once.
*/

// Full fetch simulation
function fetchAllData() {
  const data = Array.from({ length: 1_000_000 }, (_, i) => `Item ${i}`);
  console.log("Full data loaded:", data.length);
}

// Streamed loading
function fetchInChunks() {
  let i = 0;
  const chunkSize = 100_000;

  function loadChunk() {
    const chunk = Array.from({ length: chunkSize }, (_, j) => `Item ${i + j}`);
    console.log(`Loaded chunk: ${i} to ${i + chunkSize}`);
    i += chunkSize;

    if (i < 1_000_000) {
      setTimeout(loadChunk, 100);
    }
  }

  loadChunk();
}
