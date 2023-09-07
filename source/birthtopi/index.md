---
title: 生日查圆周率
date: 2023-01-31 17:46:10
comment: true
---

{% raw %}

<body class="bitrhtopi">
  <span>出生日期: <input type="text" id="birthday" /></span>
  <input id="submit" type="button" value="查询" />
  <div class="loader" id="loader"></div>
  <p id="result"></p>
  <style>
    .bitrhtopi span, .bitrhtopi input {
      font-size: 18px;
    }
    #birthday, #submit[type=button] {
      border-style: solid;
      border-width: 1px;
    }
    .loader {
      position: relative;
      width: 2.5em;
      height: 2.5em;
      transform: rotate(165deg);
    }
    .loader:before, .loader:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 0.5em;
      height: 0.5em;
      border-radius: 0.25em;
      transform: translate(-50%, -50%);
    }
    .loader:before {
      animation: before8 2s infinite;
    }
    .loader:after {
      animation: after6 2s infinite;
    }

    	@keyframes before8 {
    	 0% {
    	  width: 0.5em;
    	  box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    	 }

    	 35% {
    	  width: 2.5em;
    	  box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
    	 }

    	 70% {
    	  width: 0.5em;
    	  box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
    	 }

    	 100% {
    	  box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
    	 }
    	}

    	@keyframes after6 {
    	 0% {
    	  height: 0.5em;
    	  box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    	 }

    	 35% {
    	  height: 2.5em;
    	  box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
    	 }

    	 70% {
    	  height: 0.5em;
    	  box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
    	 }

    	 100% {
    	  box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
    	 }
    	}

    .loader {
      position: absolute;
      top: calc(50% - 1.25em);
      left: calc(50% - 1.25em);
    }

  </style>
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.3/jquery.min.js" ></script>
  <script>
    $(document).ready(function() {
      $('#loader').hide();
    });
    $('#submit').click(function() {
      $('#loader').show();
      $.ajax({
        url: "https://api.moieo.cn/pi/" + $('#birthday').val(),
        type: "GET",
        success: function(data) {
          $('#result').html("您的生日位于圆周率第 " + data.data.position + " 位");
        }
      });
      $('#loader').hide();
    });
  </script>
</body>
{% endraw %}
