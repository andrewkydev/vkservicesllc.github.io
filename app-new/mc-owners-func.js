$(document).ready( () => {

  const companies = getCompanies();

  const pad = 'style="padding: 12px 54px;">',
        hPad = '<th ' + pad, dPad = '<td ' + pad;
  let table = '<tr id="hdr">' + hPad + 'Company</th>' + hPad + 'Period 1</th>' + hPad + 'Period 2</th></tr>';

  let compKeys = Object.keys(companies),
      mKeys = Object.keys(monthlySpreadsheets),
      lastPeriod = mKeys[0],
      lastMonth = lastPeriod.split('-')[1],
      lastYear = lastPeriod.split('-')[0],
      active = new Date >= new Date(lastMonth + ' 1, ' + lastYear),
      period1 = monthlySpreadsheets[mKeys[1]],
      period2 = monthlySpreadsheets[lastPeriod];

  for (let i = 0; i < compKeys.length; i++) {

    let sideHeader = hPad + companies[compKeys[i]] + '</th>',
        data1 = period1[compKeys[i]],
        data2 = period2[compKeys[i]];

    let anchor1 = '<td></td>', anchor2 = '<td></td>';

    let title = sideHeader.split('>')[1].split('<')[0].trim();

    if (data1 && data1[0]) {

      let monYr = mKeys[1].split('-')[1] + ' ' + mKeys[1].split('-')[0];

      anchor1 = dPad + '<a class="h" target="_blank" href="https://docs.google.com/spreadsheets/d/';
      anchor1 += data1[0] + '/edit#gid=1165085359" title="' + title + '">';
      anchor1 += (data1[1]) ? monYr + '</a>' : '</a>' + monYr;
      anchor1 += '</td>';

    }

    if (data2 && data2[0]) {

      let monYr = lastMonth + ' ' + lastYear;

      anchor2 = dPad + '<a class="h" target="_blank" href="https://docs.google.com/spreadsheets/d/';
      anchor2 += data2[0] + '/edit#gid=1165085359" title="' + title + '">';
      anchor2 += (data2[1] && active) ? monYr + '</a>' : '</a>' + monYr;
      anchor2 += '</td>';

    }

    if (anchor1 == '<td></td>' && anchor2 == '<td></td>') sideHeader = sideHeader.replace('<th ', '<th class="redundant" ');

    table += '<tr>' + sideHeader + anchor1 + anchor2 + '</tr>'

  }

  $('#omcMon').html(table);

});
