// const weeklySpreadsheets = [];

// $.ajax({
//     url: 'https://raw.githubusercontent.com/CarolinaLogistic/linkboard/master/json/ss_payroll-weeks.json',
//     success: function(json) {
//         const data = JSON.parse(json);
//         for (let date in data)
//           weeklySpreadsheets.push(date, data[date]);
//     }
// });


const weeklySpreadsheets = [

  // new WeeklySpreadsheet(start, key),

  new WeeklySpreadsheet('04/26/2020', '1D0rmX4fCgGz7K471qgjphDX_KCqUTn4ozfE1cZKpyxk'),

  new WeeklySpreadsheet('04/19/2020', '1KGwIL_AmtMSbhypa9sD8F5UZ5LvIwSoLI8uhwjbE9tM'),
  new WeeklySpreadsheet('04/12/2020', '1rDXNHz4CiC4JFffAgB5yAWOS9JQR7Pya7XBerPXffc4'),
  new WeeklySpreadsheet('04/05/2020', '1jPUe5h_LWtG2GcKwNF-byVas60F1LZDjl5T57XItGLU'),
  new WeeklySpreadsheet('03/29/2020', '1-fhWI6_XVWw9UTegBOrmLc-g9IqZ7Wibw8_S4Ui6c_k'),
  new WeeklySpreadsheet('03/22/2020', '1mJppfM7vMfTjuEJzYYVtfz4khNsLk46bbMMneoLkzLs'),
  new WeeklySpreadsheet('03/15/2020', '1dutDkQYTAmbRD8PdG1CFBOV1Pg6wOKRazORaFkRUdqk'),
  new WeeklySpreadsheet('03/08/2020', '1aRuZ-063xSythocV7qXDIKIJ7lYPUmzZzKEOCLGSVGY'),
  new WeeklySpreadsheet('03/01/2020', '1tnG1AEd5yUnaLJvzmWRUX4wJzymPyEv-PbGMK5-Yn2k'),
  new WeeklySpreadsheet('02/23/2020', '1uik2F8RSpEkaU9m2x1RNr_ky3vYvc2Ppcb8KXURQNzQ'),
  new WeeklySpreadsheet('02/16/2020', '1XJDT_xLPiARa2WGsV5lc7HCyGhXs-M5a7hDNVY_tmkU'),
  new WeeklySpreadsheet('02/09/2020', '1l_UMhQPBhTc3EwaXQBRmeTKgqR3oOTJEyW2B6q2n0NU'),
  new WeeklySpreadsheet('02/02/2020', '1mRr8JgKw7T0fr_BqY0rb-MmAQu9n-MEQ9bW3nbGU9Y4'),
  new WeeklySpreadsheet('01/26/2020', '1RSo9s7ohQZrOd4ImZ1knIRA6TkDsDdeNm06697iQPYY'),
  new WeeklySpreadsheet('01/19/2020', '1oLhMfYvA9BZHhPw94Kh85V8lZbTWhP_iJRrXAGgvqPM'),
  new WeeklySpreadsheet('01/12/2020', '1MQUlvgGvTG5vR5dkLYECuWDzTfvhRub4YcazAdBk50c'),
  new WeeklySpreadsheet('01/05/2020', '1WR48NAf6lwO_IhjHULjn5sKDDm4H2gC0xZJjbHLwjx0'),
  new WeeklySpreadsheet('12/29/2019', '1xPd0RXX2E5BtMU8XyQ7WlAxn97vtTwkF_57UUaSsP6M'),
  new WeeklySpreadsheet('12/22/2019', '1uKisp1_FuR3JzKQI-JwICY4JtTUczNl8bebNkOxcY3I'),
  new WeeklySpreadsheet('12/15/2019', '1vcITiyeYkAe6THv8gxjjw9pxrCypmhYwCEcjGNAoOmI'),
  new WeeklySpreadsheet('12/08/2019', '1ohjvTnXOXZu0jWRND4KnU_n5dwSaA4Qqm5utS2Jsr_8'),
  new WeeklySpreadsheet('12/01/2019', '1_x0nvXoHQn2oVW1b0qZnxqy1sRi-B44j22tYT_sspF8'),
  new WeeklySpreadsheet('11/24/2019', '103FmYYOk8pirtRsTbRuTW8y_-zeIoJEHrww5czUJkH0'),
  new WeeklySpreadsheet('11/17/2019', '14vNTpl2wKfINiCLbW3Q75-IoM81aKCMU0r7uyruckdQ'),
  new WeeklySpreadsheet('11/10/2019', '1KfI6PZ8-JF2XOw9SVGOb4mWzIBmFiLQZ1--qeccV4Nc'),
  new WeeklySpreadsheet('11/03/2019', '1gxIkBdpSBJCSGcFzhGPPpeGWV25cR_MX3UqXw98vr0U'),
  new WeeklySpreadsheet('10/27/2019', '1jkCxR8i9ai5ybw5ZRbct0MN_w93uRjYbaFdHahpH9x0'),
  new WeeklySpreadsheet('10/20/2019', '1o3YfN_KKn-l0AO_2ATVY9XMJ_p4uWI7CH_wdH4CLGbs'),
  new WeeklySpreadsheet('10/13/2019', '1koTXjHuFbVvEMJZxz5cgsHcVI5dk-cIO_T9rcNO6Ezc'),
  new WeeklySpreadsheet('10/06/2019', '1GKC_O72a7Unw4U80skOnIhq0ERz47nUCnH7PdWsyy7s'),
  new WeeklySpreadsheet('09/30/2019', '1CwJC2mCwxHrzU2hhlxihKTZGID1zD6UEIR_j0hy2AoQ'),
  new WeeklySpreadsheet('09/22/2019', '1Et0CEPotxdXH-q8Peo2_W5hTMqBKJCK_w7CI_jBIWZk'),
  new WeeklySpreadsheet('09/15/2019', '1APueCZtbyqDuQ9PQyNaJmRSjMhL-IEZjZ4Vf6T4Tpzc'),
  new WeeklySpreadsheet('09/08/2019', '1TIW-MK0WbnOo9Q96GuDx8mx8bk4uE04lIcb2CHkFNGg'),
  new WeeklySpreadsheet('09/01/2019', '1wyuVRgEs4l99TL68z7DFtDn3I8iSLj9ysexsMJfupo4'),
  new WeeklySpreadsheet('08/25/2019', '1fswDS1KHG2tsNJAmfFOE8de2roud4Voc5hTKOsrzNzw'),
  new WeeklySpreadsheet('08/18/2019', '10pE4i21Vlc8BMWp5-VH-txto-TRyu3XseSftX2TPPNo'),
  new WeeklySpreadsheet('08/11/2019', '1BilCh60T3GrkAm4VxK0uGGq9fzuprVTIKPnf18_k_ws'),
  new WeeklySpreadsheet('08/04/2019', '1JjKOJLGLIGJuq8a51pUu_4EMPkeSAVEYFpL8_rhhOdk'),
  new WeeklySpreadsheet('07/28/2019', '1XpaNJI3VsTRWB6NLFcfTUHAXa6M0yDihjWKElVmCick'),
  new WeeklySpreadsheet('07/21/2019', '1GF3bHikV1W21xKVSCi9yrfNDlZOSw90ibmN5UuD-r_c'),
  new WeeklySpreadsheet('07/14/2019', '1OSvqOCv-f0JeIQZsagAaHgQZtuO1DRp3lgkGowc7tWU'),
  new WeeklySpreadsheet('07/07/2019', '1tLQhHkQ7ZsID96BKf2AGma_FVVLW9bJoEFdeIe7KaBE'),
  new WeeklySpreadsheet('06/30/2019', '1E87lbH7CaQn9V_S0YLBB1MJrHJTcB2o_taDd_gWhkBs')

];
