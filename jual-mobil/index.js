var jualMobil = {

    iklan:function(){
        document.write(`BU, saya ${this.nama}, jual mobil ${this.merek}, tahun ${this.tahun}, bekas`);
    }
};

var saya = Object.create(jualMobil)

saya.nama = 'tompel'
saya.merek = 'avanza'
saya.tahun = 2017
saya.iklan();