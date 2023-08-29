var koneksi = require("../koneksi");
const Sequelize = require("sequelize");

var TransaksiDetail = require("./TransaksiDetail"); //panggil model TransaksiDetail

const Transaksi = koneksi.define(
  "transaksi",
  {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    jenis: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tanggal: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    no_daftar: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    diterima_dari: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  }
);

Transaksi.hasMany(TransaksiDetail, {
  foreignKey: "id_transaksi", //field tabel transaksi_detail
  as: "transaksi_detail", //nama alias
});
module.exports = Transaksi;
