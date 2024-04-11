//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
const e = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

mongoose.connect("mongodb://localhost:27017/toDoListDB", {useNewUrlParser: true});

// Database Schema
const itemsSchema = new mongoose.Schema({
  name: String,
});

// Ḍatabase Collections(Coverted to plural automatically)
const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({"name":"Welcome to your To Do List"});
const item2 = new Item({"name":"Hit the + button to add a new item."});
const item3 = new Item({"name":"<-- Hit this to delete an item."});
const defaultItems = [item1, item2, item3];
 
function addDefaultItems() {  
  Item.insertMany(defaultItems, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Successfully Saved Default Items");
        }
    });
}

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema],
});

const List = new mongoose.model("List", listSchema);

app.get("/", function(req, res) {

  Item.find((err, foundItems)=>{
    if(err){
      console.log(err);
    }
    else{
      if (foundItems.length === 0) {
        addDefaultItems();     
        res.redirect("/");
      }
      // console.log(foundItems);
      const day = date.getDate();
      res.render("list", {listTitle: day, newListItems: foundItems});
    }
  });



});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;
  
  const newItem = new Item({
    name: itemName,
  });

  if(listName === date.getDate()){
    newItem.save();
    res.redirect("/");
  }
  else{
    List.findOne({name:listName}, (err, foundList)=>{
      if (!err) {
        foundList.items.push(newItem);
        foundList.save();
        res.redirect("/"+listName);
      }
    });
  }


});

app.post("/delete", (req, res)=>{
  // console.log(req.body);
  const checkedItemID = req.body.checkbox;
  Item.deleteOne(
    {_id:checkedItemID},
    (err)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log("Deleted successfully");
      }
    },
    );
  res.redirect("/");
});

app.get("/:customListName", (req, res)=>{
  // console.log(req.params.customListName);
  const customListName = req.params.customListName;

  List.findOne({name:customListName}, (err, foundList)=>{
    if(!err){
      if(!foundList){ // id foundList does'nt exist
        const list = new List({
          name:customListName,
          items:defaultItems,
        });
        list.save();
        res.redirect("/"+customListName);
      }
      else{
        res.render("list", {listTitle: foundList.name, newListItems:foundList.items})
      }
    }
  });

});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
