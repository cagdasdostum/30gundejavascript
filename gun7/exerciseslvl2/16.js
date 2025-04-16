function randomMacAddress() {
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let macAddress = '';
  
    for (let i = 0; i < 6; i++) {
      // Generate two random hex digits for each segment
      const firstDigit = hexDigits[Math.floor(Math.random() * hexDigits.length)];
      const secondDigit = hexDigits[Math.floor(Math.random() * hexDigits.length)];
      const segment = firstDigit + secondDigit;
  
      macAddress += segment;
      if (i < 5) { // Add colon separator, but not after the last segment
        macAddress += ':';
      }
    }
    return macAddress;
  }
  
  console.log(randomMacAddress());
  console.log(randomMacAddress());
  console.log(randomMacAddress());
  