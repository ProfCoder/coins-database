const express = require('express');
const cors = require('cors');
const connect = require('./database');
const bodyParser = require('body-parser');

connect(connection => {
  const server = express();
  server.use(bodyParser.json()); //new
  server.use( bodyParser.urlencoded( { extended: true } ) ) // new
  server.use(cors());
  const PORT  = 3004;
  
  //  ------ Checkup: Everything is working  ------ //
    // server.get('/coins', (req, res) => {
    //     console.log("YES");
    // //   res.send('Everything is working');
    // })
  
  // ------------ Get All Coins  ------------ //
  server.get('/coins', (req, res) => {
   connection.query('SELECT * FROM coins;', 
    (err, data) => {
      if (err) return res.status(500);
      res.json(data);
    })
  })

  // ------------ Update Selected Coin ------------ //
  server.put('/coins/:id', (req, res) => {
    const {id} = req.params;
    const {category, name, shortDescr, longDescr, country, composition, quality, denomination, year, weight, price, frontImage, reverseImage} = req.body;
    connection.query(`UPDATE coins 
    SET category = "${category}",
    coin_name = "${name}",
    short_desct = "${shortDescr}",
    coin_desc = "${longDescr}",
    country = "${country}",
    composition = "${composition}",
    quality = "${quality}",
    denomination = "${denomination}",
    coin_year = "${year}",
    weight = "${weight}",
    price ="${price}",
    coin_front_image = "${frontImage}",
    coin_reverse_image =  "${reverseImage}"
    WHERE id = '${id}'`,
    (err, data) => {
      if (!err) {
        // res.json(data);
        console.log(`Coin with id ${id} was successfully updated`)
      } else {
        console.log(err,'update of selected coin failed');
      }
    });
  })

    // ------------ Get Selected Coin  ------------ //
    // server.get('/coins/:id', (req, res) => {
    //   const {id} = req.params;
    //   connection.query(`SELECT * FROM coins WHERE id = '${id}';`, 
    //    (err, data) => {
    //      console.log(data)
    //      if (err) return res.status(500);
    //      res.json(data);
    //    })
    //  })
  
  // ------------ Create New Coin  ------------ //

server.post('/coins', (req, res) => {
  const {category, name, shortDescr, longDescr, country, composition, quality, denomination, year, weight, price, frontImage, reverseImage} = req.body;
  connection.query(`
  INSERT INTO coins (category, coin_name, short_desct, coin_desc, country, composition, quality, denomination, coin_year, weight, price, coin_front_image, coin_reverse_image)
VALUES
("${category}","${name}","${shortDescr}","${longDescr}","${country}","${composition}","${quality}","${denomination}","${year}","${weight}","${price}","${frontImage}","${reverseImage}");`, 
(err, data) => {
  if (!err) {
    console.log('Coin has een created');
  } else {
    console.log('insert failed', err);
  }
});
})

  //  ------------ Delete Selected Coin ------------ //
  server.delete('/coins/:id', (req, res) => {
    const {id} = req.params;
    connection.query(`DELETE FROM coins WHERE id = '${id}'`,
    (err, data) => {
      if (!err) {
        res.json(data);
      } else {
        console.log('deletion by id failed');
      }
    });
  })

  server.listen(PORT, () => {console.log(`  Server is listening the port ${PORT}`)})
})






























  // // ------------ Get All Uniqie Country Names for Advanced Search from MySQL Table COUNTRY ------------ //
  // server.get('/countries', (req, res) => {
  //   connection.query('SELECT * FROM country;', 
  //    (err, data) => {
  //      if (err) return res.status(500);
  //      res.json(data);
  //    })
  //  })


  // ------------ Get All Uniqie Countries Types for Advanced Search ------------ //
  // server.get('/countries', (req, res) => {
  //   connection.query('SELECT DISTINCT country FROM coins;', 
  //    (err, data) => {
  //      if (err) return res.status(500);
  //      res.json(data);
  //    })
  //  })

  // // ------------ Get All Uniqie Composition Types for Advanced Search ------------ //
  // server.get('/compositions', (req, res) => {
  //   connection.query('SELECT DISTINCT composition FROM coins;', 
  //    (err, data) => {
  //      if (err) return res.status(500);
  //      res.json(data);
  //    })
  //  })

  // // ------------ Get All Uniqie Quality Types for Advanced Search ------------ //
  // server.get('/quality', (req, res) => {
  //   connection.query('SELECT DISTINCT quality FROM coins;', 
  //    (err, data) => {
  //     console.log('ddd')
  //     console.log(data);
  //      if (err) return res.status(500);
  //      res.json(data);
  //    })
  //  })

  //  ------------ Get Selected Coin ------------ //
//   server.get('/tasks/:title', (req, res) => {
//     const { title } = req.params;
//     connection.query(`SELECT * FROM tasks WHERE title = '${title}'`,
//     (err, data) => {
//       if (!err) {
//         res.json(data);
//       } else {
//         console.log('selection failed');
//       }
//     });
//   })


//   //  ------------ Create New Task ------------ //
// server.post('/tasks', (req,res) => {
//   const {title, isFulfiled} = req.body;

//   connection.query(`
//   INSERT INTO tasks (title, isFulfiled)
//   VALUES
//   ('${title}','${isFulfiled}');
// `, 
// (err, data) => {
//   if (!err) {
//     console.log(data);
//   } else {
//     console.log('insert failed');
//   }
// });
// })

  
//   //  ------------ Delete Selected Task ------------ //
//   server.delete('/tasks/:id', (req, res) => {
//     const {id} = req.params;
//     connection.query(`DELETE FROM tasks WHERE id = '${id}'`,
//     (err, data) => {
//       if (!err) {
//         res.json(data);
//       } else {
//         console.log('deletion by title failed');
//       }
//     });
//   })
  
//   //  ------------ Replace Selected Task  ------------ //
//   server.put('/tasks/:id', (req, res) => {
//     const {id} = req.params;
//     connection.query(`UPDATE tasks SET title = 'ALMAZ' WHERE title = '${id}'`,
//     (err, data) => {
//       if (!err) {
//         res.json(data);
//       } else {
//         console.log('replacement by title failed');
//       }
//     });
//   })
  
  // ------------ Change Selected Task ------------ //
  // server.patch('/tasks/:title', (req, res) => {
  //   const {title} = req.params;
  //   connection.query(`UPDATE tasks SET title = 'ALMAZ' WHERE title = '${title}'`,
  //   (err, data) => {
  //     if (!err) {
  //       res.json(data);
  //     } else {
  //       console.log('replacement by title failed');
  //     }
  //   });
  // })
  
  

