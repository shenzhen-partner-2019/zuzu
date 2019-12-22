/**
 * 自定义地图圆形覆盖物
 * 覆盖物显示name和value
 */

function RoundOverlay(center, radius, type, data, cssClass) {
  this._center = center;
  this._radius = radius;
  this._type = type || 1;
  this._data = data || {}
  this._cssClass = cssClass || 'round-overlay';
}

// 继承API的BMap.Overlay
RoundOverlay.prototype = new BMap.Overlay();

RoundOverlay.prototype.initialize = function (map) {
  // 保存map对象实例
  this._map = map;
  // 创建div元素，作为自定义覆盖物的容器
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.zIndex = 1000

  // 可以根据参数设置元素外观
  div.style.width = this._radius * 2 + "px";
  div.style.height = this._radius * 2 + "px";
  div.style.borderRadius = this._radius + 'px'

  var nameDom = document.createElement("p");
  nameDom.innerText = this._data.name

  var valueDom = document.createElement("p");
  valueDom.innerText = this._data.value + '个'

  div.appendChild(nameDom)
  div.appendChild(valueDom)
  

  if (typeof this._cssClass === 'string') {
    div.classList.add(this._cssClass)
  } else if (Array.isArray(this._cssClass)) {
    if (this._cssClass.length === 0) return
    this._cssClass.forEach(item => div.classList.add(item))
  }


  // 将div添加到覆盖物容器中
  map.getPanes().markerPane.appendChild(div);
  // 保存div实例
  this._div = div;
  // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
  // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
  return div;
}

RoundOverlay.prototype.draw = function () {
  // 根据地理坐标转换为像素坐标，并设置给容器    
  var position = this._map.pointToOverlayPixel(this._center);
  this._div.style.left = position.x - this._radius + "px";
  this._div.style.top = position.y - this._radius + "px";
}

// 实现显示方法    
RoundOverlay.prototype.show = function () {
  if (this._div) {
    this._div.style.display = "";
  }
}
// 实现隐藏方法  
RoundOverlay.prototype.hide = function () {
  if (this._div) {
    this._div.style.display = "none";
  }
}

export default RoundOverlay