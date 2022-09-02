var _animation; // 动画实体
var _animationIndex = 0; // 动画执行次数index（当前执行了多少次）
var _animationIntervalId = -1; // 动画定时任务id，通过setInterval来达到无限旋转，记录id，用于结束定时任务
const _ANIMATION_TIME = 500; // 动画播放一次的时长ms
const result=[
  {
    id:1,
    title:"THE WINDY",
    image:"/images/1.png",
    text:"前进，充实，期待的暗示"
  },
  {
    id:2,
    title:"THE FLY",
    image:"/images/2.png",
    text:"挑战飞跃的机会"
  },
  {
    id:3,
    title:"THE SHADOW",
    image:"/images/3.png",
    text:"未知的部分，问题的发生与消除"
  },
  {
    id:4,
    title:"THE WATERY",
    image:"/images/4.png",
    text:"协调性，打开他人心扉的力量"
  },
  {
    id:5,
    title:"THE WOOD",
    image:"/images/5.png",
    text:"象征各自的成长与发展"
  },
  {
    id:6,
    title:"THE RAIN",
    image:"/images/6.png",
    text:"最后终究会好转"
  },
  {
    id:7,
    title:"THE JUMP",
    image:"/images/7.png",
    text:"实力发挥、最佳状态"
  },
  {
    id:8,
    title:"THE ILLUSION",
    image:"/images/8.png",
    text:"想要从现实中逃离的欲望"
  },
  {
    id:9,
    title:"THE SILENT",
    image:"/images/9.png",
    text:"思虑深远、充电期"
  },
  {
    id:10,
    title:"THE THUNDER",
    image:"/images/10.png",
    text:"若能不迷失自己，就能有幸运的发展"
  },
  {
    id:11,
    title:"THE SWORD",
    image:"/images/11.png",
    text:"真实的探求、报偿，有时是破坏力"
  },
  {
    id:12,
    title:"THE FLOWER",
    image:"/images/12.png",
    text:"成果、报酬、目标达标率很高的时期"
  },
  {
    id:13,
    title:"THE SHIELD",
    image:"/images/13.png",
    text:"保护，为了保持调和的防卫手段"
  },
  {
    id:14,
    title:"THE TIME",
    image:"/images/14.png",
    text:"各种体验的磨练、自立"
  },
  {
    id:15,
    title:"THE POWER",
    image:"/images/15.png",
    text:"愿望的实现、扩展"
  },
  {
    id:16,
    title:"THE MIST",
    image:"/images/16.png",
    text:"判定事态，决定出方向"
  },
  {
    id:17,
    title:"THE FLOAT",
    image:"/images/17.png",
    text:"由束缚中解放、自由"
  },
  {
    id:18,
    title:"THE STORM",
    image:"/images/18.png",
    text:"激烈的感情，欲求不满的消解"
  },
  {
    id:19,
    title:"THE ERASE",
    image:"/images/19.png",
    text:"运气的停滞，等一下的警告"
  },
  {
    id:20,
    title:"THE GLOW",
    image:"/images/20.png",
    text:"幸运的预兆"
  },
  {
    id:21,
    title:"THE MOVE",
    image:"/images/21.png",
    text:"意义不明"
  },
  {
    id:22,
    title:"THE FIGHT",
    image:"/images/22.png",
    text:"大转机的前兆"
  },
  {
    id:23,
    title:"THE LOOP",
    image:"/images/23.png",
    text:"连结，更上一次层楼的机会"
  },
  {
    id:24,
    title:"THE SLEEP",
    image:"/images/24.png",
    text:"休息、平稳的心境"
  },
  {
    id:25,
    title:"THE SONG",
    image:"/images/25.png",
    text:"欢喜、调和、治疗的力量"
  },
  {
    id:26,
    title:"THE LITTLE",
    image:"/images/26.png",
    text:"虽然小，却也是有意义的蜕变期"
  },
  {
    id:27,
    title:"THE MIRROR",
    image:"/images/27.png",
    text:"深切看清自己的时期"
  },
  {
    id:28,
    title:"THE MAZE",
    image:"/images/28.png",
    text:"丧失自信，混乱"
  },
  {
    id:29,
    title:"THE RETURN",
    image:"/images/29.png",
    text:"败者复活，永不放弃"
  },
  {
    id:30,
    title:"THE SHOT",
    image:"/images/30.png",
    text:"锁定目标"
  },
  {
    id:31,
    title:"THE SWEET",
    image:"/images/31.png",
    text:"新恋情、受欢迎依赖心的表现"
  },
  {
    id:32,
    title:"THE DASH",
    image:"/images/32.png",
    text:"以瞬间的爆发力得到胜利，与自己的战斗"
  },
  {
    id:33,
    title:"THE CREATE",
    image:"/images/33.png",
    text:"丰富的感受性感受力的开花结果"
  },
  {
    id:34,
    title:"THE BIG",
    image:"/images/34.png",
    text:"极大的可能性与能力，知识与的提高"
  },
  {
    id:35,
    title:"THE CHANGE",
    image:"/images/35.png",
    text:"心情的切换、浪费"
  },
  {
    id:36,
    title:"THE FREEZE",
    image:"/images/36.png",
    text:"基础能力的成型，我行我素也OK"
  },
  {
    id:37,
    title:"THE FIREY",
    image:"/images/37.png",
    text:"强烈的信条信念，突破难关"
  },
  {
    id:38,
    title:"THE ARROW",
    image:"/images/38.png",
    text:"能量的高涨、积极性"
  },
  {
    id:39,
    title:"THE SNOW",
    image:"/images/39.png",
    text:"崭新的起点、和平、纯净"
  },
  {
    id:40,
    title:"THE BUBBLES",
    image:"/images/40.png",
    text:"感情的净化，由恶性循环脱离的时机"
  },
  {
    id:41,
    title:"THE WAVE",
    image:"/images/41.png",
    text:"柔软的姿态为你带来好运气"
  }, 
  {
    id:42,
    title:"THE LIBRA",
    image:"/images/42.png",
    text:"对人生、行动、思考的比重调整"
  },
  {
    id:43,
    title:"THE THROUGH",
    image:"/images/43.png",
    text:"没有预期到的事态的好转"
  },
  {
    id:44,
    title:"THE VOICE",
    image:"/images/44.png",
    text:"想成为朋友，和睦相处的心情"
  },
  {
    id:45,
    title:"THE LOCK",
    image:"/images/45.png",
    text:"智能、英知。对真实、内心的察觉"
  },
  {
    id:46,
    title:"THE CLOUD",
    image:"/images/46.png",
    text:"你的决断将造成决定性的结果"
  },
  {
    id:47,
    title:"THE DREAM",
    image:"/images/47.png",
    text:"了解自己的机会，潜在意识的发展期"
  },
  {
    id:48,
    title:"THE SAND",
    image:"/images/48.png",
    text:"不要害怕改变，加以挑战"
  },
  {
    id:49,
    title:"THE LIGHT",
    image:"/images/49.png",
    text:"由自己来主导对未来的展望"
  },
  {
    id:50,
    title:"THE DARK",
    image:"/images/50.png",
    text:"照旧、顺着自然的发展前进"
  },
  {
    id:51,
    title:"THE TWIN",
    image:"/images/51.png",
    text:"最佳搭档的出现"
  },
  {
    id:52,
    title:"THE EARTHY",
    image:"/images/52.png",
    text:"生命的发源地，努力与包容性的象征"
  },
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    title:"THE WINDY",
    image:"/images/1.png",
    text:"前进，充实，期待的暗示",
    animation:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
    _animationIndex = 0;
    _animationIntervalId = -1;
    this.data.animation = ''; 
  },

  /**
   * 显示弹窗
   */
  buttonTap: function() {
    this.setData({
      modalHidden: false
    })
    let n=1,m=result.length;
    let aNumber=parseInt((n-m)*Math.random()+m);

    this.setData({
      text:result[aNumber].text,
      title:result[aNumber].title,
      image:result[aNumber].image
    })

  },
 
  /**
   * 点击取消
   */
  modalCandel: function() {
    // do something
    this.setData({
      modalHidden: true
    })
  },
 
  /**
   *  点击确认
   */
  modalConfirm: function() {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    _animation = wx.createAnimation({
      duration: _ANIMATION_TIME,
      timingFunction: 'linear', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0'
    })
  },

   /**
   * 实现image旋转动画，每次旋转 120*n度
   */
  rotateAni: function (n) {
    _animation.rotate(120 * (n)).step()
    this.setData({
      animation: _animation.export()
    })
  },
 
  /**
   * 开始旋转
   */
  startAnimationInterval: function () {
    var that = this;
    that.rotateAni(++_animationIndex); // 进行一次旋转
    _animationIntervalId = setInterval(function () {
      that.rotateAni(++_animationIndex);
    },  _ANIMATION_TIME); // 每间隔_ANIMATION_TIME进行一次旋转
  },
 
  /**
   * 停止旋转
   */
  stopAnimationInterval: function () {
    if (_animationIntervalId> 0) {
      clearInterval(_animationIntervalId);
      _animationIntervalId = 0;
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})