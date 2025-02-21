import mongoose from 'mongoose';

const DbConnection = () =>{
    mongoose.connect('mongodb://0.0.0.0/CampusConnect').then(()=>{
        console.log('mongodb is connected');
    }).catch((err)=>{
        console.log('A Error is appear : ' + err);
    })
}

export default DbConnection;

