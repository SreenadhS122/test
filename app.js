const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/users/home',(req,res) => {
    res.json("userhome");
});

app.get('/users/cart',(req,res) => {
    res.json("cart");
});

app.get('/users/orders',(req,res) => {
    res.json("orders");
});

app.get('/users/logout',(req,res) => {
    res.json("Hello user you have logged out.");
});

app.get('/admin/home',(req,res) => {
    res.json("admin home");
});

app.get('/admin/users',(req,res) => {
    res.json("user's list");
});

app.get('/admin/orders',(req,res) => {
    res.json("orders");
});

app.get('/admin/coupon',(req,res) => {
    res.json("coupons");
});

app.get('/admin/logout',(req,res) => {
    res.json("logged out");
});

app.post('/admin/edit/:userid',(req,res) => {
    res.json(req.params.userid);
});

app.post('/admin/edit/:product_id',(req,res) => {
   res.json(req.params.product_id); 
});

app.post('/admin/edit/:coupon',(req,res) => {
    res.json(req.params.coupon);
});

app.post('/users/edit/:orders',(req,res) => {
    res.json(req.params.orders);
});

app.post('/users/edit/:info',(req,res) => {
    res.json(req.params.info);
});

app.delete('/users/delete/:order',(req,res) => {
    res.json(req.params.order);
});

app.delete('/admin/delete/:user_id',(req,res) => {
    res.json(req.params.user_id);
});
app.delete('/admin/delete/:product_id',(req,res) => {
    res.json(res.params.product_id);
});

app.get('*',(req,res) => {
    res.json("Invalid url.");
});
app.listen(8080);