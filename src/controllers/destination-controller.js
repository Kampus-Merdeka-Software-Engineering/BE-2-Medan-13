const Dest = require('../model/dest-models.js');

// controller menampilkan destinasi
exports.getAllDestinasi= async (req,res, next) =>{
    try {
      const destinasi = await Dest.findAll();
      res.status(200).json(destinasi);

      } catch (error) {
        console.error('Error fetching destinasi:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      next();
    };


    // controller menambahkan destinasi
    exports.createDestinasi = async (req, res, next) => {
      try {
          const {name, location, description, image} = req.body;
          
          
          const newData = await Dest.create({        
            name,  
            location, 
            description, 
            image
            });
            res.status(201).json({
              message: 'Destinasi berhasil ditambahkan',
              data: newData,
            });
          }
       catch (error) {
        console.error('Error saat menambahkan data:', error);
        // Kirim respons error
        res.status(500).json({
          message: 'Terjadi kesalahan saat menambahkan data',
          error: error.message,
        });
      }
      next();
    };


      // controller menghapus destinasi
      exports.deleteDestinasi = async (req, res,next) => {
        const { id } = req.body;
        try {            
            const document = await Dest.findByPk(id);

            if (!document) {
            return res.status(404).json({ message: 'Dokumen tidak ditemukan' });
        }

          await document.destroy();

            res.json({ message: 'Dokumen berhasil dihapus' });
            next();
          }
         catch (error) {
          console.error('Error saat menghapus data:', error);
          // Kirim respons error
          res.status(500).json({
            message: 'Terjadi kesalahan saat menghapus data',
            error: error.message,
          });
          next();
        }};

      //controller update hotel
      /*exports.updateHotels = async (req, res) => {
        try {
          validate.validateUpdateHotels(req,res), async() =>{
            const { id } = req.params;
            const { name,location,image } = req.body;
            await Hotel.update(
              {
                name,
                location,
                image
              },
              {
                where: {
                  id,
                },
              }
            );
            res.status(200).json({
              message: 'Data berhasil diubah',
              
            });
            next();
      
            
          }
          
        } catch (error) {
          console.error('Error saat mengubah data:', error);
          // Kirim respons error
          res.status(500).json({
            message: 'Terjadi kesalahan saat mengubah data',
            error: error.message,
          });
        }
      };*/


      


