function LCS(seq1, seq2) {
    const m = seq1.length;
    const n = seq2.length;
    
    // Create a 2D array to store the lengths of common subsequences
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) {
      dp[i] = new Array(n + 1).fill(0);
    }
    
    // Build the dp table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (seq1[i - 1] === seq2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    
    // Retrieve the longest common subsequence
    let i = m;
    let j = n;
    let lcs = "";
    
    while (i > 0 && j > 0) {
      if (seq1[i - 1] === seq2[j - 1]) {
        lcs = seq1[i - 1] + lcs;
        i--;
        j--;
      } else if (dp[i - 1][j] >= dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }
    
    return lcs;
  }

console.log(LCS("abcdef", "abc"));         // Output: "abc"
console.log(LCS("abcdef", "acf"));         // Output: "acf"
console.log(LCS("132535365", "123456789")); // Output: "12356"
