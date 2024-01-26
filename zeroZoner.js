const express=require('express');
const bodyParser=require('body-parser');
const {MongoClient, ObjectId}=require('mongodb');
let _usersCollectionName="users";
const uri='mongodb://localhost:27017/zeroZoner';
const client=new MongoClient(uri);
client.connect().then(()=>{
    console.log("Connection Established");
    let _db=client.db();
    //inserting users details in database
    let _userCollection=_db.collection(_usersCollectionName);
    _userCollection.insertMany([
    {
        name:"Rajasekhar",
        phone:9685356900,
        role:"Company",
        email:"rajasekhar@gmail"
    },
    {
        name:"Vinod",
        phone:9685356900,
        role:"Enterpreneur",
        email:"vinod@gmail"
    },
    {
        name:"Tirumal",
        phone:9685356900,
        role:"freelancer",
        email:"tirumal@gmail"
    }]).then(()=>{
        console.log("Users inserted");
    });
    //inserting project details in dtabase
    let _projectDetails="projects";
    let projectCollection=_db.collection(_projectDetails);
    projectCollection.insertMany([
        {
            name:"zeroZoner",
            description:"Perfect platform to get succed in your life",
            fileRegardingConcept:"concept1",
        },
        {
            name:"School management",
            description:"This is a school website with more features",
            fileRegardingConcept:"concept2",
        },
        {
            name:"Dry fruits",
            description:"Get more knowledge on dryfruits in this website",
            fileRegardingConcept:"concept3",
    }]).then(()=>{
        console.log("Projects Inserted");
    });
    //inserting userwallets in database
    let _userWallets="userWallets";
    let walletsCollection=_db.collection(_userWallets);
    walletsCollection.insertMany([
        {
            Account_No:756768136835668658,
            Bank_Name:"SBI",
            IFSC:"SBI0099465",
            Balance:5000,
        },
        {
            Account_No:7567681368342,
            Bank_Name:"UNION",
            IFSC:"UNI009875477",
            Balance:8000,
        },
        {
            Account_No:756768136834545,
            Bank_Name:"CANARA",
            IFSC:"CNRB000755",
            Balance:9000,
        }
    ]).then(()=>{
        console.log("Userwallets Inserted");
    });
    //inserting transactions in database
    let user_Transactions="Transactions";
    let userTransactions=_db.collection(user_Transactions);
    userTransactions.insertMany([
        {
            Transaction_id:8972792841921,
            paymentMode:"Net banking",
            Amount:3000,
            purpose:"Credit"
        },
        {
            Transaction_id:8972792841921,
            paymentMode:"Cheque",
            Amount:3000,
            purpose:"Debit"
        },
        {
            Transaction_id:8972792841921,
            paymentMode:"Phone pay",
            Amount:3000,
            purpose:"Credit"
        }
    ]).then(()=>{
        console.log("Transaction inserted");
    });
    //deleting one record from users collection by using object_id
    let id=new ObjectId('65b35b7925e64899d8ce4d73');
    _userCollection.deleteOne({_id:id}).then(()=>{
        console.log("Deleted");
    });
    //deleting many records from project collection by using name
    projectCollection.deleteMany({name:"zeroZoner"}).then(()=>{
        console.log("Project deleted");
    });
    //deleting many records from userWallets colletcion by using Bank_Name
    walletsCollection.deleteMany({Bank_Name:"CANARA"}).then(()=>{
        console.log("UserWallets deleted");
    });
    });

const app=express();
app.use(bodyParser.json());
// this function tells to the server to listen and respond to the request from client on portNumber 800
app.listen(800,()=>{
    console.log("server is running on 800");
}); 