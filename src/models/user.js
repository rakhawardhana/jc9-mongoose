const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, // wajib di isi
        trim: true // menghapus whitespace di awal dan di akhir data
    },
    email: {
        // Latihan
        // Harus diisi
        // hapus spasi di depan dan akhir
        // harus huruf kecil semua
        type: String,
        unique: true,
        validate(value){ // value: data yang di input user
            var hasil = validator.isEmail(value)
            
            if(!hasil){
                throw new Error('Yang anda masukkan bukan email')
            }
        }
    },
    password: {
        // Harus diisi
        // hapus sepasi di awal dan akhir
        // minimal 7 karakter
        // tidak boleh mengandung kata "password": validate
        type: String
    },
    age: {
        // Tidak boleh string kosong, dan harus positive number
        type: Number,
        default: 0  // default value jika user tidak input data age
    }
})


const User = mongoose.model('User', userSchema)

module.exports = User