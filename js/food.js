class Food{

constructor(x,y)
{
    this.image = loadImage("images/Milk.png");
    this.foodStock=database.ref('Food');
    this.foodStock.on("value",readStock);
}

display()
{
imageMode(CENTER);
image(this.image,150,250,70,70);
}

}