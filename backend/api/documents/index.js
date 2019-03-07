module.exports = ({ Student_data }) => {
  const today = new Date();
return `
  <!doctype html>
  <html>
     <head>
        <meta charset="utf-8">
        <title>PDF Result Template</title>
        <style>
           .header{
              text-align:right;
           }
        </style>
     </head>
     <body>
        <div class="header">
        <p>${Student_data.Name}</p>
        </div>
     </body>
  </html>
  `;
};
