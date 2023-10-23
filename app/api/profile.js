export default function handler(req, res) {
    res.status(200).json({
        "certificates":[
           {
              "id":1,
              "name":"Rene Parada",
              "categories":[
                 {
                    "id":"1",
                    "name":"certificado 1"
                 }
              ],
              "thumbnail":"thumbnail 1",
              "granted":true,
              "link":"link certificado 1",
              "issue_date":"fecha certificado 1"
           },
           {
            "id":2,
            "name":"Rene Parada",
            "categories":[
               {
                  "id":"2",
                  "name":"certificado 2"
               }
            ],
            "thumbnail":"thumbnail 2",
            "granted":false,
            "link":"link certificado 2",
            "issue_date":"fecha certificado 2"
         },
         {
            "id":3,
            "name":"Rene Parada",
            "categories":[
               {
                  "id":"3",
                  "name":"certificado 3"
               }
            ],
            "thumbnail":"thumbnail 3",
            "granted":false,
            "link":"link certificado 3",
            "issue_date":"fecha certificado 3"
         }
        ]
     })
  }
  