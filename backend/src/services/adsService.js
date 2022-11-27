import db from '../models/index';
require('dotenv').config();
import _ from 'lodash';

let createAds = (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            if( !data.name || !data.content || !data.startedAt || !data.finishedAt ) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter'
                });
            } else {
                await db.Advertisement.create({
                    name: data.name,
                    content: data.content,
                    visitTime: 0,
                    startedAt: data.startedAt,
                    finishedAt: data.finishedAt
                })

                resolve({
                    errCode: 0,
                    errMessage: 'Create new advertisement successfully'
                })
            }

        } catch (error) {
            reject(error);
        }
    })
}

let getAllAds = () => {
    return new Promise( async (resolve, reject) => {
        try {
            let data = await db.Advertisement.findAll({
                attributes: 
                [ 'id', 'name','content','startedAt','finishedAt','createdAt', 'updatedAt'
                ]
            });
            // if(data && data.length > 0) {
            //     data.map( item => {
            //         item.image = Buffer.from(item.image,'base64').toString('binary'); // convert image to base64
            //         return item;
            //     })
            // }
            // console.log(data);
            resolve({
                errCode: 0,
                errMessage: 'OK',
                data
            })

        } catch (error) {
            reject(error);
        }
    })
}

let deleteAds = (adsId) => {
    return new Promise( async (resolve, reject) => {
        try {
            let advertisement = await db.Advertisement.findOne({
                where: { id : adsId }
            })
            if(!advertisement) {
                resolve({
                    errCode:2,
                    errMessage:`The advertisement isn't exist`
                })
            }
            // await user.destroy(); khong sd duoc vi da config lai sequelize ra dang object raw o nodejs
            // con ham duoi chay duoc vi xoa truc tiep o db
            await db.Advertisement.destroy({
                where: { id : adsId }
            })

            resolve({
                errCode:0,
                message:`The advertisement was deleted`
            })
            
        } catch (error) {
            reject(error);
        }
    })
}


module.exports = {
    createAds, getAllAds, deleteAds
}