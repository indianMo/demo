/**
 * Created by itcast on 2017 12/05.
 */
//所有的关于食物的代码就写在这个文件中。
(function (window) {

  //声明一个数组，用来保存食物对应的div。
  var list = [];

  //创建食物，食物有宽高、定位的位置xy,背景色， 所以他是一个对象。
  //1.食物构造函数
  function Food(x,y,width,height,bgc){
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 20;
    this.height = height || 20;
    this.bgc = bgc || "green";
  }

  //3.把创建食物的代码给暴露出去
  window.Food = Food;

}(window));