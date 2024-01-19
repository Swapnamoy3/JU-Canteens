const express = require("express");
const Item = require("../models/items");
const User = require("../models/user");
const route = express.Router();

function found(arr,x){
    for(let item of arr){
        if(item == x) return true;
    }
    return false;
}

route.get("/:itemId/",async (req,res)=>{
    const {itemId} = req.params;
    let status = false;

    if((req.user) && (!found(req.user.likedItems,itemId)) ){

        let item = await Item.findById(itemId);
        item.likes += 1;
        await item.save()//saving item with updated likes count
        
        req.user.likedItems.push(item._id);
        await User.findByIdAndUpdate(req.user._id,req.user);//saving user with updated likedItems list
        status = true;
        console.log(req.user);
        console.log(item.likes);
        return res.send({status,likes:item.likes});
    }
    else if( (req.user) && (found(req.user.likedItems,itemId)) ){
        
        let item = await Item.findById(itemId);
        item.likes += -1;
        await item.save()//saving item with updated likes count
        
        req.user.likedItems = req.user.likedItems.filter((ele)=>ele!=itemId) ;
        await User.findByIdAndUpdate(req.user._id,req.user);//saving user with updated likedItems list
        status = false;
        console.log(req.user);  

        return res.send({status,likes:item.likes});
    }
    
    
    
    res.send({status});


        

})

module.exports = route