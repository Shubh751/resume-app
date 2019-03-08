module.exports = ({ Student_data }) => {
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
         <script>
         for (var i=0;i< ${Student_data.Education};i++){ 
            +"<p>"+${Student_data.Education[0].qualification}+"</p>"+
         }
         </script>
        </div>
     </body>
  </html>
  `;
};
