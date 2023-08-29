var express = require("express");
var router = express.Router();

//panggil Model
var Transaksi = require("../models/Transaksi");
var TransaksiDetail = require("../models/TransaksiDetail");
var Biaya = require("../models/Biaya");
var Coa = require("../models/Coa");

//panggil koneksi untuk proses transaksi
var koneksi = require("../koneksi");

//panggil middelware jwt
var cekToken = require("../middleware");

/* TAMPIL DATA */
router.get("/", cekToken, function (req, res, next) {
  Transaksi.findAll()
    .then((data) => {
      res.json({
        status: true,
        pesan: "Berhasil Tampil",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Tampil: " + err.message,
        data: [],
      });
    });
});

/* TAMBAH DATA */
router.post("/", cekToken, function (req, res, next) {
  Transaksi.create(req.body)
    .then((data) => {
      res.json({
        status: true,
        pesan: "Berhasil Tambah",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Tambah: " + err.message,
        data: [],
      });
    });
});
// /* UBAH DATA */
// router.put('/', cekToken, function(req, res, next) {
//     Transaksi.update(req.body,{
//         where:{ id:req.body.id }
//     }).then ( ()=>{
//         res.json({
//             status:true,
//             pesan:"Berhasil Ubah",
//             data: []
//         });
//     }) .catch(err => {
//         res.json({
//             status:false,
//             pesan:"Gagal Ubah: " + err.message,
//             data:[]
//         });
//     });
// });

/* HAPUS DATA */
router.delete("/", cekToken, function (req, res, next) {
  Transaksi.destroy({
    where: { id: req.body.id },
  })
    .then(() => {
      res.json({
        status: true,
        pesan: "Berhasil Hapus",
        data: [],
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        pesan: "Gagal Hapus: " + err.message,
        data: [],
      });
    });
});
module.exports = router;
