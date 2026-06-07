    function myMap(arr, callback) { 
      const result = []; 
      for (let i = 0; i < arr.length; i++) { 
        result.push(callback(arr[i], i, arr)); 
      } 
      return result; 
    } 
 
    function myFilter(arr, callback) { 
      const result = []; 
      for (let i = 0; i < arr.length; i++) { 
        if (callback(arr[i], i, arr)) { 
          result.push(arr[i]); 
        } 
      } 
      return result; 
    } 
 
    function myReduce(arr, callback, initial) { 
      let acc = initial !== undefined ? initial : arr[0]; 
      let start = initial !== undefined ? 0 : 1; 
      for (let i = start; i < arr.length; i++) { 
        acc = callback(acc, arr[i], i, arr); 
      } 
      return acc; 
    } 
 
    function myFlat(arr, depth = 1) { 
      const result = []; 
      for (let i = 0; i < arr.length; i++) { 
        if (Array.isArray(arr[i]) && depth > 0) { 
          const nested = myFlat(arr[i], depth - 1); 
          for (let j = 0; j < nested.length; j++) { 
            result.push(nested[j]); 
          } 
        } else { 
          result.push(arr[i]); 
        } 
      } 
      return result; 
    } 
 
    function myDebounce(fn, delay) { 
      let timeoutId; 
      return function(...args) { 
        clearTimeout(timeoutId); 
        timeoutId = setTimeout(() => fn.apply(this, args), delay); 
      }; 
    } 
 
    function myThrottle(fn, limit) { 
      let inThrottle = false; 
      return function(...args) { 
        if (!inThrottle) { 
          fn.apply(this, args); 
          inThrottle = true; 
          setTimeout(() => { inThrottle = false; }, limit); 
        } 
      }; 
    } 
 
    
    function testMap() { 
      const result = myMap([1, 2, 3], x => x * 2); 
      document.getElementById('mapResult').textContent = JSON.stringify(result); 
    } 
    function testFilter() { 
      const result = myFilter([1, 2, 3, 4], x => x % 2 === 0); 
      document.getElementById('filterResult').textContent = JSON.stringify(result); 
    } 
    function testReduce() { 
      const result = myReduce([1, 2, 3], (acc, x) => acc + x, 0); 
      document.getElementById('reduceResult').textContent = result; 
    } 
    function testFlat() { 
      const result = myFlat([1, [2, [3, 4]]], 2); 
      document.getElementById('flatResult').textContent = JSON.stringify(result); 
    } 
 
    
    const debounceInput = document.getElementById('debounceInput'); 
    const immediateText = document.getElementById('immediateText'); 
    const debouncedText = document.getElementById('debouncedText'); 
 
    debounceInput.addEventListener('input', function(e) { 
      immediateText.textContent = e.target.value; 
      debouncedUpdate(e.target.value); 
    }); 
    const debouncedUpdate = myDebounce(function(value) { 
      debouncedText.textContent = value; 
    }, 500); 
 
   
    let totalClicks = 0; 
    let throttledClicks = 0; 
    const throttleBtn = document.getElementById('throttleBtn'); 
    const totalClicksSpan = document.getElementById('totalClicks'); 
    const throttledCountSpan = document.getElementById('throttledCount'); 
 
    throttleBtn.addEventListener('click', function() { 
      totalClicks++; 
      totalClicksSpan.textContent = totalClicks; 
      throttledIncrement(); 
    }); 
    const throttledIncrement = myThrottle(function() { 
      throttledClicks++; 
      throttledCountSpan.textContent = throttledClicks; 
    }, 1000);