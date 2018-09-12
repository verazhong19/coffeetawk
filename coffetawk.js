
//CoffeTawk - by 'Vera Zhong' - applab, lab 1, 2018
/*Challenge 1:
1.) High demand in China compared to United States
2.) Ordering process is inefficient and slow
5.) Baristas are efficient
3.) Payment is quick via WeChat or AliPay
4.) Each order takes around a minute to place
5.) Each beverage takes about 5 minutes to craft
6.) Takes 5 minutes for customers to exit the store
6.) People take up time by asking questions
7.) Customer confusion regarding drinks upon pickup.

Challenge 2:
-  Using sensors, when value > 0, add 1 person to order queue.
-For every 1 customer in order queue, add 1 to order wait time
- When there is a payment, subtract 1 person from order queue, add 1 person to pickup queue, and subtract 1 minute to order wait time, add 5 minutes to pickup wait time.
-When there someone picks up their drink, subtract 1 person from pickup queue, subtract 5 minutes from order wait time.
-Print all values on a digital display for customers to see.

Challenge 3: */
const entrance
const store = true;
const orderQueue = 0;
const orderWaitTime = 0;
const pickupQueue = 0;
const pickupWaitTime = 0;
const alipay = true;
const weChat = true;
const pickup = true

while (store == true) {
  if (entrance>0) {
    orderQueue+1;
    orderWaitTime+1;
    console.log(orderQueue);
    console.log(orderWaitTime);
  }
  if (alipay||wechat) {
    orderQueue-1;
    orderWaitTime-1;
    pickupQueue+1;
    pickupWaitTime+5;
    console.log(pickupQueue);
    console.log(pickupWaitTime);
  }
  if (pickup) {
    pickupQueue-1;
    pickupWaitTime-5;
    console.log(pickupQueue);
    console.log(pickupWaitTime);
  }

}
