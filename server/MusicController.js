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
        const query = req.body;
        const song = query.song;
        const name = query.name;
        const result = await Song.findOneAndUpdate({name: name}, query, {upsert: true});
        console.log(result);
        return next();
    }catch(error){
        return next({
            status:400
        });
    }
    return next();
}

MusicController.getSong = async (req, res, next) => {
    try{
        const result = await Song.findOne(req.params);
        //console.log(result.song);
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