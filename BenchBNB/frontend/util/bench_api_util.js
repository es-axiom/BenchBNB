export const fetchBenches = (success, error) => {
  $.ajax({
    type: 'GET',
    url: '/api/benches',
    success,
    error
  });
};
