
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['福建省','泉州市','丰泽区'],
    now:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    //this.getWeather();
    this.getRegionID(this.data.region[1],this.getWeather);
  },

  getRegionID:function(cityname,getweatherfunc){
    var that = this;
    var regionID = '';
    wx.request({
      url:'https://geoapi.qweather.com/v2/city/lookup',
      data:{
        location:cityname,
        key:'fe0fe16568334918a90491cace24a7fd'
      },
      success:function(res){
        regionID = res.data.location[0].id;
        console.log(regionID);
        getweatherfunc(regionID);
      }
    })
    
  },

  /**
   * 获取实况天气数据
   */
  getWeather:function(regionID){
    var that = this;
    wx.request({
      url:'https://devapi.qweather.com/v7/weather/now',
      data:{
        location:regionID,
        key:'fe0fe16568334918a90491cace24a7fd'
      },
      success:function(res){
        that.setData({now:res.data.now});
      }
    })
  }, 
  
  /**
   * 更新省、市、区信息
   */
  regionChange:function(e){
    this.setData({region:e.detail.value});
    this.getRegionID(this.data.region[1],this.getWeather);
  },
})