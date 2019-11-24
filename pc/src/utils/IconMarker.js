
// 定义自定义覆盖物的构造函数  
function IconMarker(center, size, iconOptions, labelText, cssClass) {
  this._center = center;
  this._size = size;
  this._iconOptions = iconOptions || {};
  this._labelText = labelText
  this._cssClass = cssClass;
}
// 继承API的BMap.Overlay
IconMarker.prototype = new BMap.Overlay();

// 实现初始化方法  
IconMarker.prototype.initialize = function (map) {
  // 保存map对象实例
  this._map = map;
  // 创建div元素，作为自定义覆盖物的容器
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.zIndex = 100000
  // div.style.zIndex = BMap.Overlay.getZIndex(this._center.lat);
  // 可以根据参数设置元素外观
  div.style.width = this._size[0] + "px";
  div.style.height = this._size[1] + "px";

  if (this._cssClass) {
    div.classList.add(this._cssClass)
  }

  var imgUrl = this._iconOptions.imgUrl;
  var offsetLeft = this._iconOptions.offset[0] + 'px'
  var offsetTop = this._iconOptions.offset[1] + 'px'
  div.style.background = `url(${imgUrl}) ${offsetLeft} ${offsetTop} no-repeat`;
  div.style.backgroundColor = '#f66a2d'

  var p = document.createElement('div')
  // p.style.position = 'absoulte' 
  // p.style.left = this._size[0] + 'px'
  // p.style.bottom = this._size[1] + 'px'
  p.innerText = this._labelText
  p.style.padding = '4px 12px'
  p.border = '1px solid #aaa'
  p.classList.add('label')
  // p.style.zIndex = BMap.Overlay.getZIndex(this._center.lat) + 1;

  div.appendChild(p)
  // 将div添加到覆盖物容器中
  map.getPanes().markerPane.appendChild(div);
  // 保存div实例
  this._div = div;
  // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
  // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
  return div;
}

IconMarker.prototype.draw = function () {
  // 根据地理坐标转换为像素坐标，并设置给容器    
  var position = this._map.pointToOverlayPixel(this._center);
  this._div.style.left = position.x - this._size[0] / 2 + "px";
  this._div.style.top = position.y - this._size[1] / 2 + "px";
}

// 实现显示方法    
IconMarker.prototype.show = function () {
  if (this._div) {
    this._div.style.display = "";
  }
}
// 实现隐藏方法  
IconMarker.prototype.hide = function () {
  if (this._div) {
    this._div.style.display = "none";
  }
}

IconMarker.prototype.setAnimation = function(animationClass) {
  if (this._div) {
    this._div.classList.add(animationClass);
  }
}

IconMarker.prototype.addEventListener = function(event, handler) {
  if (this._div) {
    this._div['on' + event] = handler
  }
}

export default IconMarker