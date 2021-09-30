const Song = require('./SongModel');

const MusicController = {};

MusicController.getSongs = async (req, res, next) => {
    try{
        const result = await Song.find({});
        //onsole.log(result);
        res.locals.songs = result;
        return next();
    }catch(error){
        return next({
            status: 400
        });
    }
}

MusicController.createSong = async (req, res, next) => {
    try{
        const result = await Song.create(req.body);
        return next();
    }catch(error){
        return next({
            status:400
        });
    }
    return next();
}

MusicController.getSong = async (req, res, next) => {
    //console.log("SODFIJLFKJL")
    //console.log(req.params);
    try{
        const result = await Song.findOne(req.params);
        console.log(result.song);
        res.locals.song = result.song;
        return next();
    }
    catch(error){
        return next({
            status: 400
        })
    }
}

module.exports = MusicController;