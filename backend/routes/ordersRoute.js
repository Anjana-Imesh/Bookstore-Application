import express from 'express';
import {Order} from '../models/orderModel.js';


const router = express.Router();
//Route for save a new order
router.post('/', async (request, response) =>{
    try{
       if(
          !request.body.customerName||
          !request.body.bookDetails||
          !request.body.address||
          !request.body.email
       ){
          return response.status(400).send({
             message: 'send all required fields: customerName,bookDetails,address,email',
          });
       }
       const newOrder={
        customerName: request.body.customerName,
        bookDetails: request.body.bookDetails,
        address: request.body.address,
        email: request.body.email,
       };  
 
       const order = await Order.create(newOrder);
 
       return response.status(201).send(order);
    } catch(error){
       console.log(error.message);
       response.status(500).send({ message: error.message});
    }
 });
 
 //route for get all orders from database
 router.get('/', async(request, response) =>{
    try{
       const orders = await Order.find({});
       return response.status(200).json({
          count: orders.length,
          data: orders
       });
    }catch(error){
       console.log(error.message);
       response.status(500).send({message: error.message});
    }
 });
 
 
 //Route for get one order from database by id
 router.get('/:id', async(request, response) =>{
    try{
       const { id } = request.params;
       const order = await Order.findById(id);
       return response.status(200).json(order);
    }catch(error){
       console.log(error.message);
       response.status(500).send({message: error.message});
    }
 });
 
 //Route for update a order 
 router.put('/:id', async (request, response) =>{
    try{
       if(
        !request.body.customerName||
        !request.body.bookDetails||
        !request.body.address||
        !request.body.email
       ){
          return response.status(400).send({
             message: 'send all required fields: customerName,bookDetails,address,email',
          });
       }
 
    const  { id } = request.params; 
    const result = await Order.findByIdAndUpdate(id, request.body);
    if(!result){
       return response.status(404).json({ message: 'Order not found'});
    }
    return response.status(200).send({ message: 'Order updated successfully'});
 
    }catch(error){
     console.log(error.message);
     response.status(500).send({ message: error.message});  
    }
 });
 
 // Route for delete a order
 router.delete('/:id', async (request, response) =>{
    try{
       const { id } = request.params;
       const result = await Order.findByIdAndDelete(id);
       if(!result){
          return response.status(404).json({message: 'Order not found'});
       }
       return response.status(200).send({message: 'Order deleted successfully'});
    }catch(error){
       console.log(error.message);
       response.status(500).send({message: error.message});
    }
 });
 
export default router;


