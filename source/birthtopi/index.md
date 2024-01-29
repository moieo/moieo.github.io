---
title: 生日查圆周率
date: 2023-01-31 17:46:10
comment: true
---

{% raw %}

<body class="bitrhtopi">
  <div id="loader" class="loader" hidden></div>
  <span>出生日期: <input type="text" id="birthday" /></span>
  <input id="submit" type="button" value="查询" />
  <p id="result"></p>
  <style>
    .bitrhtopi span, .bitrhtopi input {
      font-size: 18px;
      position: absition;
    }
    #birthday, #submit[type=button] {
      border-style: solid;
      border-width: 1px;
    }

    .loader {
  width: 15px;
  aspect-ratio: 1.154;
  position: relative;
  background: conic-gradient(from 120deg at 50% 64%,#0000, #ff1919 1deg 120deg,#0000 121deg);
  animation: l27-0 1.5s infinite cubic-bezier(0.3,1,0,1);
}

.loader:before,
.loader:after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  transform-origin: 50% 66%;
  animation: l27-1 1.5s infinite;
}

.loader:after {
  --s: -1;
}

@keyframes l27-0 {
  0%,30% {
    transform: rotate(0)
  }

  70% {
    transform: rotate(120deg)
  }

  70.01%,100% {
    transform: rotate(360deg)
  }
}

@keyframes l27-1 {
  0% {
    transform: rotate(calc(var(--s,1)*120deg)) translate(0)
  }

  30%,70% {
    transform: rotate(calc(var(--s,1)*120deg)) translate(calc(var(--s,1)*-5px),10px)
  }

  100% {
    transform: rotate(calc(var(--s,1)*120deg)) translate(0)
  }
}

  </style>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.min.js" ></script>
  <script>
    $('#submit').click(function() {
      $('#loader').show();
      $.ajax({
        url: "https://api.moieo.cn/pi/" + $('#birthday').val(),
        type: "GET",
        success: function(data) {
          $('#result').html("您的生日位于圆周率第 " + data.data.position + " 位");
          $('#loader').hide();
        }
      });
    });
  </script>
</body>
{% endraw %}
