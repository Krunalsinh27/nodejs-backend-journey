import multer from "multer";

const Storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
})

export const upload = multer({
    storage,
})