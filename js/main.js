$(document).ready(function() {
  let countries = ['Nepal', 'Germany', 'Australia'];
  let latestData = [];
  countries.forEach(country => {
    $.ajax({
      url: `https://api.covid19api.com/total/country/${country}/status/confirmed`,
    }).done(data => {
      console.log('Data', data);
      let length = data.length;
      latestData.push(data[length - 1])
      console.log('Latest data', latestData);

      let value = `
      <div class="container">
        <div class="info">
        <h1>Covid 19 (Cases Latest)</h1>
        <hr>
      `;
      latestData.forEach((post) => {
          value += `<p class='repos'>${post.Country} - ${post.Cases}</p>
          </div></div>`;
      });

      document.body.innerHTML = value;

    });
  })
  
  })
