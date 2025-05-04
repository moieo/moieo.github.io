/* 小陌 */

String.prototype.replaceAll = function (exp, newStr) {
  return this.replace(new RegExp(exp, "gm"), newStr);
};

String.prototype.format = function(args) {
  var result = this;
  if (arguments.length < 1) {
    return result;
  }

  var data = arguments; // 如果模板参数是数组
  if (arguments.length == 1 && typeof (args) == "object") {
    // 如果模板参数是对象
    data = args;
  }
  for ( var key in data) {
    var value = data[key];
    if (undefined != value) {
      result = result.replaceAll("\\{" + key + "\\}", value);
    }
  }
  return result;
}

function deal(id, val) {
  document.getElementById(id).innerHTML = val;
}

var current_year = new Date().getFullYear();

window.setInterval(function () {
  var m = "/06/07 00:00:00";
  var date1 = new Date(); //开始时间
  var date2 = current_year + m; //结束时间
  var date3 = new Date(date2).getTime() - date1.getTime(); //时间差的毫秒数
  if (date3 <= 0) {
    deal('title', "距离 {name} 年高考还有".format({
      name: current_year + 1
    }));
    date2 = (current_year + 1) + m;
    date3 = new Date(date2).getTime() - date1.getTime();
  } else {
    deal('title', "距离 {name} 年高考还有".format({
      name: current_year
    }));
  }
  //计算出相差天数
  var days = Math.floor(date3 / (24 * 3600 * 1000));
  //计算出小时数
  var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);
  //alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒")
  deal('day', days);
  deal('hour', hours);
  deal('min', minutes);
  deal('sec', seconds);

  var remain = date3 / 1000;
  var total_sec = Math.floor(remain);
  var total_min = Math.floor(remain / 60);
  var total_hour = Math.floor(remain / 60 / 60);
  var total_day = Math.floor(remain / 60 / 60 / 24);

  deal('total_day', total_day);
  deal('total_hour', total_hour);
  deal('total_min', total_min);
  deal('total_sec', total_sec);
}, 1000);

function getMs(){
  var m = "/06/07 00:00:00";
  var date1 = new Date(); //开始时间
  var date2 = current_year + m; //结束时间
  var date3 = new Date(date2).getTime() - date1.getTime(); //时间差的毫秒数
  return date3;
}

(function() {
  var years = document.getElementById('years');
  for (var n = current_year; n <= current_year + 100; n++) {
    var a = document.createElement('a');
    a.href = 'javascript:current_year=' + n;
    a.innerHTML = '&nbsp;' + n + '&nbsp;';
    years.appendChild(a);
  }
})();