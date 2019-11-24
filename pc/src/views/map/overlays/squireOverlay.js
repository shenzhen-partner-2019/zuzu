/**
 * 自定义地图方形覆盖物
 * 覆盖物显示value
 */

function SquireOverlay(center, type, data, cssClass) {
  this._center = center;
  this._type = type || 1;
  this._data = data || {}
  this._cssClass = cssClass || 'squire-overlay';
}

// 继承API的BMap.Overlay
SquireOverlay.prototype = new BMap.Overlay();

SquireOverlay.prototype.initialize = function (map) {
  // 保存map对象实例
  this._map = map;
  // 创建div元素，作为自定义覆盖物的容器
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = '22px'
  div.style.lineHeight = '22px'


  div.innerText = this._data.price + '元';

  var infoDom = document.createElement("div");
  infoDom.style.position = 'absolute'
  infoDom.style.bottom = '22px';
  infoDom.style.left = 0
  infoDom.classList.add('info-wrapper')

  // 图片区域
  var imgWrapper = document.createElement('div')
  imgWrapper.style.position = 'relative'

  var img = document.createElement('img')
  img.src = this._data.imgUrl

  var priceDom = document.createElement('div')
  priceDom.style.position = 'absolute'
  priceDom.style.bottom = 0;
  priceDom.style.left = 0
  priceDom.classList.add('price')
  priceDom.innerText = this._data.price + '元';

  imgWrapper.appendChild(img)
  imgWrapper.appendChild(priceDom)

  var titleDom = document.createElement('p')
  titleDom.classList.add('title')
  titleDom.innerText = this._data.title

  var areDom = document.createElement('p')
  areDom.classList.add('area')
  areDom.innerText = '可租面积:' + this._data.area

  infoDom.appendChild(imgWrapper)
  infoDom.appendChild(titleDom)
  infoDom.appendChild(areDom)
  div.appendChild(infoDom)

  if (this._cssClass) {
    div.classList.add(this._cssClass)
  }


  // 将div添加到覆盖物容器中
  map.getPanes().markerPane.appendChild(div);
  // 保存div实例
  this._div = div;
  // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
  // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
  return div;
}


SquireOverlay.prototype.draw = function () {
  // 根据地理坐标转换为像素坐标，并设置给容器    
  var position = this._map.pointToOverlayPixel(this._center);
  this._div.style.left = position.x -20 + "px";
  this._div.style.top = position.y - 20 + "px";
}

// 实现显示方法    
SquireOverlay.prototype.show = function () {
  if (this._div) {
    this._div.style.display = "";
  }
}
// 实现隐藏方法  
SquireOverlay.prototype.hide = function () {
  if (this._div) {
    this._div.style.display = "none";
  }
}

export default SquireOverlay