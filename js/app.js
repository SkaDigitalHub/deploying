const API_URL = 'https://script.google.com/macros/s/AKfycbzYWiWk63KWGZwhgcm62DqwJojNIgTMHbfK0nwC27GK6yzOHO15Ld3FxrYtm-u_eq6t8w/exec';

async function apiCall(action, data) {
  const payload = { action, ...data };
  const resp = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'text/plain' }
  });
  return resp.json();
}

// Example: Register
document.getElementById('registerForm').onsubmit = async (e) => {
  e.preventDefault();
  const data = { email: '...', password: '...', name: '...' };
  const result = await apiCall('register', data);
  if (result.error) Swal.fire('Error', result.error, 'error');
  else Swal.fire('Success', result.msg, 'success');
};
