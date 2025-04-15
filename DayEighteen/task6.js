// Task 6: Simulate a printer queue

function simulatePrinterQueue(jobs) {
    const queue = new Queue();
  
    jobs.forEach(job => queue.enqueue(job));
  
    while (queue.items.length > 0) {
      const job = queue.dequeue();
      console.log(`Printing: ${job}`);
    }
  }
  
  // Example usage:
  simulatePrinterQueue(["Doc1", "Doc2", "Doc3"]);
  // Output:
  // Printing: Doc1
  // Printing: Doc2
  // Printing: Doc3
  