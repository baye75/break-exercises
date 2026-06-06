    const display = document.getElementById('display');
    let currentInput = '0';      
    let previousInput = null;   
    let operator = null;        
    let shouldResetDisplay = false; 
 
   
    function updateDisplay() { 
     
      display.textContent = currentInput.length > 12 ? parseFloat(currentInput).toExponential(4) : 
currentInput; 
    } 
 
   
    function compute(oper, a, b) { 
      const numA = parseFloat(a); 
      const numB = parseFloat(b); 
 
      switch (oper) { 
        case '+': return numA + numB; 
        case '-': return numA - numB; 
        case '*': return numA * numB; 
        case '/': 
          if (numB === 0) throw new Error('Division by zero'); 
          return numA / numB; 
        case '^': return Math.pow(numA, numB); 
        default: return numB; 
      } 
    } 
 
    
    function computeUnary(op, num) { 
      const n = parseFloat(num); 
      switch (op) { 
        case '√': 
          if (n < 0) throw new Error('Square root of negative'); 
          return Math.sqrt(n); 
        case '!': 
          if (n < 0 || !Number.isInteger(n)) throw new Error('Invalid factorial input'); 
          let result = 1; 
          for (let i = 2; i <= n; i++) result *= i; 
          return result; 
        default: return n; 
      } 
    } 
 
    
    function handleButton(value) { 
      
      if (/[0-9.]/.test(value)) { 
        
        if (value === '.' && currentInput.includes('.')) return; 
 
        if (shouldResetDisplay) { 
          currentInput = value; 
          shouldResetDisplay = false; 
        } else { 
          currentInput = currentInput === '0' && value !== '.' ? value : currentInput + value; 
        } 
        updateDisplay(); 
        return; 
      } 
 
      
      if (value === 'C') { 
        currentInput = '0'; 
        previousInput = null; 
        operator = null; 
        shouldResetDisplay = false; 
        updateDisplay(); 
        return; 
      } 
 
     
      if (value === '√' || value === '!') { 
        try { 
          const result = computeUnary(value, currentInput); 
          currentInput = String(result); 
          
          if (result % 1 === 0) currentInput = String(parseInt(result)); 
          updateDisplay(); 
        } catch (e) { 
          currentInput = 'Error'; 
          updateDisplay(); 
          
          setTimeout(() => { 
            if (currentInput === 'Error') { 
              currentInput = '0'; 
              updateDisplay(); 
            } 
          }, 2000); 
        } 
        return; 
      } 
 
     
      if (value === 'x^y') { 
        if (operator !== null && !shouldResetDisplay) { 
          
          try { 
            const result = compute(operator, previousInput, currentInput); 
            currentInput = String(result); 
            if (result % 1 === 0) currentInput = String(parseInt(result)); 
          } catch (e) { 
            currentInput = 'Error'; 
            updateDisplay(); 
            setTimeout(() => { if (currentInput === 'Error') { currentInput = '0'; updateDisplay(); } }, 
2000); 
            return; 
          } 
        } 
        previousInput = currentInput; 
        operator = '^'; 
        shouldResetDisplay = true; 
        updateDisplay(); 
        return; 
      } 
 
      
      if (['+', '-', '*', '/'].includes(value)) { 
       
        if (operator !== null && !shouldResetDisplay) { 
          try { 
            const result = compute(operator, previousInput, currentInput); 
            currentInput = String(result); 
            if (result % 1 === 0) currentInput = String(parseInt(result)); 
            updateDisplay(); 
          } catch (e) { 
            currentInput = 'Error'; 
            updateDisplay(); 
            setTimeout(() => { if (currentInput === 'Error') { currentInput = '0'; updateDisplay(); } }, 
2000); 
            return; 
          } 
        } 
        previousInput = currentInput; 
        operator = value; 
        shouldResetDisplay = true; 
        updateDisplay(); 
        return; 
      } 
 
     
      if (value === '=') { 
        if (operator === null || shouldResetDisplay) return; // nothing to compute 
        try { 
          const result = compute(operator, previousInput, currentInput); 
          currentInput = String(result); 
          if (result % 1 === 0) currentInput = String(parseInt(result)); 
          updateDisplay(); 
        } catch (e) { 
          currentInput = 'Error'; 
          updateDisplay(); 
          setTimeout(() => { if (currentInput === 'Error') { currentInput = '0'; updateDisplay(); } }, 
2000); 
        } 
         
        operator = null; 
        previousInput = null; 
        shouldResetDisplay = true;  
      } 
    } 
 
    updateDisplay(); 