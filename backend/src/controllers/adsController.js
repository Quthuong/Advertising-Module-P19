import db from '../models/index';
import adsService from '../services/adsService'


let getHomePage = async (req, res) => {
    return res.render('homepage.ejs')
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs'); // render ra about page
}

let createAds = async (req, res) => {
    try {
        let response = await adsService.createAds(req.body);
        return res.status(200).json(response)
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
    // return res.render('homepage.ejs')
}

let getAllAds = async (req, res) => {
    try {
        let response = await adsService.getAllAds();
        return res.status(200).json(response)
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
    // return res.render('homepage.ejs')
}

let deleteAds = async (req, res) => {
    try {
        let response = await adsService.deleteAds(req.body.id);
        return res.status(200).json(response)
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let updateAds = async (req, res) => {
    try {
        let data = req.body;
        // console.log(data)
        let response = await adsService.updateAds(data);
        return res.status(200).json(response)
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getDetailAds = async (req, res) => {
    try {
        let response = await adsService.getDetailAds(req.query.id);
        return res.status(200).json(response)
    } catch (error) {
        console.error(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
    // return res.render('homepage.ejs')
}


module.exports = {
    getHomePage, getAboutPage,
    createAds , getAllAds , deleteAds, updateAds, getDetailAds,
}