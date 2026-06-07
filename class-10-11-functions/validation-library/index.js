
    function validateEmail(email) { 
      if (!email || email.trim() === '') { 
        return { valid: false, error: 'Email is required' }; 
      } 
     
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
      if (!emailRegex.test(email)) { 
        return { valid: false, error: 'Please enter a valid email (e.g. user@example.com)' }; 
      } 
      return { valid: true, error: null }; 
    } 
 
   
    function validatePhone(phone) { 
      if (!phone || phone.trim() === '') { 
        return { valid: false, error: 'Phone number is required' }; 
      } 
      
      const digitsOnly = phone.replace(/\D/g, ''); 
      if (digitsOnly.length < 7 || digitsOnly.length > 15) { 
        return { valid: false, error: 'Phone number must have 7 to 15 digits' }; 
      } 
      
      const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/; 
      if (!phoneRegex.test(phone)) { 
        return { valid: false, error: 'Invalid phone format' }; 
      } 
      return { valid: true, error: null }; 
    } 
 
    
    function validatePassword(password) { 
      if (!password || password.trim() === '') { 
        return { valid: false, error: 'Password is required' }; 
      } 
      const minLength = 8; 
      const hasUpper = /[A-Z]/.test(password); 
      const hasLower = /[a-z]/.test(password); 
      const hasDigit = /[0-9]/.test(password); 
      const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password); 
      const longEnough = password.length >= minLength; 
 
      if (longEnough && hasUpper && hasLower && hasDigit && hasSpecial) { 
        return { valid: true, error: null }; 
      } 
 
      let errorMsg = 'Password must contain: '; 
      if (!longEnough) errorMsg += 'at least 8 characters, '; 
      if (!hasUpper) errorMsg += 'one uppercase letter, '; 
      if (!hasLower) errorMsg += 'one lowercase letter, '; 
      if (!hasDigit) errorMsg += 'one number, '; 
      if (!hasSpecial) errorMsg += 'one special character (!@#$%^&*), '; 
     
      errorMsg = errorMsg.replace(/, $/, ''); 
      return { valid: false, error: errorMsg }; 
    } 
 
    
    function validateURL(url) { 
      if (!url || url.trim() === '') { 
        return { valid: false, error: 'URL is required' }; 
      } 
     
      const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; 
      if (!urlRegex.test(url)) { 
        return { valid: false, error: 'Please enter a valid URL (e.g. https://example.com)' }; 
      } 
      return { valid: true, error: null }; 
    } 
 
    
    function validateDate(dateStr) { 
      if (!dateStr || dateStr.trim() === '') { 
        return { valid: false, error: 'Date is required' }; 
      } 
     
      const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/; 
      if (!dateRegex.test(dateStr)) { 
        return { valid: false, error: 'Date must be in YYYY-MM-DD format' }; 
      } 
      
      const [year, month, day] = dateStr.split('-').map(Number); 
      const dateObj = new Date(year, month - 1, day); 
      if (dateObj.getFullYear() !== year || dateObj.getMonth() !== month - 1 || dateObj.getDate() 
!== day) { 
        return { valid: false, error: 'Invalid date (check month/day)' }; 
      } 
      return { valid: true, error: null }; 
    } 
 
   
    function showError(inputId, errorId, result) { 
      const input = document.getElementById(inputId); 
      const errorP = document.getElementById(errorId); 
      
      input.classList.remove('border-green-500', 'border-red-500'); 
      errorP.classList.remove('text-green-600', 'text-red-600'); 
 
      if (result.valid) { 
        input.classList.add('border-green-500'); 
        errorP.textContent = '  Valid'; 
        errorP.classList.add('text-green-600'); 
      } else { 
        input.classList.add('border-red-500'); 
        errorP.textContent = '  ' + result.error; 
        errorP.classList.add('text-red-600'); 
      } 
    } 
 
    
    document.getElementById('email').addEventListener('input', function() { 
      const result = validateEmail(this.value); 
      showError('email', 'emailError', result); 
    }); 
 
    document.getElementById('phone').addEventListener('input', function() { 
      const result = validatePhone(this.value); 
      showError('phone', 'phoneError', result); 
    }); 
 
    document.getElementById('password').addEventListener('input', function() { 
      const result = validatePassword(this.value); 
      showError('password', 'passwordError', result); 
    }); 
 
    document.getElementById('url').addEventListener('input', function() { 
      const result = validateURL(this.value); 
      showError('url', 'urlError', result); 
    }); 
 
    document.getElementById('date').addEventListener('input', function() { 
      const result = validateDate(this.value); 
      showError('date', 'dateError', result); 
    });